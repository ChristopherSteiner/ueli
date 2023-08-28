import { normalize } from "path";
import type { SearchIndex } from "../../SearchIndex";
import type { SettingsManager } from "../../Settings/SettingsManager";
import { CommandlineUtility, FileIconUtility } from "../../Utilities";
import type { Plugin } from "../Plugin";
import { PluginDependencies } from "../PluginDependencies";
import { Application } from "./Application";
import type { Settings } from "./Settings";

export class MacOsApplicationSearch implements Plugin {
    private static readonly PluginId = "MacOsApplicationSearch";

    private static readonly DefaultSettings: Settings = {
        folders: ["/System/Applications/", "/Applications/"],
    };

    private searchIndex: SearchIndex;
    private settingsManager: SettingsManager;

    public constructor({ searchIndex, settingsManager }: PluginDependencies) {
        this.searchIndex = searchIndex;
        this.settingsManager = settingsManager;
    }

    public async addSearchResultItemsToSearchIndex(): Promise<void> {
        const filePaths = await this.getAllFilePaths();
        const icons = await this.getAllIcons(filePaths);

        const searchResultItems = filePaths
            .map((filePath) => Application.fromFilePathAndIcon({ filePath, iconDataUrl: icons[filePath] }))
            .map((application) => application.toSearchResultItem());

        this.searchIndex.addSearchResultItems(MacOsApplicationSearch.PluginId, searchResultItems);
    }

    private async getAllFilePaths(): Promise<string[]> {
        return (await CommandlineUtility.executeCommandWithOutput(`mdfind "kMDItemKind == 'Application'"`))
            .split("\n")
            .map((filePath) => normalize(filePath).trim())
            .filter((filePath) =>
                this.settingsManager
                    .getPluginSettingByKey<string[]>(
                        MacOsApplicationSearch.PluginId,
                        "folders",
                        MacOsApplicationSearch.DefaultSettings.folders,
                    )
                    .some((applicationFolder) => filePath.startsWith(applicationFolder)),
            )
            .filter((filePath) => [".", ".."].indexOf(filePath) === -1);
    }

    private async getAllIcons(filePaths: string[]): Promise<Record<string, string>> {
        const result: Record<string, string> = {};

        const promiseResults = await Promise.allSettled(
            filePaths.map((filePath) => FileIconUtility.getIconDataUrlFromFilePath(filePath)),
        );

        for (const promiseResult of promiseResults) {
            if (promiseResult.status === "fulfilled") {
                result[promiseResult.value.filePath] = promiseResult.value.dataUrl;
            }
        }

        return result;
    }
}

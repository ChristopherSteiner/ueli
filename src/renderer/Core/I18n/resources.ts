import type { InitOptions } from "i18next";
import * as Core from "./Core";
import * as Extensions from "./Extensions";

export const resources: InitOptions["resources"] = {
    "en-US": {
        general: Core.general["en-US"],
        search: Core.search["en-US"],
        settingsGeneral: Core.settingsGeneral["en-US"],
        settingsAppearance: Core.settingsAppearance["en-US"],
        settingsDebug: Core.settingsDebug["en-US"],
        settingsAbout: Core.settingsAbout["en-US"],
        settingsExtensions: Core.settingsExtensions["en-US"],
        settingsSearchEngine: Core.settingsSearchEngine["en-US"],
        settingsWindow: Core.settingsWindow["en-US"],
        searchResultItemAction: Core.searchResultItemAction["en-US"],
        "extension[ApplicationSearch]": Extensions.extensionApplicationSearch["en-US"],
        "extension[AppearanceSwitcher]": Extensions.extensionAppearanceSwitcher["en-US"],
        "extension[UeliCommand]": Extensions.extensionUeliCommand["en-US"],
        "extension[DeeplTranslator]": Extensions.extensionDeeplTranslator["en-US"],
        "extension[SystemSettings]": Extensions.extensionSystemSettings["en-US"],
        "extension[BrowserBookmarks]": Extensions.extensionBrowserBookmarks["en-US"],
        "extension[WebSearch]": Extensions.extensionWebSearch["en-US"],
    },
    "de-CH": {
        general: Core.general["de-CH"],
        search: Core.search["de-CH"],
        settingsGeneral: Core.settingsGeneral["de-CH"],
        settingsAppearance: Core.settingsAppearance["de-CH"],
        settingsDebug: Core.settingsDebug["de-CH"],
        settingsAbout: Core.settingsAbout["de-CH"],
        settingsExtensions: Core.settingsExtensions["de-CH"],
        settingsSearchEngine: Core.settingsSearchEngine["de-CH"],
        settingsWindow: Core.settingsWindow["de-CH"],
        searchResultItemAction: Core.searchResultItemAction["de-CH"],
        "extension[ApplicationSearch]": Extensions.extensionApplicationSearch["de-CH"],
        "extension[AppearanceSwitcher]": Extensions.extensionAppearanceSwitcher["de-CH"],
        "extension[UeliCommand]": Extensions.extensionUeliCommand["de-CH"],
        "extension[DeeplTranslator]": Extensions.extensionDeeplTranslator["de-CH"],
        "extension[SystemSettings]": Extensions.extensionSystemSettings["de-CH"],
        "extension[BrowserBookmarks]": Extensions.extensionBrowserBookmarks["de-CH"],
        "extension[WebSearch]": Extensions.extensionWebSearch["de-CH"],
    },
};

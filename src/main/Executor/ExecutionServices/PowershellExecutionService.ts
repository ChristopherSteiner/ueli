import type { CommandlineUtility } from "@common/CommandlineUtility";
import type { SearchResultItem } from "@common/SearchResultItem";
import type { ExecutionService } from "./ExecutionService";

export class PowershellExecutionService implements ExecutionService {
    public constructor(private readonly commandlineUtility: CommandlineUtility) {}

    public execute(searchResultItem: SearchResultItem): Promise<void> {
        return this.commandlineUtility.executeCommand(
            `powershell -Command "& {${searchResultItem.executionServiceArgument}}"`,
        );
    }
}
import {CWD} from "./cwd.js";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function cdFunc(pathToDirectory) {
    if (!pathToDirectory) {
        return printLine('Invalid input');
    }
    let result = resolvePath(pathToDirectory)
    process.chdir(result)
    CWD.cwd = result
}

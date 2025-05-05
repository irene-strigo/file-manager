import path from "path";
import {CWD} from "./cwd.js";

export function resolvePath(pathToDirectory) {
    let result = CWD.cwd
    if (!pathToDirectory) {
        return result;
    }
    if (path.isAbsolute(pathToDirectory)) {
        return pathToDirectory;
    }
    return path.resolve(CWD.cwd + path.sep + pathToDirectory)
}

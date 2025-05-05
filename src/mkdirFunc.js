import {mkdir} from "node:fs";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function mkdirFunc(dirName){
    if (!dirName) {
        return printLine('Invalid input');
    }
    const resolvedDirName = resolvePath(dirName)
    mkdir(resolvedDirName, { recursive: true }, (err) => {
        if (err) throw err;
    });
}

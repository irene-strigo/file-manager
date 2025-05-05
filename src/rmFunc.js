import {rm} from "node:fs";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function rmFunc(pathToFile){
    if (!pathToFile) {
        return printLine('Invalid input');
    }
    const resolvedPathToFile = resolvePath(pathToFile)
    rm(resolvedPathToFile, function(error,data){
        if(error) {
            throw error;
        }
    });
}

import {rename} from "node:fs";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function rnFunc(oldName, newName){
    if (!oldName) {
        return printLine('Invalid input');
    }
    if (!newName) {
        return printLine('Invalid input');
    }
    const resolvedOldName = resolvePath(oldName)
    const resolvedNewName = resolvePath(newName)
    rename(resolvedOldName, resolvedNewName, (error) => {
        if (error) {
            throw error
        }
    });
}

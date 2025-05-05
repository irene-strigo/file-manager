import {access, writeFile} from "node:fs";
import fs from "fs";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function addFunc (newFileName) {
    if (!newFileName) {
        return printLine('Invalid input');
    }
    const resolvedPathToFile = resolvePath(newFileName)
    access(resolvedPathToFile, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if (err) {
            throw err;
        }
        writeFile(resolvedPathToFile, '', err => {
            if (err) {
                throw err;
            }
        });
    });
}

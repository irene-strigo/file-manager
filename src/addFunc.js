import {access, writeFile} from "node:fs";
import fs from "fs";

export function addFunc (newFileName) {
    access(newFileName, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        writeFile(newFileName, '', err => {
            if (err) {
                throw new Error('FS operation failed');
            }
        });
    });
}

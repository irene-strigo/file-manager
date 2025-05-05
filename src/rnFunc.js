import {rename} from "node:fs";

export function rnFunc(oldName, newName){
    rename(oldName, newName, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });
}

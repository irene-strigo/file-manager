import {mkdir} from "node:fs";

export function mkdirFunc(dirName){
    mkdir(dirName, { recursive: true }, (err) => {
        if (err) console.log('FS operation failed');
    });
}

import {rm} from "node:fs";

export function rmFunc(pathToFile){
    rm(pathToFile, function(error,data){
        if(error) {
            console.log('FS operation failed');
        }
    });
}

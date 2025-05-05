import {createReadStream} from "node:fs";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function catFunc(pathToFile) {
    if (!pathToFile) {
        return printLine('Invalid input');
    }
    let data = ''
    const resolvedPathToFile = resolvePath(pathToFile)
    const readerStream = createReadStream(resolvedPathToFile);
    readerStream.on('error', function(e){throw e})
    readerStream.on('data', function(chunk) {
        data += chunk
    });
    readerStream.on('end', function() {
        printLine(data);
    })
}

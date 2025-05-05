import {createReadStream, createWriteStream} from "node:fs";
import {resolvePath} from "./resolvePath.js";
import {printLine} from "./printLine.js";

export function cpFunc(pathToFile, pathToNewDirectory){
    if (!pathToFile) {
        return printLine('Invalid input');
    }
    if (!pathToNewDirectory) {
        return printLine('Invalid input');
    }
    const resolvedPathToFile = resolvePath(pathToFile)
    const resolvedPathToNewDirectory = resolvePath(pathToNewDirectory)
    const readerStream = createReadStream(resolvedPathToFile);
    readerStream.on('error', function(e){throw e})
    const writerStream = createWriteStream(resolvedPathToNewDirectory);
    readerStream.pipe(writerStream);
}

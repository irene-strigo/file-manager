import {createReadStream, createWriteStream} from "node:fs";

export function cpFunc(pathToDirectory, pathToNewDirectory){
    let data = ''
    const readerStream = createReadStream(pathToDirectory);
    readerStream.on('error', function(e){console.log('error in path')})
    readerStream.on('data', function(chunk) {
        data += chunk
    });
    const writerStream = createWriteStream(pathToNewDirectory);
    readerStream.pipe(writerStream);
}

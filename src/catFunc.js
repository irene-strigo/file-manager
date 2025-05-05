import {createReadStream} from "node:fs";

export function catFunc(pathToDirectory) {
    let data = ''
    const readerStream = createReadStream(pathToDirectory);
    readerStream.on('error', function(e){console.log('error in path')})
    readerStream.on('data', function(chunk) {
        data += chunk
    });
    readerStream.on('end', function() {
        process.stdout.write(data);
        console.log()
    })
}

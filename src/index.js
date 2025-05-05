import os from "os";
import path from "path";
import {addFunc} from "./addFunc.js";
import {rmFunc} from "./rmFunc.js";
import {catFunc} from "./catFunc.js";
import {mkdirFunc} from "./mkdirFunc.js";
import {osFunc} from "./osFunc.js";
import {cpFunc} from "./cpFunc.js";
import {rnFunc} from "./rnFunc.js";

function exit(userName) {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
    process.exit()
}

let CWD = os.homedir();

function prompt() {
    console.log(`You are currently in ${CWD}`);
}

function upFunc() {
    CWD = path.resolve(CWD + './../')
    process.chdir(CWD)
}

function cdFunc(pathToDirectory) {
    if (!pathToDirectory) {
        return console.log('error occured');
    }
    let result = CWD
    if (path.isAbsolute(pathToDirectory)) {
        result = pathToDirectory;
    } else {
        result = path.resolve(CWD + path.sep + pathToDirectory)
    }
    process.chdir(result)
    CWD = result
}

function greeting(userName) {
    console.log(`Welcome to the File Manager, ${userName}!`)
}

const commands = {
    os: osFunc,
    up: upFunc,
    cd: cdFunc,
    cat: catFunc,
    add: addFunc,
    rm: rmFunc,
    mkdir: mkdirFunc,
    rn: rnFunc,
    cp:cpFunc,
    //mv:mvFunc,
}

const fileManager = () => {
    const userName = process.argv.find(arg => arg.startsWith('--username='))?.split('=').pop() || process.env.USERNAME
    greeting(userName)
    process.chdir(CWD)
    prompt()


    process.stdin.on("data", (data) => {
        const [command, ...args] = data.toString().trim().split(' ')
        //console.log('splitted', command, args)
        if (command === '.exit') {
            return exit(userName)
        }

        const func = commands[command]
        if (!func) {
            console.log('functionerr')
        } else {
            try {
                func(...args)
            } catch (_error) {
                console.log('Operation failed')
            }
        }
        prompt()
        process.stdin.resume()
    })

    process.on('SIGINT', function () {
        exit(userName);

    });

}

fileManager();

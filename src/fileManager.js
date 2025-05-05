import {addFunc} from "./addFunc.js";
import {rmFunc} from "./rmFunc.js";
import {catFunc} from "./catFunc.js";
import {mkdirFunc} from "./mkdirFunc.js";
import {osFunc} from "./osFunc.js";
import {cpFunc} from "./cpFunc.js";
import {rnFunc} from "./rnFunc.js";
import {CWD} from "./cwd.js";
import {cdFunc} from "./cdFunc.js";
import {upFunc} from "./upFunc.js";
import {printLine} from "./printLine.js";

function exit(userName) {
    printLine(`Thank you for using File Manager, ${userName}, goodbye!`)
    process.exit()
}

function prompt() {
    printLine(`You are currently in ${CWD.cwd}`);
}

function greeting(userName) {
    printLine(`Welcome to the File Manager, ${userName}!`)
    printLine('You can use the following commands:')
    printLine('up')
    printLine('cd path_to_directory')
    printLine('ls')
    printLine('cat path_to_file')
    printLine('add new_file_name')
    printLine('mkdir new_directory_name')
    printLine('rn path_to_file new_filename')
    printLine('cp path_to_file path_to_new_directory')
    printLine('mv path_to_file path_to_new_directory')
    printLine('rm path_to_file')
    printLine('os --EOL')
    printLine('os --cpus')
    printLine('os --homedir')
    printLine('os --username')
    printLine('os --architecture')
    printLine('hash path_to_file')
    printLine('compress path_to_file path_to_destination')
    printLine('decompress path_to_file path_to_destination')
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
    cp: cpFunc,
    //mv:mvFunc,
}

export const fileManager = () => {
    // arguments may lost when running script on Windows in PowerShell
    // see https://github.com/npm/cli/issues/3136
    const userName = process.argv.find(arg => arg.startsWith('--username='))?.split('=').pop() || process.env.USERNAME
    greeting(userName)
    process.chdir(CWD.cwd)
    prompt()

    process.stdin.on("data", (data) => {
        const [command, ...args] = data.toString().trim().split(' ')

        if (command === '.exit') {
            return exit(userName)
        }

        const func = commands[command]
        if (!func) {
            printLine('Invalid input')
        } else {
            try {
                func(...args)
            } catch (_error) {
                printLine('Operation failed')
            }
        }
        prompt()
        process.stdin.resume()
    })

    process.on('SIGINT', function () {
        exit(userName);
    });
}

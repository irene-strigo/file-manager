function exit(userName) {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
}

function os(action) {
    // todo
}

function greeting(userName) {
    console.log(`Welcome to the File Manager, ${userName}!`)
}


const commands = {
    'os': os,
}



const fileManager = () => {
    const userName = process.env.USERNAME
    greeting(userName)


    process.stdin.on("data", (data) => {

        console.log(`You typed ${data}`);

        const [command, ...args] = data.split(' ')

        if (command === '.exit') {
            exit(userName)
        }

        const func = commands[command]
        if (!func) {
            console.log('err')
        }

        func(...args)

    })

    process.on('SIGINT', function() {
        exit(userName);

    });

}

fileManager();

/*const fileManager = async () => {
const userName = process.env.USERNAME
    console.log(`Welcome to the File Manager, ${userName}!`)


        process.stdin.on("data", (data) => {

            console.log(`You typed ${data}`);


    })

    process.on('exit', (code) => {
        return console.log(`Thank you for using File Manager, ${userName}, goodbye!`)

    });
    process.on('SIGINT', function() {
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);

    });

}

await fileManager();*/

import os from "os";

export function osFunc(action) {
    if (!action || !action.startsWith('--')) {
        return console.log('error occured');
    }

    const mapping = {
        '--architecture': 'arch',
        '--username': 'userInfo',
    }

    const prop = mapping [action] || action.slice(2)
    const propValue = os[prop];
    const result = typeof propValue === 'function'
        ? propValue() :
        JSON.stringify(propValue)

    console.log('result is', action === '--username' ? result.username : result);
}

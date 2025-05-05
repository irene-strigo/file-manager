import os from "os";
import {printLine} from "./printLine.js";

export function osFunc(action) {
    if (!action || !action.startsWith('--')) {
        return printLine('Invalid input');
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

    printLine('result is', action === '--username' ? result.username : result);
}

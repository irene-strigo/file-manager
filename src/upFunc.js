import {CWD} from "./cwd.js";
import {resolvePath} from "./resolvePath.js";

export function upFunc() {
    CWD.cwd = resolvePath('./../')
    process.chdir(CWD.cwd)
}

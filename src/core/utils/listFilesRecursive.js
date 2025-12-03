import fs from "fs";
import path from "path";

export function listFilesRecursive(dir, list = []) {
    const files = fs.readdirSync(dir);

    for (let f of files) {
        const full = path.join(dir, f);
        if (fs.lstatSync(full).isDirectory()) {
            if (f !== "data" && f !== "node_modules") {
                listFilesRecursive(full, list);
            }
        } else {
            list.push(full);
        }
    }
    return list;
}

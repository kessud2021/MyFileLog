import fs from "fs-extra";
import path from "path";

export async function copyProjectFiles(dest) {
    const root = process.cwd();
    const items = fs.readdirSync(root);

    for (let item of items) {
        if (item === "data" || item === "node_modules") continue;
        await fs.copy(path.join(root, item), path.join(dest, item));
    }
}

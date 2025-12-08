import path from "path";
import { listFilesRecursive } from "../utils/listFilesRecursive.js";
import { fileHash } from "../utils/fileHash.js";
import fs from "fs";

export function status() {
    const root = process.cwd();
    const versionsDir = path.join(root, "data", "versions");
    const metadata = JSON.parse(fs.readFileSync(path.join(root, "data", "metadata.json")));

    if (metadata.length === 0) {
        console.log("No commits yet.");
        return;
    }

    const lastVersion = metadata[metadata.length - 1].id;
    const lastSnapshot = path.join(versionsDir, lastVersion);

    const currentFiles = listFilesRecursive(root);
    let changed = [];

    currentFiles.forEach(file => {
        const relative = path.relative(root, file);

        const oldFile = path.join(lastSnapshot, relative);

        const newHash = fileHash(file);
        const oldHash = fileHash(oldFile);

        if (newHash !== oldHash) {
            changed.push(relative);
        }
    });

    if (changed.length === 0) console.log("Nothing changed.");
    else {
        console.log("Changed files:");
        changed.forEach(f => console.log("•", f));
    }
}

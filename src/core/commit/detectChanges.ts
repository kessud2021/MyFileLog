import { listFilesRecursive } from "../utils/listFilesRecursive.js";
import { fileHash } from "../utils/fileHash.js";
import path from "path";

export function detectChanges(previousVersionPath) {
    const root = process.cwd();
    const oldFiles = listFilesRecursive(previousVersionPath);
    const newFiles = listFilesRecursive(root);

    let changes = [];

    for (let file of newFiles) {
        const relative = path.relative(root, file);
        const oldFile = path.join(previousVersionPath, relative);

        const newHash = fileHash(file);
        const oldHash = fileHash(oldFile);

        if (newHash !== oldHash) {
            changes.push(relative);
        }
    }

    return changes;
}

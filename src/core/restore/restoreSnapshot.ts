import fs from "fs-extra";
import path from "path";

export async function restoreSnapshot(versionId) {
    const root = process.cwd();
    const versionPath = path.join(root, "data", "versions", versionId);

    if (!fs.existsSync(versionPath)) {
        console.log("Version not found.");
        return;
    }

    const items = fs.readdirSync(versionPath);

    for (let item of items) {
        await fs.copy(
            path.join(versionPath, item),
            path.join(root, item),
            { overwrite: true }
        );
    }

    console.log("Restored version:", versionId);
}

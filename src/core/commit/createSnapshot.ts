import fs from "fs-extra";
import path from "path";
import { copyProjectFiles } from "../utils/copyProjectFiles.js";
import { saveVersionMetadata } from "./saveVersionMetadata.js";

export async function createSnapshot(message) {
    const versionId = Date.now().toString();
    const versionPath = path.join(process.cwd(), "data", "versions", versionId);

    await fs.mkdir(versionPath);
    await copyProjectFiles(versionPath);

    saveVersionMetadata(versionId, message);

    console.log("Snapshot saved:", versionId);
}

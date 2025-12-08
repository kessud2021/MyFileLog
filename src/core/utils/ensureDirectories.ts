import fs from "fs";
import path from "path";

export function ensureDirectories() {
    const dataDir = path.join(process.cwd(), "data");
    const versionsDir = path.join(dataDir, "versions");
    const metadataFile = path.join(dataDir, "metadata.json");

    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    if (!fs.existsSync(versionsDir)) fs.mkdirSync(versionsDir);
    if (!fs.existsSync(metadataFile)) fs.writeFileSync(metadataFile, "[]");
}

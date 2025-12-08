import fs from "fs";
import path from "path";

export function loadMetadata() {
    const metadataFile = path.join(process.cwd(), "data", "metadata.json");
    return JSON.parse(fs.readFileSync(metadataFile, "utf8"));
}

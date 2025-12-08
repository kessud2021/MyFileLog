import fs from "fs";
import path from "path";

export function saveMetadata(data) {
    const metadataFile = path.join(process.cwd(), "data", "metadata.json");
    fs.writeFileSync(metadataFile, JSON.stringify(data, null, 2));
}
    

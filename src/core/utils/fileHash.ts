import crypto from "crypto";
import fs from "fs";

export function fileHash(filePath) {
    if (!fs.existsSync(filePath)) return null;
    const data = fs.readFileSync(filePath);
    return crypto.createHash("sha256").update(data).digest("hex");
}

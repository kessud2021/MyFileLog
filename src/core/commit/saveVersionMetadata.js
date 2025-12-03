import { loadMetadata } from "../metadata/loadMetadata.js";
import { saveMetadata } from "../metadata/saveMetadata.js";

export function saveVersionMetadata(versionId, message) {
    const md = loadMetadata();

    md.push({
        id: versionId,
        message,
        date: new Date().toLocaleString()
    });

    saveMetadata(md);
}

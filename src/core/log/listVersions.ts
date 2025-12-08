import { loadMetadata } from "../metadata/loadMetadata.js";

export function listVersions() {
    const list = loadMetadata();

    console.log("=== Version Log ===");
    list.forEach(v => {
        console.log(`ID: ${v.id}`);
        console.log(`Message: ${v.message}`);
        console.log(`Date: ${v.date}`);
        console.log("----------------------");
    });
}

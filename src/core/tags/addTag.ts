import fs from "fs";
import path from "path";

export function addTag(tag, versionId) {
    const tagFile = path.join(process.cwd(), "data", "tags.json");

    let tags = {};
    if (fs.existsSync(tagFile)) {
        tags = JSON.parse(fs.readFileSync(tagFile));
    }

    tags[tag] = versionId;
    fs.writeFileSync(tagFile, JSON.stringify(tags, null, 2));

    console.log(`Tagged version ${versionId} as '${tag}'`);
}

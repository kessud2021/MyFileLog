import fs from "fs-extra";
import path from "path";

export async function pull(remotePath) {
    const local = path.join(process.cwd(), "data");
    await fs.copy(remotePath, local, { overwrite: true });
    console.log("Pulled from remote:", remotePath);
}

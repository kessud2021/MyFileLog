import fs from "fs-extra";
import path from "path";

export async function push(remotePath) {
    const local = path.join(process.cwd(), "data");
    await fs.copy(local, remotePath, { overwrite: true });
    console.log("Pushed to remote:", remotePath);
}

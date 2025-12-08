import { ensureDirectories } from "../utils/ensureDirectories.js";

export function initRepo() {
    ensureDirectories();
    console.log("MyFileLog initialized.");
}

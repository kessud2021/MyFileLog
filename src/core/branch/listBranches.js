import fs from "fs";
import path from "path";

export function listBranches() {
    const branchesFile = path.join(process.cwd(), "data", "branches.json");

    if (!fs.existsSync(branchesFile)) {
        console.log("No branches.");
        return;
    }

    const branches = JSON.parse(fs.readFileSync(branchesFile));

    console.log("Branches:");
    branches.forEach(b => console.log("•", b));
}

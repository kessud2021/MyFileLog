import fs from "fs";
import path from "path";

export function createBranch(name) {
    const branchesFile = path.join(process.cwd(), "data", "branches.json");

    let branches = [];
    if (fs.existsSync(branchesFile)) {
        branches = JSON.parse(fs.readFileSync(branchesFile));
    }

    if (branches.includes(name)) {
        console.log("Branch already exists.");
        return;
    }

    branches.push(name);
    fs.writeFileSync(branchesFile, JSON.stringify(branches, null, 2));

    fs.writeFileSync(path.join(process.cwd(), "data", "current_branch.txt"), name);

    console.log("Created & switched to branch:", name);
}

import fs from "fs";
import path from "path";

export function switchBranch(name) {
    const branchesFile = path.join(process.cwd(), "data", "branches.json");

    if (!fs.existsSync(branchesFile)) return console.log("No branches exist.");

    const branches = JSON.parse(fs.readFileSync(branchesFile));

    if (!branches.includes(name)) return console.log("Branch does not exist.");

    fs.writeFileSync(path.join(process.cwd(), "data", "current_branch.txt"), name);

    console.log("Switched to branch:", name);
}

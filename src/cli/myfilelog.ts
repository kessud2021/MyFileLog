#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- Core Imports ----------------
import { initRepo } from "../core/init/initRepo.js";
import { createSnapshot } from "../core/commit/createSnapshot.js";
import { listVersions } from "../core/log/listVersions.js";
import { restoreSnapshot } from "../core/restore/restoreSnapshot.js";
import { createBranch } from "../core/branch/createBranch.js";
import { listBranches } from "../core/branch/listBranches.js";
import { switchBranch } from "../core/branch/switchBranch.js";
import { status } from "../core/status/status.js";
import { addTag } from "../core/tags/addTag.js";
import { push } from "../core/remote/push.js";
import { pull } from "../core/remote/pull.js";

// ---------------- Helper Function ----------------
async function handleCommand(input) {
    const args = input.trim().split(" ");
    const cmd = args[0];

    switch (cmd) {
        case "init":
            initRepo();
            break;

        case "commit":
            await createSnapshot(args.slice(1).join(" ") || "No message");
            break;

        case "log":
            listVersions();
            break;

        case "restore":
            if (!args[1]) console.log("❌ Please provide a version ID to restore.");
            else await restoreSnapshot(args[1]);
            break;

        case "branch":
            if (!args[1]) console.log("❌ Please provide a branch name.");
            else createBranch(args[1]);
            break;

        case "branches":
            listBranches();
            break;

        case "switch":
            if (!args[1]) console.log("❌ Please provide a branch name to switch.");
            else switchBranch(args[1]);
            break;

        case "status":
            status();
            break;

        case "tag":
            if (!args[1] || !args[2]) console.log("❌ Usage: tag <tagName> <versionId>");
            else addTag(args[1], args[2]);
            break;

        case "push":
            if (!args[1]) console.log("❌ Please provide a remote path to push.");
            else await push(args[1]);
            break;

        case "pull":
            if (!args[1]) console.log("❌ Please provide a remote path to pull.");
            else await pull(args[1]);
            break;

        case "help":
            console.log(`
================ MyFileLog CLI =================
Commands: init, commit, log, restore <id>, branch <name>, branches,
switch <name>, status, tag <tagName> <versionId>, push <path>, pull <path>, exit
=================================================
            `);
            break;

        case "exit":
            console.log("Exiting MyFileLog CLI...");
            process.exit(0);
            break;

        default:
            console.log("❌ Unknown command. Type 'help' for a list of commands.");
    }
}

// ---------------- Interactive CLI ----------------
console.log("=== MyFileLog CLI ===");
console.log("Type a command. Type 'help' for commands, 'exit' to quit.\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

rl.prompt();

rl.on("line", async (line) => {
    await handleCommand(line);
    rl.prompt();
});

rl.on("close", () => {
    console.log("\nCLI closed. Bye!");
    process.exit(0);
});

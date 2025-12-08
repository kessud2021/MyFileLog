#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command-line arguments
const args = process.argv.slice(2);

// Import and run CLI
const cliPath = path.join(__dirname, "cli", "myfilelog.js");
const { spawn } = await import("child_process");

// Run the CLI file with the same arguments
const child = spawn("node", [cliPath, ...args], {
    stdio: "inherit"
});

child.on("exit", (code) => {
    process.exit(code);
});


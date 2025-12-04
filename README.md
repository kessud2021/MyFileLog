![MyFileLog Logo](file_0000000024907207a545e0a95f1d5781.png)




# MyFileLog

MyFileLog is a simple, interactive CLI tool to manage logs, snapshots, branches, tags, and remote pushes/pulls for your project. It works entirely in Node.js and keeps your project history organized.

---

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Project Structure](#project-structure)
- [Notes](#notes)

---

## **Installation**

1. Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).  
2. Clone the repository or copy files into your workspace:

```bash
git clone https://github.com/kessud2021/myfilelog.git
cd myfilelog
```

Install dependencies:

```
npm install
```

### Usage

Run the CLI:

```
node src/cli/myfilelog.js
```

Or, if you added an index.js entry:

```
node index.js
```

You will see an interactive prompt:

```
=== MyFileLog CLI ===
Type a command. Type 'help' for commands, 'exit' to quit.
>
```


Type commands and press Enter.

## Commands
Core Commands
**Command	Description**
```
init	Initialize a new repository (creates data folders and metadata)
commit "message"	Create a new snapshot of all project files with a commit message
log	List all snapshots/commits with ID, message, and date
restore <versionId>	Restore project files from a specific snapshot by its version ID
status	Show a list of files that have changed since the last snapshot
Branch Commands
Command	Description
branch <name>	Create a new branch and switch to it
branches	List all existing branches
switch <name>	Switch to an existing branch
Tag Commands
Command	Description
tag <tagName> <versionId>	Assign a tag to a specific snapshot/version
Remote Commands
Command	Description
push <remotePath>	Copy your local snapshots to a remote location
pull <remotePath>	Pull snapshots from a remote location
Other Commands
Command	Description
help	Show a list of commands
exit	Exit the CLI
```
## Project Structure

```
myfilelog/
├─ package.json
├─ package-lock.json
├─ index.js          # optional entry point
├─ src/
│  ├─ cli/
│  │  └─ myfilelog.js
│  ├─ core/
│  │  ├─ init/
│  │  ├─ commit/
│  │  ├─ log/
│  │  ├─ restore/
│  │  ├─ branch/
│  │  ├─ status/
│  │  ├─ tags/
│  │  └─ remote/
│  └─ ...
└─ README.md
```

## Notes

No .exe is required; the CLI runs directly in Node.js.

All logs, snapshots, and metadata are stored in the local workspace.

Fully interactive — type commands and hit Enter to execute.

## License

MIT License. Feel free to modify and use in your projects.




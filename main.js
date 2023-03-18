#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let helpObj = require("./commands/help.js");
let treeObj = require("./commands/tree.js");
let organiseObj = require("./commands/organise.js");

// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node main.js help
let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organise":
        organiseObj.organiseKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 Input Right command");
        break;
}

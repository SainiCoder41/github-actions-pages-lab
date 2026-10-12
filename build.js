
const fs = require("fs");
const path = require("path");

const files = ["index.html", "style.css", "script.js"];
const output = path.join(__dirname, "dist");

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of files) {
    fs.copyFileSync(
        path.join(__dirname, file),
        path.join(output, file)
    );
}

console.log("Build successful: website created in dist/");

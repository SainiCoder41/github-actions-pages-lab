
const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");

assert(html.includes("<title>GitHub CI/CD Practical</title>"));
assert(html.includes('id="changeButton"'));
assert(html.includes('href="./style.css"'));
assert(css.includes("background"));
assert(js.includes('addEventListener("click"'));

console.log("All tests passed!");

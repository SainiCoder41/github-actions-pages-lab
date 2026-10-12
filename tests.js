const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");

// HTML element verification
assert(html.includes("<title>GitHub CI/CD Practical</title>"), "Page title should match expected");
assert(html.includes('id="changeButton"'), "Page should include changeButton");
assert(html.includes('id="resetButton"'), "Page should include resetButton");
assert(html.includes('id="ciBadge"'), "Page should include ciBadge");
assert(html.includes('id="counter"'), "Page should include counter element");
assert(html.includes('href="./style.css"'), "CSS stylesheet link should be present");
assert(html.includes('src="./script.js"'), "JavaScript script tag should be present");

// CSS styling verification
assert(css.includes(".badge"), "CSS should define badge styling");
assert(css.includes(".button-group"), "CSS should define button-group layout");
assert(css.includes("background"), "CSS should have background definition");

// JavaScript logic verification
assert(js.includes('addEventListener("click"'), "JS should attach click event listeners");
assert(js.includes("resetButton"), "JS should handle reset button");
assert(js.includes("clickCount"), "JS should track click counts");

console.log("All unit tests passed successfully!");

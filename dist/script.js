const button = document.getElementById("changeButton");
const resetButton = document.getElementById("resetButton");
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const status = document.getElementById("status");
const counter = document.getElementById("counter");

let clickCount = 0;

button.addEventListener("click", function () {
    clickCount++;
    heading.textContent = "CI/CD Deployment Verified!";
    message.textContent = "The pipeline built, tested, and deployed this change automatically.";
    counter.textContent = `Click Count: ${clickCount}`;
    status.textContent = `Status: Active (Last clicked at ${new Date().toLocaleTimeString()})`;
});

resetButton.addEventListener("click", function () {
    clickCount = 0;
    heading.textContent = "Welcome to My Website";
    message.textContent = "Automated continuous integration and deployment with GitHub Actions.";
    counter.textContent = "Click Count: 0";
    status.textContent = "Status: Reset to initial state";
});

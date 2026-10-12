
const button = document.getElementById("changeButton");
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const status = document.getElementById("status");

button.addEventListener("click", function () {
    heading.textContent = "JavaScript is Working!";
    message.textContent = "My website is ready for CI/CD.";
    status.textContent = "Status: Interaction Successful";
});

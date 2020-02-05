const userInput = js.getEl("create-username");
const emailInput = js.getEl("create-email");
const passwordInput = js.getEl("create-password");
const createButton = js.getEl("create-button");
const errorMessage = js.getEl("error-message");

createButton.onclick = function() {
	fb.create(userInput.value, emailInput.value, passwordInput.value);
};

function onUserCreated() {
	location.href = "index.html";
}

function onError(errorMessage) {
	errorMessage.textContent = errorMessage;
}
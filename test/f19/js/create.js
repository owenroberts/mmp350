const userInput = js.getEl("username");
const emailInput = js.getEl("create-email");
const passwordInput = js.getEl("create-password");
const createButton = js.getEl("create-button");
const errorMessage = js.getEl("error-message");

createButton.onclick = function() {
	fb.create(emailInput.value, passwordInput.value);
	promise.catch(function(error) {
		errorMessage.textContent = error.message;
	});
	
	promise.then(function(credential) {
		createUser(credential.user.uid);
	});
};

function onError(errorMessage) {
	errorMessage.textContent = errorMessage;
}

function createUser(uid) {
	const db = firebase.database();
	const ref = db.ref("users").child(uid);
	const promise = ref.update({
		displayName: userInput.value
	});
	
	promise.then(function() {
		location.href = "index.html";
	});
}






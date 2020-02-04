const loginButton = js.getEl("login-button");
const emailInput = js.getEl("login-email");
const passwordInput = js.getEl("login-password");
const loginMessage = js.getEl("login-message");
const logoutButton = js.getEl("logout-button");
const displayName = js.getEl("user-name");
const profileImage = js.getEl('profile-image');

loginButton.onclick = login;
logoutButton.onclick = logout;

function login() {
	fb.login(emailInput.value, passwordInput.value);
}

function logout() {
	fb.logout();
}

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;
}

function userLoggedIn(id, name, profileImageURL) {
	document.body.classList.add('auth');
	displayName.textContent = "Welcome, " + name;

	const profileButton = document.getElementById("edit-profile");
	profileButton.onclick = goToProfile;

	function goToProfile() {
		location.href = "profile.html?uid=" + user.uid;	
	};

	if (profileImageURL) {
		profileImage.src = profileImageURL;
	}
}

function noUser() {
	document.body.classList.remove('auth');
	displayName.textContent = "";
}

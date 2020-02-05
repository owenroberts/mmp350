const usersDiv = js.getEl('users');
fb.getUsers(displayUser);

function displayUser(uid, displayName, bio, imageURL) {
	const userDiv = js.createEl('div', 'user');
	usersDiv.appendChild(userDiv);

	const userName = js.createEl('div', 'userName');
	userDiv.appendChild(userName);

	const userLink = js.createEl('a');
	userLink.href = 'user.html?uid=' + uid;
	userLink.textContent = displayName;
	userName.appendChild(userLink);

	if (bio) {
		const bioDiv = js.createEl('div', 'bio', bio);
		userDiv.appendChild(bioDiv);
	}

	if (imageURL) {
		const userImage = new Image();
		userImage.src = imageURL;
		userDiv.appendChild(userImage);
	}
}

const profileUID = location.search.split('=')[1];
const profileName = js.getEl('profile-name');
const bioInput = js.getEl('bio');
const linkInput = js.getEl('link');
const updateButton = js.getEl('update-profile');
// const profileImage = js.getEl('profile-image');
const addImage = js.getEl('add-image');
const imageInput = js.getEl('image-file');
const imageButton = js.getEl('submit-image');

fb.getUserProfile(profileUID);

function profileLoggedIn(uid) {
	if (uid == profileUID) {
		updateButton.style.display = 'block';
	}
}

function displayProfile(displayName, userInfo) {
	profileName.value = displayName;

	if (userInfo.bio) {
		bioInput.value = userInfo.bio;
	}
	
	if (userInfo.imageURL) {
		js.getEl('profile-image').src = userInfo.imageURL;
		// addImage.style.display = 'none';
	}

	if (userInfo.link) {
		linkInput.value = userInfo.link;
	}
};

updateButton.onclick = function() {
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', bioInput.value);
	fb.updateProfile(profileUID, 'link', linkInput.value);
};


imageButton.onclick = function() {
	const file = imageInput.files[0];
	if (file) {
		fb.uploadImage(file, profileUID, 'profile-image')
			.then(addProfileImage);
	}
	
};

function addProfileImage(imageURL) {
	console.log(imageURL);
	fb.updateProfile(profileUID, 'imageURL', imageURL);
	profileImage.src = imageURL;
}












const profileUID = location.search.split('=')[1];
const profileName = js.getEl('profile-name');
const bioInput = js.getEl('bio');
const linkInput = js.getEl('link');
const updateButton = js.getEl('update-profile');
// const profileImage = js.getEl('profile-image');
const addImage = js.getEl('add-image');
const imageButton = js.getEl('submit-image');

fb.getUserProfile(profileUID);

function userLoggedIn() {
	if (profileUID == fb.getUID()) {
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
		addImage.style.display = 'none';
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
	const file = document.getElementById('image-file').files[0];
	fb.uploadImage(file, profileUID, 'profile-image');
};

function onImageAdded(imageURL) {
	profileImage.src = imageURL;
	addImage.style.display = 'none';
}












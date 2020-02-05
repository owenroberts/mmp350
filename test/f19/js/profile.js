const uid = location.search.split('=')[1];
const profileName = js.getEl('profile-name');
const bioInput = js.getEl('bio');
const updateButton = js.getEl('update-profile');
// const profileImage = js.getEl('profile-image');
const addImage = js.getEl('add-image');
const imageButton = js.getEl('submit-image');

fb.getUserProfile(uid);

function displayProfile(displayName, bio, imageURL) {
	profileName.value = displayName;

	if (bio) {
		bioInput.value = bio;
	}
	
	if (imageURL) {
		js.getEl('profile-image').src = imageURL;
		addImage.style.display = 'none';
	}
};

updateButton.onclick = function() {
	fb.updateProfile(uid, 'displayName', profileName.value);
	fb.updateProfile(uid, 'bio', bioInput.value);
};


imageButton.onclick = function() {
	const file = document.getElementById('image-file').files[0];
	fb.uploadImage(file, uid, 'profile-image');
};

function onImageAdded(imageURL) {
	profileImage.src = imageURL;
	addImage.style.display = 'none';
}












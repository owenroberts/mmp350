const postText = js.getEl('post-text');
const publishButton = js.getEl('publish');

const imageInput = js.getEl('post-image');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

function publishPost() {
	const uid = fb.getUID();

	// check for file 
	const file = imageInput.files[0];
	if (file) {
		fb.publishPost(uid, postText.value, file);
		// fb.uploadImage(file, uid, 'profile-image')
		// 	.then(function(imageURL) {
		// 		fb.publishPost(uid, postText.value, imageURL);
		// 	});
	} else {
		fb.publishPost(uid, postText.value);
	}

	
	postText.value = ""; // reset the textarea
}

function onPost() {
	console.log('posted!')
}

















const postText = js.getEl('post-text');
const publishButton = js.getEl('publish');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

function publishPost() {
	const uid = fb.getUID();
	fb.publishPost(uid, postText.value);
	postText.value = ""; // reset the textarea
}

function onPost() {
	
}

















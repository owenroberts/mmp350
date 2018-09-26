window.addEventListener('load', function() {
	const publishButton = document.getElementById('submit-post');
	const postInput = document.getElementById('post-body');
	publishButton.addEventListener('click', publishPost);
	function publishPost() {
		const uid = firebase.auth().currentUser.uid;
		const db = firebase.database();
		const ref = db.ref('users').child(uid).child('posts');
		const postInfo = {
			text: postInput.value,
			date: new Date().toString()
		};
		const postPromise = ref.push(postInfo);
		postPromise.then(function(post) {
			console.log(post);
		});
		postPromise.catch(function(error) {
			console.log(error);
		});
		postInput.value = "";
	}
});
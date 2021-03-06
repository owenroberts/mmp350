window.addEventListener('load', function() {
	const publishButton = document.getElementById('submit-post');
	const postInput = document.getElementById('post-body');
	publishButton.addEventListener('click', publishPost);
	function publishPost() {
		if (firebase.auth().currentUser) {
			const uid = firebase.auth().currentUser.uid;
			const db = firebase.database();
			const ref = db.ref('posts');
			const postInfo = {
				text: postInput.value,
				date: Date.now(),
				author: firebase.auth().currentUser.displayName,
				id: uid
			};
			console.log(postInfo);
			const postPromise = ref.push(postInfo);
			postPromise.then(function(post) {
				console.log('success', post);
			});
			postPromise.catch(function(error) {
				console.log('error', error);
			});
			postInput.value = "";
		} else {
			alert('Login or create an account to post.');
		}
		
	}
});
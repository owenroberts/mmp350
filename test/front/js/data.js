window.addEventListener('load', function() {

	const postsDiv = document.getElementById('posts');
	const postData = firebase.database().ref('users');

	const db = firebase.database();
	const users = db.ref('users');
	const query = users.orderByChild('date');
	query.on('value', snap => {
		console.log(snap.val());
	})


	postData.on('child_added', function(snapshot) {

		const userKey = snapshot.key;
		const user = snapshot.val();
		const userRef = postData.child(userKey).child('posts');

		userRef.on('child_added', function(snapshot) {
			const post = snapshot.val();
			const postKey = snapshot.key;
			createPost(user.displayName, postKey, post);
		});

	});


	function createPost(userName, key, post) {
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		postDiv.id = key;
		const postText = document.createElement('div');
		postText.classList.add('post-text');
		const postInfo = document.createElement('div');
		postInfo.classList.add('post-info');
		
		const postAuthor = document.createElement('span');
		postAuthor.classList.add('post-author');
		const postDate = document.createElement('span');
		postDate.classList.add('post-date');

		postText.textContent = post.text;
		postAuthor.textContent = userName;
		postDate.textContent = new Date(post.date).toLocaleString('en-us', { month: 'long', year: 'numeric', weekday: 'long', day: 'numeric' })

		postDiv.appendChild(postText);
		postDiv.appendChild(postInfo);
		postInfo.innerHTML += "by ";
		postInfo.appendChild(postAuthor);
		postInfo.innerHTML += " on ";
		postInfo.appendChild(postDate);

		postsDiv.appendChild(postDiv);
	}

});

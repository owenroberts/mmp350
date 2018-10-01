window.addEventListener('load', function() {

	const postsDiv = document.getElementById('posts');
	const postData = firebase.database().ref('posts');

	// const db = firebase.database();
	// const posts = db.ref('posts');
	// const query = posts.orderByChild('date');
	// query.on('value', snap => {
	// 	console.log(snap.val());
	// });


	postData.on('child_added', function(snapshot) {
		const userKey = snapshot.key;
		userRef = postData.child(userKey);
		userRef.on('child_added', function(snapshot) {
			const post = snapshot.val();
			const postKey = snapshot.key;
			createPost(post);
		});
	});


	function createPost(post) {
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		const postText = document.createElement('div');
		postText.classList.add('post-text');
		const postInfo = document.createElement('div');
		postInfo.classList.add('post-info');
		
		const postAuthor = document.createElement('span');
		postAuthor.classList.add('post-author');
		const postDate = document.createElement('span');
		postDate.classList.add('post-date');

		postText.textContent = post.text;
		postAuthor.textContent = post.author;
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

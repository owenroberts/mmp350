window.addEventListener('load', function() {

	const postsDiv = document.getElementById('posts');
	const postRef = firebase.database().ref('posts');

	postRef.on('child_added', function(snapshot) {
		createPost(snapshot.key, snapshot.val());
	});

	function createPost(key, post) {
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		const postText = document.createElement('div');
		postText.classList.add('post-text');
		const postInfo = document.createElement('div');
		postInfo.classList.add('post-info');
		
		const postAuthor = document.createElement('a');
		postAuthor.classList.add('post-author');
		const postDate = document.createElement('span');
		postDate.classList.add('post-date');

		postText.textContent = post.text;
		postAuthor.textContent = post.author;
		postDate.textContent = new Date(post.date).toLocaleString('en-us', { month: 'long', year: 'numeric', weekday: 'long', day: 'numeric' });

		const authorPhoto = new Image();
		authorPhoto.classList.add('photo-' + post.id);
		authorPhoto.classList.add('post-photo');
		postDiv.appendChild(authorPhoto);

		const likeDiv = document.createElement('div');
		likeDiv.classList.add('likes');

		const likeBtn = document.createElement('button');
		likeBtn.classList.add('like-btn');
		likeBtn.textContent = "Like";
		
		const unlikeBtn = document.createElement('button');
		unlikeBtn.classList.add('unlike-btn');
		unlikeBtn.textContent = "Unlike";

		const displayLikes = document.createElement('span');
		displayLikes.classList.add('display-likes');
		

		if (post.likes) {
			displayLikes.textContent = Object.keys(post.likes).length + " likes";
		} else {
			displayLikes.textContent = "0 likes";
		}

		likeDiv.appendChild(likeBtn);
		likeDiv.appendChild(unlikeBtn);
		likeDiv.appendChild(displayLikes);

		function likeOrUnLikePost(like) {
			if (firebase.auth().currentUser) {
				const uid = firebase.auth().currentUser.uid;
				const postRef = firebase.database().ref('posts').child(key).child('likes').child(uid);
				if (like) {
					postRef.set(true);
				} else {
					postRef.remove();
				}
				
			} else {
				alert("Log in to like posts");
			}
		}

		likeBtn.addEventListener('click', function() {
			likeOrUnLikePost(true);
		});

		unlikeBtn.addEventListener('click', function() {
			likeOrUnLikePost(false);
		});

		postDiv.appendChild(postText);
		postDiv.appendChild(postInfo);
		postInfo.innerHTML += "by ";
		postInfo.appendChild(postAuthor);
		postInfo.innerHTML += " on ";
		postInfo.appendChild(postDate);

		postDiv.appendChild(likeDiv);

		postsDiv.insertBefore(postDiv, postsDiv.firstElementChild);
	}

	// add profile photos 
	const photoRef = firebase.database().ref('users');
	photoRef.on('child_added', function(snapshot) {
		const user = snapshot.val();
		const key = snapshot.key;
		const userPosts = document.getElementsByClassName('photo-' + key);
		for (let i = 0; i < userPosts.length; i++) {
			userPosts[i].src = user.profilePhoto;
		}
	});

});

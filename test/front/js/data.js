window.addEventListener('load', function() {
/*	
	const preObject = document.getElementById('object');
	const ulList = document.getElementById('list');
	const dbRefObject = firebase.database().ref();
	const dbRefList = dbRefObject.child('hobbies');

dbRefObject.on('value', snap => {
		preObject.textContent = JSON.stringify(snap.val(), null, 3);
	});

	dbRefList.on('child_added', snap => {
		const li = document.createElement('li');
		li.textContent = snap.val();
		li.id = snap.key;
		ulList.appendChild(li);
	});

	dbRefList.on('child_changed', snap => {
		const liChanged = document.getElementById(snap.key);
		liChanged.textContent = snap.val();
	});

	dbRefList.on('child_removed', snap => {
		const liChanged = document.getElementById(snap.key);
		liChanged.remove();
	});*/

	const postsDiv = document.getElementById('posts');
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		   loadPosts(user.uid);
		}
	});

	function loadPosts(uid) {
	
		
		const postData = firebase.database().ref('users').child(uid).child('posts');
		postData.on('value', function(snapshot) {
			
			console.log(snapshot.val());

			for (const key in snapshot.val()) {
				const post = snapshot.val()[key];
				createPost(post);
			}
		});
	}

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
		postAuthor.textContent = firebase.auth().currentUser.displayName;
		postDate.textContent = post.date.toLocaleString('en-us', { month: 'long', weekday: 'long', day: 'numeric' }); ;

		postDiv.appendChild(postText);
		postDiv.appendChild(postInfo);
		postInfo.appendChild("by ");
		postInfo.appendChild(postAuthor);
		postInfo.appendChild("on ");
		postInfo.appendChild(postDate);

		postsDiv.appendChild(postDiv);
	}

});

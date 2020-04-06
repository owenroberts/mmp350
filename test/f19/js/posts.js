function createPost(postData, userInfo, postId) {

	const displayName = userInfo ? userInfo.displayName : '';
	const imageURL = userInfo ? userInfo.imageURL : undefined;

	const post = js.createEl('div', 'post'); // container element
	const text = js.createEl('div', 'text', postData.text);
	const author = js.createEl('div', 'author', 'by ');
	const authorLink = js.createEl('a');
	authorLink.href = 'user.html?uid=' + postData.uid;
	
	authorLink.textContent = displayName;
	author.appendChild(authorLink);
	
	
	const date = js.createEl('div', 'date', js.formatDate(postData.date));
	
//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);
	
	/* adding user profile image */
	const img = new Image();
	if (imageURL) {
		img.src = imageURL;
	} else {
		img.src = 'images/egg.jpg';
	}
	img.classList.add('profile-image');

	if (postData.imageURL) {
		const img = js.createEl('img', 'post-image');
		img.src = postData.imageURL;
		post.appendChild(img);
	}
	
	/* link to the post - permanent link */
	const postLink = document.createElement('a');
	postLink.href = 'post.html?id=' + postId;
	postLink.textContent = "Permalink";
	
	if (postData.tags) {
		var textHTML = postData.text;
		for (const tag in postData.tags) {
			const re = new RegExp('#'+tag, 'g');
			textHTML = textHTML.replace(re, '<a href="tag.html?tag=' + tag + '">#' + tag + '</a>');
		}
		text.innerHTML = textHTML;
	}
	
	post.appendChild(img);
	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);
	post.appendChild(postLink);
	
}













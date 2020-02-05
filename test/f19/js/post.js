/* database query */
const postId = location.search.split('=')[1];
const posts = js.getEl('posts');
fb.loadPost(postId);


/* database query */
const uid = location.search.split('=')[1];
const posts = js.getEl('posts');
fb.getUserPosts(uid);
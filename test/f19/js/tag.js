/* database query */
const tag = location.search.split('=')[1];
js.getEl('tag').textContent = tag;
const posts = js.getEl('posts');

fb.getTag(tag);
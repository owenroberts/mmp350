function addRest() {
	const db = firebase.database();
	const restRef = db.ref('/rest');
	const restInput = document.getElementById('addRest')
	const name = restInput.value;
	restInput.value = "";
	restRef.push({
			name: name,
			upvoters: {},
			downvotes: {}
		})
		.then(function() {
			window.location.reload();
		})
		.catch(function(err){
			console.log('error', err);
		});
}

function upvote(key) {
	const db = firebase.database();
	const user = firebase.auth().currentUser;
	const userId = user.uid;
	const userName = user.displayName;
	const restRef = db.ref('/rest')
		.child(key)
		.child('/votes')
		.child(userId);
	restRef.push(userName)
		.then(function(){
			window.location.reload();
		})
		.catch(function(err){
			console.log('err', error);
		});
}

function downvote(key) {
	const db = firebase.database();
	const user = firebase.auth().currentUser;
	const userId = user.uid;
	const restRef = db.ref('/rest')
		.child(key)
		.child('/votes')
		.child(userId)
		.remove()
		.then(function(){
			window.location.reload();
		})
		.catch(function(err){
			console.log('err', error);
		});
}
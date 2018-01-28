function checkIfLoggedIn() {
	firebase.auth().onAuthStateChanged(function(user){
		if (user) {
			document.getElementById('google-pic').src = user.photoURL;
			document.getElementById('login_btn').style.display = "none";
			document.getElementById('logout_btn').style.display = "block";
		} else {
			document.getElementById('login_btn').style.display = "block";
			document.getElementById('logout_btn').style.display = "none";
			document.getElementById('google-pic').src = "";
			document.getElementById('google-display-name').textContent = "";
			document.getElementById('google-email').textContent = "";
		}
	});
}
checkIfLoggedIn();

function signOut() {
	firebase.auth().signOut();
	checkIfLoggedIn();
}


function signInWithGoogle() {
	const googleAuthProvider = new firebase.auth.GoogleAuthProvider;
	firebase.auth().signInWithPopup(googleAuthProvider)
		.then( function(data) {
			console.log(data);	
			document.getElementById('google-display-name').textContent = data.user.displayName;
			document.getElementById('google-pic').src = data.user.photoURL;
			document.getElementById('google-email').textContent = data.user.email;
		})
		.catch( function(err) {
			console.log('error', err);
		});
	checkIfLoggedIn();
}
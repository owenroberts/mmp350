/* firebase helper functions for mmp350 */

const fb = {}; // firebase helpers

/* creates a user */
fb.create = function(userName, email, password) {
	firebase.auth().createUserWithEmailAndPassword(
};

/* logs into firebase, calls onError if there's an error */
fb.login = function(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(() => { console.log('success'); })
		.catch(error => { if (typeof onError = 'function') onError(error.message); });
};

/* logs out of firebase */
fb.logout = function() {
	firebase.auth().signOut();
};

// various firebase shit

/* runs to log in the user automatically, calls userLoggedIn or noUser */
firebase.auth().onAuthStateChanged(user => {
	if (user) {
		const userRef = firebase.database().ref('users').child(user.uid);
		userRef.on('value', snapshot => {
			const userInfo = snapshot.val();
			if (typeof userLoggedIn === 'function') 
				userLoggedIn(user.uid, userInfo.displayName, userInfo.imageURL);
		});	
	} else {
		if (typeof noUser === 'function') noUser();
	}
});

const js = {}; // general js helpers

/* get elements by id */
js.getEl = function(id) {
	return document.getElementById(id);
};


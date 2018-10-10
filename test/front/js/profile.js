window.addEventListener('load', function() {
	
	// display profile info 
	firebase.auth().onAuthStateChanged(function(user) {
		console.log(user);
		if (user) {
			document.getElementById('profile-name').textContent = user.displayName;
			if (user.photoURL) {
				document.getElementById('profile-photo').src = user.photoURL;
			} else {
				document.getElementById('add-photo').style.display = 'block';
			}
		}
	});

	// upload image
	document.getElementById('submit-photo').addEventListener('click', function() {
		const file = document.getElementById('profile-photo-file').files[0];
		const storage = firebase.storage();
		const user = firebase.auth().currentUser;
		const ref = storage.ref('users').child(user.uid).child('profile-photo');
		const filePromise = ref.put(file);
		filePromise.then(function(photo) {
			photo.ref.getDownloadURL().then(function(photoURL) {
				user.updateProfile({photoURL: photoURL});
				document.getElementById('profile-photo').src = photoURL;
				firebase.database().ref('users').child(user.uid).update({profilePhoto: photoURL});
			});
		});
	});
});
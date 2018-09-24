window.addEventListener('load', function() {

	firebase.auth().onAuthStateChanged(function(user) {
		console.log(user);
		if (user) {
		   displayUserInfo();
		}
	});

	function displayUserInfo(user) {
		document.getElementById('display-name').textContent = "Hi " + firebase.auth().currentUser.displayName;
		document.getElementById('user-info').style.display = 'block';
		document.getElementById('auth').style.display = 'none';
	}

	const userNameAuth = document.getElementById('name');
	const emailAuth = document.getElementById('email');
	const passwordAuth = document.getElementById('password');
	const signUpBtn = document.getElementById('sign-up');
	const logInBtn = document.getElementById('log-in');
	const logOutBtn = document.getElementById('log-out');

	signUpBtn.addEventListener('click', function() {
		const email = emailAuth.value;
		const password = passwordAuth.value;
		const auth = firebase.auth();
		const createUser = auth.createUserWithEmailAndPassword(email, password);
		createUser.then(function(credential) {
			const db = firebase.database();
			const ref = db.ref('users').child(credential.user.uid);
			const userInfo = {
				displayName: userNameAuth.value
			};
			const promise = ref.set(userInfo)
			promise.then(function(success) {
				console.log(success);
			});
			promise.catch(function(error) {
				console.log(error);
			});
			const setDisplayName = credential.user.updateProfile(userInfo);
			setDisplayName.then(function(success){
				console.log(success);
			});
			setDisplayName.catch(function(error) {
				console.log(error);
			});
		});
		createUser.catch(function(error) {
			console.log(error.message);
		});
	});

	logInBtn.addEventListener('click', e => {
		const email = emailAuth.value;
		const password = passwordAuth.value;
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.then(displayUserInfo);
		promise.catch(e => console.log(e.message));

	});

	logOutBtn.addEventListener('click', e => {
		firebase.auth().signOut();
		document.getElementById('auth').style.display = 'block';
		document.getElementById('user-info').style.display = 'none';
	});
});
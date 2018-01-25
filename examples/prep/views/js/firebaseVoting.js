function addRest() {
	const db = firebase.database();
	const restRef = db.ref('/rest');
	const name = document.getElementById('addRest').value;
	return restRef.push(name);
}
let count = 100;
function countDown() {
	console.log(count);
	count--;
	if (count > 0)
		setTimeout(countDown, 50);
}
setTimeout(countDown, 50);
let count = 10;

function countDown(callback) {
	setTimeout(function() {
		count = count - 1;
		callback();
	}, 1000);
}

function displayCount() {
	console.log(count);
}

countDown(displayCount);
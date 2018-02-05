let count = 5;

function countOne(n, callback) {
	setTimeout(function() {
		count += n;
		callback();
	}, 1000);
}

function printCount() {
	console.log(count);
}

countOne(-1, printCount);

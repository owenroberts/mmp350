let count = 0;

// loop

// for 
//for (count = 0; count < 101; count++) {
//	console.log(count);
//}

// while
//while (count < 101) {
//	console.log(count);
//	count++;
//}

// function
function countOne() {
	console.log(count);
	count++;
	
	if (count < 101) {
		setTimeout(countOne, 50);
	}
	
//	if (count > 100) {
//		clearInterval(counter);
//	}
}

countOne();
//const counter = setInterval(countOne, 100);











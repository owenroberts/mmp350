function bar() {
	console.log("Hello");
}

var foo = function() {
	console.log("world.");
};

bar();
foo();

function greet(name, greeting) {
	console.log(greeting + ", " + name);
}

greet("Jenny", "Hello");
greet("Jerry", "Hi");
greet("Jenny", "Hi");

function add(n1, n2) {
	return n1 + n2;
}

var x = add(2, 2);
console.log("x", x);
var y = add(x, 2);
console.log("y", y);
var z = add(x, y, 2);
console.log("z", z);

function delayedHello() {
	console.log("delayed hello");
}

setTimeout(function() { 
	console.log("this is a different delayed hello");
}, 2000);



















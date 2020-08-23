// Level 1

// question 1

var stringValue = 'I am a string';

//Question 2

var person = { firstName: 'Tor', Age: 50 };

// Question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log('Out Of Stock');
} else {
  console.log('In Stock');
}

// Question 4

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Question 5

for (var i = 15; i < 26; i++) {
  console.log(i);
}

// Question 6

for (var i = 15; i < 26; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// Question 7

var friendList = [
  {
    name: 'Paul',
    age: 50,
    alive: true,
  },
  {
    name: 'Jonas',
    age: 34,
    alive: false,
  },
];

// Question 8

function whatIDontLike(animale) {
  console.log("I don't like " + animale);
}

whatIDontLike('horses');

// Question 9

function subtractArg(num1, num2) {
  var total = num1 - num2;
  console.log(total);
}

subtractArg(100, 50);

// Question 10

var carModels = [];

function cars(model) {
  carModels.push(model);
}

cars('Toyota');

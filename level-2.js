// Level 2

// Question 1

for (var i = 15; i < 26; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Question 2

function iAm() {
  console.log('I am a function');
}

var innerFunction = iAm;

function outerFunction(variable) {
  variable();
}

outerFunction(innerFunction);

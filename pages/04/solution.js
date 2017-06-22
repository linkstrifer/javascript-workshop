/* Exercises: */

// Before start coding, if the code is commented please uncomment it

// Declare a function called functionDeclaration
function functionDeclaration() {}

export { functionDeclaration as functionDeclaration } // uncomment this


// Create and save an annonymous function in the variable annonymousFunc
let annonymousFunc = () => {}
// or
// let annonymousFunc = function () {}

export { annonymousFunc as annonymousFunc }


// Create a function called randomNumbers that create an array with n random numbers and return a callback function execution with the array as a parameter of the callback function

function randomNumbers(n, callback) {
  let arr = new Array(n)

  // this also works
  /*
    let arr = []

    arr.length = n
  */

  // or
  /*
    let arr = []
    let i
    for (i = 0; i < n; i++) {
      arr.push(i)
    }
  */

  return callback(arr)
}

export { randomNumbers as randomNumbers } // uncomment this




/*
  Let's create a function (will be a closure) called 'game', this function should return some methods:

  - setName(name)
  - getName()
  - setYear(year)
  - getYear()

  Every method should set or get some data, if i call setName('Halo'), the getName() method should return 'Halo'
*/

function game() {
  let _name
  let _year

  function setName(name) {
    _name = name
  }

  function getName() {
    return _name
  }

  function setYear(year) {
    _year = year
  }

  function getYear() {
    return _year
  }

  // this works only on es6
  return {
    setName,
    setYear,
    getName,
    getYear
  }

  /*
  on es5 you have to do it like this
  return {
    setName: setName,
    setYear: setYear,
    getName: getName,
    getYear: getYear
  }
  */
}

export { game as game } // uncoment this

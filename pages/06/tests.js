import assert from './../assert'
// import {
// } from './exercise'

let Game

let tests = [
  // {
    // assert: scrabbleScore('anna') === 4 &&
            // scrabbleScore('cabbage') === 14,
    // description: 'Scrabble score'
  // },
]

function runTest() {
  tests.forEach((test) => {
    assert(test.assert, test.description)
  })
}

export default runTest

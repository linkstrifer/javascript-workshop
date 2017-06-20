import assert from './../assert'
import {
  scrabbleScore,
  nExponential
} from './exercise'

let Game

let tests = [
  {
    assert: scrabbleScore('anna') === 4 &&
            scrabbleScore('cabbage') === 14,
    description: 'Scrabble score'
  },
  {
    assert: nExponential(2, 3) === 8 &&
            nExponential(2, 10) === 1024 &&
            nExponential(6, 4) === 1296,
    description: 'N exponential'
  }
]

function runTest() {
  tests.forEach((test) => {
    assert(test.assert, test.description)
  })
}

export default runTest

import assert from './../assert'
import {
  largerInteger,
  fibonacciSeries,
  whileToN
} from './exercise'

let tests = [
  {
    assert: ((a, b) => {
      let i
      let max = a.length

      if (a === b) {
        return true
      }

      if (a == null || b == null) {
        return false
      }

      if (a.length !== b.length) {
        return false
      }

      for (i = 0; i < max; i++) {
        if (a[i] !== b[i]) {
          return false
        }
      }
      return true
    })(fibonacciSeries(10), [ 1,1,2,3,5,8,13,21,34,55 ]),
    description: 'Fibonacci series'
  },
  {
    assert: largerInteger([ 1,2,3,4,5,6,7,8,90,12,45,78 ]) === 90,
    description: 'Return the larger integer'
  },
  {
    assert: whileToN(10) === 25 && whileToN(100) === 2550,
    description: 'While to N'
  }
]

function runTest() {
  tests.forEach((test) => {
    assert(test.assert, test.description)
  })
}

export default runTest

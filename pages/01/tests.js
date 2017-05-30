import assert from './../assert'
import {
  calcArea,
  helloWorld,
  fixItFelixJr,
  notANumber,
  itsGoingToBe
} from './exercise'

let tests = [
  {
    assert: helloWorld() === 'Hello World',
    description: 'Return Hello World'
  },
  {
    assert: calcArea(10, 4) === 40 && calcArea(12, 8) === 96,
    description: 'Calculate triangle area'
  },
  {
    assert: fixItFelixJr() === 11,
    description: 'Fix Felix Jr'
  },
  {
    assert: isNaN(notANumber() && typeof notANumber() === 'number'),
    description: 'is not a number'
  },
  {
    assert: itsGoingToBe() === 'legen - wait for it dary',
    description: 'is going to be legen - wait for it dary'
  }
]

function runTest() {
  tests.forEach((test) => {
    assert(test.assert, test.description)
  })
}

export default runTest

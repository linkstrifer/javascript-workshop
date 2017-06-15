import assert from './../assert'
import {
  functionDeclaration,
  annonymousFunc,
  randomNumbers,
  game
} from './exercise'

let Game

let tests = [
  {
    assert: typeof functionDeclaration === 'function',
    description: 'Function declaration'
  },
  {
    assert: typeof annonymousFunc === 'function' && annonymousFunc.name === 'annonymousFunc',
    description: 'Annonymous function'
  },
  {
    assert: typeof randomNumbers === 'function' && randomNumbers(10, (numbers) => (numbers)).length === 10,
    description: 'N random numbers'
  },
  {
    assert: typeof game === 'function' &&
            (() => {
              Game = game()
              Game.setName('Overwatch')
              Game.setYear(2016)
              return true
            })() &&
            Game.getName() === 'Overwatch' &&
            Game.getYear() === 2016,
    description: 'Game closure'
  }
]

function runTest() {
  tests.forEach((test) => {
    assert(test.assert, test.description)
  })
}

export default runTest

import assert from './../assert'
import {
  isAPalindrome,
  getTriangleType,
  publishPost
} from './exercise'

let tests = [
  {
    assert: !isAPalindrome('Hello World') && isAPalindrome('anna'),
    description: 'Is a palindrome'
  },
  {
    assert: getTriangleType({
     angles: [ 50, 90, 40 ]
   }) === 'right',
    description: 'Triangle types: right'
  },
  {
    assert: getTriangleType({
     angles: [ 60, 60, 60 ]
   }) === 'equilateral',
    description: 'Triangle types: equilateral'
  },
  {
    assert: getTriangleType({
     angles: [ 70, 20, 70 ]
   }) === 'isosceles',
    description: 'Triangle types: isosceles'
  },
  {
    assert: getTriangleType({
     angles: [ 10, 20, 70 ]
   }) === 'scalene',
    description: 'Triangle types: scalene'
  },
  {
    assert: getTriangleType({
     angles: [ 10, 20, 150 ]
   }) === 'obtuse',
    description: 'Triangle types: obtuse'
  },
  {
    assert: publishPost({
      type: 'video',
      url: 'testUrl'
    }).videos[0] === 'testUrl',
    description: 'Post type: video'
  },
  {
    assert: publishPost({
      type: 'photo',
      thumb: 'thumb-test-url'
    }).photos[0] === 'thumb-test-url',
    description: 'Post type: photo'
  },
  {
    assert: publishPost({
      type: 'post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
    }).posts[0] === 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do',
    description: 'Post type: post'
  }
]

function runTest() {
  tests.forEach((test) => {
    assert(test.assert, test.description)
  })
}

export default runTest

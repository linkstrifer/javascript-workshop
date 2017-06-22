/* Exercises: */

// Before start coding, if the code is commented please uncomment it

// Using conditionals, return if value is a palindrome
export function isAPalindrome(value) {
  let isIt

  isIt = value === value.split('').reverse().join('')

  return isIt
}

/*

Passing a object with three angles, return the triangle type

Possible return values:
- right
- equilateral
- isosceles
- scalene
- obtuse

Object example

{
 angles: [50, 90, 40]
}

*/

export function getTriangleType(obj) {
  let type
  let angles = obj.angles

  if (angles[0] === 90 || angles[1] === 90 || angles[2] === 90) {
    type = 'right'
  } else if (angles[0] === angles[1] && angles[0] === angles[2]) {
    type = 'equilateral'
  } else if (angles[0] === angles[1] || angles[0] === angles[2] || angles[1] === angles[2]) {
    type = 'isosceles'
  } else if (angles[0] > 90 || angles[1] > 90 || angles[2] > 90) {
    type = 'obtuse'
  } else if (angles[0] !== angles[1] && angles[0] !== angles[1] && angles[1] !== angles[2]) {
    type = 'scalene'
  }

  return type
}

/*

Given a post, push it to the correct value in the collection object using switch

Possible post types:
- video
- photo
- post

Post examples:

{
  type: 'video',
  url: string
}

{
  type: 'photo',
  thumb: string
}

{
  type: 'post',
  content: string
}

*/

let collection = {
  videos: [],
  photos: [],
  posts: []
}

export function publishPost(post) {
  switch (post.type) {
    case 'video':
      collection.videos.push(post.url)
      break
    case 'photo':
      collection.photos.push(post.thumb)
      break
    case 'post':
      collection.posts.push(post.content)
      break
    default:
      break
  }

  return collection
}

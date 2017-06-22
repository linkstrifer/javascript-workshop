/* Exercises: */

// Before start coding, if the code is commented please uncomment it

// Define variable hello to 'Hello' and world to 'World' inside the function helloWorld
export function helloWorld() {
  const hello = 'Hello'
  const world = 'World'

  return hello + ' ' + world
}

// Fix this function
export function fixItFelixJr() {
  let blocks = 10

  blocks++

  return blocks
}

// Define a variable result equal to a triangle area (base * height) inside the function calcArea
export function calcArea(base, height) {
  let result = base * height

  return result
}

// Make result equal to NaN
export function notANumber() {
  const result = undefined + 1

  return result
}

// Fix this function
export function itsGoingToBe() {
  const waitForIt = true
  let legendary

  if (waitForIt) {
    legendary = 'legen - wait for it dary'
  }

  return legendary
}

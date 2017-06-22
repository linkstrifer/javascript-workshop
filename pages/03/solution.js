/* Exercises: */

// Before start coding, if the code is commented please uncomment it

// Using a for statement, return an array with the first n numbers in the fibonacci series, starting with 1

export function fibonacciSeries(n) {
  let numbers = []
  let i
  let a = 0
  let b = 1

  for (i = 0; i < n; i++) {
    numbers.push(b)
    b = a + b
    a = b - a
  }

  return numbers
}

// Using for in, return the larger integer in numbers Array
export function largerInteger(numbers) {
  let largerInteger = 0

  for (let index in numbers) {
    if (numbers[index] > largerInteger) {
      largerInteger = numbers[index]
    }
  }

  return largerInteger
}

// Using a while, sum all the odd numbers from 1 to n
export function whileToN(n) {
  let result = 0
  let i = 0

  while (i < n) {
    if (i % 2 !== 0) {
      result = result + i
    }
    i++
  }

  return result
}

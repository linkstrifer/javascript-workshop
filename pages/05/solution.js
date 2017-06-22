/* Exercises: */

// Before start coding, if the code is commented please uncomment it

/*
  Return the scrabble score for any word

  Letter values table

  Letter                           Value
  A, E, I, O, U, L, N, R, S, T       1
  D, G                               2
  B, C, M, P                         3
  F, H, V, W, Y                      4
  K                                  5
  J, X                               8
  Q, Z                               10

  For example, the word 'anna' has 4 points, because a = 1, n = 1 so:
  a = 1
  n = 1
  n = 1
  a = 1
  score = 1 + 1 + 1 + 1
*/

export function scrabbleScore(word) {
  let score = 0
  let points = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  }
  let letters = word.split('')

  for (let letter of letters) {
    score += points[letter.toUpperCase()]
  }

  return score
}

/*
  Return the n exponential of a number but using only the plus (+) operator
*/

export function nExponential(number, n) {
  let result = number
  let temp
  let i
  let j

  for (i = 1; i < n; i++) {
    temp = result
    for(j = 1; j < number; j++) {
      result += temp
    }
  }

  return result
}

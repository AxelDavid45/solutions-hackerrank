'use strict'
function countingValleys (steps, path) {
  if (typeof steps !== 'number') {
    throw new Error('steps must be a number')
  }
  if (typeof path !== 'string') {
    throw new Error('path must be a string')
  }

  let before = 0
  let valleys = 0
  let level = 0
  for (let i = 0; i <= steps - 1; i++) {
    before = level
    level = level + resolveValue(path[i])

    if (before < 0 && level === 0) {
      valleys++
    }
  }
  return valleys
}

function resolveValue (string) {
  if (typeof string !== 'string') {
    throw new Error('param must be a string')
  }

  if (string === 'U') {
    return 1
  } else if (string === 'D') {
    return -1
  }
}

console.log(countingValleys(8, 'UDDDUDUU'))

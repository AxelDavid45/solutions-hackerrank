'use strict'
// Complete the jumpingOnClouds function below.
function jumpingOnClouds (c) {
  return countJumps(0, 0, c)
}

function countJumps (position, jumps, clouds) {
  if (typeof position !== 'number') {
    throw new Error('pos must be a number')
  }
  if (typeof jumps !== 'number') {
    throw new Error('jumps must be a number')
  }

  if (!Array.isArray(clouds)) {
    throw new Error('clouds must be an array')
  }

  if (position >= (clouds.length - 1)) {
    return jumps
  }

  if (position === (clouds.length - 2)) {
    jumps++
    return jumps
  }

  let currentPosition = position
  let currentJumps = jumps

  if (clouds[position + 1] === 0 && clouds[position + 2] === 0) {
    currentPosition = currentPosition + 2
  } else if (clouds[position + 1] === 0 && clouds[position + 2] > 0) {
    currentPosition++
  } else if (clouds[position + 1] > 0 && clouds[position + 2] === 0) {
    currentPosition = currentPosition + 2
  }
  currentJumps++
  return countJumps(currentPosition, currentJumps, clouds)
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]))

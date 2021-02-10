// Complete the hourglassSum function below.
function hourglassSum (arr) {
  const hourglassSum = []
  let head = 0
  let center = 0
  let bottom = 0

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      head = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
      center = arr[i + 1][j + 1]
      bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      hourglassSum.push(head + center + bottom)
    }
  }

  hourglassSum.sort((a, b) => a - b)
  return hourglassSum[hourglassSum.length - 1]
}
const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

hourglassSum(arr)

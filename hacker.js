function poisonousPlants (p) {
  let days = 0
  let tempLenght = p.length
  let previousLength = 0

  while (true) {
    previousLength = p.length
    for (let i = 1; i <= tempLenght; i++) {
      if (p[i] > p[i - 1]) {
        p = p.map(element => {
          if (element !== p[i]) return element
        })
      }
    }
    tempLenght = p.length
    if (tempLenght === previousLength) {
      return days
    }
    days++
  }
}

poisonousPlants([6, 5, 8, 4, 7, 10, 9])

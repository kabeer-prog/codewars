//Covert a Number to an array in reverse order
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
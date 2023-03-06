const makeNegative = (num) => {
   return num > 0 ? num * -1 : num
}


console.log(makeNegative(42))
console.log(makeNegative(0))
console.log(makeNegative(-5))
function isOdd(x){
  let houseNum = x % 2 === 0
  return !houseNum
}

console.log(isOdd(10));
console.log(isOdd(11));

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
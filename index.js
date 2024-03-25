
// Write your code here
const num1=31
const num2 = 2
const multiply = num1*num2
function random() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
}
function mod(num3, num4=7) {
let div=(num4*num3)+4
return (div%num4)
}
  
console.log(mod(6,7))
let no;
const max= function (numbers=[12,15,19,20]){
   const largestNo = Math.max(...numbers)
   console.log(largestNo)
    return largestNo;
}
console.log(max())
max()
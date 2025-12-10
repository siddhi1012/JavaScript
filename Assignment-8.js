// Question-1 
console.log("Question-1");
let num = [1,2,3,4,5];
const sqaure = num.map((num) => (num*num));
console.log(sqaure);

let sum = sqaure.reduce((res,el) =>(res + el))
console.log(sum);

let avg = sum / num.length;
console.log(avg)

//Question-2
console.log("Question-2");
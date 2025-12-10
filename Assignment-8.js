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
let numbers = [2,4,8,-2,-4];
let res = numbers.map((numbers) => numbers + 5);
console.log(res);

//Question-3
console.log("Question-3");
let string = ["prasad","siddhi","sakshi","aryan","rukku"];
let result = string.map((string) => string.toUpperCase());
console.log(result);

//Question-4
console.log("Question-4");
const doubleAndReturnArgs= (arr,...args) =>[
    ...arr,
    ...args.map((v) => v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);

//Question-5
console.log("Question-5");
const mergeObject = (obj1,obj2) =>({...obj1,...obj2});
mergeObject(
    {
        a : 1,
        b : 2
    },
    {
        c : 3,
        d : 4
    });

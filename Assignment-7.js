// Question - 1 
let arr = [1,2,3,4,5,6];
const arrayAverage = (arr) =>{
    let total = 0;
    for(let number of arr){
        total = total + number;
    }
    return total / arr.length;
}
console.log(arrayAverage(arr));

// Question - 2 

let num = 4;
const isEven = (num) => {
    num % 2 == 0 ;
    return  num +" "+"is Even Number";

}

console.log(isEven(num));



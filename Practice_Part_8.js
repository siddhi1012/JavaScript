// forEach
let arr = [1,2,3,4,5,6,7,8];
arr.forEach(function(el){
    console.log(el);
});

//map
console.log("Map Function");
let  double = arr.map(function (el){
    return el;
});

// Student Object 
let student = [
    {
    name : "prasad",
    marks : 95
    },
    {
    name : "siddhi",
    marks : 92    
    },
    {
    name : "Rukku",
    marks : 97
    }
];

let gpa = student.map(function(el){
    return el.marks / 10;

});


// filter 
let nums = [2,4,1,5,6,2,7,8,9];
let even = nums.filter((nums) => { 
    return nums % 2 == 0;
});

//some
let odd = nums.some((nums) => { 
    return nums % 2 != 0;
});

//reduces
let arr1 = [1,2,3,4,5,6];
let finalVal = arr1.reduce((res,el) => 
    {
        console.log(res);
        return res+el ;
    }
);

// max
let arr2 = [1,4,2,5,6,7,2,9,2];
let max = arr2.reduce((max,el) =>{
    if(el > max){
        return el;
    }else{
        return max;
    }
});
console.log("Maximum");
console.log(max);

// multiple of 10 all number...
let num = [10,20,30,40,50];
let ans = num.every((el) => {
return el%10 == 0;
});
console.log(ans);


// min
let min = arr2.reduce((min,el) =>{
    if(el > min)
        return min ;
    else 
        return el;

});

console.log(min);
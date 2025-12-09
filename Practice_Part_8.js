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
    return nums % 2 == 0
});
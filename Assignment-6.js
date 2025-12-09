// Question - 1
let arr = [8,9,10,1,2,3,4,6,7];
let num = 5 ; 

function getElement(arr,num){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);

        }
    }
}
getElement(arr,num);

// Question - 2
let str = "abcdabcdefgggh";
function getUnique(str){
    let ans = "";
    for(let i = 0; i<str.length; i++){
        let currentChar = str[i];
        if(ans.indexOf(currentChar) == -1){
            ans = ans + currentChar;
        }
    }
    return ans;

}
let s = getUnique(str);
console.log(s);

// Question - 3 
let country = ["Australia","Germany","United States of America"];
function longestName(country){
    let ansIdx = 0;
    for(let i = 0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }

    }
    return country[ansIdx];
}

longestName(country);

// Question - 4

let string = "siddhi";
function countVowels(string){
    let count = 0; 
    for(let i = 0; i<string.length; i++){
        if(
            string.charAt(i) == "a" ||
            string.charAt(i) == "e" ||
            string.charAt(i) == "i" ||
            string.charAt(i) == "o" ||
            string.charAt(i) == "u" 
        ){
            count ++ ; 
        }
    }
    return count;
}
countVowels(string);

// Question - 5
let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+start;
}

generateRandom(start,end);

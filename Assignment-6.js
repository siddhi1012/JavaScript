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
getUnique(str);
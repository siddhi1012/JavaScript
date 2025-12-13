// Practice - 1
// function sayHello(){
//     console.log("Hello World");
// }

// function Demo(){
//     sayHello();
// }
// Demo();

// Practice - 2
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();



// Practice
let h2 = document.querySelector("h2");
setTimeout(()=>{
    h2.style.color ="red" ;
},1000);
setTimeout(()=>{
    h2.style.color ="green" ;
},2000);
setTimeout(()=>{
    h2.style.color ="orange" ;
},3000);

let h1 = document.querySelector("h1");
// Better Way  -
function changeColor(color,delay,nextColorChange){
    setTimeout(() =>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}

// Callback hell -> Nesting of callback
changeColor("red",1000, () =>{
    changeColor("green",1000,() =>{
        changeColor("orange",1000, () =>{
            changeColor("pink",1000,() =>{
                changeColor("yellow",1000);
            });
        });
    });
});

// simple function 
// function savetoDb(data){

//     if(internetSpeed > 4){
//         console.log("Your data was saved :",data);
//     }else{
//         console.log("Weak Connection.data not Saved");
//     }
// }

// Through callback -> 
// function savetoDbPromises(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDbPromises(
//     "apan college",
//     () =>{
//     console.log("Success:Your data was Saved");
//     savetoDbPromises(
//         "Siddhi Gavhane",
//     () =>{
//     console.log("Success 2 :Your data was Saved");
//     savetoDbPromises(
//         "Buudu Hase",
//     () =>{
//     console.log("Success 3 :Your data was Saved");   
//     },
//     () =>{
//      console.log("Failure 2: Weak Connection.Data was not saved")
//     });
//     },
//     () =>{
//     console.log("Failure 2: Weak Connection.Data was not saved");
//     });
// },
//     () =>{
//     console.log("Failure: Weak Connection.Data was not saved");
// });


// function savetoDb (data){
//     return new Promise((success,failure)=>{
//         let internetSpeed = Math.floor(Math.random()* 10) + 1;
//         if(internetSpeed > 4){
//             success("Success: Data Was Saved");
//         }else{
//             failure("Failure: Weak Connection");
//         }
//     });
// }
// savetoDb("Apna College") // req = promise object

// .then((result) =>{
//     console.log("Data:1 Saved");
//     console.log(result);
//     return savetoDb("Hello World"); 
// })
// .then((result) =>{
//     console.log("Data:2 Saved");
//     console.log(result);
//     return savetoDb("Siddhi Gavhane");
// })
// .then((result) =>{
//     console.log("Data:3 Saved");
//     console.log(result);
// })
// .catch((error) =>{
//     console.log("Promise Rejectd");
//     console.log(error);
   
// });
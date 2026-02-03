// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         //console.log("your data was saved: ",data);
//         success();
//     } else {
//         //console.log("weak connection. Data not saved");
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("Success: your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2: data2 saved");
//     },
//         () => {
//             console.log("failure2: weak connection");
//         }
//     );
// },
//     () => {
//         console.log("failure: weak connection. Data not saved");
//     }

// );


// function savetoDb(data) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolved,reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolved("success: data was saved");
//         }else{
//             reject("failure: data was not saved");
//         }
//     });
// }

// // let request = savetoDb("apna college"); // request is a promise object


// savetoDb("apna college")
// .then((result) =>{
//     console.log("Data1 saved. promise was resolved");
//     console.log("result of promise",result);
//     return savetoDb("hello world")
// })
// .then((result) => {
//         console.log("Data2 was saved");
//         console.log("result of promise",result);
//         return savetoDb("hello")
//     })
//     .then((result) => {
//         console.log("Data3 was saved");
//         console.log("result of promise",result);
//     })
// .catch((error) =>{
//     console.log("promise was rejected");
//     console.log("result of promise",error);
// });



// CALLBACK HELL -----------------------------

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     });
// }

// changeColor("red",100)
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("orange",500);
// })
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("yellow",500);
// })
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("green",500);
// })
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("blue",500);
// })
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("pink",500);
// })

// changeColor("red", 100, () => {
//     changeColor("orange", 100, () => {
//         changeColor("green", 100, () => {
//             changeColor("yellow", 100, () => {
//                 changeColor("blue", 100);
//             })
//         })
//     })
// })


//ASYNC FUNCTION----------------------------------------

// async function greet(){
//    // throw "some random error";
//     return "hello";
// }

// greet()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was: ", result);
// })

// .catch((err) =>{
//     console.log("promise was rejected with err:",err);
// })

// let demo = async() =>{
//     return 5;
// };


function getNum() {
    console.log(5);
}

async function demo() {
    
}



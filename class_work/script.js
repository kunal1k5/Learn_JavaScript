// function menu(callback) {
//     setTimeout(() => {
//         console.log("Menu displayed ");
//         callback();
//     }, 2000); 
// }

// function orderPlace(callback) {
//     setTimeout(() => {
//         console.log("Order placed ");
//         callback();
//     }, 4000); 
// }

// function chooseTopping(callback) {
//     setTimeout(() => {
//         console.log("Toppings & flavours chosen ");
//         callback();
//     }, 3000); 
// }

// function process(callback) {
//     setTimeout(() => {
//         console.log("Processing order ");
//         callback();
//     }, 5000); 
// }

// function serve() {
//     setTimeout(() => {
//         console.log("Ice cream served ");
//     }, 3000); 
// }


// menu(() => {
//     orderPlace(() => {
//         chooseTopping(() => {
//             process(() => {
//                 serve();
//             });
//         });
//     });
// });


// function readMenu(callback){
//     setTimeout(()=>{
//         console.log("Read menu")
//     }, 2000
// )
// }

// function orderPlace(callback){
//     setTimeout(()=>{
//         console.log("Place your order")
//     }, 4000)
// }

// function chooseTopping(callback) {

//     setTimeout(()=>{
//         console.log("choose your topping")
//     }, 3000)

// }

// function process(callback){

//     setTimeout(()=>{
//         console.log("Order is prepare")
//     }, 5000)

// }

// function serve(){
//     setTimeout(()=>{
//         console.log("order serve")
//     }, 1000)

// }

// readMenu(()=>{
//     orderPlace(()=>{
//         chooseTopping(()=>{
//             process(()=>{
//                 serve()
//             })
//         })
//     })
// })

function readMenu(callback) {
    setTimeout(() => {
        console.log("Read menu");
        callback(); // Invoke the callback
    }, 2000);
}

function orderPlace(callback) {
    setTimeout(() => {
        console.log("Place your order");
        callback(); // Invoke the callback
    }, 4000);
}

function chooseTopping(callback) {
    setTimeout(() => {
        console.log("Choose your topping");
        callback(); // Invoke the callback
    }, 3000);
}

function process(callback) {
    setTimeout(() => {
        console.log("Order is prepared");
        callback(); // Invoke the callback
    }, 5000);
}

function serve() {
    setTimeout(() => {
        console.log("Order served");
    }, 1000);
}

// Start the sequence
readMenu(() => {
    orderPlace(() => {
        chooseTopping(() => {
            process(() => {
                serve();
            });
        });
    });
});


//  

// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }

// let result = a > b ? a:b;

// console.log(result);



// for(var i = 0; i<4; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 100)
// }






// THIS   KEYWORD.....................

const student = {
    name : "kunal",
    eng : 95,
    math : 99,
    phy : 90,
    chem : 89,

    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math+ this.phy + this.chem)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }

}
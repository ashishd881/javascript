//for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(index);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop values:${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop values:${j}`)
//            console.log(i +'*'+ j + '='+i*j);
//     }
// }

let myArray=["falsh","batman","superman","spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

///Break and continue
// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//             break;           //loop se bhar kar dega
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//             continue;           //jaise hi 5 detect hua waise hi ek iteration ke liye loop se bahar phir baki ki iteration loop me chalegi
//     }
//     console.log(`Value of i is ${index}`);
    
// }
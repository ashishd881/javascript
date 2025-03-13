// const myObject={             //to print objects we will use for in loop
//     js:"javascript",
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in myObject) {
//     if (Object.prototype.hasOwnProperty.call(myObject, key)) {
//         const element = myObject[key];
//         console.log(element);
//     }
// }

// for (const key in myObject) {
//     console.log(key);
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// using for in loop for Arrays
// const programming =["js","rb","py","java","cpp"]

// for(const key in programming){
//     console.log(key);                    //Array ki keys print kar dega
// }

// for(const key in programming){
//     console.log(programming[key]);                    //Array ki values print kar dega
// }


const map= new Map()
map.set("IN","India")
map.set("USA","United states of America")   
map.set("Fr","France")
map.set("rs","Russia")
console.log(map);                              

for(const key in map){                   //ye for in loop map ke liye chalna nahi chiyea par pata nahi kyu chal raha hai
    console.log(key);
}
console.log(Object.keys(map));
console.log(map instanceof Map); // Should print: true
console.log(typeof map); // Should print: "object"
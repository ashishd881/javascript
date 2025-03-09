// const myObject={             //to print objects we will use for in loop
//     js:"javascript",
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
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

//using for in loop for Arrays
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
console.log(map);                              

for(const key in map){                   //ye for in loop map ke liye chalna nahi chiyea par pata nahi kyu chal raha hai
    console.log(key);
}
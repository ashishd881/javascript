//for of loop
//["","",""]//Strings ki Array
//[{},{},{}]//objects ki array

// const arr=[1,2,3,4,]
// for (const element of arr){
//     console.log(element)     //arr ke element pe for loop laga di
// }

// const greetings="Hello World!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

//Maps map apne app me hi ek object hai

const map= new Map()
map.set("IN","India")
map.set("USA","United states of America")
map.set("Fr","France")                    //Agar hum inme se ek bhi values phir se dalange toh wo  wo nahi aayegi map me unuque values hi rahti hai
console.log(map);

for(const key of map){
    console.log(key);      // map ki har ek values alag alag hold hongi
}

for(const [key] of map){
    console.log(key);      //har ek map ki values alag alag hold hongi
}



for(const [key , value] of map){
    console.log(key,':-',value);      //har ek map ki values alag alag hold hongi
}

//Applying for of loop to a object 

// const myObject={
//     'game1':"NFS",
//     'game2':'spiderman'
// }
// for(const [key,value] of myObject){       //objects are not iteratable like this they have other method 
//     console.log(key,':-',value);
// }
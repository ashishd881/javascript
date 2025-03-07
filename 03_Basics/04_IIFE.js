//Immediately Invoked function Expression   IIFEka use kisi function ko immediately chalane ke liye kiya jata hai
//aur kabhi kabhi functions ke variable global variables se polute ho jate hai is liye humchate hai ki function pahale hi chal jaue so we use IIFE

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// ()                  //ye error dega because this syntax is wrong 
// correct syntax is ()()   phale parenthesis me function ka defination hai aue dusre me call hai

(function chai(){
    //this is a named IIFE
    console.log(`DB CONNECTED`);
})
();


//writing the above function in terms of arrow function

// (()=>{
//     console.log(`DB CONNECTED`);
// })
// ()    // arrow function error dega because upar wale function ko hum ne comment nahi kiya hai aur semicolon laga ke usko terminate nahi kiya gaya hai toh ye pata nahi chal raha hai ki upar wala function end kaha hua hai is liye error de raha hai
 
//upar wale function me argument  aur variable asie denge
((name)=>{
    //this is a named IIFE
    console.log(`DB CONNECTED ${name}`);
})('hitesh') 
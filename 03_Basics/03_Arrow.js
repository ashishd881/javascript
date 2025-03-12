// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);  //this is block ke values ko use karne ke liye kaam aayega current context ko refer karega
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)          //ye empty context dega kyunki hum node emvironment ke andar hai  par agar isko browser me likhenge toh window object degadikhega

// function chai(){
//     let username="hitesh"
//     console.log(this);
// }
// chai()                        //bhaut saare attributes dikh gaye terminal me


// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()                        //ye undefind output dega kyunki hum abhi function ke andar hai jab hum object ke andar hai toh kaam karega

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()                              //ye bhi undefined hi rahega



///Arrow function   
//syntax of Arrow function   = () =>{}  aur kisi variable me store kar sakte hai isko


// const chai = () => {
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()                                  //ye bhi undefined hi dega

// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(2,4))


// using Implict return hum pura code ek hi line me likhenge toh return implicitly understood hoga
// const addTwo=(num1,num2) => num1+num2
// console.log(addTwo(4,5))

// const addTwo=(num1,num2) => (num1+num2)
// console.log(addTwo(4,5))

//agar curly braces ka use karna hai toh return keyword likkhna padega

// const addTwo=(num1,num2) => (username:"hitesh")        //object return karne ke liye parenthesis ka use karna hoga othewise it will give error
// console.log(addTwo(4,5))


const addTwo=(num1,num2) => ({username:"hitesh"})
console.log(addTwo(4,5))

// const myArray=[2,5,3,7,8]
// myArray.forEach(()=>)
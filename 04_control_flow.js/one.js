//if

// if(condition)        //if condition is true andar ka code execute hoga
// {

// }
// const isUserLoggedIn =true

// if(isUserLoggedIn)
// {

// }
// if(2=="2")   //executed print hoga but 2 number string ke barabar toh nahi hai so we use triple equal to
// {
//     console.log("executed")
// }
//<,>,<=,>=,==,!=,===,!==
// if(2==="2")   
// {
//     console.log("executed")
// }


// const score=200
// if(score>100){
//     const power="fly"      //var agar use karenge toh power bahar bhi print ho jayega because iskaa scope global hai
//     console.log(`user power: ${power}`);
// }
//console.log(`user power: ${power}`);   //ye errer dega

// const balance=1000
// // if(balanace>500)  console.log("test"),console.log("test2")    this is called implict scope but comma laga ke 2 baar print statement likhna is bad practice
// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");

// }
// else if(balance<900){
//     console.log("balance is less than 900")
// }
// else{
//     console.log("balance is less than1200")

// }



const userloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userloggedIn && debitCard && 2==3){
    console.log("allow to buuy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
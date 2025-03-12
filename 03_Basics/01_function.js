// function SayMyName(){
//     console.log("h")
//     console.log("i")
//     console.log("t")
//     console.log("e")
//     console.log("s")
//     console.log("h")
// }
// SayMyName()


// function addTwoNumbers(number1,number2)        //function ki definition banate wakt inputs ko parameter bolte hai 
// {
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4)      //yaha pe inputs ko arguments bolenge
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
// const result=addTwoNumbers(3,4)  
// console.log("result:",result);    //result: undefined aaya because function return toh kar hi nahi raha hai

// function addTwoNumbers(number1,number2)        //function ki definition banate wakt inputs ko parameter bolte hai 
// {
//     let result=number1+number2;
//     return result;
// }
// const result=addTwoNumbers(3,4)  
// console.log("result:",result);


// function loginUserMessage(username)    
//  //username ki jo value yaha pe wo niche replace ho ke return ho jayegi
// {
//     return `${username} just logged in`
// }
// let ans=loginUserMessage("hitesh")            //function value return kar raha hai toh usko ek varible me store kara do
// console.log(ans);
// console.log(loginUserMessage(""))       //empty string pass ki toh just loggeed inn print hoga
// console.log(loginUserMessage() )        //kuch nahi pass kiya toh undefined just loggeed inn  print hua/

// function loginUserMessage(username)    
// {
//     if(username===undefined){
//         console.log("enter username")
//         return
//     }
//                             //
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh") ) 
// console.log(loginUserMessage() ) 


// function loginUserMessage(username)    
// {
//     if(!username){
//         console.log("enter username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh") ) 
// console.log(loginUserMessage() ) 

// function loginUserMessage(username="sam")       
// agar kuch nahi pass kiya toh sam just logged in print hoga agar kuch pass kiya toh overwrite ho jayega
// {
//     if(!username){
//         console.log("enter username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh") ) 
// console.log(loginUserMessage() ) 


// function calculateCartPrice(...num1)      //...ko hi rest operator aur spread operator bolate hai bas unke usecase pe depend karta hai ki rest use ho raha ki spread 
// {
//     return num1                           //abhi ye teen dots rest operator ki tarah kaam karengi aur hum function ke andar multiple values pass kar payenge 
// }                                         //aur num1 me un saare elements ki ek array ban ake store ho jayegi aur sum ke liye array ka sum kar do
// console.log(calculateCartPrice(222,400,300))



// function calculateCartPrice(val1,val2,...num1)      
// {
//     return num1            // val1 me phali value val2 me dusri value aur baki bachi values num1 me        
// }                
// console.log(calculateCartPrice(222,400,300,4008))

// const user={
//     username:"hitesh",
//     price:199
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject(user)       //handleObject function me user object pass kar diya

// handleObject(           //this is another method to pass object in handledObject function
//     {
//         username:"sam",      
//         price:499
//     }
// )

const myNewArray=[100,200,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([23,45,7,6,,8,7,6,65,55]));

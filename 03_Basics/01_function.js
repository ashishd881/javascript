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

function loginUserMessage(username="sam")       
//agar kuch nahi pass kiya toh sam just logged in print hoga agar kuch pass kiys toh overwrite ho jayega
{
    if(!username){
        console.log("enter username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh") ) 
console.log(loginUserMessage() ) 
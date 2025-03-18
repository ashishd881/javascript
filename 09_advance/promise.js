// fetch('https://somyhjing.com').then().catch().finally()      //response .then() me aa jayega error.catch()me aa jayega finally() me sabkuch aa jayega
// const promiseOne =new Promise(function(resolve,reject){      //promise is a object
//     //Do an async task
//     // Dbcalls,cryptography,network
//     setTimeout(function(){
//         console.log('Asycn task is completed')
//         resolve()
//     },1000)
// })
//ab promise lo consume karenge because ye create ho gaya hai resolve ka connection hai.then() ke saath .then() me callback denge
// resolve ko promiseOne ke andar call karna hoga tabhi wo .then se connect hoga rseolve ek function hai
// promiseOne.then(function(){
//     console.log("promise consumed");
// })
// terminal me chalaya toh Asycn task is completed
// promise consumed print hua hai 



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 ");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'chai',email:"chai@example"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);          //resolve ke andar jo pass hua hai wo print ho jayega
    
// })


// const promiseFour =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =true;
//         if(!error){
//             resolve({username:"hitesh", pasword:"123"})
//         }
//         else{
//             reject('Error: something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{                                                           //.then laga ke values le unga agar error aayi toh .catch() kar ke values le lunga
//     console.log(user);
//     return user.username
// }).then((username) =>{                     //ye hum chaining kar rahe hai upar wale .then se naye .then me value aayuegi
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{console.log('promise is either resolved aur rejected')})                  //jab promise complete ho jayega toh ye chalega


const promiseFive =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:"javascript", pasword:"123"})
        }
        else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){                  //async await ka use karte hai toh hume catch handle nahi karni padti await karenge value ke liye jo ki promiseFive se aayegi
    const response =await promiseFive
    console.log(response);
}
consumePromiseFive()                              //error nahi de raha hai par hum isko tyr catch block me rakh sakte hai


// async function consumePromiseFive(){                  //async await ka use karte hai toh hume catch handle nahi karni padti await karenge value ke liye jo ki promiseFive se aayegi
//     try {
//         const response =await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive() 


//https://jsonplaceholder.typicode.com/users


// async function getAllUsers() {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data =response.json()
//    console.log(data)
// }     //ye code nahi chal raha hai mtlb kuch gadbad hai isko try catch me rakh do pending dikha rah ahai
// getAllUsers();



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error);
//     }
// }  
// getAllUsers();                  //tyu catch kause karne ke baad bhi nahi  chal rah ahai


//  async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error);
//     }
    
//  }  
//  getAllUsers();                      //Ab chal gaya because response.json() bhi time lega convert hone me toh usme bhi await lagana hoga 



//upar wale kaam ko .then() .catch() se karenge
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=> console.log(error))
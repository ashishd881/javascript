// if(true){
//     let a=10
//     const b=20
//     var c=30
// }
// console.log(a);    //ye kuch nahi print karega  because scope ke bahar hai
// console.log(b);    //ye bhi kuch nahi print karega because scope ke bahar hai

// console.log(c);    //ye var variable hai toh ye scope me na hoke bhi print ho jayega 


// let a=300       //global scope 
// if(true){
//     let a=10    //Block scope  curly braces mtlb scope
//     const b=20
//     console.log(a)
   
// }
// console.log(a);    
// console.log(b);   

// browser me core scope hota hai wo alag hai aur yaha  scope alag hai 
  

// function one(){                //this is called closure of function closure mtlb child parent ke elements ko access kar sakta hai par parent child ke elements ko access nahi kar sakta hai
//     const username="hitesh"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
// //  console.log(website);     ye error dega
//     two()
// }
// one()
//upar ye note karna ki jab function call hoga tabhi wo chalega


if(true){
    const username="hitesh"
    if(username=="hitesh")
    {
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);   //ye error dega because scope website ka scope yaha nahi hai
}
// console.log(username)       ye error dega because scope username ka scope yaha nahi hai

// ++++++++++++++++++++++++++++interesting++++++++++++++++++++

// console.log(addone(6))            //ye chal jayega error nahi dega aur 7 print ha jayega
// function addone(num){
//     return num+1
// }
// console.log(addone(5))


// console.log(addTwo(9))            //ye arror dega because yaha jo function bana hai wo declare toh hua hi par wo ek variable me hold bhi hua hai error hoisting ke chalte hai 
// const addTwo=function(num){
//     return num+2
// }
// console.log(addTwo(6))
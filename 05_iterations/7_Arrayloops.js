const myNumers =[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumers.map((num)=> num+10)                   //map ke andar callback function diya  aur ye array return karega toh store akr liya
// console.log(newNums);

// const newNums=[]
// myNumers.forEach((num)=>{
//     newNums.push(num+10)
// })
// console.log(newNums);

// const newNums= myNumers                                    //yaha pe hum chaining kar rahe hai first map se values second map me pass hongi ten multuply hone ke baad one add ho jayega
//                         .map((num)=> num*10)
//                         .map((num)=> num+1)
// console.log(newNums);


const newNums= myNumers                                    //yaha pe hum chaining kar rahe hai first map se values second map me pass hongi ten multuply hone ke baad one add ho jayega
                        .map((num)=> num*10)
                        .map((num)=> num+1)
                        .filter((num)=>num>=40)
console.log(newNums);
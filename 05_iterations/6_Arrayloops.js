const coding =["js","ruby","java","python","cpp"]

// coding.forEach((item)=>{
//     console.log(item);
//    
// })

// const values=coding.forEach((item)=>{
//     console.log(item);

// })
// console.log(values);   //ye undefined output de raha hai

// chalo return statement laga ke dekhte hai ka pata output mil jaye 
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);    //phir bhi output undefined hi hai mtlb for each value return nahi karta hai

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num >4)       //filter ke andar hum callback function aur condition denge
// console.log(newNums);

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num >4)       //filter ke andar hum callback function aur condition denge
// console.log(newNums);


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> {
//    return  num >4                       //curly braces laga ke scope chalu kar diya toh yaha return keyword likhna hi hoga nahi toh output empty array ho ga
// })       
// console.log(newNums);


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);       //is me bhi upar wale jaisa hi output aayega

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks=books.filter((bk)=> bk.genre==='History')
  //console.log(userBooks)

//   userBooks=books.filter((bk)=> {bk.publish >= 2000})
//   console.log(userBooks)      //iska output kuch nahi aa raha h because hum ne scope open kar liya hai to return karna hoga

// userBooks=books.filter((bk)=> {return bk.publish >= 2000})
//   console.log(userBooks)


userBooks=books.filter((bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks)
//Arrays

const myArr=[0,1,2,3,4,5]                //isko console me likh ke myA likhenge toh attributes dikh jayega
const myHeors=["shaktiman","naagraj"]
const myArr2= new Array(1,2,3,4)
// console.log(myArr[0])


//Arry Methods\


// myArr.push(6);
// console.log(myArr)
// myArr.push(7);
// console.log(myArr)
// myArr.pop(7);
// myArr.unshift(9);
// console.log(myArr)
// myArr.shift();     //isme arguments nahi dete hai  jo unshift kiya usko shift kardenge
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr =myArr.join()
// console.log(myArr)             //array print hogi
// console.log(newArr)            //comman sepated sting print hongi
// // join hamare newArr ka data type string me kar dega
// console.log(typeof newArr)

//slice ,splice

console.log("A",myArr);
const myn1 =myArr.slice(1,3)        //slice  first parameter se end-1 parameter ko print karega aur original array ko same rakhega
console.log("B",myArr)
const myn2 =myArr.splice(1,3)         //splice first parameter se end parameter ko print karega aur original array ko splice ke hisaab se divide kar dega 
console.log(myn1)      
console.log(myn2)

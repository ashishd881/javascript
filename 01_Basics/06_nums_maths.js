// const score=400
// const balance=new Number(100)  //object
// console.log(balance);          //ye 3 line ko console me likh ke ke prototype me functions dekh lo
// console.log(typeof(balance));
// console.log(balance.toString);   //ye rahega 100 hi par data  string ban gay toh string ke functions ka use ho sakta hai
// console.log(typeof balance)
// console.log(balance.toFixed(2));   //decimal ke baad kitne digits tak no chaiyea

// const otherNumber =123.8966
// console.log(otherNumber.toPrecision(3));   //precision mtlb total kitne digits chaiyea rounding ke baad
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(5));
// console.log(otherNumber.toPrecision(2));

// const hundreds=1000000
// console.log(hundreds.toLocaleString());   //us standard ke hisb s ecoma lageag
// console.log(hundreds.toLocaleString('en-IN'));  //india number system ke hisab se comma lag jayenge

// const balance=new Number(100)  //object
// console.log(balance);          //ye 3 line ko console me likh ke ke prototype me functions dekh lo
//                                //number ke baad dot likhoge tab isSafeIntege Max_value min_value se sab dikh jayenge



// *********************************Maths****************************
 
// console.log(Math)             //yaha pe ye math ka objecct retun karega par agar isko conslole me likhenge toh kafi options dikhenge
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,5,7,6));
// console.log(Math.max(4,5,7,6));

console.log(Math.random());      //0 aur 1 ke beech me values return karega
console.log((Math.random()*10)+1);   // aur bade na ki value return karega  min value yaha one hogi

const min =10;
const max=20;
console.log((Math.random() *(max -min +1)) + min)   //max aur moin ke beech me numbers dega ye
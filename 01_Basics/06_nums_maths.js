const score=400
const balance=new Number(100)  //object
console.log(balance);          //ye 3 line ko console me likh ke ke prototype me functions dekh lo
console.log(typeof(balance));
console.log(balance.toString);   //ye rahega 100 hi par data  string ban gay toh string ke functions ka use ho sakta hai
console.log(balance.toFixed(2));   //decimal ke baad kitne digits tak no chaiyea

const otherNumber =123.8966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(2));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));  //india number system ke hisab se comma lag jayenge
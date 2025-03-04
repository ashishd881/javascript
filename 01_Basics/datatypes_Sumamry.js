//based on how data is stored in memeory they are of 2 types
//primitive and non primitive
//primitive -7types:String,Number,Boolean,Null,undefined,Symbol,BigInt
//decimal bhi number me aate hai
//undefined mtlb data nahi diya gaya variable aur memory ready hai
//symbol mtlb kisi value ko unique banana
//BigInt badi values jo number me nahi aa rahi

const score=100
const scoreValue=100.3
const isLoggedIn=false;
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)
console.log(id===anotherid)

const bigNumber=2345678945454555
//Reference (non primitive)-Array,Object,Functions

const heros=["shaktiman","naagraj","doga"]  //array
let myOnj={                           //curley braces ke andar jitna value hao wo object tha data type number string dusra object kuch bhi ho sakta hai
    name:"hitesh",
    age:22
}
const myFunction =function(){

    console.log("hello world");
}
console.log(typeof outsideTemp)    //object
console.log(typeof userEmail)
console.log(typeof anotherid)
console.log(typeof bigNumber)
console.log(typeof heros)         //non primitive hai toh type of object bateyega
console.log(typeof myOnj)         //non primitive hai toh type of object bateyega
console.log(typeof myFunction  )  //non primitive hai toh type of  object function bateyega
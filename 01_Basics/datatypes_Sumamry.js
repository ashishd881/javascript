//based on how data is stored in memeory they are of 2 types
//primitive and non primitive
//primitive -7types:String,Number,Boolean,Null,undefined,Symbol,BigInt
//decimal bhi number me aate hai
//undefined mtlb data nahi diya gaya variable aur memory ready hai
//symbol mtlb kisi value ko unique banana
//BigInt badi values jo number me nahi aa rahi

// const score=100
// const scoreValue=100.3
// const isLoggedIn=false;
// const outsideTemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id==anotherid)
// console.log(id===anotherid)    //both are false because symbols are always unique

// const bigNumber=2345678945454555
// //Reference (non primitive)-Array,Object,Functions

// const heros=["shaktiman","naagraj","doga"]  //array
// let myOnj={                           //curley braces ke andar jitna value hao wo object tha data type number string dusra object kuch bhi ho sakta hai
//     name:"hitesh",
//     age:22
// }
// console.log(typeof (heros));   //
// console.log(typeof (myOnj));


const myFunction =function(){

    console.log("hello world");
}

// console.log(typeof heros)         //non primitive hai toh type of object bateyega  object because array is a type of object
// console.log(typeof myOnj)         //non primitive hai toh type of object bateyega
// console.log(typeof myFunction  )  //non primitive hai toh type of  object function bateyega

//
// ************************
//stack(for primitive datatypes and create copy of variable)
//heap(for non primitive datatype yaha pe values ka reference milta hai koi bhi changes original memory me hogi)

// let myytname="hitesh"
// let anothername=myytname
// console.log(anothername);

// anothername="chaiaurcode"   //yaha change karne se myytname me change nahi hoga because another name ko myytname ka ek copy diya gaya hai

// console.log(anothername);
// console.log(myytname);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
console.log(userOne)
let userTwo=userOne
console.log(userTwo)

userTwo.email="hitesh@googel.com";    //iske chalte user1 ki value bhi change hogi because userOne aur userTwo
                                           //banega stack me par heap ke ek ho object ko point karenge toh dono change honge
console.log(userOne)
console.log(userTwo)

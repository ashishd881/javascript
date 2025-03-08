// const userEmail="h@ashish.ai"
// if(userEmail){              //useEmail ek truthy value hai
//     console.log("Got he use email")

// }
// else{
//     console.log("dont have user email");
// }
//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaM

// truthy value 
//"0","false",'false'," ",' ',[],{},function(){}
//false ki strings, quotes ke andar space,array object ,empty function sab truthy values hai


// const useremail =[]
// if(useremail.length ===0)
// {
//     console.log("Array is empty")
// }

// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){        //object.keys(emptyObj) ek array return karega keys ki aue uski length ko dekh lo
//     console.log("Object is empty")

// }


//Nullish coalscing Operator(??) :null and undefined


let val1;
// val1 = 5 ?? 10  5 aayega
// val1 = null ?? 10     //manlo null value hum ko accept nahi karni hai toh hum 10 ki jagha aage ja ke ek function likhenge  wo jo value return karega hu usi ko val1 me put kar denge
val1 = undefined ?? 15   //15 aayega

val1=null ?? 10 ?? 20    //10 aayega
console.log(val1);


//Ternary Operator  means condition ?true:false

// condition ? true :false
const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less than 80") :console.log("more than 80")
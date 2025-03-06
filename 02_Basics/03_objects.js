// singleton
// singleton mtlb object.create


//object literls

const mySym=Symbol("key1")

const JsUser={            //keys bhi de sakte hai name,age ki jagha
    name:"hitesh",
    "full name":"hitesh caudhary",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// // console.log(JsUser[email])     ye error dega email is not define because ye string ki tatah treat ho raha hai
// console.log(JsUser["email"])
// // console.log(JsUser.full name)  //full name dot laga ke access nahi kar sakte hai
// console.log(JsUser["full name"])

// console.log(JsUser["mySym"])
// console.log(typeof JsUser["mySym"])   // type of string ban gaya jab ki ye ek symbol tha because we did wrong declaration of symbol shown by comment

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])   //correct way to get mySym values  type of yaha bhi string hi hoga typeof
                                    //sumbol tab hoga jab symbol ki tarah mysym ko symbol banaya jaye

// JsUser.email="hitesh@microsoft.com"
// console.log(JsUser)

// Object.freeze(JsUser)    //JsUser freeze ho gaya toh ab email change nahi hoga 
// JsUser.email="hitesh@yahoo.com"
// console.log(JsUser)     //humne mySym ko sumboll banaya tha toh wo symbol (key1) ki tarah print ho raha hai

JsUser.greeting =function(){
    console.log("hello js user")
}
// console.log(JsUser.greeting)    //function anonymus function return back  aa gaya
console.log(JsUser.greeting())

JsUser.greetingTwo =function(){
    console.log(`hello js user,${this.name}`)    //back ticks laga ke hum interpolation kar rahe hai this pointer se JsUser ke name ko reffer kar rahe hai
}
console.log(JsUser.greetingTwo())             //output me undefined dikh rha hai uske baare me aage baat karenge

const user ={
    username:"hitesh",
    loginCount :8,
    signedIn:true,
    getUserDetails : function(){
        // console.log("Got user details");
        // console.log(`username: ${username}`); //ye error dega because
        console.log(`username: ${this.username}`); //ye sahi chalega
        console.log(this);

    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)        //ye empty parenthis dega browser console me window dega

// const promiseOne = new Promise()  //new ek constructor function hai taki ek object literal se multiple instances bana sake
// const date = new Date()


function User(username, loginCount,isLoggedIn){
    this.username=username    //is scope ke andar ke variabe le this lagaya gaya hai
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;   //isko likho ya na likho fark nahi padta
}

// const userOne =  User("hitesh",12,true)
// const userTwo =  User("chai",11,false)

// console.log(userOne);        //userTwo ki values replace ho gayi hai userone se because naya instance nahi bana hai userTwo ke liye se we use new keyword

const userOne =  new User("hitesh",12,true)
const userTwo = new  User("chai",11,false)

console.log(userOne);   
console.log(userTwo);   
console.log(userOne.constructor);     //khud hi ke bare me reference dega instance javascript  ke bare me padh lo


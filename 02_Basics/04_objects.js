const tinderuser =new Object()     //single ton object which is empty
const tinderuser1={}                 //not a singleton object but is empty
// console.log(tinderuser)

tinderuser.id="123abc"
tinderuser.name="sammu"
tinderuser.isLoggedIn=false
// console.log(tinderuser)


const regularUser={               //objecgt ke andar object ke andar ek object bana diya
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname);  //dots laga laga ke nesting kholte jaa rahe hai hum 

const obj1={1:"a",2:"b"}    //isko console me liokh do to get properties
const obj2={3:"a",4:"b"}
const obj4={5:"c",6:"f"}

// const obj3={obj1,obj2}    //object ke andar object aa jayega
// const obj3=Object.assign({},obj1,obj2)  //empty parenthesis is a optional parameter
// const obj5=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);           //control +l se line select hogi
// console.log(obj5);

// const obj6={...obj1,...obj2,...obj4}   //spread kar diya
// console.log(obj6);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
users[1].email    //phale email aa jayega
console.log(tinderuser);
console.log(Object.keys(tinderuser));     //sari keys ko liya aur array me bana diya

console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));   //hum check kar rahe hai ki isLoggedIn hai ki nahi nahi toh crash ho sakta hai
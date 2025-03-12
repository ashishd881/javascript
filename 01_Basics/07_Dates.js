//Dates

// let myDate =new Date()       //date ka type of object hi hoga
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());                    //control +space ka use karne se jo options nahi dikhte wo dikhne lagte hai
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


// let myCreatedDate =new Date(2033,0,45)    //month 0 se start hote hai javascript ke andar
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());


// let myCreatedDate2 =new Date(2033,0,45,5,3)  //3 se zayada argument dali hai toh wo time me kconvert ho jayega
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 =new Date("1-14-2023")     //yaha month 1 se ho chalu hoga
// console.log(myCreatedDate3.toLocaleString()) 


let myCreatedDate =new Date("01-14-2023")
let myTimeStamp =Date.now()
console.log(myTimeStamp);             //pole wagera banaoge toh usme ye time stamp lagta hailagta  hai fastest ko winner banane ke liye
                                      // ek january 1970 se kitne seconda beet gaye
console.log(myCreatedDate.getTime());   //upar di date tak kitne milliseconds hue hai 1 january 1970 tak

console.log(Math.floor(Date.now()/1000))    //asia karne se time seconds me milne lageaga par decimal ke baad bhi numbers honge so floor le lo

console.log(Math.floor(Math.floor(Date.now()/1000)))

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)     //+ kar diya kyunki months 0 se chalu honge
console.log(newDate.getDay())
console.log(newDate.getHours())

newDate.toLocaleString('default',{
    weekday:"long"
})

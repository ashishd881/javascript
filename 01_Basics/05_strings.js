// const name ="hitesh"
// const repoCounter=50
// console.log(name+repoCounter+"value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCounter} `);       //backticks ka use kar ke string interpolation se placeholder bana lo ${}

// const gameName = new String('hiteshc')  //console log me isko likh lo index wagera dikha jayega aur function dikh jayega
// console.log(gameName);    //arrow me click karne se saare method adikh jayenge

// key value pairs nikal liye
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'))

// const newString =gameName.substring(0,4)   //negative values are not allowed here
// console.log(newString)

// const anotherString=gameName.slice(-5,5)    //negative values are allowed here
// console.log(anotherString)
// const anotherString2=gameName.slice(-6,5)    //negative values are allowed here
// console.log(anotherString2)
// const anotherString3=gameName.slice(-7,5)    //negative values are allowed here
// console.log(anotherString3)
// const anotherString4=gameName.slice(0,5)    //negative values are allowed here
// console.log(anotherString4)

// const newStringone="  hitesh   "
// console.log(newStringone)
// console.log(newStringone.trim());   //space ko trim kar diya
// const url="https://hitesh.com/hitesh%20chaudhary"   //brower spaces nahi samajta hitesh aur chaudhary ke beech me jo space hai wo %20 me convert kar denge urln coding me
//  console.log(url.replace('%20','-'))      //replace ho gaya

//  console.log(url.includes('hitesh'))   //true

const gameName2 =new String('hitesh -hc')
console.log(gameName2.split('-'))        //split ke argument me separater hai
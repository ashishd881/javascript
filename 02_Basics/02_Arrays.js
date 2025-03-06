const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)         //dc wali array as an element push ho gayi

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);      //third element jo ki array hai uske andar se value nikalne ke liye 1 likha gaya hai

// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros)
// const all_new_heros=[...marvel_heros,...dc_heros]   //arrays ko concat karne ka dusra tarika spread bolte hai ya spread operator ek ek element spread ho jayega
// console.log(all_new_heros);

// const another_Array =[1,2,3,[4,5,6],7,[6.7,[4,5]]]

// const real_another_array=another_Array.flat(Infinity)      //asia karne se andar jitni depth hai utni depth se elements ko nikal lega
// console.log(real_another_array)


console.log(Array.isArray("hitesh"))   //pucha string array hai ki nhai
console.log(Array.from("hitesh"))    //from function di gayi values ko array ke andar convert kar degga
console.log(Array.from({name:"hitesh"}))   //iski ye arrays nahi bana payega toh empty array return karega

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

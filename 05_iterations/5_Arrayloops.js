const coding =["js","ruby","java","python","cpp"]   //console me ja ke isko likho phir coding likho drop down menue kholo toh bhaut saare attributes dikh jayenge 


// coding.forEach( function name() {} )   for each ke andar function likh do par usko callback banana  hoga callback banane ke liye uska naam hata do

// coding.forEach( function (val) {          //ye callback function ban gaya
//     console.log(val) 
// } ) 

// coding.forEach((item) =>{            //arrow function se naam hata do callback function ban gaya 
//     console.log(item);
// })

// function printMe(item){          //ye bhi upar wali array print kar dega
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr)        //badhiya output de raha hai
})

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"

    },
    {
        languageName:"java",
        languageFileName:"java"
        
    },
    {
        languageName:"python",
        languageFileName:"py"
        
    },
    {
        languageName:"Ruby",
        languageFileName:"rb"
        
    }
]
myCoding.forEach( (item)=>{
    console.log(item.languageName);
})
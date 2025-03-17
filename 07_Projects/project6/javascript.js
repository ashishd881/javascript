// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;
const startChangingColor = function(){
    if(!intervalId)
        intervalId = setInterval(changeBgColor,2000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
        
    }
    
    //color ko continuously change karne ke liye set interval me dal diya
}



const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId=null;   ///memory space free karne ke liye aur edge case dekhne ke liye isko null kar diyA
}

document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)

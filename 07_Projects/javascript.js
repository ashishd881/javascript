const buttons =document.querySelectorAll('.button')  //ye nodelist return karega toh for each loop laga saakte hai
// console.log(buttons)
const body =document.querySelector('body')
buttons.forEach(function (button){
    console.log(button);
    //yaha pe event listner lagaye event jaise coursor uske upar se gay page refresh hua etc
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;       //e.target.id ki jagha hum grey bhi likh sakte hai because uske andar greyy hi hai
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;       //e.target.id ki jagha hum grey bhi likh sakte hai because uske andar greyy hi hai
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;       //e.target.id ki jagha hum grey bhi likh sakte hai because uske andar greyy hi hai
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;       //e.target.id ki jagha hum grey bhi likh sakte hai because uske andar greyy hi hai
        }
    })     
    //click event ho toh callback likh diya event object ki details ko e naam de diya

});
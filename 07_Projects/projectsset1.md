<!-- md mtlb markdown files 
top right me jo 2 dabbe aur search ka option hai waha click karen se side me preview khul jata hai
hamare saare projects ka javascript code hum yaha likhenge aur HTML,CSS aur javascript code stackBlitz me hai 
HTML aur css ki bina chinta kare hue hum stackblitz ka use kar sakte hai-->

# project Related to Dom

```Project1

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



```project2

const  form=document.querySelector('form')
console.log(form)
//form ka default action ie data server ko bejhna usko hum ko rokna hoga because server hai hi nahi yaha
//aur event yaha pe submit hoga
// we cant extract height and weight here  because this usecase will give you empty
form.addEventListener('submit',function(e){
    e.preventDefault();                  //default action ko rok diya data jo server me ja raha
    
    const height = parseInt(document.querySelector('#height').value)    //input ki value lene ke liye .value kiya gaya hai par value sting me milegi so parse it to int
    const weight = parseInt(document.querySelector('#weight').value)    //input ki value lene ke liye .value kiya gaya hai par value sting me milegi so parse it to int
    const results = document.querySelector('#results')             //no need of parsing for result
    
    if(height ==='' || height < 0 || isNaN(height))
    {
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight ==='' || weight < 0 || isNaN(weight))
        {
            results.innerHTML = `please give a valid weight ${weight}`;
        }
    else
    {
        const bmi=(weight/(height*height/10000)).toFixed(2)
        //show the result
        results.innerHTML =`<span>${bmi}</span>`
    }
        
})

```
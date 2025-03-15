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
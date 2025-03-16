const clock=document.getElementById('clock')
// const clock =document.querySelector('#clock')    1 and 2 both are same

// let date=new Date()
// console.log(date.toLocaleTimeString()) //ab humko date ko har baar run karna almost every second answer is not crownjob it is server related
// answer to this is setinterval method isme hum event de dnege aur usko batayenge ki kitni der baad run karna hai  toh in dono lines ko usi ke andat likh do

// setInterval(function(){},1000)  //1000ms me hai mtlb 1 sec

setInterval(function(){
    let date=new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleString();      //tolocal time string se sirf time show hoga
},1000);
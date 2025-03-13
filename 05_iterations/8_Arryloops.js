const myNums=[1,2,3]
// const myTotal=myNums.reduce(
//     function(Accumulator,currentValue) {
//         console.log(`Accumulator:${Accumulator} and currentvalue:${currentValue}`)
//         return Accumulator+currentValue
//     },0                                               //Accumulator ko initial value dene ke liye yaha par 0 likha gaya hai har agli baar Accumulator me jo value jayegi wo Accumulator +currentvalue hogi aur current value aage badhta jayega
// )
// console.log(myTotal);

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)           //Arrow function banadiay
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"Py course",
        price:999
    },
    {
        itemName:"Mobile dev",
        price:2999
    },
    {
        itemName:"data science course",
        price:4999
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>item.price+acc,0)

console.log(priceToPay)
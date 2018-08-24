var Orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
var total = 0;
// function sum(arr) {
//     for(let i = 0; i< arr.length; i++){
//          total = total+ arr[i].amount
//     }
// }
//------------------------------------------------ using reduce method
function add(arr) {
    return arr.reduce(function (sum, item) {
        return sum += item.amount;
    }, 0);
}
;
add(Orders);
console.log(add.value);

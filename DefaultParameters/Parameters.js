function calculatePayment(price, salesTax, discount){
    salesTax = salesTax === 'undefined' ? 0.047 //setting default values
    discount = discount === 'undefined' ? 0 // setting defalut values

    console.log('tax', salesTax)
    console.log('discount', discount)

    //math
}
calculatePayment(100,0,0) // 0 is false, so it will use 0.47

//solution:
function calculatePaymentPam(price, salesTax, discount){
    salesTax = typeof salesTax === 'undefined' ? 0.047 : salesTax 
    discount = typeof discount === 'undefined' ? 0 : discount 

    console.log('tax', salesTax)
    console.log('discount', discount)

    //math
}
calculatePaymentPam(100,0,0) 

function isRequired(name){
    throw new Error(name + ' is required')
}
//best way: 
function calculatePaymentPameters(price = isRequired('price'), salesTax = 0.047, discount=0){
    console.log('tax', salesTax)
    console.log('discount', discount)
}


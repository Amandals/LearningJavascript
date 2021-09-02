function discountPrices(prices, discount){
    var discounted = [];
    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

discountPrices([100,200,300], .5)

// var vs let vs const
//var
//   - function scoped
//   - undefined
//let 
//   - block scoped {}
//   - reference error (before they are declared)
//const 
 //   - can't reassign a value
 //   - basically you are saying that the value will never change
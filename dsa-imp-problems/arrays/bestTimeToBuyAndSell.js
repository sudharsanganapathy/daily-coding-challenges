// Approach:
// 1. Initialize minPrice as Infinity to track the lowest price seen so far.
// 2. Initialize maxProfit as 0 because we cannot have a negative profit.
// 3. Traverse the prices array from left to right.
// 4. If the current price is smaller than minPrice, update minPrice.
// 5. Calculate the profit by subtracting minPrice from the current price.
// 6. If the current profit is greater than maxProfit, update maxProfit.
// 7. Continue until all prices are processed.
// 8. Return maxProfit.


const prices = [7, 1, 5, 3, 6, 4];

let minPrice = Infinity;
let maxProfit = 0;

for(let i=0; i<prices.length; i++){

    if(prices[i]<minPrice){
        minPrice = prices[i];
    }

    let profit = prices[i]-minPrice;

    if(profit>maxProfit){
        maxProfit = profit;
    }

}

console.log(maxProfit);
function birthdayCakeCandles(candles) {
    // Find the height of the tallest candle
    const max = Math.max(...candles);

    // Filter the array to get only the tallest candles and return their count
    return candles.filter(candle => candle === max).length;
}

// Example usage:
const candles = [3, 2, 1, 3];  // Array representing the heights of the candles
const result = birthdayCakeCandles(candles);  // Call the function and store the result
console.log(result);  // Output will be 2 since there are two candles of height 3
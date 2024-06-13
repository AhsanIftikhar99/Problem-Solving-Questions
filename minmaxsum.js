function miniMaxSum(arr) {
    // Calculate the total sum of all elements in the array
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    
    // Calculate the minimum sum by subtracting the maximum element from the total sum
    const minSum = totalSum - Math.max(...arr);
    
    // Calculate the maximum sum by subtracting the minimum element from the total sum
    const maxSum = totalSum - Math.min(...arr);
    
    // Print the results as space-separated values
    console.log(`${minSum} ${maxSum}`);
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // Output: 10 14
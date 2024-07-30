function reverseArray(a) {
    let newarr = [];
    for (let i = a.length - 1; i >= 0; i--) {
        newarr.push(a[i]);
    }
    return newarr;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let reversedArr = reverseArray(arr);
console.log(reversedArr); 
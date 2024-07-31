#include <iostream>
#include <algorithm> // For sort function
using namespace std;

bool hasPairWithSum(int arr[], int size, int sum) {
    // Sort the array
    sort(arr, arr + size);

    // Initialize two pointers
    int left = 0;
    int right = size - 1;

    // Traverse the array with two pointers
    while (left < right) {
        int currentSum = arr[left] + arr[right];

        // Check if the current sum is equal to the target sum
        if (currentSum == sum) {
            return true;
        }

        // If current sum is less than the target, move the left pointer to the right
        if (currentSum < sum) {
            ++left;
        } else { // If current sum is greater than the target, move the right pointer to the left
            --right;
        }
    }

    // If no pair is found
    return false;
}

int main() {
    int arr[] = {10, 2, 3, 7, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int sum = 9;

    if (hasPairWithSum(arr, size, sum)) {
        cout << "There is a pair with the given sum." << endl;
    } else {
        cout << "There is no pair with the given sum." << endl;
    }

    return 0;
}

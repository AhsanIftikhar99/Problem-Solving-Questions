#include <iostream>
using namespace std;

// Function to check if a given integer is a palindrome
bool isPalindrome(int num) {
    // Negative numbers are not palindromes
    if (num < 0) return false;

    // Store the original number for comparison later
    int originalNum = num;
    // Variable to store the reversed number
    int reversedNum = 0;

    // Reverse the number
    while (num != 0) {
        // Get the last digit of the number
        int digit = num % 10;
        // Build the reversed number
        reversedNum = reversedNum * 10 + digit;
        // Remove the last digit from the number
        num /= 10;
    }

    // Check if the original number is equal to the reversed number
    return originalNum == reversedNum;
}

int main() {
    int number;
    // Prompt the user to enter an integer
    cout << "Enter an integer: ";
    cin >> number;

    // Check if the entered number is a palindrome
    if (isPalindrome(number)) {
        cout << number << " is a palindrome." << endl;
    } else {
        cout << number << " is not a palindrome." << endl;
    }

    return 0;
}

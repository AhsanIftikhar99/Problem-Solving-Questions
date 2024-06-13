#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
    int n;

    cout << "Enter number of rows: ";
    cin >> n;

    for(int i = 1; i <= n; ++i) {
       for (int j = 1; j <= n - i; ++j) { // Loop for dashes
            cout << ' ';
        }
        for (int k = 1; k <= i; ++k) { // Loop for asterisks
            cout << '*';
        }
        cout << std::endl; 
    }
    return 0;
}

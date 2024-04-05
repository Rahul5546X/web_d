#include <iostream>
using namespace std;
void change(int *b, int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        *(b + i) = *(b + i) + 5;
    }
}

void f(int *x, int y)
{
    int i;
    for (i = 0; i < 5; i++)
        *(x + i) += 2;
    y += 2;
}

int main()
{
    cout << "Hello world";
    // A  1st
    //  int num[26];
    //  int temp;
    //  num[0] = 100;
    //  num[25] = 200;
    //  temp = num[25];
    //  num[25] = num[0];
    //  num[0] = temp;
    //  printf("\n%d %d", num[0], num[25]);

    // 2nd
    // int array[26], i ;
    // for ( i = 0 ; i <= 25 ; i++ )
    // {
    // array[i] = 'A' + i ;
    // printf ( "\n%d %c", array[i], array[i] ) ;
    // }

    // 3rd
    // int sub[50], i ;
    // for ( i = 0 ; i <= 48 ; i++ )
    // {
    // sub[i] = i ;
    // printf ( "\n%d", sub[i] ) ;
    // }

    // d 1st
    // int size, key, count = 0;

    // // Input the size of the array
    // cout << "Enter the size of the array: ";
    // cin >> size;

    // // Declare the array
    // int arr[size];

    // // Input array elements
    // cout << "Enter " << size << " numbers:\n";
    // for (int i = 0; i < size; i++) {
    //     cin >> arr[i];
    // }

    // // Input the number to be searched
    // cout << "Enter the number to be searched: ";
    // cin >> key;

    // // Search for the number in the array and count its occurrences
    // for (int i = 0; i < size; i++) {
    //     if (arr[i] == key) {
    //         count++;
    //     }
    // }

    // // Display the result
    // if (count > 0) {
    //     cout << "The number " << key << " is present in the array " << count << " time(s)." << endl;
    // } else {
    //     cout << "The number " << key << " is not present in the array." << endl;
    // }

    // d 2nd

    //      const int size = 25; // Constant for the size of the array
    //     int arr[size];
    //     int positiveCount = 0, negativeCount = 0, evenCount = 0, oddCount = 0;

    //     // Input array elements
    //     cout << "Enter " << size << " numbers:\n";
    //     for (int i = 0; i < size; i++) {
    //         cin >> arr[i];
    //     }

    // Count positive, negative, even, and odd numbers
    // for (int i = 0; i < size; i++) {
    //     if (arr[i] > 0) {
    //         positiveCount++;
    //     } else if (arr[i] < 0) {
    //         negativeCount++;
    //     }
    //     if (arr[i] % 2 == 0) {
    //         evenCount++;
    //     } else {
    //         oddCount++;
    //     }
    // }

    // // Display the counts
    // cout << "Number of positive numbers: " << positiveCount << endl;
    // cout << "Number of negative numbers: " << negativeCount << endl;
    // cout << "Number of even numbers: " << evenCount << endl;
    // cout << "Number of odd numbers: " << oddCount << endl;

    // e 1st
    // int b[] = {10, 20, 30, 40, 50};
    // int i;
    // for (i = 0; i <= 4; i++)
    // {
    //     printf("\n%d",*(b+i));
    // }

    // e 2nd
    // int b[] = {0, 20, 0, 40, 5};
    // int i, *k;
    // k = b;
    // for (i = 0; i <= 4; i++)
    // {
    //     printf("\n%d",*k);
    //     k++;
    // }

    // e 3rd

    // int a[] = {2, 4, 6, 8, 10};
    // int i;
    // change(a, 5);
    // for (i = 0; i <= 4; i++)
    //     printf("\n%d", a[i]);

    // e 4th
    // int a[5], i, b = 16;
    // for (i = 0; i < 5; i++){
    //     a[i] = 2 * i;
    // }
    //  for (i = 0; i < 5; i++)
    // {
    //     printf("\n%d", a[i]);
    // }
    // printf("\n");
    // f(a, b);
    // for (i = 0; i < 5; i++)
    // {
    //     printf("\n%d", a[i]);
    // }
    // printf("\n%d", b);

    // e 5th
    // static int a[5] ;
    // int i ;
    // for ( i = 0 ; i <= 4 ; i++ )
    // {
    // printf ( "\n%d", a[i] ) ;
    // }

    // e 6th
    int a[5] = {5, 1, 15, 20, 25};
    int i, j, k = 1, m;
    i = ++a[1]; //2 //3 
    j = a[1]++; //2
    m = a[i++]; //15
    cout<< i<<j<<m;

    return 0;
}

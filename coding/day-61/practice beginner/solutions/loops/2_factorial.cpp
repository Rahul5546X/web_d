#include <iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter the value you want factorial of ";
    cin>>n;
    int fact = 1;
     for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    cout<<"value of fact is "<<fact;
    
    return 0;
}
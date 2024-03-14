#include<iostream>
using namespace std;
int main()
{
    int a;
    int rev= 0;
    int remainder;
    cout<<"Enter the number you want to reverse :";
    cin>>a;
    int palindrome = a;
    cout<<"The number is "<<a;
    while(a!=0){
        remainder = a%10;
        rev = rev*10+remainder;
        a = a/10;
    }
    cout<<"\n THE reversed number is "<<rev;

    if(rev == palindrome){
        cout<<"\n It is palindrome \n";
    }
    else{
        cout<<"\n It is not palindrome  \n";
    }
}
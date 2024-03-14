#include<iostream>
using namespace std;

int gcd(int a, int b)
{
    if(a==0){
        return b;
    }
    if(b==0){
        return a;
    }
    while(a!=b){
        if(a>b){
            a = a-b;
        }
        else{
            b =b -a;
        }
    }
    return a;
}
int main(){
    int a;
    int b;
    cout<<"Enter the value of a and b respectively := ";
    cin>>a>>b;
    int hcf = gcd(a,b);
    int product = a*b;
    // we know lcm(a,b)*gcd(a,b) = a*b so 
    // lcm(a,b) = a*b/gcd(a,b)

    int lcm = product/hcf;
    cout<<"The lcm is "<<lcm;
    return 0;
}
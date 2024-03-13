#include <iostream>
using namespace std;
int main(){
    int a,b,c;
    cin>>a>>b>>c;
    if((a>=b) && (a>=c)){
        cout<<"A is the greatest";
    }
    else if((b>=a) && (b>=c)){
        cout<<"B is the greatest";
    }
    else{
        cout<<"C is the greatest";
    }
}
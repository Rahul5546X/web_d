#include<iostream>
using namespace std;
int main(){
    for (int i = 0; i < 6; i++)
    {
        cout<<"\n";
        for (int j = 0; j<5-i; j++)
        {
            cout<<"*";
        }
    }
    return 0;
}
// #include <iostream>
// using namespace std;
// int main(){ 
//     int a,b ;
//     int temp;
//     cout<<"enter the value of a and b respectively " ;
//     cin>>a>>b;
//     cout<<"before swapping";
//     cout<<"the value of a is "<<a<<" and the value of b is \n"<<b;
//     cout<<" After swapping \n";
//     temp = a;
//     a = b;
//     b = temp;
//     cout<<"the value of a is "<<a<<" and the value of b is "<<b;
//     return 0;
// }

// #include <iostream>
// using namespace std;
// int main(){ 
//     int a,b ;
//     cout<<"enter the value of a and b respectively " ;
//     cin>>a>>b;
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     cout<<"the value of a is "<<a<<" and the value of b is "<<b;
//     return 0;
// }

// #include <iostream>
// using namespace std;
// int main(){ 
//     int a,b ;
//     cout<<"enter the value of a and b respectively " ;
//     cin>>a>>b;
//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;
//     cout<<"the value of a is "<<a<<" and the value of b is "<<b;
//     return 0;
// }

#include <iostream>
using namespace std;
int main(){ 
    int a,b ;
    cout<<"enter the value of a and b respectively " ;
    cin>>a>>b;
    swap(a,b);
    cout<<"the value of a is "<<a<<" and the value of b is "<<b;
    return 0;
}
#include <iostream>
using namespace std;
int main() {
char c;
bool lowercase, uppercase;
cout<<"enter the character";
cin>>c;
lowercase = (c =='a'|| c =='e'|| c =='i'||c =='o'||c =='u');
uppercase = (c =='A'|| c =='E'|| c =='I'||c =='O'||c =='U');

if(!isalpha(c)){
    cout<<"Please enter a character or alphabet ";
}

else if(lowercase|| uppercase)
{
    cout<<"The character "<<c<<" is vowel";
}
else{
    cout<<"The character "<<c<<" is consonent";
}
return 0;
}
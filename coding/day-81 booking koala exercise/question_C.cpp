#include <iostream>
using namespace std;
int main()
{
     float abc = 2.5;
    int big = 2;
    float g = big / 2 + big * 4 / big - big + abc / 3; // 3.8333
    // float g = ((big / 2) + ((big * 4) / big) - big) + (abc / 3);
    cout << g;
    cout<<endl;

    int ink = 4;
    int act = 1;
    float tig = 3.2;
    int on = ink * act / 2 + 3 / 2 * act + 2 + tig; //8
    // int on = ((ink * act) / 2) + ((3 / 2) * act) + (2 + tig);
    cout << on;
    cout<<endl;

    int qui = 4;
    int add = 2;
    int god = 2;
    int sod = qui * add / 4 - 6 / 2 + 2 / 3 * 6 / god; //-1
    // int sod = ((qui * add) / 4) - (6 / 2) + ((2 / 3) * (6 / god));

    cout << sod;
    cout<<endl;

    int a = 4;
    int f = 3;
    int s = 1 / 3 * a / 4 - 6 / 2 + 2 / 3 * 6 / f; //-3
    // int s = ((1 / 3) * a / 4) - (6 / 2) + ((2 / 3) * (6 / f));
    cout << s;
    cout<<endl;
    return 0;
}
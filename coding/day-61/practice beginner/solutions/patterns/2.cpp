#include <iostream>
using namespace std;
int main()
{
    for (int i = 0; i < 3; i++)
    {
        cout << "\n";
        for (int j = 0; j < 4; j++)
        {
            if (i == 1 &&( j == 1 || j == 2))
            {
                cout << " ";
            }
            else
            {
                cout << "*";
            }
        }
    }
    return 0;
}


/*
(a) int = 314.562 * 150 ;
(b) name = ‘Ajay’ ;
(c) varchar = ‘3’ ;
(d) 3.14 * r * r * h = vol_of_cyl ;
(e) k = ( a * b ) ( c + ( 2.5a + b ) ( d + e ) ;
(f) m_inst = rate of interest * amount in rs ; 
(g) si = principal * rateofinterest * numberofyears / 100 ;
(h) area = 3.14 * r ** 2 ;
(i) volume = 3.14 * r ^ 2 * h ;
(j) k = ( (a * b ) + c ) ( 2.5 * a + b ) ;
(k) a = b = 3 = 4 ;
(l) count = count + 1 ;
(m) date = '2 Mar 04' ;
*/

#include <iostream>
using namespace std;
int main()
{
    // int = 314.562 * 150 ; there is no name of a variable

    // name = ‘Ajay’ ; there is no datatype selected and there should be double quotes for a string

    // varchar = ‘3’ ; wrong use of quotes vrachar is not inbuilt so we have to use it like this string varchar = "3"

    // 3.14 * r * r * h = vol_of_cyl ; incorrect, we should assign a value to variable ,not to mathematical expression

    //  k = ( a * b ) ( c + ( 2.5a + b ) ( d + e ) ; there is not operators between the expressions

    // m_inst = rate of interest * amount in rs ; as we know variables names can not have spaces so there should not be a variable named rate of interest and amount in rs

    // si = principal* rateofinterest*numberofyears / 100 ; // we should use paranthesis in such expressions like si = (p*r*y)/100 and we should also declare the datatype of the variable

    // area = 3.14 * r ** 2 ; // incorrect use of exponentiation instead of this we can do this 3.14 * r *r

    // volume = 3.14 * r ^ 2 * h ;Same as above, incorrect use of exponentiation operator.

    // k = ( (a * b ) + c ) ( 2.5 * a + b ) ; there is not a operator between two expressions

    // a = b = 3 = 4 ; we can not use assignment operator like this

    // count = count + 1 ; // it is correct we can also do that count++

    //  date = '2 Mar 04' ; // for string we should use double quotes

    return 0;
}
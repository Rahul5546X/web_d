// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside

// // it'll redirect us to home
// // export function middleware(request) {
// //   return NextResponse.redirect(new URL('/home', request.url))
// // }

// // it'll redirect us to /
// export function middleware(request) {
//     // it'll decide what will be returned and it does not matter what is written on our actual 
//     // /about page.js
//     // we can just directly return the response from here
//     // we can also add custom headers
//     return NextResponse.redirect(new URL('/', request.url))
//   }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
// agr matcher nhi likha to e hr url ko redirect kr dega (even / ko bhi / pr redirect kr dega)


// matcher vale  path mn about dena h and upr function mn likhna h jahan bhi redirect hona h  





// we can also use conditionals
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}












// diff b/w redirect and rewrite
// redirect -- dusre page pr redirect ho jayenge url change ho jayega(http://localhost:3000/about) enter krte hi (http://localhost:3000/)  e ho jayega 

//re write-- url same rhega (http://localhost:3000/about) enter krne ke bad bhi yhi rhega bs jo home page likha hoga vo show hoga user ko


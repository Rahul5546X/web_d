### diff b/w express js middlware and nextjs middleware
```
basically middleware is used to modify the request

we can run a code before a request is completed and then we can also modify our response by rewriting,  redirecting, modifying the request or response headers, or responding directly

```

```
create a file middleware.js outermost level and paste the content from documetattion select app router

import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}

```

### working of middleware
```
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside

// it'll redirect us to home
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }


// it'll redirect us to /
export function middleware(request) {
    // it'll decide what will be returned and it does not matter what is written on our actual 
    // /about page.js
    // we can just directly return the response from here
    // we can also add custom headers
    return NextResponse.redirect(new URL('/', request.url))
  }
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}

// we can use reirect rewrite functions using this
// our goal is that agr koi about pr jaye to hm usko / pr redirect kr den to 
// matcher vale  path mn about dena h and upr function mn likhna h jahan bhi redirect hona h  
```

### // diff b/w redirect and rewrite
```
// redirect -- dusre page pr redirect ho jayenge url change ho jayega(http://localhost:3000/about) enter krte hi (http://localhost:3000/)  e ho jayega 

//re write-- url same rhega (http://localhost:3000/about) enter krne ke bad bhi yhi rhega bs jo home page likha hoga vo show hoga user ko
```
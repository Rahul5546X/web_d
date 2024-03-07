### authentication
```
 jo user bta rha h vo vhi h ya nhi (id psasword)
```
```
Authorization 
e decide krna ki user  app ka kon sa part access kr skta h
```

### way to use it
```
npm install next-auth
create a folder in app
api/auth/[...nextAuth]/route.js 
and paste the content inside it

import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from "next-auth/providers/github"

const handler =  NextAuth({
  providers: [
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ]
})
export { handler as Get, handler as Post}

```


```
import seesion provider in layout.js
it should be an client componnets
create a component named SessionWrapper.js inside app

"use client"
import { SessionProvider } from "next-auth/react"
import React from 'react'

const SessionWrapper = ({children}) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default SessionWrapper
```


```
write this code in page.js(main app page.js)
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
```


```
get github provider and paste it in route.js

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
create a file named .env.local in the folder named nex-auth

and then get id and key from github
```

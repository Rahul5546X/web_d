    ```
    basically everything in nextjs is a server component so if we want to use usestate, useEffect or things like this we have to make a client component by writing "use-client" on top of our file

    or we can do so 
    let our main component remain server componenet and the component we want to make client component just remove that component from main component and define it independent then import it to main component

    app
    components/Navbar("use client")
    server side
    import Navbar and then use it

    ```

    ``` basically server side ki output browser vale console mn ni aati vo jahan hm run krte hn bakend vhi aati h 

    and client side ki output browser pr aati h
```

### error trying to use useEffect and other hooks###
```
./app/page.js
Error: 
  × You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
  │ Learn more: https://nextjs.org/docs/getting-started/react-essentials
  │ 
  │ 
   ╭─[F:\sigma_web_d\coding\day-47 nextjs\122 server components\server-components\app\page.js:1:1]
 1 │ 
 2 │ import { useEffect } from "react";
   ·          ─────────
 3 │ 
 4 │ export default function Home() {
 5 │   return (
```

```
parent component server side ho 
aur child component client side ho tb bhi chlega vo aur yahi best way h krne ka mere hisab se


```
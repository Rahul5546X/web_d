### need of use context hook###
```
supppose hmare pass 
ek app h app.jsx and iske andr 
    ek component h navbar 
        navbar ke andr ek component h button 
            button ke andr ek or component h comp1


hmare pass ek state h app.jsx mn aur hmn vo state use krni h ekdm last component  mn
to hmn use as a prop hr component mn pass krna pdega
lekin hmn vo sirf last component mn chaiye pr usko pass to hr component se krna pdega(jahan ni bhi chaiye vahanse bhi pass krna pdega agar vo component raste mn aaye)


to uesContext hook use hr component mn avaiable krva deta h fir jahan chiaye ho vahan use kr skte hn


withoot useContext hook-- using prop dealing(we need the count state in comp1)

app.jsx <Navbar count={count}/>
    Navbar.jsx  <Button count = {count}/>
        Button.jsx  <Compp1 count={count}/>
            Comp1.jsx  {count} used here



with useContext hook 
create a folder named context in this all the files will have extension .js

context.js
    import { createContext } from "react";
    export const CounterContext = createContext(0)


app.jsx[state] import { CounterContext } from './context/context'
<CounterContext.Provider value = {{count,setCount}}>
     Navbar.jsx
        Button.jsx
            Comp1.jsx
</CounterContext.Provider>
    
    
```
### why to use useMemo hook###
```

Between re-renders koi ek valur bar bar compute na ho 

suppose we have some complex calculation and it's value is remaining same at most of the renders(when we change any other state whole component will re-render) but with each render it'll be computed(but it's value is still remaining same) , so to prevent that we can use useMemo

with the help of this the calculation will not be done at every render it'll be done only once or if the state inside dependency array changes, then the calculation will be done again


```
expensive calculation
state
 const [numbers, setNumbers] = useState(nums)
```
const nums = new Array(30_000_00_0).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_00_0
  }
})

Without useMemo
// const magical = numbers.find(item=>item.isMagical===true)  // site can crash after some time and it'll be very laggy
const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])
```
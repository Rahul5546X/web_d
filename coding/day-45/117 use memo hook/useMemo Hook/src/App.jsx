import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_000_00_0).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_00_0
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)
  // const magical = numbers.find(item=>item.isMagical===true) 
  // Expensive Computation
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])
  // numbers ke alava koi aur state change hone pr e calculate nhi hoga
  // e function is value ko memoize kr dega(ek bar calculate krke save kr lega)
  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
      </div>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){
            setNumbers(new Array(10_000_000).fill(0).map((_, i)=>{
              return {
                index: i,
                isMagical: i===9_000_000
              }
            }
            ))
          }
        }}>
          count is {count}
        </button>
      </div>
    </>
  )
}
export default App
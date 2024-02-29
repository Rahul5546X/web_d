// "use client" // isko tb uncomment krna agr usestate bgera yahin pr use krna ho pr fir backend ka dhyan rkhna

// import { useEffect ,useState} from "react";
import Navabr from "./components/Navabr";
export default function Home() {
  // console.log("hy") // if i do not use "use client" i can run my backend here

  // const [count, setCount] = useState(0)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="bg-red-400"> i'm a counter and value is {count}
      </div>
      <button onClick={()=>{
        setCount(count+1)
      }}>click me</button> */}
      <Navabr/>
      <div>i'm client</div>
    </main>
  );
}

// or just create a component named navbar and make it use client and use it
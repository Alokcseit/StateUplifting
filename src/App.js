import Child from "./Child";
import { useState } from "react";
function App() {
  const[data,setData]=useState("")
  const func=(name)=>{
    setData(name)
  }
  
  return (
   <>
   <div>parent</div>
   <div> my name is {data}</div>
   <Child func={func}>
   </Child>
   
   </>
  );
}

export default App;

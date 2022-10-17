import { useState } from "react";
import LoadContext from "./LoadContext";



const LoadState=(props)=>{
  const [progress, setProgress] = useState(0)

    const updateProgress=(a)=>{
        setProgress(a)
      }
    
    
    
    return(
        <LoadContext.Provider value={{updateProgress , progress, setProgress}}>
       {props.children}
       </LoadContext.Provider> 
           )
}
export default LoadState;

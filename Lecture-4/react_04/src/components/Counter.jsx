import { useState } from "react";
function Counter(){
    // let count = 0 // wrong use state
    const [count,setCount] = useState(0);
    function handleDec(x,y){
        // count=count-1;
        setCount(count-1)
        console.log(x,y);
    }

    function handleInc(){
        setCount(count+1)
    }
    return(
        <div>
            {/* way - 1 */}
            <button onClick={handleDec} >Dec -</button>
            {/* way - 2 */}
            <button onClick={ ()=>handleDec(10,20) } >Dec -</button>
            <h1> {count} </h1>
            {/* <button onClick={handleInc} >Inc +</button> */}
            <button onClick={ ()=>handleInc() } >Inc +</button>
        </div>
    )
}
export default Counter;
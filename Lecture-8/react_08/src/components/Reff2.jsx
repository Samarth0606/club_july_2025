import { useRef, useState } from "react";

function Reff2(){
    const [count,setCount] = useState(0);

    const countRef = useRef(0)
    // console.log(countRef.current , "countRef.current");
    
    function handleRef(){
        countRef.current++;
    }

    return(
        <div>
            <button onClick={()=>setCount(count+1)}> Count: {count} </button>
            <br />
            <button onClick={handleRef} > CountRef: {countRef.current} </button>
        </div>
    )
}

export default Reff2;
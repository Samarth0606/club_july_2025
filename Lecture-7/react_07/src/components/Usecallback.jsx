import { memo, useCallback, useState } from "react";

function Usecallback(){
    const [count,setCount] = useState(0);
    // let a = 100;
    // let a = function(){ console.log("hello") }

    let a = useCallback( function(){ console.log("hello") } , [])

    return(
        <div>
            <Chotu data={a} />
            <button onClick={()=>setCount(count+1)}>Count = {count}</button>
            {/* <Chotu data="1" />
            <Chotu data="2" /> */}
        </div>
    )
}

const Chotu = memo( function({data}){
    return(
        <div>
            <h1>Data is : {data()}</h1>
        </div>
    )
} )



export default Usecallback;
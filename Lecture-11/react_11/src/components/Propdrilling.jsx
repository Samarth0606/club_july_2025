// CONTEXT API
import { useContext, useState } from "react"
import { CountContext } from "./Context";
export default function Propdrilling(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <CountContext.Provider  value={count}>
                <Count setCount={setCount}/>
            </CountContext.Provider>
        </div>
    )
}
export function Count({setCount}){
    return(
        <div>
            <CountRenderer />
            <Buttons setCount={setCount} />
        </div>
    )
}
function CountRenderer(){
    let count = useContext(CountContext)
    return(
        <h1>Count: {count}</h1>
    )
}

export function Buttons({setCount}){
    let count = useContext(CountContext)
    return(
        <button onClick={()=>setCount(count+1)} >Increment counter</button>
    )
}


// ------------------------------------------------

//PROP DRILLING
// import { useState } from "react"

// export default function Propdrilling(){
//     const [count,setCount] = useState(0);
//     return(
//         <div>
//             <Count count={count} setCount={setCount}/>
//         </div>
//     )
// }

// export function Count({count,setCount}){
//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <Buttons count={count} setCount={setCount} />
//         </div>
//     )
// }

// export function Buttons({count,setCount}){
//     return(
//         <button onClick={()=>setCount(count+1)} >Increment counter</button>
//     )
// }

// ------------------------------------------------


// import { useState } from "react"

// export default function Propdrilling(){
//     const [count,setCount] = useState(0);
//     return(
//         <div>
//             <Count count={count} />
//             <Buttons count={count} setCount={setCount} />
//         </div>
//     )
// }

// export function Count({count}){
//     return(
//         <h1>Count: {count}</h1>
//     )
// }

// export function Buttons({count,setCount}){
//     return(
//         <button onClick={()=>setCount(count+1)} >Increment counter</button>
//     )
// }
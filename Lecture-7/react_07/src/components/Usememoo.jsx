import { useMemo, useState } from "react";

function Usememoo(){
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    const memoAns = useMemo(()=>{
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("mai chal gya");
            ans+=i;
        }
        return ans
    }, [inp])

    return(
        <div>
            <input onChange={(e)=>setInp(e.target.value)} type="text" value={inp} />
            <h1>Sum: {memoAns} </h1>
            <button onClick={()=>setCount(count+1)}>INC - {count}</button>
        </div>
    )
}

export default Usememoo;

// ----------------------------------------------------

// import { useState } from "react";

// // controlled inputs

// function Usememoo(){
//     const [inp,setInp] = useState();

//     function handleInp(e){
//         setInp(e.target.value)
//     }
//     return(
//         <div>
//             <input onChange={(e)=>handleInp(e)}  type="text" value={inp} />
//         </div>
//     )
// }

// export default Usememoo;

// ----------------------------------------------------
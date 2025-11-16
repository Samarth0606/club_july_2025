import { Fragment, useEffect, useState } from "react";

function Timer(){
    const [time,setTime] = useState(0);

    useEffect(()=>{
        setTimeout(function(){
            setTime(time+1)
        }, 1000)
    } , [time])

    return(
        <Fragment>
            Time: {time}
        </Fragment>
    )
}


export default Timer;

// -----------------------------------------------

// import { useEffect, useState } from "react";

// function Timer(){
//     const [time,setTime] = useState(0);

//     useEffect(()=>{
//         let idd = setInterval(function(){
//             setTime(time+1)
//         }, 1000)
//         // cleanup fn
//         return ()=> clearInterval(idd)
//     } , [time])

//     return(
//         <div>
//             Time: {time}
//         </div>
//     )
// }


// export default Timer;
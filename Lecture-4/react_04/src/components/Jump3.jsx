import { useState } from "react";

function Jump3(){

    const [count,setCount] = useState(0);
    function handleInc(){
        setCount(count+2)          //  2
        setCount(count+3)          //  3 
        setCount((sam)=>sam+2)     //  5  // previous value hold
        setCount((vohra)=>vohra+2) //  5
    }

    return(
        <div>
            <button onClick={handleInc}> Inc + </button>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default Jump3;

// ----------------------------------------------


// import { useState } from "react";

// function Jump3(){

//     const [count,setCount] = useState(0);
//     function handleInc(){
//         setCount((count)=>count+1)
//         setCount((count)=>count+1)
//         setCount((count)=>count+1)
//     }

//     return(
//         <div>
//             <button onClick={handleInc}> Inc + </button>
//             <h1>Count: {count}</h1>
//         </div>
//     )
// }

// export default Jump3;


// ----------------------------------------------

// import { useState } from "react";

// function Jump3(){

//     const [count,setCount] = useState(0);
//     function handleInc(){
//         console.log(count , "1");
//         setCount(count+1)
//         console.log(count , "2");
//         setCount(count+1)
//         console.log(count , "3");
//         setCount(count+1)
//         console.log(count , "4");
//     }

//     return(
//         <div>
//             <button onClick={handleInc}> Inc + </button>
//             <h1>Count: {count}</h1>
//         </div>
//     )
// }

// export default Jump3;
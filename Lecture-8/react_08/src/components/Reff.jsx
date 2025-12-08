import { useEffect, useRef } from "react";

function Reff(){
    // let salary = 300000;
    // const [salary,setSalary] = useState(300000);
    let spanEl = useRef(300000);
    // console.log(spanEl.current , "spanEl");
    
    useEffect(()=>{
        setTimeout(function(){
            spanEl.current.innerHTML = "200"
        } , 3000)
    } , [])

    return(
        <div>
            <h1>Salary is : <span ref={spanEl}>{spanEl.current}</span></h1>
        </div>
    )
}

export default Reff;




// import { useEffect } from "react";

// function Reff(){
//     let salary = 300000;

//     useEffect(()=>{
//         setTimeout(function(){
//             document.querySelector('#salar').innerHTML = "300";
//         } , 3000)
//     } , [])

//     return(
//         <div>
//             <h1>Salary is : <span id="salar" >{salary}</span></h1>
//         </div>
//     )
// }

// export default Reff;
// import React, { Fragment } from "react";
// import React from "react";
// function Person( props ){
//     console.log(props , "props");
//     return(
//         // <Fragment>
//         // </Fragment>
//         <React.Fragment>
//             <div style={ {border:'2px solid black', color:"red"} } >
//                 <h1>Name: {props.name}</h1>
//                 <h1>Age: {props.age}</h1>
//                 <h1>IsMale: { JSON.stringify(props.isMale) }</h1>
//             </div>
//         </React.Fragment>
//     )
// }
// export default Person;
// ----------------------------------------------
import React from "react";
function Person( {name,age,isMale} ){    
    return(
        <React.Fragment>
            <div style={ {border:'2px solid black', color:"red"} } >
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
                <h1>IsMale: { JSON.stringify(isMale) }</h1>
            </div>
        </React.Fragment>
    )
}
export default Person;
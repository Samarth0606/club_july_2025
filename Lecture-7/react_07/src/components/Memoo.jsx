import { memo, useState } from "react";

function Memoo({naam}){
    const [user,setUser] = useState(naam);

    function handleNaam(){
        setUser( Math.floor(Math.random()*10) )
    }

    return(
        <div>
            <Chotu naam={user} />
            <button onClick={handleNaam} >Change Naam</button>
            <Chotu naam="Maverick"/>
            <Chotu naam="Simba"/>
            <Chotu naam="Caramel"/>
        </div>
    )
}

const Chotu = memo( function({naam}){
    return(
        <div>
            <h1>The name is : {naam}</h1>
        </div>
    )
} )

// function Chotu({naam}){
//     return(
//         <div>
//             <h1>The name is : {naam}</h1>
//         </div>
//     )
// }



export default Memoo;
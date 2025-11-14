import { useState } from "react";

function Logout(){
    // let naam = "Samarth Vohra"
    // function handleLogout(){
    //     console.log(naam , "1");
    //     naam = "Anonymous"
    //     console.log(naam , "2");   
    // }

    const [user,setUser] = useState("Samarth Vohra")
    function handleLogout(){
        // user = "Anonymous" // wrong ❌
        console.log(user , "1");        
        console.log(setUser , "1");        
        setUser("Anonymous") // right ✅ 
        console.log(user , "2");
    }
    return(
        <div>
            <h1>Name: {user} </h1>
            {/* way-1 */}
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}
export default Logout;
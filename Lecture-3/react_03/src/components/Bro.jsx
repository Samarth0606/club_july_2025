import React from 'react'

function Bro( {arry} ) {
// above return statement (IF ELSE FOR WHILE LET console)
console.log(arry);

let array = [10,20,30,40,50]

// below return statement (MAP, FILTER, FOREACH, TERNARY)
  return (
    <div>
        {
            array.map((item, index)=>{
                return(
                    <h1> {item} - {index} </h1>
                )
            })
        }

    </div>
  )
}

export default Bro
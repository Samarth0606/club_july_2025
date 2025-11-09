import React from 'react'

function Master({tname,sname}) {
  return (
    <div>
        <h1>T. Name : {tname}</h1>
        <h1>S. Name</h1>

        {
            sname.map(item =>{
                return(
                    <h1>{item}</h1>
                )
            })
        }

    </div>
  )
}

export default Master
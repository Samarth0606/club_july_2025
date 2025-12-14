import React from 'react'

function Search({restArr, setAllRestArray}) {

    function handleSearch(searchedText){
        setAllRestArray(restArr.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase())))
    }

  return (
    <div>
        <input className='border rounded mx-20 mt-2 p-2' placeholder='Search here..' onChange={(e)=>handleSearch(e.target.value)} type="text" />
    </div>
  )
}

export default Search
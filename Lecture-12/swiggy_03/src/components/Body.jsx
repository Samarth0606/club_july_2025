import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Apicalling from './Apicalling'
import Search from './Search';

function Body() {
    let restArr = Apicalling();
    const [allRestArray,setAllRestArray] = useState(restArr);
    const [isClicked1,setIsClicked1] = useState(false);
    const [isClicked2,setIsClicked2] = useState(false);

    useEffect(()=>{
      if(restArr && restArr.length){
        setAllRestArray(restArr)
      }
    }, [restArr])

    function handleTopRestaurant(){
      setAllRestArray( restArr.filter((restaurant)=> restaurant.info.avgRating >= 4.2) )
      setIsClicked1(true)
      setIsClicked2(false)
    }
    function handleReset(){
      setAllRestArray( restArr )
      setIsClicked1(false)
      setIsClicked2(true)
    }
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button onClick={handleTopRestaurant} className={isClicked1 ?'bg-yellow-200 border rounded-2xl ml-20 w-1/12 p-2 text-xl':'border rounded-2xl ml-20 w-1/12 p-2 text-xl'}  >Rating 4.2+</button>
        <button onClick={handleReset} className={isClicked2?'bg-yellow-200 border rounded-2xl ml-2 w-1/12 p-2 text-xl':'border rounded-2xl ml-2 w-1/12 p-2 text-xl'}>Reset</button>
    
        <div>
          <Search restArr={restArr} setAllRestArray={setAllRestArray} />
        </div>

        <div className='flex flex-wrap w-10/12 mx-auto'>
            <RestaurantCard restArr={allRestArray}/>
        </div>
    </div>
  )
}

export default Body
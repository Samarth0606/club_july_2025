import React from 'react'
import RestaurantCard from './RestaurantCard'
import Apicalling from './Apicalling'

function Body() {
    let restArr = Apicalling();
  return (
    <div>
        <h1 className='font-bold text-2xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded-2xl ml-20 w-1/12 p-2 text-xl'>Rating 4.4+</button>
        <button className='border rounded-2xl ml-2 w-1/12 p-2 text-xl'>Reset</button>
    
        <div className='flex flex-wrap w-10/12 mx-auto'>
            <RestaurantCard restArr={restArr}/>
        </div>
    </div>
  )
}

export default Body
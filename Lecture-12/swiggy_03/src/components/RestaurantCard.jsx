import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantCard({restArr}) {
  return (
    restArr.map((item,index)=>{
        return(
            <Link to={`/restaurant/${item.info.id}`}>
              <div key={index} className='m-8 w-58'>
                <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} />
                <h1 className='font-bold text-xl mx-1'> {item.info.name} </h1>
                <span className='font-bold mx-1'>{item.info.avgRating}</span>
                <span className='font-bold mx-3'>{item.info.sla.slaString}</span>
                <p className='mx-1'>{item.info.cuisines[0]}</p>
                <p className='mx-1'>{item.info.locality}</p>
              </div>
            </Link>
        )
    })
  )
}

export default RestaurantCard
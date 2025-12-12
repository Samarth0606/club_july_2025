import React from 'react'

function RestaurantCard() {
  return (
    <div className='m-8'>
        <img className='w-58 h-42 rounded-2xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG" />
        <h1 className='font-bold text-xl mx-1'> Pizza Hut </h1>
        <span className='font-bold mx-1'>4.3</span>
        <span className='font-bold mx-3'>40-45 mins</span>
        <p className='mx-1'>Pizza</p>
        <p className='mx-1'>Paschim Vihar</p>
    </div>
  )
}

export default RestaurantCard
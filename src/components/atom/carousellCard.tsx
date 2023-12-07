import React from 'react'

const CarousellCard = (row:any) => {
  return (
    <div className='w-[95vw] md:w-[30vw] h-[45vh] bg-slate-300 rounded rounded-md'>
      <div className='absolute text-white p-3 self-end my-2 bg-gradient-to-r from-black/25'>{row?.rows?.title}</div>
      <img src={row?.rows?.image} className='h-full w-auto' />
    </div>
  )
}

export default CarousellCard

import React from 'react'

const CarousellCard = (row:any) => {
  console.log(row)
  return (
    <a href={`/${row?.rows?.type}/${row?.rows?._id}`} className='w-[95vw] md:w-[30vw] h-[45vh] bg-slate-300 rounded cursor-pointer rounded-md'>
      <div className='absolute text-white p-3 self-end my-2 bg-gradient-to-r from-black/25'>{row?.rows?.title}</div>
      <img src={row?.rows?.image} className='h-full w-auto' />
    </a>
  )
}

export default CarousellCard

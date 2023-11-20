import KPCard from '@/components/kpCard'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import React from 'react'

const KerjaPraktik = () => {
  return (
    <div className='flex items-center flex-col overflow-hidden bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>
      
      <div className='mt-8 w-1/3 min-w-fit md:min-w-0 flex justify-center'>
        <SearchBar></SearchBar>
      </div>

      <div className='mx-12 flex justify-center'>
        <div className='grid grid-cols-1'>

          <KPCard
          title='Title of Position from KP'
          date='14-January-2003'
          location='Jakarta'
          company='PT ABCD efghijkl'
          />

          <KPCard
          title='Title of Position from KP'
          date='14-January-2003'
          location='Jakarta'
          company='PT ABCD efghijkl'
          />

          <KPCard
          title='Title of Position from KP'
          date='14-January-2003'
          location='Jakarta'
          company='PT ABCD efghijkl'
          />

          </div>
      </div>
      
      
    </div>
  )
}

export default KerjaPraktik

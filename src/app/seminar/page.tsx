import SeminarCard from '@/components/atom/seminarCard'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import SeminarDescription from '@/components/atom/seminarDescription'
import React from 'react'

const Seminar = () => {
  return (
    <section className='flex items-center flex-col overflow-auto bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>

      <div className='flex flex-col justify-center'>
        <div className='mt-10 w-1/3 mx-auto min-w-fit md:min-w-0 flex justify-center'>
        <SearchBar></SearchBar>
        </div>
      <div className='mx-16 flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
          <SeminarCard
          title='Seminar KP'
          date='14-January-2003'
          location='DTETI'
          />
        </div>
      </div>
      </div>
      
      
      
      
    </section>
  )
}

export default Seminar

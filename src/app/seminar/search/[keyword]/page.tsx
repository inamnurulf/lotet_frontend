'usec lient'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import SeminarList from '@/components/seminarLIst'
import { useState } from 'react'

const Seminar = ({params}: any) => {
  const {keyword} = params
  return (
    <section className='flex items-center flex-col overflow-hidden bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>
      <div className='flex flex-col w-screen items-center'>
        <div className='mt-10 md:w-1/3 w-3/4 mx-4 flex justify-center mb-4'>
          <SearchBar></SearchBar>
        </div>
      <div className='mx-4 flex justify-center'>
        <SeminarList keyword = {keyword}></SeminarList>
      </div>
      </div>
    </section>
  )
}

export default Seminar

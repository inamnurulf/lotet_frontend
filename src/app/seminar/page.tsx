// 'use client'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import SeminarList from '@/components/seminarLIst'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Seminar = () => {  
  // useEffect(() => {
  //   Aos.init({
  //     duration: 800
  //   });
  // }, []);
  return (
    <section className='flex items-center flex-col overflow-auto bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>

      <div className='flex flex-col w-screen items-center'>
        <div className='mt-10 md:w-1/3 w-3/4 mx-4 flex justify-center mb-4'>
          <SearchBar></SearchBar>
        </div>
      <div className='mx-4 flex justify-center'>
        <SeminarList></SeminarList>
      </div>
      </div>
    </section>
  )
}

export default Seminar

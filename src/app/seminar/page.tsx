'use client'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import SeminarList from '@/components/seminarLIst'
import { useState } from 'react'

const Seminar = () => {  
  const [keyword, setKeyword]  = useState('')
  const handleSearch = (value: string) =>{
    setKeyword(value)
  }
  return (
    <section className='flex items-center flex-col overflow-hidden bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>
      <div className='flex flex-col w-screen items-center min-h-screen'>
        <div className='mt-10 md:w-1/3 w-3/4 mx-4 flex justify-center mb-4'>
          <SearchBar onSearch = {handleSearch}></SearchBar>
          
        </div>
        {
          keyword &&(
            <div className='w-full justify-center items-start mx-4 mb-4'>
              <div className='mx-4 text-xl font-bold text-white'>{`Search for ${keyword}`}</div>
            </div>  
          )
        }
      <div className='mx-4 justify-center min-h-max'>
        <SeminarList keyword = {keyword}></SeminarList>
      </div>
      </div>
    </section>
  )
}

export default Seminar

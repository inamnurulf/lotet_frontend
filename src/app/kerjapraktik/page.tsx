'use client'
import KPList from '@/components/kpList'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import React, { useState } from 'react'

interface KerjaPraktik{
  _id: string;
  user_id: string;
  title: string;
  details: string;
  image: string;
  date: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const KerjaPraktik = () => {

  const [keyword, setKeyword]  = useState('')
  const handleSearch = (value: string) =>{
    setKeyword(value)
  }

  return (
    <div className='flex items-center flex-col overflow-hidden bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>
      
      <div className='mt-8 w-1/3 min-w-fit md:min-w-0 flex justify-center'>
        <SearchBar></SearchBar>
      </div>

      <div className='mx-12 flex justify-center'>
        <div className='grid grid-cols-1'>

        <KPList keyword = {keyword}></KPList>

          </div>
      </div>
      
      
    </div>
  )
}

export default KerjaPraktik

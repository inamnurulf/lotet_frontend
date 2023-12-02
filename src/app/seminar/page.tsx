'use client'
import SeminarCard from '@/components/atom/seminarCard'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import SeminarDescription from '@/components/atom/seminarDescription'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { list } from 'postcss'

interface Seminar{
  _id: string;
  user_id: string;
  title: string;
  details: string;
  image: string;
  eventTime: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Seminar = () => {
  const [response, setResponse] = useState<Seminar[]>([]);
  useEffect(
    () =>{
      axios.get<Seminar[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}seminar`)
      .then(res => {
        console.log(res)
        setResponse(res.data); // Assuming the response is an array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []
  )
  
  return (
    <section className='flex items-center flex-col overflow-auto bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>

      <div className='flex flex-col justify-center'>
        <div className='mt-10 w-1/3 mx-auto min-w-fit md:min-w-max flex justify-center mb-4'>
        <SearchBar></SearchBar>
        </div>
      <div className='mx-4 flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            response.map(item => (
              <SeminarCard key={item.user_id} title={item.title} date={item.eventTime} location='Belom ada di BE nya ngab'/>
            ))
          }
        </div>
      </div>
      </div>
      
      
      
      
    </section>
  )
}

export default Seminar

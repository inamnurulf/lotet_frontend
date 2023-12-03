'use client'
import KPCard from '@/components/kpCard'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import KPDescription from '@/components/atom/kpDescription'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface KerjaPraktik{
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

const KerjaPraktik = () => {

  const [response, setResponse] = useState<KerjaPraktik[]>([]);
  useEffect(
    () =>{
      axios.get<KerjaPraktik[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}kerjapraktik`)
      .then(res => {
        console.log(res)
        setResponse(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []
  )



  return (
    <div className='flex items-center flex-col overflow-hidden bg-primary min-h-screen'>
      <Navbar defaultform = {false}></Navbar>
      
      <div className='mt-8 w-1/3 min-w-fit md:min-w-0 flex justify-center'>
        <SearchBar></SearchBar>
      </div>

      <div className='mx-12 flex justify-center'>
        <div className='grid grid-cols-1'>

          {
            response.map(item => (
              <KPCard key={item.user_id} title={item.title} date={item.eventTime} location='location here' company='company name here'/>
            ))
          }

          </div>
      </div>
      
      
    </div>
  )
}

export default KerjaPraktik

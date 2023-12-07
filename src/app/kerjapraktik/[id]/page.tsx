'use client'
import React from 'react'
import KPDescription from '@/components/atom/kpDescription'
import Navbar from '@/components/navbar'
import KerjaPraktik from '../page'
import axios from 'axios'
import { useEffect, useState } from 'react';

interface KP{
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
  username: string;
}

const KerjaPraktikDetails = ({params}: any) => {
  const emp: KP = {
    _id: '',
    user_id: '',
    title: '',
    details: '',
    image: '',
    date: '',
    category: [''],
    createdAt: '',
    updatedAt: '',
    username: '',
    __v: 0
  }

  const {id} = params
  const [KP, setKP] = useState<KerjaPraktik>(emp);
  useEffect(() => {
    if (id && typeof id === 'string') {
      axios.get<KerjaPraktik>(`${process.env.NEXT_PUBLIC_BACKEND_URL}kerjapraktik/${id}`)
        .then(res => {
          setKP(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          console.log('Error response:', error.response); // Log the response for debugging
        });
    }
  }, [id]);

  return (
    <div className='flex flex-col bg-primary items-center overflow-hidden min-w-fit min-h-screen'>
      <Navbar defaultform={false} />
      <div className='justify-center grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 mx-8'>
        {/* Pass the ID to the components that require it */}
        <KPDescription title={KP?.title} details={KP?.details} category={KP?.category} image={KP?.image} date={KP?.date}/>
      </div>
    </div>
  );
};

export default KerjaPraktikDetails
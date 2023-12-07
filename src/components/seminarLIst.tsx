'use client'
import React, { useEffect, useState } from 'react'
import SeminarCard from "./atom/seminarCard"
import axios from 'axios'

interface Seminar{
  _id: string;
  user_id: string;
  location: string;
  additional: string;
  title: string;
  details: string;
  image: string;
  eventTime: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const SeminarList = () =>{
  const [response, setResponse] = useState<Seminar[]>([]);
  useEffect(
    () =>{
      axios.get<Seminar[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}seminar`)
      .then(res => {
        setResponse(res.data); // Assuming the response is an array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []
  )

  const [searchSeminar, setSearchSeminar] = useState('')
  
  const filteredSeminar = response.filter((seminar: Seminar) =>
    seminar.title.toLowerCase().includes(searchSeminar.toLowerCase())
  );
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
          {
            response.map(item => (
              <SeminarCard key={item._id} id = {item._id} title={item.title} date={item.eventTime} location={item.location? item.location: ''}/>
            ))
          }
    </div>
  )
}
export default SeminarList
'use client'
import React, { useEffect, useState } from 'react'
import KPCard from './kpCard';
import axios from 'axios'

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

const KPList = ({keyword}: any) =>{
  const [response, setResponse] = useState<KerjaPraktik[]>([]);
  useEffect(
    () =>{
      let endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}kerjapraktik`;
      if (keyword != '' && keyword != null) {
        endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}seminar/search/byKeyword/${keyword}`;
      }
      axios.get<KerjaPraktik[]>(endpoint)
      .then(res => {
        setResponse(res.data); // Assuming the response is an array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, [keyword]
  )
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
          {
            response.map(item => (
              <KPCard id = {item._id} title={item.title} date={item.date}/>
            ))
          }
    </div>
  )
}
export default KPList
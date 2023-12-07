'use client'
import React, { useEffect, useState } from 'react'
import KerjaPraktikCard from "./atom/kerjaPraktikCard" 
import axios from 'axios'

interface KerjaPraktik {
  _id: string;
  user_id: string;
  title: string;
  image: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const KerjaPraktikList = ({ keyword }: any) => {
  const [response, setResponse] = useState<KerjaPraktik[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setResponse([]); // Clear previous response

    const fetchData = async () => {
      let endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}kerjaPraktik`;
      if (keyword && keyword.trim() !== '') {
        endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}kerjaPraktik/search/byKeyword/${keyword}`;
      }

      try {
        const res = await axios.get<KerjaPraktik[]>(endpoint);
        setResponse(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    // Simulating a delay of 2 seconds using setTimeout
    setTimeout(fetchData, 2000);
  }, [keyword]);

  return (
    <div className=''>
      {isLoading ? <div className='spinner justify-center items-center min-h-full'></div> : null}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          response.map(item => (
            <KerjaPraktikCard key={item._id} id={item._id} title={item.title} image={item.image} />
          ))
        }
      </div>
    </div>
  )
}

export default KerjaPraktikList;

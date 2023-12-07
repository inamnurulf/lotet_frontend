'use client'
import React, { useEffect, useState } from 'react'
import SeminarCard from "./atom/seminarCard"
import axios from 'axios'
import Loading from '../app/loading'

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

const SeminarList = ({keyword}: any) =>{
  const [response, setResponse] = useState<Seminar[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setResponse([]); // Clear previous response

    const fetchData = async () => {
      let endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}seminar`;
      if (keyword && keyword.trim() !== '') {
        endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}seminar/search/byKeyword/${keyword}`;
      }

      try {
        const res = await axios.get<Seminar[]>(endpoint);
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

  return(
    <div className=''>
      {isLoading ? <div className='spinner justify-center items-center min-h-full'></div> : null}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
          {
            response.map(item => (
              <SeminarCard key={item._id} id = {item._id} title={item.title} date={item.eventTime} location={item.location? item.location: ''} image={item.image}/>
            ))
          }
      </div>
    </div>
    
  )
}
export default SeminarList
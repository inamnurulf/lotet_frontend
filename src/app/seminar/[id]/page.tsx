'use client'
import SeminarDescription from '@/components/seminarDescription';
import Navbar from '@/components/navbar';
import SeminarInfo from '@/components/seminarInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Seminar from '../page';

interface Seminar {
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

const SeminarDetails = () => {
  const emp: Seminar = {
    _id: '',
    user_id: '',
    title: '',
    details: '',
    image: '',
    eventTime: '',
    category: [''],
    createdAt: '',
    updatedAt: '',
    location: '',
    additional: '',
    __v: 0
  }
  const router = usePathname()
  const id = router.split('/').pop()
  const [seminar, setSeminar] = useState<Seminar>(emp);
  useEffect(() => {
    if (id && typeof id === 'string') {
      axios.get<Seminar>(`${process.env.NEXT_PUBLIC_BACKEND_URL}seminar/${id}`)
        .then(res => {
          setSeminar(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          console.log('Error response:', error.response); // Log the response for debugging
        });
    }
  }, [id]);

  const dateOnly = new Date(seminar.eventTime).toDateString()
  return (
    <div className='flex flex-col bg-primary items-center overflow-hidden min-w-fit min-h-screen'>
      <Navbar defaultform={false} />
      <div className='justify-center grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 mx-8'>
        {/* Pass the ID to the components that require it */}
        <SeminarDescription title={seminar?.title} body={seminar?.details} category={seminar?.category} image={seminar?.image}/>
        <SeminarInfo users={'Openheimer'} dateTime={seminar?.eventTime} location={seminar.location} additional={seminar.additional}/>
      </div>
    </div>
  );
};

export default SeminarDetails;

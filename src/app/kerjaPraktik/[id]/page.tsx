'use client'
import KerjaPraktikDescription from '@/components/kpDescription';
import Navbar from '@/components/navbar';
import SolidButton from "../../../components/atom/solidButton"
import { useEffect, useState } from 'react';
import axios from 'axios';
import KerjaPraktik from '../page';

interface KerjaPraktik {
  _id: string;
  user_id: string;
  title: string;
  details: string;
  image: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  username: string;
}

const KerjaPraktikDetails = ({ params }: any) => {
  const emp: KerjaPraktik = {
    _id: '',
    user_id: '',
    title: '',
    details: '',
    image: '',
    category: [''],
    createdAt: '',
    updatedAt: '',
    username: '',
    __v: 0
  }
  const { id } = params
  const [kerjaPraktik, setKerjaPraktik] = useState<KerjaPraktik>(emp);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    if (id && typeof id === 'string') {
      axios.get<KerjaPraktik>(`${process.env.NEXT_PUBLIC_BACKEND_URL}kerjaPraktik/${id}`)
        .then(res => {
          setKerjaPraktik(res.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          console.log('Error response:', error.response);
        }).finally(() => {
          setIsLoading(false)
        }
        );
    }
  }, [id]);
  return (
    <div className='flex flex-col bg-secondary items-center overflow-hidden min-w-fit min-h-screen'>
      <Navbar defaultform={false} />
      {
        isLoading ? <div className='spinner justify-center items-center min-h-full mt-52 '></div> :
          <div className='justify-center mt-32 mx-8'>
            <KerjaPraktikDescription title={kerjaPraktik?.title} body={kerjaPraktik?.details} category={kerjaPraktik?.category} image={kerjaPraktik?.image} />
          </div>
      }

    </div>
  );
};

export default KerjaPraktikDetails;

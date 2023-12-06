'use client'
import { useRouter } from 'next/router';
import SeminarDescription from '@/components/seminarDescription';
import Navbar from '@/components/navbar';
import SeminarInfo from '@/components/seminarInfo';

const SeminarDetails = ({params}:any) => {
  const {id} = params
  return (
    <div className='flex flex-col bg-primary items-center overflow-hidden min-w-fit min-h-screen'>
      <Navbar defaultform={false} />
      <div>{id}</div>
      <div className='justify-center grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 mx-8'>
        {/* Pass the ID to the components that require it */}
        <SeminarDescription />
        <SeminarInfo />
      </div>
    </div>
  );
};

export default SeminarDetails;

import Image from 'next/image'
import Gif from '../../public/spiral.gif'

const Page = () =>{
  return(
    <div className='min-h-screen min-w-full overflow-hidden'>
      <Image src = {Gif} alt='' width={500} height={500} className='h-screen w-full'></Image>
    </div>
  )
}

export default Page;
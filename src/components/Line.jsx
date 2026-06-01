import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React ,{useRef} from 'react'

const Line = () => {

  const particleRef = useRef();

  useGSAP(()=>{
    gsap.fromTo(particleRef.current , {
      x:0
    } ,{
      x:288,
      duration:2,
      repeat : -1,
      ease : "none"
    })
  },[])
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
      <div className='w-[300px] h-[2px]  bg-white' >
        <div ref={particleRef} className='absolute w-3 h-3 bg-purple-700 top-1/2 -translate-y-1/2 rounded-full'></div>
      </div>
    </div>
  )
}

export default Line
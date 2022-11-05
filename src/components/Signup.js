import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { BiShowAlt } from 'react-icons/bi'
import Button from '../shared/button/button'

const Signup = () => {
  return (
    <div className='container mx-auto justify-center items-center flex-col gap-5 flex'>
      <h1 className='font-bold text-black text-4xl'>Create and launch</h1>
      <input className='border py-3 px-2 rounded-md sm:w-[400px] w-[250px] outline-none' type="text" placeholder='Your name' />
      <input className='border py-3 px-2 rounded-md sm:w-[400px] w-[250px] outline-none' type="text" placeholder='Business name (or Instagram account)' />
      <div className='relative'>

     <div>
     <input className=' border py-3 pl-[80px] rounded-md sm:w-[400px] w-[250px] outline-none' type="text" placeholder='+962' />
     
     </div>
      <div className='absolute top-1 flex items-center'>
      <img className=' w-14 h-10 rounded-full' src="/Mask.png" alt="" /> <AiOutlineDown/>
      </div>
      </div>
      <input className='border py-3 px-2 rounded-md sm:w-[400px] w-[250px] outline-none' type="email" placeholder='E-mail' />
      <div className=''>
      <input className=' border py-3 px-2 rounded-md sm:w-[400px] w-[250px] outline-none' type="password" placeholder='Paswword' />
      <span className='absolute right-[530px] top-[430px]'><BiShowAlt size={27}/></span>
      </div>
      <div className='flex justify-start gap-2'>
        <input type="radio" name="" id="" />
        <span className='items-start text-md text-red-700'>Accept Terms & Privacy Policy</span>
      </div>
      <Button name={'Next'} link={'/'}/>
    </div>
  )
}

export default Signup
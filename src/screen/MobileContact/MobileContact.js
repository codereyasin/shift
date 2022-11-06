import React from 'react'
import Button from '../../shared/button/button'
import Title from '../../shared/Title/title'

const MobileContact = () => {
  return (
    <div className=" p-3 px-5 mx-auto sm:hidden flex flex-col py-10 justify-center h-[90%]   items-center my-10 ">
        <div className='flex gap-7'>
          <div className='relative bottom-5'>
          <Title title1={'Hey!'}description={'Talk to us …'}/>
          </div>
          <img src="/talkman.png" alt="" />
        </div>
        <div className='absolute flex flex-col gap-5 pt-16'>
            <input className='border py-2 px-2 rounded-md relative top-7 md:right-24 outline-none sm:w-[400px] w-[250px]' type="text" placeholder='Your name' />
            <input className='border py-2 px-2 rounded-md relative top-7 md:right-24 outline-none sm:w-[400px] w-[250px]' type="text" placeholder='Your mobile' />
            <input className='border py-2 px-2 rounded-md relative top-7 md:right-24 outline-none sm:w-[400px] w-[250px]' type="text" placeholder='Your e-mail' />
           <input className='border py-2 px-2 rounded-md relative top-7 md:right-24 outline-none sm:w-[400px] text- w-[250px] pb-20' type="text" placeholder='Take our breath away…' />
         <div className='relative top-10 left-10'>
            <Button  name={'Send'} link={'/'}/>
        </div>
       </div>
       
    </div>
  )
}

export default MobileContact
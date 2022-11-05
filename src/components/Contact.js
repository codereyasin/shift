import React from 'react'

const Contact = () => {
  return (
    <div className="lg:p-2 p-3 lg:px-16 px-5 mx-auto md:flex-row flex flex-col py-10 justify-center lg:space-x-[150px] items-center h-[70vh]">
        <div className='flex gap-7'>
          <div>
          <span className='text-2xl'>Hey!</span>
          <h1 className='font-bold text-3xl'>Talk to us …</h1>
          </div>
          <img src="/talkman.png" alt="" />
        </div>
        <div className='absolute flex flex-col gap-5 pt-16'>
            <input className='border py-2 px-2 rounded-md relative bottom-3 md:right-24 outline-none md:w-[298px] w-[250px]' type="text" placeholder='Your name' />
            <input className='border py-2 px-2 rounded-md relative bottom-3 md:right-24 outline-none md:w-[298px] w-[250px]' type="text" placeholder='Your mobile' />
            <input className='border py-2 px-2 rounded-md relative bottom-3 md:right-24 outline-none md:w-[298px] w-[250px]' type="text" placeholder='Your e-mail' />
            <input className='border py-2 px-2 rounded-md relative bottom-3 md:right-24 outline-none md:w-[298px] text- w-[250px] pb-20' type="text" placeholder='Take our breath away…' />
        </div>

    </div>
  )
}

export default Contact
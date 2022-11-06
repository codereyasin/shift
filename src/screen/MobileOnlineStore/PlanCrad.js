import React from 'react'

const PlanCrad = () => {
    return (
        <div className='flex sm:flex-row flex-col gap-5'>
            <div className="rounded-xl border  flex-col py-4  w-52 h-28 px-2 justify-start flex">
                <h1 className="text-xl space-y-2">Basic plan</h1>
                <h2 className="text-xl font-bold">76 <span className="text-sm">KD</span> / <span className="text-sm">3 months</span></h2>
            </div>
            <div className="rounded-xl flex-col py-4 w-52 relative  h-28 px-2 justify-start flex border-2 border-red-500">
                <h1 className="text-xl space-y-2">Business plan</h1>
                <h2 className="text-xl font-bold">240 <span className="text-sm">KD</span> / <span className="">Year</span></h2>
                <span className="rounded-xl bg-red-200 w-20 items-center flex justify-center text-red-800">Save%20</span>
                <span className="font-semibold text-sm rounded-xl bg-red-800 relative bottom-[108px] text-white pl-3 w-32 justify-center left-7 items-center">MOST POPULAR</span>
            </div>
        </div>
    )
}

export default PlanCrad

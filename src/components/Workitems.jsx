import React from 'react'

const Workitems = ({Année,Title,Duration,details,Tools}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 px-2 py-1 font-semibold text-white bg-[#001B5e] rounded-s-lg'>{Année}</span>
                    <span className='text-lg font semi-bold text-[#001b5e]'>{Title}</span>
                    <span className='my-1 text-sm font-normal leading-none text-stone-400'>{Duration}</span>
                </p>
            <p className='my-2 text-base font-normal text-stone-500 md:text-justify'>{details}</p>
            <p className='my-2 text-base font-bold text-cyan-400 md:text-justify'>{Tools}</p>
        </li>
    </ol>
  )
}

export default Workitems

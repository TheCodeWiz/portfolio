import React from 'react'
import { projects } from '../data/index'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading flex justify-center items-center lg:text-5xl thick'>
            A Small Section of 
            <span className='text-purple-300'>&nbsp;Recent Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} asLink href={link} target="_blank" rel="noopener noreferrer" containerClassName="block w-full h-full">
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10 '>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <Image src="/bg.png" alt="bg-img" fill className="object-cover" />
                                </div>
                                <Image src={img} alt={title} width={500} height={500} className='z-20 py-10 absolute bottom-0' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 '>
                                {des}
                            </p>

                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={`${id}-${icon}-${index}`} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform:`translateX(-${5*index*2}px)`}}>
                                            <Image src={icon} alt={icon} width={35} height={20} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className='flex lg:text-xl  md:text-xs text-sm text-purple-200'>Checkout Live Site</span>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects

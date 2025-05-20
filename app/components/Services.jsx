import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[-15%] py-12 scroll-mt-30'>
      <h4 className="text-center mb-2 text-lg  font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a full stack developer from Nigeria, with 10 years experiemce in multiple companies
      </p>
      <div className='grid gap-6 my-14 px-6 grid-cols-[grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] '>
       

{serviceData.map((service, index) => (
  <div
    key={service.title || index}
    className='border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000] cursor-pointer hover:bg-purple-50 hover:-translate-y-1 duration-500'
  >
    <Image src={service.icon} alt='' className='w-10' />
    <h3 className='text-lg my-4 text-gray-700'>{service.title}</h3>
    <p className='text-sm text-gray-600 leading-5'>{service.description}</p>
    <a href={service.link} className='flex items-center gap-2 text-sm mt-5'>
      Readmore
      <Image src={assets.right_arrow} alt='' className='w-4' />
    </a>
  </div>
))}
        
      </div>
    </div> 
  )
}

export default Services

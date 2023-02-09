import React from 'react'


const Footer = () => {
  return (
    
    <div className='container flex justify-between items-center mx-auto py-10'>
      
      <div className="flex gap-5 items-center">
        <div className="grid lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-5 items-start">
              <img className='h-10' src="/assets/LOGO.jpg" alt="" />
              <p className='text-black w-[300px]'> Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.</p>
              <img src="/assets/social.svg" alt="" />
        </div>
        </div>

            
        
        <div className="flex gap-10 flex-col">
            <div>
              <p className='text-black  font-semibold text-xl py-2'> Contact </p>
              <p className='text-black'>✉ Adresse e-mail</p>
              <p className='text-black'>📞 (+216) 58176730 </p>
              <p className='text-black'>📍 Avenue El Hakim Gafsa -Z1 -2100 </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
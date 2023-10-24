
import { Envelope, PhoneCall } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full mt-10'>
        <h2 className='font-bold text-violet-700 dark:text-violet-400'># Contact me</h2>
        <div className='flex flex-col gap-2 ml-0 md:ml-10'>
            <div>
               <span className='my-1 font-semibold'>Drop me a mail on :</span>
               <span className='flex items-center gap-1 text-sm md:text-base '><Envelope size={28} weight="fill" />  : <a href="mailto:anuragsrivastav0027@gmail.com" className=''>anuragsrivastav0027@gmail.com</a></span>
            </div>
            <div>
               <span className='my-1 font-semibold'>Or contact me on :</span>
                <span className='flex items-center gap-1 '><PhoneCall size={28} weight="fill" /> : <span className=''>+91 </span></span>
            </div>
        </div>
    </div>
  )
}

export default Contact
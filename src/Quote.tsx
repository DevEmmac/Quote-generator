import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import Author from './Author';
import Button from './Button';

import Spinner from './Spinner';



const Quote = () => {
  return (
    <div className='max-w-max h-60 mt-20 mx-auto text-center quote-bg'>
      <div className='flex p-5 '>
        <FaQuoteLeft/>
          <span className='text-1xl px-4'>what you are is what you have been. what you will be is what you do now</span>
        <FaQuoteRight/>
      </div>
        
          <div>
            <Author />
          </div>

         <div className='ring w-20 h-20'>
            <Spinner />
         </div>
          
      <div>
       <Button />
      </div>
     </div>
  )
}

export default Quote;
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  return (
    <div className='w-dvh h-60 border-2 mt-20 mx-auto flex text-center'>
        <FaQuoteLeft/>
        Quote
        <FaQuoteRight/>
     </div>
  )
}

export default Quote;
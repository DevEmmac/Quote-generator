import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Button = () => {
  return (
    <div className='flex flex-row justify-around w-40 ring mx-auto items-center'>
      <button> <FaTwitter title='twitter'/> </button>
    
      <button> New button </button>
    </div>
  )
}

export default Button;
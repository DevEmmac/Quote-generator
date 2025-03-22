import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = () => {
  return (
    <div>
          <ScaleLoader color="#bd31da" size = {150} loading={true}/>
    </div>
     
  )
}

export default Spinner;
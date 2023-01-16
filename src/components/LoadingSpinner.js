import React from 'react'
import '../css/Loader.css'

const LoadingSpinner = () => {
  return (
    <>
    <div className='loader'></div>
    <div className='text-loader'>
        Make Sure you are connected to internet.
    </div>
    </>
  )
}

export default LoadingSpinner
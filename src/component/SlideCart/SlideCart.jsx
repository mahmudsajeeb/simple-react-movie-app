import React, { useEffect, useState } from 'react'

export default function SlideCart({watch}) {
  const [time,setTime] = useState(watch)

  useEffect(()=>{
    const getWatchTime = localStorage.getItem('watchTime')
    setTime(getWatchTime)
  },[watch])
  return (
    <div>
      <h2>My Cart</h2>
        <div className='mt-5 text-center'>
          <p>Total Watch Time</p>
          <input type="text"  value={time} disabled/>
        </div>
        <h2 className='mt-5'>Add Break Time</h2>
        <dutton 
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </dutton>
      <dutton className="w-25 btn-circle bg-warning btn btn-info">20</dutton>
      <dutton className="w-25 btn-circle m-1 bg-danger btn btn-info">25</dutton>
      <input type="text" value={0} disabled />
      <button  className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Ansul6269')
    .then(response => response.json())
    .then(data =>{
      // console.log(data.followers);
      setData(data)

    })
  },[])
  return (
    <>    <div className=' w-5/6 text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <img src={data.avatar_url} alt='Profile Picture' className='w-1/2' />
      <h1>Github Followers:{data.followers} </h1>
     
  </div>
    </>

  )
}

export default Github

import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setindex] = useState(1)
  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`)
    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printuserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading Data...</h3>
  if (userData.length > 0) {
    printuserData = userData.map(function (elem,idx) {
      return <div>
         <a href={elem.url}>
        <div className='h-40 w-44 overflow-hidden bg-black '>
        <img className='h-full w-full object-cover rounded-xl' src={elem.download_url} alt="" />
      </div>
      <h2 className='text-amber-400'>{elem.author}</h2>
         </a>
      </div>
    })
  }



  return (
    <div className='bg-black h-full p-5 text-white '>

      <div className='mt-5 flex flex-wrap gap-2'>{printuserData}</div>
      <div className='flex justify-center items-center p-4 gap-2'>
        <button 
        style={{opacity:index==1? 0.5:1}}
        onClick={()=>{
          if(index>1){
            setindex(index-1)
            setUserData([])
          }
        }} className='bg-amber-400 cursor-pointer active:scale-95ll text-black rounded px-4 py-2 font-medium '>Prev</button>
        <h1 className='text-white font-medium'>Page no.{index}</h1>
        <button onClick={()=>{
          setindex(index+1)
          setUserData([])
        }} className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-medium '>Next</button>
      </div>
    </div>
  )
}

export default App




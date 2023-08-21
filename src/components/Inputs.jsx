import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Inputs({setQuery,setUnits}) {
  const [city,setCity]= useState("");
  return (
    <div className='flex flex-row justify-around my-6'>
        <div className="flex flex-row items-center justify-center space-x-4">
            <input type='text' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase capitalize text-black' placeholder='Search for cities....' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125 " onClick={()=>{
            if(city!==''){setQuery(city);
            setCity('')
            }
            // console.log("city",city)
          }}/>
            {/* <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/> */}
        </div>
        <div className="flex flex-row max-w-1/4 items-center justify-center ml-3">
          <button name='metric' className='text-white font-light cursor-pointer transition ease-out hover:scale-125' onClick={
            ()=>{
                setUnits('metric')
            }
          } >°C</button>
          <p className='text-xl text-white mx-1'>|</p>
          <button name='imperial' className='text-white font-light cursor-pointer transition ease-out hover:scale-125' onClick={
            ()=>{
                setUnits('imperial')
            }
          }>°F</button>
         
        </div>
    </div>
  )
}

export default Inputs
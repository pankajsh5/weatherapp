import React from 'react'
import dot  from '../assets/Location_dot_red.svg'
function Forcast({title}) {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="flex items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30PM</p>
                <img src={dot} alt="" className='w-12 my-1' />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30PM</p>
                <img src={dot} alt="" className='w-12 my-1' />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30PM</p>
                <img src={dot} alt="" className='w-12 my-1' />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30PM</p>
                <img src={dot} alt="" className='w-12 my-1' />
                <p className="font-medium">22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30PM</p>
                <img src={dot} alt="" className='w-12 my-1' />
                <p className="font-medium">22°</p>
            </div>
        </div>

    </div>
  )
}

export default Forcast
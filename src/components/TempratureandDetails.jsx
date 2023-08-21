import React from 'react'
import dot from '../assets/Location_dot_red.svg'
import {UilArrowUp,
    UilArrowDown,
UilTemperature,
UilTear,
UilWind,
UilSun,
UilSunset
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'


function TempratureandDetails({weather}) {
    // console.log(weather.icon)
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl to-cyan-400">
            <p>{weather.details}</p>
        </div>
        <div className="flex items-center justify-between py-3 text-white">
            <img src={iconUrlFromCode(weather.icon)} alt="" className='20' />

            <p className='text-5xl'>{Math.floor(weather.temp)}°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="ml-1"/>
                Real feel:
                <span className='font-medium mr-1'>{Math.floor(weather.feels_like)}</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="ml-1"/>
                Humadity:
                <span className='font-medium mr-1'>{Math.floor(weather.humidity)}%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="ml-1"/>
                Wind:
                <span className='font-medium mr-1'>{weather.speed}m/s</span>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center space-x-2 whitespace-nowrap text-sm py-3">
            <UilSun/>
            <p className="font-light">Rise: 
            <span className="font-medium ml-1">{formatToLocalTime(weather.sunrise,weather.timezone,"hh:mm a")}</span>
            </p>
            
            <p className="font-light">|</p>
            <UilSunset/>
            <p className="font-light">Set: 
            <span className="font-medium ml-1">{formatToLocalTime(weather.sunset,weather.timezone,"hh:mm a")}</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowUp/>
            <p className="font-light">High: 
            <span className="font-medium ml-1">{weather.temp_max}°</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowDown/>
            <p className="font-light">Low: 
            <span className="font-medium ml-1">{weather.temp_min}°</span>
            </p>
            
        </div>
    </div>
  )
}

export default TempratureandDetails
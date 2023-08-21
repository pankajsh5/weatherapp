import { DateTime } from "luxon";
// require ('dotenv').config()


const API_KEY = '1f530c26255806df021c29b5f4595a12';
const BASE_URL = "https://api.openweathermap.org/data/2.5";
// const units = "metric";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const getWeatherData=async (method,searchParams,searchParams2)=>{
    const url = BASE_URL+"/"+method+"?q="+searchParams+"&units="+searchParams2+"&appid="+API_KEY;


 return fetch(url).then((res)=>res.json())
};
// const anotherApi=async (lat,lon)=>{
//     const url2 = BASE_URL+"/weather?lat="+lat+"&lon="+lon+"&appid="+API_KEY;
//     // console.log(url2);
//     return fetch(url2).then((res)=>res.json())
// }

const formatCurrentWeather=(data)=>{
    // console.log("p",data);
    const 
       { coord:{lat, lon},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        timezone,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed},
    }=data;

    const {main: details,icon} =weather[0] 

    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed,timezone}
}
// const formatForcastWeather=(data)=>{
//         console.log(data);
//         let { timezone , daily , hourly}=data;
//         daily = daily.slice(1,6).map(d=>{
//             return{
//                 title: formatToLocalTime(d.dt,timezone, 'ccc'),
//                 temp: d.temp.day,
//                 icon:d.weather[0].icon
//             }
            
//         });
//         hourly = hourly.slice(1,6).map(d=>{
//             return{
//                 title: formatToLocalTime(d.dt,timezone, 'hh:mm a'),
//                 temp: d.temp.day,
//                 icon:d.weather[0].icon
//             }
            
//         });
//         return {timezone,daily,hourly};
    
// }

const getFormattedWeatherData=
async (searchParams,searchParams2)=>{
const formattedCurrentWeather = await getWeatherData("weather",searchParams,searchParams2).then(formatCurrentWeather);



const {lat, lon} =formattedCurrentWeather

// const formattedForcastWeather = await anotherApi(lat,lon).then(formatForcastWeather);

return formattedCurrentWeather;
}

const formatToLocalTime=(secs,zone,format="cccc,dd,LLL yyyy' | Local time: 'hh:mm a")=>{
    const zone2=zone-19800;
    // console.log(zone2/3600)
    const date=DateTime.fromSeconds(secs+zone2).toFormat(format)
// console.log(DateTime.fromSeconds(secs+zone2).toFormat(format))
return date
};


const iconUrlFromCode=(code)=>{
    const imgSrc=`http://openweathermap.org/img/wn/${code}@2x.png`;
    
    return imgSrc
}
export {formatToLocalTime, iconUrlFromCode};

export default getFormattedWeatherData;
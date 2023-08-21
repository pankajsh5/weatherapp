import { useEffect, useState } from 'react'
import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeandLocation from './components/TimeandLocation'
import TempratureandDetails from './components/TempratureandDetails'
// import Forcast from './components/Forcast'
import getFormattedWeatherData from './services/weatherService'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
const [query,setQuery] = useState("delhi")
const [units,setUnits] = useState("metric");
const [weather,setWeather]=useState(null);

useEffect(()=>{
  const fetchWeather=async()=>{
    const message= query?query:'current location.'
    toast.info('fetching weather for ' +message)
    const data=await getFormattedWeatherData(query,units).then((data)=>{
      toast.success(`Successfuly fetched weather for ${data.name}, ${data.country}`)
      setWeather(data);
    });
   //  const {temp} = data;
    // console.log(data);
    
   
   };
   fetchWeather();
},[query,units]);
 
const formatBackground=()=>{
  if(!weather)return "from-cyan-700 to to-blue-700";
  const thresold=(units==="metric")?25:77;
  if(weather.temp<=thresold)return "from-cyan-700 to to-blue-700";
  return "from-yellow-700 to to-orange-700"
}
  

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} text-cyan-400`}>
      
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      {weather && <div><TimeandLocation weather={weather}/>
      <TempratureandDetails weather={weather}/> 
      {/* <Forcast title="hourly forecast"/>
      <Forcast title="daily forecast"/> */}
      </div>}
      <ToastContainer autoClose={3000} theme='colored' newestOnTop='true' />
    </div>
  )
}

export default App

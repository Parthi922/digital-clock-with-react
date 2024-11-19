import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentTime,SetCurrentTime] = useState( new Date());

  useEffect (() => {
    const timer = setInterval(() =>{
      SetCurrentTime(new Date())
    },1000);

    return ()=>clearInterval(timer);
  }, []);



  const formatTimeWithLeadZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  
  const formatDate = (date) => {
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,options); // Corrected method name
  };


  return (
    <>
      <div className='digital-clock'>
        <h1>Digital Clock</h1>
        <div className='time'>{formatTimeWithLeadZero(formatHour(currentTime.getHours() )) }:
        {formatTimeWithLeadZero(currentTime.getMinutes() ) }:
        {formatTimeWithLeadZero(currentTime.getSeconds() ) }
        {currentTime.getHours() >= 12 ? " PM" :" AM"}
        </div>
        <div className='date'>{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App

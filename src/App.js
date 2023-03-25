import { useState, useEffect } from 'react';
import './App.css';
import ErrorMsg from './components/ErrorMsg';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TemperatureInfo from './components/TemperatureInfo';
import WeatherInfo from './components/WeatherInfo';

function App() {

  const [cityName, setCityName] = useState('');
  const [errorMsg, setErrorMsg] = useState();
  const [apiData, setApiData] = useState();

  const API_KEY = '14242d0cd05cac53f2fce73f3175445d';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;

  useEffect(() => {

    const fetchData = async () => {
      try
      {
        const response = await fetch(API_URL);
        const data = await response.json();

        if(response.ok){
          setErrorMsg(true);
          setApiData(data);
        }
        else{
          setErrorMsg(false);
        }
      } 
      catch (err)
      {
        setErrorMsg(false);
      }
    }

    fetchData();
  }, [cityName])

  return (
    <div className="App">
      <Header/>
     <SearchBar setCityName={setCityName}/>
     { errorMsg ? <TemperatureInfo data={apiData}/> : cityName == '' ? "" : <ErrorMsg/>}
     { errorMsg && <WeatherInfo data={apiData}/>}
     <Footer/> 
    </div>
  );
}

export default App;

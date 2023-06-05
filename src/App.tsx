import React,{useState,useEffect} from 'react';
import { Text,View,Button } from 'react-native';
import Loading from './Loading/Loading';
import axios  from 'axios';
import Nowweather from './components/Nowweather/Nowweather';
import Config from 'react-native-config';
import Tomorrowweather from './components/Tomorrowweather/Tomorrowweather';

function App () {

  
  const [blue, setBlue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  

  const fetchData = () => {
    axios.get(Config.API_URL)
      .then(response => {
        setBlue(response.data);
        setLoading(false);
        console.log(response)
        
        
      })
      .catch(error => {
        setError(error);
        setLoading(false);
       
      });
  };

useEffect(() => {
  
  fetchData();
  

  const date = new Date();
      const formattedTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      setCurrentTime(formattedTime);
}, []);

if(loading){
  return <Loading></Loading>
}



return (
 
    
    <View>
     
        
        <Nowweather times={currentTime} city={'ANTALYA'} day={'NOW'}   temp={blue.list && blue.list[1].main.temp}   icon={blue.list && blue.list[1].weather[0].icon} weath={blue.list && blue.list[1].weather[0].main}  desc={blue.list && blue.list[1].weather[0].description}  ></Nowweather>
        <Tomorrowweather icon={blue.list && blue.list[12].weather[0].icon}  temp={blue.list && blue.list[12].main.temp}  weath={blue.list && blue.list[12].weather[0].main}  desc={blue.list && blue.list[12].weather[0].description}     ></Tomorrowweather>
          
          

          
          
          
          
          
          
          

    </View>
  
// {blue.list && blue.list[1].dt_txt}
// <Text>Anlık:  {blue.list && blue.list[1].weather[0].icon} {blue.list && blue.list[1].weather[0].main}   {blue.list && blue.list[1].weather[0].description} {blue.list && blue.list[1].main.temp}    </Text>
    
    
    
 
  
  

)

}

export default App;


 







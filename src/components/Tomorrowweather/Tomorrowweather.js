import React from "react";
import {View,Text,Image,ImageBackground} from 'react-native'
import styles from './Tomorrowweather.style.js'



function Tomorrowweather ({temp,icon,weath,desc}) {
const url =  {uri:"https://openweathermap.org/img/wn/" +icon +"@2x.png"}

const rtemp = Math.round(temp)
return (
    <View style={styles.container}>
         
     <Text style={styles.title}  >TOMORROW</Text>
     
    <Image  source={url} style={styles.image} />
    <Text style={styles.label} >  {rtemp}C° {weath} ( {desc} )  </Text>
    </View>

)


}



export default Tomorrowweather;
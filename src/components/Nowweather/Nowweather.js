import React from "react";
import {View,Text,Image,ImageBackground} from 'react-native'
import styles from './Nowweather.style'



function Nowweather ({temp,icon,weath,desc,times,day,city}) {
const url =  {uri:"https://openweathermap.org/img/wn/" +icon +"@2x.png"}

const rtemp = Math.round(temp)
return (
    <View style={styles.container}>
         
     <Text style={styles.title}  >{city}</Text>
     <Text style={styles.now}  >{day}</Text>
     <Text style={styles.date}  >{times}</Text>
    <Image  source={url} style={styles.image} />
    <Text style={styles.label} >  {rtemp}C° {weath} ( {desc} )  </Text>
    </View>

)


}



export default Nowweather;
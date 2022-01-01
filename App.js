import React, { useState } from "react";
import {View,Text,StyleSheet} from 'react-native';
import Props from './component/props'
const app = () => {
  const [count,setCount] = useState(0);

  function up() { setCount(count+1)}
  const down = () => setCount(count-1)

  return(   

      <Props counts={count} down={down} up={up}/>
  )

}



export default app;
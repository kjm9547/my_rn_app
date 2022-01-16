import React, { useState } from "react";
import { SafeAreaView,StyleSheet } from 'react-native'
import Datehead from './component/date'
import InputArea from "./component/textbox";
import WorkList from "./component/worklist";
const App= () => {
  const date =new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const [user_list,setList] =useState([ 
    {done:true, text:"공부하기", id:1},
    {done:false, text:"사업하기", id:2},
    {done:false, text:"코인하기", id:3},
    {done:false, text:"학교가기", id:4},
  ])

  const On_Add_Bt = (text) =>{
    const nextid = Math.max(...user_list.map(todo => todo.id))+1
    const todo = {
      id:nextid,
      text,
      done:false
    }
    setList(user_list.concat(todo))

  }


  return(

    <SafeAreaView style = {styles.container}>
      <Datehead year={year} month={month} day={day} ></Datehead>
      <WorkList user_list = {user_list} done={user_list.done} ></WorkList>
      <InputArea On_Add_Bt={On_Add_Bt}></InputArea>
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1
    }
  }
)

export default App;
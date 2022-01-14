import React from "react";
import { View,Text, StyleSheet, StatusBar } from 'react-native'

function Datehead({year,month,day}){
    return(
        <>
        <StatusBar backgroundColor={"#fdd835"}></StatusBar>
            <View style={styles.head}>
                <Text style={styles.font_st}>{year}년 {month}월 {day}일</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    head:{
        backgroundColor:"#fdd835",
        padding:20
    },
    font_st:{
        fontSize:24
    }
})
export default Datehead;
import React, { useState } from "react";
import {StyleSheet,Text,Button,View, TextInput} from 'react-native';


function Props({counts,up,down,date}){
    const year =date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    const [text,setText] = useState('1')
    console.log(text)
    return(
    <View style={styles.container}>
        <View style={styles.bt_box}>
            <Button title='+1'
            style={styles.bt_style}
            onPress={up}></Button>
            <Button title='-1'
            style={styles.bt_style}
            onPress={down}></Button>
        </View>
        <View>
            <Text style={styles.num_st}>{counts}</Text>
        </View>
        <View>
            <Text>
                시간{year} {month} {day}
                
            </Text>
            
        </View>

        <View>
            <TextInput style={styles.chat_box}
            value={text}
            onChangeText={setText}>

            </TextInput>
        </View>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        num_st:{
            fontSize:24,
        },
        bt_style:{
            width:'100%'
        },
        chat_box:{
            width:'100%',
            borderColor:'black',
            borderWidth:1
        }
    }
)

export default Props;
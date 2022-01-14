import React,{useState} from "react";
import { StyleSheet, TextInput, View,TouchableOpacity,Text} from 'react-native'

function InputArea(){

    const [text,setText] = useState("");
    return(
        <View style={styles.inputarea}>
            <TextInput style={styles.textbox} value={text} onChangeText={setText}>
            </TextInput>
            <TouchableOpacity style={styles.et_bt}>
            <Text>ds</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textbox:{
            width:200,
            borderWidth:2,
            borderColor:"#e0e0e0",
            height:60
        },
        et_bt:{
            width:50,
            height:50,
            borderRadius:25
        }
    }
)
export default InputArea
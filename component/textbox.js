import React,{useState} from "react";
import { StyleSheet, TextInput, View,TouchableOpacity,Text, Keyboard} from 'react-native'

function InputArea({On_Add_Bt}){
    const [text,setText] = useState("");
    const onPress = () =>{
        On_Add_Bt(text);
        setText('');
        Keyboard.dismiss();
    }
    return(
        <View style={styles.inputarea}>
            <TextInput style={styles.textbox}
             value={text}
              onChangeText={setText}
              returnKeyType="done"
              onSubmitEditing={onPress}
              >
            </TextInput>
            <TouchableOpacity style={styles.et_bt}
            onPress={onPress}
            >
            <Text>ds</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        inputarea:{
            flexDirection:"row"
        },
        textbox:{
            flex:1,
            borderWidth:2,
            borderColor:"#e0e0e0",
            height:60
        },
        et_bt:{
            width:50,
            height:50,
            borderRadius:25,
            borderWidth:1,
            borderEndColor:"black"
        }
    }
)
export default InputArea
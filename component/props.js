import React from "react";
import {StyleSheet,Text,Button,View} from 'react-native';


function Props({counts,up,down}){
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
        }
    }
)

export default Props;
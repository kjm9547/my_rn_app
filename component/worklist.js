import React from "react";
import { FlatList, View,StyleSheet,Text, TouchableOpacity } from 'react-native'

function WorkList({user_list}){
    return(
    <FlatList style={styles.line}
    data={user_list}
    renderItem={({item}) =>( 
        <View style={styles.box}>
        <TouchableOpacity style={styles.check_bt}>
        </TouchableOpacity>
        <View>
        <Text style={styles.list_st}>{item.text}</Text>
    </View>
    </View>
     )}
     keyExtractor={item =>item.id.toString()}>
    </FlatList>
    )
}

const styles = StyleSheet.create(
    {
        box:{
            flexDirection:"row"
        },
        check_bt:{
            width:50,
            height:50,
            borderWidth:1,
            borderRadius:25
            
        },
        checked_bt:{
            backgroundColor:"#e0e0e0"
        },
        line:{
            borderWidth:1,
            borderColor:'black',
            flex:1,
            
        
        },
        list_st:{
            borderWidth:1,
            flex:1,
            height:60,
            borderColor:"red",
            fontSize:24,
            paddingVertical:10,
            paddingHorizontal:10
        }
    }
)
export default WorkList;
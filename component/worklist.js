import React from "react";
import { FlatList, View,StyleSheet,Text } from 'react-native'

function WorkList({user_list}){
    return(
    <FlatList style={styles.line}
    data={user_list}
    renderItem={({item}) =>(
        <View>
        <Text>{item.text}</Text>
    </View>
     )}
     keyExtractor={item =>item.id.toString()}>
    </FlatList>
    )
}

const styles = StyleSheet.create(
    {
        line:{
            borderWidth:1,
            borderColor:'black',
        
        }
    }
)
export default WorkList;
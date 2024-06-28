import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Avatar} from '@rneui/base';

export default function AvatarProfile() {
  return (
    <View style={styles.conteiner}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Avatar  
            size='64'
            rounded 
            source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256'}}
        />
        <View style={{marginRight: 16, flex:1,flexDirection:'row', }}>
            <View style={{flex: 1, justifyConetnt: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 16}}>5</Text>
                <Text>post</Text>
            </View>
            <View style={{flex: 1, justifyConetnt: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 16}}>5</Text>
                <Text>post</Text>
            </View>
            <View style={{flex: 1, justifyConetnt: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight:'bold', fontSize: 16}}>5</Text>
                <Text>post</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddignHorizontal:16, 
    }
})
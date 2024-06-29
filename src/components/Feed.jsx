import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Avatar} from '@rneui/base';
import {Image, Icon} from '@rneui/themed';

export default function Feed() {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "row", paddingHorizontal: 32}}>
            <View style={{marginRight: 16, flex:1, flexDirection:'row', marginTop: 30}}>
                <View style={{flex: 1, justifyConetnt: 'center', alignItems: 'center'}}>
                <Avatar size='64' rounded source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256'}}/>
                    <Text>post</Text>
                </View>
                <View style={{flex: 1, justifyConetnt: 'center', alignItems: 'center'}}>
                <Avatar size='64' rounded source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256'}}/>
                    <Text>post</Text>
                </View>
                <View style={{flex: 1, justifyConetnt: 'center', alignItems: 'center'}}>
                <Avatar size='64' rounded source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256'}}/>
                    <Text>post</Text>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 16, marginTop: 64}}>
            <Avatar  
                size={32}
                source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256'}}
            />
            <Text style={{justifyContent: 'center'}}> Sheila Camila</Text>
            <View style={{ flex: 1, alignItems: 'flex-end'}}>
                <Icon type="material-community" name="login" size={16} />
            </View>
        </View>
        <View style={{marginTop: 16}}>
            <Image source={{uri: "https://placehold.co/600x400.png",}} style={{width: '100%', height: 250}}/>
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 32}}>
            <View style={{ flexDirection: "row", paddingHorizontal: 32, marginTop: 64}}/>
                <Icon type="material-community" name="heart" color={'red'} size={24} />
                <Icon type="material-community" name="message-outline" size={24} />
                <Icon type="material-community" name="message-monitor-share" size={24} />
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Icon type="material-community" name="export-variant" size={16} />
                </View>
            </View>
        </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    }
})
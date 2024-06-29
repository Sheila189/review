import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image, Icon, Input, Button} from '@rneui/themed'

export default function FormLogin() {
  return (
    <View style={styles.conteiner}>
        <Image>source= {{uri:''}} style={{width:150, height:150}} </Image>
        <Input placeholder="Email"
        style={{marginVertical: 16}}
        label="Correo electronico"
        labelStyle={{ color: "green" }}/>
        
        <Input 
        placeholder="******"
        containerStyle={{ marginTop:16 }}
        style={{color: "green"}}
        secureTextEntry={true}/>

        <Button 
        title="Iniciar sesion"
        color={'white'}
        containerStyle={{ marginTop:16, width: '80%', borderRadius: 16, borderWidth:1, borderColor: 'green'}}
        titleStyle={{ color: "green" }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    conteiner: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,

    }
})
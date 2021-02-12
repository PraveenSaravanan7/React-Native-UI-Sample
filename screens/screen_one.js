import React from 'react'
import { View, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native'
import {Button, Title, TextInput, Text} from 'react-native-paper'
import { GS } from "../GlobalStyles";
import { ButtonLg } from "../CustomComponents";
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
export const screen_one = ({ navigation }) => {
    const {height, width} = Dimensions.get('window');

    const actualDimensions =  {
    height:  (height<width) ? width : height,
    width: (width>height) ? height : width
    };

    let[text,setText]=useState()

    return (
        <SafeAreaView style={GS.container}>
            <ScrollView style={GS.scrollView}>
          <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex:1, alignItems:'center'}} >
        <Image source={require('../assets/images/like.png')} style={{ width: actualDimensions.width/5,height:actualDimensions.width/5, marginTop:50,transform: [{ rotate: '45deg' }]}} />
        <Title style={{fontSize:40, fontWeight:'bold', lineHeight:45, marginTop:30}} >Login to a lovely life.</Title>
        </View> 
        <View style={{flex:1,alignItems:'center'}} >
            <Image source={require('../assets/images/aa.jpg')} style={{width: actualDimensions.width/2,height:actualDimensions.height/2, resizeMode:'contain', marginTop:30}} ></Image>
        </View>
      </View>
        <View style={{flex:1}} >
            <Title style={{color:'#4d4d4d', fontSize:16}} >Enter your mobile number</Title>
        <TextInput
        style={GS.input} 
      value={text}
      onChangeText={text => setText(text)}
      left={<TextInput.Affix text={'+91 '} />}
    /> 

     <ButtonLg style={{marginTop:20}} onPress={() => {navigation.push("screen_two")}} >Continue</ButtonLg>
     

        
            <Text style={{color:'gray', fontSize:14, alignSelf:'center', marginTop:12,}} > Or</Text>
        <View style={{flex:1, flexDirection:'row', marginTop:12}} >
            <View style={{flex:1}} >
                <TouchableOpacity onPress={() => {navigation.push("screen_two")}} >
                <View style={{borderColor:'#e60000', borderWidth:1.5, marginRight:10, padding:10, alignItems:'center', borderRadius:8}}  >
                <Image source={{uri: 'https://www.citypng.com/public/uploads/preview/-11596994631mamco4gnk5.png'}} style={{width:30, height: 30, resizeMode:'contain'}} />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flex:1}} >
                <TouchableOpacity onPress={() => {navigation.push("screen_two")}} >
                <View style={{borderColor:'#4169e1', borderWidth:1.5, marginLeft:10, padding:10, alignItems:'center', borderRadius:8}}  >
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png'}} style={{width:30, height:30, resizeMode:'contain'}} />
                </View>
                </TouchableOpacity>
            </View>
           
        </View>
        <View style={{alignItems:'center',marginTop: 30}} >
                <Text style={{color:'#c4c4c4', fontSize:13, textAlign:'center'}} >By continue to login, you accept our company's {'\n'}
                <Text style={{color:'#ff124d', fontSize:13,}} >Terms & Conditions</Text> and <Text style={{color:'#ff124d', fontSize:13,}} >Private policies</Text>.
                 </Text>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

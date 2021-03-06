import React from 'react'
import { View, SafeAreaView, ScrollView, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Title, Button, TextInput , Chip} from 'react-native-paper';
import { ButtonLg } from '../CustomComponents';
import { GS } from '../GlobalStyles';
export const screen_four = ({ navigation }) => {
    return (
        <SafeAreaView style={GS.container}>
        <ScrollView style={GS.scrollView}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} >
                <Image  source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png'}} style={{width:35, height: 35, resizeMode:'contain'}} />
                </TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:35, marginTop:30}} >
                    Enter 4 digit code sent 
                    to you at <Text style={{color:'#ff124d'}} >8778080432</Text>
                </Text>

                <View style={{marginTop:30}} >
                    <TextInput style={GS.input_two} label="Verification Code" />
                    {/* <Title style={{color:'gray', fontSize:16, fontWeight:'bold',marginLeft:10}} >Gender</Title>
                   <View >Male</View> */}
                </View>
                <ButtonLg disabled={false} style={{marginTop:20}} >Verify</ButtonLg>
     
                <View style={{alignItems:'center',marginTop: 30}} >
                <Text style={{color:'#c4c4c4', fontSize:13, textAlign:'center'}} >By continue to login, you accept our company's {'\n'}
                <Text style={{color:'#ff124d', fontSize:13,}} >Terms & Conditions</Text> and <Text style={{color:'#ff124d', fontSize:13,}} >Private policies</Text>.
                 </Text>
            </View>
        </ScrollView>
        </SafeAreaView>
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //   <Title>screen_two</Title>
        //   <Button mode="contained" onPress={() => {navigation.goBack()}}>
        //       Go Back
        //     </Button>
         
        // </View>
    )
}

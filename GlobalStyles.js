import { StyleSheet, StatusBar } from 'react-native';

export const GS= StyleSheet.create({
  blueText: {
    color: 'blue'
  },
  redText: {
    color: 'red'
  },
  view:{
    flex: 1,
    padding: 20,
    
  },
  btn_lg: {
      padding:4
  },
  btn_lable_lg:{
      textTransform: 'none',
      fontSize:16
  },
  btn_lable:{
    fontWeight:'bold',
    textTransform: 'none',
    letterSpacing:0.4
  },
  input:{
    fontWeight:'bold',
},
container: {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
},
scrollView: {
 
  padding:20,
},
input_two:{
  fontWeight:'bold',
  backgroundColor:'white',
  marginBottom:10
}
});

import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
export const ButtonLg = (props) => {
    return (
       <Button disabled={props.disabled} mode="contained" style={[styles.btn_lg,{...props.style}]} labelStyle={styles.btn_lable_lg} onPress={props.onPress} >{props.children}</Button>
    )
}

const styles = StyleSheet.create({   
    btn_lg: {
        padding:8
    },
    btn_lable_lg:{
        fontWeight:'bold',
        textTransform: 'none',
        fontSize:16,
        letterSpacing:0.4
    },
    btn_lable:{
        fontWeight:'bold',
        textTransform: 'none'
    },
   
  });
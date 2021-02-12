import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {configureFonts, DefaultTheme as PaperTheme,  Provider as PaperProvider} from 'react-native-paper';
import { useFonts } from 'expo-font';
import {screen_one} from './screens/screen_one';
import {screen_two} from './screens/screen_two';
import {screen_three} from './screens/screen_three';
import {screen_four} from './screens/screen_four';
import { useState } from 'react';


export default function App() {

const Stack = createStackNavigator();
const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const [loaded] = useFonts({roboto:require('./assets/fonts/Roboto-Regular.ttf'),
                    roboto_medium:require('./assets/fonts/Roboto-Medium.ttf'),
                    roboto_thin:require('./assets/fonts/Roboto-Thin.ttf'),
                    roboto_light:require('./assets/fonts/Roboto-Light.ttf')
                      }) 

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'roboto_medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'roboto_light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'roboto_thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'roboto_medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'roboto_light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'roboto_thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'roboto_medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'roboto_light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'roboto_thin',
      fontWeight: 'normal',
    },
  }
};


const theme = {
  ...PaperTheme,
  fonts: configureFonts(fontConfig),
  roundness: 8,
  colors: {
    ...PaperTheme.colors,
    primary: '#ff124d',
    accent: '#f1c40f',
  },
};

if(!loaded){
  return null
}

  return (
    <PaperProvider theme={theme} >
  <NavigationContainer theme ={NavigationTheme}>
    <Stack.Navigator initialRouteName="screen_one" screenOptions={{headerShown:false}}>
    
      <Stack.Screen name="screen_one" component={screen_one} options={{ title: 'Welcome' }} />
      <Stack.Screen name="screen_two" component={screen_two} />
      <Stack.Screen name="screen_three" component={screen_three} />
      <Stack.Screen name="screen_four" component={screen_four} />

    </Stack.Navigator>
  </NavigationContainer>
  </PaperProvider>
  );
}


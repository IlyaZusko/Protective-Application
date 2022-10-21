import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './Navigate';

const fonts = () => Font.loadAsync({
  'mul-reg': require('./assets/font/Mulish-Regular.ttf'),
  'mul-light': require('./assets/font/Mulish-Light.ttf'),
  'mul-semibold': require('./assets/font/Mulish-SemiBold.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={err => console.warn(err)} />
    );

  }
 
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'mul-reg',
    fontFamily: 'mul-light',
    fontFamily: 'mul-semibold',
    color: 'black',
    fontSize: 20
  },
  
  
});

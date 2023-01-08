import {Background} from './src/components/Background'
import {StatusBar} from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import React from 'react'
import {Loading} from './src/components/Loading'
import {Routes} from './src/routes'

export default function () {
  const [fontsLoading] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })

  return (
    <Background>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoading ? <Routes /> : <Loading />}
    </Background>
  )
}

import { Image, SafeAreaView, Text } from 'react-native'
import React from 'react'
import splash from '../../assets/splash.gif'

export default function Splash() {
  return (
    <SafeAreaView>
      <Image
        source={splash}
      />
    </SafeAreaView>
  )
}
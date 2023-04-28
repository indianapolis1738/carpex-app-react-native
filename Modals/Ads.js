import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();

export default function Ads( {navigation}) {

  const pressBack = () => {
    navigation.navigate('Dashboards')
  }

  return (
    <SafeAreaView>
      <View>
      <MaterialIcons name="arrow-back" size={40} color="black"
       style={{marginTop: 10, }} onPress={pressBack} />
      </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
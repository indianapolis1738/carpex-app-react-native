import { SafeAreaView, StatusBar, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthContext } from './context'





function Dashboard ({navigation})  {

  const {SignOut} = React.useContext(AuthContext);

  const pressBlog = () => {
    navigation.navigate("Blog")
  }

  return (
    <SafeAreaView style= {{padding: 3,}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style= {styles.div}>
       <Text style= {styles.dash}> Dashboard</Text>
      </View>
      <Button title='Blog' onPress={pressBlog}/>
      <Button title='Sign Out' onPress={() => SignOut()} />
       
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    div: {
      height: 70,
      backgroundColor: '#FFFFFF',
    },
    dash: {
      textAlignments: 'center',
    }
})



export default Dashboard
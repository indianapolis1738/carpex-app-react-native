import { SafeAreaView, StatusBar, Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { AuthContext } from './context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';





function Dashboard ({navigation})  {

  const {SignOut} = React.useContext(AuthContext);

  const pressBlog = () => {
    navigation.navigate("Blog")
  }

  return (
    <SafeAreaView style= {{padding: 3,}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style= {styles.div}>
        <View style={styles.dashdiv}>
       <Text style= {styles.dash}> Dashboard</Text>
       <View style={styles.dashicon}>
        <View style={styles.icon}>
           <MaterialCommunityIcons name='bell' color={'rgba(123, 120, 120, 1)'} size= {24} />
        </View>
        <View style={styles.icon}>
            <Entypo name="adjust" size={24} color={'rgba(123, 120, 120, 1)'} />
        </View>
        <View style={styles.icon}>
            <MaterialCommunityIcons name="face-man-profile" size={24} color="rgba(123, 120, 120, 1)" />
        </View>
        </View>
      </View>
      </View>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.lastcol}>
          <Text style={styles.last}>
            Last 30 Days
          </Text>
          <View style={styles.assetrow}>
            <View style={styles.assetcol}></View>
            <View style={styles.assetcol}></View>
            <View style={styles.assetcol}></View>
          </View>
        </View>
      </View>
      <View style={styles.buydiv}>

      </View>
      <Button title='Blog' onPress={pressBlog}/>
      <Button title='Sign Out' onPress={() => SignOut()} />
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  assetrow: {
    flexDirection: 'row',
    marginEnd: 10,
    marginTop: 15,
  },
  assetcol: {
    backgroundColor: '#F8FBFF',
    width: '30%',
    marginStart:'3%',
    height: 80,
    borderRadius: 5,
  },
  buydiv: {
    width: '90%',
    height: 500,
    backgroundColor: 'white',
    marginStart: '5%',
    borderRadius: 10,
    marginTop: 10,
  },
  container: {
    height: 600,
    width: '100%',
    backgroundColor: '#172144',
    borderRadius: 20,
  },
    dash: {
      fontSize: 20,
      fontWeight: '700',
      fontStyle: 'normal',
    },
    dashdiv: {
      marginTop: 20,
      flexDirection: 'row',
    },
    dashicon: {
      flexDirection: 'row',
      marginStart: '40%',
     
    },
    div: {
      height: 70,
      backgroundColor: '#FFFFFF',
    },
    icon: {
      marginEnd: 10,
      borderColor: 'rgba(123, 120, 120, 1)',
      borderWidth: 2,
      borderRadius: 30,
    },
    last: {
      color: '#FFFFFF',
      marginStart: 20,
      marginTop: 20,
      fontWeight: '500',
    },
    lastcol: {
      marginTop: 10,
    },
})



export default Dashboard
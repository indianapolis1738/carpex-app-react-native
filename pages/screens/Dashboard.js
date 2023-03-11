import { SafeAreaView, StatusBar, Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from './context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const listTab = [
  {
    status: 'Buy'
  },
  {
    status: 'Sell'
  }
]





function Dashboard ({navigation})  {

  const [status, setStatus] = useState('All')
  const setStatusFilter = status => {
    setStatus(status)
  }

  
  const {SignOut} = React.useContext(AuthContext);

  const pressBlog = () => {
    navigation.navigate("Blog")
  }

  return (
    <SafeAreaView style= {{padding: 3,}}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style= {styles.div}>
       <View style={styles.dashdiv}>
        <TouchableOpacity style={styles.menu}>
         <MaterialIcons name="menu" size={35} color="rgba(123, 120, 120, 1)" />
         </TouchableOpacity>
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
        <View  style={styles.listTab}>
          {
            listTab.map(e=> (
          <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]} onPress={() => setStatusFilter(e.status)}>
            <Text style={styles.textTab}>
              {e.status}
            </Text>
          </TouchableOpacity>
            ))
          }
          </View>
      </View>
      <View style={styles.market}>
        <Text style={ styles.marketHead}>
          Market
        </Text>
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
  btnTabActive: {
    color: 'rgba(23, 33, 68, 1)',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(23, 33, 68, 1)',
  },
  btnTab: {
    flexDirection: 'row',
    margin: 50,
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
      marginStart: '30%',
      
    },
    div: {
      height: 70,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: {
      marginEnd: 12,
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
    listTab: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    market: {
      backgroundColor: 'transparent',
      minHeight: 400,
      maxHeight: 800,
    },
    marketHead: {
      fontWeight: '400',
      fontSize: 30,
      paddingStart: 25,
      paddingTop: 20,
    },
    menu: {
      marginTop: -4,
      paddingStart: 10,
    },
    textTab: {
      fontSize: 20,
      fontWeight: '600',
      width: 100,
      textAlign: 'center',
    },
})



export default Dashboard
import { SafeAreaView, StatusBar, Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl, Image } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from './context'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Market from './homeMarket';
import Notifications from '../../components/notifications';



const listTab = [
  {
    status: 'Buy'
  },
  {
    status: 'Sell'
  }
]





function Dashboard ({navigation})  {


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const [status, setStatus] = useState('All')
  const setStatusFilter = status => {
    setStatus(status)
  }

  
  const {SignOut} = React.useContext(AuthContext);

  const pressBlog = () => {
    navigation.navigate("Blog")
  }

  const pressMarket = () => {
    navigation.navigate('Market')
  }


  const pressProfile = () => {
    navigation.navigate('Profile')
  }


  return (
    <SafeAreaView style= {{padding: 3, height: '100%',}}>
      <StatusBar barStyle="dark-content"/>
      <View style= {styles.div}>
       <View style={styles.dashdiv}>
        <TouchableOpacity style={styles.menu}>
         <MaterialIcons name="menu" size={35} color="rgba(123, 120, 120, 1)" />
         </TouchableOpacity>
         <Text style= {styles.dash}> Dashboard</Text>
       <View style={styles.dashicon}>
        <View style={styles.icon}>
           <Notifications />
        </View>
        <View style={styles.icon}>
            <Entypo name="adjust" size={24} color={'rgba(123, 120, 120, 1)'} />
        </View>
        <View  style={{paddingEnd: 20,}}>
          <TouchableOpacity onPress={pressProfile}>
            <Image
            source={{uri: 'https://lh3.googleusercontent.com/a/AGNmyxYRX-4BlLMfVvFvDtl3kHs70DiJYOt5UWAcyd8=s360',}}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
            />
            </TouchableOpacity>
        </View>
        </View>
      </View>
      </View>
      <ScrollView
         contentContainerStyle={styles.scrollView}
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
      >
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
        <View style={styles.marketDiv}>
          <Text style={ styles.marketHead}>
            Market
          </Text>
          <TouchableOpacity onPress={pressMarket} style={{flexDirection: 'row', paddingStart: '40%', marginTop: 12,}}>
            <Text>
              View More
            </Text>
            <MaterialIcons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
          <Market/>
      </View>
      <Button title='Blog' onPress={pressBlog}/>
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
      fontSize: 22,
      fontWeight: '700',
      fontStyle: 'normal',
      marginTop: 8,
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
      width: 30,
      marginTop: 7,
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
      height: 500,
      overflow: 'hidden',
    },
    marketDiv: {
      flexDirection: 'row',
      paddingStart: 25,
      paddingTop: 40,
      marginBottom: 20,
    },
    marketHead: {
      fontWeight: '400',
      fontSize: 30,
    },
    menu: {
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
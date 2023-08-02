import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//import Market from './homeMarket';
import Notifications from '../../components/notifications';
import Buy from '../../Modals/Buy';
import Sell from '../../Modals/Sell';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import News from './News';


const Tab = createMaterialTopTabNavigator();
const TradeStack = createStackNavigator();
const TradeStak = createStackNavigator();

const TradeStackScreen = () => (
  <TradeStack.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#172144',
    }}
  >
    <TradeStack.Screen name='buy' component={Buy} />
  </TradeStack.Navigator>
)

const TradeStakScreen = () => (
  <TradeStak.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#172144',
    }}
  >
    <TradeStak.Screen name='Sell' component={Sell} />
  </TradeStak.Navigator>
)



function Dashboard({ navigation }) {



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



  const pressMarket = () => {
    navigation.navigate('Markets')
  };


  const pressProfile = () => {
    navigation.navigate('Profile')
  };

  const pressBlog = () => {
    navigation.navigate("Blog")
  }

  const [greet, setGreet] = useState('');

  const findGreet = () => {
    const hrs = new Date().getHours()
    if (hrs === 0 || hrs < 12) return setGreet('Morning 😀');
    if (hrs === 1 || hrs < 16) return setGreet('Afternoon 🙂');
    setGreet('Evening 🌚')
  }

  useEffect(() => {
    findGreet();
  }), []

  return (
    <SafeAreaView style={{ padding: 3, height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.div}>
        <View style={styles.dashdiv}>
          <TouchableOpacity style={styles.menu} onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={40} color="black" />
            <Text style={styles.dash}> Dashboard</Text>
          </TouchableOpacity>

          <View style={styles.dashicon}>
            <View style={styles.icon}>
              <Notifications />
            </View>
            <View style={styles.icon}>
              <Entypo name="adjust" size={24} color={'rgba(123, 120, 120, 1)'} />
            </View>
            <View style={{ paddingEnd: 20, }}>
              <TouchableOpacity onPress={pressProfile}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/a/AGNmyxYRX-4BlLMfVvFvDtl3kHs70DiJYOt5UWAcyd8=s360', }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginEnd: 3,
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
            <View style={styles.greety}>
              <Text style={styles.greet}>{`Good ${greet},`}</Text>

            </View>

            <View style={styles.assetrow}>
              <View style={styles.assetcol}>
                <Text style={styles.colHeader}>
                  Wallet Balance
                </Text>
                <Text style={styles.amountCol}>
                  121,000 NGN
                </Text>
              </View>
              <View style={styles.assetcol}>
                <Text style={styles.colHeader}>
                  Total Assets
                </Text>
                <Text style={styles.amountCol}>
                  23
                </Text>
              </View>
              <View style={styles.assetcol}>
                <Text style={styles.colHeader}>
                  Total Transactions
                </Text>
                <Text style={styles.amountCol}>
                  23
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buydiv}>
          <Tab.Navigator>
            <Tab.Screen name="Buy" component={TradeStackScreen} />
            <Tab.Screen name="Sell" component={TradeStakScreen} />
          </Tab.Navigator>

        </View>
        <View style={styles.market}>
          <View style={styles.marketDiv}>
            <Text style={styles.marketHead}>
              Market
            </Text>
            <TouchableOpacity onPress={pressMarket} style={{ flexDirection: 'row', paddingStart: '40%', marginTop: 12, }}>
              <Text>
                View More
              </Text>
              <MaterialIcons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {/* <View>
            <Market />
          </View>*/}
        </View>
        <View>
          <View style={{ flexDirection: 'row', marginStart: "5%", marginBottom: "5%" }}>
            <Text style={styles.marketHead}>News</Text>
            <TouchableOpacity onPress={pressBlog} style={{ flexDirection: 'row', paddingStart: '50%', marginTop: 12, }}>
              <Text>
                View More
              </Text>
              <MaterialIcons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <News />
        </View>

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
    marginStart: '3%',
    height: 80,
    borderRadius: 5,
  },
  amountCol: {
    marginStart: 5,
    marginTop: 10,
    fontWeight: '500',
    fontSize: 17,
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
  colHeader: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
    marginStart: 5,
  },
  container: {
    height: 600,
    width: '98%',
    backgroundColor: '#172144',
    borderRadius: 20,
    marginStart: "1%",
    marginTop: "2%"
  },
  dash: {
    fontSize: 23,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingTop: 5,
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greet: {
    color: 'white',
    marginStart: 15,
    fontWeight: '700'
  },
  greety: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  icon: {
    marginEnd: 12,
    width: 30,
    marginTop: 7,
  },
  lastcol: {
    marginTop: 10,
  },
  listTab: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 500,
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
    flexDirection: "row",
    marginLeft: 5
  },
  textTab: {
    fontSize: 20,
    fontWeight: '600',
    width: 100,
    textAlign: 'center',
  },
})



export default Dashboard
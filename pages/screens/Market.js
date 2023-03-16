import { useEffect, useState, useRef, useMemo,useCallback } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Button, TouchableOpacity, RefreshControl } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Chart from '../../components/Chart';
import moment from 'moment/moment';




export default function Market() {

 

  const [selectedCoin, setSelectedCoin] = useState(null)

  const openModal = (coins) =>{
    setSelectedCoin(coins);
    bottomSheetModalRef.current.present();
  }

   // ref
   const bottomSheetModalRef = useRef (null);

   // variables
   const snapPoints = useMemo(() => ['50%', '95%'], []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [data,setData] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=7d'

  useEffect (()=> {
    fetch(url) 
    .then((response)=>response.json())
    .then((json)=> setData(json))
    .catch((error)=>console.error(error))
  }, [])

  return (
    <BottomSheetModalProvider>
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerName}>Coin</Text>
        <Text style={styles.headerName}>Price</Text>
        <Text style={styles.headerName}>Trade</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        { (
          data.map((coins) => (
            
            <TouchableOpacity  style={styles.market} onPress = {() => openModal(coins)} >
              <View  >
                <Image 
                  source={{ uri: coins.image}}
                  style={{
                    height: 37,
                    width: 37,
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={styles.name}>
              <Text>
                {coins.name}
              </Text>
              <Text>
                {coins.symbol.toUpperCase()}
              </Text>
              </View>
              <View style={styles.price}>
                <Text>
                ₦{coins.current_price.toLocaleString()}
                </Text>
                {
                  coins.price_change_percentage_24h < 0 ?(
                    <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="arrow-drop-down" size={20} color="red" />
                      <Text style={{color: 'red', flexDirection: 'row,'}}>
                        {coins.price_change_percentage_24h.toFixed(2)}%
                      </Text></View> ) : (
                    <View style={{flexDirection: 'row'}}>
                      <MaterialIcons name="arrow-drop-up" size={20} color="green" />
                      <Text style={{color: 'green'}}>
                      {coins.price_change_percentage_24h}%
                      </Text> 
                     </View>
                )
                }
                
              </View>
              <TouchableOpacity style={styles.buy}>
                <Text style={{color: 'white', alignSelf: 'center', marginTop: 10,}}>Buy</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            

          ))
        )}
        </ScrollView>
    </SafeAreaView>




    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
    >
      { selectedCoin ? (
         <Chart
          currentPrice={selectedCoin.current_price}
          logoUrl={selectedCoin.image}
          name={selectedCoin.name}
          priceChange={selectedCoin.price_change_percentage_24h}
          short= {selectedCoin.symbol}
          marketCapRank= {selectedCoin.market_cap_rank}
          marketcap= {selectedCoin.market_cap}
         />
         ) : (<View>
          No Data
         </View>)
        }
    </BottomSheetModal>
    </BottomSheetModalProvider>

  )

  
}

const styles = StyleSheet.create({
  buy: {
    width: '15%',
    backgroundColor: '#1B273F',
    overflow: 'hidden',
    marginEnd: 20,
    height: 35,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor:'white',
    marginBottom: 10,
  },
  headerName: {
    marginStart: '20%',
    marginTop: 15,
    fontWeight: '700',
  },
  market: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginEnd: 15,
    marginStart: 15,
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  name: {
    color: '#1F1F1F',
    width: '20%',
  },
  price: {
    width: '25%',
  },

})
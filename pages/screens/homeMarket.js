import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function homeMarket() {

  const [isLoading, setLoading] = useState(true);


  const [data,setData] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=1h'

  useEffect (()=> {
    fetch(url) 
    .then((response)=>response.json())
    .then((json)=> setData(json))
    .catch((error)=>console.error(error))
    .finally(setLoading(false))
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerName}>Coin</Text>
        <Text style={styles.headerName}>Price</Text>
        <Text style={styles.headerName}>Trade</Text>
      </View>
      <View>
        {
        isLoading ? 
        <Text>
          Loading
        </Text>
        : (
          data.map((coins) => (
            <View style={styles.market} key={idx}>
                <Text>
                    {coins.market_cap_rank}
                </Text>
              <View >
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
            </View>
          ))
        )}
        </View>
    </SafeAreaView>

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
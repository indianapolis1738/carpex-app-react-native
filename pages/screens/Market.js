import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Market() {

  const [data,setData] = useState([])

  const [loading, setLoading] = useState(true)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h'

  useEffect (()=> {
    fetch(url) 
    .then((response)=>response.json())
    .then((json)=> setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        {loading ? (<Text>loading</Text>) : (
          data.map((coins) => (
            <View style={styles.market}>
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
                <Text style={{color: 'red'}}>
                  {coins.price_change_percentage_24h.toFixed(2)}%
                </Text> ) : (
                   <Text style={{color: 'green'}}>
                   {coins.price_change_percentage_24h.toFixed(2)}%
                 </Text> 
                )
                }
                
              </View>
              <TouchableOpacity style={styles.buy}>
                <Text style={{color: 'white', alignSelf: 'center', marginTop: 10,}}>Buy</Text>
              </TouchableOpacity>
            </View>
            

          ))
        )}
        </ScrollView>
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
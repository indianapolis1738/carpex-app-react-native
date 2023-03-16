import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

const Chart = ({currentPrice, logoUrl, name,priceChange, sparkline, short, marketCapRank, marketcap }) => {

  
  return (
    <View>
      <View style={styles.mainDiv}>
        <View style={styles.titles}>
        <View style={{flexDirection: 'row'}}>
        <Image 
            source={{uri: logoUrl}}
            style={{
                width: 24,
                height: 24,
            }}
        />
        <Text>
            {name}({short})
        </Text>
        </View> 
        <Text>
        24h
        </Text>
        </View>
      <View style={styles.titleLower}>
        <Text style={styles.current}>
        ₦{currentPrice.toLocaleString()}
        </Text>
        {
          priceChange < 0 ? (
            <Text style={{color: 'red'}}>
            {priceChange.toFixed(2)}%
            </Text>
          ) : (
            <Text style={{color: 'green'}}>
            {priceChange.toFixed(2)}%
            </Text>
          )
        }
      </View>
       <View style={styles.marketCap}>
        <Text style={styles.rank}>
          Rank: {marketCapRank}
        </Text>
        <Text style={styles.capitalization}>
          Market Capitalization: ₦{marketcap.toLocaleString()}
        </Text>
       </View>
       <View>
        <Text>

        </Text>
       </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  capitalization: {
    fontSize: 15,
    fontWeight: '500',
  },
    current: {
        fontSize: 20,
        fontWeight: '700'
    },
    mainDiv: {
        width: '95%',
        marginStart: '2.5%',
        marginEnd: '2.5%',
    },
    marketCap: {
      marginTop: 20,
    },
    rank: {
      fontSize: 20,
      fontWeight: '400',
    },
    titles: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    titleLower: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
})

export default Chart
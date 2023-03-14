import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

const Chart = ({currentPrice, logoUrl, name,priceChange, sparkline, short, marketCapRank }) => {

  
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
        <Text>
            {priceChange.toFixed(2)}%
        </Text>
      </View>
      </View>

      <LineChart
        data={sparkline}
        width={Dimensions.get("window").width}
        height={256}
        verticalLabelRotation={30}
        chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
         bezier
      />



    </View>
  )
}


const styles = StyleSheet.create({
    current: {
        fontSize: 20,
        fontWeight: '700'
    },
    mainDiv: {
        width: '95%',
        marginStart: '2.5%',
        marginEnd: '2.5%',
    },
    titles: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    titleLower: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default Chart
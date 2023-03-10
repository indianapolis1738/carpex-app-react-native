import { Text, SafeAreaView,View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class Wallet extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style= {styles.wallet}>
          <Text>Total Balance</Text>
          <Text>1,2000,000</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  wallet: {
    height: '50%',
    backgroundColor: '#E5E5E5',
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: '10%',
  }
})

export default Wallet
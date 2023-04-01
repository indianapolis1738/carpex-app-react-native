 import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
 import React from 'react'

 
 
 
 
 const Buy = () => {
    
   return (
     <View style={styles.BuyModal}>
       <View style={styles.Exchange}>
        <Text style={styles.ExchangeText}>
            1 BTC = $22,000
        </Text>
       </View>
       <View style={styles.Trade}>
        <Text style={styles.Pay}>
            I'll Pay :
        </Text>
        <View style={styles.inputModal}>
            <TextInput placeholder='Enter quantity' style={styles.input} keyboardType='number-pad' />
            <Text style={styles.textBuy}>
                NGN
            </Text>
        </View>
        <Text style={styles.Pay}>
            To Get:
        </Text>
        <View style={styles.inputModal}>
            <TextInput placeholder='Crypto Amount' style={styles.input} keyboardType='number-pad' />
            <Text style={styles.textBuy}>
                USDT
            </Text>
        </View>
       </View>
       <TouchableOpacity style={styles.buyButton}>
        <Text style={{color:"white", alignSelf: 'center', marginTop: '10%', fontSize: 20}}>
            Buy
        </Text>
   </TouchableOpacity>
     </View>
   )
 }
 
 export default Buy;
 
 const styles = StyleSheet.create({
    buyButton: {
        alignSelf: 'center',
        marginTop: '19%',
        backgroundColor: '#172144',
        width: '40%',
        height: 50,
        borderRadius: 8,
    },
    BuyModal: {
        width: '90%',
        marginStart: '5%',
        marginTop: '20%',
    },
    Exchange: {
        alignSelf: 'center',
    },
    ExchangeText: {
        fontSize: 23,
    },
    input: {
        width: '70%',
        backgroundColor: '#F0F2F9',
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        textAlign: 'center',
    },
    inputModal: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#172144',
        borderRadius: 10,
        height: 45,
    },
    Pay: {
        fontSize: 15,
        marginBottom: '5%',
        marginTop: '5%',
    },
    textBuy: {
        color: 'white',
        alignSelf: 'center',
        marginStart: 20,
        fontSize: 20,
    },
    Trade: {
        alignSelf: 'center',
        width: '90%',
        marginTop: '10%'
    },
 })
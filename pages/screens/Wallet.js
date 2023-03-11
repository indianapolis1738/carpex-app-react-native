import { Text, SafeAreaView,View, StyleSheet, Button, ScrollView, FlatList,StatusBar } from 'react-native'
import React, { Component } from 'react'
import Line from '../../components/Line'
import Tables from '../../components/Tables'
import { MaterialCommunityIcons } from '@expo/vector-icons';




const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item }>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export class Wallet extends Component {




  render() {
    return (
      <SafeAreaView style= {styles.page}>
         <View style = {styles.header}>
          <Text style = {styles.wa}>Wallet</Text>
          <Text style = {styles.view}>View all your daily crypto stats and assets here</Text>
        </View>
        <ScrollView>
       

        <View style= {styles.wallet}>
          <View style={styles.baldiv}>
          <Text style = {styles.total}>Total Balance</Text>
          <Text style = {styles.balance}>1,2000,000</Text>
          </View>
          <View style = {styles.buttons}>
          <Line/>
          <View style={styles.container}>
             <View style = {styles.with}>
                <Button title='Deposit' color={'white'} />
             </View>
            <View style = {styles.with1}>
                <Button title='Withdraw' color={'#172144'} />
            </View>
            <View style = {styles.with1}>
               <Button title='Transfer' color={'#172144'} />
             </View>
         </View>
          </View>
        </View>
        <View style={styles.carousel}>
          <Text style={styles.assets}>
            My Assets
          </Text>
          <Text style={styles.this}>
            This will show all of the assets that you have
          </Text>
        </View>
        <View style={styles.carouselbig}>
          <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title}/>}
          keyExtractor={item=>item.id}
          horizontal
          />
        </View>
        <View>
          <Tables/>
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  assets: {
    color: '#000000',
    fontSize: '27%',
  },
  balance: {
    color: '#09012F',
    fontSize: '25%',
    fontWeight: '400',
    marginTop: 10,
  },
  baldiv: {
    marginStart: 20,
    marginTop: 20,
  },
  buttons: {
    marginTop: 45,
  },
  carousel:{
    marginStart: 12,
    marginTop: 20,
  },
  item: {
    width: 300,
    height: 130,
    backgroundColor: '#F0F2F9',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 10,
    marginTop: 20,
  },
  carouselbig: {
    flex: 1,
    marginTop: 10,
    width: '90%',
    marginStart: '5%',
  },
  container: {
      display: 'flex',
      flexDirection: 'row',
      marginStart: 2,
      marginTop: 20,
  },
  header: {
    marginTop: 10,
    marginStart: 10,
    marginBottom: 30,
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  page: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  this: {
    marginTop: 7,
  },
  total: {
    fontSize: '19%',
    fontWeight: '400',
    color: '#09012F',
  },
  view: {
    marginTop: 2,
    color: '#8C8C8C',
  },
  wa: {
    color: '#000000',
    fontSize: '30%',
    fontWeight: '600',
  },
  wallet: {
    height: 200,
    backgroundColor: '#F0F2F9',
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: '10%',
  },
  with: {
    backgroundColor: '#172144',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: '10',
    width: '30%',
    marginLeft: '2%',
    borderColor: '#E5E5E5',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  with1: {
    backgroundColor: '#F0F2F9',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: '10',
    width: '30%',
    marginLeft: '2%',
    borderColor: '#E5E5E5',
    borderWidth: 2,
    borderStyle: 'solid'
  },
})

export default Wallet
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button, SafeAreaView, StatusBar } from 'react-native';
import Fiat from '../TransactionScreens/Withdraw/Fiat';
import Crypto from '../TransactionScreens/Withdraw/Crypto';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const Tab = createMaterialTopTabNavigator();


class WithdrawModal extends Component {
  state = {
    modalVisible: false,
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: !modalVisible });
          }}
          style={styles.safe}
        >

          <Tab.Navigator>
            <Tab.Screen name="Home" component={Fiat} />
            <Tab.Screen name="Settings" component={Crypto} />
          </Tab.Navigator>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setState({ modalVisible: true })}>
          <Text style={styles.textStyl}>Withdraw</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default WithdrawModal;
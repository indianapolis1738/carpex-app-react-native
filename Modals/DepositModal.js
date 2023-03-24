import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button} from 'react-native';

class DepositModal extends Component {
  state = {
    modalVisible: false,
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Text style={{marginTop: 15, fontSize: 18,}}>
                Deposit funds
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              </View>
            <View style={styles.width}>
             <Text style={styles.label}>
                Wallet address: (Hold to copy)
             </Text>
             <View>
             <Text selectable={true} style={styles.copywallet}>
                174RoxLwdYWQDy7X1pSTvu32Wu3mfrpCTX
             </Text>
             </View>
            </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setState({modalVisible: true})}>
          <Text style={styles.textStyl}>Deposit</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
buttonOpen: {
    backgroundColor: 'transparent',
  },
  buttonClose: {
    backgroundColor: 'transparent',
    marginStart: '60%',
    marginBottom: 40,
  },
  copywallet: {
    fontSize: 20,
    marginTop: 10
  },
  
  label: {
    marginTop: 20,
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    marginTop: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    height: '90%',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  send: {
    height: 45,
    width: '90%',
    backgroundColor: '#172144',
    borderRadius: 10,
    marginTop: 30,
    alignContent: 'center'
  },
  textStyle: {
    fontSize: 35,
    fontWeight: '700'
  },
  textStyl: {
    fontSize: 19,
    color: 'white',
  },
  width: {
    width: '100%',
    marginStart: 30,
    marginTop: 30,
  },
});

export default DepositModal;
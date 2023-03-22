import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button} from 'react-native';

class TransferModal extends Component {
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
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
            <View style={styles.width}>
             <Text style={styles.label}>
                User ID: 
             </Text>
              <TextInput
                    style={styles.input}
                />

             <Text style={styles.label}>
                Asset to transfer (Choose from your asset):
             </Text>
                <TextInput
                    style={styles.input}
                />

                <Text style={styles.label}>
                    Amount to transfer:
                </Text>

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>
                    Transaction PIN:
                </Text>


              <View style={styles.pinModal}>
                <TextInput
                    style={styles.pin}
                    secureTextEntry
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.pin}
                    secureTextEntry
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.pin}
                    secureTextEntry
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.pin}
                    secureTextEntry
                    keyboardType="numeric"
                />
              </View>


                <View style={styles.send}>
                    <Button title='Send' color={'white'}/>
                </View>
                </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setState({modalVisible: true})}>
          <Text style={styles.textStyl}>Transfer</Text>
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
  buttonOpen: {
    backgroundColor: 'transparent',
  },
  buttonClose: {
    backgroundColor: 'transparent',
    marginStart: '90%',
    marginBottom: 40,
  },
  
  input: {
    height: 49,
    width: '90%',
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: '4px',
    textAlign: 'center'
  },
  label: {
    marginTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  pin: {
    width: 40,
    height: 40,
    backgroundColor: '#F2F2F2',
    margin: 17,
    textAlign: 'center',
    borderRadius: 10,
  },
  pinModal: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignContent: 'space-between',
    marginBottom: 20,
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
  },
  width: {
    width: '100%',
    marginStart: 30,
    marginTop: 30,
  },
});


export default TransferModal;
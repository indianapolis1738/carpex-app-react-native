import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button} from 'react-native';

class WithdrawModal extends Component {
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
             <Text>
                Wallet Address: 
             </Text>
              <TextInput
                    style={styles.input}
                />

             <Text>
                Asset to transfer (Choose from your asset):
             </Text>
                <TextInput
                    style={styles.input}
                />

                <Text>
                    Amount to transfer:
                </Text>

                <TextInput
                    style={styles.input}
                />

                <Text>
                    Transaction PIN:
                </Text>


                <View style={styles.pinModal}>
                <TextInput
                    style={styles.pin}
                />
                <TextInput
                    style={styles.pin}
                />
                <TextInput
                    style={styles.pin}
                />
                <TextInput
                    style={styles.pin}
                />
                </View>


                <View style={styles.send}>
                    <Button title='Send'/>
                </View>
                </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setState({modalVisible: true})}>
          <Text style={styles.textStyl}>Withdraw</Text>
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  pin: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
  },
  pinModal: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: 'yellow'
  },
  send: {
    height: 40,
    width: '90%',
    backgroundColor: '#172144',
    borderRadius: 10,
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
    marginStart: 10,
  },
});

export default WithdrawModal;
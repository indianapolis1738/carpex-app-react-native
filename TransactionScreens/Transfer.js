import React, {Component} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView, TouchableOpacity} from 'react-native';



class Transfer extends Component {
  state = {
    modalVisible: false,
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          >
          <View>
            <SafeAreaView style={styles.modalView}>
            <View style={{flexDirection: 'row',}}>
                <Text style={styles.notifications}>
                    Transfer
                </Text>
                <TouchableOpacity
                onPress={() => this.setState({modalVisible: !modalVisible})}
                style={styles.cancel}
                >
                    <Text style={styles.textStyle}>X</Text>
                </TouchableOpacity>
            </View>
                
            </SafeAreaView>
          </View>
        </Modal>
        <Pressable
          onPress={() => this.setState({modalVisible: true})}>
            <Text style={styles.transfer}>
                Transfer
            </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cancel: {
    marginStart: '45%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '95%',
    marginStart: '2.5%',
    height: '100%',
  },
  notifications: {
    fontSize: 30,
    fontWeight: '500'
  },
  
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
  },
  transfer: {
    fontSize: 19,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Transfer;
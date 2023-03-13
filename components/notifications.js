import React, {Component} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



class notifications extends Component {
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
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>

            </SafeAreaView>
          </View>
        </Modal>
        <Pressable
          onPress={() => this.setState({modalVisible: true})}>
            <MaterialCommunityIcons name='bell' color={'rgba(123, 120, 120, 1)'} size= {25} />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'black',
    width: 30,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});

export default notifications;
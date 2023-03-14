import React, {Component} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView, TouchableOpacity} from 'react-native';
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
            <View style={{flexDirection: 'row',}}>
                <Text style={styles.notifications}>
                    Notifications
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
            <MaterialCommunityIcons name='bell' color={'rgba(123, 120, 120, 1)'} size= {25} />
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
    width: '100%',
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
  
});

export default notifications;
import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Image, ImageBackground} from 'react-native';

const Success = () => {




  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View>
        <SafeAreaView style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}>
            <View>
            <View style={styles.modalView}>

                <View>
                    <ImageBackground source={require('./../assets/yay.png')} resizeMode='repeat'  style={styles.succesTop}>
                        <Text style={styles.transsuccess}>
                        Transaction Successful
                    </Text>
                    </ImageBackground>
                </View>
                <View style={styles.sentModal}>
                   
                    <View style={styles.first}>
                    <Image 
                        source={{uri: 'https://lh3.googleusercontent.com/a/AGNmyxYRX-4BlLMfVvFvDtl3kHs70DiJYOt5UWAcyd8=s360',}}
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 10,
                          marginEnd: 18
                        }}
                    />
                        <View>
                            <Text style={styles.label}>
                                Recepient
                            </Text>
                            <Text style={styles.top}>
                                SinzuMoney
                            </Text>
                        </View>
                        <View style={styles.end}>
                            <Text style={styles.label}>
                                Reference number
                            </Text>
                            <Text  style={styles.top}>
                                #D83667448FGHBVFCG
                            </Text>
                        </View>
                    </View>
                    <View style={styles.second}>
                        <View>
                            <Text style={styles.label}>
                                Asset Sent 
                            </Text>
                            <Text style={styles.top}>
                                0.55754 BTC
                            </Text>
                        </View>
                        <View style={styles.end}>
                            <Text style={styles.label}>
                                Value
                            </Text>
                            <Text style={styles.top}>
                            ₦1,000,000
                            </Text>
                        </View>
                    </View>
                </View>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                 <Text style={{color: 'white', alignSelf: 'center', marginTop: 12, fontSize: 16}}>Done</Text>
                </Pressable>
            </View>
             </View>
        </Modal>
        </SafeAreaView>
    <Pressable
      onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Transfer</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  end: {
    marginStart: 29,
  },
  first: {
    flexDirection: 'row'
  },
  label: {
    color: '#9EA6BE'
  },
  modalView: {
    marginTop: '20%',
    height: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#172144',
    marginTop: '30%',
    width: '50%',
    height: 45,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  second: {
    flexDirection: 'row',
    marginStart: '25%',
    marginTop: 30,
  },
  sentModal: {
    marginTop: '15%',
  },
  succesTop: {
    height: 150,
    width: '100%',
  },
  top: {
    marginTop: 20
  },
  transsuccess: {
    fontSize: 29,
    fontWeight: '500',
    marginTop: '35%',
    marginStart: '3%'
  },
});

export default Success;
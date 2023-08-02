import { StyleSheet, Text, View, Pressable, TextInput, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function Fiat() {
    return (
        <SafeAreaView>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={{ marginTop: 15, fontSize: 18, }}>
                            Withdraw funds
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setState({ modalVisible: !modalVisible })}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                    </View>
                    <View style={styles.width}>
                        <Text style={styles.label}>
                            Wallet Address:
                        </Text>
                        <TextInput
                            style={styles.input}
                        />

                        <Text style={styles.label}>
                            Asset to withdraw (Choose from your asset):
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
                            <Button title='Withdraw' color={'white'} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        marginTop: 20,
    },

    buttonOpen: {
        backgroundColor: 'transparent',
    },
    buttonClose: {
        backgroundColor: 'transparent',
        marginStart: '60%',
        marginBottom: 40,
    },

    input: {
        height: 49,
        width: '90%',
        marginBottom: 10,
        marginTop: 15,
        backgroundColor: 'rgba(242, 242, 242, 1)',
        borderRadius: '4px',
    },
    label: {
        marginTop: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalView: {
        marginTop: 20
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
})
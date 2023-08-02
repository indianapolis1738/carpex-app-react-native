import { SafeAreaView, Text, Button, View, StyleSheet, ScrollView, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { AuthContext } from './context'



function SignUp({ navigation }) {



  const [email, onChangeEmail] = React.useState(null);
  const [username, onChangeUsername] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);


  const { SignUp } = React.useContext(AuthContext);


  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={styles.div}>
        <ScrollView>
          <Text style={styles.text}>Welcome to Carp Exchange</Text>
          <Text style={styles.we}>We are happy to have you onboard</Text>
          <View style={styles.wrap}>
            <Text>First Name:</Text>
            <TextInput
              style={styles.input}
            />
            <Text>Last Name:</Text>
            <TextInput
              style={styles.input}
            />
            <Text>Enter e-mail address</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              returnKeyType={'next'}
            />
            <Text>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              value={username}
              textContentType={'username'}
              returnKeyType={'next'}
            />
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              returnKeyType={'next'}
            />
            <Text>Confirm Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              returnKeyType={'done'}
            />
            <View style={styles.butdiv}>
              <Button color={'white'} title='Sign Up' style={styles.button} />
            </View>

          </View>
        </ScrollView>
      </View>
      <Button title='SignIn' onPress={() => SignUp()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  butdiv: {
    backgroundColor: '#172144',
    width: '90%',
    marginTop: '5%',
    height: 50,
    borderRadius: '5%',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
  },
  div: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingTop: '2%',
  },
  dont: {
    color: '#172144',
    fontSize: 18,
    marginTop: '10%',
    paddingLeft: 0,
  },
  input: {
    height: 49,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: '5%',
  },
  signin: {
    flexDirection: 'row'
  },
  text: {
    justifyContent: 'center',
    fontSize: 30,
    width: '100%',
    fontWeight: "bold",
    paddingLeft: '10%',
    paddingTop: '10%',
    color: '#000000',
  },
  we: {
    paddingLeft: '10%',
    paddingTop: '2%',
    color: '#8C8C8C',
  },
  wrap: {
    paddingTop: '10%',
    paddingLeft: '10%',
    width: '100%',
  },
});

export default SignUp
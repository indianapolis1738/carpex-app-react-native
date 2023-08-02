import { Button, Text, SafeAreaView, StyleSheet, View, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { AuthContext } from './context'


function SignIn({ navigation }) {

  const { SignIn } = React.useContext(AuthContext);



  const pressSignup = () => {
    navigation.navigate("SignUp")
  }


  const [email, onChangeEmail] = React.useState(null);

  return (
    <SafeAreaView >
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={styles.div}>
        <Text style={styles.text}>Welcome Back !!</Text>
        <Text style={styles.we}>Continue trading from where you stopped</Text>
        <View style={styles.wrap}>
          <Text>Enter e-mail address</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            returnKeyType={'done'}
          />

          <Text>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            returnKeyType={'done'}

          />
          <Text style={styles.forgot}>Forgot Password?</Text>
          <View style={styles.butdiv}>
            <Button color={'white'} title='Sign In' onPress={() => SignIn()} />
          </View>
        </View>

        <Text onPress={pressSignup} style={styles.dont}>Don’t have an account? Click here </Text>
      </View>
    </SafeAreaView>
  );
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
  div: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingTop: '2%',
  },
  dont: {
    color: '#172144',
    fontSize: '16px',
    marginTop: '10%',
    paddingLeft: '20%',
  },
  forgot: {
    flexDirection: 'row',
    paddingLeft: '53%',
    paddingTop: '5%',
    paddingBottom: '5%',
    fontSize: '16px',
    color: '#172144',
  },
  input: {
    height: 49,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: '4px',
    padding: '5%',
    marginTop: '2%'
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
    paddingTop: '15%',
    paddingLeft: '10%',
    width: '100%',
  },
})

export default SignIn;
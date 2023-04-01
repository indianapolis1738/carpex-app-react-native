import { SafeAreaView, Text,StatusBar, View, StyleSheet, Image, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../screens/context'

const Profile = ({navigation}) => {


  const pressDash = () => {
    navigation.navigate('Dashboards')
  }

  

  const {SignOut} = React.useContext(AuthContext);


  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
          <MaterialIcons name="arrow-back" size={30} color="black" style={{marginTop: 10, }} onPress={pressDash} />
        <View style={{marginStart: 15,}}>
          <Text style={{fontWeight: '800', fontSize: 25,}}>
            Account Details
          </Text>
          <Text style={{fontSize: 17, color: '#8C8C8C', marginTop: 5,}}>
             View all your account information here.
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50, marginStart: 20,}}>
        <TouchableOpacity>
        <Image 
          source={{uri: 'https://lh3.googleusercontent.com/a/AGNmyxYRX-4BlLMfVvFvDtl3kHs70DiJYOt5UWAcyd8=s360',}}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
          }}
        />
        <FontAwesome name="edit" size={24} color="black" style={{marginStart: 60, marginTop: -20}} />
        </TouchableOpacity>
        
        <View style={styles.username} >
          <Text style={{fontSize: 25, fontWeight: '500'}}>
            Dada Iyanuoluwa
          </Text>
          <Text style={{marginTop: 7, fontSize: 18,}}>
            @CarpEx
          </Text>
        </View>
      </View>

      <View style={styles.settingsDiv}>
        <View style={{width: '100%', borderBottomWidth: 2, borderBottomColor: 'rgba(216, 216, 216, 0.63)', marginTop: 25,}}>
          <Text style={styles.settings}>
            Settings
          </Text>
        </View>

        <TouchableOpacity style={styles.settingsRow} >
          <View style={styles.icon}>
            <FontAwesome5 name="user-alt" size={25} color="black" style={styles.iconIcon} />
          </View>
          <View style={styles.info}>
            <Text style={{fontSize: 20, fontWeight: '350'}}>
              Personal Information
            </Text>
            <Text style={{ fontSize: 16, color: 'black'}} >
              @CarpEx
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.settingsRow}>
          <View style={styles.icon}>
            <FontAwesome5 name="user-check" size={25} color="black" style={styles.iconIcon} />
          </View>
          <View style={styles.info}>
            <Text style={{fontSize: 20, fontWeight: '350'}}>
              ID Verification
            </Text>
            <Text style={{ fontSize: 16, color: 'black'}}>
              Verified <EvilIcons name="check" size={24} color="black" />
            </Text>
          </View>
        </View>

        <View style={styles.settingsRow}>
          <View style={styles.icon}>
            <MaterialIcons name="lock" size={25} color="black" style={styles.iconIcon} />
          </View>
          <View style={styles.info}>
            <Text style={{fontSize: 20, fontWeight: '350'}}>
              Privacy and Security
            </Text>
            <Text style={{ fontSize: 16, color: 'black'}}>
              Password, Pin ...
            </Text>
          </View>
        </View>

        <View style={styles.settingsRow}>
          <View style={styles.icon}>
            <Ionicons name="card" size={24} color="black" style={styles.iconIcon} />
          </View>
          <View style={styles.info}>
            <Text style={{fontSize: 20, fontWeight: '350'}}>
              Payment Method
            </Text>
            <Text style={{ fontSize: 16, color: 'black'}}>
              Bank Transfer
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.logout} onPress={() => SignOut()} >
        <Text style={{
          color: 'white',   fontWeight: '500', alignSelf: 'center', marginStart: 20,}}>
          Sign Out  <SimpleLineIcons name="logout" size={20} color="white" />
        </Text>
        
      </Pressable>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create ({
  header: {
    flexDirection: 'row',
    marginStart: 6,
    marginTop: 20,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  iconIcon: {
    marginStart: 12,
  },
  info: {
    marginStart: 30,
    marginTop: 5
  },
  logout: {
    backgroundColor: '#172144',
    width: '30%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  settings: {
    fontSize: 23,
    marginBottom: 10,
  },
  settingsDiv: {
    width: '90%',
    marginStart: '5%',
  },
  settingsRow: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 2, 
    borderBottomColor: 'rgba(216, 216, 216, 0.63)', 
    marginTop: 25,
  },
  username: {
    marginStart: 20,
    marginTop: 10,
  },
})

export default Profile
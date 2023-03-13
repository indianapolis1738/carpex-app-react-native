import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import  SignUp from "./pages/screens/SignUp"
import SignIn from "./pages/screens/SignIn";
import Dashboard from "./pages/screens/Dashboard";
import Wallet from "./pages/screens/Wallet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Market from "./pages/screens/Market";
import Blog from "./pages/screens/Blog";
import Splash from "./pages/screens/Splash";
import { AuthContext } from "./pages/screens/context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from "./pages/screens/Profile";


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const DashStack = createStackNavigator();
const WalletStack = createStackNavigator();
const MarketStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const DashStackScreen = () => (
  <DashStack.Navigator 
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#172144',
  }}
  >
    <DashStack.Screen  name="Dashboard" component={Dashboard}  />
    <DashStack.Screen name="Blog" component={Blog} />
  </DashStack.Navigator>
) 

const WalletStackScreen = () => (
  <WalletStack.Navigator
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#172144',
  }}
  >
    <WalletStack.Screen  name="Wallet" component={Wallet} />
  </WalletStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStackScreen.Navigator>
    <ProfileStack.Screen name='Profile' component={Profile} />
  </ProfileStackScreen.Navigator>
)

const MarketStackScreen = () => (
  <MarketStack.Navigator
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#172144',
  }}
  >
    <MarketStack.Screen  name="Market" component={Market}  />
  </MarketStack.Navigator>
)

export default () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      SignIn: () => {
        setIsLoading(false);
        setUserToken('carp');
      },
      SignUp: () => {
        setIsLoading(false);
        setUserToken('carp');
      },
      SignOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, [])

  

  React.useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 1000)
  }, []);

  if (isLoading) {
    return<Splash />
  }


  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>

      {userToken ? (
        <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#172144',
        }}
      >
        <Tabs.Screen  options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name="Dashboard" component={DashStackScreen} />
        <Tabs.Screen options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
        }} name="Wallet" component={WalletStackScreen} />
        <Tabs.Screen options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bitcoin" color={color} size={size} />
          ),
        }} name="Market" component={MarketStackScreen} />
      </Tabs.Navigator>
      ) : (
      <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      <AuthStack.Screen name="SignIn" component={SignIn} options={{title: "Sign In"}}/>
      <AuthStack.Screen name="SignUp" component={SignUp} options={{title: "Sign Up"}} />
      </AuthStack.Navigator>
      )}
     </NavigationContainer>
     </AuthContext.Provider>
  )
};
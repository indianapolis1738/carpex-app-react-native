import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import 'react-native-gesture-handler';
import calculator from "./pages/screens/calculator";


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const DashStack = createStackNavigator();
const WalletStack = createStackNavigator();
const MarketStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashStackScreen = () => (
  <DashStack.Navigator 
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#172144',
  }}
  >
    <DashStack.Screen  name="Dashboards" component={Dashboard}  />
    <DashStack.Screen name="Blog" component={Blog} />
    <DashStack.Screen name="Profile" component={Profile} />
  </DashStack.Navigator>
) 

const WalletStackScreen = () => (
  <WalletStack.Navigator
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#172144',
  }}
  >
    <WalletStack.Screen  name="Wallets" component={Wallet} />
  </WalletStack.Navigator>
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

const BlogStack = createStackNavigator();


const BlogStackScreen = () => (
  <BlogStack.Navigator>
    <BlogStack.Screen 
      name = 'Blog' component={Blog}
    />
  </BlogStack.Navigator>
)

const CaculatorStack = createStackNavigator();


const CaculatortackScreen = () => (
  <CaculatorStack.Navigator>
    <CaculatorStack.Screen 
      name = 'Calculator' component={calculator}
    />
  </CaculatorStack.Navigator>
)



const TabsScreen = () => (
  <Tabs.Navigator
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#172144',
  }}
>
  <Tabs.Screen  options={{
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="home" color={color} size={30} />
    ),
  }} name="Dashboards" component={DashStackScreen} />
  <Tabs.Screen options={{
    tabBarLabel: 'Wallet',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="wallet" color={color} size={30} />
    ),
  }} name="Wallet" component={WalletStackScreen} />
  <Tabs.Screen options={{
    tabBarLabel: 'Market',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="bitcoin" color={color} size={30} />
    ),
  }} name="Markets" component={MarketStackScreen} />
</Tabs.Navigator>
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
        <Drawer.Navigator 
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen 
           name="Dashboard" 
           component={TabsScreen}
          />
          <Drawer.Screen 
            name="Blogs"
            component={BlogStackScreen}
          />
          <Drawer.Screen 
            name="Calculator"
            component={CaculatortackScreen}
          />
        </Drawer.Navigator>
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
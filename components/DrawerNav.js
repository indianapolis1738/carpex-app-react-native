import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authnav from '../pages/routes/Authnav';
import Blog from '../pages/screens/Blog';

const DrawerNav = () => {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name="Help Center" component={Authnav} />
    <Drawer.Screen name="Article" component={Blog} />
  </Drawer.Navigator>
  )
}

export default DrawerNav
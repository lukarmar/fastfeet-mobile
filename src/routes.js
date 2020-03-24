import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import MyProfile from './pages/Profile';

import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ headerStyle: { backgroundColor: '#7D40E7' } }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={DashboardRoutes}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="format-align-justify" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: 'Meu perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

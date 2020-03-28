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
        style: { paddingTop: 13, height: 70 },
        labelStyle: {
          fontSize: 14,
          marginBottom: 12,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={DashboardRoutes}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={26} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

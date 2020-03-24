import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../pages/Dashboard';
import OrderDetails from '../pages/OrderDetails';
import ConfirmDelivery from '../pages/ConfirmDelivery';
import ViewIssue from '../pages/ViewIssue';
import ReportProblem from '../pages/ReportProblem';

const Stack = createStackNavigator();

export default function DashboardRoutes() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          title: 'Detalhes da encomenda',
          headerStyle: { backgroundColor: '#7D40E7', height: 155 },
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          title: 'Informar problema',
          headerStyle: { backgroundColor: '#7D40E7', height: 155 },
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetails');
              }}
            >
              <Icon name="chevron-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ViewIssue"
        component={ViewIssue}
        options={{
          title: 'Visualizar porblemas',
          headerStyle: { backgroundColor: '#7D40E7', height: 155 },
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetails');
              }}
            >
              <Icon name="chevron-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          title: 'Confirmar entrega',
          headerStyle: { backgroundColor: '#7D40E7', height: 155 },
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetails');
              }}
            >
              <Icon name="chevron-left" size={10} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from './PaymentScreen';
import SuccessScreen from './SuccessScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

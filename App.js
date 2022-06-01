import React from 'react'
import { Provider } from 'react-native-paper'
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
 
  LoginScreen,
  Users,
 
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Patients" component={Users}
         options={{
          headerShown: true,
          headerRight: ({navigation}) => (
            <Button
              onPress={() => {navigation.navigate('LoginScreen')}}
              title="Logout"
              color="#FF0000"
            />
          ),
        }} 
        />
       

        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

import React, { Suspense, lazy } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { HomeScreen, LocationsNearScreen, SettingsScreen } from '../screens'

export type RootStackParamList = {
  Home: undefined
  Settings: undefined
  LocationsNear: undefined
}

const Stack = createNativeStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationsNear"
          component={LocationsNearScreen}
          options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false,
            headerShadowVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

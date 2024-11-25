import React, { Suspense, lazy } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import {
  ChatScreen,
  DefensoriasLocationInfoScreen,
  DocumentsScreen,
  HomeScreen,
  LocationsNearScreen,
  LoginScreen,
  ServedScreen,
} from '../screens'

export type RootStackParamList = {
  Home: undefined
  Served: undefined
  LocationsNear: undefined
  Chat: undefined
  Documents: undefined
  DefensoriasLocationInfo: undefined
  Login: undefined
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
          name="Served"
          component={ServedScreen}
          options={{
            headerTitle: 'Quem pode ser atentido?',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false,
            headerShadowVisible: true,
          }}
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
        <Stack.Screen
          name="Documents"
          component={DocumentsScreen}
          options={{
            headerTitle: 'Documentos Necessários',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false,
            headerShadowVisible: true,
          }}
        />

        <Stack.Screen
          name="DefensoriasLocationInfo"
          component={DefensoriasLocationInfoScreen}
          options={{
            headerTitle: 'Defensorias',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false,
            headerShadowVisible: true,
          }}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerTitle: 'Conversa com Bot',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            // headerBackTitleVisible: false,
            headerShadowVisible: true,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

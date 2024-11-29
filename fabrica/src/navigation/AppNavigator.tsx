import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
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
  MainTabs: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Chat') {
            iconName = 'chatbubbles'
          } else if (route.name === 'Login') {
            iconName = 'log-in'
          } else {
            iconName = 'ellipse'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#006842',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  )
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Served"
          component={ServedScreen}
          options={{
            headerTitle: 'Quem pode ser atendido?',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerBackTitle: 'Voltar',
            headerShadowVisible: true,
          }}
        />

        <Stack.Screen
          name="LocationsNear"
          component={LocationsNearScreen}
          options={{
            headerTitle: '',
            headerBackTitle: 'Voltar',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerShadowVisible: true,
          }}
        />
        <Stack.Screen
          name="Documents"
          component={DocumentsScreen}
          options={{
            headerTitle: 'Documentos Necessários',
            headerBackTitle: 'Voltar',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerShadowVisible: true,
          }}
        />

        <Stack.Screen
          name="DefensoriasLocationInfo"
          component={DefensoriasLocationInfoScreen}
          options={{
            headerTitle: 'Defensorias',
            headerBackTitle: 'Voltar',
            headerStyle: { backgroundColor: '#006842' },
            headerTintColor: '#FFFFFF',
            headerShadowVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

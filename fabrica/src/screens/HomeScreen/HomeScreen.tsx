import React from 'react'
import { StyleSheet, View, Image, Text, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/AppNavigator'
import Logo from '../../components/Logo'
import Card from '../../components/Card'
import { Ionicons } from '@expo/vector-icons'
import Contacts from './components/Contacts'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo widht={200} />
      </View>

      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.msgView}>
            <Text style={styles.msgText}>
              Bem vindo! Selecione uma categoria:
            </Text>
          </View>

          <Card
            title={'Defensorias perto de mim'}
            icon={<Ionicons name="location-outline" size={32} color="black" />}
            destination={'LocationsNear'}
          />

          <Card
            title={'Quem pode ser atendido pela DPDF?'}
            icon={<Ionicons name="people-outline" size={32} color="black" />}
            destination={'Settings'}
          />

          <Card
            title={'Documentação Necessária'}
            icon={
              <Ionicons name="document-text-outline" size={32} color="black" />
            }
            destination={'Settings'}
          />

          <Card
            title={'Documentação Necessária'}
            icon={
              <Ionicons name="document-text-outline" size={32} color="black" />
            }
            destination={'Settings'}
          />

          <Contacts />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#006842',
    paddingTop: 50,
  },
  logoContainer: {},
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  msgText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    padding: 10,
  },
  msgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

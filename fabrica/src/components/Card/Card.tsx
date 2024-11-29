import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/AppNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface CardProps {
  title: string
  icon: React.ReactNode
  destination: keyof RootStackParamList
  style?: object
}

const Card: React.FC<CardProps> = ({ title, icon, destination, style }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handlePress = () => {
    navigation.navigate(destination)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.card, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
})

export default Card

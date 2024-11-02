import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function SettingsScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Home Settings Screen</Text>
      <Button title="Go Back to Home" />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
})

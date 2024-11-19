import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function ChatScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Chat Screen</Text>
      <Button title="Go Back to Home" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ChatScreen

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

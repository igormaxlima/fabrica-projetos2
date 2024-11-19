import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface FocusButtonProps {
  buttonName: string
  onPress: () => void
}

const FocusButton = ({ buttonName, onPress }: FocusButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{buttonName}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
})

export default FocusButton

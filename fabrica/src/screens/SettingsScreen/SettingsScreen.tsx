import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Map from '../../components/Map'
import { MOCK_DEFENSORIAS } from '../../types/defensoriasLocation'

function SettingsScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Map
        initialRegion={MOCK_DEFENSORIAS[0]}
        markers={MOCK_DEFENSORIAS}
        focusButtonName={'Defensoria'}
      />
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

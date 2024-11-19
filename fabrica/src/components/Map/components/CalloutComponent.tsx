import { MarkerData } from '../Map'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface CalloutProps {
  marker: MarkerData
}

const CalloutComponent = ({ marker }: CalloutProps) => {
  return (
    <View style={styles.calloutContainer}>
      <Text style={styles.calloutTitle}>{marker.name}</Text>
      <Text style={styles.calloutAddress}>{marker.address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  calloutContainer: {
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  calloutAddress: {
    fontSize: 14,
    color: '#555',
  },
})

export default CalloutComponent

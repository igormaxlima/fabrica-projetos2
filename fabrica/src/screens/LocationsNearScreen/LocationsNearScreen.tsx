import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Map from '../../components/Map'
import { MOCK_DEFENSORIAS } from '../../types/defensoriasLocation'
import useLocationsNearScreen from './LocationsNearScreen.hook'

function LocationsNearScreen() {
  const { currentLocation, nearestDefensoria } = useLocationsNearScreen()

  if (!currentLocation) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando localização...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Map
        initialRegion={{
          ...currentLocation,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        markers={MOCK_DEFENSORIAS}
        focusButtonName="Minha Localização"
      />

      {nearestDefensoria && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Defensoria mais próxima:</Text>
          <Text style={styles.infoText}>
            {nearestDefensoria.defensoria.name}
          </Text>
          <Text style={styles.infoText}>
            Distância: {nearestDefensoria.distance.toFixed(2)} km
          </Text>
        </View>
      )}
    </View>
  )
}

export default LocationsNearScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006842',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006842',
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 30,
    backgroundColor: '#006842',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff',
  },
})

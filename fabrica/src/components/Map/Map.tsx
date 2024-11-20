import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import { MOCK_DEFENSORIAS } from '../../types/defensoriasLocation'
import FocusButton from './components/FocusButton'
import CalloutComponent from './components/CalloutComponent'

export interface MarkerData {
  name?: string
  address?: string
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

interface MapProps {
  initialRegion: MarkerData
  markers: MarkerData[]
  focusButtonName: string
}

const Map = ({ initialRegion, markers, focusButtonName }: MapProps) => {
  const mapRef = useRef<MapView | null>(null)
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FocusButton onPress={focusMap} buttonName={focusButtonName} />
      ),
    })
  }, [])

  const focusMap = () => {
    // mapRef.current?.animateCamera(
    //   { center: initialRegion, zoom: 10 },
    //   { duration: 3000 }
    // )
    mapRef.current?.animateToRegion(initialRegion, 3000)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
        ref={mapRef}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker}>
            <Callout tooltip>
              <CalloutComponent marker={marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: 500,
  },
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

export default Map

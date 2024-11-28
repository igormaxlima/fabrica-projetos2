import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import FocusButton from './components/FocusButton'
import CalloutComponent from './components/CalloutComponent'
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet'

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
  focusButtonName?: string
}

const Map = ({ initialRegion, markers, focusButtonName }: MapProps) => {
  const mapRef = useRef<MapView | null>(null)
  const navigation = useNavigation()
  const actionSheetRef = useRef<ActionSheetRef>(null)
  const [selectedMarker, setSelectedMarker] = React.useState<MarkerData | null>(
    null
  )

  const openInMaps = (app: 'waze' | 'google') => {
    if (!selectedMarker) return

    const { latitude, longitude } = selectedMarker
    const url =
      app === 'waze'
        ? `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`
        : `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`

    Linking.openURL(url).catch(() =>
      alert(
        `Não foi possível abrir o ${app === 'waze' ? 'Waze' : 'Google Maps'}`
      )
    )
  }

  const handleMarkerPress = (marker: MarkerData) => {
    setSelectedMarker(marker)
    actionSheetRef.current?.show()
  }

  if (focusButtonName) {
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <FocusButton onPress={focusMap} buttonName={focusButtonName} />
        ),
      })
    }, [])
  }

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
          <Marker
            key={index}
            coordinate={marker}
            onPress={() => handleMarkerPress(marker)}
          >
            <Callout tooltip>
              <CalloutComponent marker={marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>

      <ActionSheet ref={actionSheetRef} gestureEnabled>
        <View style={styles.sheetContainer}>
          <Text style={styles.sheetTitle}>Selecione uma ação</Text>
          <TouchableOpacity
            style={styles.sheetButton}
            onPress={() => {
              openInMaps('waze')
              actionSheetRef.current?.hide()
            }}
          >
            <Text style={styles.sheetButtonText}>Abrir no Waze</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sheetButton}
            onPress={() => {
              openInMaps('google')
              actionSheetRef.current?.hide()
            }}
          >
            <Text style={styles.sheetButtonText}>Abrir no Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sheetCancelButton}
            onPress={() => actionSheetRef.current?.hide()}
          >
            <Text style={styles.sheetCancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
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
  sheetContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sheetButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sheetButtonText: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
  sheetCancelButton: {
    paddingVertical: 15,
    marginTop: 10,
  },
  sheetCancelButtonText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
})

export default Map

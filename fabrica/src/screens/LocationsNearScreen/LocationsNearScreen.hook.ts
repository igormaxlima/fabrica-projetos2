import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import * as Location from 'expo-location'
import { MOCK_DEFENSORIAS, Defensorias } from '../../types/defensoriasLocation'

function useLocationsNearScreen() {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const [nearestDefensoria, setNearestDefensoria] = useState<{
    defensoria: Defensorias
    distance: number
  } | null>(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Precisamos de acesso à sua localização para mostrar defensorias próximas.'
        )
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords
      setCurrentLocation({ latitude, longitude })
      calculateNearestDefensoria(latitude, longitude)
    })()
  }, [])

  const calculateNearestDefensoria = (latitude: number, longitude: number) => {
    let closest = null
    let minDistance = Infinity

    MOCK_DEFENSORIAS.forEach((defensoria) => {
      const distance = haversine(
        latitude,
        longitude,
        defensoria.latitude,
        defensoria.longitude
      )
      if (distance < minDistance) {
        minDistance = distance
        closest = defensoria
      }
    })

    if (closest) {
      setNearestDefensoria({ defensoria: closest, distance: minDistance })
    }
  }

  const haversine = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const toRad = (angle: number) => (angle * Math.PI) / 180
    const R = 6371 
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c 
  }

  return { currentLocation, nearestDefensoria }
}

export default useLocationsNearScreen

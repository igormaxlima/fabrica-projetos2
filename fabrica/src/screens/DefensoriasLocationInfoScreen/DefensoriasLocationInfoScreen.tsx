import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Defensorias, MOCK_DEFENSORIAS } from '../../types/defensoriasLocation'
import Map from '../../components/Map'
import { MarkerData } from '../../components/Map/Map'
import GeralInformation from './components/GeralInformation'

function DefensoriasLocationInfoScreen() {
  const [isModalVisible, setModalVisible] = useState(false)
  const [selectedDefensoria, setSelectedDefensoria] =
    useState<Defensorias | null>(null)
  const [activeTab, setActiveTab] = useState<'informations' | 'map'>(
    'informations'
  )

  const openModal = (defensoria: Defensorias) => {
    setSelectedDefensoria(defensoria)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedDefensoria(null)
    setActiveTab('informations')
  }

  const renderDefensoriaCard = ({ item }: { item: Defensorias }) => {
    const formattedName = item.name.replace('Defensoria Pública do DF - ', '')

    return (
      <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
        <Text style={styles.cardTitle}>{formattedName}</Text>
        <Text style={styles.cardSubtitle}>{item.address}</Text>
      </TouchableOpacity>
    )
  }

  const renderContent = () => {
    if (activeTab === 'informations' && selectedDefensoria) {
      return <GeralInformation defensoria={selectedDefensoria} />
    } else if (activeTab === 'map') {
      const initialRegion: MarkerData = {
        latitude: selectedDefensoria?.latitude ?? 0,
        longitude: selectedDefensoria?.longitude ?? 0,
        latitudeDelta: 0.01111,
        longitudeDelta: 0.0421,
      }

      const markers: MarkerData[] = [
        {
          latitude: selectedDefensoria?.latitude ?? 0,
          longitude: selectedDefensoria?.longitude ?? 0,
          name: selectedDefensoria?.name ?? '',
          address: selectedDefensoria?.address ?? '',
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      ]

      return <Map initialRegion={initialRegion} markers={markers} />
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/defensorias.png')}
        style={styles.image}
      />

      <Text style={styles.infoTextTitle}>
        Núcleos de Assistência Jurídica regionais
      </Text>

      <Text style={styles.infoDescription}>
        Clique em qual núcleo deseja receber mais informações:
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {MOCK_DEFENSORIAS.map((defensoria, index) => (
          <View key={index} style={styles.cardContainer}>
            {renderDefensoriaCard({ item: defensoria })}
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Ionicons name="close" size={30} color="#fff" />
        </TouchableOpacity>

        <View style={styles.modalContainer}>
          {selectedDefensoria && (
            <>
              <Text style={styles.modalTitle}>{selectedDefensoria.name}</Text>
              <View style={styles.tabsContainer}>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === 'informations' && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveTab('informations')}
                >
                  <Text style={styles.tabText}>Geral</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === 'map' && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveTab('map')}
                >
                  <Text style={styles.tabText}>Mapa</Text>
                </TouchableOpacity>
              </View>
              {renderContent()}
            </>
          )}

          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default DefensoriasLocationInfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  infoTextTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '800',
    paddingHorizontal: 5,
    paddingBottom: 2,
  },
  infoDescription: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    paddingBottom: 15,
  },
  image: {
    width: '100%',
    height: 165,
    resizeMode: 'contain',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  cardContainer: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#006842',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#d9d9d9',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#006842',
    paddingTop: 100,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 20,
  },
})

import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native'
import { Servicos } from '../../../types/defensoriasLocation'
import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'

interface ServiceItemProps {
  item: Servicos
}

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [checkedDocuments, setCheckedDocuments] = useState<boolean[]>(
    new Array(item.documents.length).fill(false)
  )

  const toggleModal = () => setIsModalVisible(!isModalVisible)

  const toggleCheckbox = (index: number) => {
    setCheckedDocuments((prev) => {
      const updated = [...prev]
      updated[index] = !updated[index]
      return updated
    })
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.serviceContainer}>
        <Text style={styles.serviceTitle}>{item.name}</Text>
        <Ionicons name="chevron-down" size={16} color="#555" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{item.name}</Text>
            <View style={styles.titleWithIcon}>
              <Ionicons name="document-text-outline" size={20} color="#555" />
              <Text style={styles.documentTitle}>Documentos necessários:</Text>
            </View>

            <FlatList
              data={item.documents}
              keyExtractor={(doc, index) => `${item.name}-${index}`}
              renderItem={({ item, index }) => (
                <View style={styles.documentItem}>
                  <Checkbox
                    value={checkedDocuments[index]}
                    onValueChange={() => toggleCheckbox(index)}
                    color={checkedDocuments[index] ? '#006842' : undefined}
                  />
                  <Text
                    style={[
                      styles.documentText,
                      checkedDocuments[index] && styles.checkedText,
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              )}
            />

            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  serviceContainer: {
    padding: 10,
    backgroundColor: '#f3f6f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 5,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  documentText: {
    fontSize: 18,
    color: '#555',
    marginLeft: 10,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#006842',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default ServiceItem

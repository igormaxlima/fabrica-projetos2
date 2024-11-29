import React from 'react'
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import useDocumentsScreen from './DocumentsScreen.hook'
import { Servicos } from '../../types/defensoriasLocation'
import EmptyView from './components/EmptyView'
import ServiceItem from './components/ServiceItem'

const DocumentsScreen: React.FC = () => {
  const { searchText, setSearchText, filteredServices } = useDocumentsScreen()

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquise por serviço"
        value={searchText}
        onChangeText={setSearchText}
      />

      {filteredServices.length === 0 ? (
        <EmptyView />
      ) : (
        <FlatList
          data={filteredServices}
          keyExtractor={(item) => item.name}
          renderItem={({ item }: { item: Servicos }) => (
            <ServiceItem item={item} />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#006842',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 16,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  serviceContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f3f6f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  documentItem: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  emptyText: {
    fontSize: 20,
    color: '#f3f6f9',
    paddingTop: 15,
    fontWeight: '600',
  },
})

export default DocumentsScreen

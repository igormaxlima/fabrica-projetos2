import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const EmptyView: React.FC = () => {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons name="search-outline" size={50} color="#f3f6f9" />
      <Text style={styles.emptyText}>Nenhum serviço encontrado</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default EmptyView

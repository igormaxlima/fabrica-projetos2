import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function Contacts() {
  const handlePress = (type: string, value: string) => {
    if (type === 'phone') {
      Linking.openURL(`tel:${value}`)
    } else if (type === 'whatsapp') {
      Linking.openURL(`https://wa.me/${value}`)
    } else if (type === 'instagram') {
      Linking.openURL(`https://instagram.com/${value}`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('phone', '129')}
        >
          <Ionicons name="call-outline" size={32} color="#fff" />
          <Text style={styles.label}>Telefone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('instagram', 'defensoriadf')}
        >
          <Ionicons name="logo-instagram" size={32} color="#fff" />
          <Text style={styles.label}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('whatsapp', '5561993590015')}
        >
          <Ionicons name="logo-whatsapp" size={32} color="#fff" />
          <Text style={styles.label}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#006842',
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    backgroundColor: '#00A569',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
})

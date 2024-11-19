import React from 'react'
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native'
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

      <TouchableOpacity
        style={styles.contactRow}
        onPress={() => handlePress('phone', '129')}
      >
        <Ionicons name="call-outline" size={24} color="#006842" />
        <Text style={styles.contactText}>Telefone: 129</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contactRow}
        onPress={() => handlePress('instagram', 'defensoriadf')}
      >
        <Ionicons name="logo-instagram" size={24} color="#006842" />
        <Text style={styles.contactText}>Instagram: @defensoriadf</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contactRow}
        onPress={() => handlePress('whatsapp', '5561993590015')}
      >
        <Ionicons name="logo-whatsapp" size={24} color="#006842" />
        <Text style={styles.contactText}>WhatsApp: (061) 99359-0015</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006842',
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
})

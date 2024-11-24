import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Defensorias } from '../../../types/defensoriasLocation'

interface GeralInformationProps {
  defensoria: Defensorias
}

function GeralInformation({ defensoria }: GeralInformationProps) {
  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`)
  }

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`)
  }

  return (
    <View style={styles.contentBox}>
      <Text style={styles.modalSubTitle}>ATENDIMENTOS PRESENCIAIS:</Text>
      <Text style={styles.modalText}>
        <Text style={styles.boldText}>Endereço: </Text>
        {defensoria.address}
      </Text>
      <Text style={styles.modalText}>
        <Text style={styles.boldText}>Horário de Funcionamento: </Text>
        {defensoria.hour}
      </Text>

      <Text style={styles.modalSubTitle}>ATENDIMENTOS REMOTOS:</Text>
      <Text style={styles.modalText}>
        <Text style={styles.boldText}>Telefone: </Text>
        {defensoria.phone}
      </Text>
      <Text style={styles.modalText}>
        <Text style={styles.boldText}>Horário de Atendimento: </Text>
        {defensoria.openingHour}
      </Text>

      {defensoria.administrativeSupport && (
        <Text style={styles.modalText}>
          <Text style={styles.boldText}>Atendimento administrativo: </Text>
          {defensoria.administrativeSupport}
        </Text>
      )}

      {defensoria.email && (
        <Text style={styles.modalText}>
          <Text style={styles.boldText}>Email: </Text>
          <Text
            style={styles.linkText}
            onPress={() => handleEmailPress(defensoria.email ?? '')}
          >
            {defensoria.email}
          </Text>
        </Text>
      )}

      <Text style={styles.modalSubTitle}>COORDENAÇÃO:</Text>
      <Text style={styles.modalText}>{defensoria.coordenator}</Text>
    </View>
  )
}

export default GeralInformation

const styles = StyleSheet.create({
  contentBox: {
    backgroundColor: '#f3f6f9',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '75%',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  linkText: {
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
})

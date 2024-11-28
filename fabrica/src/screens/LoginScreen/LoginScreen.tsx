import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

function LoginScreen() {
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Email:', email)
    console.log('CPF:', cpf)
    console.log('Senha:', password)
  }

  const handleGovBrLogin = () => {
    const govBrUrl = 'https://sso.acesso.gov.br/login'
    Linking.openURL(govBrUrl).catch((err) =>
      console.error('Failed to open URL:', err)
    )
  }

  const isFormValid = () => {
    return email !== '' && cpf !== '' && password !== ''
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={['#00A569', '#006842']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Image
              source={require('../../../assets/images/dpu-logo.png')}
              style={styles.logo}
            />

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="pessoa@gmail.com"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>CPF:</Text>
              <TextInput
                style={styles.input}
                placeholder="000.000.000-00"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha..."
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: isFormValid() ? '#326266' : '#cccccc' },
              ]}
              onPress={handleLogin}
              disabled={!isFormValid()}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: isFormValid() ? '#fff' : '#666666' },
                ]}
              >
                LOGIN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGovBrLogin}>
              <Text style={styles.linkText}>Entrar com gov.br</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    height: 75,
    marginBottom: 80,
  },
  inputGroup: {
    width: '90%',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
})

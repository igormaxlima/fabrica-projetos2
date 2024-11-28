import React, { useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import useChatScreen from './ChatScreen.hook'
import { Ionicons } from '@expo/vector-icons'

const ChatScreen: React.FC = () => {
  const { messages, sendMessage } = useChatScreen()
  const scrollViewRef = useRef<ScrollView>(null)

  const options: string[] = [
    'Quero iniciar um processo judicial',
    'Já possuo processo judicial',
    'Tenho dúvidas sobre serviços da DPDF',
    'Sou vítima de violência doméstica',
    'Quero registrar um elogio ou uma reclamação',
  ]

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
  }, [messages])

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}
      >
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              msg.sender === 'bot'
                ? styles.botMessageContainer
                : styles.userMessageContainer,
            ]}
          >
            {msg.sender === 'bot' && (
              <Ionicons
                name="logo-reddit"
                size={24}
                color="#007AFF"
                style={styles.botIcon}
              />
            )}
            <View
              style={[
                styles.messageBubble,
                msg.sender === 'bot'
                  ? styles.botMessageBubble
                  : styles.userMessageBubble,
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => sendMessage(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  chatContainer: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  chatContent: {
    paddingVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row', // Organiza ícone e a bubble
    alignItems: 'flex-end', // Alinha ícone e bubble no fundo
    marginVertical: 5,
  },
  botMessageContainer: {
    justifyContent: 'flex-start', // Alinha mensagens do bot à esquerda
  },
  userMessageContainer: {
    justifyContent: 'flex-end', // Alinha mensagens do usuário à direita
  },
  messageBubble: {
    // minWidth: '80%', // Define a largura máxima da bubble
    // width: 'auto', // Garantir que a largura do texto não ultrapasse o limite
    borderRadius: 10,
    padding: 10,
    marginLeft: 25,
    // minHeight: 60, // Garante que a altura da bubble não seja muito pequena
  },
  botMessageBubble: {
    backgroundColor: '#e1f5fe',
    flexDirection: 'row',
  },
  userMessageBubble: {
    backgroundColor: '#cdefd1',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap', // Permite que o texto quebre a linha se for muito longo
    // maxWidth: '80%', // Limita a largura do texto
  },
  botIcon: {
    position: 'absolute',
    bottom: -10, // Fica fora da bubble, alinhado ao fundo
    left: 0, // Alinha à esquerda da bubble
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: '#fff',
  },
  optionButton: {
    backgroundColor: '#006842',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default ChatScreen

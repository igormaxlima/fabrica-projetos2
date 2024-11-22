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
    'Quero atendimento humano',
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
              styles.messageBubble,
              msg.sender === 'bot' ? styles.botMessage : styles.userMessage,
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
            <Text style={styles.messageText}>{msg.text}</Text>
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
    paddingHorizontal: 10,
  },
  chatContent: {
    paddingVertical: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1f5fe',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1c4e9',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  botIcon: {
    marginRight: 10,
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

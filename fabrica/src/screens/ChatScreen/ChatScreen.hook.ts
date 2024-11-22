import { useState } from 'react'

type Message = {
  text: string
  sender: 'bot' | 'user'
}

const MOCK_RESPONSES: Record<string, string> = {
  'Quero iniciar um processo judicial': 'Por favor, acesse o portal para iniciar seu processo judicial.',
  'Já possuo processo judicial': 'Você pode acompanhar seu processo judicial no site oficial ou entrar em contato com a Defensoria Pública.',
  'Tenho dúvidas sobre serviços da DPDF': 'Acesse nossa seção de FAQ ou fale com um de nossos atendentes para mais informações.',
  'Sou vítima de violência doméstica': 'Recomendamos que você procure ajuda imediatamente. Ligue para 180 ou acione a polícia local.',
  'Quero registrar um elogio ou uma reclamação': 'Acesse a ouvidoria em nosso portal para registrar sua manifestação.',
  'Quero atendimento humano': 'Conectando você a um atendente humano. Por favor, aguarde...',
}

function useChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Olá! Como posso ajudar você hoje?', sender: 'bot' },
  ])

  const sendMessage = (message: string) => {
    setTimeout(() => { 
      setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: 'user' },
      { text: MOCK_RESPONSES[message] || 'Desculpe, não entendi sua solicitação.', sender: 'bot' },
    ])
    }, 100)
  }

  return {
    messages,
    sendMessage,
  }
}

export default useChatScreen

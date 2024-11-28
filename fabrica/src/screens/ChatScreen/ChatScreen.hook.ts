import { useState } from 'react'

type Message = {
  text: string
  sender: 'bot' | 'user'
}

const MOCK_RESPONSES: Record<string, string> = {
  'Quero iniciar um processo judicial': `Os serviços da Defensoria Pública são divididos em três principais etapas:

A primeira etapa é o contato do assistido com a Defensoria Pública do Distrito Federal por meio do CRC ou, ainda, presencialmente, a partir solicitação de senha por parte do interessado, com identificação de eventual situação que gere atendimento preferencial.
A segunda etapa é o atendimento presencial, com identificação do atendente.
– Nessa etapa, será verificado se a causa é da atribuição da Defensoria Pública do Distrito Federal.

– Em seguida, haverá a análise da documentação pessoal do usuário.

– Depois, haverá a análise da vulnerabilidade econômica, social ou jurídica, para saber se o interessado pode ser usuário dos serviços da DPDF.

Na terceira etapa, haverá a prestação da assistência jurídica solicitada pelo usuário do serviço, de acordo com as circunstâncias de cada caso.`,
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

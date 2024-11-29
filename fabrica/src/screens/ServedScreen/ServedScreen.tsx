import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question:
      '1 – Os serviços de assistência jurídica gratuita da DPDF são devidos a todas as pessoas?',
    answer: `Não. De acordo com a Constituição Brasileira, esses serviços se destinam apenas às pessoas necessitadas...
      É considerada necessitada a pessoa com especial dificuldade de acesso ao sistema de justiça devido a obstáculos econômicos,
      culturais ou circunstanciais de contratar advogado(a).`,
  },
  {
    question:
      '2 – Quem pode ser considerado necessitado para fins de recebimento da assistência da Defensoria Pública do DF?',
    answer: `São consideradas juridicamente necessitadas as pessoas que precisam da proteção do Judiciário no caso de risco imediato de vida ou de liberdade...

São consideradas economicamente necessitadas as pessoas com renda familiar inferior a 05 salários mínimos (R$6.060,00) por mês.`,
  },
  {
    question:
      '3 – A pessoa jurídica pode ser assistida pela Defensoria Pública?',
    answer: `Sim, mas somente quando comprovar que seus rendimentos e seu patrimônio são insuficientes para arcar com as custas processuais
      e os honorários advocatícios.`,
  },
  {
    question: '4 – Quais as consequências de uma declaração falsa?',
    answer: `⚠️ A pessoa que prestar declaração falsa poderá ser denunciada, processada e condenada nas penas do crime do artigo 299,
      do Código Penal (FALSIDADE IDEOLÓGICA).`,
  },
  {
    question:
      '5 – É preciso pagar alguma coisa pelos serviços da Defensoria Pública?',
    answer: `Em regra, não. Mas, se o judiciário se convencer de que você tem condições de contratar advogado particular, poderá haver arbitramento de um valor.`,
  },
  {
    question:
      '6 – O(a) Defensor(a) Público(a) responsável pelo meu caso entende que eu não me enquadro na condição de usuário(a)...',
    answer: `Se o(a) Defensor(a) Público(a) responsável pelo seu caso indeferir o seu requerimento de assistência jurídica,
      você tem direito a recorrer da decisão.`,
  },
  {
    question: '7 – A DPDF atua em casos de outros Estados?',
    answer: `Devido a um Acordo de Cooperação Técnica, a DPDF pode atender pessoas residentes no DF que pretendam ajuizar processos
      em outro Estado, desde que atendam às condições.`,
  },
  {
    question: '8 – A DPDF atende pessoas residentes em outros Estados?',
    answer: `Em regra, não. Exceto se o processo já tramita ou deva, necessariamente, tramitar no Distrito Federal.`,
  },
]

const ServedScreen: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index)
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes - DPDF</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity
            onPress={() => toggleExpand(index)}
            style={styles.questionContainer}
          >
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {expandedIndex === index && (
            <Text style={styles.answer}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

export default ServedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: '700',
    color: '#006842',
  },
  answer: {
    marginTop: 8,
    fontSize: 16,
    color: '#555',
    lineHeight: 20,
  },
})

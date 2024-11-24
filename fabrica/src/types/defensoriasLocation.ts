export interface Servicos { 
  name: string;
  documents: string[];
}

export interface Defensorias { 
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  hour: string;
  phone: string;
  openingHour: string;
  administrativeSupport?: string;
  email?: string;
  coordenator: string;
  services?: Servicos[];
}

export const MOCK_DEFENSORIAS: Defensorias[] = [
  {
    name : "Defensoria Pública do DF - Famílias de Brasília",
    address : "Fórum José Júlio Leal Fagundes, Setor de Múltiplas Atividades Sul, Trecho 3, Lote 4/6, Bloco 5 — Térreo",
    latitude : -15.830185030586302,
    longitude : -47.944265890776606,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Divórcio",
        documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"]
      },
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      },
      {
        name: "Ação de Guarda",
        documents: ["Certidão de nascimento do filho", "Comprovante de residência", "Documentos pessoais dos pais"]
      },
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    administrativeSupport: "(61) 2196-4466",
    coordenator: "Defensor Público Sérgio Murillo Freitas de Paula",
  },
  {
    name : "Defensoria Pública do DF - Recanto das Emas",
    address : "Fórum do Recanto das Emas, Quadra 2, Conjunto 1, Lote 3, Setor Urbano — Recanto das Emas",
    latitude : -15.90744095667559,
    longitude : -48.073708604265434,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Divórcio",
        documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"]
      },
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 13h às 18h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    administrativeSupport: "(61) 2196-4470",
    email: "najrecantodasemas@defensoria.df.gov.br",
    coordenator: "Defensor Público Daniel Mesquita dos Santos",
  },
  {
    name : "Defensoria Pública do DF - Samambaia",
    address : "Fórum de Samambaia, Centro Urbano, Quadra 302 — Samambaia",
    latitude : -15.882271696624654,
    longitude : -48.08439713140628,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Guarda",
        documents: ["Certidão de nascimento do filho", "Comprovante de residência", "Documentos pessoais dos pais"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 13h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    email: "najsamambaia@defensoria.df.gov.br",
    coordenator: "Defensora Pública Karen Bezerra Rocha de Aguiar",
  },
  {
    name : "Defensoria Pública do DF - Águas Claras & Vicente Pires",
    address : "Fórum de Águas Claras, Quadra 202, Lote 01 — Águas Claras",
    latitude : -15.83909359515199,
    longitude : -48.013082234102065,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 13h às 18h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    administrativeSupport: "(61) 2196-4475 (apenas ligações telefônicas)",
    email: "najaguasclaras@defensoria.df.gov.br",
    coordenator: "Defensor Público Renê Edney Soares Loureiro",
  },
  {
    name : "Defensoria Pública do DF - Taguatinga",
    address : "CNB 03, Lote 07, Setor Comercial Norte — Taguatinga",
    latitude : -15.829515424950042,
    longitude : -48.058663377793025,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 7h30 às 12h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    email: "najtaguatinga@defensoria.df.gov.br",
    coordenator: "Defensor Público Henrique Silva Marques",
  },
  {
    name : "Defensoria Pública do DF - Paranoá e Itapoã",
    address : "Fórum Desembargadora Maria Aparecida Fernandes da Silva (Fórum do Itapoã) — Núcleo Rural de Sobradinho – Lote 10 – Itapoã/DF",
    latitude : -15.73810933489862,
    longitude : -47.76700079553653,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Divórcio",
        documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 18h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    email: "najitapoavd@gmail.com",
    administrativeSupport: "(61) 2196-4471",
    coordenator: "Defensor Público Leonardo Corrêa dos Santos",
  },
  {
    name : "Defensoria Pública do DF - Riacho Fundo",
    address : "Fórum do Riacho Fundo — QS 02, Lote A, 1º andar, Salas T-10, T-20, T-90 e T-85 — Riacho Fundo I",
    latitude : -15.882049553900941,
    longitude : -48.010879862218715,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    email: "najriachofundo1@gmail.com",
    administrativeSupport: "(61) 2196-4596",
    coordenator: "Defensora Pública Lídia Leite Aragão Marangon",
  },
	{
    name: "Defensoria Pública do DF - Juizados Especiais de Brasília",
    address: "Fórum Desembargador José Júlio Leal Fagundes, Setor de Múltiplas Atividades SMAS Sul, Trecho 3, Lotes 4/6, Bloco 4 — Brasília",
    latitude: -15.830178650625104,
    longitude: -47.944276619613,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Violência Doméstica",
        documents: ["Documento pessoal do réu", "Registro da ocorrência", "Provas relacionadas"]
      },
      {
        name: "Ação Cívil Pública",
        documents: ["Documento do autor", "Sentença anterior", "Provas anexas"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 19h (dias úteis).",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 18h (dias úteis)",
    email: "najjuizad@defensoria.df.gov.br",
    coordenator: "Defensora Pública Patrícia Albuquerque Tavares",
  },
  {
    name: "Defensoria Pública do DF - Brazlândia",
    address: "Fórum de Brazlândia, AE 04, Rua 10, Setor Tradicional — Brazlândia",
    latitude: -15.680741014472282,
    longitude: -48.20401910612609,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Defesa Criminal",
        documents: ["Documento pessoal", "Relatório do caso", "Provas anexas"]
      },
      {
        name: "Ação Cívil Pública",
        documents: ["Comprovante de residência", "Documentos relacionados ao caso"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 13h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "e segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    administrativeSupport: "(61) 2196-4444",
    email: "najbrazlandia@defensoria.df.gov.br",
    coordenator: "Defensor Público Thiago Ribeiro Deienno",
  },
  {
    name: "Defensoria Pública do DF - Gama",
    address: "Fórum do Gama, Quadra 01, AE 01, Setor Norte — Gama",
    latitude: -16.009224450975054,
    longitude: -48.0619795215544,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Usucapião",
        documents: ["Certidão de nascimento", "Comprovante de residência", "Documentos pessoais"]
      },
      {
        name: "Defesa Criminal",
        documents: ["Documento pessoal", "Relatório do caso", "Provas anexas"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 19h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    coordenator: "Defensor Público Roberto Oliveira Coimbra",
  },
  {
    name: "Defensoria Pública do DF - Câmara Legislativa do DF",
    address: "Sede da Câmara Legislativa, Praça Municipal nº 05, Quadra 2, Térreo inferior — Brasília",
    latitude: -15.787075322998264,
    longitude: -47.911219348456136,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Usucapião",
        documents: ["Documento pessoal", "Requerimento formal", "Documentos anexos"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 18h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    administrativeSupport: "(61) 3348-8769",
    coordenator: "Defensor Público Rodrigo Duzsinski",
  },
  {
    name: "Defensoria Pública do DF - São Sebastião",
    address: "Avenida das Paineiras, EQ 3/5, Edifício Jardim Imperial, Bloco B, 2º andar, salas 209 a 218 — Jardim Botânico",
    latitude: -15.884078272747242,
    longitude: -47.81530663748928,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Defesa Criminal",
        documents: ["Certidão de nascimento", "Comprovante de residência", "Documentos pessoais"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 13h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "e segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    email: "najsaosebastiao@defensoria.df.gov.br",
    coordenator: "Defensora Pública Keity Satiko F. M. Freire",
  },
  {
    name: "Defensoria Pública do DF - Sobradinho",
    address: "Quadra 03, Área Especial 05, Salas 101 a 109 e 139 a 140 (prédio da Academia Envolve)",
    latitude: -15.654995052497357,
    longitude: -47.80960744757865,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Defesa Criminal",
        documents: ["Documento pessoal", "Relatório do caso", "Provas anexas"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 12h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "e segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    email: "najsaosebastiao@defensoria.df.gov.br",
    coordenator: "Defensor Público Vinícius Fernando dos Reis Santos",
  },
	{
    name: "Defensoria Pública do DF - Iniciais de Brasília",
    address: "SGAN 909, Módulo D/E, Bloco C, Edifício Juiz de Direito Josué Ribeiro de Sousa — Asa Norte",
    latitude: -15.762700610243105,
    longitude: -47.895757775432685,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Divórcio",
        documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"]
      },
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 13h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 18h (dias úteis)",
    coordenator: "Defensor Público Márcio Del Fiore",
  },
  {
    name: "Defensoria Pública do DF - Ceilândia",
    address: "Fórum de Ceilândia, AE 01, QNM 11 — Ceilândia",
    latitude: -15.818618020000462,
    longitude: -48.102659239849544,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Guarda",
        documents: ["Certidão de nascimento do filho", "Comprovante de residência", "Documentos pessoais dos pais"]
      },
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h00 às 17h00 (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 18h (dias úteis)",
    administrativeSupport: "(61) 2196-4452",
    email: "najceilandia@defensoria.df.gov.br",
    coordenator: "Defensora Pública Andreia Susi Leardini",
  },
  {
    name: "Defensoria Pública do DF - Guará",
    address: "Fórum Desembargadora Maria Thereza Andrade Braga Haynes, QE 25, Conjunto 02, Lotes 02/03, 1º pavimento, Sala T10 — Guará",
    latitude: -15.82483967976197,
    longitude: -47.973316801667785,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Divórcio",
        documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"]
      },
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 18h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    coordenator: "Defensora Pública Valdileuza Campelo Pinheiro",
  },
  {
    name: "Defensoria Pública do DF - Brasília (Cível e Criminal)",
    address: "Praça Municipal, Lote 01, Palácio da Justiça — TJDFT, Bloco B, Anexo 2, Ala A, 2º andar",
    latitude: -15.796777716323483,
    longitude: -47.86590639770729,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      },
      {
        name: "Ação de Guarda",
        documents: ["Certidão de nascimento do filho", "Comprovante de residência", "Documentos pessoais dos pais"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 18h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    administrativeSupport: "(61) 2196-4605",
    email: "najbrasilia@defensoria.df.gov.br",
    coordenator: "Defensora Pública Cláudia Ribeiro Galdino Navarro",
  },
  {
    name: "Defensoria Pública do DF - Planaltina",
    address: "Quadra 04, Conjunto A, Lote 60, SRL, 1º andar — Planaltina",
    latitude: -15.708717220002535,
    longitude: -47.91437480469943,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      },
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 8h às 13h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    administrativeSupport: "(61) 2169-4534",
    email: "najplanaltina@defensoria.df.gov.br",
    coordenator: "Defensor Público Dorcas Fonseca de Carvalho Guimarães",
  },
  {
    name: "Defensoria Pública do DF - Bandeirante",
    address: "Fórum do Núcleo Bandeirante, Avenida Contorno, Área Especial 13, Lote 14 — Núcleo Bandeirante",
    latitude: -15.868882804539233,
    longitude: -47.96086891961192,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Ação de Divórcio",
        documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"]
      },
      {
        name: "Ação de Guarda",
        documents: ["Certidão de nascimento do filho", "Comprovante de residência", "Documentos pessoais dos pais"]
      }
    ],
    hour: "de segunda a sexta-feira, das 12h às 19h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    administrativeSupport: "(61) 2196-4475 (apenas ligações telefônicas)",
    email: "najaguasclaras@defensoria.df.gov.br",
    coordenator: "Defensor Público Guilherme Magalhães Coutinho",
  },
  {
    name: "Defensoria Pública do DF - Santa Maria",
    address: "Fórum de Santa Maria, Avenida Alagados, QR 211, Lote 01, Conjunto A — Santa Maria",
    latitude: -16.01475555973505,
    longitude: -48.01295912980284,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    services: [
      {
        name: "Pedido de Tutela",
        documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"]
      },
      {
        name: "Ação de Alimentos",
        documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"]
      }
    ],
    hour: "de segunda a sexta-feira, das 7h às 12h (dias úteis)",
    phone: "129 ou (61) 3465-8200",
    openingHour: "de segunda a sexta-feira, das 9h às 12h25 e das 13h15 às 16h55 (dias úteis)",
    administrativeSupport: "(61) 2196-4547",
    coordenator: "Defensor Público Luiz Marcelo Dias Martins",
  }
]

export const MOCK_SERVICES: Servicos[] = [
  {
    name: "Ação de Divórcio",
    documents: ["Certidão de casamento", "Documentos pessoais do cônjuge", "Comprovante de residência"],
  },
  {
    name: "Ação de Alimentos",
    documents: ["Certidão de nascimento do filho", "Comprovante de rendimentos do alimentante", "Comprovante de residência"],
  },
  {
    name: "Ação de Guarda",
    documents: ["Certidão de nascimento do filho", "Comprovante de residência", "Documentos pessoais dos pais"],
  },
  {
    name: "Pedido de Tutela",
    documents: ["Documentos pessoais do requerente", "Relatório médico", "Comprovante de residência"],
  },
  {
    name: "Violência Doméstica",
    documents: ["Documento pessoal do réu", "Registro da ocorrência", "Provas relacionadas"],
  },
  {
    name: "Ação Cívil Pública",
    documents: ["Documento do autor", "Sentença anterior", "Provas anexas"],
  },
  {
    name: "Defesa Criminal",
    documents: ["Documento pessoal", "Relatório do caso", "Provas anexas"],
  },
  {
    name: "Ação de Usucapião",
    documents: ["Certidão de nascimento", "Comprovante de residência", "Documentos pessoais"],
  },

];
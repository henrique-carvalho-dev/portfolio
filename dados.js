/* Conteúdo do portfólio. Para trocar uma imagem: coloque o arquivo em img/ e preencha "img".
   Peça sem "img" aparece como espaço reservado ("arte em produção"). */
window.PORTFOLIO = {
  behance: 'https://www.behance.net/henriqucarvalh48', // perfil no Behance (3 projetos publicados em 14/11/2026)
  contato: {
    email: 'henrique.krvalho@gmail.com',
    whatsapp: '5585987494424',
    linkedin: 'https://www.linkedin.com/in/henrique-carvalho-201a2a237'
  },

  // Os 3 key visuals. Cada um tem uma peça-chave e 3 desdobramentos.
  keyVisuals: [
    {
      id: 'campanha',
      numero: '01',
      titulo: 'Campanha política',
      resumo: 'Uma candidatura do conceito à rua: o key visual define cor, tipografia e tom, e se desdobra nas peças que o eleitor pega na mão.',
      chave: { titulo: 'Key visual: Marina Duarte, vereadora (candidata fictícia)', img: 'img/kit/kv1-chave.jpg' },
      pecas: [
        { titulo: 'Bandeiras', img: 'img/kit/kv1-bandeiras.jpg', forma: 'v' },
        { titulo: 'Panfleto e santinho', img: 'img/kit/kv1-santinho.jpg', forma: 'h' },
        { titulo: 'Outdoor de campanha', img: 'img/kit/kv1-outdoor.jpg', forma: 'h' }
      ]
    },
    {
      id: 'social',
      numero: '02',
      titulo: 'Social media',
      resumo: 'O dia a dia do mandato no Instagram: posts que comunicam rápido, carrosséis que explicam pautas e stories para agenda e bastidores.',
      chave: { titulo: 'Post de apresentação: Rafael Mendes, vereador (personagem fictício)', img: 'img/kit/kv2-chave.jpg' },
      pecas: [
        { titulo: 'Posts de feed', img: 'img/kit/kv2-feed.jpg', forma: 'h' },
        { titulo: 'Carrossel de pauta', img: 'img/kit/kv2-carrossel.jpg', forma: 'h' },
        { titulo: 'Stories', img: 'img/kit/kv2-stories.jpg', forma: 'h' }
      ]
    },
    {
      id: 'mandato',
      numero: '03',
      titulo: 'Materiais de mandato e rua',
      resumo: 'O mandato fora da tela: prestação de contas, cartazes de rua, uniforme da equipe e identificação de veículos e apoiadores.',
      chave: { titulo: 'Capa informativa de prestação de contas: Dra. Helena Prado, deputada estadual (personagem fictícia)', img: 'img/kit/kv3-chave.jpg' },
      pecas: [
        { titulo: 'Cartazes de rua', img: 'img/kit/kv3-cartazes.jpg', forma: 'v' },
        { titulo: 'Camisas e bonés', img: 'img/kit/kv3-camisas.jpg', forma: 'h' },
        { titulo: 'Adesivos e veículo adesivado', img: 'img/kit/kv3-adesivos.jpg', forma: 'h' }
      ]
    }
  ],

  // Trabalhos anteriores (identidade visual e redes sociais), feitos à mão.
  outros: [
    { titulo: 'Canal H1ck1nho: banner do YouTube', ano: '2023', img: 'img/outros/h1ck1nho-banner.jpg', largo: true },
    { titulo: 'Canal H1ck1nho: tela de offline', ano: '2023', img: 'img/outros/h1ck1nho-offline.jpg' },
    { titulo: 'D8 Cell: post para Instagram', ano: '2020', img: 'img/outros/d8cell-post.jpg' },
    { titulo: 'D8 Cell: logo', ano: '2020', img: 'img/outros/d8cell-logo.jpg' },
    { titulo: 'Grupo Deus Imenso: camisa', ano: '2017', img: 'img/outros/deus-imenso-camisa.jpg', largo: true },
    { titulo: 'Gráfica Canarinho: logo', ano: '2018', img: 'img/outros/canarinho-logo.jpg' },
    { titulo: 'F&L Tech: logo', ano: '2025', img: 'img/outros/fl-tech-logo.jpg' },
    { titulo: 'E&M Locadora: logo', ano: '2025', img: 'img/outros/em-locadora-logo.jpg' },
    { titulo: 'Naturallís: logo', ano: '2019', img: 'img/outros/naturallis-logo.jpg' }
  ]
};

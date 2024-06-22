import project1 from "../assets/projects/Ralph.webp";
import project2 from "../assets/projects/lista-tarefa.jpeg";
import project3 from "../assets/projects/jogo-memoria.webp";
import project4 from "../assets/projects/jogo-velha.jpg";
/*import project5 from "../assets/projects/clima-image.jpeg";*/
import project6 from "../assets/projects/analise-de-dados.jpeg";
import project7 from "../assets/projects/analise-e-commerce.jpeg";

export const HERO_CONTENT = `Sou um desenvolvedor de software apaixonado e estudante de graduação em Ciência da Computação, com talento para criar aplicações robustas e escaláveis. Através dos meus projetos, aperfeiçoei minhas habilidades em tecnologias de front-end como React e Next.js, bem como em tecnologias de back-end como Java, Node.js, PostgreSQL e MySQL. Além disso, possuo conhecimentos em cloud computing com Azure. Meu objetivo é aproveitar minha experiência, evoluindo continuamente em diversos temas, para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem influências significativas na vida das pessoas, tornando suas experiências mais agradáveis.`;

export const ABOUT_TEXT = `Sou um desenvolvedor full stack dedicado e versátil, apaixonado por criar aplicações web eficientes e amigáveis. Apesar de estar no início da minha carreira, possuo um sólido domínio de diversas tecnologias essenciais, incluindo Java, JavaScript, Python e bancos de dados relacionais como PostgreSQL. Também tenho experiência com React, Next.js, TypeScript, Node.js e Spring Framework. 
  
  Minha formação em Ciência da Computação proporcionou-me conhecimentos abrangentes em engenharia de software, modelagem em UML, redes de computadores, segurança cibernética, computação em nuvem, estrutura de dados e sistemas operacionais, com especial ênfase em Linux. Desde o início da minha jornada no desenvolvimento de software, fui impulsionado por uma curiosidade profunda sobre o funcionamento interno das tecnologias, buscando constantemente aprender e adaptar-me a novos desafios.
  
  Tenho uma habilidade natural para resolver problemas complexos de forma criativa, sempre em busca de entregar soluções de alta qualidade. Valorizo o trabalho em equipe e prospero em ambientes colaborativos, onde posso contribuir com minha capacidade analítica e minha paixão por inovação tecnológica.
  
  Além do meu compromisso com o desenvolvimento de software, mantenho-me ativo explorando novas tecnologias e contribuindo para projetos de código aberto. Estou entusiasmado com a oportunidade de aplicar meus conhecimentos e energia para ajudar sua empresa a alcançar novos patamares de excelência tecnológica.`;

export const PROJECTS = [
  {
    title: "Jogo Detona Ralph",
    image: project1,
    description:
      "Jogo criado utilizando o personagem Detona Ralph ao qual ataca o jogador em vários lugares da tela. O objetivo do jogador é acertá-lo com clique sempre que aparecer, e cada acerto vale +1 ponto.",
    technologies: ["HTML", "CSS", "Javascript", "POO"],
    url: "https://leonardobern10.github.io/detona-ralph/",
  },
  {
    title: "Lista de Tarefas",
    image: project2,
    description:
      "Uma aplicação que permite gerenciar as tarefas adicionando e removendo-as e ainda podendo marcá-las como concluídas.",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://leonardobern10.github.io/To-do-List/",
  },
  {
    title: "Memória Mágica",
    image: project3,
    description:
      "Embarque em uma jornada de desafios mentais com o jogo de memória mais encantador que você já viu! Memória Mágica combina a clássica diversão do jogo da memória com elementos mágicos e emocionantes. Teste suas habilidades de concentração e memorização enquanto desvenda pares de cartas misteriosas. ",
    technologies: ["HTML", "CSS", "Javascript", "POO"],
    url: "https://leonardobern10.github.io/Jogo_da_memoria/",
  },
  {
    title: "Jogo da Velha",
    image: project4,
    description:
      "Prepare-se para o clássico jogo da velha. Escolha seu lado entre X ou O e planeje cuidadosamente seus movimentos para formar uma linha vencedora antes do seu oponente. O jogo é feito para dois jogadores então não perca tempo e chame seus amigos para ver que se sai melhor nesse clássico.",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://leonardobern10.github.io/Jogo-da-velha/",
  },
  /*{
    title: "Aplicativo de Previsão do Tempo",
    image: project5,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  }*/
  {
    title: "Analise da Dados Aplicada à Bancos",
    image: project6,
    description:
      "O projeto é uma iniciativa do Banco ABC para conhecer melhor seu negócio e seus clientes. Ele pretende conhecer as características dos clientes, quais tem mais chances de continuar ou sair, e também tentar prever esse acontecimento.",
    technologies: [
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
      "Estatística",
    ],
    url: "https://github.com/Leonardobern10/BancoABC?tab=readme-ov-file",
  },
  {
    title: "Análise de Dados em E-Commerce",
    image: project7,
    description:
      "O projeto recebe dados de vendas pertencentes a uma empresa de e-commerce, ao qual serão feitas algumas análises, extração de insights e obtenção de previsão do valor de compra dos clientes baseado nos atributos obtidos.",
    technologies: [
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Machine Learning",
      "Estatística",
    ],
    url: "https://github.com/Leonardobern10/E-commerce",
  },
];

export const CONTACT = {
  address: "Nova Iguaçú, RJ, Brasil ",
  phoneNo: "+55 21 9 9942-9912 ",
  email: "leonardo.bernardo2658@gmail.com",
};

import project1 from "../assets/projects/Ralph.webp";
import project2 from "../assets/projects/lista-tarefa.jpeg";
import project3 from "../assets/projects/jogo-memoria.webp";
import project4 from "../assets/projects/jogo-velha.jpg";
import project8 from "../assets/projects/2023-porsche-911-carrera-t-in-gulf-blue.webp";
import project9 from "../assets/projects/artigo-F1-novo-2.jpg";
import project10 from "../assets/projects/IF-Futebol.webp";
import project11 from "../assets/projects/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.webp";
/*import project5 from "../assets/projects/clima-image.jpeg";*/
import project6 from "../assets/projects/analise-de-dados.jpeg";
import project7 from "../assets/projects/analise-e-commerce.jpeg";
import project12 from "../assets/projects/bn4ebvtt.bmp";

export const HERO_CONTENT = `Sou estudante de graduação em Engenharia de Software, com talento para criar aplicações robustas e escaláveis. Através dos meus projetos, aperfeiçoei minhas habilidades em tecnologias de front-end, mas com uma aptidão maior para tecnologias de back-end como Java, Node.js. Meu objetivo é aproveitar minha experiência, evoluindo continuamente em diversos temas, para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem influências significativas na vida das pessoas, tornando suas experiências mais agradáveis.`;

export const ABOUT_TEXT_TITLE = {
  D: ["d", "edicação."],
  E: ["e", "mpatia."],
  V: ["v", "ontade."],
};
export const ABOUT_TEXT_CONTENT = `Gosto de desafios e, principalmente, resolvê-los. Procuro sempre me aprofundar nos conceitos sobre tecnologias e linguagens. Minhas áreas de maior destaque são aplicações com Java, JavaScript e bancos de dados como PostgreSQL, MongoDB, CassandraDB, Neo4J e Redis; além da utilização de mensagerias, como RabbitMQ com o protocolo AMQP, para criação de microserviços. Também tenho experiência com React, TypeScript, Nodejs e Spring Framework (Spring Security, Spring Web, Spring Data JPA).`;

export const PROJECTS = [
  {
    title: "Car Management API",
    image: project8,
    description:
      "O projeto Car Management API é uma aplicação desenvolvida com Spring Boot que fornece uma API RESTful para gerenciamento de carros. A API permite realizar operações CRUD em registros de carros, além de suportar pesquisa e filtragem por diferentes atributos. O projeto possui sistema de autenticação e é configurado para usar MongoDB e PostgreSQL para armazenamento de dados.",
    technologies: [
      "Java",
      "Spring Framework",
      "PostgreSQL",
      "Spring Security",
      "MongoDB",
    ],
    url: "https://github.com/Leonardobern10/Car-management-api",
  },
  {
    title: "Order Management",
    image: project12,
    description:
      "Este projeto é um sistema de gerenciamento de pedidos de uma loja de papelaria, composto por três microsserviços que se comunicam utilizando RabbitMQ. A arquitetura é orientada a eventos, onde os pedidos são criados, processados e notificados através de um sistema distribuído de mensageria.",
    technologies: ["Java", "Spring Boot", "RabbitMQ"],
    url: "https://github.com/Leonardobern10/OrderManagement",
  },
  {
    title: "Fórmula 1 API",
    image: project9,
    description:
      "Este projeto é uma API desenvolvida com Fastify e TypeScript, que fornece informações sobre equipes e pilotos de Fórmula 1. A API é capaz de listar todos os times e pilotos, bem como detalhes específicos sobre cada piloto.",
    technologies: ["Node.js", "Fastify", "Typescript", "CORS"],
    url: "https://github.com/Leonardobern10/Projeto-formula1-api",
  },
  {
    title: "Soccer API",
    image: project10,
    description:
      "Este projeto é uma API desenvolvida em TypeScript usando Express.js para gerenciar informações relacionadas a clubes e jogadores de futebol. A API fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em jogadores e clubes, utilizando serviços e repositórios para separar a lógica de negócio da interação com os dados.",
    technologies: ["Node.js", "API RESTful", "Express.js", "Typescript"],
    url: "https://github.com/Leonardobern10/Projeto-start-clubs",
  },
  {
    title: "Gerador de senhas e QR-CODE",
    image: project11,
    description:
      "Este projeto é uma aplicação simples em Node.js que oferece duas ferramentas úteis: um gerador de QR Code e um gerador de senhas. O objetivo é fornecer uma interface de linha de comando interativa para gerar QR Codes a partir de links e criar senhas seguras com base em preferências definidas pelo usuário.",
    technologies: ["Node.js", "Prompt", "Chalk", "Qr-code terminal"],
    url: "https://github.com/Leonardobern10/Projeto-gerador-qrcode",
  },
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
  address: "Nova Iguaçu, RJ, Brasil",
  phoneNo: "+55 21 9 9942-9912 ",
  email: "leonardo.bernardo2658@gmail.com",
};

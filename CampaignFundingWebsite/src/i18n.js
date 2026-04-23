import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { WhoWeAre } from "./components/WhoWeAre";
import { Conference } from "./components/Conference";

const resources = {
  en: {
    translation: {
      hero_title:
        "Help Brazilian Researchers Present at an International Conference",
      hero_subtitle:
        "Support the first international academic presentation of a research team from Maranhão, Brazil, at <0>CELS GLOBAL 2026</0>.",
      hero_donate: "Donate",
      hero_whoweare: "Get to know us",
      hero_aboutresearch: "Learn about our work",
      hero_contact: "Contact us",

      whoWeAre_title: "Who We Are",
      whoWeAre_p1:
        "We are an independent research team from Maranhão, composed of <0>Sóstenes Azevedo Soeiro</0>, <1>Augusto Gonçalves Santos</1> and <2>Flávio Conceição Freitas Rubim Ferreira</2>. We work at the intersection between law, public health and governance/data analysis and our work is linked to institutions such as UFMA and public health organizations.",
      whoWeAre_p2:
        "Our goal is to contribute to global debates on health data and information distribution, improving the work of professionals in the field and public policies through research based on real-world challenges.",

      aboutResearch_title: "About the Research",
      aboutResearch_p1:
        "<0>Our research</0> explores how health data can be used in a responsible, transparent and strategically distributed way, respecting privacy laws with a focus on the brazilian General Data Protection Law.",
      aboutResearch_p2:
        "We propose a federated data architecture that allows institutions to collaborate synergistically without exposing sensitive personal data, contributing to better governance and more assertive public policy decisions..",
      aboutResearch_download_link: "<0>(Click here to download the paper)</0>",

      conference_title: "About the Conference",
      conference_p1:
        "The <0>Conference on Empirical Legal Studies (CELS)</0> is a leading international event in empirical legal research, bringing together scholars from around the world. In 2026, the event will take place between June 8th and 10th in the city of São Paulo.",
      conference_p2:
        "Participation is highly competitive, and acceptance represents international academic recognition.",
      conference_link_accepted:
        "<0>(You can check the acceptance of our work in the Accepted Papers list by clicking here)<0>",

      whySupport_title: "Why We Need Your Support",
      whySupport_p1:
        "We currently do not have institutional funding to cover this trip and our team includes researchers with limited financial resources, including one member still in academic training. Despite this, we were the only paper selected from Maranhão and among the few from the Northeast to represent Brazil at the Conference.",
      whySupport_p2:
        "This will be the first international academic experience for all members of our team. We are also one of the very few research groups from the Northeast of Brazil represented at this conference.",

      costs_title: "Estimated Costs",
      costs_item: "Item",
      costs_value: "Cost (BRL)",
      costs_flights: "Flights",
      costs_accommodation: "Accommodation",
      costs_registration: "Registration",
      costs_meals: "Meals & Transport",
      costs_total: "Total",

      goal_title: "Our Goal",
      goal_text_pt1: "We aim to raise",
      goal_text_value: " $11,460 ",
      goal_text_pt2: "to make this participation possible.",
      goal_progress: "% funded",

      impact_title: "Your Impact",
      impact_p1:
        "Your contribution helps represent underrepresented regions in global academic discussions.",
      impact_p2:
        "It supports Brazilian research, empowers young researchers, and expands the global conversation on data, inequality, and public policy.",
      impact_contact:
        "<0>If you have any questions, click here to contact us via email</0>",

      donate_title: "How to Contribute",
      donate_subtitle: "You can help us by making a transfer via PIX.",
      key_pix: "8746c11e-100c-4076-8810-f2a185b4da6e",
      donate_copy: "Copy PIX key",
      donate_copied: "Key copied",
      donate_gofundme: "GoFundMe",

      donate_footer:
        "Supporting this project helps make it possible for our work to bear great fruit for the country and bring recognition to our region. Every contribution makes a difference, and we appreciate any and all support. Praise be to God.",

      donate_cta: "Donate",
    },
  },

  pt: {
    translation: {
      hero_title:
        "Ajude pesquisadores independentes a apresentar em uma conferência internacional",
      hero_subtitle:
        "Apoie a primeira apresentação acadêmica internacional de uma equipe de pesquisa do Maranhão no <0>CELS GLOBAL 2026</0>.",
      hero_donate: "Doar",
      hero_whoweare: "Conheça-nos",
      hero_aboutresearch: "Conheça nosso trabalho",
      hero_contact: "Contate-nos",

      whoWeAre_title: "Quem somos",
      whoWeAre_p1:
        "Somos uma equipe de pesquisa independente do Maranhão, composta por <0>Sóstenes Azevedo Soeiro</0>, <1>Augusto Gonçalves Santos</1> e <2>Flávio Conceição Freitas Rubim Ferreira</2>. Atuamos na interseção entre direito, saúde pública e governança/análise de dados e nosso trabalho está ligado a instituições como a UFMA e organizações de saúde pública.",
      whoWeAre_p2:
        "Nosso objetivo é contribuir para os debates globais sobre dados de saúde e distribuição da informação, melhora do trabalho de profissionais da área e políticas públicas por meio de pesquisas fundamentadas em desafios do mundo real.",

      aboutResearch_title: "Sobre a Pesquisa",
      aboutResearch_p1:
        "<0>Nossa pesquisa</0> explora como os dados de saúde podem ser usados de forma responsável, transparente e estrategicamente distribuída, respeitando leis de privacidade com foco na Lei Geral de Proteção de Dados.",
      aboutResearch_p2:
        "Propomos uma arquitetura de dados federada que permite às instituições colaborar com sinergia sem expor dados pessoais sensíveis, contribuindo para uma melhor governança e decisões de políticas públicas mais assertivas.",
      aboutResearch_download_link: "<0>(Clique aqui para baixar o paper)</0>",

      conference_title: "Sobre a Conferência",
      conference_p1:
        "A <0>Conferência sobre Estudos Jurídicos Empíricos (CELS)</0> é um evento internacional de referência na área da pesquisa jurídica empírica, reunindo acadêmicos de todo o mundo. Em 2026, o evento acontecerá entre os dias 8 e 10 de junho na cidade de São Paulo.",
      conference_p2:
        "A participação é altamente competitiva, e a aceitação representa reconhecimento acadêmico internacional.",
      conference_link_accepted:
        "<0>(Você pode conferir a aceitação do nosso trabalho na lista de Artigos Aceitos clicando aqui)<0>",

      whySupport_title: "Por que precisamos do seu apoio",
      whySupport_p1:
        "Atualmente, não temos financiamento institucional para custear essa viagem e nossa equipe inclui pesquisadores com recursos financeiros limitados, incluindo um integrante ainda em formação acadêmica. Apesar disso, fomos o único artigo selecionado do Maranhão e entre os poucos do Nordeste para representar o Brasil na Conferência.",
      whySupport_p2:
        "Esta será a primeira experiência acadêmica internacional para todos os membros da nossa equipe. Também somos um dos poucos grupos de pesquisa do Nordeste do Brasil representados nesta conferência.",

      costs_title: "Custos estimados",
      costs_item: "Item",
      costs_value: "Custo (BRL)",
      costs_flights: "Passagens aéreas",
      costs_accommodation: "Hospedagem",
      costs_registration: "Inscrição",
      costs_meals: "Alimentação e transporte",

      costs_total: "Total",

      goal_title: "Nosso objetivo",
      goal_text_pt1: "Nosso objetivo é arrecadar",
      goal_text_value: " $11.460 ",
      goal_text_pt2: "para tornar essa participação possível.",
      goal_progress: "% arrecadado",

      impact_title: "Seu impacto",
      impact_p1:
        "Sua contribuição ajuda a representar regiões sub-representadas em debates acadêmicos globais.",
      impact_p2:
        "Ela fortalece a pesquisa brasileira, apoia jovens pesquisadores e amplia o debate global sobre dados, desigualdade e políticas públicas.",
      impact_contact:
        "<0>Caso tenha alguma dúvida, clique aqui para entrar em contato conosco via e-mail</0>",

      donate_title: "Como contribuir",
      donate_subtitle: "Você pode nos ajudar por transferência via PIX.",
      key_pix: "8746c11e-100c-4076-8810-f2a185b4da6e",
      donate_copy: "Copiar chave PIX",
      donate_copied: "Chave copiada",
      donate_gofundme: "GoFundMe",

      donate_footer:
        "Apoiar este projeto ajuda a tornar possível que nosso trabalho dê grandes frutos para o país e traga reconhecimento à nossa região. Cada contribuição faz a diferença e agradecemos todo e qualquer apoio. Louvado seja Deus.",

      donate_cta: "Doar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // default
  fallback: "pt",
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
});

export default i18n;

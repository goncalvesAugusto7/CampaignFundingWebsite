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

      whoWeAre_title: "Who We Are",
      whoWeAre_p1:
        "We are a research team from Maranhão, Brazil, composed of <0>Sóstenes Azevedo Soeiro</0>, <1>Augusto Gonçalves Santos</1>, and <2>Flávio Conceição Freitas Rubim Ferreira</2>. We work at the intersection of law, public health, and data governance. Our work is linked to institutions such as UFMA (Federal University of Maranhão) and public health organizations.",
      whoWeAre_p2:
        "Our goal is to contribute to global discussions on data, inequality, and public policy through research grounded in real-world challenges.",

      aboutResearch_title: "About the Research",
      aboutResearch_p1:
        "<0>Our research</0> explores how health data can be used responsibly while respecting privacy laws such as Brazil’s LGPD.",
      aboutResearch_p2:
        "We propose a federated data architecture that allows institutions to collaborate without exposing sensitive personal data, contributing to better governance and public policy decisions.",

      conference_title: "About the Conference",
      conference_p1:
        "The <0>Conference on Empirical Legal Studies (CELS)</0> is a leading international event in empirical legal research, bringing together scholars from around the world.",
      conference_p2:
        "Participation is highly competitive, and acceptance represents international academic recognition — not just attendance, but contribution.",

      whySupport_title: "Why We Need Your Support",
      whySupport_p1:
        "We currently have no institutional funding to support this trip.",
      whySupport_p2:
        "This will be the first international academic experience for all members of our team. We are also one of the very few research groups from the Northeast of Brazil represented at this conference.",
      whySupport_p3:
        "Our team includes researchers with limited financial resources, including one still completing their studies.",

      costs_title: "Estimated Costs",
      costs_item: "Item",
      costs_value: "Cost (BR)",
      costs_flights: "Flights",
      costs_accommodation: "Accommodation",
      costs_registration: "Registration",
      costs_meals: "Meals & Transport",
      costs_total: "Total",

      goal_title: "Our Goal",
      goal_text_pt1: "We aim to raise",
      goal_text_pt2: "to make this participation possible.",
      goal_progress: "% funded",

      impact_title: "Your Impact",
      impact_p1:
        "Your contribution helps represent underrepresented regions in global academic discussions.",
      impact_p2:
        "It supports Brazilian research, empowers young researchers, and expands the global conversation on data, inequality, and public policy.",

      donate_title: "How to Contribute",
      donate_subtitle: "You can help us by making a transfer via PIX.",
      key_pix: "8746c11e-100c-4076-8810-f2a185b4da6e",
      donate_copy: "Copy PIX key",
      donate_copied: "Key copied",
      donate_gofundme: "GoFundMe",

      donate_footer:
        "Supporting this project means enabling voices from underrepresented regions to participate in global academic debates. Every contribution makes a difference.",

      donate_cta: "Donate",
    },
  },

  pt: {
    translation: {
      hero_title:
        "Ajude pesquisadores brasileiros a apresentar em uma conferência internacional",
      hero_subtitle:
        "Apoie a primeira apresentação acadêmica internacional de uma equipe de pesquisa do Maranhão, Brasil, no <0>CELS GLOBAL 2026</0>.",
      hero_donate: "Doar",
      hero_whoweare: "Conheça-nos",
      hero_aboutresearch: "Conheça nosso trabalho",

      whoWeAre_title: "Quem somos",
      whoWeAre_p1:
        "Somos uma equipe de pesquisa do Maranhão, Brasil, composta por <0>Sóstenes Azevedo Soeiro</0>, <1>Augusto Gonçalves Santos</1> e <2>Flávio Conceição Freitas Rubim Ferreira</2>. Atuamos na interseção entre direito, saúde pública e governança de dados. Nosso trabalho está ligado a instituições como a UFMA e organizações de saúde pública.",
      whoWeAre_p2:
        "Nosso objetivo é contribuir para os debates globais sobre dados, desigualdade e políticas públicas por meio de pesquisas fundamentadas em desafios do mundo real.",

      aboutResearch_title: "Sobre a Pesquisa",
      aboutResearch_p1:
        "<0>Nossa pesquisa</0> explora como os dados de saúde podem ser usados de forma responsável, respeitando leis de privacidade como a LGPD brasileira.",
      aboutResearch_p2:
        "Propomos uma arquitetura de dados federada que permite às instituições colaborar sem expor dados pessoais sensíveis, contribuindo para uma melhor governança e decisões de políticas públicas mais assertivas.",

      conference_title: "Sobre a Conferência",
      conference_p1:
        "A <0>Conferência sobre Estudos Jurídicos Empíricos (CELS)</0> é um evento internacional de referência na área da pesquisa jurídica empírica, reunindo acadêmicos de todo o mundo.",
      conference_p2:
        "A participação é altamente competitiva, e a aceitação representa reconhecimento acadêmico internacional — não apenas presença, mas contribuição.",

      whySupport_title: "Por que precisamos do seu apoio",
      whySupport_p1:
        "Atualmente, não temos financiamento institucional para custear essa viagem.",
      whySupport_p2:
        "Esta será a primeira experiência acadêmica internacional para todos os membros da nossa equipe. Também somos um dos poucos grupos de pesquisa do Nordeste do Brasil representados nesta conferência.",
      whySupport_p3:
        "Nossa equipe inclui pesquisadores com recursos financeiros limitados, incluindo um integrante ainda em formação acadêmica.",

      costs_title: "Custos estimados",
      costs_item: "Item",
      costs_value: "Custo (USD)",
      costs_flights: "Passagens aéreas",
      costs_accommodation: "Hospedagem",
      costs_registration: "Inscrição",
      costs_meals: "Alimentação e transporte",
      costs_total: "Total",

      goal_title: "Nosso objetivo",
      goal_text_pt1: "Nosso objetivo é arrecadar",
      goal_text_pt2: "para tornar essa participação possível.",
      goal_progress: "% arrecadado",

      impact_title: "Seu impacto",
      impact_p1:
        "Sua contribuição ajuda a representar regiões sub-representadas em debates acadêmicos globais.",
      impact_p2:
        "Ela fortalece a pesquisa brasileira, apoia jovens pesquisadores e amplia o debate global sobre dados, desigualdade e políticas públicas.",

      donate_title: "Como contribuir",
      donate_subtitle: "Você pode nos ajudar por transferência via PIX.",
      key_pix: "8746c11e-100c-4076-8810-f2a185b4da6e",
      donate_copy: "Copiar chave PIX",
      donate_copied: "Chave copiada",
      donate_gofundme: "GoFundMe",

      donate_footer:
        "Apoiar este projeto significa possibilitar que vozes de regiões sub-representadas participem de debates acadêmicos globais. Toda contribuição faz a diferença.",

      donate_cta: "Doar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default
  fallback: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
});

export default i18n;

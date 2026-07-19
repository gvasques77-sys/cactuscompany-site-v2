export const company = {
  brand: "Cactus Company",
  legalName: "GV TECNOLOGIA LTDA",
  cnpj: "65.923.667/0001-01",
  domain: "cactuscompany.com.br",
  email: "suporte@cactuscompany.com.br",
  phone: "(66) 99619-4231",
  phoneIntl: "+5566996194231",
  location: "Cuiabá, Mato Grosso, Brasil",
  appStore:
    "https://apps.apple.com/br/app/frequencia-internato/id6785627123",
  playStore:
    "https://play.google.com/store/apps/details?id=br.com.cactuscompany.frequenciainternato&hl=pt_BR",
};

export const navItems = [
  { href: "/#empresa", label: "Empresa" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/produtos", label: "Frequência Internato" },
  { href: "/produtos#seguranca", label: "Segurança" },
  { href: "/contato", label: "Contato" },
];

const demoSubject = encodeURIComponent("Demonstração — Frequência Internato");
const demoBody = encodeURIComponent(
  "Olá! Sou coordenador(a) e gostaria de agendar uma demonstração de 20 minutos do Frequência Internato.\n\nInstituição:\nCargo:\nMelhor dia/horário:\nTelefone/WhatsApp:"
);

export const demoMailto = `mailto:${company.email}?subject=${demoSubject}&body=${demoBody}`;

export const waLink = `https://wa.me/${company.phoneIntl.replace(
  "+",
  ""
)}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de saber mais sobre o Frequência Internato."
)}`;

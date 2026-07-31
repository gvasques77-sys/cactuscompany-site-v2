export const company = {
  brand: "Cactus Company",
  legalName: "GV TECNOLOGIA LTDA",
  cnpj: "65.923.667/0001-01",
  domain: "cactuscompany.com.br",
  email: "suporte@cactuscompany.com.br",
  phone: "(66) 99952-2244",
  phoneIntl: "+5566999522244",
  location: "Cuiabá, Mato Grosso, Brasil",
  appStore:
    "https://apps.apple.com/br/app/frequencia-internato/id6785627123",
  playStore:
    "https://play.google.com/store/apps/details?id=br.com.cactuscompany.frequenciainternato&hl=pt_BR",
};

export const navItems = [
  { href: "/#raio-x", label: "Raio-X ENAMED" },
  { href: "/#inteligencia", label: "Inteligência de dados" },
  { href: "/#ecossistema", label: "Ecossistema" },
  { href: "/#seguranca", label: "Segurança" },
  { href: "/#empresa", label: "Empresa" },
];

const demoSubject = encodeURIComponent("Demonstração — Frequência Internato");
const demoBody = encodeURIComponent(
  "Olá! Sou coordenador(a) e gostaria de agendar uma demonstração de 20 minutos do Frequência Internato.\n\nInstituição:\nCargo:\nMelhor dia/horário:\nTelefone/WhatsApp:"
);

export const demoMailto = `mailto:${company.email}?subject=${demoSubject}&body=${demoBody}`;

const intelligenceSubject = encodeURIComponent("Diagnóstico institucional — Raio-X ENAMED");
const intelligenceBody = encodeURIComponent(
  "Olá! Gostaria de conhecer o Raio-X ENAMED e entender como transformar os dados do nosso curso em diagnóstico e planos de ação.\n\nInstituição:\nCargo:\nNúmero aproximado de alunos:\nMelhor dia/horário:\nTelefone/WhatsApp:"
);

export const intelligenceMailto = `mailto:${company.email}?subject=${intelligenceSubject}&body=${intelligenceBody}`;

export const waLink = `https://wa.me/${company.phoneIntl.replace(
  "+",
  ""
)}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de solicitar um diagnóstico institucional do Raio-X ENAMED."
)}`;

// Índice das anotações em Markdown.
// Para adicionar uma nova nota: crie o arquivo em /notes/*.md
// e adicione uma entrada aqui. "semester" define o agrupamento no menu
// lateral (1º Semestre, 2º Semestre, ...) e "category" é a disciplina/área
// mostrada como legenda de cada item.
//
// Dica de ordenação: mantenha as notas na ordem em que quer que apareçam
// dentro de cada semestre — a lista é exibida na ordem em que está aqui.
const NOTES_INDEX = [
  {
    slug: "biologia-sanitaria",
    title: "Biologia Sanitária",
    category: "Biologia",
    semester: "1º Semestre",
    file: "notes/biologia-sanitaria.md"
  },
  {
    slug: "calculo-1",
    title: "Cálculo 1: limites, derivadas e integrais",
    category: "Cálculo I",
    semester: "1º Semestre",
    file: "notes/calculo-1.md"
  },
  {
    slug: "cto",
    title: "Ciência, Tecnologia e Organização",
    category: "Sociologia",
    semester: "1º Semestre",
    file: "notes/cto.md"
  },
  {
    slug: "geologia-pedologia",
    title: "Geologia e Pedologia",
    category: "Sociologia",
    semester: "1º Semestre",
    file: "notes/geologia-pedologia.md"
  },
  {
    slug: "hidrologia-basica",
    title: "Hidrologia básica: ciclo e balanço hídrico",
    category: "Hidrologia",
    semester: "1º Semestre",
    file: "notes/hidrologia-basica.md"
  },
  {
    slug: "hidraulica-condutos",
    title: "Hidráulica de condutos forçados",
    category: "Hidráulica",
    semester: "2º Semestre",
    file: "notes/hidraulica-condutos.md"
  },
  {
    slug: "saneamento-tratamento-agua",
    title: "Etapas do tratamento de água (ETA)",
    category: "Saneamento",
    semester: "3º Semestre",
    file: "notes/saneamento-tratamento-agua.md"
  },
  {
    slug: "recursos-hidricos-outorga",
    title: "Gestão de recursos hídricos e outorga",
    category: "Recursos Hídricos",
    semester: "4º Semestre",
    file: "notes/recursos-hidricos-outorga.md"
  }
];

if (typeof window !== "undefined") window.NOTES_INDEX = NOTES_INDEX;

import { Exercise } from '../types';

export const CHITAT_VERB_MAP: Record<string, string> = {
  "читать": "(читать — прочитать): il verbo base che significa leggere; percepire un testo scritto.",
  "почитать": "(почитать — SV): significa leggere per un po' di tempo (почитать перед сном).",
  "дочитать": "(дочитывать — дочитать): significa finire di leggere fino alla fine o fino a un certo punto.",
  "перечитать": "(перечитывать — перечитать): significa leggere di nuovo (ripetere) o leggere tutto un insieme di opere.",
  "зачитать": "(зачитывать — зачитать): può significare leggere ad alta voce ufficialmente (зачитать приказ) o rovinare un libro a forza di leggerlo (зачитать до дыр).",
  "зачитываться": "(зачитываться — зачитаться): significa essere rapito dalla lettura, leggere con estremo interesse dimenticando il tempo.",
  "вычитать": "(вычитывать — вычитать): significa estrarre un'informazione leggendo o correggere bozze (proofreading).",
  "считать": "(считывать — считать): significa leggere dati da un supporto (считать штрихкод, считать информацию с диска).",
  "начитать": "(начитывать — начитать): significa leggere per una registrazione (начитать текст на плёнку).",
  "начитаться": "(начитаться — SV): significa leggere in abbondanza, a sazietà o leggere più del dovuto di un certo genere.",
  "отчитать": "(отчитывать — отчитать): significa fare una severa sgridata o un rimprovero (отчитать ученика).",
  "отчитаться": "(отчитываться — отчитаться): significa presentare un rapporto ufficiale sul lavoro svolto.",
  "вчитаться": "(вчитываться — вчитаться): significa leggere con estrema attenzione per capire il senso profondo.",
  "читать между строк": "Espressione che significa 'leggere tra le righe', ovvero cogliere il significato nascosto.",
};

export const CHITAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Роман был такой скучный, что я не смог его ... до конца.",
    translation: "Il romanzo era così noioso che non sono riuscito a finirlo di leggere.",
    options: ["дочитать", "прочитать", "почитать", "начитать"],
    optionBases: ["дочитать", "прочитать", "почитать", "начитать"],
    correctIndex: 0,
    verbPair: "дочитать — дочитывать",
    correctExplanation: CHITAT_VERB_MAP["дочитать"]
  },
  {
    id: 2,
    sentence: "Перед сном я люблю немного ... свежую газету.",
    translation: "Prima di dormire mi piace leggere un po' il giornale fresco.",
    options: ["почитать", "дочитать", "вычитать", "считать"],
    optionBases: ["почитать", "дочитать", "вычитать", "считать"],
    correctIndex: 0,
    verbPair: "почитать — (SV)",
    correctExplanation: CHITAT_VERB_MAP["почитать"]
  },
  {
    id: 3,
    sentence: "Она так ..., что совсем забыла о времени и опоздала на встречу.",
    translation: "Si è così immersa nella lettura che si è dimenticata completamente del tempo e ha fatto tardi all'appuntamento.",
    options: ["зачиталась", "начиталась", "вчиталась", "отчиталась"],
    optionBases: ["зачитаться", "начитаться", "вчитаться", "отчитаться"],
    correctIndex: 0,
    verbPair: "зачитаться — зачитываться",
    correctExplanation: CHITAT_VERB_MAP["зачитываться"]
  },
  {
    id: 4,
    sentence: "Чтобы понять смысл этой фразы, нужно в неё как следует ... .",
    translation: "Per capire il senso di questa frase, bisogna analizzarla (leggerla con attenzione) per bene.",
    options: ["вчитаться", "дочитаться", "зачитаться", "вычитаться"],
    optionBases: ["вчитаться", "дочитаться", "зачитаться", "вычитаться"],
    correctIndex: 0,
    verbPair: "вчитаться — вчитываться",
    correctExplanation: CHITAT_VERB_MAP["вчитаться"]
  },
  {
    id: 5,
    sentence: "Секретарь должен был ... приказ перед всеми сотрудниками.",
    translation: "Il segretario doveva leggere (proclamare) l'ordine davanti a tutti i dipendenti.",
    options: ["зачитать", "начитать", "отчитать", "вычитать"],
    optionBases: ["зачитать", "начитать", "отчитать", "вычитать"],
    correctIndex: 0,
    verbPair: "зачитать — зачитывать",
    correctExplanation: CHITAT_VERB_MAP["зачитать"]
  },
  {
    id: 6,
    sentence: "В старом журнале я ... интересный факт о жизни львов.",
    translation: "In una vecchia rivista ho trovato (estratto leggendo) un fatto interessante sulla vita dei leoni.",
    options: ["вычитал", "начитал", "дочитал", "считал"],
    optionBases: ["вычитать", "начитать", "дочитал", "считать"],
    correctIndex: 0,
    verbPair: "вычитать — вычитывать",
    correctExplanation: CHITAT_VERB_MAP["вычитать"]
  },
  {
    id: 7,
    sentence: "Мне так понравилась эта книга, что я хочу её ... ещё раз.",
    translation: "Mi è piaciuto così tanto questo libro che voglio rileggerlo ancora una volta.",
    options: ["перечитать", "прочитать", "дочитать", "почитать"],
    optionBases: ["перечитать", "прочитать", "дочитать", "почитать"],
    correctIndex: 0,
    verbPair: "перечитать — перечитывать",
    correctExplanation: CHITAT_VERB_MAP["перечитать"]
  },
  {
    id: 8,
    sentence: "За время каникул студент ... все произведения Чехова.",
    translation: "Durante le vacanze lo studente ha letto (tutte) le opere di Cechov.",
    options: ["перечитал", "почитал", "начитал", "отчитал"],
    optionBases: ["перечитать", "почитать", "начитать", "отчитать"],
    correctIndex: 0,
    verbPair: "перечитать — перечитывать",
    correctExplanation: CHITAT_VERB_MAP["перечитать"]
  },
  {
    id: 9,
    sentence: "Отец строго ... сына за плохую оценку в школе.",
    translation: "Il padre ha sgridato severamente il figlio per il brutto voto a scuola.",
    options: ["отчитал", "зачитал", "прочитал", "начитал"],
    optionBases: ["отчитать", "зачитать", "прочитал", "начитал"],
    correctIndex: 0,
    verbPair: "отчитать — отчитывать",
    correctExplanation: CHITAT_VERB_MAP["отчитать"]
  },
  {
    id: 10,
    sentence: "В конце года каждый отдел должен ... о проделанной работе.",
    translation: "Alla fine dell'anno ogni dipartimento deve fare rapporto sul lavoro svolto.",
    options: ["отчитаться", "зачитаться", "вчитаться", "начитаться"],
    optionBases: ["отчитаться", "зачитаться", "вчитаться", "начитаться"],
    correctIndex: 0,
    verbPair: "отчитаться — отчитываться",
    correctExplanation: CHITAT_VERB_MAP["отчитаться"]
  },
  {
    id: 11,
    sentence: "Современные телефоны могут легко ... штрихкоды на товарах.",
    translation: "I telefoni moderni possono leggere facilmente i codici a barre sui prodotti.",
    options: ["считывать", "вычитывать", "начитывать", "дочитывать"],
    optionBases: ["считывать", "вычитывать", "начитывать", "дочитывать"],
    correctIndex: 0,
    verbPair: "считать — считывать",
    correctExplanation: CHITAT_VERB_MAP["считать"]
  },
  {
    id: 12,
    sentence: "Диктор ... текст для аудиокниги в студии.",
    translation: "Lo speaker ha letto il testo per l'audiolibro in studio.",
    options: ["начитал", "зачитал", "вычитал", "прочитал"],
    optionBases: ["начитать", "зачитать", "вычитать", "прочитал"],
    correctIndex: 0,
    verbPair: "начитать — начитывать",
    correctExplanation: CHITAT_VERB_MAP["начитать"]
  },
  {
    id: 13,
    sentence: "В детстве он ... детективных романов и решил стать следователем.",
    translation: "Da bambino ha letto un sacco di romanzi gialli e ha deciso di diventare un investigatore.",
    options: ["начитался", "зачитался", "прочитался", "отчитался"],
    optionBases: ["начитаться", "зачитаться", "прочитаться", "отчитаться"],
    correctIndex: 0,
    verbPair: "начитаться — (SV)",
    correctExplanation: CHITAT_VERB_MAP["начитаться"]
  },
  {
    id: 14,
    sentence: "Опытный дипломат умеет ... , чтобы понять истинные намерения.",
    translation: "Un diplomatico esperto sa leggere tra le righe per capire le vere intenzioni.",
    options: ["читать между строк", "читать вслух", "читать быстро", "читать по памяти"],
    optionBases: ["читать между строк", "читать вслух", "читать быстро", "читать по памяти"],
    correctIndex: 0,
    verbPair: "читать",
    correctExplanation: CHITAT_VERB_MAP["читать между строк"]
  },
  {
    id: 15,
    sentence: "Корректор внимательно ... рукопись, исправляя ошибки.",
    translation: "Il correttore ha letto attentamente il manoscritto, correggendo gli errori.",
    options: ["вычитывал", "зачитывал", "начитывал", "перечитывал"],
    optionBases: ["вычитывать", "зачитывать", "начитывать", "перечитывать"],
    correctIndex: 0,
    verbPair: "вычитать — вычитывать",
    correctExplanation: CHITAT_VERB_MAP["вычитать"]
  },
  {
    id: 16,
    sentence: "Эта книга была такая старая и популярная, что её ... до дыр.",
    translation: "Questo libro era così vecchio e popolare che è stato consumato (letto fino ai buchi).",
    options: ["зачитали", "начитали", "отчитали", "прочитали"],
    optionBases: ["зачитать", "начитать", "отчитать", "прочитали"],
    correctIndex: 0,
    verbPair: "зачитать — зачитывать",
    correctExplanation: CHITAT_VERB_MAP["зачитать"]
  },
  {
    id: 17,
    sentence: "Вчера я только начал книгу и успел её ... только до сороковой страницы.",
    translation: "Ieri ho appena iniziato il libro e sono riuscito a leggerlo solo fino alla quarantesima pagina.",
    options: ["дочитать", "прочитать", "почитать", "зачитать"],
    optionBases: ["дочитать", "прочитать", "почитать", "зачитать"],
    correctIndex: 0,
    verbPair: "дочитать — дочитывать",
    correctExplanation: CHITAT_VERB_MAP["дочитать"]
  },
  {
    id: 18,
    sentence: "Медсестра так ... интересной книгой, что не заметила прихода врача.",
    translation: "L'infermiera era così assorta in un libro interessante che non si è accorta dell'arrivo del dottore.",
    options: ["зачиталась", "начиталась", "вчиталась", "считалась"],
    optionBases: ["зачитаться", "начитаться", "вчитаться", "считаться"],
    correctIndex: 0,
    verbPair: "зачитаться — зачитываться",
    correctExplanation: CHITAT_VERB_MAP["зачитываться"]
  },
  {
    id: 19,
    sentence: "На следующей неделе я иду в отпуск, вот уж тогда вдоволь ... !",
    translation: "La prossima settimana vado in vacanza, finalmente allora leggerò a sazietà!",
    options: ["начитаюсь", "зачитаюсь", "прочитаюсь", "дочитаюсь"],
    optionBases: ["начитаться", "зачитаться", "прочитаться", "дочитаться"],
    correctIndex: 0,
    verbPair: "начитаться — (SV)",
    correctExplanation: CHITAT_VERB_MAP["начитаться"]
  },
  {
    id: 20,
    sentence: "Преподаватель должен ... о проделанной научной работе на заседании кафедры.",
    translation: "Il docente deve riferire sul lavoro scientifico svolto alla riunione di dipartimento.",
    options: ["отчитаться", "зачитаться", "вчитаться", "начитаться"],
    optionBases: ["отчитаться", "зачитаться", "вчитаться", "начитаться"],
    correctIndex: 0,
    verbPair: "отчитаться — отчитываться",
    correctExplanation: CHITAT_VERB_MAP["отчитаться"]
  }
];

import { Exercise } from '../types';

export const POLNY_VERB_MAP: Record<string, string> = {
  "выполнить": "(выполнять — выполнить): significa portare a termine un compito, un ordine o una promessa (выполнить задание).",
  "исполнить": "(исполнять — исполнить): significa attuare un desiderio, un brano musicale o un dovere ufficiale (исполнить долг).",
  "исполниться": "(исполняться — исполниться): si usa per sogni che si realizzano o per l'età che avanza (мне исполнилось 20 лет).",
  "наполнить": "(наполнять — наполнить): riempire un contenitore o uno spazio con qualcosa di fisico o astratto (наполнить чашку).",
  "заполнить": "(заполнять — заполнить): riempire completamente, spesso usato per moduli o documenti (заполнить анкету).",
  "дополнить": "(дополнять — дополнить): aggiungere qualcosa per rendere più completo (дополнить рассказ).",
  "пополнить": "(пополнять — пополнить): aumentare la quantità di qualcosa di già esistente (пополнить запасы, пополнить счет).",
  "восполнить": "(восполнять — восполнить): compensare una mancanza o una lacuna (восполнить пробел в знаниях).",
  "переполнить": "(переполнять — переполнить): riempire oltre misura, superando il limite (переполнить чашу терпения).",
};

export const POLNY_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Операция по форсированию реки была ... блестяще.",
    translation: "L'operazione di forzamento del fiume è stata eseguita brillantemente.",
    options: ["выполнена", "исполнена", "заполнена", "пополнена"],
    optionBases: ["выполнить", "исполнить", "заполнить", "пополнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: POLNY_VERB_MAP["выполнить"]
  },
  {
    id: 2,
    sentence: "Актер прекрасно ... главную роль в новом спектакле.",
    translation: "L'attore ha interpretato (eseguito) magnificamente il ruolo principale nel nuovo spettacolo.",
    options: ["исполнил", "выполнил", "дополнил", "наполнил"],
    optionBases: ["исполнить", "выполнить", "дополнить", "наполнил"],
    correctIndex: 0,
    verbPair: "исполнить — исполнять",
    correctExplanation: POLNY_VERB_MAP["исполнить"]
  },
  {
    id: 3,
    sentence: "Вчера моей сестре ... двадцать лет.",
    translation: "Ieri mia sorella ha compiuto vent'anni.",
    options: ["исполнилось", "выполнилось", "наполнилось", "заполнилось"],
    optionBases: ["исполниться", "выполнить", "наполниться", "заполнить"],
    correctIndex: 0,
    verbPair: "исполниться — исполняться",
    correctExplanation: POLNY_VERB_MAP["исполниться"]
  },
  {
    id: 4,
    sentence: "Дым табака ... всю комнату.",
    translation: "Il fumo di tabacco riempiva tutta la stanza.",
    options: ["наполнял", "дополнял", "выполнял", "восполнял"],
    optionBases: ["наполнять", "дополнять", "выполнять", "восполнять"],
    correctIndex: 0,
    verbPair: "наполнить — наполнять",
    correctExplanation: POLNY_VERB_MAP["наполнить"]
  },
  {
    id: 5,
    sentence: "Пожалуйста, ... эту анкету перед входом.",
    translation: "Per favore, compili questo modulo prima di entrare.",
    options: ["заполните", "наполните", "дополните", "выполните"],
    optionBases: ["заполнить", "наполнить", "дополнить", "выполнить"],
    correctIndex: 0,
    verbPair: "заполнить — заполнять",
    correctExplanation: POLNY_VERB_MAP["заполнить"]
  },
  {
    id: 6,
    sentence: "Мы хотели ... картину свидетельствами очевидцев.",
    translation: "Volevamo completare (integrare) il quadro con le testimonianze degli oculari.",
    options: ["дополнить", "пополнить", "восполнить", "исполнить"],
    optionBases: ["дополнить", "пополнить", "восполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "дополнить — дополнять",
    correctExplanation: POLNY_VERB_MAP["дополнить"]
  },
  {
    id: 7,
    sentence: "Книги, подаренные музею, ... фонды библиотеки.",
    translation: "I libri regalati al museo hanno arricchito (rinfocolato/completato) i fondi della biblioteca.",
    options: ["пополнят", "заполнят", "наполнят", "выполнят"],
    optionBases: ["пополнить", "заполнить", "наполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "пополнить — пополнять",
    correctExplanation: POLNY_VERB_MAP["пополнить"]
  },
  {
    id: 8,
    sentence: "Студенту пришлось много заниматься, чтобы ... пробелы в знаниях.",
    translation: "Lo studente ha dovuto studiare molto per colmare le lacune nelle conoscenze.",
    options: ["восполнить", "выполнить", "исполнить", "наполнить"],
    optionBases: ["восполнить", "выполнить", "исполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "восполнить — восполнять",
    correctExplanation: POLNY_VERB_MAP["восполнить"]
  },
  {
    id: 9,
    sentence: "Неожиданное оскорбление ... чашу терпения.",
    translation: "Un insulto inaspettato ha fatto traboccare (ha riempito oltre misura) la goccia che fa traboccare il vaso.",
    options: ["переполнило", "наполнило", "заполнило", "выполнило"],
    optionBases: ["переполнить", "наполнить", "заполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "переполнить — переполнять",
    correctExplanation: POLNY_VERB_MAP["переполнить"]
  },
  {
    id: 10,
    sentence: "До того как я допишу курсовую, я не могу ... свой долг перед собой.",
    translation: "Finché non finisco la tesina, non posso adempiere al mio dovere verso me stesso (rif. выполнено/исполнено).",
    options: ["исполнить", "заполнить", "наполнить", "пополнить"],
    optionBases: ["исполнить", "заполнить", "наполнить", "пополнить"],
    correctIndex: 0,
    verbPair: "исполнить — исполнять",
    correctExplanation: POLNY_VERB_MAP["исполнить"]
  },
  {
    id: 11,
    sentence: "Зал был ... публикой, но в нем было тихо.",
    translation: "La sala era stracolma di pubblico, ma regnava il silenzio.",
    options: ["переполнен", "заполнен", "наполнен", "выполнен"],
    optionBases: ["переполнить", "заполнить", "наполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "переполнить — переполнять",
    correctExplanation: POLNY_VERB_MAP["переполнить"]
  },
  {
    id: 12,
    sentence: "Машура ... свое обещание прийти через неделю.",
    translation: "Mashura ha mantenuto (eseguito) la sua promessa di venire dopo una settimana.",
    options: ["выполнила", "исполнила", "наполнила", "дополнила"],
    optionBases: ["выполнить", "исполнить", "наполнить", "дополнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: POLNY_VERB_MAP["выполнить"]
  },
  {
    id: 13,
    sentence: "Шум мотора смолк, и салон автомобиля ... звуками музыки.",
    translation: "Il rumore del motore cessò e l'abitacolo si riempì dei suoni della musica.",
    options: ["наполнился", "исполнился", "заполнился", "выполнился"],
    optionBases: ["наполниться", "исполниться", "заполниться", "выполниться"],
    correctIndex: 0,
    verbPair: "наполниться — наполняться",
    correctExplanation: POLNY_VERB_MAP["наполнить"]
  },
  {
    id: 14,
    sentence: "Мы ... баланс телефона через терминал.",
    translation: "Abbiamo ricaricato (rimpolpato) il credito del telefono tramite il terminale.",
    options: ["пополнили", "выполнили", "заполнили", "наполнили"],
    optionBases: ["пополнить", "выполнить", "заполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "пополнить — пополнять",
    correctExplanation: POLNY_VERB_MAP["пополнить"]
  },
  {
    id: 15,
    sentence: "Его заветное желание наконец-то ... .",
    translation: "Il suo desiderio più caro si è finalmente realizzato.",
    options: ["исполнилось", "выполнилось", "наполнилось", "заполнилось"],
    optionBases: ["исполниться", "выполнить", "наполниться", "заполнить"],
    correctIndex: 0,
    verbPair: "исполниться — исполняться",
    correctExplanation: POLNY_VERB_MAP["исполниться"]
  },
  {
    id: 16,
    sentence: "Константин был убежден, что призван ... новую страницу в историю.",
    translation: "Konstantin era convinto di essere chiamato a scrivere (inserire/completare) una nuova pagina nella storia.",
    options: ["вписать", "выполнить", "исполнить", "пополнить"],
    optionBases: ["вписать", "выполнить", "исполнить", "пополнить"],
    correctIndex: 0,
    verbPair: "вписать — вписывать (rif. completo)",
    correctExplanation: "Inserire/Scrivere in un contesto storico."
  },
  {
    id: 17,
    sentence: "Чтобы успешно сдать экзамен, нужно ... все пробелы в знаниях.",
    translation: "Per superare con successo l'esame, bisogna colmare tutte le lacune nelle conoscenze.",
    options: ["восполнить", "наполнить", "заполнить", "исполнить"],
    optionBases: ["восполнить", "наполнить", "заполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "восполнить — восполнять",
    correctExplanation: POLNY_VERB_MAP["восполнить"]
  },
  {
    id: 18,
    sentence: "В конце семестра каждый студент должен ... задание.",
    translation: "Alla fine del semestre ogni studente deve portare a termine il compito.",
    options: ["выполнить", "исполнить", "наполнить", "пополнить"],
    optionBases: ["выполнить", "исполнить", "наполнить", "пополнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: POLNY_VERB_MAP["выполнить"]
  },
  {
    id: 19,
    sentence: "Ради того чтобы ... свою коллекцию, он был готов на всё.",
    translation: "Per rimpolpare (aumentare) la sua collezione, era pronto a tutto.",
    options: ["пополнить", "выполнить", "наполнить", "исполнить"],
    optionBases: ["пополнить", "выполнить", "наполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "пополнить — пополнять",
    correctExplanation: POLNY_VERB_MAP["пополнить"]
  },
  {
    id: 20,
    sentence: "Олег ... свою обязанность и ушел домой.",
    translation: "Oleg ha adempiuto al suo dovere ed è tornato a casa.",
    options: ["исполнил", "наполнил", "заполнил", "дополнил"],
    optionBases: ["исполнить", "наполнить", "заполнить", "дополнил"],
    correctIndex: 0,
    verbPair: "исполнить — исполнять",
    correctExplanation: POLNY_VERB_MAP["исполнить"]
  }
];

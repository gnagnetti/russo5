import { Exercise } from '../types';

export const JAVLYAT_VERB_MAP: Record<string, string> = {
  "являть": "(являть — явить): termine colto o arcaico per 'mostrare', 'rivelare' (spesso in senso astratto).",
  "являться": "(являться — явиться): significa presentarsi/arrivare in un luogo (явиться на работу) o, in senso formale, essere (он является директором).",
  "появляться": "(появляться — появиться): significa apparire all'improvviso, farsi vedere o nascere (появились новые возможности).",
  "предъявлять": "(предъявлять — предъявить): significa presentare documenti (предъявить паспорт) o продвигать претензии.",
  "проявлять": "(проявлять — проявить): significa mostrare qualità, sentimenti o инициатива (проявить интерес, проявить заботу).",
  "проявиться": "(проявиться — проявляться): manifestarsi, diventare visibile (особенно про качества или симптомы).",
  "выявлять": "(выявлять — выявить): significa scoprire o identificare qualcosa di nascosto (выявить ошибки, выявить таланты).",
  "объявлять": "(объявлять — объявить): significa annunciare ufficialmente (объявить войну, объявить результаты).",
  "заявлять": "(заявлять — заявить): significa dichiarare formalmente o fare un'affermazione (заявить о своих правах).",
  "изъявлять": "(изъявлять — изъявить): significa esprimere la propria volontà o desiderio (изъявить желание).",
};

export const JAVLYAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Пассажир должен был ... паспорт контролёру.",
    translation: "Il passeggero doveva esibire il passaporto al controllore.",
    options: ["предъявить", "заявить", "объявить", "проявить"],
    optionBases: ["предъявить", "заявить", "объявить", "проявить"],
    correctIndex: 0,
    verbPair: "предъявить — предъявлять",
    correctExplanation: JAVLYAT_VERB_MAP["предъявлять"]
  },
  {
    id: 2,
    sentence: "На небе внезапно ... яркие звёзды.",
    translation: "In cielo sono apparse improvvisamente delle stelle luminose.",
    options: ["проявились", "объявились", "появились", "заявились"],
    optionBases: ["проявиться", "объявиться", "появиться", "заявиться"],
    correctIndex: 2,
    verbPair: "появиться — появляться",
    correctExplanation: JAVLYAT_VERB_MAP["появляться"]
  },
  {
    id: 3,
    sentence: "По радио ... результаты выборов.",
    translation: "Alla radio hanno annunciato i risultati delle elezioni.",
    options: ["объявили", "заявили", "проявили", "предъявили"],
    optionBases: ["объявить", "заявить", "проявить", "предъявить"],
    correctIndex: 0,
    verbPair: "объявить — объявлять",
    correctExplanation: JAVLYAT_VERB_MAP["объявлять"]
  },
  {
    id: 4,
    sentence: "А.С. Пушкин ... великим русским поэтом.",
    translation: "A.S. Pushkin è (rappresenta) un grande poeta russo.",
    options: ["проявляется", "является", "объявляется", "предъявляется"],
    optionBases: ["проявляться", "являться", "объявляться", "предъявляться"],
    correctIndex: 1,
    verbPair: "являться — явиться",
    correctExplanation: JAVLYAT_VERB_MAP["являться"]
  },
  {
    id: 5,
    sentence: "Он ... большое мужество в этой ситуации.",
    translation: "Lui ha mostrato un grande coraggio in questa situazione.",
    options: ["проявил", "предъявил", "заявил", "объявил"],
    optionBases: ["проявить", "предъявить", "заявить", "объявить"],
    correctIndex: 0,
    verbPair: "проявить — проявлять",
    correctExplanation: JAVLYAT_VERB_MAP["проявлять"]
  },
  {
    id: 6,
    sentence: "Он решил ... о своих правах в суде.",
    translation: "Ha deciso di dichiarare i suoi diritti in tribunale.",
    options: ["предъявить", "проявить", "заявить", "объявить"],
    optionBases: ["предъявить", "проявить", "заявить", "объявить"],
    correctIndex: 2,
    verbPair: "заявить — заявлять",
    correctExplanation: JAVLYAT_VERB_MAP["заявлять"]
  },
  {
    id: 7,
    sentence: "Комиссия смогла ... ряд серьёзных ошибок.",
    translation: "La commissione è riuscita a identificare una serie di gravi errori.",
    options: ["выявить", "проявить", "объявить", "предъявить"],
    optionBases: ["выявить", "проявить", "объявить", "предъявить"],
    correctIndex: 0,
    verbPair: "выявить — выявлять",
    correctExplanation: JAVLYAT_VERB_MAP["выявлять"]
  },
  {
    id: 8,
    sentence: "Студент ... желание участвовать в проекте.",
    translation: "Lo studente ha espresso il desiderio di partecipare al progetto.",
    options: ["заявил", "изъявил", "объявил", "предъявил"],
    optionBases: ["заявить", "изъявить", "объявить", "предъявить"],
    correctIndex: 1,
    verbPair: "изъявить — изъявлять",
    correctExplanation: JAVLYAT_VERB_MAP["изъявлять"]
  },
  {
    id: 9,
    sentence: "Мэрия ... конкурс на лучший проект.",
    translation: "Il comune ha annunciato un concorso per il miglior progetto.",
    options: ["объявила", "изъявила", "проявила", "предъявила"],
    optionBases: ["объявить", "изъявить", "проявить", "предъявить"],
    correctIndex: 0,
    verbPair: "объявить — объявлять",
    correctExplanation: JAVLYAT_VERB_MAP["объявлять"]
  },
  {
    id: 10,
    sentence: "Он ... домой только поздней ночью.",
    translation: "Lui è tornato (si è presentato) a casa solo a notte tarda.",
    options: ["явился", "проявился", "предъявился", "заявился"],
    optionBases: ["явиться", "проявиться", "предъявиться", "заявиться"],
    correctIndex: 0,
    verbPair: "явиться — являться",
    correctExplanation: JAVLYAT_VERB_MAP["являться"]
  },
  {
    id: 11,
    sentence: "У него ... интерес к живописи ещё в ранней юности.",
    translation: "In lui si è manifestato l'interesse per la pittura già nella prima giovinezza.",
    options: ["объявился", "проявился", "заявился", "предъявился"],
    optionBases: ["объявиться", "проявиться", "заявиться", "предъявиться"],
    correctIndex: 1,
    verbPair: "проявиться — проявляться",
    correctExplanation: JAVLYAT_VERB_MAP["проявиться"]
  },
  {
    id: 12,
    sentence: "Председатель ... заседание открытым.",
    translation: "Il presidente ha dichiarato aperta la seduta.",
    options: ["объявил", "изъявил", "проявил", "предъявил"],
    optionBases: ["объявить", "изъявить", "проявить", "предъявить"],
    correctIndex: 0,
    verbPair: "объявить — объявлять",
    correctExplanation: JAVLYAT_VERB_MAP["объявлять"]
  },
  {
    id: 13,
    sentence: "В этой семье недавно ... ребёнок.",
    translation: "In questa famiglia è nato (apparso al mondo) recentemente un bambino.",
    options: ["проявился", "появился", "заявился", "изъявился"],
    optionBases: ["проявиться", "появиться", "заявиться", "изъявиться"],
    correctIndex: 1,
    verbPair: "появиться — появляться",
    correctExplanation: JAVLYAT_VERB_MAP["появляться"]
  },
  {
    id: 14,
    sentence: "Он неплохо ... себя на новой работе.",
    translation: "Lui si è mostrato bene (ha dato prova di sé) nel nuovo lavoro.",
    options: ["проявил", "объявил", "предъявил", "заявил"],
    optionBases: ["проявить", "объявить", "предъявить", "заявил"],
    correctIndex: 0,
    verbPair: "проявить себя — проявлять себя",
    correctExplanation: JAVLYAT_VERB_MAP["проявлять"]
  },
  {
    id: 15,
    sentence: "Следствие смогло ... причину аварии.",
    translation: "L'indagine è riuscita a scoprire la causa dell'incidente.",
    options: ["выявить", "проявить", "объявить", "заявить"],
    optionBases: ["выявить", "проявить", "объявить", "заявить"],
    correctIndex: 0,
    verbPair: "выявить — выявлять",
    correctExplanation: JAVLYAT_VERB_MAP["выявлять"]
  },
  {
    id: 16,
    sentence: "Спортсмен ... протест против решения судей.",
    translation: "Lo sportivo ha dichiarato una protesta contro la decisione dei giudici.",
    options: ["заявил", "предъявил", "проявил", "изъявил"],
    optionBases: ["заявить", "предъявить", "проявить", "изъявить"],
    correctIndex: 0,
    verbPair: "заявить — заявлять",
    correctExplanation: JAVLYAT_VERB_MAP["заявлять"]
  },
  {
    id: 17,
    sentence: "Я готов ... согласие на ваше предложение.",
    translation: "Sono pronto ad esprimere il consenso alla vostra proposta.",
    options: ["изъявить", "проявил", "предъявил", "объявил"],
    optionBases: ["изъявить", "проявить", "предъявить", "объявить"],
    correctIndex: 0,
    verbPair: "изъявить — изъявлять",
    correctExplanation: JAVLYAT_VERB_MAP["изъявлять"]
  },
  {
    id: 18,
    sentence: "Химик должен был ... новую фотоплёнку.",
    translation: "Il chimico doveva sviluppare il nuovo rullino fotografico.",
    options: ["проявить", "объявить", "предъявить", "заявить"],
    optionBases: ["проявить", "объявить", "предъявить", "заявить"],
    correctIndex: 0,
    verbPair: "проявить — проявлять",
    correctExplanation: JAVLYAT_VERB_MAP["проявлять"]
  },
  {
    id: 19,
    sentence: "Кто на данный момент ... директором школы?",
    translation: "Chi è attualmente il direttore della scuola?",
    options: ["является", "объявляется", "проявляется", "предъявляется"],
    optionBases: ["являться", "объявляться", "проявляться", "предъявляться"],
    correctIndex: 0,
    verbPair: "являться — явиться",
    correctExplanation: JAVLYAT_VERB_MAP["являться"]
  },
  {
    id: 20,
    sentence: "Свидетель обязан ... в суд для показаний.",
    translation: "Il testimone è obbligato a presentarsi in tribunale per la testimonianza.",
    options: ["явиться", "проявиться", "предъявиться", "заявиться"],
    optionBases: ["явиться", "проявиться", "предъявиться", "заявиться"],
    correctIndex: 0,
    verbPair: "явиться — являться",
    correctExplanation: JAVLYAT_VERB_MAP["являться"]
  }
];

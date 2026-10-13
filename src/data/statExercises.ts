import { Exercise } from '../types';

export const STAT_VERB_MAP: Record<string, string> = {
  "стать": "(становиться — стать): significa diventare (кем-то), mettersi in una posizione (стать в очередь) o iniziare un'azione (стать работать).",
  "встать": "(вставать — встать): alzarsi in piedi (встать с кровати) o sorgere (солнце встало).",
  "восстать": "(восставать — восстать): insorgere, ribellarsi contro qualcosa o qualcuno (восстать против царизма).",
  "достать": "(доставать — достать): prendere qualcosa da lontano, estrarre (достать книгу из сумки) o riuscire a ottenere con fatica.",
  "достаться": "(доставаться — достаться): toccare in sorte, capitare a qualcuno (ему достался легкий билет) o meritarsi un rimprovero.",
  "застать": "(заставать — застать): trovare qualcuno in un luogo o in un certo stato, sorprendere (застать дома, дождь застал нас).",
  "остаться": "(оставаться — остаться): restare in un luogo o rimanere in una certa condizione (остаться дома, остаться сиротой).",
  "настать": "(наставать — настать): sopraggiungere, iniziare (detto di tempo o eventi: настало лето).",
  "отстать": "(отставать — отстать): rimanere indietro (в учебе), essere meno avanzato o smettere di infastidire (отстань!).",
  "пристать": "(приставать — пристать): attaccarsi a qualcosa, importunare qualcuno (пристать с вопросами) o accostare (о судне).",
  "перестать": "(переставать — перестать): cessare un'azione, smettere di fare qualcosa (перестать плакать).",
  "расстаться": "(расставаться — расстаться): separarsi, dirsi addio (расстаться с друзьями) o privarsi di qualcosa.",
};

export const STAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "На экзамене студенту ... лёгкий билет.",
    translation: "All'esame allo studente è toccato in sorte un biglietto facile.",
    options: ["достался", "стал", "застал", "остался"],
    optionBases: ["достаться", "стать", "застать", "остаться"],
    correctIndex: 0,
    verbPair: "достаться — доставаться",
    correctExplanation: STAT_VERB_MAP["достаться"]
  },
  {
    id: 2,
    sentence: "Он ... в очередь и начал ждать.",
    translation: "Si è messo in fila e ha iniziato ad aspettare.",
    options: ["стал", "встал", "пристал", "остался"],
    optionBases: ["стать", "встать", "пристать", "остаться"],
    correctIndex: 0,
    verbPair: "стать — становиться",
    correctExplanation: STAT_VERB_MAP["стать"]
  },
  {
    id: 3,
    sentence: "Липа ... из узелка кусок пирога и подала ему.",
    translation: "Lipa estrasse dal fazzoletto un pezzo di torta e glielo diede.",
    options: ["достала", "стала", "застала", "осталась"],
    optionBases: ["достать", "стать", "застать", "остаться"],
    correctIndex: 0,
    verbPair: "достать — доставать",
    correctExplanation: STAT_VERB_MAP["достать"]
  },
  {
    id: 4,
    sentence: "Я несколько раз звонил тебе, но не ... тебя дома.",
    translation: "Ti ho chiamato diverse volte, ma non ti ho trovato in casa.",
    options: ["застал", "остался", "настал", "пристал"],
    optionBases: ["застать", "остаться", "настать", "пристать"],
    correctIndex: 0,
    verbPair: "застать — заставать",
    correctExplanation: STAT_VERB_MAP["застать"]
  },
  {
    id: 5,
    sentence: "До отъезда поезда ... пять минут.",
    translation: "Alla partenza del treno restavano (rimanevano) cinque minuti.",
    options: ["оставалось", "доставалось", "наставало", "вставало"],
    optionBases: ["оставаться", "доставаться", "наставать", "вставать"],
    correctIndex: 0,
    verbPair: "остаться — оставаться",
    correctExplanation: STAT_VERB_MAP["остаться"]
  },
  {
    id: 6,
    sentence: "Наконец ... долгожданное лето.",
    translation: "Finalmente è arrivata la tanto attesa estate.",
    options: ["настало", "стало", "встало", "достало"],
    optionBases: ["настать", "стать", "встать", "достать"],
    correctIndex: 0,
    verbPair: "настать — наставать",
    correctExplanation: STAT_VERB_MAP["настать"]
  },
  {
    id: 7,
    sentence: "Пора вам уже ... , уже поздно.",
    translation: "È ora che vi alziate, è già tardi.",
    options: ["вставать", "становиться", "доставать", "приставать"],
    optionBases: ["вставать", "становиться", "доставать", "приставать"],
    correctIndex: 0,
    verbPair: "встать — вставать",
    correctExplanation: STAT_VERB_MAP["встать"]
  },
  {
    id: 8,
    sentence: "В последний год учебы он начал ... по математике.",
    translation: "Nell'ultimo anno di scuola ha iniziato a rimanere indietro in matematica.",
    options: ["отставать", "приставать", "вставать", "переставать"],
    optionBases: ["отставать", "приставать", "вставать", "переставать"],
    correctIndex: 0,
    verbPair: "отстать — отставать",
    correctExplanation: STAT_VERB_MAP["отстать"]
  },
  {
    id: 9,
    sentence: "Хулиганы начали ... к прохожим на улице.",
    translation: "I teppisti hanno iniziato a importunare (molestare) i passanti per strada.",
    options: ["приставать", "отставать", "вставать", "расставаться"],
    optionBases: ["приставать", "отставать", "вставать", "расставаться"],
    correctIndex: 0,
    verbPair: "пристать — приставать",
    correctExplanation: STAT_VERB_MAP["пристать"]
  },
  {
    id: 10,
    sentence: "Ребёнок вдруг ... плакать и улыбнулся.",
    translation: "Il bambino ha smesso improvvisamente di piangere e ha sorriso.",
    options: ["перестал", "остался", "застал", "настал"],
    optionBases: ["перестать", "остаться", "застать", "настать"],
    correctIndex: 0,
    verbPair: "перестать — переставать",
    correctExplanation: STAT_VERB_MAP["перестать"]
  },
  {
    id: 11,
    sentence: "На вокзале друзья тепло ... друг с другом.",
    translation: "Alla stazione gli amici si sono salutati (separati) calorosamente.",
    options: ["расстались", "остались", "пристали", "встали"],
    optionBases: ["расстаться", "остаться", "пристать", "встать"],
    correctIndex: 0,
    verbPair: "расстаться — расставаться",
    correctExplanation: STAT_VERB_MAP["расстаться"]
  },
  {
    id: 12,
    sentence: "Крестьяне ... против угнетения.",
    translation: "I contadini insorsero contro l'oppressione.",
    options: ["восстали", "встали", "настали", "застали"],
    optionBases: ["восстать", "встать", "настать", "застать"],
    correctIndex: 0,
    verbPair: "восстать — восставать",
    correctExplanation: STAT_VERB_MAP["восстать"]
  },
  {
    id: 13,
    sentence: "С каждым днем его лицо ... всё печальнее.",
    translation: "Ogni giorno che passava il suo viso diventava sempre più triste.",
    options: ["становилось", "оставалось", "отставало", "заставало"],
    optionBases: ["становиться", "оставаться", "отставать", "заставать"],
    correctIndex: 0,
    verbPair: "стать — становиться",
    correctExplanation: STAT_VERB_MAP["стать"]
  },
  {
    id: 14,
    sentence: "Вчера всем ... от директора за опоздание.",
    translation: "Ieri tutti hanno ricevuto (è toccata a tutti) una sgridata dal direttore per il ritardo.",
    options: ["досталось", "настало", "встало", "застало"],
    optionBases: ["достаться", "настать", "встать", "застать"],
    correctIndex: 0,
    verbPair: "достаться — доставаться",
    correctExplanation: STAT_VERB_MAP["достаться"]
  },
  {
    id: 15,
    sentence: "Солнечный восход ... нас в горах.",
    translation: "L'alba ci ha sorpreso tra le montagne.",
    options: ["застал", "настал", "достал", "встал"],
    optionBases: ["застать", "настать", "достать", "встать"],
    correctIndex: 0,
    verbPair: "застать — заставать",
    correctExplanation: STAT_VERB_MAP["застать"]
  },
  {
    id: 16,
    sentence: "Став знаменитым писателем, он ... скромным человеком.",
    translation: "Pur essendo diventato un celebre scrittore, è rimasto una persona modesta.",
    options: ["остался", "застал", "настал", "пристал"],
    optionBases: ["остаться", "застать", "настать", "пристать"],
    correctIndex: 0,
    verbPair: "остаться — оставаться",
    correctExplanation: STAT_VERB_MAP["остаться"]
  },
  {
    id: 17,
    sentence: "Мальчик во всём подражал брату, даже ... так же, как он.",
    translation: "Il bambino imitava in tutto il fratello, perfino alzandosi (stando) come lui (rif. вставал/стал/подражал).",
    options: ["вставал", "приставал", "отставал", "заставал"],
    optionBases: ["вставать", "приставать", "отставать", "заставать"],
    correctIndex: 0,
    verbPair: "встать — вставать",
    correctExplanation: STAT_VERB_MAP["встать"]
  },
  {
    id: 18,
    sentence: "Дождь внезапно ... , и вышло солнце.",
    translation: "La pioggia cessò improvvisamente e spuntò il sole.",
    options: ["перестал", "настал", "остался", "достался"],
    optionBases: ["перестать", "настать", "остаться", "достаться"],
    correctIndex: 0,
    verbPair: "перестать — переставать",
    correctExplanation: STAT_VERB_MAP["перестать"]
  },
  {
    id: 19,
    sentence: "В это время года рано ... сумерки.",
    translation: "In questo periodo dell'anno l'oscurità (il crepuscolo) scende presto.",
    options: ["настают", "встают", "отстают", "пристают"],
    optionBases: ["наставать", "вставать", "отставать", "приставать"],
    correctIndex: 0,
    verbPair: "настать — наставать",
    correctExplanation: STAT_VERB_MAP["настать"]
  },
  {
    id: 20,
    sentence: "Ему не хотелось ... со своими старыми вещами.",
    translation: "Non voleva separarsi (disfarsi) delle sue vecchie cose.",
    options: ["расставаться", "оставаться", "приставать", "вставать"],
    optionBases: ["расставаться", "оставаться", "приставать", "вставать"],
    correctIndex: 0,
    verbPair: "расстаться — расставаться",
    correctExplanation: STAT_VERB_MAP["расстаться"]
  }
];

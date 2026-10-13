import { Exercise } from '../types';

export const BROSAT_VERB_MAP: Record<string, string> = {
  "бросать": "(бросать — бросить): lanciare (камень), smettere un'abitudine (бросить курить) o lasciare qualcuno.",
  "броситься": "(бросаться — броситься): gettarsi (в воду), precipitarsi (в погоню) o aggredire qualcuno.",
  "выбросить": "(выбрасывать — выбросить): buttare via (мусор), eliminare dalla testa (из головы).",
  "забросить": "(забрасывать — забросить): lanciare lontano, abbandonare o trascurare (забросить учёбу).",
  "забросать": "(забрасывать — забросать): coprire lanciando molti oggetti (забросать вопросами, забросать камнями).",
  "набросить": "(набрасывать — набросить): buttarsi sulle spalle (пальто), socchiudere una porta.",
  "набросать": "(набрасывать — набросать): tracciare a grandi linee, abbozzare (набросать план).",
  "наброситься": "(набрасываться — наброситься): avventarsi con avidità o rabbia (наброситься на еду).",
  "отбросить": "(отбрасывать — отбросить): respingere (врага), gettare lontano o scartare un'idea.",
  "перебросить": "(перебрасывать — перебросить): lanciare oltre (через забор), trasferire truppe o risorse.",
  "разбросать": "(разбрасывать — разбросать): sparpagliare in disordine (вещи по комнате).",
  "разбросаться": "(разбрасываться — разбросаться): disperdere le proprie energie in troppe cose.",
  "сбросить": "(сбрасывать — сбросить): gettare giù, perdere peso (сбросить лишний вес) o togliere (сбросить халат).",
};

export const BROSAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мальчик ... камень в воду.",
    translation: "Il bambino ha lanciato un sasso nell'acqua.",
    options: ["бросил", "забросил", "выбросил", "набросил"],
    optionBases: ["бросить", "забросить", "выбросить", "набросить"],
    correctIndex: 0,
    verbPair: "бросить — бросать",
    correctExplanation: BROSAT_VERB_MAP["бросать"]
  },
  {
    id: 2,
    sentence: "Пожалуйста, ... этот мусор в урну.",
    translation: "Per favore, butta questa spazzatura nel cestino.",
    options: ["выбросьте", "сбросьте", "забросьте", "набросьте"],
    optionBases: ["выбросить", "сбросить", "забросить", "набросить"],
    correctIndex: 0,
    verbPair: "выбросить — выбрасывать",
    correctExplanation: BROSAT_VERB_MAP["выбросить"]
  },
  {
    id: 3,
    sentence: "Из-за болезни мне пришлось ... институт на год.",
    translation: "A causa della malattia ho dovuto trascurare (abbandonare temporaneamente) l'istituto per un anno.",
    options: ["забросить", "выбросить", "перебросить", "набросить"],
    optionBases: ["забросить", "выбросить", "перебросить", "набросить"],
    correctIndex: 0,
    verbPair: "забросить — забрасывать",
    correctExplanation: BROSAT_VERB_MAP["забросить"]
  },
  {
    id: 4,
    sentence: "Услышав звонок, она ... к телефону.",
    translation: "Sentendo lo squillo, si è precipitata al telefono.",
    options: ["бросилась", "набросилась", "выбросилась", "разбросалась"],
    optionBases: ["броситься", "наброситься", "выброситься", "разбросаться"],
    correctIndex: 0,
    verbPair: "броситься — бросаться",
    correctExplanation: BROSAT_VERB_MAP["броситься"]
  },
  {
    id: 5,
    sentence: "Художник быстро ... эскиз будущей картины.",
    translation: "L'artista ha abbozzato velocemente lo schizzo del futuro quadro.",
    options: ["набросал", "забросал", "разбросал", "сбросал"],
    optionBases: ["набросать", "забросать", "разбросать", "сбросать"],
    correctIndex: 0,
    verbPair: "набросать — набрасывать",
    correctExplanation: BROSAT_VERB_MAP["набросать"]
  },
  {
    id: 6,
    sentence: "Пассажиры ... лишний груз, чтобы корабль не затонул.",
    translation: "I passeggeri hanno buttato giù il carico superfluo perché la nave non affondasse.",
    options: ["сбросили", "выбросили", "отбросили", "перебросили"],
    optionBases: ["сбросить", "выбросить", "отбросить", "перебросить"],
    correctIndex: 0,
    verbPair: "сбросить — сбрасывать",
    correctExplanation: BROSAT_VERB_MAP["сбросить"]
  },
  {
    id: 7,
    sentence: "Зрители ... сцену цветами после выступления.",
    translation: "Gli spettatori hanno inondato (coperto lanciando) il palco di fiori dopo l'esibizione.",
    options: ["забросали", "набросали", "разбросали", "сбросали"],
    optionBases: ["забросать", "набросать", "разбросать", "сбросать"],
    correctIndex: 0,
    verbPair: "забросать — забрасывать",
    correctExplanation: BROSAT_VERB_MAP["забросать"]
  },
  {
    id: 8,
    sentence: "Он ... курить два года назад.",
    translation: "Ha smesso di fumare due anni fa.",
    options: ["бросил", "выбросил", "забросил", "отбросил"],
    optionBases: ["бросить", "выбросить", "забросить", "отбросить"],
    correctIndex: 0,
    verbPair: "бросить — бросать",
    correctExplanation: "Smettere un'abitudine."
  },
  {
    id: 9,
    sentence: "Голодный человек сразу ... на еду.",
    translation: "L'uomo affamato si è avventato subito sul cibo.",
    options: ["набросился", "бросился", "забросился", "разбросался"],
    optionBases: ["наброситься", "броситься", "заброситься", "разбросаться"],
    correctIndex: 0,
    verbPair: "наброситься — набрасываться",
    correctExplanation: BROSAT_VERB_MAP["наброситься"]
  },
  {
    id: 10,
    sentence: "Ветер ... лодку далеко от берега.",
    translation: "Il vento ha spinto (lanciato lontano) la barca lontano dalla riva.",
    options: ["отбросил", "выбросил", "сбросил", "набросил"],
    optionBases: ["отбросить", "выбросить", "сбросить", "набросить"],
    correctIndex: 0,
    verbPair: "отбросить — отбрасывать",
    correctExplanation: BROSAT_VERB_MAP["отбросить"]
  },
  {
    id: 11,
    sentence: "Дети ... свои игрушки по всей комнате.",
    translation: "I bambini hanno sparpagliato i loro giocattoli per tutta la stanza.",
    options: ["разбросали", "забросали", "набросали", "выбросали"],
    optionBases: ["разбросать", "забросать", "набросать", "выбросить"],
    correctIndex: 0,
    verbPair: "разбросать — разбрасывать",
    correctExplanation: BROSAT_VERB_MAP["разбросать"]
  },
  {
    id: 12,
    sentence: "Командование решило ... десант в тыл врага.",
    translation: "Il comando ha deciso di paracadutare (trasferire lanciando) i reparti speciali dietro le linee nemiche.",
    options: ["перебросить", "набросить", "забросить", "выбросить"],
    optionBases: ["перебросить", "набросить", "забросить", "выбросить"],
    correctIndex: 0,
    verbPair: "перебросить — перебрасывать",
    correctExplanation: BROSAT_VERB_MAP["перебросить"]
  },
  {
    id: 13,
    sentence: "Она ... на плечи накидку и вышла во двор.",
    translation: "Si è buttata sulle spalle il mantello ed è uscita in cortile.",
    options: ["набросила", "сбросила", "выбросила", "забросила"],
    optionBases: ["набросить", "сбросить", "выбросить", "забросить"],
    correctIndex: 0,
    verbPair: "набросить — набрасывать",
    correctExplanation: BROSAT_VERB_MAP["набросить"]
  },
  {
    id: 14,
    sentence: "Тебе пора ... эту глупую мысль из головы.",
    translation: "È ora che tu ti tolga (butti via) questo pensiero stupido dalla testa.",
    options: ["выбросить", "сбросить", "отбросить", "забросить"],
    optionBases: ["выбросить", "сбросить", "отбросить", "забросить"],
    correctIndex: 0,
    verbPair: "выбросить — выбрасывать",
    correctExplanation: BROSAT_VERB_MAP["выбросить"]
  },
  {
    id: 15,
    sentence: "Чтобы похудеть, ей пришлось ... пять килограммов.",
    translation: "Per dimagrire, ha dovuto perdere (buttar giù) cinque chili.",
    options: ["сбросить", "выбросить", "перебросить", "отбросить"],
    optionBases: ["сбросить", "выбросить", "перебросить", "отбросить"],
    correctIndex: 0,
    verbPair: "сбросить — сбрасывать",
    correctExplanation: BROSAT_VERB_MAP["сбросить"]
  },
  {
    id: 16,
    sentence: "Жизнь ... нас по разным странам.",
    translation: "La vita ci ha sparpagliati per paesi diversi.",
    options: ["раскидала", "забросила", "разбросала", "выбросила"],
    optionBases: ["раскидать", "забросить", "разбросать", "выбросить"],
    correctIndex: 2,
    verbPair: "разбросать — разбрасывать",
    correctExplanation: "Sparpagliare in senso figurato (persone)."
  },
  {
    id: 17,
    sentence: "Не стоит ... , старайся закончить одно дело.",
    translation: "Non dovresti disperdere le tue energie (sparpagliarti), cerca di finire una cosa sola.",
    options: ["разбрасываться", "бросаться", "наброситься", "заброситься"],
    optionBases: ["разбрасываться", "бросаться", "наброситься", "заброситься"],
    correctIndex: 0,
    verbPair: "разбрасываться",
    correctExplanation: BROSAT_VERB_MAP["разбросаться"]
  },
  {
    id: 18,
    sentence: "Во время шторма океан ... на берег много водорослей.",
    translation: "Durante la tempesta l'oceano ha gettato sulla riva molte alghe.",
    options: ["выбросил", "отбросил", "забросил", "набросил"],
    optionBases: ["выбросил", "отбросил", "забросил", "набросил"],
    correctIndex: 0,
    verbPair: "выбросить — выбрасывать",
    correctExplanation: "Gettare sulla riva (detto dell'acqua)."
  },
  {
    id: 19,
    sentence: "Он ... в погоню за преступником.",
    translation: "Si è lanciato all'inseguimento del criminale.",
    options: ["пустился", "бросился", "набросился", "забросился"],
    optionBases: ["пуститься", "броситься", "наброситься", "заброситься"],
    correctIndex: 1,
    verbPair: "броситься — бросаться",
    correctExplanation: BROSAT_VERB_MAP["броситься"]
  },
  {
    id: 20,
    sentence: "Давай ... по десять рублей и купим подарок.",
    translation: "Mettiamo assieme (lanciamo insieme/colletta) dieci rubli a testa e compriamo un regalo.",
    options: ["сбросимся", "разбросимся", "набросимся", "забросимся"],
    optionBases: ["сброситься", "разброситься", "наброситься", "заброситься"],
    correctIndex: 0,
    verbPair: "сброситься — сбрасываться",
    correctExplanation: "Fare una colletta."
  }
];

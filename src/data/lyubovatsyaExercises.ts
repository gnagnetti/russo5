import { Exercise } from '../types';

export const LYUBOVATSYA_VERB_MAP: Record<string, string> = {
  "любоваться": "(полюбоваться — любоваться): significa ammirare con piacere visivo qualcosa di bello (любоваться закатом, любоваться видом). Richiede lo strumentale.",
  "восхищаться": "(восхититься — восхищаться): significa provare grande ammirazione o entusiasmo per qualcuno o qualcosa (восхищаться талантом, восхищаться мужеством). Richiede lo strumentale.",
  "наслаждаться": "(насладиться — наслаждаться): significa godere pienamente di qualcosa, provare piacere (наслаждаться музыкой, наслаждаться тишиной). Richiede lo strumentale.",
  "ценить": "(оценить — ценить): significa apprezzare il valore di qualcosa o qualcuno, dare importanza (ценить дружбу, ценить время). Richiede l'accusativo.",
  "обожать": "significa adorare, amare perdutamente (обожать мороженое, обожать свою работу).",
  "увлекаться": "(увлечься — увлекаться): essere appassionato di qualcosa, avere un hobby (увлекаться футболом, увлекаться живописью). Richiede lo strumentale.",
  "гордиться": "essere orgogliosi di qualcuno o qualcosa (гордиться успехами, гордиться сыном). Richiede lo strumentale.",
  "радоваться": "(порадоваться — радоваться): rallegrarsi di qualcosa (радоваться подарку). Richiede il dativo.",
  "преклоняться": "inchinarsi, venerare o ammirare profondamente (преклоняться перед героями).",
  "брезговать": "disdegnare, provare schifo (antonimo di apprezzamento).",
  "оценить": "valutare o stimare il valore (mettere un prezzo o un voto)."
};

export const LYUBOVATSYA_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мы долго стояли на берегу и ... закатом.",
    translation: "Siamo rimasti a lungo sulla riva ad ammirare il tramonto.",
    options: ["любовались", "восхищались", "наслаждались", "ценились"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любоваться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 2,
    sentence: "Я искренне ... вашим талантом и трудолюбием.",
    translation: "Ammiro sinceramente il vostro talento e la vostra operosità.",
    options: ["восхищаюсь", "любуюсь", "наслаждаюсь", "ценюсь"],
    optionBases: ["восхищаться", "любоваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "восхищаться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["восхищаться"]
  },
  {
    id: 3,
    sentence: "В отпуске мы просто ... тишиной и спокойствием.",
    translation: "In vacanza ci siamo semplicemente goduti il silenzio e la tranquillità.",
    options: ["наслаждались", "любовались", "восхищались", "ценились"],
    optionBases: ["наслаждаться", "любоваться", "восхищаться", "ценить"],
    correctIndex: 0,
    verbPair: "наслаждаться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["наслаждаться"]
  },
  {
    id: 4,
    sentence: "Очень важно уметь ... каждый момент жизни.",
    translation: "È molto importante saper apprezzare ogni momento della vita.",
    options: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    optionBases: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: LYUBOVATSYA_VERB_MAP["ценить"]
  },
  {
    id: 5,
    sentence: "Моя сестра просто ... французские десерты.",
    translation: "Mia sorella adora semplicemente i dessert francesi.",
    options: ["обожает", "любуется", "наслаждается", "ценится"],
    optionBases: ["обожать", "любоваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "обожать",
    correctExplanation: LYUBOVATSYA_VERB_MAP["обожать"]
  },
  {
    id: 6,
    sentence: "Отец очень ... своими детьми.",
    translation: "Il padre è molto orgoglioso dei suoi figli.",
    options: ["гордится", "восхищается", "любуется", "наслаждается"],
    optionBases: ["гордиться", "восхищаться", "любоваться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "гордиться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["гордиться"]
  },
  {
    id: 7,
    sentence: "В детстве я ... коллекционированием марок.",
    translation: "Da bambino ero appassionato di collezionismo di francobolli.",
    options: ["увлекался", "любовался", "восхищался", "наслаждался"],
    optionBases: ["увлекаться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "увлекаться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["увлекаться"]
  },
  {
    id: 8,
    sentence: "Мы все искренне ... его успехам.",
    translation: "Tutti noi ci rallegriamo sinceramente dei suoi successi.",
    options: ["радуемся", "любуемся", "восхищаемся", "наслаждаемся"],
    optionBases: ["радоваться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "радоваться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["радоваться"]
  },
  {
    id: 9,
    sentence: "Весь мир ... мужеством этого народа.",
    translation: "Tutto il mondo ammira (prova entusiasmo per) il coraggio di questo popolo.",
    options: ["восхищается", "любуется", "наслаждается", "ценится"],
    optionBases: ["восхищаться", "любоваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "восхищается",
    correctExplanation: LYUBOVATSYA_VERB_MAP["восхищаться"]
  },
  {
    id: 10,
    sentence: "Он может часами ... на картины в галерее.",
    translation: "Può passare ore ad ammirare (guardare con piacere) i quadri nella galleria.",
    options: ["любоваться", "восхищаться", "наслаждаться", "цениться"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любоваться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 11,
    sentence: "Я ... тем, что работаю в этой компании.",
    translation: "Sono orgoglioso di lavorare in questa azienda.",
    options: ["горжусь", "восхищаюсь", "любуюсь", "наслаждаюсь"],
    optionBases: ["гордиться", "восхищаться", "любоваться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "гордиться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["гордиться"]
  },
  {
    id: 12,
    sentence: "Мы ... классической музыкой в филармонии.",
    translation: "Ci siamo goduti la musica classica alla filarmonica.",
    options: ["наслаждались", "любовались", "восхищались", "ценились"],
    optionBases: ["наслаждаться", "любоваться", "восхищаться", "ценить"],
    correctIndex: 0,
    verbPair: "наслаждаться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["наслаждаться"]
  },
  {
    id: 13,
    sentence: "Ты должен ... своё время и не тратить его впустую.",
    translation: "Devi apprezzare (dare valore a) il tuo tempo e non sprecarlo.",
    options: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    optionBases: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: LYUBOVATSYA_VERB_MAP["ценить"]
  },
  {
    id: 14,
    sentence: "Она ... творчеством этого поэта с ранних лет.",
    translation: "È appassionata dell'opera di questo poeta fin da piccola.",
    options: ["увлекается", "любуется", "восхищается", "наслаждается"],
    optionBases: ["увлекаться", "люboваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "увлекается",
    correctExplanation: LYUBOVATSYA_VERB_MAP["увлекаться"]
  },
  {
    id: 15,
    sentence: "Дети ... первому снегу.",
    translation: "I bambini si rallegrano della prima neve.",
    options: ["радуются", "любуются", "восхищаются", "наслаждаются"],
    optionBases: ["радоваться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "радоваться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["радоваться"]
  },
  {
    id: 16,
    sentence: "Люди всегда будут ... перед талантом гениев.",
    translation: "Le persone si inchineranno (venereranno) sempre davanti al talento dei geni.",
    options: ["преклоняться", "любоваться", "восхищаться", "наслаждаться"],
    optionBases: ["преклоняться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "преклоняться",
    correctExplanation: LYUBOVATSYA_VERB_MAP["преклоняться"]
  },
  {
    id: 17,
    sentence: "Она ... старинными украшениями своей бабушки.",
    translation: "Lei ammira (con piacere visivo) gli antichi gioielli di sua nonna.",
    options: ["любуется", "восхищается", "наслаждается", "ценится"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любуется",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 18,
    sentence: "Я ... вашим умением находить выход из любой ситуации.",
    translation: "Ammiro (provo grande stima per) la vostra capacità di trovare una via d'uscita da ogni situazione.",
    options: ["восхищаюсь", "любуюсь", "наслаждаюсь", "ценюсь"],
    optionBases: ["восхищаться", "люboваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "восхищаюсь",
    correctExplanation: LYUBOVATSYA_VERB_MAP["восхищаться"]
  },
  {
    id: 19,
    sentence: "Мы ... каждой минутой нашего путешествия.",
    translation: "Ci godiamo ogni minuto del nostro viaggio.",
    options: ["наслаждаемся", "любуемся", "восхищаемся", "ценимся"],
    optionBases: ["наслаждаться", "любоваться", "восхищаться", "ценить"],
    correctIndex: 0,
    verbPair: "наслаждаемся",
    correctExplanation: LYUBOVATSYA_VERB_MAP["наслаждаться"]
  },
  {
    id: 20,
    sentence: "Друзья всегда ... поддержку и внимание.",
    translation: "Gli amici apprezzano sempre il supporto e l'attenzione.",
    options: ["ценят", "любуются", "восхищаются", "наслаждаются"],
    optionBases: ["ценить", "люboваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "ценят",
    correctExplanation: LYUBOVATSYA_VERB_MAP["ценить"]
  },
  {
    id: 21,
    sentence: "Вечерами мы ... на огни ночного города.",
    translation: "La sera ammiriamo (con gli occhi) le luci della città notturna.",
    options: ["любуемся", "восхищаемся", "наслаждаемся", "ценимся"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любуемся",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 22,
    sentence: "Он ... своей коллекцией редких книг.",
    translation: "Lui è orgoglioso della sua collezione di libri rari.",
    options: ["гордится", "восхищается", "любуется", "наслаждается"],
    optionBases: ["гордиться", "восхищаться", "любоваться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "гордится",
    correctExplanation: LYUBOVATSYA_VERB_MAP["гордиться"]
  },
  {
    id: 23,
    sentence: "Многие студенты ... изучением иностранных языков.",
    translation: "Molti studenti sono appassionati dello studio delle lingue straniere.",
    options: ["увлекаются", "любуются", "восхищаются", "наслаждаются"],
    optionBases: ["увлекаться", "люboваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "увлекаются",
    correctExplanation: LYUBOVATSYA_VERB_MAP["увлекаться"]
  },
  {
    id: 24,
    sentence: "Мы ... встрече со старыми знакомыми.",
    translation: "Ci rallegriamo dell'incontro con vecchi conoscenti.",
    options: ["радуемся", "любуемся", "восхищаемся", "наслаждаемся"],
    optionBases: ["радоваться", "люboваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "радуемся",
    correctExplanation: LYUBOVATSYA_VERB_MAP["радоваться"]
  },
  {
    id: 25,
    sentence: "Публика долго ... выступлением артистов.",
    translation: "Il pubblico ha ammirato (provato entusiasmo) a lungo la performance degli artisti.",
    options: ["восхищалась", "любовалась", "наслаждалась", "ценилась"],
    optionBases: ["восхищаться", "люboваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "восхищалась",
    correctExplanation: LYUBOVATSYA_VERB_MAP["восхищаться"]
  },
  {
    id: 26,
    sentence: "Она ... своим новым платьем в зеркале.",
    translation: "Ammina il suo nuovo vestito allo specchio.",
    options: ["любуется", "восхищается", "наслаждается", "ценится"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любуется",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 27,
    sentence: "Я ... этой уникальной возможностью.",
    translation: "Mi godo (traggo piacere da) questa opportunità unica.",
    options: ["наслаждаюсь", "любуюсь", "восхищаюсь", "ценюсь"],
    optionBases: ["наслаждаться", "люboваться", "восхищаться", "ценить"],
    correctIndex: 0,
    verbPair: "наслаждаюсь",
    correctExplanation: LYUBOVATSYA_VERB_MAP["наслаждаться"]
  },
  {
    id: 28,
    sentence: "Руководство очень ... лояльность сотрудников.",
    translation: "La direzione apprezza molto la lealtà dei dipendenti.",
    options: ["ценит", "любуется", "восхищается", "наслаждается"],
    optionBases: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "ценит",
    correctExplanation: LYUBOVATSYA_VERB_MAP["ценить"]
  },
  {
    id: 29,
    sentence: "В этой стране люди ... перед старшими.",
    translation: "In questo paese le persone si inchinano (mostrano profonda venerazione) davanti agli anziani.",
    options: ["преклоняются", "любуются", "восхищаются", "наслаждаются"],
    optionBases: ["преклоняться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "преклоняются",
    correctExplanation: LYUBOVATSYA_VERB_MAP["преклоняться"]
  },
  {
    id: 30,
    sentence: "Он ... своей принадлежностью к древнему роду.",
    translation: "Lui è orgoglioso della sua appartenenza a un antico casato.",
    options: ["гордится", "восхищается", "любуется", "наслаждается"],
    optionBases: ["гордиться", "восхищаться", "любоваться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "гордится",
    correctExplanation: LYUBOVATSYA_VERB_MAP["гордиться"]
  },
  {
    id: 31,
    sentence: "Мы ... утренней прохладой в саду.",
    translation: "Ci siamo goduti la fresca brezza mattutina nel giardino.",
    options: ["наслаждались", "любовались", "восхищались", "ценились"],
    optionBases: ["наслаждаться", "любоваться", "восхищаться", "ценить"],
    correctIndex: 0,
    verbPair: "наслаждались",
    correctExplanation: LYUBOVATSYA_VERB_MAP["наслаждаться"]
  },
  {
    id: 32,
    sentence: "Туристы ... видом с Эйфелевой башни.",
    translation: "I turisti ammirano (con gli occhi) la vista dalla Torre Eiffel.",
    options: ["любуются", "восхищаются", "наслаждаются", "ценимся"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любуются",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 33,
    sentence: "Я ... вашей добротой и щедростью.",
    translation: "Ammiro (provo grande stima per) la vostra bontà e generosità.",
    options: ["восхищаюсь", "любуюсь", "наслаждаюсь", "ценюсь"],
    optionBases: ["восхищаться", "люboваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "восхищаюсь",
    correctExplanation: LYUBOVATSYA_VERB_MAP["восхищаться"]
  },
  {
    id: 34,
    sentence: "Она ... спортивными танцами с пяти лет.",
    translation: "È appassionata di danza sportiva da quando aveva cinque anni.",
    options: ["увлекается", "любуется", "восхищается", "наслаждается"],
    optionBases: ["увлекаться", "люboваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "увлекается",
    correctExplanation: LYUBOVATSYA_VERB_MAP["увлекаться"]
  },
  {
    id: 35,
    sentence: "Вы должны ... свою репутацию.",
    translation: "Dovete tenere in gran conto (apprezzare/dare valore a) la vostra reputazione.",
    options: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    optionBases: ["ценить", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: LYUBOVATSYA_VERB_MAP["ценить"]
  },
  {
    id: 36,
    sentence: "Девочка радостно ... новой кукле.",
    translation: "La bambina si rallegra allegramente della nuova bambola.",
    options: ["радуется", "любуется", "восхищается", "наслаждается"],
    optionBases: ["радоваться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "радуется",
    correctExplanation: LYUBOVATSYA_VERB_MAP["радоваться"]
  },
  {
    id: 37,
    sentence: "Мы ... архитектурой этого древнего города.",
    translation: "Ammiriamo (con gli occhi) l'architettura di questa antica città.",
    options: ["любуемся", "восхищаемся", "наслаждаемся", "ценимся"],
    optionBases: ["любоваться", "восхищаться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "любуемся",
    correctExplanation: LYUBOVATSYA_VERB_MAP["любоваться"]
  },
  {
    id: 38,
    sentence: "Он ... перед светлой памятью павших героев.",
    translation: "Lui si inchina (mostra profonda ammirazione) davanti alla cara memoria dei caduti.",
    options: ["преклоняется", "любуется", "восхищается", "наслаждается"],
    optionBases: ["преклоняться", "любоваться", "восхищаться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "преклоняется",
    correctExplanation: LYUBOVATSYA_VERB_MAP["преклоняться"]
  },
  {
    id: 39,
    sentence: "Я ... тем, что вы смогли преодолеть все трудности.",
    translation: "Ammiro (provo stima per) il fatto che abbiate superato tutte le difficoltà.",
    options: ["восхищаюсь", "любуюсь", "наслаждаюсь", "ценюсь"],
    optionBases: ["восхищаться", "люboваться", "наслаждаться", "ценить"],
    correctIndex: 0,
    verbPair: "восхищаюсь",
    correctExplanation: LYUBOVATSYA_VERB_MAP["восхищаться"]
  },
  {
    id: 40,
    sentence: "Мать ... успехами своего сына в музыке.",
    translation: "La madre è orgogliosa dei successi di suo figlio nella musica.",
    options: ["гордится", "восхищается", "любуется", "наслаждается"],
    optionBases: ["гордиться", "восхищаться", "любоваться", "наслаждаться"],
    correctIndex: 0,
    verbPair: "гордится",
    correctExplanation: LYUBOVATSYA_VERB_MAP["гордиться"]
  }
];

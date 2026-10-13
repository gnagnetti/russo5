import { Exercise } from '../types';

export const ODEVATSYA_VERB_MAP: Record<string, string> = {
  "одеться": "(одеться — одеваться): significa vestire se stessi, indossare vestiti in generale (одеться тепло).",
  "одеть": "(одеть — одевать): significa vestire qualcun altro o qualcosa (одеть ребенка, одеть куклу).",
  "надеть": "(надеть — надевать): significa indossare un capo specifico su di sé (надеть пальто, надеть очки). È l'errore più comune: si dice 'надеть на себя'.",
  "раздеть": "(раздеть — раздевать): significa spogliare qualcun altro.",
  "раздеться": "(раздеться — раздеваться): significa spogliarsi (togliere i propri vestiti).",
  "переодеться": "(переодеться — переодеваться): significa cambiarsi d'abito (переодеться к ужину).",
  "приодеться": "(приодеться — приодеваться): significa vestirsi bene, mettersi in ghingheri per un'occasione.",
  "вырядиться": "vestirsi in modo eccessivo, bizzarro o troppo vistoso (часто с негативным оттенком).",
  "облечься": "(облечься — облекаться): significa rivestirsi (solenne) o assumere una forma/forma (облечься в слова).",
  "поддеть": "indossare qualcosa sotto un altro capo (поддеть свитер под куртку).",
  "обуться": "(обуться — обуваться): significa mettersi le scarpe.",
  "разуться": "(разуться — разуваться): significa togliersi le scarpe."
};

export const ODEVATSYA_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "На улице холодно, тебе нужно ... потеплее.",
    translation: "Fuori fa freddo, devi vestirti più pesante.",
    options: ["одеться", "надеть", "одеть", "приодеться"],
    optionBases: ["одеться", "надеть", "одеть", "приодеться"],
    correctIndex: 0,
    verbPair: "одеться — одеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["одеться"]
  },
  {
    id: 2,
    sentence: "Мама помогла маленькому сыну ... куртку.",
    translation: "La mamma ha aiutato il figlioletto a indossare la giacca.",
    options: ["одеть", "надеть", "раздеться", "переодеться"],
    optionBases: ["одеть", "надеть", "раздеться", "переодеться"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 3,
    sentence: "Она быстро ... ребёнка для прогулки.",
    translation: "Ha vestito velocemente il bambino per la passeggiata.",
    options: ["одела", "надела", "оделась", "приодела"],
    optionBases: ["одеть", "надеть", "одеться", "приодеть"],
    correctIndex: 0,
    verbPair: "одеть — одевать",
    correctExplanation: ODEVATSYA_VERB_MAP["одеть"]
  },
  {
    id: 4,
    sentence: "Перед ужином гости решили ... .",
    translation: "Prima di cena gli ospiti hanno deciso di cambiarsi d'abito.",
    options: ["раздеться", "переодеться", "надеть", "обуться"],
    optionBases: ["раздеться", "переодеться", "надеть", "обуться"],
    correctIndex: 1,
    verbPair: "переодеться — переодеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["переодеться"]
  },
  {
    id: 5,
    sentence: "Я забыл ... очки и ничего не вижу.",
    translation: "Ho dimenticato di mettermi gli occhiali e non vedo nulla.",
    options: ["одеть", "надеть", "обуть", "приодеть"],
    optionBases: ["одеть", "надеть", "обуть", "приодеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 6,
    sentence: "Пожалуйста, ... при входе в дом.",
    translation: "Per favore, togliti le scarpe quando entri in casa.",
    options: ["разуйся", "обуйся", "разденься", "оденься"],
    optionBases: ["разуться", "обуться", "раздеться", "одеться"],
    correctIndex: 0,
    verbPair: "разуться — разуваться",
    correctExplanation: ODEVATSYA_VERB_MAP["разуться"]
  },
  {
    id: 7,
    sentence: "Он специально ... для первого свидания.",
    translation: "Si è messo in ghingheri (vestito bene) apposta per il primo appuntamento.",
    options: ["приоделся", "разделся", "обулся", "поддел"],
    optionBases: ["приодеться", "раздеться", "обуться", "поддеть"],
    correctIndex: 0,
    verbPair: "приодеться — приодеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["приодеться"]
  },
  {
    id: 8,
    sentence: "Бабушка велела внуку ... тёплый жилет под пальто.",
    translation: "La nonna ha detto al nipote di indossare (sotto) un gilet caldo sotto il cappotto.",
    options: ["надеть", "поддеть", "одеть", "разуть"],
    optionBases: ["надеть", "поддеть", "одеть", "разуть"],
    correctIndex: 1,
    verbPair: "поддеть — поддевать",
    correctExplanation: ODEVATSYA_VERB_MAP["поддеть"]
  },
  {
    id: 9,
    sentence: "Почему ты так ...? Сегодня же не праздник.",
    translation: "Perché ti sei conciato così (vestito bizzarramente)? Oggi non è mica festa.",
    options: ["вырядился", "оделся", "переоделся", "обулся"],
    optionBases: ["вырядиться", "одеться", "переодеться", "обуться"],
    correctIndex: 0,
    verbPair: "вырядиться",
    correctExplanation: ODEVATSYA_VERB_MAP["вырядиться"]
  },
  {
    id: 10,
    sentence: "Врач попросил пациента ... до пояса.",
    translation: "Il medico ha chiesto al paziente di spogliarsi fino alla vita.",
    options: ["раздеться", "раздеть", "одеться", "переодеться"],
    optionBases: ["раздеться", "раздеть", "одеться", "переодеться"],
    correctIndex: 0,
    verbPair: "раздеться — раздеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["раздеться"]
  },
  {
    id: 11,
    sentence: "Нам нужно ... и выйти на улицу.",
    translation: "Dobbiamo metterci le scarpe e uscire.",
    options: ["обуться", "разуться", "раздеть", "одеть"],
    optionBases: ["обуться", "разуться", "раздеть", "одеть"],
    correctIndex: 0,
    verbPair: "обуться — обуваться",
    correctExplanation: ODEVATSYA_VERB_MAP["обуться"]
  },
  {
    id: 12,
    sentence: "Она ... свою куклу в новое платье.",
    translation: "Ha vestito la sua bambola con un vestito nuovo.",
    options: ["надела", "одела", "переоделась", "обула"],
    optionBases: ["надеть", "одеть", "переодеться", "обуть"],
    correctIndex: 1,
    verbPair: "одеть — одевать",
    correctExplanation: ODEVATSYA_VERB_MAP["одеть"]
  },
  {
    id: 13,
    sentence: "Не забудь ... шапку, на улице мороз.",
    translation: "Non dimenticare di metterti il cappello, fuori si gela.",
    options: ["одеть", "надеть", "поддеть", "приодеть"],
    optionBases: ["одеть", "надеть", "поддеть", "приодеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 14,
    sentence: "Я хочу ..., этот костюм мне не нравится.",
    translation: "Voglio cambiarmi d'abito, questo vestito non mi piace.",
    options: ["переодеться", "раздеться", "одеться", "обуться"],
    optionBases: ["переодеться", "раздеться", "одеться", "обуться"],
    correctIndex: 0,
    verbPair: "переодеться — переодеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["переодеться"]
  },
  {
    id: 15,
    sentence: "Мальчик никак не мог ... эти ботинки.",
    translation: "Il ragazzo non riusciva proprio a mettersi questi scarponi.",
    options: ["обуть", "разуть", "одеть", "надеть"],
    optionBases: ["обуть", "разуть", "одеть", "надеть"],
    correctIndex: 0,
    verbPair: "обуть — обувать",
    correctExplanation: ODEVATSYA_VERB_MAP["обуться"]
  },
  {
    id: 16,
    sentence: "Помоги мне ... спящего ребенка.",
    translation: "Aiutami a spogliare il bambino che dorme.",
    options: ["раздеть", "раздеться", "одеть", "одеться"],
    optionBases: ["раздеть", "раздеться", "одеть", "одеться"],
    correctIndex: 0,
    verbPair: "раздеть — раздевать",
    correctExplanation: ODEVATSYA_VERB_MAP["раздеть"]
  },
  {
    id: 17,
    sentence: "Рыцарь ... в тяжелые доспехи.",
    translation: "Il cavaliere si è rivestito di pesanti armature.",
    options: ["облёкся", "оделся", "приоделся", "наделся"],
    optionBases: ["облечься", "одеться", "приодеться", "надеть"],
    correctIndex: 0,
    verbPair: "облечься — облекаться",
    correctExplanation: ODEVATSYA_VERB_MAP["облечься"]
  },
  {
    id: 18,
    sentence: "Она всегда ... очень модно.",
    translation: "Lei si veste sempre in modo molto alla moda.",
    options: ["одевается", "надевает", "одевает", "переодевает"],
    optionBases: ["одеваться", "надевать", "одевать", "переодевать"],
    correctIndex: 0,
    verbPair: "одеваться — одеться",
    correctExplanation: ODEVATSYA_VERB_MAP["одеваться"]
  },
  {
    id: 19,
    sentence: "Перед входом в храм нужно ... .",
    translation: "Bisogna togliersi le scarpe prima di entrare nel tempio.",
    options: ["разуться", "обуться", "раздеться", "переодеться"],
    optionBases: ["разуться", "обуться", "раздеться", "переодеться"],
    correctIndex: 0,
    verbPair: "разуться — разуваться",
    correctExplanation: ODEVATSYA_VERB_MAP["разуться"]
  },
  {
    id: 20,
    sentence: "Он ... маску, чтобы его не узнали.",
    translation: "Ha indossato una maschera per non farsi riconoscere.",
    options: ["надел", "одел", "приодел", "поддел"],
    optionBases: ["надеть", "одеть", "приодеть", "поддеть"],
    correctIndex: 0,
    verbPair: "надель — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 21,
    sentence: "Мама ... дочку в красивое платье для праздника.",
    translation: "La mamma ha vestito la figlia con un bel vestito per la festa.",
    options: ["одела", "надела", "оделась", "приоделась"],
    optionBases: ["одеть", "надеть", "одеться", "приодеться"],
    correctIndex: 0,
    verbPair: "одеть — одевать",
    correctExplanation: ODEVATSYA_VERB_MAP["одеть"]
  },
  {
    id: 22,
    sentence: "Я должен ..., я весь промок под дождем.",
    translation: "Devo cambiarmi, sono tutto bagnato per la pioggia.",
    options: ["переодеться", "раздеться", "одеться", "обуться"],
    optionBases: ["переодеться", "раздеться", "одеться", "обуться"],
    correctIndex: 0,
    verbPair: "переодеться — переодеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["переодеться"]
  },
  {
    id: 23,
    sentence: "Она ... новые туфли на высоком каблуке.",
    translation: "Si è messa (indossato/calzato) le scarpe nuove con i tacchi alti.",
    options: ["обула", "надела", "одела", "разула"],
    optionBases: ["обуть", "надеть", "одеть", "разуть"],
    correctIndex: 0,
    verbPair: "обуть — обувать",
    correctExplanation: "Per le calzature si può usare sia 'надеть' che 'обуть'."
  },
  {
    id: 24,
    sentence: "Зимой я всегда ... под джинсы термобельё.",
    translation: "In inverno indosso sempre (sotto) l'intimo termico sotto i jeans.",
    options: ["поддеваю", "надеваю", "одеваю", "переодеваю"],
    optionBases: ["поддевать", "надевать", "одевать", "переодевать"],
    correctIndex: 0,
    verbPair: "поддевать — поддеть",
    correctExplanation: ODEVATSYA_VERB_MAP["поддеть"]
  },
  {
    id: 25,
    sentence: "Куда ты так ...? У нас обычный обед.",
    translation: "Dove vai così elegante (mettersi in ghingheri)? Abbiamo un pranzo normale.",
    options: ["приоделась", "разделась", "вырядилась", "оделась"],
    optionBases: ["приодеться", "раздеться", "вырядиться", "одеться"],
    correctIndex: 0,
    verbPair: "приодеться — приодеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["приодеться"]
  },
  {
    id: 26,
    sentence: "Тебе пора ... и ложиться спать.",
    translation: "È ora che tu ti spogli e vada a letto.",
    options: ["раздеться", "раздеть", "одеться", "переодеться"],
    optionBases: ["раздеться", "раздеть", "одеться", "переодеться"],
    correctIndex: 0,
    verbPair: "раздеться — раздеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["раздеться"]
  },
  {
    id: 27,
    sentence: "Отец помог сыну ... лыжные ботинки.",
    translation: "Il padre ha aiutato il figlio a mettersi gli scarponi da sci.",
    options: ["обуть", "надеть", "одеть", "разуть"],
    optionBases: ["обуть", "надеть", "одеть", "разуть"],
    correctIndex: 0,
    verbPair: "обуть — обувать",
    correctExplanation: ODEVATSYA_VERB_MAP["обуться"]
  },
  {
    id: 28,
    sentence: "Матросы ... в парадную форму.",
    translation: "I marinai si sono rivestiti (solenne) dell'uniforme da parata.",
    options: ["облеклись", "оделись", "приоделись", "наделись"],
    optionBases: ["облечься", "одеться", "приодеться", "надеть"],
    correctIndex: 0,
    verbPair: "облечься — облекаться",
    correctExplanation: ODEVATSYA_VERB_MAP["облечься"]
  },
  {
    id: 29,
    sentence: "Я забыл ... галстук на свадьбу.",
    translation: "Ho dimenticato di mettermi la cravatta per il matrimonio.",
    options: ["надеть", "одеть", "поддеть", "приодеть"],
    optionBases: ["надеть", "одеть", "поддеть", "приодеть"],
    correctIndex: 0,
    verbPair: "надеть — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 30,
    sentence: "Она решила ... своих кошек в забавные костюмы.",
    translation: "Ha deciso di vestire i suoi gatti con costumi buffi.",
    options: ["одеть", "надеть", "раздеться", "переодеться"],
    optionBases: ["одеть", "надеть", "раздеться", "переодеться"],
    correctIndex: 0,
    verbPair: "одеть — одевать",
    correctExplanation: ODEVATSYA_VERB_MAP["одеть"]
  },
  {
    id: 31,
    sentence: "Нам нужно ..., на полу ковер.",
    translation: "Dobbiamo toglierci le scarpe, sul pavimento c'è il tappeto.",
    options: ["разуться", "обуться", "раздеться", "одеться"],
    optionBases: ["разуться", "обуться", "раздеться", "одеться"],
    correctIndex: 0,
    verbPair: "разуться — разуваться",
    correctExplanation: ODEVATSYA_VERB_MAP["разуться"]
  },
  {
    id: 32,
    sentence: "Он ... очень скромно, чтобы не привлекать внимания.",
    translation: "Si è vestito in modo molto modesto per non attirare l'attenzione.",
    options: ["оделся", "надел", "одел", "вырядился"],
    optionBases: ["одеться", "надеть", "одеть", "вырядиться"],
    correctIndex: 0,
    verbPair: "одеться — одеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["одеться"]
  },
  {
    id: 33,
    sentence: "Помоги мне ... повязку на руку.",
    translation: "Aiutami a mettere la benda (indossare un accessorio) sul braccio.",
    options: ["надеть", "одеть", "обуть", "разуть"],
    optionBases: ["надеть", "одеть", "обуть", "разуть"],
    correctIndex: 0,
    verbPair: "надеть — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 34,
    sentence: "Спортсмен ... после тренировки.",
    translation: "L'atleta si è cambiato dopo l'allenamento.",
    options: ["переоделся", "разделся", "оделся", "обулся"],
    optionBases: ["переодеться", "раздеться", "одеться", "обуться"],
    correctIndex: 0,
    verbPair: "переодеться — переодеваться",
    correctExplanation: ODEVATSYA_VERB_MAP["переодеться"]
  },
  {
    id: 35,
    sentence: "Она ужасно ..., все на неё оборачивались.",
    translation: "Si è vestita in modo orribile (vistoso), tutti si giravano a guardarla.",
    options: ["вырядилась", "приоделась", "оделась", "переоделась"],
    optionBases: ["вырядиться", "приодеться", "одеться", "переодеться"],
    correctIndex: 0,
    verbPair: "вырядиться",
    correctExplanation: ODEVATSYA_VERB_MAP["вырядиться"]
  },
  {
    id: 36,
    sentence: "Перед входом в чистую зону нужно ... .",
    translation: "Bisogna spogliarsi (cambiarsi/togliere gli abiti esterni) prima di entrare nella zona pulita.",
    options: ["переодеться", "раздеться", "одеться", "обуться"],
    optionBases: ["переодеться", "раздеться", "одеться", "обуться"],
    correctIndex: 1,
    verbPair: "раздеться — раздеваться",
    correctExplanation: "In questo contesto indica il togliersi degli indumenti."
  },
  {
    id: 37,
    sentence: "Ребёнок сам ... сапоги и пошел в лужу.",
    translation: "Il bambino si è messo gli stivali da solo ed è andato nella pozzanghera.",
    options: ["обул", "надел", "одел", "разул"],
    optionBases: ["обуть", "надеть", "одеть", "разуть"],
    correctIndex: 0,
    verbPair: "обуть — обувать",
    correctExplanation: ODEVATSYA_VERB_MAP["обуться"]
  },
  {
    id: 38,
    sentence: "Он ... пальто и вышел в метель.",
    translation: "Ha indossato il cappotto ed è uscito nella tormenta.",
    options: ["надел", "одел", "приодел", "переодел"],
    optionBases: ["надеть", "одеть", "приодеть", "переодеть"],
    correctIndex: 0,
    verbPair: "надеть — надевать",
    correctExplanation: ODEVATSYA_VERB_MAP["надеть"]
  },
  {
    id: 39,
    sentence: "Мама ... малыша в тёплый комбинезон.",
    translation: "La mamma ha vestito il piccolo con una tutina calda.",
    options: ["одела", "надела", "оделась", "обула"],
    optionBases: ["одеть", "надеть", "одеться", "обуть"],
    correctIndex: 0,
    verbPair: "одеть — одевать",
    correctExplanation: ODEVATSYA_VERB_MAP["одеть"]
  },
  {
    id: 40,
    sentence: "После долгого похода было приятно ... .",
    translation: "Dopo una lunga escursione è stato piacevole togliersi le scarpe.",
    options: ["разуться", "обуться", "раздеться", "одеться"],
    optionBases: ["разуться", "обуться", "раздеться", "одеться"],
    correctIndex: 0,
    verbPair: "разуться — разуваться",
    correctExplanation: ODEVATSYA_VERB_MAP["разуться"]
  }
];

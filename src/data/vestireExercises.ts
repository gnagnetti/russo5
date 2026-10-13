import { Exercise } from '../types';

export const VESTIRE_VERB_MAP: Record<string, string> = {
  "одеть": "(одеть — одевать): significa vestire qualcuno o qualcosa (un bambino, una bambola, un paziente). Il complemento oggetto è l'animato che viene vestito (одеть ребёнка).",
  "надеть": "(надеть — надевать): significa indossare un capo d'abbigliamento o un accessorio su se stessi o su qualcun altro. Il complemento oggetto è l'indumento (надеть пальто, надеть кольцо).",
  "одеться": "(одеться — одеваться): significa vestire se stessi, l'atto generale di mettersi i vestiti senza specificare l'indumento (я одеваюсь).",
  "раздеться": "(раздеться — раздеваться): significa spogliarsi.",
  "раздеть": "(раздеть — раздевать): significa spogliare qualcuno.",
  "переодеться": "(переодеться — переодеваться): significa cambiarsi d'abito.",
  "поддеть": "indossare qualcosa sotto un altro capo (per stare più caldi).",
  "приодеться": "vestirsi con cura o eleganza per un'occasione.",
  "разодеться": "vestirsi in modo molto appariscente, eccessivo o cerimonioso.",
  "напялить": "infilarsi qualcosa di fretta o con trascuratezza (colloquiale).",
  "облечь": "investire, rivestire (spesso figurato: облечь властью).",
  "обуть": "mettere le scarpe a qualcuno.",
  "обуться": "mettersi le scarpe."
};

export const VESTIRE_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мама помогает маленькому сыну ... куртку.",
    translation: "La mamma aiuta il figlioletto a indossare la giacca.",
    options: ["одеть", "надеть", "одеться", "раздеться"],
    optionBases: ["одеть", "надеть", "одеться", "раздеться"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 2,
    sentence: "Пожалуйста, ... ребёнка потеплее, на улице холодно.",
    translation: "Per favore, vesti il bambino più pesante, fuori fa freddo.",
    options: ["надень", "одень", "оденься", "раздени"],
    optionBases: ["надеть", "одеть", "одеться", "раздеть"],
    correctIndex: 1,
    verbPair: "одеть — одевать",
    correctExplanation: VESTIRE_VERB_MAP["одеть"]
  },
  {
    id: 3,
    sentence: "Я уже ..., мы можем выходить.",
    translation: "Mi sono già vestito, possiamo uscire.",
    options: ["оделся", "наделся", "разделся", "переоделся"],
    optionBases: ["одеться", "надеться", "раздеться", "переодеться"],
    correctIndex: 0,
    verbPair: "одеться — одеваться",
    correctExplanation: VESTIRE_VERB_MAP["одеться"]
  },
  {
    id: 4,
    sentence: "Она ... красивые серьги перед балом.",
    translation: "Ha indossato dei begli orecchini prima del ballo.",
    options: ["одела", "надела", "оделась", "разделась"],
    optionBases: ["одеть", "надеть", "одеться", "раздеться"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 5,
    sentence: "Тебе стоит ..., ты промок под дождем.",
    translation: "Dovresti cambiarti, ti sei bagnato sotto la pioggia.",
    options: ["переодеться", "одеться", "надеться", "раздеться"],
    optionBases: ["переодеться", "одеться", "надеться", "раздеться"],
    correctIndex: 0,
    verbPair: "переодеться — переодеваться",
    correctExplanation: VESTIRE_VERB_MAP["переодеться"]
  },
  {
    id: 6,
    sentence: "Врач попросил пациента ... до пояса.",
    translation: "Il medico ha chiesto al paziente di spogliarsi fino alla cintola.",
    options: ["раздеться", "одеться", "переодеться", "надеться"],
    optionBases: ["раздеться", "одеться", "переодеться", "надеться"],
    correctIndex: 0,
    verbPair: "раздеться — раздеваться",
    correctExplanation: VESTIRE_VERB_MAP["раздеться"]
  },
  {
    id: 7,
    sentence: "Он ... очки и начал читать газету.",
    translation: "Ha indossato gli occhiali e ha iniziato a leggere il giornale.",
    options: ["одел", "надел", "поддел", "обурел"],
    optionBases: ["одеть", "надеть", "поддеть", "обуть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 8,
    sentence: "Бабушка ... куклу в красивое платье.",
    translation: "La nonna ha vestito la bambola con un bel vestitino.",
    options: ["надела", "одела", "оделась", "приодела"],
    optionBases: ["надеть", "одеть", "одеться", "приодеть"],
    correctIndex: 1,
    verbPair: "одеть — одевать",
    correctExplanation: VESTIRE_VERB_MAP["одеть"]
  },
  {
    id: 9,
    sentence: "На улице мороз, нужно ... тёплый свитер под куртку.",
    translation: "Fuori gela, bisogna indossare un maglione caldo sotto la giacca.",
    options: ["поддеть", "надеть", "одеть", "переодеть"],
    optionBases: ["поддеть", "надеть", "одеть", "переодеть"],
    correctIndex: 0,
    verbPair: "поддеть",
    correctExplanation: VESTIRE_VERB_MAP["поддеть"]
  },
  {
    id: 10,
    sentence: "Она всегда долго ... перед зеркалом.",
    translation: "Lei si veste sempre a lungo davanti allo specchio.",
    options: ["одевается", "надевается", "раздевается", "обувается"],
    optionBases: ["одеваться", "надеваться", "раздеваться", "обуваться"],
    correctIndex: 0,
    verbPair: "одеваться — одеться",
    correctExplanation: VESTIRE_VERB_MAP["одеться"]
  },
  {
    id: 11,
    sentence: "Я забыл ... часы утром.",
    translation: "Ho dimenticato di indossare l'orologio stamattina.",
    options: ["одеть", "надеть", "обуть", "поддеть"],
    optionBases: ["одеть", "надеть", "обуть", "поддеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 12,
    sentence: "Отец помогает дочке ... сапоги.",
    translation: "Il padre aiuta la figlia a mettersi gli stivali.",
    options: ["одеть", "надеть", "обуть", "забуть"],
    optionBases: ["одеть", "надеть", "обуть", "забуть"],
    correctIndex: 2,
    verbPair: "обуть — обувать",
    correctExplanation: VESTIRE_VERB_MAP["обуть"]
  },
  {
    id: 13,
    sentence: "На свадьбу все гости ... очень нарядно.",
    translation: "Per il matrimonio tutti gli ospiti si sono vestiti in modo molto elegante.",
    options: ["приоделись", "разоделись", "оделись", "наделись"],
    optionBases: ["приодеться", "разодеться", "одеться", "надеться"],
    correctIndex: 1,
    verbPair: "разодеться",
    correctExplanation: VESTIRE_VERB_MAP["разодеться"]
  },
  {
    id: 14,
    sentence: "Мальчик самостоятельно ... кепку.",
    translation: "Il ragazzo ha indossato il berretto in autonomia.",
    options: ["одел", "надел", "обув", "поддел"],
    optionBases: ["одеть", "надеть", "обуть", "поддеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 15,
    sentence: "Помоги мне ... это тяжёлое пальто.",
    translation: "Aiutami a indossare (infilare) questo pesante cappotto.",
    options: ["надеть", "одеть", "приодеть", "раздеть"],
    optionBases: ["надеть", "одеть", "приодеть", "раздеть"],
    correctIndex: 0,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 16,
    sentence: "Она ... перед походом в театр.",
    translation: "Si è vestita con cura (elegante) prima di andare a teatro.",
    options: ["приоделась", "разоделась", "оделась", "переоделась"],
    optionBases: ["приодеться", "разодеться", "одеться", "переодеться"],
    correctIndex: 0,
    verbPair: "приодеться",
    correctExplanation: VESTIRE_VERB_MAP["приодеться"]
  },
  {
    id: 17,
    sentence: "Не забудь ... шапку, на улице ветер.",
    translation: "Non dimenticare di indossare il cappello, fuori c'è vento.",
    options: ["одеть", "надеть", "обуть", "поддеть"],
    optionBases: ["одеть", "надеть", "обуть", "поддеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 18,
    sentence: "Медсестра помогла больному ... .",
    translation: "L'infermiera ha aiutato il malato a vestirsi.",
    options: ["одеться", "надеться", "раздеться", "обуться"],
    optionBases: ["одеться", "надеться", "раздеться", "обуться"],
    correctIndex: 0,
    verbPair: "одеться — одеваться",
    correctExplanation: VESTIRE_VERB_MAP["одеться"]
  },
  {
    id: 19,
    sentence: "Он ... свою старую куртку и пошел в гараж.",
    translation: "Si è infilato (trascurato) la sua vecchia giacca ed è andato in garage.",
    options: ["напялил", "надел", "одел", "приодел"],
    optionBases: ["напялить", "надеть", "одеть", "приодеть"],
    correctIndex: 0,
    verbPair: "напялить",
    correctExplanation: VESTIRE_VERB_MAP["напялить"]
  },
  {
    id: 20,
    sentence: "Я быстро ..., чтобы не опоздать.",
    translation: "Mi sono vestito in fretta per non fare tardi.",
    options: ["оделся", "наделся", "обулся", "приоделся"],
    optionBases: ["одеться", "надеться", "обуться", "приодеться"],
    correctIndex: 0,
    verbPair: "одеться — одеваться",
    correctExplanation: VESTIRE_VERB_MAP["одеться"]
  },
  {
    id: 21,
    sentence: "Актер ... костюм своего персонажа.",
    translation: "L'attore ha indossato il costume del suo personaggio.",
    options: ["одел", "надел", "приодел", "облек"],
    optionBases: ["одеть", "надеть", "приодеть", "облечь"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 22,
    sentence: "Тебе пора ... новые туфли.",
    translation: "È ora che tu ti metta (indossi) le scarpe nuove.",
    options: ["обуться", "одеться", "надеться", "приодеться"],
    optionBases: ["обуться", "одеться", "надеться", "приодеться"],
    correctIndex: 0,
    verbPair: "обуться — обуваться",
    correctExplanation: VESTIRE_VERB_MAP["обуться"]
  },
  {
    id: 23,
    sentence: "Мать ... ребёнка в красивый праздничный костюм.",
    translation: "La madre ha vestito il bambino con un bel costume da festa.",
    options: ["одела", "надела", "приодела", "обула"],
    optionBases: ["одеть", "надеть", "приодеть", "обула"],
    correctIndex: 0,
    verbPair: "одеть — одевать",
    correctExplanation: VESTIRE_VERB_MAP["одеть"]
  },
  {
    id: 24,
    sentence: "Мне пришлось ... перед тем, как идти на встречу.",
    translation: "Ho dovuto cambiarmi (d'abito) prima di andare all'incontro.",
    options: ["переодеться", "одеться", "разодеться", "раздеться"],
    optionBases: ["переодеться", "одеться", "разодеться", "раздеться"],
    correctIndex: 0,
    verbPair: "переодеться — переодеваться",
    correctExplanation: VESTIRE_VERB_MAP["переодеться"]
  },
  {
    id: 25,
    sentence: "Пожалуйста, ... перчатки, руки замерзнут.",
    translation: "Per favore, indossa i guanti, le mani si geleranno.",
    options: ["одень", "надень", "поддень", "обуй"],
    optionBases: ["одеть", "надеть", "поддеть", "обуй"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 26,
    sentence: "Она ... в роскошное платье и выглядела как королева.",
    translation: "Si è vestita (raffinata/eccessiva) con un abito lussuoso e sembrava una regina.",
    options: ["разоделась", "приоделась", "оделась", "переоделась"],
    optionBases: ["разодеться", "приодеться", "одеться", "переодеться"],
    correctIndex: 0,
    verbPair: "разодеться",
    correctExplanation: VESTIRE_VERB_MAP["разодеться"]
  },
  {
    id: 27,
    sentence: "Мы помогли старику ... .",
    translation: "Abbiamo aiutato il vecchio a vestirsi.",
    options: ["одеться", "надеться", "обуться", "раздеться"],
    optionBases: ["одеться", "надеться", "обуться", "раздеться"],
    correctIndex: 0,
    verbPair: "одеться — одеваться",
    correctExplanation: VESTIRE_VERB_MAP["одеться"]
  },
  {
    id: 28,
    sentence: "Я забыл ... ремень на брюки.",
    translation: "Ho dimenticato di indossare (mettere) la cintura ai pantaloni.",
    options: ["одеть", "надеть", "поддеть", "обуть"],
    optionBases: ["одеть", "надеть", "поддеть", "обуть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 29,
    sentence: "Мальчик быстро ... кроссовки и выбежал на улицу.",
    translation: "Il ragazzo si è messo (calzato) velocemente le scarpe da ginnastica ed è corso fuori.",
    options: ["обулся", "оделся", "наделся", "разоделся"],
    optionBases: ["обуться", "одеться", "надеться", "разодеться"],
    correctIndex: 0,
    verbPair: "обуться — обуваться",
    correctExplanation: VESTIRE_VERB_MAP["обуться"]
  },
  {
    id: 30,
    sentence: "В театре нам пришлось ... в гардеробе.",
    translation: "A teatro abbiamo dovuto spogliarci (togliere il cappotto) nel guardaroba.",
    options: ["раздеться", "одеться", "переодеться", "разодеться"],
    optionBases: ["раздеться", "одеться", "переодеться", "разодеться"],
    correctIndex: 0,
    verbPair: "раздеться — раздеваться",
    correctExplanation: VESTIRE_VERB_MAP["раздеться"]
  },
  {
    id: 31,
    sentence: "Она ... кольцо на палец.",
    translation: "Ha infilato (indossato) l'anello al dito.",
    options: ["одела", "надела", "поддела", "приодела"],
    optionBases: ["одеть", "надеть", "поддеть", "приодеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 32,
    sentence: "Пожалуйста, ... пальто на вешалку.",
    translation: "Per favore, indossa (metti) il cappotto sulla gruccia (attaccapanni) - *frase trabocchetto, qui 'надеть' non si usa in senso di vestire qualcuno ma di posizionare un oggetto su un altro.*",
    options: ["надень", "одень", "повесь", "поддень"],
    optionBases: ["надеть", "одеть", "повесить", "поддеть"],
    correctIndex: 0,
    verbPair: "надеть — надевать",
    correctExplanation: "Qui 'надеть' si riferisce all'azione di mettere un oggetto (cappotto) sopra un altro (gruccia)."
  },
  {
    id: 33,
    sentence: "Он ... маску, чтобы его не узнали.",
    translation: "Ha indossato una maschera per non essere riconosciuto.",
    options: ["одел", "надел", "приодел", "раздел"],
    optionBases: ["одеть", "надеть", "приодеть", "раздеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 34,
    sentence: "Тебе стоит ... к праздничному ужину.",
    translation: "Dovresti vestirti un po' meglio (elegante) per la cena di festa.",
    options: ["приодеться", "разодеться", "одеться", "переодеться"],
    optionBases: ["приодеться", "разодеться", "одеться", "переодеться"],
    correctIndex: 0,
    verbPair: "приодеться",
    correctExplanation: VESTIRE_VERB_MAP["приодеться"]
  },
  {
    id: 35,
    sentence: "Она тщательно ... своего ребёнка перед прогулкой.",
    translation: "Ha vestito scrupolosamente il suo bambino prima della passeggiata.",
    options: ["одела", "надела", "обула", "разодела"],
    optionBases: ["одеть", "надеть", "обуть", "разодеть"],
    correctIndex: 0,
    verbPair: "одеть — одевать",
    correctExplanation: VESTIRE_VERB_MAP["одеть"]
  },
  {
    id: 36,
    sentence: "Я решил ... старую футболку для работы в саду.",
    translation: "Ho deciso di infilare (senza cura) la vecchia maglietta per lavorare in giardino.",
    options: ["напялить", "надеть", "одеть", "поддеть"],
    optionBases: ["напялить", "надеть", "одеть", "поддеть"],
    correctIndex: 0,
    verbPair: "напялить",
    correctExplanation: VESTIRE_VERB_MAP["напялить"]
  },
  {
    id: 37,
    sentence: "Не забудь ... шарф, сегодня дует злой ветер.",
    translation: "Non dimenticare di indossare la sciarpa, oggi soffia un vento cattivo.",
    options: ["одеть", "надеть", "поддеть", "приодеть"],
    optionBases: ["одеть", "надеть", "поддеть", "приодеть"],
    correctIndex: 1,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 38,
    sentence: "В походе нам пришлось ... всё самое теплое.",
    translation: "Durante l'escursione abbiamo dovuto indossare tutto il più caldo possibile.",
    options: ["надеть", "одеть", "поддеть", "разодеться"],
    optionBases: ["надеть", "одеть", "поддеть", "разодеться"],
    correctIndex: 0,
    verbPair: "надеть — надевать",
    correctExplanation: VESTIRE_VERB_MAP["надеть"]
  },
  {
    id: 39,
    sentence: "Герой ... в доспехи и отправился в бой.",
    translation: "L'eroe si rivestì (fu investito/si mise) della sua armatura e andò in battaglia.",
    options: ["облекся", "оделся", "наделся", "разоделся"],
    optionBases: ["облечься", "одеться", "надеться", "разодеться"],
    correctIndex: 0,
    verbPair: "облечься — облекаться",
    correctExplanation: VESTIRE_VERB_MAP["облечь"]
  },
  {
    id: 40,
    sentence: "Она ... новые туфли на размер меньше.",
    translation: "Si è infilata (indossato/calzato) scarpe nuove di una taglia più piccola.",
    options: ["надела", "обула", "одела", "напялила"],
    optionBases: ["надеть", "обуть", "одеть", "напялить"],
    correctIndex: 1,
    verbPair: "обуть — обувать",
    correctExplanation: VESTIRE_VERB_MAP["обуть"]
  }
];

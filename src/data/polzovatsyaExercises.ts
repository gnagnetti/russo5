import { Exercise } from '../types';

export const POLZOVATSYA_VERB_MAP: Record<string, string> = {
  "пользоваться": "(пользоваться — попользоваться): significa usare qualcosa (di materiale o immateriale), servirsi di uno strumento o di un diritto (пользоваться словарём, пользоваться авторитетом). Richiede il caso Strumentale.",
  "воспользоваться": "(воспользоваться — пользоваться): significa approfittare di un'occasione o usare qualcosa in un determinato momento per uno scopo specifico (воспользоваться случаем, воспользоваться такси). Richiede il caso Strumentale.",
  "использовать": "significa utilizzare qualcosa come risorsa, impiegare per ottenere un risultato (использовать время, использовать шанс). Richiede il caso Accusativo.",
  "использоваться": "essere utilizzato, venire impiegato (часто в пассивном смысле).",
  "использваться": "variante di 'использоваться'.",
  "применять": "(применить — применять): mettere in pratica, applicare una regola, una forza o una conoscenza (применить закон).",
  "эксплуатировать": "sfruttare intensivamente (macchine, persone o risorse naturali).",
  "употреблять": "(употребить — употреблять): fare uso di qualcosa, spesso riferito a cibi, bevande o parole (употреблять алкоголь, употреблять термины).",
  "злоупотреблять": "abusare di qualcosa, eccedere o usare a danno proprio o altrui (злоупотреблять доверием, злоупотреблять властью).",
  "расходовать": "(израсходовать — расходовать): consumare, spendere risorse o energie (расходовать деньги).",
  "потребить": "(потребить — потреблять): consumare come consumatore (продукты, электроэнергию).",
  "одолжить": "chiedere o dare in prestito per un uso temporaneo."
};

export const POLZOVATSYA_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Вы часто ... компьютером на работе?",
    translation: "Usate spesso il computer al lavoro?",
    options: ["пользуетесь", "используете", "применяете", "употребляете"],
    optionBases: ["пользоваться", "использовать", "применять", "употреблять"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 2,
    sentence: "Я решил ... этим шансом и подать заявку.",
    translation: "Ho deciso di approfittare di questa possibilità e inviare la domanda.",
    options: ["воспользоваться", "пользоваться", "применить", "употребить"],
    optionBases: ["воспользоваться", "пользоваться", "применять", "употребить"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 3,
    sentence: "Учёные ... новый метод исследования.",
    translation: "Gli scienziati hanno utilizzato (impiegato) un nuovo metodo di ricerca.",
    options: ["использовали", "пользовались", "употребляли", "эксплуатировали"],
    optionBases: ["использовать", "пользоваться", "употреблять", "эксплуатировать"],
    correctIndex: 0,
    verbPair: "использовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["использовать"]
  },
  {
    id: 4,
    sentence: "Не стоит ... моим терпением.",
    translation: "Non dovresti abusare della mia pazienza.",
    options: ["злоупотреблять", "пользоваться", "использовать", "употреблять"],
    optionBases: ["злоупотреблять", "пользоваться", "использовать", "употреблять"],
    correctIndex: 0,
    verbPair: "злоупотреблять — употребить",
    correctExplanation: POLZOVATSYA_VERB_MAP["злоупотреблять"]
  },
  {
    id: 5,
    sentence: "Она всегда ... духами одной и той же марки.",
    translation: "Usa sempre profumi della stessa marca.",
    options: ["пользуется", "использует", "употребляет", "применяет"],
    optionBases: ["пользоваться", "использовать", "употреблять", "применять"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 6,
    sentence: "В этой стране ... много пресной воды.",
    translation: "In questo paese si consuma molta acqua dolce.",
    options: ["потребляется", "используется", "применяется", "употребляется"],
    optionBases: ["потребляться", "использоваться", "применяться", "употребляться"],
    correctIndex: 0,
    verbPair: "потребляться — потребиться",
    correctExplanation: POLZOVATSYA_VERB_MAP["потребить"]
  },
  {
    id: 7,
    sentence: "Механик ... специальные инструменты для ремонта.",
    translation: "Il meccanico ha impiegato strumenti speciali per la riparazione.",
    options: ["использовал", "пользовался", "применил", "употребил"],
    optionBases: ["использовать", "пользоваться", "применить", "употребить"],
    correctIndex: 0,
    verbPair: "использовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["использовать"]
  },
  {
    id: 8,
    sentence: "Он слишком часто ... этим словом в своей речи.",
    translation: "Usa troppo spesso questa parola nel suo discorso.",
    options: ["употребляет", "пользуется", "использует", "применяет"],
    optionBases: ["употреблять", "пользоваться", "использовать", "применять"],
    correctIndex: 0,
    verbPair: "употреблять — употребить",
    correctExplanation: POLZOVATSYA_VERB_MAP["употреблять"]
  },
  {
    id: 9,
    sentence: "Могу я ... вашим телефоном на минуту?",
    translation: "Posso servirmi del vostro telefono per un minuto?",
    options: ["воспользоваться", "пользоваться", "использовать", "применить"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применять"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 10,
    sentence: "Работодатель беспощадно ... своих подчинённых.",
    translation: "Il datore di lavoro sfrutta spietatamente i propri dipendenti.",
    options: ["эксплуатирует", "использует", "пользуется", "применяет"],
    optionBases: ["эксплуатировать", "использовать", "пользоваться", "применять"],
    correctIndex: 0,
    verbPair: "эксплуатировать",
    correctExplanation: POLZOVATSYA_VERB_MAP["эксплуатировать"]
  },
  {
    id: 11,
    sentence: "Нам нужно экономно ... наши ресурсы.",
    translation: "Dobbiamo consumare le nostre risorse in modo economico.",
    options: ["расходовать", "использовать", "пользоваться", "употреблять"],
    optionBases: ["расходовать", "использовать", "пользоваться", "употреблять"],
    correctIndex: 0,
    verbPair: "расходовать — израсходовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["расходовать"]
  },
  {
    id: 12,
    sentence: "Вы должны ... накопленные знания на практике.",
    translation: "Dovete applicare (mettere in pratica) le conoscenze accumulate.",
    options: ["применить", "использовать", "пользоваться", "употребить"],
    optionBases: ["применить", "использовать", "пользоваться", "употребить"],
    correctIndex: 0,
    verbPair: "применить — применять",
    correctExplanation: POLZOVATSYA_VERB_MAP["применять"]
  },
  {
    id: 13,
    sentence: "Профессор ... большим уважением среди коллег.",
    translation: "Il professore gode (gode di/usa) di grande rispetto tra i colleghi.",
    options: ["пользуется", "использует", "употребляет", "применяет"],
    optionBases: ["пользуется", "использует", "употребляет", "применяет"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 14,
    sentence: "Он ... моментом, пока никто не видел, и ушёл.",
    translation: "Ha approfittato del momento mentre nessuno vedeva e se n'è andato.",
    options: ["воспользовался", "пользовался", "использовал", "применил"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применить"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 15,
    sentence: "В этой мази ... только натуральные компоненты.",
    translation: "In questa pomata vengono utilizzati solo componenti naturali.",
    options: ["используются", "пользуются", "употребляются", "применяются"],
    optionBases: ["использоваться", "пользоваться", "употребляться", "применяться"],
    correctIndex: 0,
    verbPair: "использоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["использоваться"]
  },
  {
    id: 16,
    sentence: "Нельзя ... лекарствами без назначения врача.",
    translation: "Non si possono usare (consumare/prendere) medicinali senza prescrizione medica.",
    options: ["употреблять", "пользоваться", "применять", "эксплуатировать"],
    optionBases: ["употреблять", "пользоваться", "применять", "эксплуатировать"],
    correctIndex: 0,
    verbPair: "употреблять — употребить",
    correctExplanation: POLZOVATSYA_VERB_MAP["употреблять"]
  },
  {
    id: 17,
    sentence: "Пожалуйста, ... общественным транспортом, чтобы уменьшить пробки.",
    translation: "Per favore, usate i trasporti pubblici per ridurre gli ingorghi.",
    options: ["пользуйтесь", "используйте", "употребляйте", "применяйте"],
    optionBases: ["пользоваться", "использовать", "употреблять", "применять"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 18,
    sentence: "Он ... своё положение в компании для личной выгоды.",
    translation: "Ha abusato della sua posizione in azienda per vantaggio personale.",
    options: ["злоупотребил", "воспользовался", "использовал", "применил"],
    optionBases: ["злоупотребить", "воспользоваться", "использовать", "применить"],
    correctIndex: 0,
    verbPair: "злоупотребил — употреблять",
    correctExplanation: POLZOVATSYA_VERB_MAP["злоупотреблять"]
  },
  {
    id: 19,
    sentence: "Мальчик смог ... ситуацией и помириться с друзьями.",
    translation: "Il ragazzo è riuscito ad approfittare della situazione e a fare pace con gli amici.",
    options: ["воспользоваться", "пользоваться", "использовать", "применить"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применить"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 20,
    sentence: "Эти станки ... уже более двадцати лет.",
    translation: "Queste macchine vengono sfruttate (intensamente) da oltre vent'anni.",
    options: ["эксплуатируются", "используются", "пользуются", "применяются"],
    optionBases: ["эксплуатироваться", "использоваться", "пользоваться", "применяться"],
    correctIndex: 0,
    verbPair: "эксплуатироваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["эксплуатировать"]
  },
  {
    id: 21,
    sentence: "Врач посоветовал мне меньше ... соли.",
    translation: "Il medico mi ha consigliato di consumare meno sale.",
    options: ["употреблять", "пользоваться", "использовать", "расходовать"],
    optionBases: ["употреблять", "пользоваться", "использовать", "расходовать"],
    correctIndex: 0,
    verbPair: "употреблять — употребить",
    correctExplanation: POLZOVATSYA_VERB_MAP["употреблять"]
  },
  {
    id: 22,
    sentence: "Нам нужно ... новую систему фильтрации воды.",
    translation: "Dobbiamo impiegare (utilizzare) il nuovo sistema di filtraggio dell'acqua.",
    options: ["использовать", "пользоваться", "применять", "употреблять"],
    optionBases: ["использовать", "пользоваться", "применять", "употреблять"],
    correctIndex: 0,
    verbPair: "использовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["использовать"]
  },
  {
    id: 23,
    sentence: "Вы можете ... этим купоном в любом магазине сети.",
    translation: "Potete utilizzare (servirvi di) questo coupon in qualsiasi negozio della catena.",
    options: ["воспользоваться", "использовать", "применить", "потратить"],
    optionBases: ["воспользоваться", "использовать", "применить", "потратить"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 24,
    sentence: "Она ... услугами личного тренера.",
    translation: "Lei usufruisce (si serve) dei servizi di un personal trainer.",
    options: ["пользуется", "использует", "употребляет", "применяет"],
    optionBases: ["пользоваться", "использовать", "употреблять", "применять"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 25,
    sentence: "Полиция ... слезоточивый газ для разгона толпы.",
    translation: "La polizia ha applicato (utilizzato la forza) gas lacrimogeni per disperdere la folla.",
    options: ["применила", "использовала", "пользовалась", "употребила"],
    optionBases: ["применить", "использовать", "пользоваться", "употребить"],
    correctIndex: 0,
    verbPair: "применила — применять",
    correctExplanation: POLZOVATSYA_VERB_MAP["применять"]
  },
  {
    id: 26,
    sentence: "Он ... много энергии на этот проект.",
    translation: "Ha consumato/speso molta energia in questo progetto.",
    options: ["израсходовал", "использовал", "потребил", "потратил"],
    optionBases: ["израсходовать", "использовать", "потребить", "потратить"],
    correctIndex: 0,
    verbPair: "израсходовал — расходовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["расходовать"]
  },
  {
    id: 27,
    sentence: "В этой деревне до сих пор ... колодцами.",
    translation: "In questo villaggio si usano ancora i pozzi.",
    options: ["пользуются", "используют", "употребляют", "применяют"],
    optionBases: ["пользоваться", "использовать", "употреблять", "применять"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 28,
    sentence: "Нельзя ... доверием близких людей.",
    translation: "Non si può abusare della fiducia delle persone care.",
    options: ["злоупотреблять", "пользоваться", "использовать", "воспользоваться"],
    optionBases: ["злоупотреблять", "пользоваться", "использовать", "воспользоваться"],
    correctIndex: 0,
    verbPair: "злоупотреблять — употребить",
    correctExplanation: POLZOVATSYA_VERB_MAP["злоупотреблять"]
  },
  {
    id: 29,
    sentence: "Она ... своим правом на бесплатный проезд.",
    translation: "Ha usufruito (approfittato/usato) del suo diritto al viaggio gratuito.",
    options: ["воспользовалась", "пользовалась", "использовала", "применила"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применить"],
    correctIndex: 0,
    verbPair: "воспользовалась — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 30,
    sentence: "Это здание ... как склад для зерна.",
    translation: "Questo edificio viene utilizzato come magazzino per il grano.",
    options: ["используется", "пользуется", "эксплуатируется", "применяется"],
    optionBases: ["использоваться", "пользоваться", "эксплуатироваться", "применяться"],
    correctIndex: 0,
    verbPair: "использоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["использоваться"]
  },
  {
    id: 31,
    sentence: "Рекламные агентства ... психологические приемы.",
    translation: "Le agenzie pubblicitarie impiegano (utilizzano) trucchi psicologici.",
    options: ["используют", "пользуются", "применяют", "употребляют"],
    optionBases: ["использовать", "пользоваться", "применять", "употреблять"],
    correctIndex: 0,
    verbPair: "использовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["использовать"]
  },
  {
    id: 32,
    sentence: "Я никогда не ... нецензурную лексику.",
    translation: "Non uso mai un linguaggio volgare (parole volgari).",
    options: ["употребляю", "пользуюсь", "использую", "применяю"],
    optionBases: ["употреблять", "пользоваться", "использовать", "применять"],
    correctIndex: 0,
    verbPair: "употреблять — употребить",
    correctExplanation: POLZOVATSYA_VERB_MAP["употреблять"]
  },
  {
    id: 33,
    sentence: "Жители города ... чистой питьевой водой из артезианской скважины.",
    translation: "Gli abitanti della città usano acqua potabile pulita da un pozzo artesiano.",
    options: ["пользуются", "используют", "употребляют", "применяют"],
    optionBases: ["пользоваться", "использовать", "употреблять", "применять"],
    correctIndex: 0,
    verbPair: "пользоваться — попользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["пользоваться"]
  },
  {
    id: 34,
    sentence: "Преступник ... фальшивым паспортом.",
    translation: "Il criminale ha approfittato/usato un passaporto falso.",
    options: ["воспользовался", "пользовался", "использовал", "применил"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применить"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 35,
    sentence: "Для этого эксперимента нужно ... стерильные перчатки.",
    translation: "Per questo esperimento bisogna impiegare (utilizzare) guanti sterili.",
    options: ["использовать", "пользоваться", "употреблять", "применять"],
    optionBases: ["использовать", "пользоваться", "употреблять", "применять"],
    correctIndex: 0,
    verbPair: "использовать",
    correctExplanation: POLZOVATSYA_VERB_MAP["использовать"]
  },
  {
    id: 36,
    sentence: "Он ... властью в личных целях.",
    translation: "Ha abusato del potere per scopi personali.",
    options: ["злоупотребил", "воспользовался", "использовал", "применил"],
    optionBases: ["злоупотребить", "воспользоваться", "использовать", "применить"],
    correctIndex: 0,
    verbPair: "злоупотребил — употреблять",
    correctExplanation: POLZOVATSYA_VERB_MAP["злоупотреблять"]
  },
  {
    id: 37,
    sentence: "В походе нам пришлось ... старой картой.",
    translation: "Durante l'escursione abbiamo dovuto servirci (usare) di una vecchia mappa.",
    options: ["воспользоваться", "пользоваться", "использовать", "применить"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применять"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 38,
    sentence: "Автомобили ... всё больше бензина.",
    translation: "Le auto consumano sempre più benzina.",
    options: ["потребляют", "используют", "пользуются", "расходуют"],
    optionBases: ["потреблять", "использовать", "пользоваться", "расходовать"],
    correctIndex: 0,
    verbPair: "потреблять — потребиться",
    correctExplanation: POLZOVATSYA_VERB_MAP["потребить"]
  },
  {
    id: 39,
    sentence: "Вы можете ... моим зонтиком, пока идет дождь.",
    translation: "Potete servirvi del mio ombrello finché piove.",
    options: ["воспользоваться", "пользоваться", "использовать", "применить"],
    optionBases: ["воспользоваться", "пользоваться", "использовать", "применять"],
    correctIndex: 0,
    verbPair: "воспользоваться — пользоваться",
    correctExplanation: POLZOVATSYA_VERB_MAP["воспользоваться"]
  },
  {
    id: 40,
    sentence: "Эта технология ... в производстве смартфонов.",
    translation: "Questa tecnologia viene impiegata (applicata) nella produzione di smartphone.",
    options: ["применяется", "используется", "пользуется", "употребляется"],
    optionBases: ["применяться", "использоваться", "пользоваться", "употребляться"],
    correctIndex: 0,
    verbPair: "применяться — примениться",
    correctExplanation: POLZOVATSYA_VERB_MAP["применять"]
  }
];

import { Exercise } from '../types';

export const DERZHAT_VERB_MAP: Record<string, string> = {
  "держать": "(держать — SV): tenere in mano o in un certo stato (держать дверь, держать в секрете).",
  "держаться": "(держаться — SV): tenersi a qualcosa (за руку), resistere (полк держится) o comportarsi (держаться скромно).",
  "выдержать": "(выдерживать — выдержать): resistere a una prova (выдержать атаку), superare un esame o invecchiare bene (вино).",
  "задержать": "(задерживать — задержать): trattenere qualcuno (задержать преступника), ritardare o arrestare.",
  "поддержать": "(поддерживать — поддержать): sostenere fisicamente (поддержать голову) o moralmente (поддержать друга).",
  "придержать": "(придержать — придерживать): trattenere per un momento (придержать лошадь), rallentare.",
  "придерживаться": "(придерживаться — SV): attenersi a regole o consigli (придерживаться диеты).",
  "воздержаться": "(воздерживаться — воздержаться): astenersi da qualcosa (воздержаться от кофе, воздержаться при голосовании).",
  "продержаться": "(продержаться — SV): resistere per un certo lasso di tempo (продержаться неделю).",
  "сдержать": "(сдерживать — сдержать): contenere (сдержать смех, сдержать натиск) o mantenere (сдержать слово).",
  "содержать": "(содержать — SV): mantenere (содержать семью) o contenere (текст содержит ошибки).",
  "удержать": "(удерживать — удержать): riuscire a non far cadere (удержать тарелку), dedurre (удержать налог) o conservare in memoria.",
  "удержаться": "(удерживаться — удержаться): non riuscire a non fare qualcosa (не удержался от смеха) o restare in equilibrio.",
};

export const DERZHAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мать всю дорогу ... ребёнка за руку.",
    translation: "La madre ha tenuto il bambino per mano per tutto il tragitto.",
    options: ["держала", "выдержала", "задержала", "сдержала"],
    optionBases: ["держать", "выдержать", "задержать", "сдержать"],
    correctIndex: 0,
    verbPair: "держать",
    correctExplanation: DERZHAT_VERB_MAP["держать"]
  },
  {
    id: 2,
    sentence: "Стекло не ..., и по нему пошла трещина.",
    translation: "Il vetro non ha resistito (alla pressione) e si è creata una crepa.",
    options: ["выдержало", "задержало", "поддержало", "сдержало"],
    optionBases: ["выдержать", "задержать", "поддержать", "сдержать"],
    correctIndex: 0,
    verbPair: "выдержать — выдерживать",
    correctExplanation: DERZHAT_VERB_MAP["выдержать"]
  },
  {
    id: 3,
    sentence: "Полиция ... подозреваемого на сорок восемь часов.",
    translation: "La polizia ha trattenuto il sospettato per quarantotto ore.",
    options: ["задержала", "придержала", "удержала", "сдержала"],
    optionBases: ["задержать", "придержать", "удержать", "сдержать"],
    correctIndex: 0,
    verbPair: "задержать — задерживать",
    correctExplanation: DERZHAT_VERB_MAP["задержать"]
  },
  {
    id: 4,
    sentence: "Друзья всегда готовы ... меня в трудную минуту.",
    translation: "Gli amici sono sempre pronti a sostenermi nel momento del bisogno.",
    options: ["поддержать", "содержать", "удержать", "выдержать"],
    optionBases: ["поддержать", "содержать", "удержать", "выдержать"],
    correctIndex: 0,
    verbPair: "поддержать — поддерживать",
    correctExplanation: DERZHAT_VERB_MAP["поддержать"]
  },
  {
    id: 5,
    sentence: "Врач посоветовал мне ... строгой диеты.",
    translation: "Il medico mi ha consigliato di attenermi a una dieta rigorosa.",
    options: ["придерживаться", "воздержаться", "удержаться", "содержаться"],
    optionBases: ["придерживаться", "воздержаться", "удержаться", "содержаться"],
    correctIndex: 0,
    verbPair: "придерживаться",
    correctExplanation: DERZHAT_VERB_MAP["придерживаться"]
  },
  {
    id: 6,
    sentence: "Он не ..., и всё-таки рассказал наш секрет.",
    translation: "Non è riuscito a trattenersi e ha raccontato comunque il nostro segreto.",
    options: ["удержался", "сдержался", "продержался", "воздержался"],
    optionBases: ["удержаться", "сдержаться", "продержаться", "воздержаться"],
    correctIndex: 0,
    verbPair: "удержаться — удерживаться",
    correctExplanation: DERZHAT_VERB_MAP["удержаться"]
  },
  {
    id: 7,
    sentence: "Мы ... при голосовании, так как не знали всех фактов.",
    translation: "Ci siamo astenuti dal voto perché non conoscevamo tutti i fatti.",
    options: ["воздержались", "задержались", "удержались", "поддержались"],
    optionBases: ["воздержаться", "задержаться", "удержаться", "поддержать"],
    correctIndex: 0,
    verbPair: "воздержаться — воздерживаться",
    correctExplanation: DERZHAT_VERB_MAP["воздержаться"]
  },
  {
    id: 8,
    sentence: "Армия противника смогла ... в крепости только три дня.",
    translation: "L'esercito nemico è riuscito a resistere (mantenersi) nella fortezza solo tre giorni.",
    options: ["продержаться", "выдержать", "задержаться", "удержаться"],
    optionBases: ["продержаться", "выдержать", "задержаться", "удержаться"],
    correctIndex: 0,
    verbPair: "продержаться",
    correctExplanation: DERZHAT_VERB_MAP["продержаться"]
  },
  {
    id: 9,
    sentence: "Он с трудом ..., чтобы не заплакать на публике.",
    translation: "A fatica ha contenuto (trattenuto le emozioni) sé stesso per non piangere in pubblico.",
    options: ["сдержался", "удержался", "задержался", "продержался"],
    optionBases: ["сдержаться", "удержаться", "задержаться", "продержаться"],
    correctIndex: 0,
    verbPair: "сдержаться — сдерживаться",
    correctExplanation: DERZHAT_VERB_MAP["сдержать"]
  },
  {
    id: 10,
    sentence: "Этот продукт ... много витамина С.",
    translation: "Questo prodotto contiene molta vitamina C.",
    options: ["содержит", "удерживает", "поддерживает", "задерживает"],
    optionBases: ["содержать", "удерживать", "поддерживать", "задерживать"],
    correctIndex: 0,
    verbPair: "содержать",
    correctExplanation: DERZHAT_VERB_MAP["содержать"]
  },
  {
    id: 11,
    sentence: "Из моей зарплаты ежемесячно ... подоходный налог.",
    translation: "Dalla mia busta paga viene detratta (trattenuta) ogni mese l'imposta sul reddito.",
    options: ["удерживают", "сдерживают", "задерживают", "выдерживают"],
    optionBases: ["удержать", "сдержать", "задержать", "выдержать"],
    correctIndex: 0,
    verbPair: "удержать — удерживать",
    correctExplanation: DERZHAT_VERB_MAP["удержать"]
  },
  {
    id: 12,
    sentence: "Пожалуйста, ... швейцара, я сейчас вернусь.",
    translation: "Per favore, trattenga l'uscere (un momento), torno subito.",
    options: ["придержите", "задержите", "поддержите", "сдержите"],
    optionBases: ["придержать", "задержать", "поддержать", "сдержать"],
    correctIndex: 0,
    verbPair: "придержать — придерживать",
    correctExplanation: DERZHAT_VERB_MAP["придержать"]
  },
  {
    id: 13,
    sentence: "Он всегда старался ... своё слово.",
    translation: "Ha sempre cercato di mantenere la sua parola.",
    options: ["сдержать", "выдержать", "поддержать", "содержать"],
    optionBases: ["сдержать", "выдержать", "поддержать", "содержать"],
    correctIndex: 0,
    verbPair: "сдержать — сдерживать",
    correctExplanation: DERZHAT_VERB_MAP["сдержать"]
  },
  {
    id: 14,
    sentence: "Она была вынуждена одна ... всю свою большую семью.",
    translation: "È stata costretta a mantenere da sola tutta la sua numerosa famiglia.",
    options: ["содержать", "поддержать", "задержать", "удержать"],
    optionBases: ["содержать", "поддержать", "задержать", "удержать"],
    correctIndex: 0,
    verbPair: "содержать",
    correctExplanation: DERZHAT_VERB_MAP["содержать"]
  },
  {
    id: 15,
    sentence: "Этот мост не может ... такой огромный вес.",
    translation: "Questo ponte non può reggere (sopportare) un peso così enorme.",
    options: ["выдержать", "сдержать", "удержать", "поддержать"],
    optionBases: ["выдержать", "сдержать", "удержать", "поддержать"],
    correctIndex: 0,
    verbPair: "выдержать — выдерживать",
    correctExplanation: DERZHAT_VERB_MAP["выдержать"]
  },
  {
    id: 16,
    sentence: "Во время выступления лектор ... очень уверенно.",
    translation: "Durante il discorso il conferenziere si è comportato (si è posto) in modo molto sicuro.",
    options: ["держался", "держал", "сдержался", "задержался"],
    optionBases: ["держаться", "держать", "сдержаться", "задержаться"],
    correctIndex: 0,
    verbPair: "держаться",
    correctExplanation: DERZHAT_VERB_MAP["держаться"]
  },
  {
    id: 17,
    sentence: "Поезд ... на станции из-за технических проблем.",
    translation: "Il treno ha tardato (è stato trattenuto) alla stazione per problemi tecnici.",
    options: ["задержался", "продержался", "продержал", "удержался"],
    optionBases: ["задержаться", "продержаться", "продержать", "удержаться"],
    correctIndex: 0,
    verbPair: "задержаться — задерживаться",
    correctExplanation: "Restare più a lungo o tardare."
  },
  {
    id: 18,
    sentence: "В этой книге ... подробная информация о событии.",
    translation: "In questo libro è contenuta un'informazione dettagliata sull'evento.",
    options: ["содержится", "держится", "задерживается", "удерживается"],
    optionBases: ["содержаться", "держаться", "задерживаться", "удерживаться"],
    correctIndex: 0,
    verbPair: "содержаться",
    correctExplanation: DERZHAT_VERB_MAP["содержаться"]
  },
  {
    id: 19,
    sentence: "Малыш едва ... на ногах от усталости.",
    translation: "Il bambino stava a malapena in piedi (si teneva sulle gambe) per la stanchezza.",
    options: ["держался", "удержался", "выдержал", "задержался"],
    optionBases: ["держаться", "удержаться", "выдержать", "задержаться"],
    correctIndex: 0,
    verbPair: "держаться",
    correctExplanation: DERZHAT_VERB_MAP["держаться"]
  },
  {
    id: 20,
    sentence: "Вы должны ... этих правил, если хотите работать здесь.",
    translation: "Dovete attenervi a queste regole se volete lavorare qui.",
    options: ["придерживаться", "воздерживаться", "удерживаться", "содержаться"],
    optionBases: ["придерживаться", "воздерживаться", "удерживаться", "содержаться"],
    correctIndex: 0,
    verbPair: "придерживаться",
    correctExplanation: DERZHAT_VERB_MAP["придерживаться"]
  }
];

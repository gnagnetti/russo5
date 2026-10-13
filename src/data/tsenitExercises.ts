import { Exercise } from '../types';

export const TSENIT_VERB_MAP: Record<string, string> = {
  "ценить": "(ценить — оценить): significa dare valore, apprezzare la qualità o l'importanza di qualcuno o qualcosa (ценить дружбу, ценить помощь). Spesso usato per valori astratti.",
  "оценить": "(оценить — оценивать): significa dare una valutazione, stimare il valore economico, dare un voto o giudicare un risultato (оценить квартиру, оценить работу на 'пятерку').",
  "оценивать": "forma imperfettiva di оценить, indica l'atto di analizzare e giudicare sistematicamente (эксперты оценивают риски).",
  "дорожить": "tenere molto a qualcosa, averne cura estrema perché prezioso, temere di perderlo (дорожить репутацией, дорожить своим временем). Richiede lo strumentale.",
  "недооценить": "sottovalutare (недооценить противника).",
  "переоценить": "sopravvalutare o rivalutare radicalmente (переоценить свои возможности).",
  "уценить": "ridurre il prezzo di merce difettosa o vecchia (уценить товар).",
  "расценить": "interpretare un'azione in un certo modo o stabilire una tariffa (расценить этот поступок как предательство).",
  "признавать": "riconoscere il merito o la validità di qualcosa (признавать заслуги).",
  "превозносить": "esaltare o lodare eccessivamente.",
  "почитать": "onorare o rispettare profondamente (почитать старших)."
};

export const TSENIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мы очень ... вашу поддержку в это трудное время.",
    translation: "Apprezziamo molto il vostro supporto in questo momento difficile.",
    options: ["ценим", "оцениваем", "дорожим", "уцениваем"],
    optionBases: ["ценить", "оценивать", "дорожить", "уценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 2,
    sentence: "Эксперт пришел, чтобы ... стоимость антикварной мебели.",
    translation: "L'esperto è venuto per valutare il costo dei mobili antichi.",
    options: ["оценить", "ценить", "дорожить", "расценить"],
    optionBases: ["оценить", "ценить", "дорожить", "расценить"],
    correctIndex: 0,
    verbPair: "оценить — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 3,
    sentence: "Я очень ... своей репутацией и никогда не обманываю клиентов.",
    translation: "Tengo molto alla mia reputazione e non inganno mai i clienti.",
    options: ["дорожу", "ценю", "оцениваю", "расцениваю"],
    optionBases: ["дорожить", "ценить", "оценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "дорожить",
    correctExplanation: TSENIT_VERB_MAP["дорожить"]
  },
  {
    id: 4,
    sentence: "Учитель ... мой ответ на 'отлично'.",
    translation: "L'insegnante ha valutato la mia risposta con un 'eccellente'.",
    options: ["оценил", "ценил", "недооценил", "переоценил"],
    optionBases: ["оценить", "ценить", "недооценить", "переоценить"],
    correctIndex: 0,
    verbPair: "оценил — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 5,
    sentence: "Он слишком ... свои способности и потерпел неудачу.",
    translation: "Ha sopravvalutato troppo le sue capacità e ha subito un fallimento.",
    options: ["переоценил", "недооценил", "оценил", "уценил"],
    optionBases: ["переоценить", "недооценить", "оценить", "уценить"],
    correctIndex: 0,
    verbPair: "переоценить",
    correctExplanation: TSENIT_VERB_MAP["переоценить"]
  },
  {
    id: 6,
    sentence: "Мы ... дружбу выше денег.",
    translation: "Apprezziamo (diamo valore a) la l'amicizia più dei soldi.",
    options: ["ценим", "оцениваем", "уцениваем", "расцениваем"],
    optionBases: ["ценить", "оценивать", "уценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 7,
    sentence: "Продавцу пришлось ... товар из-за небольшого брака.",
    translation: "Il venditore ha dovuto svendere (ridurre il prezzo) la merce a causa di un piccolo difetto.",
    options: ["уценить", "оценить", "расценить", "переоценить"],
    optionBases: ["уценить", "оценить", "расценить", "переоценить"],
    correctIndex: 0,
    verbPair: "уценить — уценивать",
    correctExplanation: TSENIT_VERB_MAP["уценить"]
  },
  {
    id: 8,
    sentence: "Никто не должен ... силу своего противника.",
    translation: "Nessuno deve sottovalutare la forza del proprio avversario.",
    options: ["недооценивать", "переоценивать", "оценивать", "ценить"],
    optionBases: ["недооценивать", "переоценивать", "оценивать", "ценить"],
    correctIndex: 0,
    verbPair: "недооценивать — недооценить",
    correctExplanation: TSENIT_VERB_MAP["недооценить"]
  },
  {
    id: 9,
    sentence: "Директор ... мой поступок как неуважение к коллегам.",
    translation: "Il direttore ha interpretato il mio gesto come mancanza di rispetto verso i colleghi.",
    options: ["расценил", "оценил", "ценил", "уценил"],
    optionBases: ["расценить", "оценить", "ценить", "уценить"],
    correctIndex: 0,
    verbPair: "расценил — расценивать",
    correctExplanation: TSENIT_VERB_MAP["расценить"]
  },
  {
    id: 10,
    sentence: "Я всегда ... хорошую литературу.",
    translation: "Apprezzo (dò valore a) sempre la buona letteratura.",
    options: ["ценю", "оцениваю", "дорожу", "расцениваю"],
    optionBases: ["ценить", "оценивать", "дорожить", "расценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 11,
    sentence: "Жюри долго ... выступление каждого участника.",
    translation: "La giuria ha valutato a lungo l'esibizione di ogni partecipante.",
    options: ["оценивало", "ценило", "уценивало", "дорожило"],
    optionBases: ["оценивать", "ценить", "уценивать", "дорожить"],
    correctIndex: 0,
    verbPair: "оценивать — оценить",
    correctExplanation: TSENIT_VERB_MAP["оценивать"]
  },
  {
    id: 12,
    sentence: "Мудрый человек ... своим здоровьем с молодости.",
    translation: "Una persona saggia tiene molto alla propria salute fin dalla giovinezza.",
    options: ["дорожит", "ценит", "оценивает", "уценивает"],
    optionBases: ["дорожить", "ценить", "оценивать", "уценивать"],
    correctIndex: 0,
    verbPair: "дорожить",
    correctExplanation: TSENIT_VERB_MAP["дорожить"]
  },
  {
    id: 13,
    sentence: "Нам нужно снова ... ситуацию после этих новостей.",
    translation: "Dobbiamo rivalutare la situazione dopo queste notizie.",
    options: ["переоценить", "недооценить", "уценить", "наценить"],
    optionBases: ["переоценить", "недооценить", "уценить", "наценить"],
    correctIndex: 0,
    verbPair: "переоценить",
    correctExplanation: "Significa guardare alla situazione in modo nuovo o differente."
  },
  {
    id: 14,
    sentence: "Он ... её помощь как должное.",
    translation: "Ha dato (valutato) il suo aiuto per scontato.",
    options: ["расценил (воспринял)", "ценил", "дорожил", "уценил"],
    optionBases: ["расценить", "ценить", "дорожить", "уценить"],
    correctIndex: 0,
    verbPair: "расценил",
    correctExplanation: TSENIT_VERB_MAP["расценить"]
  },
  {
    id: 15,
    sentence: "В этой лавке часто можно найти ... товары.",
    translation: "In questo negozio si possono spesso trovare merci scontate (svendute).",
    options: ["уценённые", "ценовые", "оценённые", "ценные"],
    optionBases: ["уценить", "цена", "оценить", "ценить"],
    correctIndex: 0,
    verbPair: "уценённый",
    correctExplanation: TSENIT_VERB_MAP["уценить"]
  },
  {
    id: 16,
    sentence: "Я ... каждую минуту, проведенную с семьей.",
    translation: "Dò valore (apprezzo) a ogni minuto trascorso con la famiglia.",
    options: ["ценю", "оцениваю", "уцениваю", "расцениваю"],
    optionBases: ["ценить", "оценивать", "уценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 17,
    sentence: "Налоговая служба ... его доход за прошлый год.",
    translation: "L'ufficio delle imposte ha valutato il suo reddito per l'anno scorso.",
    options: ["оценила", "ценила", "дорожила", "превознесла"],
    optionBases: ["оценить", "ценить", "дорожить", "превозносить"],
    correctIndex: 0,
    verbPair: "оценить — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 18,
    sentence: "Мой дед очень ... честью нашей фамилии.",
    translation: "Mio nonno tiene moltissimo all'onore del nostro cognome.",
    options: ["дорожит", "ценит", "оценивает", "расценивает"],
    optionBases: ["дорожить", "ценить", "оценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "дорожить",
    correctExplanation: TSENIT_VERB_MAP["дорожить"]
  },
  {
    id: 19,
    sentence: "Нельзя ... риск при восхождении на гору.",
    translation: "Non si può sottovalutare il rischio durante la scalata di una montagna.",
    options: ["недооценивать", "переоценивать", "оценивать", "ценить"],
    optionBases: ["недооценивать", "переоценивать", "оценивать", "ценить"],
    correctIndex: 0,
    verbPair: "недооценивать — недооценить",
    correctExplanation: TSENIT_VERB_MAP["недооценить"]
  },
  {
    id: 20,
    sentence: "Она ... свою свободу выше всего.",
    translation: "Lei mette (apprezza/dà valore) la propria libertà sopra ogni cosa.",
    options: ["ценит", "оценивает", "дорожит", "уценивает"],
    optionBases: ["ценить", "оценивать", "дорожить", "уценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 21,
    sentence: "Банк ... заложенное имущество.",
    translation: "La banca ha valutato la proprietà data in pegno.",
    options: ["оценил", "ценил", "дорожил", "недооценил"],
    optionBases: ["оценить", "ценить", "дорожить", "недооценить"],
    correctIndex: 0,
    verbPair: "оценил — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 22,
    sentence: "Он научился ... искренность в людях только с годами.",
    translation: "Ha imparato ad apprezzare la sincerità nelle persone solo con gli anni.",
    options: ["ценить", "оценивать", "дорожить", "расценивать"],
    optionBases: ["ценить", "оценивать", "дорожить", "расценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 23,
    sentence: "Нам пришлось ... этот поступок как предательство.",
    translation: "Abbiamo dovuto interpretare (valutare come) questo gesto come un tradimento.",
    options: ["расценить", "оценить", "ценить", "недооценить"],
    optionBases: ["расценить", "оценить", "ценить", "недооценить"],
    correctIndex: 0,
    verbPair: "расценить — расценивать",
    correctExplanation: TSENIT_VERB_MAP["расценить"]
  },
  {
    id: 24,
    sentence: "Пожалуйста, ... моё время и не опаздывайте.",
    translation: "Per favore, tenete in gran conto (abbiate cura di/apprezzate) il mio tempo e non fate tardi.",
    options: ["дорожите (цените)", "оценивайте", "уценивайте", "наценивайте"],
    optionBases: ["дорожить", "оценивать", "уценивать", "наценивать"],
    correctIndex: 0,
    verbPair: "дорожить",
    correctExplanation: TSENIT_VERB_MAP["дорожить"]
  },
  {
    id: 25,
    sentence: "Эта картина ... специалистами в миллион долларов.",
    translation: "Questo quadro è stato valutato dagli specialisti in un milione di dollari.",
    options: ["оценена", "ценима", "дорожима", "переоценена"],
    optionBases: ["оценить", "ценить", "дорожить", "переоценить"],
    correctIndex: 0,
    verbPair: "оценена",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 26,
    sentence: "Я очень ... то, что вы сделали для меня.",
    translation: "Apprezzo molto quello che avete fatto per me.",
    options: ["ценю", "оцениваю", "уцениваю", "расцениваю"],
    optionBases: ["ценить", "оценивать", "уценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 27,
    sentence: "Студент ... сложность экзамена и плохо подготовился.",
    translation: "Lo studente ha sottovalutato la difficoltà dell'esame e si è preparato male.",
    options: ["недооценил", "переоценил", "оценил", "ценил"],
    optionBases: ["недооценить", "переоценить", "оценить", "ценить"],
    correctIndex: 0,
    verbPair: "недооценил",
    correctExplanation: TSENIT_VERB_MAP["недооценить"]
  },
  {
    id: 28,
    sentence: "Мы всегда ... квалифицированных сотрудников.",
    translation: "Diamo sempre valore (apprezziamo) ai dipendenti qualificati.",
    options: ["ценим", "оцениваем", "дорожим", "расцениваем"],
    optionBases: ["ценить", "оценивать", "дорожить", "расценивать"],
    correctIndex: 0,
    verbPair: "ценим",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 29,
    sentence: "Издатель ... талант молодого писателя.",
    translation: "L'editore ha valutato (giudicato/riconosciuto) il talento del giovane scrittore.",
    options: ["оценил", "ценил", "уценил", "расценил"],
    optionBases: ["оценить", "ценить", "уценить", "расценить"],
    correctIndex: 0,
    verbPair: "оценил — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 30,
    sentence: "Он всю жизнь ... своей независимостью.",
    translation: "Ha tenuto moltissimo (aver cura) alla propria indipendenza per tutta la vita.",
    options: ["дорожил", "ценил", "оценивал", "расценивал"],
    optionBases: ["дорожить", "ценить", "оценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "дорожил — дорожить",
    correctExplanation: TSENIT_VERB_MAP["дорожить"]
  },
  {
    id: 31,
    sentence: "Нам нужно ... результаты проекта к концу недели.",
    translation: "Dobbiamo valutare i risultati del progetto entro la fine della settimana.",
    options: ["оценить", "ценить", "недооценить", "переоценить"],
    optionBases: ["оценить", "ценить", "недооценить", "переоценить"],
    correctIndex: 0,
    verbPair: "оценить — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 32,
    sentence: "Я не могу ... твою доброту какими-то деньгами.",
    translation: "Non posso misurare (valutare) la tua bontà con dei soldi.",
    options: ["оценить", "ценить", "недооценить", "расценить"],
    optionBases: ["оценить", "ценить", "недооценить", "расценить"],
    correctIndex: 0,
    verbPair: "оценить",
    correctExplanation: "Qui indica l'atto di dare un valore numerico o materiale."
  },
  {
    id: 33,
    sentence: "Она ... верность в браке превыше всего.",
    translation: "Lei apprezza (dà valore a) la fedeltà nel matrimonio sopra ogni cosa.",
    options: ["ценит", "оценивает", "дорожит", "расценивает"],
    optionBases: ["ценить", "оценивать", "дорожить", "расценивать"],
    correctIndex: 0,
    verbPair: "ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  },
  {
    id: 34,
    sentence: "Магазин ... зимнюю одежду в конце февраля.",
    translation: "Il negozio svende (riduce il prezzo) l'abbigliamento invernale alla fine di febbraio.",
    options: ["уценивает", "оценивает", "ценит", "переоценивает"],
    optionBases: ["уценивать", "оценивать", "ценить", "переоценивать"],
    correctIndex: 0,
    verbPair: "уценивает — уценить",
    correctExplanation: TSENIT_VERB_MAP["уценить"]
  },
  {
    id: 35,
    sentence: "Рефери ... этот прием как нарушение правил.",
    translation: "L'arbitro ha interpretato (valutato come) questa mossa come una violazione delle regole.",
    options: ["расценил", "оценил", "ценил", "недооценил"],
    optionBases: ["расценить", "оценить", "ценить", "недооценить"],
    correctIndex: 0,
    verbPair: "расценил — расценивать",
    correctExplanation: TSENIT_VERB_MAP["расценить"]
  },
  {
    id: 36,
    sentence: "Ученый должен уметь объективно ... свои данные.",
    translation: "Uno scienziato deve saper valutare i propri dati in modo obiettivo.",
    options: ["оценивать", "ценить", "дорожить", "превозносить"],
    optionBases: ["оценивать", "ценить", "дорожить", "превозносить"],
    correctIndex: 0,
    verbPair: "оценивать — оценить",
    correctExplanation: TSENIT_VERB_MAP["оценивать"]
  },
  {
    id: 37,
    sentence: "Многие люди ... свою приватность в интернете.",
    translation: "Molte persone tengono molto (hanno cura) della loro privacy su internet.",
    options: ["дорожат", "ценит", "оценивают", "расценивают"],
    optionBases: ["дорожить", "ценить", "оценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "дорожат — дорожить",
    correctExplanation: TSENIT_VERB_MAP["дорожить"]
  },
  {
    id: 38,
    sentence: "Публика по достоинству ... новый фильм режиссера.",
    translation: "Il pubblico ha valutato degnamente (riconosciuto il valore) il nuovo film del regista.",
    options: ["оценила", "ценила", "уценила", "переоценила"],
    optionBases: ["оценить", "ценить", "уценить", "переоценить"],
    correctIndex: 0,
    verbPair: "оценила — оценивать",
    correctExplanation: TSENIT_VERB_MAP["оценить"]
  },
  {
    id: 39,
    sentence: "Не стоит ... важность этого открытия.",
    translation: "Non vale la pena sottovalutare l'importanza di questa scoperta.",
    options: ["недооценивать", "переоценивать", "оценивать", "ценить"],
    optionBases: ["недооценивать", "переоценивать", "оценивать", "ценить"],
    correctIndex: 0,
    verbPair: "недооценивать — недооценить",
    correctExplanation: TSENIT_VERB_MAP["недооценить"]
  },
  {
    id: 40,
    sentence: "Я очень ... нашу дружбу.",
    translation: "Dò molto valore alla nostra amicizia.",
    options: ["ценю", "оцениваю", "уцениваю", "расцениваю"],
    optionBases: ["ценить", "оценивать", "уценивать", "расценивать"],
    correctIndex: 0,
    verbPair: "ценю — ценить",
    correctExplanation: TSENIT_VERB_MAP["ценить"]
  }
];

import { Exercise } from '../types';

export const PRIGOTOVIT_VERB_MAP: Record<string, string> = {
  "приготовить": "(приготовить — готовить): significa preparare qualcosa in generale, molto comune per il cibo (приготовить ужин) o un compito specifico.",
  "подготовить": "(подготовить — подготавливать): significa preparare con cura e sistematicità, spesso riferito a esami, documenti, discorsi o persone (подготовить отчет, подготовить почву).",
  "заготовить": "(заготовить — заготавливать): significa preparare in anticipo o fare scorte di qualcosa per il futuro (заготовить дрова на зиму, заготовить продукты).",
  "изготовить": "(изготовить — изготавливать): significa fabbricare o produrre industrialmente o artigianalmente (изготовить деталь, изготовить мебель).",
  "приготовиться": "(приготовиться — готовиться): significa prepararsi a qualcosa di imminente o mettersi in stato di allerta (приготовиться к отъезду, приготовиться к прыжку).",
  "подготовиться": "(подготовиться — готовиться): significa studiare o allenarsi per un evento futuro (подготовиться к экзамену, подготовиться к соревнованиям).",
  "наготовить": "preparare una grande quantità di cibo (наготовить еды на целую толпу).",
  "доготовить": "finire di preparare/cuocere qualcosa che non era ancora pronto.",
  "переготовить": "preparare di nuovo (rifare) o cuocere troppo (scuocere/bruciare).",
  "сготовить": "forma colloquiale per 'cucinare qualcosa' (сготовить что-нибудь по-быстрому).",
  "угораздить": "capitare per sfortuna (non direttamente legato alla radice 'готов', ma spesso confuso in contesti di 'prepararsi a guai'). *N.B. non fa parte della famiglia 'готов' ma è una curiosità.*",
  "проговорить": "(fuori contesto, rimosso)."
};

export const PRIGOTOVIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мама обещала ... мой любимый суп сегодня.",
    translation: "La mamma ha promesso di preparare la mia zuppa preferita oggi.",
    options: ["приготовить", "подготовить", "заготовить", "изготовить"],
    optionBases: ["приготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "приготовить — готовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 2,
    sentence: "Студент должен хорошо ... к предстоящему экзамену.",
    translation: "Lo studente deve prepararsi bene per l'esame imminente.",
    options: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    optionBases: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    correctIndex: 1,
    verbPair: "подготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовиться"]
  },
  {
    id: 3,
    sentence: "Нам нужно ... дрова на всю зиму.",
    translation: "Dobbiamo preparare (fare scorte di) legna per tutto l'inverno.",
    options: ["заготовить", "приготовить", "подготовить", "изготовить"],
    optionBases: ["заготовить", "приготовить", "подготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "заготовить — заготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["заготовить"]
  },
  {
    id: 4,
    sentence: "Этот завод ... детали для самолётов.",
    translation: "Questa fabbrica produce (fabbrica) componenti per aerei.",
    options: ["приготавливает", "изготавливает", "подготавливает", "заготавливает"],
    optionBases: ["приготавливать", "изготавливать", "подготавливать", "заготавливать"],
    correctIndex: 1,
    verbPair: "изготавливать — изготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 5,
    sentence: "Вам нужно ... все необходимые документы заранее.",
    translation: "Dovete preparare tutti i documenti necessari in anticipo.",
    options: ["приготовить", "подготовить", "заготовить", "изготовить"],
    optionBases: ["приготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 1,
    verbPair: "подготовить — подготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовить"]
  },
  {
    id: 6,
    sentence: "Пожалуйста, ... к выходу, мы скоро приедем.",
    translation: "Per favore, preparati a uscire, arriveremo presto.",
    options: ["приготовься", "подготовься", "заготовься", "изготовься"],
    optionBases: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "приготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовиться"]
  },
  {
    id: 7,
    sentence: "Бабушка ... столько еды, что мы не смогли всё съесть.",
    translation: "La nonna ha preparato così tanto cibo che non siamo riusciti a mangiare tutto.",
    options: ["наготовила", "подготовила", "заготовила", "изготовила"],
    optionBases: ["наготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "наготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["наготовить"]
  },
  {
    id: 8,
    sentence: "Мясо ещё жесткое, его нужно ... ещё минут десять.",
    translation: "La carne è ancora dura, bisogna finire di cuocerla ancora per dieci minuti.",
    options: ["доготовить", "приготовить", "подготовить", "заготовить"],
    optionBases: ["доготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "доготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["доготовить"]
  },
  {
    id: 9,
    sentence: "Секретарь должен ... приказ к подписи.",
    translation: "Il segretario deve preparare (redigere con cura) l'ordine per la firma.",
    options: ["приготовить", "подготовить", "заготовить", "изготовить"],
    optionBases: ["приготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 1,
    verbPair: "подготовить — подготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовить"]
  },
  {
    id: 10,
    sentence: "Осенью люди ... соленья и варенье.",
    translation: "In autunno la gente prepara (fa scorte di) sottaceti e marmellate.",
    options: ["заготавливают", "приготавливают", "подготавливают", "изготавливают"],
    optionBases: ["заготавливать", "приготавливать", "подготавливать", "изготавливать"],
    correctIndex: 0,
    verbPair: "заготавливать — заготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["заготовить"]
  },
  {
    id: 11,
    sentence: "Спортсмены целый год ... к олимпийским играм.",
    translation: "Gli atleti si sono preparati (allenati) per un anno intero per i giochi olimpici.",
    options: ["приготавливались", "подготавливались", "заготавливались", "изготавливались"],
    optionBases: ["приготавливаться", "подготавливаться", "заготавливаться", "изготавливаться"],
    correctIndex: 1,
    verbPair: "подготавливаться — подготовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовиться"]
  },
  {
    id: 12,
    sentence: "Ювелир ... обручальные кольца по индивидуальному заказу.",
    translation: "Il gioielliere ha prodotto (fabbricato) le fedi nuziali su ordine individuale.",
    options: ["изготовил", "приготовил", "подготовил", "заготовил"],
    optionBases: ["изготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "изготовить — изготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 13,
    sentence: "Я помогу тебе ... сюрприз для сестры.",
    translation: "Ti aiuterò a preparare una sorpresa per tua sorella.",
    options: ["приготовить", "подготовить", "заготовить", "изготовить"],
    optionBases: ["приготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "приготовить — готовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 14,
    sentence: "Внимание! ... к старту!",
    translation: "Attenzione! Prepararsi alla partenza!",
    options: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    optionBases: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "приготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовиться"]
  },
  {
    id: 15,
    sentence: "Они ... сено для коров.",
    translation: "Hanno preparato (fatto scorta di) fieno per le mucche.",
    options: ["заготовили", "приготовили", "подготовили", "изготовили"],
    optionBases: ["заготовить", "приготовить", "подготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "заготовить — заготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["заготовить"]
  },
  {
    id: 16,
    sentence: "Чтобы ..., нужно прочитать много книг.",
    translation: "Per prepararsi (studiare), bisogna leggere molti libri.",
    options: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    optionBases: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "подготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовиться"]
  },
  {
    id: 17,
    sentence: "Этот препарат был ... в лаборатории.",
    translation: "Questo farmaco è stato prodotto (fabbricato) in laboratorio.",
    options: ["изготовлен", "приготовлен", "подготовлен", "заготовлен"],
    optionBases: ["изготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "изготовлен — изготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 18,
    sentence: "Мы ... почву для новых посадок.",
    translation: "Abbiamo preparato (preparato il terreno accuratamente) per le nuove semine.",
    options: ["подготовили", "приготовили", "заготовили", "изготовили"],
    optionBases: ["подготовить", "приготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "подготовить — подготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовить"]
  },
  {
    id: 19,
    sentence: "Она ... пирог всего за полчаса.",
    translation: "Ha preparato una torta in soli trenta minuti.",
    options: ["приготовила", "подготовила", "заготовила", "изготовила"],
    optionBases: ["приготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "приготовила — приготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 20,
    sentence: "Лесничество ... саженцы для восстановления леса.",
    translation: "La guardia forestale ha preparato (fatto scorta di) piantine per il rimboschimento.",
    options: ["заготовило", "приготовило", "подготовило", "изготовило"],
    optionBases: ["заготовить", "приготовить", "подготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "заготовить — заготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["заготовить"]
  },
  {
    id: 21,
    sentence: "Я должен ... к выступлению на конференции.",
    translation: "Devo prepararmi per l'intervento alla conferenza.",
    options: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    optionBases: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "подготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовиться"]
  },
  {
    id: 22,
    sentence: "Мастера ... этот ковёр вручную.",
    translation: "I maestri hanno fabbricato questo tappeto a mano.",
    options: ["изготовили", "приготовили", "подготовили", "заготовили"],
    optionBases: ["изготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "изготовили — изготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 23,
    sentence: "Давай ... чай с лимоном.",
    translation: "Prepariamo un tè con limone.",
    options: ["приготовим", "подготовим", "заготовим", "изготовим"],
    optionBases: ["приготовить", "подготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "приготовим — приготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 24,
    sentence: "Армия ... к наступлению.",
    translation: "L'esercito si preparava (stato di allerta) all'offensiva.",
    options: ["готовилась (приготовилась)", "подготавливалась", "заготавливалась", "изготавливалась"],
    optionBases: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "приготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовиться"]
  },
  {
    id: 25,
    sentence: "Нам нужно ... материалы для строительства.",
    translation: "Dobbiamo preparare (fare scorta di) materiali per la costruzione.",
    options: ["заготовить", "приготовить", "подготовить", "изготовить"],
    optionBases: ["заготовить", "приготовить", "подготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "заготовить — заготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["заготовить"]
  },
  {
    id: 26,
    sentence: "Адвокат ... убедительную речь.",
    translation: "L'avvocato ha preparato (steso con cura) un discorso convincente.",
    options: ["подготовил", "приготовил", "заготовил", "изготовил"],
    optionBases: ["подготовить", "приготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "подготовил — подготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовить"]
  },
  {
    id: 27,
    sentence: "Эта мебель была ... в Италии.",
    translation: "Questo mobile è stato fabbricato in Italia.",
    options: ["изготовлена", "приготовлена", "подготовлена", "заготовлена"],
    optionBases: ["изготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "изготовлена — изготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 28,
    sentence: "Хозяйка ... много вкусных закусок.",
    translation: "La padrona di casa ha preparato (molte) deliziose tartine.",
    options: ["наготовила", "заготовила", "подготовила", "изготовила"],
    optionBases: ["наготовить", "заготовить", "подготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "наготовила",
    correctExplanation: PRIGOTOVIT_VERB_MAP["наготовить"]
  },
  {
    id: 29,
    sentence: "Тебе пора ... к лекции.",
    translation: "È ora che tu ti prepari (studi) per la lezione.",
    options: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    optionBases: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "подготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовиться"]
  },
  {
    id: 30,
    sentence: "Рыбу нужно ... на малом огне.",
    translation: "Il pesce deve essere cotto (preparato) a fuoco lento.",
    options: ["готовить", "подготавливать", "заготавливать", "изготавливать"],
    optionBases: ["готовить", "подготавливать", "заготавливать", "изготавливать"],
    correctIndex: 0,
    verbPair: "готовить — приготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 31,
    sentence: "Мы ... план действий в чрезвычайных ситуациях.",
    translation: "Abbiamo preparato (steso con cura) un piano d'azione per le situazioni di emergenza.",
    options: ["подготовили", "приготовили", "заготовили", "изготовили"],
    optionBases: ["подготовить", "приготовить", "заготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "подготовили — подготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовить"]
  },
  {
    id: 32,
    sentence: "Он ... обед для всей семьи.",
    translation: "Ha preparato il pranzo per tutta la famiglia.",
    options: ["приготовил", "подготовил", "заготовил", "изготовил"],
    optionBases: ["приготовил", "подготовил", "заготовил", "изготовил"],
    correctIndex: 0,
    verbPair: "приготовил — приготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 33,
    sentence: "Компания ... новую модель смартфона.",
    translation: "L'azienda ha prodotto (fabbricato) un nuovo modello di smartphone.",
    options: ["изготовила", "приготовила", "подготовила", "заготовила"],
    optionBases: ["изготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "изготовила — изготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 34,
    sentence: "На зиму мы всегда ... квашеную капусту.",
    translation: "Per l'inverno prepariamo (facciamo scorta di) crauti.",
    options: ["заготавливаем", "приготавливаем", "подготавливаем", "изготавливаем"],
    optionBases: ["заготавливать", "приготавливать", "подготавливать", "изготавливать"],
    correctIndex: 0,
    verbPair: "заготавливаем — заготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["заготовить"]
  },
  {
    id: 35,
    sentence: "Девочка тщательно ... к конкурсу талантов.",
    translation: "La bambina si è preparata (studiato/allenata) scrupolosamente per il concorso di talenti.",
    options: ["подготовилась", "приготовилась", "заготовилась", "изготовилась"],
    optionBases: ["подготовиться", "приготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "подготовилась — подготовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовиться"]
  },
  {
    id: 36,
    sentence: "Кто ... этот вкусный ужин?",
    translation: "Chi ha preparato questa cena deliziosa?",
    options: ["приготовил", "подготовил", "заготовил", "изготовил"],
    optionBases: ["приготовил", "подготовил", "заготовил", "изготовил"],
    correctIndex: 0,
    verbPair: "приготовил — приготовить",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовить"]
  },
  {
    id: 37,
    sentence: "Мастеру нужно ... клише для печати.",
    translation: "Il maestro deve produrre (fabbricare) il cliché per la stampa.",
    options: ["изготовить", "приготовить", "подготовить", "заготовить"],
    optionBases: ["изготовить", "приготовить", "подготовить", "заготовить"],
    correctIndex: 0,
    verbPair: "изготовить — изготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["изготовить"]
  },
  {
    id: 38,
    sentence: "Снаряды были ... заранее.",
    translation: "I proiettili erano stati preparati (prodotti/scortati) in anticipo.",
    options: ["заготовлены", "приготовлены", "подготовлены", "изготовлены"],
    optionBases: ["заготовить", "приготовить", "подготовить", "изготовить"],
    correctIndex: 0,
    verbPair: "заготовлены — заготовить",
    correctExplanation: "Qui indica la preparazione di scorte/materiali."
  },
  {
    id: 39,
    sentence: "Оркестр ... новую программу.",
    translation: "L'orchestra ha preparato (provato/allestito accuratamente) un nuovo programma.",
    options: ["подготовил", "приготовил", "заготовил", "изготовил"],
    optionBases: ["подготовил", "приготовить", "заготовил", "изготовил"],
    correctIndex: 0,
    verbPair: "подготовил — подготавливать",
    correctExplanation: PRIGOTOVIT_VERB_MAP["подготовить"]
  },
  {
    id: 40,
    sentence: "Тебе стоит ... к худшему.",
    translation: "Dovresti prepararti al peggio.",
    options: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    optionBases: ["приготовиться", "подготовиться", "заготовиться", "изготовиться"],
    correctIndex: 0,
    verbPair: "приготовиться — готовиться",
    correctExplanation: PRIGOTOVIT_VERB_MAP["приготовиться"]
  }
];

import { Exercise } from '../types';

export const DAT_VERB_MAP: Record<string, string> = {
  "отдать": "(отдать — отдавать): significa restituire qualcosa (отдать долг) o dare via/consegnare (отдать приказ, отдать вещь).",
  "продать": "(продать — продавать): significa vendere qualcosa in cambio di denaro (продать машину).",
  "подать": "(подать — подавать): significa porgere/passare qualcosa (подать соль), oppure inoltrare una richiesta/domanda (подать заявление), o servire a tavola.",
  "передать": "(передать — передавать): significa trasmettere o consegnare qualcosa a qualcuno (передать привет, передать документы).",
  "выдать": "(выдать — выдавать): significa distribuire o emettere (выдать зарплату, выдать паспорт), oppure tradire un segreto (выдать тайну).",
  "издать": "(издать — издавать): significa pubblicare un libro o un'opera (издать роман), oppure emettere un suono/decreto (издать закон).",
  "задать": "(задать — задавать): significa assegnare un compito (задать вопрос, задать домашнее задание) o impostare un ritmo.",
  "раздать": "(раздать — раздавать): significa distribuire a molte persone (раздать листовки, раздать подарки).",
  "создать": "(создать — создавать): significa creare qualcosa di nuovo, un'opera o un'atmosfera (создать шедевр, создать уют).",
  "обдать": "(обдать — обдавать): significa investire qualcuno con un getto di liquido o vapore (обдать водой).",
  "удаться": "(удаться — удаваться): significa riuscire bene, avere successo (пирог удался, ему всё удаётся).",
  "сдаться": "(сдаться — сдаваться): significa arrendersi o consegnarsi (сдаться в плен), oppure darsi per vinti.",
  "придать": "(придать — придавать): significa conferire una qualità o un aspetto (придать сил, придать значение).",
  "поддать": "(поддать — поддавать): significa aggiungere forza/calore o soccombere a una tentazione (поддаться соблазну).",
  "задаться": "(задаться — задаваться): significa porsi un obiettivo o una domanda (задаться целью, задаться вопросом), o anche darsi delle arie.",
  "сдать": "(сдать — сдавать): significa consegnare (сдать работу), superare un esame (сдать экзамен) o dare il resto (сдать сдачу)."
};

export const DAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Я должен ... книгу в библиотеку завтра.",
    translation: "Devo restituire il libro in biblioteca domani.",
    options: ["продать", "отдать", "передать", "сдать"],
    optionBases: ["продать", "отдать", "передать", "сдать"],
    correctIndex: 3,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 2,
    sentence: "Студент успешно ... все экзамены.",
    translation: "Lo studente ha superato con successo tutti gli esami.",
    options: ["отдал", "сдал", "продал", "задал"],
    optionBases: ["отдать", "сдать", "продать", "задать"],
    correctIndex: 1,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 3,
    sentence: "Пожалуйста, ... мне соль.",
    translation: "Per favore, passami il sale.",
    options: ["отдай", "передай", "подай", "выдай"],
    optionBases: ["отдать", "передать", "подать", "выдать"],
    correctIndex: 2,
    verbPair: "подать — подавать",
    correctExplanation: DAT_VERB_MAP["подать"]
  },
  {
    id: 4,
    sentence: "Мы решили ... свою старую квартиру.",
    translation: "Abbiamo deciso di vendere il nostro vecchio appartamento.",
    options: ["раздать", "продать", "выдать", "издать"],
    optionBases: ["раздать", "продать", "выдать", "издать"],
    correctIndex: 1,
    verbPair: "продать — продавать",
    correctExplanation: DAT_VERB_MAP["продать"]
  },
  {
    id: 5,
    sentence: "Учитель ... нам очень сложное домашнее задание.",
    translation: "L'insegnante ci ha assegnato un compito a casa molto difficile.",
    options: ["отдал", "задал", "сдал", "издал"],
    optionBases: ["отдать", "задать", "сдать", "издать"],
    correctIndex: 1,
    verbPair: "задать — задавать",
    correctExplanation: DAT_VERB_MAP["задать"]
  },
  {
    id: 6,
    sentence: "Художник ... настоящий шедевр.",
    translation: "L'artista ha creato un vero capolavoro.",
    options: ["создал", "издал", "выдал", "подал"],
    optionBases: ["создать", "издать", "выдать", "подать"],
    correctIndex: 0,
    verbPair: "создать — создавать",
    correctExplanation: DAT_VERB_MAP["создать"]
  },
  {
    id: 7,
    sentence: "Мне нужно ... заявление на отпуск.",
    translation: "Devo inoltrare la domanda per le ferie.",
    options: ["сдать", "отдать", "подать", "задать"],
    optionBases: ["сдать", "отдать", "подать", "задать"],
    correctIndex: 2,
    verbPair: "подать — подавать",
    correctExplanation: DAT_VERB_MAP["подать"]
  },
  {
    id: 8,
    sentence: "Переводчик не может ... смысл этого выражения.",
    translation: "Il traduttore non riesce a trasmettere il senso di questa espressione.",
    options: ["выдать", "передать", "предать", "отдать"],
    optionBases: ["выдать", "передать", "предать", "отдать"],
    correctIndex: 1,
    verbPair: "передать — передавать",
    correctExplanation: DAT_VERB_MAP["передать"]
  },
  {
    id: 9,
    sentence: "В кассе мне ... зарплату за месяц.",
    translation: "Alla cassa mi hanno pagato (distribuito) lo stipendio del mese.",
    options: ["выдали", "сдали", "продали", "подали"],
    optionBases: ["выдать", "сдать", "продать", "подать"],
    correctIndex: 0,
    verbPair: "выдать — выдавать",
    correctExplanation: DAT_VERB_MAP["выдать"]
  },
  {
    id: 10,
    sentence: "Этот писатель ... уже три романа.",
    translation: "Questo scrittore ha già pubblicato tre romanzi.",
    options: ["задал", "издал", "создал", "сдал"],
    optionBases: ["задать", "издать", "создать", "сдать"],
    correctIndex: 1,
    verbPair: "издать — издавать",
    correctExplanation: DAT_VERB_MAP["издать"]
  },
  {
    id: 11,
    sentence: "Он долго не хотел ... свои секреты.",
    translation: "Per molto tempo non ha voluto rivelare (dare fuori) i suoi segreti.",
    options: ["отдавать", "выдавать", "сдавать", "передавать"],
    optionBases: ["отдать", "выдать", "сдать", "передать"],
    correctIndex: 1,
    verbPair: "выдавать — выдать",
    correctExplanation: DAT_VERB_MAP["выдать"]
  },
  {
    id: 12,
    sentence: "Волонтёры ... еду бездомным.",
    translation: "I volontari distribuivano cibo ai senzatetto.",
    options: ["раздавали", "продавали", "сдавали", "задавали"],
    optionBases: ["раздать", "продать", "сдать", "задать"],
    correctIndex: 0,
    verbPair: "раздавать — раздать",
    correctExplanation: DAT_VERB_MAP["раздать"]
  },
  {
    id: 13,
    sentence: "Не стоит ... трудностям.",
    translation: "Non vale la pena arrendersi alle difficoltà.",
    options: ["сдаваться", "отдаваться", "поддаваться", "задаваться"],
    optionBases: ["сдаться", "отдаться", "поддаться", "задаться"],
    correctIndex: 0,
    verbPair: "сдаваться — сдаться",
    correctExplanation: DAT_VERB_MAP["сдаться"]
  },
  {
    id: 14,
    sentence: "Эта новость ... ему новых сил.",
    translation: "Questa notizia gli ha conferito nuove forze.",
    options: ["придала", "задала", "передала", "выдала"],
    optionBases: ["придать", "задать", "передать", "выдать"],
    correctIndex: 0,
    verbPair: "придать — придавать",
    correctExplanation: DAT_VERB_MAP["придать"]
  },
  {
    id: 15,
    sentence: "Ему наконец ... найти эту редкую книгу.",
    translation: "È finalmente riuscito a trovare questo libro raro.",
    options: ["удалось", "сдалось", "задалось", "подалось"],
    optionBases: ["удаться", "сдаться", "задаться", "подать"],
    correctIndex: 0,
    verbPair: "удаться — удаваться",
    correctExplanation: DAT_VERB_MAP["удаться"]
  },
  {
    id: 16,
    sentence: "Предатель ... своих товарищей врагу.",
    translation: "Il traditore ha consegnato i suoi compagni al nemico.",
    options: ["выдал", "продал", "сдал", "отдал"],
    optionBases: ["выдать", "продать", "сдал", "отдал"],
    correctIndex: 2,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 17,
    sentence: "Она ... привет всем своим знакомым.",
    translation: "Ha mandato i saluti a tutti i suoi conoscenti.",
    options: ["передала", "отдала", "подала", "задала"],
    optionBases: ["передать", "отдать", "подать", "задать"],
    correctIndex: 0,
    verbPair: "передать — передавать",
    correctExplanation: DAT_VERB_MAP["передать"]
  },
  {
    id: 18,
    sentence: "Отец ... долги и почувствовал облегчение.",
    translation: "Il padre ha restituito i debiti e ha provato sollievo.",
    options: ["отдал", "продал", "сдал", "задал"],
    optionBases: ["отдать", "продать", "сдать", "задать"],
    correctIndex: 0,
    verbPair: "отдать — отдавать",
    correctExplanation: DAT_VERB_MAP["отдать"]
  },
  {
    id: 19,
    sentence: "Нам нужно ... этот багаж в камеру хранения.",
    translation: "Dobbiamo consegnare questo bagaglio al deposito bagagli.",
    options: ["сдать", "подать", "передать", "выдать"],
    optionBases: ["сдать", "подать", "передать", "выдать"],
    correctIndex: 0,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 20,
    sentence: "Продавец ... мне сдачу.",
    translation: "Il venditore mi ha dato il resto.",
    options: ["сдал", "отдал", "подал", "выдал"],
    optionBases: ["сдать", "отдать", "подать", "выдать"],
    correctIndex: 0,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 21,
    sentence: "Он ... целью выучить сто новых слов.",
    translation: "Si è posto l'obiettivo di imparare cento parole nuove.",
    options: ["задался", "создался", "сдался", "удался"],
    optionBases: ["задаться", "создать", "сдаться", "удаться"],
    correctIndex: 0,
    verbPair: "задаться — задаваться",
    correctExplanation: DAT_VERB_MAP["задаться"]
  },
  {
    id: 22,
    sentence: "Проезжающая машина ... меня грязной водой.",
    translation: "L'auto di passaggio mi ha investito con acqua sporca.",
    options: ["обдала", "отдала", "выдала", "подала"],
    optionBases: ["обдать", "отдать", "выдать", "подать"],
    correctIndex: 0,
    verbPair: "обдать — обдавать",
    correctExplanation: DAT_VERB_MAP["обдать"]
  },
  {
    id: 23,
    sentence: "Она ... соблазну и купила это дорогое платье.",
    translation: "Ha ceduto alla tentazione e ha comprato questo vestito costoso.",
    options: ["поддалась", "сдалась", "отдалась", "задалась"],
    optionBases: ["поддаться", "сдаться", "отдаться", "задаться"],
    correctIndex: 0,
    verbPair: "поддаться — поддаваться",
    correctExplanation: DAT_VERB_MAP["поддаться"]
  },
  {
    id: 24,
    sentence: "Коллектив ... новую рабочую атмосферу.",
    translation: "Il collettivo ha creato una nuova atmosfera di lavoro.",
    options: ["создал", "издал", "задал", "раздал"],
    optionBases: ["создать", "издать", "задать", "раздать"],
    correctIndex: 0,
    verbPair: "создать — создавать",
    correctExplanation: DAT_VERB_MAP["создать"]
  },
  {
    id: 25,
    sentence: "Мальчик ... задирой и со всеми ссорился.",
    translation: "Il ragazzo faceva il bullo (si dava le arie/si poneva come tale) e litigava con tutti.",
    options: ["задавался", "сдавался", "удалось", "создавался"],
    optionBases: ["задаться", "сдаться", "удаться", "создать"],
    correctIndex: 0,
    verbPair: "задаваться — задаться",
    correctExplanation: DAT_VERB_MAP["задаться"]
  },
  {
    id: 26,
    sentence: "Директор ... приказ о начале строительства.",
    translation: "Il direttore ha emesso l'ordine per l'inizio della costruzione.",
    options: ["издал", "выдал", "подал", "задал"],
    optionBases: ["издать", "выдать", "подать", "задать"],
    correctIndex: 0,
    verbPair: "издать — издавать",
    correctExplanation: DAT_VERB_MAP["издать"]
  },
  {
    id: 27,
    sentence: "Сын ... всё своё свободное время спорту.",
    translation: "Il figlio dedica (dà via) tutto il suo tempo libero allo sport.",
    options: ["отдаёт", "сдаёт", "подаёт", "выдаёт"],
    optionBases: ["отдать", "сдать", "подать", "выдать"],
    correctIndex: 0,
    verbPair: "отдавать — отдать",
    correctExplanation: DAT_VERB_MAP["отдать"]
  },
  {
    id: 28,
    sentence: "Официант быстро ... кофе гостям.",
    translation: "Il cameriere ha servito (sporto) velocemente il caffè agli ospiti.",
    options: ["подал", "выдал", "передал", "сдал"],
    optionBases: ["подать", "выдать", "передать", "сдать"],
    correctIndex: 0,
    verbPair: "подать — подавать",
    correctExplanation: DAT_VERB_MAP["подать"]
  },
  {
    id: 29,
    sentence: "Бабушка ... внукам подарки на Рождество.",
    translation: "La nonna ha distribuito i regali ai nipoti per Natale.",
    options: ["раздала", "продала", "издала", "задала"],
    optionBases: ["раздать", "продать", "издать", "задать"],
    correctIndex: 0,
    verbPair: "раздать — раздавать",
    correctExplanation: DAT_VERB_MAP["раздать"]
  },
  {
    id: 30,
    sentence: "Книга ... необыкновенный аромат старой бумаги.",
    translation: "Il libro emanava (dava fuori) uno straordinario profumo di carta vecchia.",
    options: ["издавала", "подавала", "сдавала", "передавала"],
    optionBases: ["издать", "подать", "сдать", "передать"],
    correctIndex: 0,
    verbPair: "издавать — издать",
    correctExplanation: DAT_VERB_MAP["издать"]
  },
  {
    id: 31,
    sentence: "Вам нужно ... старые учебники в библиотеку.",
    translation: "Dovete riportare (consegnare) i vecchi libri in biblioteca.",
    options: ["сдать", "продать", "подать", "выдать"],
    optionBases: ["сдать", "продать", "подать", "выдать"],
    correctIndex: 0,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 32,
    sentence: "Он не может ... свой старый автомобиль за такую цену.",
    translation: "Non riesce a vendere la sua vecchia auto a quel prezzo.",
    options: ["продать", "отдать", "сдать", "раздать"],
    optionBases: ["продать", "отдать", "сдать", "раздать"],
    correctIndex: 0,
    verbPair: "продать — продавать",
    correctExplanation: DAT_VERB_MAP["продать"]
  },
  {
    id: 33,
    sentence: "Пожалуйста, ... это письмо моим друзьям.",
    translation: "Per favore, consegna questo messaggio ai miei amici.",
    options: ["передай", "отдай", "подай", "выдай"],
    optionBases: ["передать", "отдать", "подать", "выдать"],
    correctIndex: 0,
    verbPair: "передать — передавать",
    correctExplanation: DAT_VERB_MAP["передать"]
  },
  {
    id: 34,
    sentence: "Вчера ... новый закон о налогах.",
    translation: "Ieri è stata emanata (pubblicata) la nuova legge sulle tasse.",
    options: ["издали", "задали", "создали", "подали"],
    optionBases: ["издать", "задать", "создать", "подать"],
    correctIndex: 0,
    verbPair: "издать — издавать",
    correctExplanation: DAT_VERB_MAP["издать"]
  },
  {
    id: 35,
    sentence: "Он ... задирой и со всеми спорил.",
    translation: "Si dava delle arie e discuteva con tutti.",
    options: ["задавался", "сдавался", "удалось", "создавался"],
    optionBases: ["задаться", "сдаться", "удаться", "создать"],
    correctIndex: 0,
    verbPair: "задаваться — задаться",
    correctExplanation: DAT_VERB_MAP["задаться"]
  },
  {
    id: 36,
    sentence: "Вратарь ... мяч игроку своей команды.",
    translation: "Il portiere ha passato la palla a un giocatore della sua squadra.",
    options: ["передал", "отдал", "подал", "сдал"],
    optionBases: ["передать", "отдать", "подать", "сдать"],
    correctIndex: 0,
    verbPair: "передать — передавать",
    correctExplanation: DAT_VERB_MAP["передать"]
  },
  {
    id: 37,
    sentence: "Мама ... мне на завтрак блины.",
    translation: "La mamma mi ha servito (sporto) frittelle per colazione.",
    options: ["подала", "сдала", "выдала", "передала"],
    optionBases: ["подать", "сдать", "выдать", "передать"],
    correctIndex: 0,
    verbPair: "подать — подавать",
    correctExplanation: DAT_VERB_MAP["подать"]
  },
  {
    id: 38,
    sentence: "Она ... всё самое дорогое ради своей мечты.",
    translation: "Ha dato via tutto ciò che aveva di più caro per il suo sogno.",
    options: ["отдала", "сдала", "выдала", "продала"],
    optionBases: ["отдать", "сдать", "выдать", "продать"],
    correctIndex: 0,
    verbPair: "отдать — отдавать",
    correctExplanation: DAT_VERB_MAP["отдать"]
  },
  {
    id: 39,
    sentence: "Нам нужно ... проект к понедельнику.",
    translation: "Dobbiamo consegnare il progetto entro lunedì.",
    options: ["сдать", "отдать", "подать", "передать"],
    optionBases: ["сдать", "отдать", "подать", "передать"],
    correctIndex: 0,
    verbPair: "сдать — сдавать",
    correctExplanation: DAT_VERB_MAP["сдать"]
  },
  {
    id: 40,
    sentence: "Его лицо ... сильным волнением.",
    translation: "Il suo volto tradiva (dava fuori) una forte emozione.",
    options: ["выдавало", "сдавало", "подавало", "издавало"],
    optionBases: ["выдать", "сдать", "подать", "издать"],
    correctIndex: 0,
    verbPair: "выдавать — выдать",
    correctExplanation: DAT_VERB_MAP["выдать"]
  }
];

import { Exercise } from '../types';

export const GOVORIT_VERB_MAP: Record<string, string> = {
  "договориться": "(договориться — договариваться): significa raggiungere un accordo o fissare un appuntamento (договориться о встрече).",
  "уговорить": "(уговорить — уговаривать): significa persuadere o convincere qualcuno a fare qualcosa (уговорить друга пойти в кино).",
  "отговорить": "(отговорить — отговаривать): significa dissuadere qualcuno dal fare qualcosa (отговорить от поездки).",
  "выговорить": "(выговорить — выговаривать): significa pronunciare con cura (выговорить трудное слово) o anche fare un rimprovero formale.",
  "проговорить": "(проговорить — проговаривать): significa pronunciare a voce alta o parlare per un certo periodo di tempo (проговорить весь вечер).",
  "заговорить": "(заговорить — заговаривать): significa iniziare a parlare, oppure stancare qualcuno parlando troppo, o incantare/stregare.",
  "наговорить": "(наговорить — наговаривать): significa dire molte cose (spesso cattive o sciocchezze) oppure registrare la voce (наговорить на диктофон).",
  "переговорить": "(переговорить — переговариваться): significa discutere di qualcosa con qualcuno brevemente o superare qualcuno nel parlare.",
  "оговориться": "(оговориться — оговариваться): significa fare un lapsus o un errore parlando (оговориться в речи).",
  "подговорить": "(подговорить — подговаривать): significa istigare o incitare segretamente qualcuno a fare qualcosa di male.",
  "разговориться": "(разговориться — разговариваться): significa iniziare a parlare liberamente dopo essere stati timidi o silenziosi.",
  "сговориться": "(сговориться — сговариваться): significa mettersi d'accordo segretamente (spesso per un complotto).",
  "проговориться": "(проговориться — проговариваться): significa lasciarsi sfuggire un segreto involontariamente.",
  "выговориться": "(выговориться — выговариваться): significa sfogarsi parlando, dire tutto ciò che si ha sul cuore.",
  "обговорить": "(обговорить — обговаривать): significa discutere i dettagli di qualcosa (обговорить условия контракта)."
};

export const GOVORIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мы долго спорили, но наконец ... о месте встречи.",
    translation: "Abbiamo discusso a lungo, ma alla fine ci siamo accordati sul luogo dell'incontro.",
    options: ["договорились", "уговорили", "отговорили", "проговорили"],
    optionBases: ["договориться", "уговорить", "отговорить", "проговорить"],
    correctIndex: 0,
    verbPair: "договориться — договариваться",
    correctExplanation: GOVORIT_VERB_MAP["договориться"]
  },
  {
    id: 2,
    sentence: "Мне удалось ... сестру поехать с нами в отпуск.",
    translation: "Sono riuscito a convincere mia sorella a venire in vacanza con noi.",
    options: ["отговорить", "переговорить", "уговорить", "заговорить"],
    optionBases: ["отговорить", "переговорить", "уговорить", "заговорить"],
    correctIndex: 2,
    verbPair: "уговорить — уговаривать",
    correctExplanation: GOVORIT_VERB_MAP["уговорить"]
  },
  {
    id: 3,
    sentence: "Друзья ... меня от покупки этого дорогого автомобиля.",
    translation: "Gli amici mi hanno dissuaso dal comprare quell'auto costosa.",
    options: ["уговорили", "отговорили", "заговорили", "наговорили"],
    optionBases: ["уговорить", "отговорить", "заговорить", "наговорить"],
    correctIndex: 1,
    verbPair: "отговорить — отговаривать",
    correctExplanation: GOVORIT_VERB_MAP["отговорить"]
  },
  {
    id: 4,
    sentence: "Иностранец очень чётко ... русские слова.",
    translation: "Lo straniero pronunciava le parole russe molto chiaramente.",
    options: ["выговаривал", "заговаривал", "наговаривал", "подговаривал"],
    optionBases: ["выговорить", "заговорить", "наговорить", "подговорить"],
    correctIndex: 0,
    verbPair: "выговаривать — выговорить",
    correctExplanation: GOVORIT_VERB_MAP["выговорить"]
  },
  {
    id: 5,
    sentence: "Она случайно ... и назвала меня другим именем.",
    translation: "Ha fatto un lapsus per sbaglio e mi ha chiamato con un altro nome.",
    options: ["оговорилась", "проговорилась", "разговорилась", "выговорилась"],
    optionBases: ["оговориться", "проговориться", "разговориться", "выговориться"],
    correctIndex: 0,
    verbPair: "оговориться — оговариваться",
    correctExplanation: GOVORIT_VERB_MAP["оговориться"]
  },
  {
    id: 6,
    sentence: "Стеснительный мальчик наконец ... и начал рассказывать о себе.",
    translation: "Il ragazzo timido finalmente si è sciolto e ha iniziato a raccontare di sé.",
    options: ["проговорился", "разговорился", "наговорился", "сговорился"],
    optionBases: ["проговориться", "разговориться", "наговориться", "сговориться"],
    correctIndex: 1,
    verbPair: "разговориться — разговариваться",
    correctExplanation: GOVORIT_VERB_MAP["разговориться"]
  },
  {
    id: 7,
    sentence: "Анна ... секрет своей подруги, хотя обещала молчать.",
    translation: "Anna si è lasciata sfuggire il segreto della sua amica, sebbene avesse promesso di tacere.",
    options: ["разговорилась", "проговорилась", "договорилась", "выговорилась"],
    optionBases: ["разговориться", "проговориться", "договориться", "выговориться"],
    correctIndex: 1,
    verbPair: "проговориться — проговориваться",
    correctExplanation: GOVORIT_VERB_MAP["проговориться"]
  },
  {
    id: 8,
    sentence: "Нам нужно заранее ... все условия аренды квартиры.",
    translation: "Dobbiamo discutere in anticipo tutte le condizioni dell'affitto dell'appartamento.",
    options: ["подговорить", "обговорить", "наговорить", "переговорить"],
    optionBases: ["подговорить", "обговорить", "наговорить", "переговорить"],
    correctIndex: 1,
    verbPair: "обговорить — обговаривать",
    correctExplanation: GOVORIT_VERB_MAP["обговорить"]
  },
  {
    id: 9,
    sentence: "Преступники ... ограбить банк вместе.",
    translation: "I criminali si sono accordati segretamente per rapinare la banca insieme.",
    options: ["сговорились", "договорились", "разговорились", "проговорились"],
    optionBases: ["сговорились", "договорились", "разговорились", "проговорились"],
    correctIndex: 0,
    verbPair: "сговориться — сговариваться",
    correctExplanation: GOVORIT_VERB_MAP["сговориться"]
  },
  {
    id: 10,
    sentence: "Он ... целую кучу гадостей про своего коллегу.",
    translation: "Ha detto un sacco di cattiverie sul suo collega.",
    options: ["заговорил", "наговорил", "подговорил", "проговорил"],
    optionBases: ["заговорить", "наговорить", "подговорить", "проговорить"],
    correctIndex: 1,
    verbPair: "наговорить — наговаривать",
    correctExplanation: GOVORIT_VERB_MAP["наговорить"]
  },
  {
    id: 11,
    sentence: "Маленький ребёнок ... в возрасте двух лет.",
    translation: "Il bambino piccolo ha iniziato a parlare all'età di due anni.",
    options: ["заговорил", "разговорился", "уговорил", "выговорил"],
    optionBases: ["заговорить", "разговориться", "уговорить", "выговорить"],
    correctIndex: 0,
    verbPair: "заговорить — заговаривать",
    correctExplanation: GOVORIT_VERB_MAP["заговорить"]
  },
  {
    id: 12,
    sentence: "Они ... по телефону больше часа.",
    translation: "Hanno parlato al telefono per più di un'ora.",
    options: ["проговорили", "заговорили", "наговорили", "переговорили"],
    optionBases: ["проговорить", "заговорить", "наговорить", "переговорить"],
    correctIndex: 0,
    verbPair: "проговорить — проговаривать",
    correctExplanation: GOVORIT_VERB_MAP["проговорить"]
  },
  {
    id: 13,
    sentence: "Я хотел бы ... с директором наедине.",
    translation: "Vorrei parlare con il direttore a quattrocchi (brevemente).",
    options: ["переговорить", "уговорить", "отговорить", "договориться"],
    optionBases: ["переговорить", "уговорить", "отговорить", "договориться"],
    correctIndex: 0,
    verbPair: "переговорить — переговариваться",
    correctExplanation: GOVORIT_VERB_MAP["переговорить"]
  },
  {
    id: 14,
    sentence: "Старший брат ... младшего спрятать пульт от телевизора.",
    translation: "Il fratello maggiore ha istigato il minore a nascondere il telecomando della TV.",
    options: ["подговорил", "обговорил", "наговорил", "выговорил"],
    optionBases: ["подговорить", "обговорить", "наговорить", "выговорить"],
    correctIndex: 0,
    verbPair: "подговорить — подговаривать",
    correctExplanation: GOVORIT_VERB_MAP["подговорить"]
  },
  {
    id: 15,
    sentence: "После долгого молчания ему нужно было ..., и он всё рассказал.",
    translation: "Dopo un lungo silenzio aveva bisogno di sfogarsi, e ha raccontato tutto.",
    options: ["выговориться", "договориться", "заговорить", "разговориться"],
    optionBases: ["выговориться", "договориться", "заговорить", "разговориться"],
    correctIndex: 0,
    verbPair: "выговориться — выговариваться",
    correctExplanation: GOVORIT_VERB_MAP["выговориться"]
  },
  {
    id: 16,
    sentence: "Директор ... работнику за опоздание.",
    translation: "Il direttore ha fatto un rimprovero (formalmente parlato) al dipendente per il ritardo.",
    options: ["выговорил", "заговорил", "обговорил", "проговорил"],
    optionBases: ["выговорить", "заговорить", "обговорить", "проговорить"],
    correctIndex: 0,
    verbPair: "выговорить — выговаривать",
    correctExplanation: GOVORIT_VERB_MAP["выговорить"]
  },
  {
    id: 17,
    sentence: "Мы ... о встрече на завтра в пять часов.",
    translation: "Ci siamo accordati per un incontro domani alle cinque.",
    options: ["договорились", "сговорились", "обговорили", "переговорили"],
    optionBases: ["договориться", "сговориться", "обговорить", "переговорить"],
    correctIndex: 0,
    verbPair: "договориться — договариваться",
    correctExplanation: GOVORIT_VERB_MAP["договориться"]
  },
  {
    id: 18,
    sentence: "Лектор ... всю лекцию без остановки.",
    translation: "Il conferenziere ha parlato (pronunciato) per tutta la lezione senza sosta.",
    options: ["проговорил", "наговорил", "подговорил", "заговорил"],
    optionBases: ["проговорить", "наговорить", "подговорить", "заговорить"],
    correctIndex: 0,
    verbPair: "проговорить — проговаривать",
    correctExplanation: GOVORIT_VERB_MAP["проговорить"]
  },
  {
    id: 19,
    sentence: "Она ... мне столько комплиментов, что я засмущался.",
    translation: "Mi ha detto così tanti complimenti che mi sono imbarazzato.",
    options: ["наговорила", "подговорила", "обговорила", "выговорила"],
    optionBases: ["наговорить", "подговорить", "обговорить", "выговорила"],
    correctIndex: 0,
    verbPair: "наговорить — наговаривать",
    correctExplanation: GOVORIT_VERB_MAP["наговорить"]
  },
  {
    id: 20,
    sentence: "Пожалуйста, не ... меня, я уже всё решил.",
    translation: "Per favore, non dissuadermi, ho già deciso tutto.",
    options: ["отговаривай", "уговаривай", "заговаривай", "проговаривай"],
    optionBases: ["отговорить", "уговорить", "заговорить", "проговорить"],
    correctIndex: 0,
    verbPair: "отговаривать — отговорить",
    correctExplanation: GOVORIT_VERB_MAP["отговорить"]
  },
  {
    id: 21,
    sentence: "Вам нужно ... этот проект с главным инженером.",
    translation: "Dovete discutere (i dettagli di) questo progetto con l'ingegnere capo.",
    options: ["обговорить", "выговорить", "подговорить", "заговорить"],
    optionBases: ["обговорить", "выговорить", "подговорить", "заговорить"],
    correctIndex: 0,
    verbPair: "обговорить — обговаривать",
    correctExplanation: GOVORIT_VERB_MAP["обговорить"]
  },
  {
    id: 22,
    sentence: "Он ... нас пойти на каток, хотя никто не хотел.",
    translation: "Ci ha convinto (insistendo) ad andare al pattinaggio, anche se nessuno voleva.",
    options: ["уговорил", "отговорил", "договорился", "заговорил"],
    optionBases: ["уговорить", "отговориir", "договориться", "заговорить"],
    correctIndex: 0,
    verbPair: "уговорить — уговаривать",
    correctExplanation: GOVORIT_VERB_MAP["уговорить"]
  },
  {
    id: 23,
    sentence: "Я не могу ... это сложное слово с первого раза.",
    translation: "Non riesco a pronunciare questa parola difficile al primo colpo.",
    options: ["выговорить", "заговорить", "наговорить", "проговорить"],
    optionBases: ["выговорить", "заговорить", "наговорить", "проговорить"],
    correctIndex: 0,
    verbPair: "выговорить — выговаривать",
    correctExplanation: GOVORIT_VERB_MAP["выговорить"]
  },
  {
    id: 24,
    sentence: "Они ... за моей спиной против меня.",
    translation: "Si sono messi d'accordo (complotto) alle mie spalle contro di me.",
    options: ["сговорились", "договорились", "разговорились", "переговорили"],
    optionBases: ["сговориться", "договориться", "разговориться", "переговорить"],
    correctIndex: 0,
    verbPair: "сговориться — сговариваться",
    correctExplanation: GOVORIT_VERB_MAP["сговориться"]
  },
  {
    id: 25,
    sentence: "Мне нужно ... с коллегой о завтрашнем собрании.",
    translation: "Devo parlare (brevemente) con il collega della riunione di domani.",
    options: ["переговорить", "наговорить", "заговорить", "подговорить"],
    optionBases: ["переговорить", "наговорить", "заговорить", "подговорить"],
    correctIndex: 0,
    verbPair: "переговорить — переговариваться",
    correctExplanation: GOVORIT_VERB_MAP["переговорить"]
  },
  {
    id: 26,
    sentence: "Он ... на диктофон текст своей будущей книги.",
    translation: "Ha registrato (parlato sopra) sul dettatore il testo del suo futuro libro.",
    options: ["наговорил", "заговорил", "проговорил", "выговорил"],
    optionBases: ["наговорить", "заговорить", "проговорить", "выговорить"],
    correctIndex: 0,
    verbPair: "наговорить — наговаривать",
    correctExplanation: GOVORIT_VERB_MAP["наговорить"]
  },
  {
    id: 27,
    sentence: "Она ... мне зубы, чтобы я не заметил пропажи.",
    translation: "Mi ha incantato (stordito parlando) per non farmi notare la sparizione.",
    options: ["заговорила", "наговорила", "подговорила", "проговорила"],
    optionBases: ["заговорить", "наговорить", "подговорить", "проговорить"],
    correctIndex: 0,
    verbPair: "заговорить — заговаривать",
    correctExplanation: GOVORIT_VERB_MAP["заговорить"]
  },
  {
    id: 28,
    sentence: "Мы уже всё ..., претензий больше нет.",
    translation: "Abbiamo già discusso tutto (i dettagli), non ci sono più lamentele.",
    options: ["обговорили", "сговорились", "наговорили", "выговорили"],
    optionBases: ["обговорить", "сговориться", "наговорить", "выговорить"],
    correctIndex: 0,
    verbPair: "обговорить — обговаривать",
    correctExplanation: GOVORIT_VERB_MAP["обговорить"]
  },
  {
    id: 29,
    sentence: "Друг ... меня сделать этот глупый поступок.",
    translation: "L'amico mi ha istigato a compiere questo atto sciocco.",
    options: ["подговорил", "наговорил", "заговорил", "отговорил"],
    optionBases: ["подговорить", "наговорить", "заговорить", "отговорить"],
    correctIndex: 0,
    verbPair: "подговорить — подговаривать",
    correctExplanation: GOVORIT_VERB_MAP["подговорить"]
  },
  {
    id: 30,
    sentence: "Я ... в конце речи и сказал 'спасибо' вместо 'пожалуйста'.",
    translation: "Ho fatto un lapsus alla fine del discorso e ho detto 'grazie' invece di 'prego'.",
    options: ["оговорился", "проговорился", "разговорился", "выговорился"],
    optionBases: ["оговориться", "проговориться", "разговориться", "выговориться"],
    correctIndex: 0,
    verbPair: "оговориться — оговариваться",
    correctExplanation: GOVORIT_VERB_MAP["оговориться"]
  },
  {
    id: 31,
    sentence: "Она так ..., что её было не остановить.",
    translation: "Si è sciolta così tanto a parlare che era impossibile fermarla.",
    options: ["разговорилась", "заговорилась", "наговорилась", "договорилась"],
    optionBases: ["разговориться", "заговориться", "наговориться", "договориться"],
    correctIndex: 0,
    verbPair: "разговориться — разговариваться",
    correctExplanation: GOVORIT_VERB_MAP["разговориться"]
  },
  {
    id: 32,
    sentence: "Шпион случайно ... о месте встречи.",
    translation: "La spia si è lasciata sfuggire (involontariamente) il luogo dell'incontro.",
    options: ["проговорился", "оговорился", "разговорился", "сговорился"],
    optionBases: ["проговориться", "оговориться", "разговориться", "сговориться"],
    correctIndex: 0,
    verbPair: "проговориться — проговариваться",
    correctExplanation: GOVORIT_VERB_MAP["проговориться"]
  },
  {
    id: 33,
    sentence: "Мне нужно просто ..., и станет легче.",
    translation: "Ho solo bisogno di sfogarmi a parole, e andrà meglio.",
    options: ["выговориться", "разговориться", "проговориться", "договориться"],
    optionBases: ["выговориться", "разговориться", "проговориться", "договориться"],
    correctIndex: 0,
    verbPair: "выговориться — выговариваться",
    correctExplanation: GOVORIT_VERB_MAP["выговориться"]
  },
  {
    id: 34,
    sentence: "Он ... нас пойти в поход, и мы согласились.",
    translation: "Ci ha convinto ad andare in escursione, e abbiamo acconsentito.",
    options: ["уговорил", "подговорил", "заговорил", "переговорил"],
    optionBases: ["уговорить", "подговорить", "заговорить", "переговорир"],
    correctIndex: 0,
    verbPair: "уговорить — уговаривать",
    correctExplanation: GOVORIT_VERB_MAP["уговорить"]
  },
  {
    id: 35,
    sentence: "Мы ... о цене товара через пять минут.",
    translation: "Ci siamo accordati sul prezzo della merce dopo cinque minuti.",
    options: ["договорились", "сговорились", "переговорили", "наговорили"],
    optionBases: ["договориться", "сговориться", "переговорить", "наговорить"],
    correctIndex: 0,
    verbPair: "договориться — договариваться",
    correctExplanation: GOVORIT_VERB_MAP["договориться"]
  },
  {
    id: 36,
    sentence: "Учительница ... каждое правило очень медленно.",
    translation: "L'insegnante pronunciava (scandiva) ogni regola molto lentamente.",
    options: ["проговаривала", "наговорила", "выговаривала", "заговорила"],
    optionBases: ["проговорить", "наговорить", "выговорить", "заговорить"],
    correctIndex: 0,
    verbPair: "проговаривать — проговорить",
    correctExplanation: GOVORIT_VERB_MAP["проговорить"]
  },
  {
    id: 37,
    sentence: "Он ... много лишнего, о чем потом пожалел.",
    translation: "Ha detto molte cose di troppo (sciocchezze), di cui poi si è pentito.",
    options: ["наговорил", "выговорил", "обговорил", "сговорился"],
    optionBases: ["наговорить", "выговорить", "обговорить", "сговориться"],
    correctIndex: 0,
    verbPair: "наговорить — наговаривать",
    correctExplanation: GOVORIT_VERB_MAP["наговорить"]
  },
  {
    id: 38,
    sentence: "Она ... от опасного путешествия своего сына.",
    translation: "Ha dissuaso suo figlio dal viaggio pericoloso.",
    options: ["отговорила", "уговорила", "заговорила", "выговорила"],
    optionBases: ["отговорить", "уговорить", "заговорить", "выговорить"],
    correctIndex: 0,
    verbPair: "отговорить — отговаривать",
    correctExplanation: GOVORIT_VERB_MAP["отговорить"]
  },
  {
    id: 39,
    sentence: "Нам нужно ... детали нашего путешествия.",
    translation: "Dobbiamo discutere i dettagli del nostro viaggio.",
    options: ["обговорить", "договориться", "переговорить", "заговорить"],
    optionBases: ["обговорить", "договориться", "переговорить", "заговорить"],
    correctIndex: 0,
    verbPair: "обговорить — обговаривать",
    correctExplanation: GOVORIT_VERB_MAP["обговорить"]
  },
  {
    id: 40,
    sentence: "Я случайно ... о сюрпризе, который мы готовили.",
    translation: "Per sbaglio mi sono lasciato sfuggire il segreto sulla sorpresa che stavamo preparando.",
    options: ["проговорился", "оговорился", "разговорился", "выговорился"],
    optionBases: ["проговориться", "оговориться", "разговориться", "выговориться"],
    correctIndex: 0,
    verbPair: "проговориться — проговариваться",
    correctExplanation: GOVORIT_VERB_MAP["проговориться"]
  }
];

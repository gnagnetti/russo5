import { Exercise } from '../types';

export const BRAT_VERB_MAP: Record<string, string> = {
  "выбрать": "(выбрать — выбирать): significa scegliere tra più opzioni (выбрать подарок) o eleggere qualcuno.",
  "выбраться": "(выбраться — выбираться): significa uscire con fatica da una situazione difficile (выбраться из ямы) o trovare il tempo per uscire (выбраться in città).",
  "собрать": "(собрать — собирать): significa raccogliere più cose insieme (собрать грибы) o radunare persone/oggetti.",
  "убрать": "(убрать — убирать): significa togliere di mezzo, mettere in ordine (убрать комнату) o rimuovere.",
  "убраться": "(убраться — убираться): significa andarsene via (levarsi dai piedi) o fare le pulizie.",
  "набрать": "(набрать — набирать): significa accumulare una quantità (набрать ягод), comporre un numero (набрать номер) o ammettere persone (набрать студентов).",
  "набраться": "(набраться — набираться): significa acquisire gradualmente qualità o coraggio (набраться смелости).",
  "отобрать": "(отобрать — отбирать): significa selezionare il meglio (отобрать книги) o togliere con la forza.",
  "подобрать": "(подобрать — подбирать): significa raccogliere qualcosa da terra o scegliere qualcosa che si adatti (подобрать галстук).",
  "перебрать": "(перебрать — перебирать): significa esaminare uno per uno (перебрать вещи) o eccedere (перебрать с алкоголем).",
  "разобрать": "(разобрать — разбирать): significa smontare (разобрать шкаф), decifrare (разобрать почерк) o analizzare.",
  "разобраться": "(разобраться — разбираться): significa capire a fondo una questione o mettere ordine in mezzo al caos.",
  "взобраться": "(взобраться — взбираться): significa salire con fatica su una cima o un'altezza (взобраться на гору).",
  "добраться": "(добраться — добираться): significa raggiungere un luogo, spesso con difficoltà o dopo un lungo viaggio.",
  "забрать": "(забрать — забирать): significa prendere o portar via qualcosa (забрать документы, забрать ребёнка из сада).",
  "забраться": "(забраться — забираться): significa penetrare in un luogo profondo o arrampicarsi in alto (забраться в дебри).",
  "пробраться": "(пробраться — пробираться): significa farsi strada attraverso ostacoli o segretamente.",
  "брать/взять": "(брать — взять): il verbo base che significa prendere o afferrare.",
  "браться": "(браться — взяться): significa iniziare a fare qualcosa (браться за дело) o afferrare qualcosa.",
  "избрать": "(избрать — избирать): termine formale per scegliere o eleggere (избрать делегатом)."
};

export const BRAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Для поездки в горы нам нужно ... только самое необходимое.",
    translation: "Per il viaggio in montagna dobbiamo selezionare solo lo stretto necessario.",
    options: ["выбрать", "отобрать", "собрать", "набрать"],
    optionBases: ["выбрать", "отобрать", "собрать", "набрать"],
    correctIndex: 1,
    verbPair: "отобрать — отбирать",
    correctExplanation: BRAT_VERB_MAP["отобрать"]
  },
  {
    id: 2,
    sentence: "Девочка быстро ... все игрушки с пола.",
    translation: "La bambina ha raccolto velocemente tutti i giocattoli dal pavimento.",
    options: ["убрала", "собрала", "подобрала", "выбрала"],
    optionBases: ["убрать", "собрать", "подобрать", "выбрать"],
    correctIndex: 1,
    verbPair: "собрать — собирать",
    correctExplanation: BRAT_VERB_MAP["собрать"]
  },
  {
    id: 3,
    sentence: "Мы наконец ... до вершины этой высокой горы.",
    translation: "Siamo finalmente arrivati in cima a questa alta montagna.",
    options: ["забрались", "взобрались", "добрались", "пробрались"],
    optionBases: ["забраться", "взобраться", "добраться", "пробраться"],
    correctIndex: 2,
    verbPair: "добраться — добираться",
    correctExplanation: BRAT_VERB_MAP["добраться"]
  },
  {
    id: 4,
    sentence: "Помогите мне ... подходящий галстук к этому костюму.",
    translation: "Aiutatemi a scegliere una cravatta adatta a questo vestito.",
    options: ["выбрать", "подобрать", "собрать", "набрать"],
    optionBases: ["выбрать", "подобрать", "собрать", "набрать"],
    correctIndex: 1,
    verbPair: "подобрать — подбирать",
    correctExplanation: BRAT_VERB_MAP["подобрать"]
  },
  {
    id: 5,
    sentence: "Он долго ... в своих старых письмах, прежде чем нашёл нужное.",
    translation: "Ha frugato a lungo tra le sue vecchie lettere prima di trovare quella giusta.",
    options: ["разбирался", "перебирал", "отбирал", "убирал"],
    optionBases: ["разобраться", "перебрать", "отобрать", "убрать"],
    correctIndex: 1,
    verbPair: "перебрать — перебирать",
    correctExplanation: BRAT_VERB_MAP["перебрать"]
  },
  {
    id: 6,
    sentence: "Мне нужно ... номер телефона моего друга.",
    translation: "Devo comporre il numero di telefono del mio amico.",
    options: ["выбрать", "набрать", "собрать", "подобрать"],
    optionBases: ["выбрать", "набрать", "собрать", "подобрать"],
    correctIndex: 1,
    verbPair: "набрать — набирать",
    correctExplanation: BRAT_VERB_MAP["набрать"]
  },
  {
    id: 7,
    sentence: "Лена была ... старостой нашей группы.",
    translation: "Lena è stata eletta rappresentante del nostro gruppo.",
    options: ["выбрана", "избрана", "собрана", "убрана"],
    optionBases: ["выбрать", "избрать", "собрать", "убрать"],
    correctIndex: 1,
    verbPair: "избрать — избирать",
    correctExplanation: BRAT_VERB_MAP["избрать"]
  },
  {
    id: 8,
    sentence: "Разведчики незаметно ... в тыл врага.",
    translation: "Gli esploratori si sono infiltrati inosservati nelle retrovie del nemico.",
    options: ["добрались", "забрались", "пробрались", "взобрались"],
    optionBases: ["добраться", "забраться", "пробраться", "взобраться"],
    correctIndex: 2,
    verbPair: "пробраться — пробираться",
    correctExplanation: BRAT_VERB_MAP["пробраться"]
  },
  {
    id: 9,
    sentence: "Мальчик ... на самую верхушку дерева.",
    translation: "Il ragazzo si è arrampicato sulla cima più alta dell'albero.",
    options: ["забрался", "набрался", "убрался", "собрался"],
    optionBases: ["забраться", "набраться", "убраться", "собраться"],
    correctIndex: 0,
    verbPair: "забраться — забираться",
    correctExplanation: BRAT_VERB_MAP["забраться"]
  },
  {
    id: 10,
    sentence: "Перед отъездом мне нужно ... в своей комнате.",
    translation: "Prima della partenza devo pulire la mia stanza.",
    options: ["собраться", "убраться", "добраться", "набраться"],
    optionBases: ["собраться", "убраться", "добраться", "набраться"],
    correctIndex: 1,
    verbPair: "убраться — убираться",
    correctExplanation: BRAT_VERB_MAP["убраться"]
  },
  {
    id: 11,
    sentence: "Она никак не могла ... смелости, чтобы сказать правду.",
    translation: "Proprio non riusciva a trovare il coraggio di dire la verità.",
    options: ["добраться", "набраться", "забраться", "выбраться"],
    optionBases: ["добраться", "набраться", "забраться", "выбраться"],
    correctIndex: 1,
    verbPair: "набраться — набираться",
    correctExplanation: BRAT_VERB_MAP["набраться"]
  },
  {
    id: 12,
    sentence: "В библиотеке я ... несколько книг для доклада.",
    translation: "In biblioteca ho scelto alcuni libri per la relazione.",
    options: ["выбрал", "отобрал", "подобрал", "собрал"],
    optionBases: ["выбрать", "отобрать", "подобрать", "собрать"],
    correctIndex: 0,
    verbPair: "выбрать — выбирать",
    correctExplanation: BRAT_VERB_MAP["выбрать"]
  },
  {
    id: 13,
    sentence: "Студенты долго не могли ... в этой сложной теме.",
    translation: "Gli studenti per molto tempo non sono riusciti a raccapezzarsi in questo argomento difficile.",
    options: ["собраться", "разобраться", "забраться", "пробраться"],
    optionBases: ["собраться", "разобраться", "забраться", "пробраться"],
    correctIndex: 1,
    verbPair: "разобраться — разбираться",
    correctExplanation: BRAT_VERB_MAP["разобраться"]
  },
  {
    id: 14,
    sentence: "Машина быстро ... скорость на свободном шоссе.",
    translation: "L'auto ha guadagnato velocemente velocità sulla strada libera.",
    options: ["собрала", "набрала", "выбрала", "убрала"],
    optionBases: ["собрать", "набрать", "выбрать", "убрать"],
    correctIndex: 1,
    verbPair: "набрать — набирать",
    correctExplanation: BRAT_VERB_MAP["набрать"]
  },
  {
    id: 15,
    sentence: "Мы ... пойти в театр всем классом.",
    translation: "Abbiamo deciso (ci siamo riuniti per andare) di andare a teatro con tutta la classe.",
    options: ["собрались", "добрались", "забрались", "убрались"],
    optionBases: ["собраться", "добраться", "забраться", "убраться"],
    correctIndex: 0,
    verbPair: "собраться — собираться",
    correctExplanation: BRAT_VERB_MAP["собрать"]
  },
  {
    id: 16,
    sentence: "Он ... за дело с большим энтузиазмом.",
    translation: "Si è messo al lavoro con grande entusiasmo.",
    options: ["собрался", "взялся", "брался", "прибрался"],
    optionBases: ["собраться", "взяться", "браться", "прибраться"],
    correctIndex: 1,
    verbPair: "взяться (браться) — браться",
    correctExplanation: BRAT_VERB_MAP["браться"]
  },
  {
    id: 17,
    sentence: "В лесу дети ... целую корзину ягод.",
    translation: "Nel bosco i bambini hanno raccolto un intero cesto di bacche.",
    options: ["отобрали", "набрали", "убрали", "собрали"],
    optionBases: ["отобрать", "набрать", "убрать", "собрать"],
    correctIndex: 1,
    verbPair: "набрать — набирать",
    correctExplanation: BRAT_VERB_MAP["набрать"]
  },
  {
    id: 18,
    sentence: "Комиссия ... самых достойных кандидатов.",
    translation: "La commissione ha selezionato i candidati più meritevoli.",
    options: ["выбрала", "отобрала", "забрала", "набрала"],
    optionBases: ["выбрать", "отобрать", "забрать", "набрать"],
    correctIndex: 1,
    verbPair: "отобрать — отбирать",
    correctExplanation: BRAT_VERB_MAP["отобрать"]
  },
  {
    id: 19,
    sentence: "К вечеру туристы ... до берега широкой реки.",
    translation: "Verso sera i turisti hanno raggiunto la riva del largo fiume.",
    options: ["пробрались", "добрались", "взобрались", "забрались"],
    optionBases: ["пробраться", "добраться", "взобраться", "забраться"],
    correctIndex: 1,
    verbPair: "добраться — добираться",
    correctExplanation: BRAT_VERB_MAP["добраться"]
  },
  {
    id: 20,
    sentence: "Пожалуйста, ... свои учебники в сумку.",
    translation: "Per favore, metti via i tuoi libri nella borsa.",
    options: ["собери", "убери", "выбери", "набери"],
    optionBases: ["собрать", "убрать", "выбрать", "набрать"],
    correctIndex: 1,
    verbPair: "убрать — убирать",
    correctExplanation: BRAT_VERB_MAP["убрать"]
  },
  {
    id: 21,
    sentence: "Охотники с трудом ... через болото.",
    translation: "I cacciatori sono avanzati con difficoltà attraverso la palude.",
    options: ["пробрались", "забрались", "добрались", "взобрались"],
    optionBases: ["пробраться", "забраться", "добраться", "взобраться"],
    correctIndex: 0,
    verbPair: "пробраться — пробираться",
    correctExplanation: BRAT_VERB_MAP["пробраться"]
  },
  {
    id: 22,
    sentence: "Он ... из депрессии благодаря помощи друзей.",
    translation: "È uscito dalla depressione grazie all'aiuto degli amici.",
    options: ["набрался", "выбрался", "добрался", "собрался"],
    optionBases: ["набраться", "выбраться", "добраться", "собраться"],
    correctIndex: 1,
    verbPair: "выбраться — выбираться",
    correctExplanation: BRAT_VERB_MAP["выбраться"]
  },
  {
    id: 23,
    sentence: "Мама ... малины, чтобы сварить варенье.",
    translation: "La mamma ha raccolto dei lamponi per fare la marmellata.",
    options: ["собрала", "набрала", "отобрала", "прибрала"],
    optionBases: ["собрать", "набрать", "отобрать", "прибраться"],
    correctIndex: 1,
    verbPair: "набрать — набирать",
    correctExplanation: BRAT_VERB_MAP["набрать"]
  },
  {
    id: 24,
    sentence: "Мы должны ... делегатов на международный съезд.",
    translation: "Dobbiamo eleggere i delegati per il congresso internazionale.",
    options: ["выбрать", "собрать", "набрать", "избрать"],
    optionBases: ["выбрать", "собрать", "набрать", "избрать"],
    correctIndex: 3,
    verbPair: "избрать — избирать",
    correctExplanation: BRAT_VERB_MAP["избрать"]
  },
  {
    id: 25,
    sentence: "Студент ... высоту в 2 метра на соревнованиях.",
    translation: "Lo studente ha superato (preso) l'altezza di 2 metri alle competizioni.",
    options: ["собрал", "взял", "набрал", "убрал"],
    optionBases: ["собрать", "взять", "набрать", "убрать"],
    correctIndex: 1,
    verbPair: "взять — брать",
    correctExplanation: BRAT_VERB_MAP["брать/взять"]
  },
  {
    id: 26,
    sentence: "Она ... в заброшенные дебри леса.",
    translation: "Lei si è addentrata nella boscaglia abbandonata della foresta.",
    options: ["забралась", "пробралась", "добрались", "взобрались"], // Fix options too
    optionBases: ["забраться", "пробраться", "добраться", "взобраться"],
    correctIndex: 0,
    verbPair: "забраться — забираться",
    correctExplanation: BRAT_VERB_MAP["забраться"]
  },
  {
    id: 27,
    sentence: "В этой книге я ... много полезной литературы к семинару.",
    translation: "In questo libro ho selezionato molta letteratura utile per il seminario.",
    options: ["набрал", "отобрал", "подобрал", "собрал"],
    optionBases: ["набрать", "отобрать", "подобрать", "собрать"],
    correctIndex: 2,
    verbPair: "подобрать — подбирать",
    correctExplanation: BRAT_VERB_MAP["подобрать"]
  },
  {
    id: 28,
    sentence: "Он слишком много на себя ..., когда пообещал это сделать.",
    translation: "Si è preso troppe responsabilità (troppo su di sé) quando ha promesso di farlo.",
    options: ["собрал", "убрал", "взял", "набрал"],
    optionBases: ["собрать", "убрать", "взять", "набрать"],
    correctIndex: 2,
    verbPair: "взять (на себя) — брать",
    correctExplanation: BRAT_VERB_MAP["брать/взять"]
  },
  {
    id: 29,
    sentence: "Женщина ... вещи в шкафу вечером.",
    translation: "La donna ha riordinato le cose nell'armadio la sera.",
    options: ["собирала", "перебирала", "набирала", "убирала"],
    optionBases: ["собрать", "перебрать", "набрать", "убирать"],
    correctIndex: 1,
    verbPair: "перебрать — перебирать",
    correctExplanation: BRAT_VERB_MAP["перебрать"]
  },
  {
    id: 30,
    sentence: "На первом курсе ... более ста пятидесяти студентов.",
    translation: "Al primo anno sono stati ammessi (raccolti) più di centocinquanta studenti.",
    options: ["собрали", "набрали", "избрали", "выбрали"],
    optionBases: ["собрать", "набрать", "избрать", "выбрать"],
    correctIndex: 1,
    verbPair: "набрать — набирать",
    correctExplanation: BRAT_VERB_MAP["набрать"]
  },
  {
    id: 31,
    sentence: "Скоропись на полях было невозможно ... .",
    translation: "Era impossibile decifrare (leggere/capire) la corsiva a margine.",
    options: ["разобрать", "выбрать", "подобрать", "собрать"],
    optionBases: ["разобрать", "выбрать", "подобрать", "собрать"],
    correctIndex: 0,
    verbPair: "разобрать — разбирать",
    correctExplanation: BRAT_VERB_MAP["разобрать"]
  },
  {
    id: 32,
    sentence: "Когда вы планируете ... свои вещи из камеры хранения?",
    translation: "Quando avete intenzione di ritirare (prendere) le vostre cose dal deposito bagagli?",
    options: ["забрать", "отобрать", "набрать", "выбрать"],
    optionBases: ["забрать", "отобрать", "набрать", "выбрать"],
    correctIndex: 0,
    verbPair: "забрать — забирать",
    correctExplanation: BRAT_VERB_MAP["забрать"]
  },
  {
    id: 33,
    sentence: "Он совершенно не ... в абстрактной живописи.",
    translation: "Lui non capisce assolutamente nulla di pittura astratta.",
    options: ["собирается", "разбирается", "забирается", "пробирается"],
    optionBases: ["собираться", "разбираться", "забираться", "пробираться"],
    correctIndex: 1,
    verbPair: "разбираться — разбираться",
    correctExplanation: BRAT_VERB_MAP["разобраться"]
  },
  {
    id: 34,
    sentence: "Вы ..., или я вызову полицию!",
    translation: "Andatevene, o chiamerò la polizia!",
    options: ["забирайтесь", "убирайтесь", "собирайтесь", "добирайтесь"],
    optionBases: ["забираться", "убираться", "собираться", "добираться"],
    correctIndex: 1,
    verbPair: "убираться — убираться",
    correctExplanation: BRAT_VERB_MAP["убраться"]
  },
  {
    id: 35,
    sentence: "Брат ... целую гору книг и журналов из библиотеки.",
    translation: "Mio fratello ha preso un'intera montagna di libri e riviste dalla biblioteca.",
    options: ["собрал", "забрал", "набрал", "прибрал"],
    optionBases: ["собрать", "забрать", "набрать", "прибраться"],
    correctIndex: 1,
    verbPair: "забрать — забирать",
    correctExplanation: BRAT_VERB_MAP["забрать"]
  },
  {
    id: 36,
    sentence: "Старик ... на самый высокий уступ скалы.",
    translation: "Il vecchio si è arrampicato sulla sporgenza più alta della roccia.",
    options: ["добрался", "взобрался", "пробрался", "забрался"],
    optionBases: ["добраться", "взобраться", "пробраться", "забраться"],
    correctIndex: 1,
    verbPair: "взобраться — взбираться",
    correctExplanation: BRAT_VERB_MAP["взобраться"]
  },
  {
    id: 37,
    sentence: "Я долго ... подходящий пример, чтобы объяснить правило.",
    translation: "Ho cercato a lungo un esempio adatto per spiegare la regola.",
    options: ["выбирал", "подбирал", "собирал", "набирал"],
    optionBases: ["выбрать", "подобрать", "собрать", "набрать"],
    correctIndex: 1,
    verbPair: "подобрать — подбирать",
    correctExplanation: BRAT_VERB_MAP["подобрать"]
  },
  {
    id: 38,
    sentence: "Она ... из нескольких вариантов самый красивый.",
    translation: "Lei ha scelto l'opzione più bella tra diverse varianti.",
    options: ["отобрала", "выбрала", "подобрала", "собрала"],
    optionBases: ["отобрать", "выбрать", "подобрать", "собрать"],
    correctIndex: 1,
    verbPair: "выбрать — выбирать",
    correctExplanation: BRAT_VERB_MAP["выбрать"]
  },
  {
    id: 39,
    sentence: "Мальчик ... мячи для занятия физкультурой.",
    translation: "Il ragazzo ha selezionato i palloni per la lezione di educazione fisica.",
    options: ["собрал", "отобрал", "подобрал", "убрал"],
    optionBases: ["собрать", "отобрать", "подобрать", "убрать"],
    correctIndex: 1, // отобрать in context of "selecting" for the class
    verbPair: "отбирать — отобрать",
    correctExplanation: BRAT_VERB_MAP["отобрать"]
  },
  {
    id: 40,
    sentence: "Продавец показал нам несколько галстуков, и мы ... один.",
    translation: "Il venditore ci ha mostrato diverse cravatte e ne abbiamo scelta una.",
    options: ["собрали", "подобрали", "выбрали", "набрали"],
    optionBases: ["собрать", "подобрать", "выбрать", "набрать"],
    correctIndex: 2,
    verbPair: "выбрать — выбирать",
    correctExplanation: BRAT_VERB_MAP["выбрать"]
  }
];

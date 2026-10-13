import { Exercise } from '../types';

export const ZHIT_VERB_MAP: Record<string, string> = {
  "прожить": "(прожить — проживать): significa vivere per un certo tempo (прожить десять лет) o spendere dei soldi per vivere.",
  "выжить": "(выжить — выживать): significa sopravvivere in condizioni difficili o espellere qualcuno da un luogo.",
  "дожить": "(дожить — доживать): significa vivere fino a un certo punto o età (дожить до ста лет).",
  "зажить": "(зажить — заживать): significa iniziare a vivere (in modo diverso) oppure, riferito a una ferita, rimarginarsi/guarire.",
  "пережить": "(пережить — переживать): significa sopravvivere a qualcuno/qualcosa, oppure provare forti emozioni/preoccupazioni.",
  "нажить": "(нажить — наживать): significa acquisire o accumulare, spesso riferito a ricchezza o problemi (нажить состояние, нажить врагов).",
  "обжить": "(обжить — обживать): significa rendere un luogo abitabile e familiare (обжить новую квартиру).",
  "отжить": "(отжить — отживать): significa aver fatto il proprio tempo, essere diventato obsoleto o morire (отжить свой век).",
  "изжить": "(изжить — изживать): significa eliminare o superare qualcosa di negativo (изжить недостатки, изжить предрассудки).",
  "прижиться": "(прижиться — приживаться): significa ambientarsi, abituarsi a un nuovo luogo o (riferito a piante) attecchire.",
  "разжиться": "(разжиться — разживаться): significa riuscire a procurarsi qualcosa, spesso denaro o beni (разжиться деньгами).",
  "пожить": "(пожить — поживать): significa vivere per un po' di tempo, o semplicemente 'come va?' (как поживаешь?)."
};

export const ZHIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мой дедушка ... до девяноста пяти лет.",
    translation: "Mio nonno ha vissuto fino a novantacinque anni.",
    options: ["прожил", "дожил", "выжил", "зажил"],
    optionBases: ["прожить", "дожить", "выжить", "зажить"],
    correctIndex: 1,
    verbPair: "дожить — доживать",
    correctExplanation: ZHIT_VERB_MAP["дожить"]
  },
  {
    id: 2,
    sentence: "Рана на руке начала быстро ... .",
    translation: "La ferita sulla mano ha iniziato a guarire rapidamente.",
    options: ["проживать", "заживать", "выживать", "обживать"],
    optionBases: ["прожить", "зажить", "выжить", "обжить"],
    correctIndex: 1,
    verbPair: "заживать — зажить",
    correctExplanation: ZHIT_VERB_MAP["зажить"]
  },
  {
    id: 3,
    sentence: "Им пришлось ... много трудностей во время войны.",
    translation: "Hanno dovuto attraversare (vivere) molte difficoltà durante la guerra.",
    options: ["пережить", "обжить", "дожить", "отжить"],
    optionBases: ["пережить", "обжить", "дожить", "отжить"],
    correctIndex: 0,
    verbPair: "пережить — переживать",
    correctExplanation: ZHIT_VERB_MAP["пережить"]
  },
  {
    id: 4,
    sentence: "Мы наконец-то ... нашу новую квартиру.",
    translation: "Finalmente abbiamo reso abitabile la nostra nuova casa.",
    options: ["пережили", "дожили", "обжили", "нажили"],
    optionBases: ["пережить", "дожить", "обжить", "нажить"],
    correctIndex: 2,
    verbPair: "обжить — обживать",
    correctExplanation: ZHIT_VERB_MAP["обжить"]
  },
  {
    id: 5,
    sentence: "После операции пациент быстро ... .",
    translation: "Dopo l'operazione il paziente si è ripreso (è sopravvissuto/tornato in vita).",
    options: ["выжил", "дожил", "обжил", "отжил"],
    optionBases: ["выжить", "дожить", "обжить", "отжить"],
    correctIndex: 0,
    verbPair: "выжить — выживать",
    correctExplanation: ZHIT_VERB_MAP["выжить"]
  },
  {
    id: 6,
    sentence: "Старые предрассудки нужно ... .",
    translation: "Bisogna eliminare i vecchi pregiudizi.",
    options: ["изжить", "прожить", "нажить", "пожить"],
    optionBases: ["изжить", "прожить", "нажить", "пожить"],
    correctIndex: 0,
    verbPair: "изжить — изживать",
    correctExplanation: ZHIT_VERB_MAP["изжить"]
  },
  {
    id: 7,
    sentence: "Он ... огромное состояние благодаря торговле.",
    translation: "Ha accumulato un'enorme fortuna grazie al commercio.",
    options: ["нажил", "прожил", "выжил", "обжил"],
    optionBases: ["нажить", "прожить", "выжить", "обжить"],
    correctIndex: 0,
    verbPair: "нажить — наживать",
    correctExplanation: ZHIT_VERB_MAP["нажить"]
  },
  {
    id: 8,
    sentence: "Этот старый обычай уже давно ... свой век.",
    translation: "Questa vecchia usanza ha già fatto il suo tempo da molto.",
    options: ["пережил", "прожил", "отжил", "зажил"],
    optionBases: ["пережить", "прожить", "отжил", "зажил"],
    correctIndex: 2,
    verbPair: "отжить — отживать",
    correctExplanation: ZHIT_VERB_MAP["отжить"]
  },
  {
    id: 9,
    sentence: "Она очень ... из-за предстоящего экзамена.",
    translation: "Lei è molto preoccupata (provare emozioni) per l'esame imminente.",
    options: ["проживает", "переживает", "доживает", "заживает"],
    optionBases: ["прожить", "пережить", "дожить", "зажить"],
    correctIndex: 1,
    verbPair: "переживать — пережить",
    correctExplanation: ZHIT_VERB_MAP["пережить"]
  },
  {
    id: 10,
    sentence: "Новый сотрудник быстро ... в нашем коллективе.",
    translation: "Il nuovo collega si è ambientato velocemente nel nostro gruppo.",
    options: ["зажился", "прижился", "нажился", "обжился"],
    optionBases: ["зажиться", "прижиться", "нажиться", "обжиться"],
    correctIndex: 1,
    verbPair: "прижиться — приживаться",
    correctExplanation: ZHIT_VERB_MAP["прижиться"]
  },
  {
    id: 11,
    sentence: "Мы ... в этом городе три года и уехали.",
    translation: "Abbiamo vissuto in questa città per tre anni e siamo andati via.",
    options: ["прожили", "дожили", "отжили", "зажили"],
    optionBases: ["прожить", "дожить", "отжил", "зажил"],
    correctIndex: 0,
    verbPair: "прожить — проживать",
    correctExplanation: ZHIT_VERB_MAP["прожить"]
  },
  {
    id: 12,
    sentence: "Ей удалось ... новой жизнью после развода.",
    translation: "È riuscita a iniziare a vivere una nuova vita dopo il divorzio.",
    options: ["прожить", "дожить", "зажить", "нажить"],
    optionBases: ["прожить", "дожить", "зажить", "нажить"],
    correctIndex: 2,
    verbPair: "зажить — заживать",
    correctExplanation: ZHIT_VERB_MAP["зажить"]
  },
  {
    id: 13,
    sentence: "Нужно ... этот горький опыт и двигаться дальше.",
    translation: "Bisogna superare (vivere fino alla fine) questa amara esperienza e andare avanti.",
    options: ["прожить", "обжить", "пережить", "выжить"],
    optionBases: ["прожить", "обжить", "пережить", "выжить"],
    correctIndex: 2,
    verbPair: "пережить — переживать",
    correctExplanation: ZHIT_VERB_MAP["пережить"]
  },
  {
    id: 14,
    sentence: "Он ... себе много врагов своим высокомерием.",
    translation: "Si è fatto (accumulato) molti nemici con la sua arroganza.",
    options: ["нажил", "изжил", "дожил", "отжил"],
    optionBases: ["нажить", "изжить", "дожить", "отжил"],
    correctIndex: 0,
    verbPair: "нажить — наживать",
    correctExplanation: ZHIT_VERB_MAP["нажить"]
  },
  {
    id: 15,
    sentence: "Маленькая ёлочка хорошо ... на новом месте.",
    translation: "Il piccolo abete ha attecchito bene nel nuovo posto.",
    options: ["прижилась", "нажилась", "прожилась", "выжилась"],
    optionBases: ["прижиться", "нажиться", "прожиться", "выжиться"],
    correctIndex: 0,
    verbPair: "прижиться — приживаться",
    correctExplanation: ZHIT_VERB_MAP["прижиться"]
  },
  {
    id: 16,
    sentence: "Как ты ...? Всё ли у тебя хорошо?",
    translation: "Come te la passi? Va tutto bene?",
    options: ["проживаешь", "поживаешь", "доживаешь", "заживаешь"],
    optionBases: ["прожить", "пожить", "дожить", "зажить"],
    correctIndex: 1,
    verbPair: "поживать — пожить",
    correctExplanation: ZHIT_VERB_MAP["пожить"]
  },
  {
    id: 17,
    sentence: "Он мечтает ... до того дня, когда люди полетят на Марс.",
    translation: "Sogna di vivere fino al giorno in cui gli uomini voleranno su Marte.",
    options: ["дожить", "прожить", "выжить", "обжить"],
    optionBases: ["дожить", "прожить", "выжить", "обжить"],
    correctIndex: 0,
    verbPair: "дожить — доживать",
    correctExplanation: ZHIT_VERB_MAP["дожить"]
  },
  {
    id: 18,
    sentence: "Мебель в стиле барокко в этой квартире уже ... свой век.",
    translation: "I mobili in stile barocco in questo appartamento hanno già fatto il loro tempo.",
    options: ["отжила", "прожила", "нажила", "обжила"],
    optionBases: ["отжить", "прожить", "нажить", "обжить"],
    correctIndex: 0,
    verbPair: "отжить — отживать",
    correctExplanation: ZHIT_VERB_MAP["отжить"]
  },
  {
    id: 19,
    sentence: "Они ... в маленьком домике на берегу моря целый месяц.",
    translation: "Hanno vissuto per un po' in una casetta in riva al mare per un mese intero.",
    options: ["прожили", "пожили", "зажили", "выжили"],
    optionBases: ["прожить", "пожить", "зажить", "выжить"],
    correctIndex: 1,
    verbPair: "пожили — пожить",
    correctExplanation: ZHIT_VERB_MAP["пожить"]
  },
  {
    id: 20,
    sentence: "Ему удалось ... ценной информацией об этой компании.",
    translation: "È riuscito a procurarsi (arricchirsi di) informazioni preziose su questa azienda.",
    options: ["разжиться", "нажиться", "прижиться", "обжиться"],
    optionBases: ["разжиться", "нажиться", "прижиться", "обжиться"],
    correctIndex: 0,
    verbPair: "разжиться — разживаться",
    correctExplanation: ZHIT_VERB_MAP["разжиться"]
  },
  {
    id: 21,
    sentence: "Царапина на колене почти ... .",
    translation: "Il graffio sul ginocchio è quasi guarito.",
    options: ["зажила", "прожила", "прошла", "выжила"],
    optionBases: ["зажить", "прожить", "пройти", "выжить"],
    correctIndex: 0,
    verbPair: "зажить — заживать",
    correctExplanation: ZHIT_VERB_MAP["зажить"]
  },
  {
    id: 22,
    sentence: "Мы должны ... этот конфликт как можно скорее.",
    translation: "Dobbiamo superare (eliminare) questo conflitto il prima possibile.",
    options: ["изжить", "прожить", "пережить", "обжить"],
    optionBases: ["изжить", "прожить", "пережить", "обжить"],
    correctIndex: 0,
    verbPair: "изжить — изживать",
    correctExplanation: ZHIT_VERB_MAP["изжить"]
  },
  {
    id: 23,
    sentence: "Эта книга помогла мне ... тяжёлую потерю.",
    translation: "Questo libro mi ha aiutato a superare una grave perdita.",
    options: ["пережить", "прожить", "нажить", "прижить"],
    optionBases: ["пережить", "прожить", "нажить", "прижить"],
    correctIndex: 0,
    verbPair: "пережить — переживать",
    correctExplanation: ZHIT_VERB_MAP["пережить"]
  },
  {
    id: 24,
    sentence: "В этой старой усадьбе никто не хотел ..., она казалась мрачной.",
    translation: "Nessuno voleva sistemarsi (vivere stabilmente) in quella vecchia tenuta, sembrava cupa.",
    options: ["обживаться", "заживаться", "наживаться", "выживаться"],
    optionBases: ["обжиться", "зажиться", "нажиться", "выжить"],
    correctIndex: 0,
    verbPair: "обживаться — обжиться",
    correctExplanation: ZHIT_VERB_MAP["обжить"]
  },
  {
    id: 25,
    sentence: "Он ... очень хорошо в новой стране.",
    translation: "Lui se la cava molto bene nel nuovo paese.",
    options: ["поживает", "заживает", "выживает", "проживает"],
    optionBases: ["пожить", "зажить", "выжить", "прожить"],
    correctIndex: 0,
    verbPair: "поживать — пожить",
    correctExplanation: ZHIT_VERB_MAP["пожить"]
  },
  {
    id: 26,
    sentence: "Спортсмен ... до конца соревнований, несмотря на травму.",
    translation: "L'atleta ha resistito (vissuto fino alla fine) i giochi nonostante l'infortunio.",
    options: ["дотянул (дожил)", "прожил", "выжил", "пережил"],
    optionBases: ["дожить", "прожить", "выжить", "пережить"],
    correctIndex: 0,
    verbPair: "дожить — доживать",
    correctExplanation: ZHIT_VERB_MAP["дожить"]
  },
  {
    id: 27,
    sentence: "Он ... целую неделю на одних яблоках.",
    translation: "È sopravvissuto per un'intera settimana solo a mele.",
    options: ["прожил", "выжил", "зажил", "нажил"],
    optionBases: ["прожить", "выжить", "зажил", "нажил"],
    correctIndex: 0,
    verbPair: "прожить — проживать",
    correctExplanation: ZHIT_VERB_MAP["прожить"]
  },
  {
    id: 28,
    sentence: "Нам нужно ... старую сантехнику.",
    translation: "Dobbiamo eliminare (cambiare) la vecchia idraulica.",
    options: ["изжить", "обжить", "отжить", "нажить"],
    optionBases: ["изжить", "обжить", "отжить", "нажить"],
    correctIndex: 0,
    verbPair: "изжить — изживать",
    correctExplanation: ZHIT_VERB_MAP["изжить"]
  },
  {
    id: 29,
    sentence: "Она ... в деревне всё лето.",
    translation: "Ha vissuto in campagna per tutta l'estate.",
    options: ["прожила", "дожила", "выжила", "зажила"],
    optionBases: ["прожить", "дожить", "выжить", "зажила"],
    correctIndex: 0,
    verbPair: "прожила — прожить",
    correctExplanation: ZHIT_VERB_MAP["прожить"]
  },
  {
    id: 30,
    sentence: "Путешественники ... в лесу без огня.",
    translation: "I viaggiatori sono sopravvissuti nella foresta senza fuoco.",
    options: ["выжили", "пережили", "прожили", "дожили"],
    optionBases: ["выжить", "пережить", "прожить", "дожить"],
    correctIndex: 0,
    verbPair: "выжили — выживать",
    correctExplanation: ZHIT_VERB_MAP["выжить"]
  },
  {
    id: 31,
    sentence: "Эта традиция давно ..., пора придумать новую.",
    translation: "Questa tradizione è superata da tempo, è ora di inventarne una nuova.",
    options: ["отжила", "прожила", "зажила", "нажила"],
    optionBases: ["отжить", "прожить", "зажить", "нажить"],
    correctIndex: 0,
    verbPair: "отжила — отжить",
    correctExplanation: ZHIT_VERB_MAP["отжить"]
  },
  {
    id: 32,
    sentence: "Он ... до глубокой старости в полном здравии.",
    translation: "Ha vissuto fino a tarda età in piena salute.",
    options: ["дожил", "прожил", "зажил", "нажил"],
    optionBases: ["дожить", "прожить", "зажить", "нажить"],
    correctIndex: 0,
    verbPair: "дожить — доживать",
    correctExplanation: ZHIT_VERB_MAP["дожить"]
  },
  {
    id: 33,
    sentence: "Мама всегда сильно ... за детей.",
    translation: "La mamma si preoccupa sempre molto per i bambini.",
    options: ["переживает", "проживает", "доживает", "наживает"],
    optionBases: ["переживать", "проживать", "доживать", "наживать"],
    correctIndex: 0,
    verbPair: "переживать — пережить",
    correctExplanation: ZHIT_VERB_MAP["пережить"]
  },
  {
    id: 34,
    sentence: "Мы быстро ... на новом месте и завели друзей.",
    translation: "Ci siamo ambientati velocemente nel nuovo posto e abbiamo fatto amicizia.",
    options: ["обжились", "зажились", "нажились", "выжились"],
    optionBases: ["обжиться", "зажиться", "нажиться", "выжиться"],
    correctIndex: 0,
    verbPair: "обжились — обжиться",
    correctExplanation: ZHIT_VERB_MAP["обжить"]
  },
  {
    id: 35,
    sentence: "Пират ... себе богатство грабежами.",
    translation: "Il pirata si è fatto (accumulato) una ricchezza con i saccheggi.",
    options: ["нажил", "изжил", "прожил", "дожил"],
    optionBases: ["нажить", "изжить", "прожить", "дожить"],
    correctIndex: 0,
    verbPair: "нажить — наживать",
    correctExplanation: ZHIT_VERB_MAP["нажить"]
  },
  {
    id: 36,
    sentence: "Эта проблема уже ... себя.",
    translation: "Questo problema si è già esaurito (eliminato da sé).",
    options: ["изжила", "прожила", "нажила", "отжила"],
    optionBases: ["изжить", "прожить", "нажить", "отжить"],
    correctIndex: 0,
    verbPair: "изжила — изжить",
    correctExplanation: ZHIT_VERB_MAP["изжить"]
  },
  {
    id: 37,
    sentence: "Они ... душа в душу много лет.",
    translation: "Hanno vissuto in perfetta armonia per molti anni.",
    options: ["прожили", "выжили", "пережили", "дожили"],
    optionBases: ["прожить", "выжить", "пережить", "дожить"],
    correctIndex: 0,
    verbPair: "прожить — проживать",
    correctExplanation: ZHIT_VERB_MAP["прожить"]
  },
  {
    id: 38,
    sentence: "Рана на дереве долго не ... .",
    translation: "La ferita sull'albero non guariva per molto tempo.",
    options: ["заживала", "проживала", "выживала", "доживала"],
    optionBases: ["зажить", "прожить", "выжить", "дожить"],
    correctIndex: 0,
    verbPair: "заживать — зажить",
    correctExplanation: ZHIT_VERB_MAP["зажить"]
  },
  {
    id: 39,
    sentence: "Кошке удалось ... после падения с пятого этажа.",
    translation: "La gatta è riuscita a sopravvivere dopo la caduta dal quinto piano.",
    options: ["выжить", "прожить", "дожить", "пережить"],
    optionBases: ["выжить", "прожить", "дожить", "пережить"],
    correctIndex: 0,
    verbPair: "выжить — выживать",
    correctExplanation: ZHIT_VERB_MAP["выжить"]
  },
  {
    id: 40,
    sentence: "Нам нужно ... новую квартиру мебелью.",
    translation: "Dobbiamo arredare (rendere abitabile) il nuovo appartamento con i mobili.",
    options: ["обжить", "нажить", "изжить", "прожить"],
    optionBases: ["обжить", "нажить", "изжить", "прожить"],
    correctIndex: 0,
    verbPair: "обжить — обживать",
    correctExplanation: ZHIT_VERB_MAP["обжить"]
  }
];

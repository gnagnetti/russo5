import { Exercise } from '../types';

export const UCHITSYA_VERB_MAP: Record<string, string> = {
  "учиться": "(учиться — научиться): significa essere uno studente in un luogo (я учусь в университете) o acquisire un'abilità generale (учиться плавать). Richiede spesso 'come' o 'dove'.",
  "изучать": "(изучать — изучить): significa studiare una materia in modo approfondito, sistematico o accademico (изучать историю, изучать русский язык). Richiede l'accusativo.",
  "учить": "(учить — выучить): significa memorizzare qualcosa (учить слова, учить стих) o insegnare a qualcuno (учить детей).",
  "заниматься": "(заниматься — позаниматься): significa dedicarsi allo studio, fare i compiti o esercitarsi (заниматься в библиотеке, заниматься спортом). Richiede lo strumentale.",
  "научиться": "riuscire ad acquisire un'abilità dopo un processo di apprendimento (научиться водить машину).",
  "выучить": "riuscire a imparare a memoria o padroneggiare completamente una materia (выучить правила).",
  "обучить": "(обучить — обучать): istruire qualcuno in un'abilità specifica o addestrare (обучить собаку командам).",
  "проучиться": "studiare per un certo periodo di tempo (проучиться три года).",
  "доучиться": "studiare fino alla fine di un ciclo o fino a un certo punto (доучиться до конца семестра).",
  "переучиться": "cambiare specializzazione o imparare di nuovo qualcosa in modo diverso (переучиться на программиста).",
  "приучить": "abituare qualcuno o se stessi a qualcosa (приучить к порядку).",
  "отучить": "far perdere un'abitudine a qualcuno (отучить курить)."
};

export const UCHITSYA_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мой брат ... в медицинском институте.",
    translation: "Mio fratello studia (è studente) all'istituto di medicina.",
    options: ["учится", "изучает", "учит", "занимается"],
    optionBases: ["учиться", "изучать", "учить", "заниматься"],
    correctIndex: 0,
    verbPair: "учиться — научиться",
    correctExplanation: UCHITSYA_VERB_MAP["учиться"]
  },
  {
    id: 2,
    sentence: "Мы уже три года ... русский язык.",
    translation: "Studiamo la lingua russa già da tre anni (materia sistematica).",
    options: ["учимся", "изучаем", "занимаемся", "обучаем"],
    optionBases: ["учиться", "изучать", "заниматься", "обучать"],
    correctIndex: 1,
    verbPair: "изучать — изучить",
    correctExplanation: UCHITSYA_VERB_MAP["изучать"]
  },
  {
    id: 3,
    sentence: "Сегодня вечером я буду ... в библиотеке.",
    translation: "Stasera studierò (mi eserciterò/farò i compiti) in biblioteca.",
    options: ["учиться", "заниматься", "изучать", "обучать"],
    optionBases: ["учиться", "заниматься", "изучать", "обучать"],
    correctIndex: 1,
    verbPair: "заниматься — позаниматься",
    correctExplanation: UCHITSYA_VERB_MAP["заниматься"]
  },
  {
    id: 4,
    sentence: "Тебе нужно ... эти новые слова к завтраку.",
    translation: "Devi imparare (a memoria) queste parole nuove per domani.",
    options: ["выучить", "изучить", "научиться", "обучить"],
    optionBases: ["выучить", "изучить", "научиться", "обучить"],
    correctIndex: 0,
    verbPair: "выучить — учить",
    correctExplanation: UCHITSYA_VERB_MAP["выучить"]
  },
  {
    id: 5,
    sentence: "Она быстро ... кататься на велосипеде.",
    translation: "Ha imparato (acquisito l'abilità) a correre in bicicletta velocemente.",
    options: ["научилась", "выучила", "обучилась", "изучила"],
    optionBases: ["научиться", "выучить", "обучиться", "изучить"],
    correctIndex: 0,
    verbPair: "научиться — учиться",
    correctExplanation: UCHITSYA_VERB_MAP["научиться"]
  },
  {
    id: 6,
    sentence: "Отец ... сына играть в шахматы.",
    translation: "Il padre ha insegnato al figlio a giocare a scacchi.",
    options: ["выучил", "научил", "изучил", "занял"],
    optionBases: ["выучить", "научить", "изучить", "занять"],
    correctIndex: 1,
    verbPair: "научить — учить",
    correctExplanation: "Qui 'научить' indica l'atto di trasmettere un'abilità (insegnare)."
  },
  {
    id: 7,
    sentence: "Инструктор ... нас правилам безопасности.",
    translation: "L'istruttore ci ha istruiti sulle regole di sicurezza.",
    options: ["обучил", "выучил", "изучил", "научился"],
    optionBases: ["обучить", "выучить", "изучить", "научиться"],
    correctIndex: 0,
    verbPair: "обучить — обучать",
    correctExplanation: UCHITSYA_VERB_MAP["обучить"]
  },
  {
    id: 8,
    sentence: "Я ... в этой школе всего два года.",
    translation: "Ho studiato (frequentato come studente) in questa scuola solo per due anni.",
    options: ["проучился", "выучился", "научился", "изучился"],
    optionBases: ["проучиться", "выучиться", "научиться", "изучиться"],
    correctIndex: 0,
    verbPair: "проучиться",
    correctExplanation: UCHITSYA_VERB_MAP["проучиться"]
  },
  {
    id: 9,
    sentence: "Он решил ... на повара, потому что любит готовить.",
    translation: "Ha deciso di riqualificarsi (cambiare specializzazione) come cuoco perché ama cucinare.",
    options: ["переучиться", "доучиться", "научиться", "обучиться"],
    optionBases: ["переучиться", "доучиться", "научиться", "обучиться"],
    correctIndex: 0,
    verbPair: "переучиться",
    correctExplanation: UCHITSYA_VERB_MAP["переучиться"]
  },
  {
    id: 10,
    sentence: "Мать хочет ... ребёнка к порядку.",
    translation: "La madre vuole abituare il bambino all'ordine.",
    options: ["приучить", "отучить", "научить", "обучить"],
    optionBases: ["приучить", "отучить", "научить", "обучить"],
    correctIndex: 0,
    verbPair: "приучить — приучать",
    correctExplanation: UCHITSYA_VERB_MAP["приучить"]
  },
  {
    id: 11,
    sentence: "Мы помогли ему ... от вредной привычки.",
    translation: "Lo abbiamo aiutato a perdere (disabituarsi da) una cattiva abitudine.",
    options: ["отучиться", "приучиться", "научиться", "выучиться"],
    optionBases: ["отучиться", "приучиться", "научиться", "выучиться"],
    correctIndex: 0,
    verbPair: "отучиться — отучаться",
    correctExplanation: UCHITSYA_VERB_MAP["отучить"]
  },
  {
    id: 12,
    sentence: "Студент ... до пятого курса и ушел из университета.",
    translation: "Lo studente ha studiato fino al quinto anno e poi ha lasciato l'università.",
    options: ["доучился", "проучился", "переучился", "выучился"],
    optionBases: ["доучиться", "проучиться", "переучиться", "выучиться"],
    correctIndex: 0,
    verbPair: "доучился — доучиваться",
    correctExplanation: UCHITSYA_VERB_MAP["доучиться"]
  },
  {
    id: 13,
    sentence: "Ты должен ... этот текст наизусть.",
    translation: "Devi imparare questo testo a memoria.",
    options: ["выучить", "изучить", "научить", "обучить"],
    optionBases: ["выучить", "изучить", "научить", "обучить"],
    correctIndex: 0,
    verbPair: "выучить — учить",
    correctExplanation: UCHITSYA_VERB_MAP["выучить"]
  },
  {
    id: 14,
    sentence: "Он ... программирование самостоятельно.",
    translation: "Lui studia programmazione in modo autonomo (materia complessa).",
    options: ["изучает", "учится", "занимается", "обучается"],
    optionBases: ["изучать", "учиться", "заниматься", "обучаться"],
    correctIndex: 0,
    verbPair: "изучать — изучить",
    correctExplanation: UCHITSYA_VERB_MAP["изучать"]
  },
  {
    id: 15,
    sentence: "Дети ... в школе по пять часов в день.",
    translation: "I bambini studiano (frequentano come studenti) a scuola per cinque ore al giorno.",
    options: ["учатся", "изучают", "учат", "занимаются"],
    optionBases: ["учиться", "изучать", "учить", "заниматься"],
    correctIndex: 0,
    verbPair: "учиться — научиться",
    correctExplanation: UCHITSYA_VERB_MAP["учиться"]
  },
  {
    id: 16,
    sentence: "Мне нужно ... ещё один час перед экзаменом.",
    translation: "Devo esercitarmi/studiare ancora un'ora prima dell'esame.",
    options: ["позаниматься", "поучиться", "поизучать", "повыучить"],
    optionBases: ["позаниматься", "поучиться", "поизучать", "повыучить"],
    correctIndex: 0,
    verbPair: "позаниматься — заниматься",
    correctExplanation: UCHITSYA_VERB_MAP["заниматься"]
  },
  {
    id: 17,
    sentence: "Никто не верил, что он так быстро ... говорить по-испански.",
    translation: "Nessuno credeva che avrebbe imparato a parlare spagnolo così in fretta.",
    options: ["научится", "выучит", "обучится", "изучит"],
    optionBases: ["научиться", "выучить", "обучиться", "изучить"],
    correctIndex: 0,
    verbPair: "научиться — учиться",
    correctExplanation: UCHITSYA_VERB_MAP["научиться"]
  },
  {
    id: 18,
    sentence: "Мы ... новый проект на этой неделе.",
    translation: "Studiamo (analizziamo profondamente) il nuovo progetto questa settimana.",
    options: ["изучаем", "учимся", "занимаемся", "обучаемся"],
    optionBases: ["изучать", "учиться", "заниматься", "обучаться"],
    correctIndex: 0,
    verbPair: "изучать — изучить",
    correctExplanation: UCHITSYA_VERB_MAP["изучать"]
  },
  {
    id: 19,
    sentence: "Она ... в консерватории на отделении фортепиано.",
    translation: "Lei studia al conservatorio nel dipartimento di pianoforte.",
    options: ["учится", "изучает", "учит", "занимается"],
    optionBases: ["учиться", "изучать", "учить", "заниматься"],
    correctIndex: 0,
    verbPair: "учиться — научиться",
    correctExplanation: UCHITSYA_VERB_MAP["учиться"]
  },
  {
    id: 20,
    sentence: "Я помогу тебе ... стихотворение к празднику.",
    translation: "Ti aiuterò a imparare (a memoria) la poesia per la festa.",
    options: ["выучить", "научить", "изучить", "обучить"],
    optionBases: ["выучить", "научить", "изучить", "обучить"],
    correctIndex: 0,
    verbPair: "выучить — учить",
    correctExplanation: UCHITSYA_VERB_MAP["выучить"]
  },
  {
    id: 21,
    sentence: "Он ... спортом каждое утро.",
    translation: "Lui pratica (si dedica a) sport ogni mattina.",
    options: ["занимается", "учится", "изучает", "обучается"],
    optionBases: ["заниматься", "учиться", "изучать", "обучаться"],
    correctIndex: 0,
    verbPair: "заниматься — позаниматься",
    correctExplanation: UCHITSYA_VERB_MAP["заниматься"]
  },
  {
    id: 22,
    sentence: "Вы должны ... собаку выполнять ваши команды.",
    translation: "Dovete addestrare (istruire) il cane a eseguire i vostri comandi.",
    options: ["обучить", "выучить", "изучить", "научиться"],
    optionBases: ["обучить", "выучить", "изучить", "научиться"],
    correctIndex: 0,
    verbPair: "обучить — обучать",
    correctExplanation: UCHITSYA_VERB_MAP["обучить"]
  },
  {
    id: 23,
    sentence: "Она ... в университете Сорбонны.",
    translation: "Lei studia (è studente) all'università della Sorbona.",
    options: ["учится", "изучает", "занимается", "обучает"],
    optionBases: ["учиться", "изучать", "заниматься", "обучать"],
    correctIndex: 0,
    verbPair: "учиться — научиться",
    correctExplanation: UCHITSYA_VERB_MAP["учиться"]
  },
  {
    id: 24,
    sentence: "Экспедиция ... флору и фауну этих островов.",
    translation: "La spedizione studia (analizza sistematicamente) la flora e la fauna di queste isole.",
    options: ["изучает", "учит", "занимается", "обучает"],
    optionBases: ["изучать", "учить", "заниматься", "обучать"],
    correctIndex: 0,
    verbPair: "изучать — изучить",
    correctExplanation: UCHITSYA_VERB_MAP["изучать"]
  },
  {
    id: 25,
    sentence: "Я ... все билеты к экзамену по истории.",
    translation: "Ho imparato (padroneggiato/a memoria) tutti gli argomenti per l'esame di storia.",
    options: ["выучил", "научил", "изучил", "обучил"],
    optionBases: ["выучить", "научить", "изучить", "обучить"],
    correctIndex: 0,
    verbPair: "выучил — учить",
    correctExplanation: UCHITSYA_VERB_MAP["выучить"]
  },
  {
    id: 26,
    sentence: "Мальчик никак не может ... плавать без круга.",
    translation: "Il ragazzo non riesce proprio a imparare a nuotare senza ciambella.",
    options: ["научиться", "выучиться", "обучиться", "изучиться"],
    optionBases: ["научиться", "выучиться", "обучиться", "изучиться"],
    correctIndex: 0,
    verbPair: "научиться — учиться",
    correctExplanation: UCHITSYA_VERB_MAP["научиться"]
  },
  {
    id: 27,
    sentence: "Мы планируем ... в спортзале три раза в неделю.",
    translation: "Abbiamo intenzione di allenarci (fare esercizio) in palestra tre volte a settimana.",
    options: ["заниматься", "учиться", "изучать", "обучать"],
    optionBases: ["заниматься", "учиться", "изучать", "обучать"],
    correctIndex: 0,
    verbPair: "заниматься — позаниматься",
    correctExplanation: UCHITSYA_VERB_MAP["заниматься"]
  },
  {
    id: 28,
    sentence: "Его ... вежливому общению с детства.",
    translation: "Lo hanno istruito (addestrato) a una comunicazione educata fin dall'infanzia.",
    options: ["обучили", "выучили", "научились", "изучили"],
    optionBases: ["обучить", "выучить", "научиться", "изучить"],
    correctIndex: 0,
    verbPair: "обучили — обучать",
    correctExplanation: UCHITSYA_VERB_MAP["обучить"]
  },
  {
    id: 29,
    sentence: "Она ... в аспирантуре уже три года.",
    translation: "Lei frequenta il dottorato già da tre anni.",
    options: ["учится", "изучает", "учит", "занимается"],
    optionBases: ["учиться", "изучать", "учить", "заниматься"],
    correctIndex: 0,
    verbPair: "учиться — научиться",
    correctExplanation: UCHITSYA_VERB_MAP["учиться"]
  },
  {
    id: 30,
    sentence: "Ученик ... правило, но не понял его смысла.",
    translation: "L'allievo ha imparato (a memoria) la regola, ma non ne ha capito il senso.",
    options: ["выучил", "изучил", "научил", "обучил"],
    optionBases: ["выучить", "изучить", "научить", "обучить"],
    correctIndex: 0,
    verbPair: "выучил — учить",
    correctExplanation: UCHITSYA_VERB_MAP["выучить"]
  },
  {
    id: 31,
    sentence: "Пора ... детей убирать за собой игрушки.",
    translation: "È ora di abituare i bambini a mettere a posto i propri giocattoli.",
    options: ["приучить", "научить", "обучить", "изучить"],
    optionBases: ["приучить", "научить", "обучить", "изучить"],
    correctIndex: 0,
    verbPair: "приучить — приучать",
    correctExplanation: UCHITSYA_VERB_MAP["приучить"]
  },
  {
    id: 32,
    sentence: "Вы должны ... этот проект со всей серьезностью.",
    translation: "Dovete studiare (analizzare profondamente) questo progetto con tutta la serietà.",
    options: ["изучить", "выучить", "научить", "обучить"],
    optionBases: ["изучить", "выучить", "научить", "обучить"],
    correctIndex: 0,
    verbPair: "изучить — изучать",
    correctExplanation: UCHITSYA_VERB_MAP["изучать"]
  },
  {
    id: 33,
    sentence: "Он ... в этом университете пять лет, но так и не получил диплом.",
    translation: "Ha studiato in questa università per cinque anni, ma non ha mai preso la laurea.",
    options: ["проучился", "выучился", "научился", "обучился"],
    optionBases: ["проучиться", "выучился", "научился", "обучился"],
    correctIndex: 0,
    verbPair: "проучился",
    correctExplanation: UCHITSYA_VERB_MAP["проучиться"]
  },
  {
    id: 34,
    sentence: "Нам нужно будет ... на новые программы через год.",
    translation: "Dovremo riqualificarci (imparare di nuovo) su nuovi programmi tra un anno.",
    options: ["переучиться", "доучиться", "проучиться", "выучиться"],
    optionBases: ["переучиться", "доучиться", "проучиться", "выучиться"],
    correctIndex: 0,
    verbPair: "переучиться",
    correctExplanation: UCHITSYA_VERB_MAP["переучиться"]
  },
  {
    id: 35,
    sentence: "Она смогла ... кошку пользоваться лотком.",
    translation: "È riuscita ad addestrare (abituare) la gatta a usare la lettiera.",
    options: ["приучить", "научить", "обучить", "выучить"],
    optionBases: ["приучить", "научить", "обучить", "выучить"],
    correctIndex: 0,
    verbPair: "приучить — приучать",
    correctExplanation: UCHITSYA_VERB_MAP["приучить"]
  },
  {
    id: 36,
    sentence: "Студент ... до конца курса, несмотря на трудности.",
    translation: "Lo studente ha studiato fino alla fine del corso (completato il ciclo), nonostante le difficoltà.",
    options: ["доучился", "проучился", "переучился", "выучился"],
    optionBases: ["доучиться", "проучиться", "переучиться", "выучиться"],
    correctIndex: 0,
    verbPair: "доучился — доучиваться",
    correctExplanation: UCHITSYA_VERB_MAP["доучиться"]
  },
  {
    id: 37,
    sentence: "Я хочу ... все тонкости этой профессии.",
    translation: "Voglio studiare (capire profondamente) tutte le sottigliezze di questa professione.",
    options: ["изучить", "выучить", "научить", "обучить"],
    optionBases: ["изучить", "выучить", "научить", "обучить"],
    correctIndex: 0,
    verbPair: "изучить — изучать",
    correctExplanation: UCHITSYA_VERB_MAP["изучать"]
  },
  {
    id: 38,
    sentence: "Мы помогли ей ... от привычки опаздывать.",
    translation: "L'abbiamo aiutata a liberarsi (disabituarsi) dall'abitudine di arrivare in ritardo.",
    options: ["отучиться", "приучиться", "научиться", "выучиться"],
    optionBases: ["отучиться", "приучиться", "научиться", "выучиться"],
    correctIndex: 0,
    verbPair: "отучиться — отучаться",
    correctExplanation: UCHITSYA_VERB_MAP["отучить"]
  },
  {
    id: 39,
    sentence: "Он ... в колледже на графического дизайнера.",
    translation: "Lui studia (è studente) al college per diventare graphic designer.",
    options: ["учится", "изучает", "занимается", "обучает"],
    optionBases: ["учиться", "изучать", "заниматься", "обучать"],
    correctIndex: 0,
    verbPair: "учится — учиться",
    correctExplanation: UCHITSYA_VERB_MAP["учиться"]
  },
  {
    id: 40,
    sentence: "Вы должны ... хотя бы десять новых слов сегодня.",
    translation: "Dovete imparare (a memoria) almeno dieci parole nuove oggi.",
    options: ["выучить", "научить", "обучить", "изучить"],
    optionBases: ["выучить", "научить", "обучить", "изучить"],
    correctIndex: 0,
    verbPair: "выучить — учить",
    correctExplanation: UCHITSYA_VERB_MAP["выучить"]
  }
];

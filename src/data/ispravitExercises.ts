import { Exercise } from '../types';

export const ISPRAVIT_VERB_MAP: Record<string, string> = {
  "исправить": "(исправить — исправлять): significa correggere un errore, un difetto o una situazione sbagliata (исправить ошибку, исправить почерк).",
  "чинить": "(починить — чинить): significa riparare un oggetto fisico, un meccanismo o qualcosa di rotto (чинить часы, чинить забор).",
  "отремонтировать": "(отремонтировать — ремонтировать): significa sottoporre a manutenzione o ristrutturazione (отремонтировать квартиру, отремонтировать машину).",
  "наладить": "(наладить — налаживать): significa regolare, mettere a punto un processo o ristabilire relazioni (наладить производство, наладить отношения).",
  "поправить": "(поправить — поправлять): significa sistemare qualcosa che è fuori posto o correggere leggermente (поправить галстук, поправить здоровье).",
  "устранить": "(устранить — устранять): significa eliminare un ostacolo, un guasto o una causa di errore (устранить неполадки, устранить конкурента).",
  "восстановить": "(восстановить — восстанавливать): significa ripristinare o ricostruire qualcosa allo stato originale (восстановить здание, восстановить файлы).",
  "подправить": "dare un piccolo ritocco, correggere lievi imperfezioni (подправить макияж).",
  "загладить": "rimediare a una colpa o appianare un conflitto (загладить вину).",
  "выправить": "raddrizzare qualcosa di storto o regolarizzare documenti (выправить осанку, выправить документы).",
  "справиться": "riuscire a gestire una situazione o superare una difficoltà (справиться с задачей).",
  "приправить": "condire (cibo) - non legato alla riparazione ma stessa radice."
};

export const ISPRAVIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Учитель попросил ученика ... ошибки в диктанте.",
    translation: "L'insegnante ha chiesto all'alunno di correggere gli errori nel dettato.",
    options: ["исправить", "починить", "наладить", "устранить"],
    optionBases: ["исправить", "чинить", "наладить", "устранить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 2,
    sentence: "Мой дедушка любит ... старые часы.",
    translation: "A mio nonno piace riparare i vecchi orologi.",
    options: ["чинить", "исправлять", "устранять", "заглаживать"],
    optionBases: ["чинить", "исправлять", "устранять", "заглаживать"],
    correctIndex: 0,
    verbPair: "чинить — починить",
    correctExplanation: ISPRAVIT_VERB_MAP["чинить"]
  },
  {
    id: 3,
    sentence: "Нам нужно ... квартиру перед рождением ребёнка.",
    translation: "Dobbiamo ristrutturare l'appartamento prima della nascita del bambino.",
    options: ["отремонтировать", "починить", "исправить", "поправить"],
    optionBases: ["отремонтировать", "починить", "исправить", "поправить"],
    correctIndex: 0,
    verbPair: "отремонтировать — ремонтировать",
    correctExplanation: ISPRAVIT_VERB_MAP["отремонтировать"]
  },
  {
    id: 4,
    sentence: "Специалисты пытаются ... подачу электроэнергии.",
    translation: "Gli specialisti stanno cercando di ripristinare l'erogazione di energia elettrica.",
    options: ["восстановить", "починить", "исправить", "поправить"],
    optionBases: ["восстановить", "починить", "исправить", "поправить"],
    correctIndex: 0,
    verbPair: "восстановить — восстанавливать",
    correctExplanation: ISPRAVIT_VERB_MAP["восстановить"]
  },
  {
    id: 5,
    sentence: "Мальчик пытался ... свою вину, купив маме цветы.",
    translation: "Il ragazzo ha cercato di rimediare alla sua colpa comprando dei fiori alla mamma.",
    options: ["загладить", "исправить", "починить", "поправить"],
    optionBases: ["загладить", "исправить", "починить", "поправить"],
    correctIndex: 0,
    verbPair: "загладить — заглаживать",
    correctExplanation: ISPRAVIT_VERB_MAP["загладить"]
  },
  {
    id: 6,
    sentence: "Мастеру удалось быстро ... все неполадки в системе.",
    translation: "Il tecnico è riuscito a eliminare velocemente tutti i guasti nel sistema.",
    options: ["устранить", "наладить", "поправить", "починить"],
    optionBases: ["устранить", "наладить", "поправить", "починить"],
    correctIndex: 0,
    verbPair: "устранить — устранять",
    correctExplanation: ISPRAVIT_VERB_MAP["устранить"]
  },
  {
    id: 7,
    sentence: "Помоги мне ... воротничок, он загнулся.",
    translation: "Aiutami a sistemare il colletto, è piegato.",
    options: ["поправить", "починить", "исправить", "отремонтировать"],
    optionBases: ["поправить", "починить", "исправить", "отремонтировать"],
    correctIndex: 0,
    verbPair: "поправить — поправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["поправить"]
  },
  {
    id: 8,
    sentence: "Фирма надеется ... отношения с зарубежными партнерами.",
    translation: "L'azienda spera di ristabilire (mettere a punto) le relazioni con i partner stranieri.",
    options: ["наладить", "починить", "исправить", "устранить"],
    optionBases: ["наладить", "починить", "исправить", "устранить"],
    correctIndex: 0,
    verbPair: "наладить — налаживать",
    correctExplanation: ISPRAVIT_VERB_MAP["наладить"]
  },
  {
    id: 9,
    sentence: "Художник решил немного ... детали на портрете.",
    translation: "L'artista ha deciso di ritoccare un po' i dettagli sul ritratto.",
    options: ["подправить", "починить", "исправить", "восстановить"],
    optionBases: ["подправить", "починить", "исправить", "восстановить"],
    correctIndex: 0,
    verbPair: "подправить — подправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["подправить"]
  },
  {
    id: 10,
    sentence: "Тебе пора ... свой почерк, ничего не понятно.",
    translation: "È ora che tu corregga la tua calligrafia, non si capisce nulla.",
    options: ["исправить", "починить", "отремонтировать", "наладить"],
    optionBases: ["исправить", "починить", "отремонтировать", "наладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 11,
    sentence: "Нужно ... этот велосипед, у него спущено колесо.",
    translation: "Bisogna riparare questa bicicletta, ha la ruota sgonfia.",
    options: ["починить", "исправить", "поправить", "отладить"],
    optionBases: ["починить", "исправить", "поправить", "отладить"],
    correctIndex: 0,
    verbPair: "починить — чинить",
    correctExplanation: ISPRAVIT_VERB_MAP["чинить"]
  },
  {
    id: 12,
    sentence: "Архив пытается ... уничтоженные документы.",
    translation: "L'archivio sta cercando di ripristinare i documenti distrutti.",
    options: ["восстановить", "починить", "исправить", "загладить"],
    optionBases: ["восстановить", "починить", "исправить", "загладить"],
    correctIndex: 0,
    verbPair: "восстановить — восстанавливать",
    correctExplanation: ISPRAVIT_VERB_MAP["восстановить"]
  },
  {
    id: 13,
    sentence: "Он пообещал ... своё поведение в школе.",
    translation: "Ha promesso di correggere (migliorare) il suo comportamento a scuola.",
    options: ["исправить", "починить", "поправить", "наладить"],
    optionBases: ["исправить", "починить", "поправить", "наладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 14,
    sentence: "Мы планируем ... крышу дома этим летом.",
    translation: "Pianifichiamo di riparare/rifare il tetto della casa quest'estate.",
    options: ["отремонтировать", "исправить", "поправить", "загладить"],
    optionBases: ["отремонтировать", "исправить", "поправить", "загладить"],
    correctIndex: 0,
    verbPair: "отремонтировать — ремонтировать",
    correctExplanation: ISPRAVIT_VERB_MAP["отремонтировать"]
  },
  {
    id: 15,
    sentence: "Программист смог быстро ... ошибку в коде.",
    translation: "Il programmatore è riuscito a correggere velocemente l'errore nel codice.",
    options: ["исправить", "починить", "загладить", "наладить"],
    optionBases: ["исправить", "починить", "загладить", "наладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 16,
    sentence: "Пожалуйста, ... галстук, он висит криво.",
    translation: "Per favore, sistema la cravatta, è storta.",
    options: ["поправь", "почини", "исправь", "устрани"],
    optionBases: ["поправить", "починить", "исправить", "устрани"],
    correctIndex: 0,
    verbPair: "поправить — поправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["поправить"]
  },
  {
    id: 17,
    sentence: "Нам удалось ... контакт с новыми клиентами.",
    translation: "Siamo riusciti a stabilire (mettere a punto) il contatto con i nuovi clienti.",
    options: ["наладить", "починить", "исправить", "загладить"],
    optionBases: ["наладить", "починить", "исправить", "загладить"],
    correctIndex: 0,
    verbPair: "наладить — налаживать",
    correctExplanation: ISPRAVIT_VERB_MAP["наладить"]
  },
  {
    id: 18,
    sentence: "Тебе нужно ... зрение, сходи к врачу.",
    translation: "Devi migliorare (sistemare) la vista, vai dal medico.",
    options: ["поправить", "починить", "исправить", "наладить"],
    optionBases: ["поправить", "починить", "исправить", "наладить"],
    correctIndex: 0,
    verbPair: "поправить — поправлять",
    correctExplanation: "Qui 'поправить' si usa per indicare un miglioramento dello stato di salute."
  },
  {
    id: 19,
    sentence: "В этой статье много опечаток, их нужно ... .",
    translation: "In questo articolo ci sono molti refusi, bisogna correggerli.",
    options: ["исправить", "починить", "загладить", "поправить"],
    optionBases: ["исправить", "починить", "загладить", "поправить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 20,
    sentence: "Отец ... забор, который сломался во время бури.",
    translation: "Il padre ha riparato la staccionata che si era rotta durante la tempesta.",
    options: ["починил", "исправил", "поправил", "наладил"],
    optionBases: ["починить", "исправить", "поправить", "наладить"],
    correctIndex: 0,
    verbPair: "починить — чинить",
    correctExplanation: ISPRAVIT_VERB_MAP["чинить"]
  },
  {
    id: 21,
    sentence: "Нужно ... причину аварии как можно скорее.",
    translation: "Bisogna eliminare la causa dell'incidente il prima possibile.",
    options: ["устранить", "наладить", "поправить", "исправить"],
    optionBases: ["устранить", "наладить", "поправить", "исправить"],
    correctIndex: 0,
    verbPair: "устранить — устранять",
    correctExplanation: ISPRAVIT_VERB_MAP["устранить"]
  },
  {
    id: 22,
    sentence: "Спортсмен хочет ... прошлогоднее достижение.",
    translation: "L'atleta vuole superare/migliorare (sistemare in meglio) il risultato dell'anno scorso.",
    options: ["поправить (улучшить)", "починить", "исправить", "загладить"],
    optionBases: ["поправить", "починить", "исправить", "загладить"],
    correctIndex: 0,
    verbPair: "поправить — поправлять",
    correctExplanation: "In senso figurato può significare migliorare un record o una statistica."
  },
  {
    id: 23,
    sentence: "Перед выходом на сцену актриса решила ... причёску.",
    translation: "Prima di salire sul palco l'attrice ha deciso di sistemarsi i capelli.",
    options: ["поправить", "починить", "исправить", "наладить"],
    optionBases: ["поправить", "починить", "исправить", "наладить"],
    correctIndex: 0,
    verbPair: "поправить — поправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["поправить"]
  },
  {
    id: 24,
    sentence: "Завод ... выпуск новых моделей автомобилей.",
    translation: "La fabbrica ha avviato (messo a punto) la produzione di nuovi modelli di auto.",
    options: ["налаживает", "чинит", "исправляет", "заглаживает"],
    optionBases: ["налаживать", "чинить", "исправлять", "заглаживать"],
    correctIndex: 0,
    verbPair: "налаживать — наладить",
    correctExplanation: ISPRAVIT_VERB_MAP["наладить"]
  },
  {
    id: 25,
    sentence: "Ты должен ... это недоразумение между нами.",
    translation: "Devi appianare questo malinteso tra di noi.",
    options: ["загладить (исправить)", "починить", "поправить", "устранить"],
    optionBases: ["загладить", "починить", "поправить", "устранить"],
    correctIndex: 0,
    verbPair: "загладить — заглаживать",
    correctExplanation: ISPRAVIT_VERB_MAP["загладить"]
  },
  {
    id: 26,
    sentence: "Сможешь ... мой телефон? Он упал и не включается.",
    translation: "Riesci a riparare il mio telefono? È caduto e non si accende.",
    options: ["починить", "исправить", "поправить", "наладить"],
    optionBases: ["починить", "исправить", "поправить", "наладить"],
    correctIndex: 0,
    verbPair: "починить — чинить",
    correctExplanation: ISPRAVIT_VERB_MAP["чинить"]
  },
  {
    id: 27,
    sentence: "Нам пришлось ... данные в отчете после проверки.",
    translation: "Abbiamo dovuto correggere i dati nel rapporto dopo il controllo.",
    options: ["исправить", "починить", "поправить", "загладить"],
    optionBases: ["исправить", "починить", "поправить", "загладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 28,
    sentence: "В этой старой церкви решили ... алтарь.",
    translation: "In questa vecchia chiesa hanno deciso di restaurare l'altare.",
    options: ["восстановить", "починить", "исправить", "наладить"],
    optionBases: ["восстановить", "починить", "исправить", "наладить"],
    correctIndex: 0,
    verbPair: "восстановить — восстанавливать",
    correctExplanation: ISPRAVIT_VERB_MAP["восстановить"]
  },
  {
    id: 29,
    sentence: "Она всегда ... макияж перед зеркалом в ванной.",
    translation: "Si ritocca sempre il trucco davanti allo specchio in bagno.",
    options: ["подправляет", "чинит", "исправляет", "заглаживает"],
    optionBases: ["подправлять", "чинить", "исправлять", "заглаживать"],
    correctIndex: 0,
    verbPair: "подправлять — подправить",
    correctExplanation: ISPRAVIT_VERB_MAP["подправить"]
  },
  {
    id: 30,
    sentence: "Я попытаюсь ... положение, хотя это будет трудно.",
    translation: "Cercherò di rimediare (correggere) la situazione, anche se sarà difficile.",
    options: ["исправить", "починить", "поправить", "загладить"],
    optionBases: ["исправить", "починить", "поправить", "загладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 31,
    sentence: "Сантехнику нужно ... кран на кухне.",
    translation: "L'idraulico deve riparare il rubinetto in cucina.",
    options: ["починить", "исправить", "поправить", "загладить"],
    optionBases: ["починить", "исправить", "поправить", "загладить"],
    correctIndex: 0,
    verbPair: "починить — чинить",
    correctExplanation: ISPRAVIT_VERB_MAP["чинить"]
  },
  {
    id: 32,
    sentence: "Мы должны ... справедливость и наказать виновных.",
    translation: "Dobbiamo ripristinare la giustizia e punire i colpevoli.",
    options: ["восстановить", "исправить", "починить", "наладить"],
    optionBases: ["восстановить", "исправить", "починить", "наладить"],
    correctIndex: 0,
    verbPair: "восстановить — восстанавливать",
    correctExplanation: ISPRAVIT_VERB_MAP["восстановить"]
  },
  {
    id: 33,
    sentence: "После ссоры им было нелегко ... мир в семье.",
    translation: "Dopo il litigio non è stato facile ristabilire la pace in famiglia.",
    options: ["наладить", "починить", "исправить", "загладить"],
    optionBases: ["наладить", "починить", "исправить", "загладить"],
    correctIndex: 0,
    verbPair: "наладить — налаживать",
    correctExplanation: ISPRAVIT_VERB_MAP["наладить"]
  },
  {
    id: 34,
    sentence: "Она ... свою фигуру с помощью гимнастики.",
    translation: "Ha raddrizzato (migliorato/regolarizzato) il suo fisico con l'aiuto della ginnastica.",
    options: ["выправила", "починила", "исправила", "загладила"],
    optionBases: ["выправить", "починить", "исправить", "загладить"],
    correctIndex: 0,
    verbPair: "выправить — выправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["выправить"]
  },
  {
    id: 35,
    sentence: "Помогите мне ... этот чемодан, у него сломана ручка.",
    translation: "Aiutatemi a riparare questa valigia, ha la maniglia rotta.",
    options: ["починить", "исправить", "поправить", "загладить"],
    optionBases: ["починить", "исправить", "поправить", "загладить"],
    correctIndex: 0,
    verbPair: "починить — чинить",
    correctExplanation: ISPRAVIT_VERB_MAP["чинить"]
  },
  {
    id: 36,
    sentence: "Вы должны ... ошибки в своём поведении.",
    translation: "Dovete correggere gli errori nel vostro comportamento.",
    options: ["исправить", "починить", "поправить", "наладить"],
    optionBases: ["исправить", "починить", "поправить", "наладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 37,
    sentence: "Инженеры ... работу нового оборудования.",
    translation: "Gli ingegneri hanno regolato (messo a punto) il funzionamento della nuova attrezzatura.",
    options: ["наладили", "починили", "исправили", "поправили"],
    optionBases: ["наладить", "починить", "исправить", "поправить"],
    correctIndex: 0,
    verbPair: "наладили — налаживать",
    correctExplanation: ISPRAVIT_VERB_MAP["наладить"]
  },
  {
    id: 38,
    sentence: "Эту старую машину уже невозможно ... .",
    translation: "È ormai impossibile riparare (sottoporre a manutenzione completa) questa vecchia auto.",
    options: ["отремонтировать", "починить", "исправить", "поправить"],
    optionBases: ["отремонтировать", "починить", "исправить", "поправить"],
    correctIndex: 0,
    verbPair: "отремонтировать — ремонтировать",
    correctExplanation: ISPRAVIT_VERB_MAP["отремонтировать"]
  },
  {
    id: 39,
    sentence: "Он попытался ... впечатление, которое произвёл сначала.",
    translation: "Ha cercato di correggere l'impressione che aveva fatto all'inizio.",
    options: ["исправить", "починить", "поправить", "загладить"],
    optionBases: ["исправить", "починить", "поправить", "загладить"],
    correctIndex: 0,
    verbPair: "исправить — исправлять",
    correctExplanation: ISPRAVIT_VERB_MAP["исправить"]
  },
  {
    id: 40,
    sentence: "Нам нужно ... старые фотографии в цифровом формате.",
    translation: "Dobbiamo ripristinare (restaurare) le vecchie fotografie in formato digitale.",
    options: ["восстановить", "починить", "исправить", "поправить"],
    optionBases: ["восстановить", "починить", "исправить", "поправить"],
    correctIndex: 0,
    verbPair: "восстановить — восстанавливать",
    correctExplanation: ISPRAVIT_VERB_MAP["восстановить"]
  }
];

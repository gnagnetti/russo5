import { Exercise } from '../types';

export const RUKOVODIT_VERB_MAP: Record<string, string> = {
  "руководить": "significa dirigere, guidare o essere a capo di un'organizzazione, un team o un progetto (руководить отделом, руководить проектом). Richiede lo strumentale.",
  "управлять": "significa gestire, amministrare o pilotare (un veicolo, uno stato, un processo tecnico) (управлять машиной, управлять государством). Richiede lo strumentale.",
  "командовать": "significa dare ordini ufficiali o essere al comando di un'unità militare o una nave (командовать парадом, командовать полком). Richiede lo strumentale.",
  "возглавлять": "(возглавить — возглавлять): significa essere al vertice, mettersi alla testa di un movimento, una lista o una delegazione (возглавить делегацию). Richiede l'accusativo.",
  "заведовать": "essere responsabile di un reparto specifico o di una piccola unità amministrativa (заведовать кафедрой, заведовать складом). Richiede lo strumentale.",
  "дирижировать": "dirigere un'orchestra o un coro (дирижировать оркестром).",
  "править": "governare un paese (nel senso storico o monarchico) o correggere bozze (править текст). Richiede lo strumentale per 'governare'.",
  "направлять": "(направить — направлять): indirizzare, inviare qualcuno o qualcosa verso una direzione (направить письмо, направить на путь истинный).",
  "сопровождать": "(сопровождать — сопроводить): accompagnare o scortare.",
  "распоряжаться": "dare disposizioni o disporre di risorse (распоряжаться временем).",
  "курировать": "supervisionare o agire come tutor/curatore di un progetto o studente (курировать проект)."
};

export const RUKOVODIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Опытный менеджер уже пять лет ... этим отделом.",
    translation: "Un manager esperto dirige questo reparto già da cinque anni.",
    options: ["руководит", "управляет", "возглавляет", "заведует"],
    optionBases: ["руководить", "управлять", "возглавлять", "заведовать"],
    correctIndex: 0,
    verbPair: "руководить",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 2,
    sentence: "Мой брат учится ... вертолётом.",
    translation: "Mio fratello sta imparando a pilotare (gestire) un elicottero.",
    options: ["управлять", "руководить", "командовать", "заведовать"],
    optionBases: ["управлять", "руководить", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "управлять",
    correctExplanation: RUKOVODIT_VERB_MAP["управлять"]
  },
  {
    id: 3,
    sentence: "Генерал ... парадом на Красной площади.",
    translation: "Il generale comanda la parata sulla Piazza Rossa.",
    options: ["командует", "руководит", "управляет", "возглавляет"],
    optionBases: ["командовать", "руководить", "управлять", "возглавлять"],
    correctIndex: 0,
    verbPair: "командовать",
    correctExplanation: RUKOVODIT_VERB_MAP["командовать"]
  },
  {
    id: 4,
    sentence: "Она была приглашена ... делегацию на международный форум.",
    translation: "È stata invitata a guidare (mettersi alla testa di) la delegazione al forum internazionale.",
    options: ["возглавить", "руководить", "управлять", "командовать"],
    optionBases: ["возглавить", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "возглавить — возглавлять",
    correctExplanation: RUKOVODIT_VERB_MAP["возглавлять"]
  },
  {
    id: 5,
    sentence: "Профессор уже много лет ... кафедрой истории.",
    translation: "Il professore è a capo (responsabile) della cattedra di storia da molti anni.",
    options: ["заведует", "руководит", "управляет", "командует"],
    optionBases: ["заведовать", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "заведовать",
    correctExplanation: RUKOVODIT_VERB_MAP["заведовать"]
  },
  {
    id: 6,
    sentence: "Знаменитый маэстро сегодня будет ... оркестром.",
    translation: "Il famoso maestro oggi dirigerà l'orchestra.",
    options: ["дирижировать", "руководить", "управлять", "командовать"],
    optionBases: ["дирижировать", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "дирижировать",
    correctExplanation: RUKOVODIT_VERB_MAP["дирижировать"]
  },
  {
    id: 7,
    sentence: "Королева Виктория ... Англией более шестидесяти лет.",
    translation: "La regina Vittoria ha governato l'Inghilterra per oltre sessant'anni.",
    options: ["правила", "руководила", "управляла", "командовала"],
    optionBases: ["править", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "правила — править",
    correctExplanation: RUKOVODIT_VERB_MAP["править"]
  },
  {
    id: 8,
    sentence: "Нам нужно ... все усилия на решение этой задачи.",
    translation: "Dobbiamo indirizzare (orientare) tutti gli sforzi alla soluzione di questo compito.",
    options: ["направить", "руководить", "сопроводить", "возглавить"],
    optionBases: ["направить", "руководить", "сопровождать", "возглавлять"],
    correctIndex: 0,
    verbPair: "направить — направлять",
    correctExplanation: RUKOVODIT_VERB_MAP["направлять"]
  },
  {
    id: 9,
    sentence: "Министерство ... деятельностью всех школ в стране.",
    translation: "Il ministero supervisiona (supervisiona/dirige) l'attività di tutte le scuole del paese.",
    options: ["курирует (руководит)", "заведует", "командует", "управляет"],
    optionBases: ["курировать", "заведовать", "командовать", "управлять"],
    correctIndex: 0,
    verbPair: "курирует",
    correctExplanation: RUKOVODIT_VERB_MAP["курировать"]
  },
  {
    id: 10,
    sentence: "Вы не имеете права ... моей жизнью.",
    translation: "Non avete il diritto di disporre (comandare) della mia vita.",
    options: ["распоряжаться", "руководить", "управлять", "заведовать"],
    optionBases: ["распоряжаться", "руководить", "управлять", "заведовать"],
    correctIndex: 0,
    verbPair: "распоряжаться — распорядиться",
    correctExplanation: RUKOVODIT_VERB_MAP["распоряжаться"]
  },
  {
    id: 11,
    sentence: "Кто будет ... строительными работами в этом районе?",
    translation: "Chi dirigerà (guiderà) i lavori di costruzione in questo quartiere?",
    options: ["руководить", "управлять", "командовать", "возглавлять"],
    optionBases: ["руководить", "управлять", "командовать", "возглавлять"],
    correctIndex: 0,
    verbPair: "руководить",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 12,
    sentence: "Современные системы позволяют ... домом с помощью смартфона.",
    translation: "I sistemi moderni permettono di gestire (controllare) la casa con l'aiuto dello smartphone.",
    options: ["управлять", "руководить", "командовать", "заведовать"],
    optionBases: ["управлять", "руководить", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "управлять",
    correctExplanation: RUKOVODIT_VERB_MAP["управлять"]
  },
  {
    id: 13,
    sentence: "Он всегда пытается ... всеми вокруг, даже своими друзьями.",
    translation: "Cerca sempre di comandare tutti intorno, anche i suoi amici.",
    options: ["командовать", "руководить", "управлять", "заведовать"],
    optionBases: ["командовать", "руководить", "управлять", "заведовать"],
    correctIndex: 0,
    verbPair: "командовать",
    correctExplanation: RUKOVODIT_VERB_MAP["командовать"]
  },
  {
    id: 14,
    sentence: "Президент ... список кандидатов от правящей партии.",
    translation: "Il presidente ha guidato (si è messo a capo di) la lista dei candidati del partito di governo.",
    options: ["возглавил", "руководил", "управлял", "командовал"],
    optionBases: ["возглавить", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "возглавил — возглавлять",
    correctExplanation: RUKOVODIT_VERB_MAP["возглавлять"]
  },
  {
    id: 15,
    sentence: "Моя тетя уже десять лет ... школьной библиотекой.",
    translation: "Mia zia è responsabile della biblioteca scolastica già da dieci anni.",
    options: ["заведует", "руководит", "управляет", "командует"],
    optionBases: ["заведовать", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "заведовать",
    correctExplanation: RUKOVODIT_VERB_MAP["заведовать"]
  },
  {
    id: 16,
    sentence: "Он ... своими эмоциями и не показал виду, что расстроен.",
    translation: "Ha gestito (controllato) le proprie emozioni e non ha dato a vedere di essere dispiaciuto.",
    options: ["управился (совладал)", "руководил", "командовал", "направил"],
    optionBases: ["управляться", "руководить", "командовать", "направлять"],
    correctIndex: 0,
    verbPair: "совладал — совладать",
    correctExplanation: "Per il controllo delle emozioni si usa spesso 'совладать' o 'управлять'."
  },
  {
    id: 17,
    sentence: "Капитан ... кораблём во время сильного шторма.",
    translation: "Il capitano pilotava (gestiva) la nave durante una forte tempesta.",
    options: ["управлял", "руководил", "командовал", "заведовал"],
    optionBases: ["управлять", "руководить", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "управлял — управлять",
    correctExplanation: RUKOVODIT_VERB_MAP["управлять"]
  },
  {
    id: 18,
    sentence: "Директор школы ... учебным процессом.",
    translation: "Il direttore della scuola dirige il processo educativo.",
    options: ["руководит", "управляет", "командует", "заведует"],
    optionBases: ["руководить", "управлять", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "руководит",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 19,
    sentence: "Командир ... ротой в бою.",
    translation: "Il comandante comanda la compagnia in battaglia.",
    options: ["командует", "руководит", "управляет", "возглавляет"],
    optionBases: ["командовать", "руководить", "управлять", "возглавлять"],
    correctIndex: 0,
    verbPair: "командует — командовать",
    correctExplanation: RUKOVODIT_VERB_MAP["командовать"]
  },
  {
    id: 20,
    sentence: "Учёный был назначен ... новую лабораторию.",
    translation: "Lo scienziato è stato nominato a capo (guidare) del nuovo laboratorio.",
    options: ["возглавить", "руководить", "управлять", "заведовать"],
    optionBases: ["возглавить", "руководить", "управлять", "заведовать"],
    correctIndex: 0,
    verbPair: "возглавить",
    correctExplanation: RUKOVODIT_VERB_MAP["возглавлять"]
  },
  {
    id: 21,
    sentence: "Мой дедушка ... сельским клубом в молодости.",
    translation: "Mio nonno era responsabile del centro ricreativo del villaggio in gioventù.",
    options: ["заведовал", "руководил", "управлял", "командовал"],
    optionBases: ["заведовать", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "заведовал — заведовать",
    correctExplanation: RUKOVODIT_VERB_MAP["заведовать"]
  },
  {
    id: 22,
    sentence: "Инструктор ... моими действиями во время первого прыжка.",
    translation: "L'istruttore guidava (monitorava/indirizzava) le mie azioni durante il primo salto.",
    options: ["направлял (руководил)", "командовал", "заведовал", "возглавлял"],
    optionBases: ["направлять", "командовать", "заведовать", "возглавлять"],
    correctIndex: 0,
    verbPair: "направлял — направлять",
    correctExplanation: RUKOVODIT_VERB_MAP["направлять"]
  },
  {
    id: 23,
    sentence: "Я не хочу, чтобы кто-то ... мной.",
    translation: "Non voglio che nessuno mi comandi.",
    options: ["командовал", "руководил", "управлял", "заведовал"],
    optionBases: ["командовать", "руководить", "управлять", "заведовать"],
    correctIndex: 0,
    verbPair: "командовал — командовать",
    correctExplanation: RUKOVODIT_VERB_MAP["командовать"]
  },
  {
    id: 24,
    sentence: "Эта система автоматически ... температурой в здании.",
    translation: "Questo sistema gestisce (controlla) automaticamente la temperatura nell'edificio.",
    options: ["управляет", "руководит", "командует", "заведует"],
    optionBases: ["управлять", "руководить", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "управляет",
    correctExplanation: RUKOVODIT_VERB_MAP["управлять"]
  },
  {
    id: 25,
    sentence: "Наш профессор будет ... вашей дипломной работой.",
    translation: "Il nostro professore seguirà (dirigerà/supervisionerà) la vostra tesi.",
    options: ["руководить", "управлять", "заведовать", "командовать"],
    optionBases: ["руководить", "управлять", "заведовать", "командовать"],
    correctIndex: 0,
    verbPair: "руководить",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 26,
    sentence: "Он был выбран ... студенческий совет.",
    translation: "È stato scelto per guidare (essere alla testa di) il consiglio studentesco.",
    options: ["возглавить", "руководить", "заведовать", "управлять"],
    optionBases: ["возглавить", "руководить", "заведовать", "управлять"],
    correctIndex: 0,
    verbPair: "возглавить",
    correctExplanation: RUKOVODIT_VERB_MAP["возглавлять"]
  },
  {
    id: 27,
    sentence: "Женщина ... хозяйством в большом загородном доме.",
    translation: "La donna amministrava (gestiva) la casa in una grande villa di campagna.",
    options: ["заведовала (управляла)", "руководила", "командовала", "направляла"],
    optionBases: ["заведовать", "руководить", "командовать", "направлять"],
    correctIndex: 0,
    verbPair: "заведовала",
    correctExplanation: RUKOVODIT_VERB_MAP["заведовать"]
  },
  {
    id: 28,
    sentence: "Пожалуйста, ... машину аккуратнее на скользкой дороге.",
    translation: "Per favore, guida (gestisci) l'auto con più cura sulla strada scivolosa.",
    options: ["управляй", "руководи", "командуй", "направляй"],
    optionBases: ["управлять", "руководить", "командовать", "направлять"],
    correctIndex: 0,
    verbPair: "управляй — управлять",
    correctExplanation: RUKOVODIT_VERB_MAP["управлять"]
  },
  {
    id: 29,
    sentence: "Он вправе ... всем своим имуществом.",
    translation: "Ha il diritto di disporre di tutta la sua proprietà.",
    options: ["распоряжаться", "руководить", "управлять", "возглавлять"],
    optionBases: ["распоряжаться", "руководить", "управлять", "возглавлять"],
    correctIndex: 0,
    verbPair: "распоряжаться",
    correctExplanation: RUKOVODIT_VERB_MAP["распоряжаться"]
  },
  {
    id: 30,
    sentence: "Кто сегодня будет ... праздником?",
    translation: "Chi dirigerà (sarà a capo di) la festa oggi?",
    options: ["руководить", "заведовать", "командовать", "управлять"],
    optionBases: ["руководить", "заведовать", "командовать", "управлять"],
    correctIndex: 0,
    verbPair: "руководить",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 31,
    sentence: "Дирижёр поднял палочку и начал ... .",
    translation: "Il direttore ha alzato la bacchetta e ha iniziato a dirigere.",
    options: ["дирижировать", "руководить", "управлять", "командовать"],
    optionBases: ["дирижировать", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "дирижировать",
    correctExplanation: RUKOVODIT_VERB_MAP["дирижировать"]
  },
  {
    id: 32,
    sentence: "Она ... отделом кадров в крупной корпорации.",
    translation: "Dirige il reparto risorse umane in una grande corporazione.",
    options: ["руководит", "управляет", "заведует", "командует"],
    optionBases: ["руководить", "управлять", "заведовать", "командовать"],
    correctIndex: 0,
    verbPair: "руководит",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 33,
    sentence: "Секретарь ... входящей корреспонденцией.",
    translation: "Il segretario gestisce (amministra/dispone di) la corrispondenza in entrata.",
    options: ["распоряжается (управляет)", "руководит", "командует", "заведует"],
    optionBases: ["распоряжаться", "руководить", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "распоряжается",
    correctExplanation: RUKOVODIT_VERB_MAP["распоряжаться"]
  },
  {
    id: 34,
    sentence: "Наполеон ... своими войсками в решающей битве.",
    translation: "Napoleone comandava le sue truppe nella battaglia decisiva.",
    options: ["командовал", "руководил", "управлял", "правил"],
    optionBases: ["командовать", "руководить", "управлять", "править"],
    correctIndex: 0,
    verbPair: "командовал — командовать",
    correctExplanation: RUKOVODIT_VERB_MAP["командовать"]
  },
  {
    id: 35,
    sentence: "Мне поручили ... проект по установке нового оборудования.",
    translation: "Mi è stato affidato il compito di guidare (dirigere) il progetto per l'installazione di nuova attrezzatura.",
    options: ["возглавить", "руководить", "управлять", "заведовать"],
    optionBases: ["возглавить", "руководить", "управлять", "заведовать"],
    correctIndex: 0,
    verbPair: "возглавить",
    correctExplanation: RUKOVODIT_VERB_MAP["возглавлять"]
  },
  {
    id: 36,
    sentence: "Бабушка ... складом продуктов во время войны.",
    translation: "La nonna era responsabile del magazzino alimentare durante la guerra.",
    options: ["заведовала", "руководила", "управляла", "командовала"],
    optionBases: ["заведовать", "руководить", "управлять", "командовать"],
    correctIndex: 0,
    verbPair: "заведовала — заведовать",
    correctExplanation: RUKOVODIT_VERB_MAP["заведовать"]
  },
  {
    id: 37,
    sentence: "Пилот должен уметь ... самолётом в любых условиях.",
    translation: "Il pilota deve saper pilotare (gestire) l'aereo in qualsiasi condizione.",
    options: ["управлять", "руководить", "командовать", "заведовать"],
    optionBases: ["управлять", "руководить", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "управлять",
    correctExplanation: RUKOVODIT_VERB_MAP["управлять"]
  },
  {
    id: 38,
    sentence: "Совет директоров ... стратегическим развитием компании.",
    translation: "Il consiglio d'amministrazione dirige lo sviluppo strategico dell'azienda.",
    options: ["руководит", "управляет", "командует", "заведует"],
    optionBases: ["руководить", "управлять", "командовать", "заведовать"],
    correctIndex: 0,
    verbPair: "руководит",
    correctExplanation: RUKOVODIT_VERB_MAP["руководить"]
  },
  {
    id: 39,
    sentence: "Нам нужно ... свет на эту проблему.",
    translation: "Dobbiamo far luce (indirizzare la luce) su questo problema (figurato).",
    options: ["направить", "руководить", "управлять", "заведовать"],
    optionBases: ["направить", "руководить", "управлять", "заведовать"],
    correctIndex: 0,
    verbPair: "направить",
    correctExplanation: RUKOVODIT_VERB_MAP["направлять"]
  },
  {
    id: 40,
    sentence: "Капитан приказал ... огнём по противнику.",
    translation: "Il capitano ha ordinato di comandare (dirigere/aprire) il fuoco sul nemico.",
    options: ["командовать (управлять)", "руководить", "заведовать", "направлять"],
    optionBases: ["командовать", "руководить", "заведовать", "направлять"],
    correctIndex: 0,
    verbPair: "командовать",
    correctExplanation: RUKOVODIT_VERB_MAP["командовать"]
  }
];

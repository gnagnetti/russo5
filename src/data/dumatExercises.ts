import { Exercise } from '../types';

export const DUMAT_VERB_MAP: Record<string, string> = {
  "придумать": "(придумать — придумывать): significa inventare qualcosa di nuovo, ideare un piano o una soluzione (придумать игру, придумать план).",
  "подумать": "(подумать — подумывать): significa pensare per un po', riflettere brevemente o prendere in considerazione l'idea di fare qualcosa.",
  "раздумать": "(раздумать — раздумывать): significa cambiare idea e decidere di non fare qualcosa che si era pianificato.",
  "задумать": "(задумать — задумывать): significa concepire un'idea, avere un'intenzione o pianificare qualcosa (задумать преступление, задумать проект).",
  "задуматься": "(задуматься — задумываться): significa immergersi nei pensieri, diventare pensieroso o riflettere profondamente su qualcosa.",
  "одуматься": "(одуматься — одумываться): significa tornare in sé, ravvedersi o rendersi conto del proprio errore e cambiare comportamento.",
  "передумать": "(передумать — передумывать): significa cambiare la propria decisione o opinione dopo aver riflettuto ulteriormente.",
  "выдумать": "(выдумать — выдумывать): significa inventare qualcosa di falso, una scusa o una storia non vera (выдумать историю).",
  "обдумать": "(обдумать — обдумывать): significa esaminare attentamente, considerare tutti i dettagli prima di decidere (обдумать предложение).",
  "продумать": "(продумать — продумывать): significa pensare a fondo, pianificare ogni dettaglio in anticipo (продумать детали).",
  "додуматься": "(додуматься — додумываться): significa arrivare a una conclusione o a un'idea brillante dopo molta riflessione (додуматься до ответа).",
  "вдуматься": "(вдуматься — вдумываться): significa penetrare con il pensiero, cercare di capire l'essenza profonda di qualcosa (вдуматься в смысл)."
};

export const DUMAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мне нужно немного ..., прежде чем я дам ответ.",
    translation: "Ho bisogno di pensare un po' prima di dare una risposta.",
    options: ["придумать", "подумать", "выдумать", "раздумать"],
    optionBases: ["придумать", "подумать", "выдумать", "раздумать"],
    correctIndex: 1,
    verbPair: "подумать — подумывать",
    correctExplanation: DUMAT_VERB_MAP["подумать"]
  },
  {
    id: 2,
    sentence: "Дизайнер ... оригинальный логотип для компании.",
    translation: "Il designer ha ideato un logo originale per l'azienda.",
    options: ["обдумал", "придумал", "выдумал", "продумал"],
    optionBases: ["обдумать", "придумать", "выдумать", "продумать"],
    correctIndex: 1,
    verbPair: "придумать — придумывать",
    correctExplanation: DUMAT_VERB_MAP["придумать"]
  },
  {
    id: 3,
    sentence: "Он сначала согласился, но потом ... и отказался.",
    translation: "All'inizio aveva acconsentito, ma poi ha cambiato idea (decidendo di non fare) e ha rifiutato.",
    options: ["передумал", "раздумал", "задумал", "обдумал"],
    optionBases: ["передумать", "раздумать", "задумать", "обдумать"],
    correctIndex: 1,
    verbPair: "раздумать — раздумывать",
    correctExplanation: DUMAT_VERB_MAP["раздумать"]
  },
  {
    id: 4,
    sentence: "Она ... над его словами и долго не могла уснуть.",
    translation: "Lei è rimasta sopraffatta dai pensieri per le sue parole e per molto tempo non ha potuto dormire.",
    options: ["задумалась", "одумалась", "раздумала", "выдумала"],
    optionBases: ["задуматься", "одуматься", "раздумать", "выдумать"],
    correctIndex: 0,
    verbPair: "задуматься — задумываться",
    correctExplanation: DUMAT_VERB_MAP["задуматься"]
  },
  {
    id: 5,
    sentence: "Тебе стоит хорошенько ... моё предложение.",
    translation: "Dovresti considerare attentamente la mia proposta.",
    options: ["продумать", "обдумать", "выдумать", "додуматься"],
    optionBases: ["продумать", "обдумать", "выдумать", "додуматься"],
    correctIndex: 1,
    verbPair: "обдумать — обдумывать",
    correctExplanation: DUMAT_VERB_MAP["обдумать"]
  },
  {
    id: 6,
    sentence: "Он ... всё до мелочей, чтобы избежать ошибок.",
    translation: "Ha pensato a tutto nei minimi dettagli per evitare errori.",
    options: ["выдумал", "задумал", "продумал", "придумал"],
    optionBases: ["выдумать", "задумать", "продумать", "придумать"],
    correctIndex: 2,
    verbPair: "продумать — продумывать",
    correctExplanation: DUMAT_VERB_MAP["продумать"]
  },
  {
    id: 7,
    sentence: "Ребёнок ... историю про инопланетян, чтобы не идти в школу.",
    translation: "Il bambino ha inventato (falsamente) una storia sugli alieni per non andare a scuola.",
    options: ["задумал", "выдумал", "придумал", "обдумал"],
    optionBases: ["задать", "выдумать", "придумать", "обдумать"],
    correctIndex: 1,
    verbPair: "выдумать — выдумывать",
    correctExplanation: DUMAT_VERB_MAP["выдумать"]
  },
  {
    id: 8,
    sentence: "Мы ... грандиозный проект на следующий год.",
    translation: "Abbiamo concepito (pianificato) un progetto grandioso per l'anno prossimo.",
    options: ["задумали", "додумались", "обдумали", "раздумали"],
    optionBases: ["задумать", "додуматься", "обдумать", "раздумать"],
    correctIndex: 0,
    verbPair: "задумать — задумывать",
    correctExplanation: DUMAT_VERB_MAP["задумать"]
  },
  {
    id: 9,
    sentence: "Я ..., я всё-таки не поеду в эту поездку.",
    translation: "Ho cambiato idea (opinione/decisione), dopotutto non verrò in questo viaggio.",
    options: ["раздумал", "передумал", "одумался", "вдумался"],
    optionBases: ["раздумать", "передумать", "одуматься", "вдуматься"],
    correctIndex: 1,
    verbPair: "передумать — передумывать",
    correctExplanation: DUMAT_VERB_MAP["передумать"]
  },
  {
    id: 10,
    sentence: "Как ты смог ... до такого простого решения?",
    translation: "Come hai fatto ad arrivare a una soluzione così semplice?",
    options: ["додуматься", "придумать", "обдумать", "задуматься"],
    optionBases: ["додуматься", "придумать", "обдумать", "задуматься"],
    correctIndex: 0,
    verbPair: "додуматься — додумываться",
    correctExplanation: DUMAT_VERB_MAP["додуматься"]
  },
  {
    id: 11,
    sentence: "Наконец-то он ... и перестал совершать глупости.",
    translation: "Finalmente è tornato in sé e ha smesso di commettere sciocchezze.",
    options: ["задумался", "одумался", "вдумался", "раздумал"],
    optionBases: ["задуматься", "одуматься", "вдуматься", "раздумать"],
    correctIndex: 1,
    verbPair: "одуматься — одумываться",
    correctExplanation: DUMAT_VERB_MAP["одуматься"]
  },
  {
    id: 12,
    sentence: "Попробуй ... в эти слова, в них скрыт глубокий смысл.",
    translation: "Prova a penetrare col pensiero in queste parole, in esse è nascosto un significato profondo.",
    options: ["задуматься", "вдуматься", "обдумать", "передумать"],
    optionBases: ["задуматься", "вдуматься", "обдумать", "передумать"],
    correctIndex: 1,
    verbPair: "вдуматься — вдумываться",
    correctExplanation: DUMAT_VERB_MAP["вдуматься"]
  },
  {
    id: 13,
    sentence: "Учёный ... новую теорию строения вселенной.",
    translation: "Lo scienziato ha ideato una nuova teoria sulla struttura dell'universo.",
    options: ["выдумал", "придумал", "задумал", "раздумал"],
    optionBases: ["выдумать", "придумать", "задумать", "раздумать"],
    correctIndex: 1,
    verbPair: "придумать — придумывать",
    correctExplanation: DUMAT_VERB_MAP["придумать"]
  },
  {
    id: 14,
    sentence: "Я долго ..., стоит ли мне менять работу.",
    translation: "Ho riflettuto a lungo se valesse la pena cambiare lavoro.",
    options: ["раздумывал", "выдумывал", "придумывал", "надумывал"],
    optionBases: ["раздумывать", "выдумать", "придумать", "надумать"],
    correctIndex: 0,
    verbPair: "раздумывать — раздумать",
    correctExplanation: "Significa ponderare o esitare prima di una decisione."
  },
  {
    id: 15,
    sentence: "Он ... пойти в кино завтра вечером.",
    translation: "Ha preso in considerazione l'idea di andare al cinema domani sera.",
    options: ["подумывает", "раздумывает", "додумывается", "задумывается"],
    optionBases: ["подумывать", "раздумывать", "додумываться", "задумываться"],
    correctIndex: 0,
    verbPair: "подумывать — подумать",
    correctExplanation: DUMAT_VERB_MAP["подумать"]
  },
  {
    id: 16,
    sentence: "Не стоит ... лишнего, всё не так плохо.",
    translation: "Non vale la pena immaginarsi (inventarsi) troppo, non è poi così male.",
    options: ["надумывать", "придумывать", "обдумывать", "выдумывать"],
    optionBases: ["надумать", "придумать", "обдумать", "выдумать"],
    correctIndex: 0,
    verbPair: "надумывать — надумать",
    correctExplanation: "Significa immaginarsi cose che non esistono o arrivare a una decisione."
  },
  {
    id: 17,
    sentence: "Прежде чем подписывать контракт, нужно его тщательно ... .",
    translation: "Prima di firmare il contratto, bisogna esaminarlo attentamente.",
    options: ["обдумать", "выдумать", "раздумать", "вдуматься"],
    optionBases: ["обдумать", "выдумать", "раздумать", "вдуматься"],
    correctIndex: 0,
    verbPair: "обдумать — обдумывать",
    correctExplanation: DUMAT_VERB_MAP["обдумать"]
  },
  {
    id: 18,
    sentence: "Мальчик ... о своём будущем и решил стать врачом.",
    translation: "Il ragazzo ha riflettuto sul suo futuro e ha deciso di diventare medico.",
    options: ["задумался", "раздумал", "надумал", "выдумал"],
    optionBases: ["задуматься", "раздумать", "надумать", "выдумать"],
    correctIndex: 0,
    verbPair: "задуматься — задумываться",
    correctExplanation: DUMAT_VERB_MAP["задуматься"]
  },
  {
    id: 19,
    sentence: "Они ... тайный заговор против короля.",
    translation: "Hanno concepito un complotto segreto contro il re.",
    options: ["задумали", "выдумали", "продумали", "надумали"],
    optionBases: ["задумать", "выдумать", "продумать", "надумать"],
    correctIndex: 0,
    verbPair: "задумать — задумывать",
    correctExplanation: DUMAT_VERB_MAP["задумать"]
  },
  {
    id: 20,
    sentence: "Пожалуйста, ... только правду, не надо ничего ... .",
    translation: "Per favore, dì solo la verità, non c'è bisogno di inventare nulla.",
    options: ["выдумывать", "обдумывать", "раздумывать", "вдумываться"],
    optionBases: ["выдумать", "обдумать", "раздумать", "вдуматься"],
    correctIndex: 0,
    verbPair: "выдумывать — выдумать",
    correctExplanation: DUMAT_VERB_MAP["выдумать"]
  },
  {
    id: 21,
    sentence: "Я ..., я не буду продавать свою коллекцию марок.",
    translation: "Ho cambiato idea (decidendo di non fare), non venderò la mia collezione di francobolli.",
    options: ["раздумал", "передумал", "надумал", "задумал"],
    optionBases: ["раздумать", "передумать", "надумать", "задумать"],
    correctIndex: 0,
    verbPair: "раздумать — раздумывать",
    correctExplanation: DUMAT_VERB_MAP["раздумать"]
  },
  {
    id: 22,
    sentence: "Он ... очень хитрый план побега.",
    translation: "Ha ideato un piano di fuga molto astuto.",
    options: ["придумал", "задумал", "выдумал", "обдумал"],
    optionBases: ["придумать", "задумать", "выдумать", "обдумать"],
    correctIndex: 0,
    verbPair: "придумать — придумывать",
    correctExplanation: DUMAT_VERB_MAP["придумать"]
  },
  {
    id: 23,
    sentence: "Вы должны хорошо ... каждое своё слово.",
    translation: "Dovete soppesare bene ogni vostra parola.",
    options: ["обдумать", "выдумать", "раздумать", "надумать"],
    optionBases: ["обдумать", "выдумать", "раздумать", "надумать"],
    correctIndex: 0,
    verbPair: "обдумать — обдумывать",
    correctExplanation: DUMAT_VERB_MAP["обдумать"]
  },
  {
    id: 24,
    sentence: "Режиссёр ... снять фильм о войне.",
    translation: "Il regista ha avuto l'idea (intenzione) di girare un film sulla guerra.",
    options: ["задумал", "придумал", "надумал", "обдумал"],
    optionBases: ["задумать", "придумать", "надумать", "обдумать"],
    correctIndex: 0,
    verbPair: "задумать — задумывать",
    correctExplanation: DUMAT_VERB_MAP["задумать"]
  },
  {
    id: 25,
    sentence: "Никто не мог ..., как решить эту задачу.",
    translation: "Nessuno riusciva ad arrivare a capire come risolvere questo problema.",
    options: ["додуматься", "задуматься", "вдуматься", "обдумать"],
    optionBases: ["додуматься", "задуматься", "вдуматься", "обдумать"],
    correctIndex: 0,
    verbPair: "додуматься — додумываться",
    correctExplanation: DUMAT_VERB_MAP["додуматься"]
  },
  {
    id: 26,
    sentence: "Преступник в конце концов ... и сдался полиции.",
    translation: "Il criminale alla fine si è ravveduto (è tornato in sé) e si è consegnato alla polizia.",
    options: ["одумался", "раздумал", "передумал", "задумался"],
    optionBases: ["одуматься", "раздумать", "передумать", "задуматься"],
    correctIndex: 0,
    verbPair: "одуматься — одумываться",
    correctExplanation: DUMAT_VERB_MAP["одуматься"]
  },
  {
    id: 27,
    sentence: "Мне нужно ... этот вопрос с разных сторон.",
    translation: "Devo considerare questa questione da diverse angolazioni.",
    options: ["обдумать", "придумать", "задумать", "продумать"],
    optionBases: ["обдумать", "придумать", "задумать", "продумать"],
    correctIndex: 0,
    verbPair: "обдумать — обдумывать",
    correctExplanation: DUMAT_VERB_MAP["обдумать"]
  },
  {
    id: 28,
    sentence: "Не стоит ... себе болезни, которых нет.",
    translation: "Non bisogna immaginarsi (attribuirsi pensandoci) malattie che non esistono.",
    options: ["надумывать", "обдумывать", "продумывать", "вдумываться"],
    optionBases: ["надумать", "обдумать", "продумать", "вдуматься"],
    correctIndex: 0,
    verbPair: "надумывать — надумать",
    correctExplanation: "Significa immaginare cose non reali."
  },
  {
    id: 29,
    sentence: "Он ... в каждое предложение, чтобы понять автора.",
    translation: "Lui penetrava col pensiero in ogni frase per capire l'autore.",
    options: ["вдумывался", "задумывался", "раздумывал", "надумывал"],
    optionBases: ["вдумываться", "задуматься", "раздумывать", "надумывать"],
    correctIndex: 0,
    verbPair: "вдумываться — вдуматься",
    correctExplanation: DUMAT_VERB_MAP["вдуматься"]
  },
  {
    id: 30,
    sentence: "Мы ... поехать на дачу в эти выходные.",
    translation: "Abbiamo preso in considerazione l'idea di andare in campagna questo fine settimana.",
    options: ["подумываем", "задумываемся", "раздумываем", "надумываем"],
    optionBases: ["подумывать", "задумываться", "раздумывать", "надумывать"],
    correctIndex: 0,
    verbPair: "подумывать — подумать",
    correctExplanation: DUMAT_VERB_MAP["подумать"]
  },
  {
    id: 31,
    sentence: "Она ... о переезде в другой город уже давно.",
    translation: "Lei sta pensando (seriamente considerando) di trasferirsi in un'altra città da tempo.",
    options: ["подумывает", "задумывается", "раздумывает", "надумывает"],
    optionBases: ["подумывать", "задумываться", "раздумывать", "надумывать"],
    correctIndex: 1,
    verbPair: "задумываться — задуматься",
    correctExplanation: "Qui indica una riflessione più profonda o ricorrente rispetto a подумывать."
  },
  {
    id: 32,
    sentence: "Студент ... отличную тему для курсовой работы.",
    translation: "Lo studente ha ideato un'ottima traccia per la tesina.",
    options: ["придумал", "задумал", "выдумал", "обдумал"],
    optionBases: ["придумать", "задумать", "выдумать", "обдумать"],
    correctIndex: 0,
    verbPair: "придумать — придумывать",
    correctExplanation: DUMAT_VERB_MAP["придумать"]
  },
  {
    id: 33,
    sentence: "Я всё-таки ..., я не буду покупать этот дом.",
    translation: "Alla fine ho cambiato idea (decidendo di non fare), non comprerò questa casa.",
    options: ["раздумал", "передумал", "одумался", "задумал"],
    optionBases: ["раздумать", "передумать", "одуматься", "задумать"],
    correctIndex: 0,
    verbPair: "раздумать — раздумывать",
    correctExplanation: DUMAT_VERB_MAP["раздумать"]
  },
  {
    id: 34,
    sentence: "Инженер ... новую конструкцию моста.",
    translation: "L'ingegnere ha ideato una nuova struttura per il ponte.",
    options: ["придумал", "задумал", "продумал", "выдумал"],
    optionBases: ["придумать", "задумать", "продумать", "выдумать"],
    correctIndex: 0,
    verbPair: "придумать — придумывать",
    correctExplanation: DUMAT_VERB_MAP["придумать"]
  },
  {
    id: 35,
    sentence: "Вам нужно хорошенько ... последствия этого шага.",
    translation: "Dovete considerare attentamente le conseguenze di questo passo.",
    options: ["обдумать", "придумать", "раздумать", "додуматься"],
    optionBases: ["обдумать", "придумать", "раздумать", "додуматься"],
    correctIndex: 0,
    verbPair: "обдумать — обдумывать",
    correctExplanation: DUMAT_VERB_MAP["обдумать"]
  },
  {
    id: 36,
    sentence: "Он ... что-то недоброе, я это чувствую.",
    translation: "Lui sta macchinando (pianificando) qualcosa di cattivo, lo sento.",
    options: ["замышляет (задумал)", "выдумал", "придумал", "надумал"],
    optionBases: ["задумать", "выдумать", "придумать", "надумать"],
    correctIndex: 0,
    verbPair: "задумать — задумывать",
    correctExplanation: DUMAT_VERB_MAP["задумать"]
  },
  {
    id: 37,
    sentence: "Как ты смог ... до такого глупого поступка?",
    translation: "Come hai potuto arrivare a compiere un atto così sciocco?",
    options: ["додуматься", "задуматься", "надумать", "придумать"],
    optionBases: ["додуматься", "задуматься", "надумать", "придумать"],
    correctIndex: 0,
    verbPair: "додуматься — додумываться",
    correctExplanation: DUMAT_VERB_MAP["додуматься"]
  },
  {
    id: 38,
    sentence: "Она ... и решила больше не обманывать родителей.",
    translation: "Lei è tornata in sé e ha deciso di non mentire più ai genitori.",
    options: ["одумалась", "задумалась", "раздумала", "передумала"],
    optionBases: ["одуматься", "задуматься", "раздумать", "передумать"],
    correctIndex: 0,
    verbPair: "одуматься — одумываться",
    correctExplanation: DUMAT_VERB_MAP["одуматься"]
  },
  {
    id: 39,
    sentence: "Писатель ... сюжет своего нового романа.",
    translation: "Lo scrittore ha ideato la trama del suo nuovo romanzo.",
    options: ["придумал", "выдумал", "продумал", "надумал"],
    optionBases: ["придумать", "выдумать", "продумать", "надумать"],
    correctIndex: 0,
    verbPair: "придумать — придумывать",
    correctExplanation: DUMAT_VERB_MAP["придумать"]
  },
  {
    id: 40,
    sentence: "Нам нужно будет ... план наших действий на завтра.",
    translation: "Dovremo pensare attentamente (pianificare i dettagli) al piano per le nostre azioni di domani.",
    options: ["продумать", "обдумать", "придумать", "выдумать"],
    optionBases: ["продумать", "обдумать", "придумать", "выдумать"],
    correctIndex: 0,
    verbPair: "продумать — продумывать",
    correctExplanation: DUMAT_VERB_MAP["продумать"]
  }
];

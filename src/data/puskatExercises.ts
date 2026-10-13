import { Exercise } from '../types';

export const PUSKAT_VERB_MAP: Record<string, string> = {
  "пустить": "(пускать — пустить): significa lasciar andare, permettere di muoversi (пустить на каток) o azionare un macchinario (пустить мотор).",
  "пуститься": "(пускаться — пуститься): significa mettersi in viaggio o iniziare un'azione impetuosa (пуститься в пляс, пуститься в погоню).",
  "впустить": "(впускать — впустить): permettere di entrare in un luogo (впустить в дом).",
  "выпустить": "(выпускать — выпустить): lasciar uscire (выпустить из тюрьмы), mandare in produzione (выпустить книгу) o diplomare qualcuno.",
  "отпустить": "(отпускать — отпустить): lasciar libero (отпустить руку), concedere un permesso (отпустить в отпуск) o alleviare un dolore.",
  "допустить": "(допускать — допустить): permettere l'accesso (допустить к экзамену), ammettere la possibilità o commettere un errore.",
  "подпустить": "(подпускать — подпустить): permettere di avvicinarsi (не подпускать близко).",
  "запустить": "(запускать — запустить): lanciare (запустить ракету), avviare un processo o trascurare qualcosa (запустить учебу).",
  "распустить": "(распускать — распустить): sciogliere un'organizzazione (распустить парламент), slegare i capelli o diffondere pettegolezzi.",
  "распуститься": "(распускаться — распуститься): sbocciare (о цветах) o diventare indisciplinato (о ребенке).",
  "пропустить": "(пропускать — пропустить): lasciar passare (пропустить машину), mancare un appuntamento (пропустить урок) o omettere qualcosa.",
  "упустить": "(упускать — упустить): non riuscire a trattenere (упустить птицу) o farsi scappare un'occasione (упустить шанс).",
  "опустить": "(опускать — опустить): abbassare (опустить глаза, опустить руку) o immergere.",
  "опуститься": "(опускаться — опуститься): scendere (спускаться), sedersi pesantemente (опуститься в кресло) o decadere moralmente.",
  "спустить": "(спускать — спустить): abbassare qualcosa dall'alto o sgonfiare.",
  "спускаться": "(спускаться — спуститься): scendere da un'altezza (спускаться с горы).",
};

export const PUSKAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Она осторожно ... глаза и покраснела.",
    translation: "Abbassò timidamente gli occhi e arrossì.",
    options: ["опустила", "выпустила", "впустила", "запустила"],
    optionBases: ["опустить", "выпустить", "впустить", "запустить"],
    correctIndex: 0,
    verbPair: "опустить — опускать",
    correctExplanation: PUSKAT_VERB_MAP["опустить"]
  },
  {
    id: 2,
    sentence: "В 1961 году Советский Союз ... космический корабль с человеком на борту.",
    translation: "Nel 1961 l'Unione Sovietica lanciò una nave spaziale con un uomo a bordo.",
    options: ["запустил", "выпустил", "пропустил", "отпустил"],
    optionBases: ["запустить", "выпустить", "пропустить", "отпустить"],
    correctIndex: 0,
    verbPair: "запустить — запускать",
    correctExplanation: PUSKAT_VERB_MAP["запустить"]
  },
  {
    id: 3,
    sentence: "Мать попросила сына ... письмо в почтовый ящик.",
    translation: "La madre chiese al figlio di imbucare (lasciar andare dentro) la lettera nella cassetta postale (rif. спустить/опустить/впустить).",
    options: ["опустить", "впустить", "выпустить", "пропустить"],
    optionBases: ["опустить", "впустить", "выпустить", "пропустить"],
    correctIndex: 0,
    verbPair: "опустить — опускать",
    correctExplanation: PUSKAT_VERB_MAP["опустить"]
  },
  {
    id: 4,
    sentence: "Врач назначил пациенту лекарство, чтобы ... боль.",
    translation: "Il medico ha prescritto al paziente un farmaco per alleviare (far passare) il dolore.",
    options: ["отпустить", "пропустить", "допустить", "упустить"],
    optionBases: ["отпустить", "пропустить", "допустить", "упустить"],
    correctIndex: 0,
    verbPair: "отпустить — отпускать",
    correctExplanation: PUSKAT_VERB_MAP["отпустить"]
  },
  {
    id: 5,
    sentence: "Студент ... несколько лекций из-за болезни.",
    translation: "Lo studente ha saltato diverse lezioni a causa della malattia.",
    options: ["пропустил", "упустил", "допустил", "запустил"],
    optionBases: ["пропустить", "упустить", "допустил", "запустить"],
    correctIndex: 0,
    verbPair: "пропустить — пропускать",
    correctExplanation: PUSKAT_VERB_MAP["пропустить"]
  },
  {
    id: 6,
    sentence: "Вы не должны ... этот уникальный шанс.",
    translation: "Non dovete lasciarvi scappare questa occasione unica.",
    options: ["упустить", "пропустить", "допустить", "отпустить"],
    optionBases: ["упустить", "пропустить", "допустить", "отпустить"],
    correctIndex: 0,
    verbPair: "упустить — упускать",
    correctExplanation: PUSKAT_VERB_MAP["упустить"]
  },
  {
    id: 7,
    sentence: "Завод ежегодно ... новые модели автомобилей.",
    translation: "La fabbrica produce (lancia sul mercato) ogni anno nuovi modelli di auto.",
    options: ["выпускает", "запускает", "пускает", "допускает"],
    optionBases: ["выпускать", "запускать", "пускать", "допускать"],
    correctIndex: 0,
    verbPair: "выпустить — выпускать",
    correctExplanation: PUSKAT_VERB_MAP["выпустить"]
  },
  {
    id: 8,
    sentence: "Пожалуйста, ... меня в квартиру, я забыл ключи.",
    translation: "Per favore, mi faccia entrare in appartamento, ho dimenticato le chiavi.",
    options: ["впустите", "выпустите", "отпустите", "запустите"],
    optionBases: ["впустить", "выпустить", "отпустите", "запустить"],
    correctIndex: 0,
    verbPair: "впустить — впускать",
    correctExplanation: PUSKAT_VERB_MAP["впустить"]
  },
  {
    id: 9,
    sentence: "Учитель не ... его к занятиям без справки.",
    translation: "L'insegnante non lo ha ammesso alle lezioni senza il certificato.",
    options: ["допустил", "подпустил", "впустил", "пропустил"],
    optionBases: ["допустить", "подпустить", "впустить", "пропустить"],
    correctIndex: 0,
    verbPair: "допустить — допускать",
    correctExplanation: PUSKAT_VERB_MAP["допустить"]
  },
  {
    id: 10,
    sentence: "Лыжник стремительно ... с крутой горы.",
    translation: "Lo sciatore è sceso velocemente dalla ripida montagna.",
    options: ["спускался", "опускался", "пускался", "распускался"],
    optionBases: ["спускаться", "опускаться", "пускаться", "распускаться"],
    correctIndex: 0,
    verbPair: "спуститься — спускаться",
    correctExplanation: PUSKAT_VERB_MAP["спускаться"]
  },
  {
    id: 11,
    sentence: "За последнее время ты совсем ... свою учёбу.",
    translation: "Ultimamente hai trascurato completamente i tuoi studi.",
    options: ["запустил", "выпустил", "упустил", "пропустил"],
    optionBases: ["запустить", "выпустить", "упустить", "пропустить"],
    correctIndex: 0,
    verbPair: "запустить — запускать",
    correctExplanation: PUSKAT_VERB_MAP["запустить"]
  },
  {
    id: 12,
    sentence: "Весной на деревьях начали ... почки.",
    translation: "In primavera hanno iniziato a schiudersi (sbocciare) le gemme sugli alberi.",
    options: ["распускаться", "опускаться", "спускаться", "впускаться"],
    optionBases: ["распускаться", "опускаться", "спускаться", "впускаться"],
    correctIndex: 0,
    verbPair: "распуститься — распускаться",
    correctExplanation: PUSKAT_VERB_MAP["распуститься"]
  },
  {
    id: 13,
    sentence: "В этой ситуации он ... серьёзную ошибку.",
    translation: "In questa situazione ha commesso un grave errore.",
    options: ["допустил", "запустил", "пропустил", "упустил"],
    optionBases: ["допустить", "запустить", "пропустить", "упустить"],
    correctIndex: 0,
    verbPair: "допустить — допускать",
    correctExplanation: PUSKAT_VERB_MAP["допустить"]
  },
  {
    id: 14,
    sentence: "Отец наконец-то ... сына погулять с друзьями.",
    translation: "Finalmente il padre ha lasciato che il figlio andasse a fare una passeggiata con gli amici.",
    options: ["отпустил", "выпустил", "запустил", "допустил"],
    optionBases: ["отпустить", "выпустить", "запустить", "допустил"],
    correctIndex: 0,
    verbPair: "отпустить — отпускать",
    correctExplanation: PUSKAT_VERB_MAP["отпустить"]
  },
  {
    id: 15,
    sentence: "Ковбой ... пулю прямо в цель.",
    translation: "Il cowboy sparò (lanciò il proiettile) dritto nel bersaglio.",
    options: ["пустил", "запустил", "выпустил", "пропустил"],
    optionBases: ["пустить", "запустить", "выпустить", "пропустить"],
    correctIndex: 0,
    verbPair: "пустить — пускать",
    correctExplanation: PUSKAT_VERB_MAP["пустить"]
  },
  {
    id: 16,
    sentence: "После ссоры она ... в слёзы.",
    translation: "Dopo il litigio è scoppiata (si è lasciata andare) in lacrime.",
    options: ["пустилась", "спустилась", "опустилась", "запустилась"],
    optionBases: ["пуститься", "спуститься", "опуститься", "запуститься"],
    correctIndex: 0,
    verbPair: "пуститься — пускаться",
    correctExplanation: PUSKAT_VERB_MAP["пуститься"]
  },
  {
    id: 17,
    sentence: "Король ... парламент и объявил новые выборы.",
    translation: "Il re ha sciolto il parlamento e indetto nuove elezioni.",
    options: ["распустил", "выпустил", "запустил", "отпустил"],
    optionBases: ["распустить", "выпустить", "запустить", "отпустить"],
    correctIndex: 0,
    verbPair: "распустить — распускать",
    correctExplanation: PUSKAT_VERB_MAP["распустить"]
  },
  {
    id: 18,
    sentence: "Он тяжело ... в кресло и закрыл глаза.",
    translation: "Si lasciò cadere (si sedette pesantemente) in poltrona e chiuse gli occhi.",
    options: ["опустился", "спустился", "запустился", "пустился"],
    optionBases: ["опуститься", "спуститься", "запуститься", "пуститься"],
    correctIndex: 0,
    verbPair: "опуститься — опускаться",
    correctExplanation: PUSKAT_VERB_MAP["опуститься"]
  },
  {
    id: 19,
    sentence: "Пограничники не ... посторонних в режимную зону.",
    translation: "Le guardie di frontiera non hanno lasciato passare gli estranei nella zona a regime speciale.",
    options: ["пропустили", "отпустили", "выпустили", "запустили"],
    optionBases: ["пропустить", "отпустить", "выпустили", "запустили"],
    correctIndex: 0,
    verbPair: "пропустить — пропускать",
    correctExplanation: PUSKAT_VERB_MAP["пропустить"]
  },
  {
    id: 20,
    sentence: "Степан ... газ, и машина сразу остановилась.",
    translation: "Stepan ha tolto il gas (lo ha abbassato) e l'auto si è fermata subito.",
    options: ["сбросил", "выпустил", "пропустил", "отпустил"],
    optionBases: ["сбросить", "выпустить", "пропустить", "отпустить"],
    correctIndex: 0,
    verbPair: "сбросить — сбрасывать (rif. completo)",
    correctExplanation: "Ridurre o abbassare la velocità/il gas."
  }
];

import { Exercise } from '../types';

export const PISAT_VERB_MAP: Record<string, string> = {
  "писать": "(писать — написать): il verbo base che significa scrivere; raffigurare con caratteri grafici.",
  "записать": "(записывать — записать): annotare (для памяти), iscriversi (в библиотеку) o registrare suoni/immagini.",
  "записываться": "(записываться — записаться): iscriversi, entrare a far parte di un gruppo.",
  "вписать": "(вписывать — вписать): inserire parole o frasi in un testo già esistente o in un modulo.",
  "выписать": "(выписывать — выписать): trascrivere una citazione, dimettere da un ospedale o abbonarsi a un giornale.",
  "выписываться": "(выписываться — выписаться): essere dimesso (из больницы) o cancellarsi da un elenco.",
  "дописать": "(дописывать — дописать): finire di scrivere un testo o un'opera.",
  "переписать": "(переписывать — переписать): riscrivere di nuovo, copiare un testo o censire la popolazione.",
  "переписываться": "(переписываться — SV): scambiarsi lettere o messaggi con qualcuno.",
  "списать": "(списывать — списать): copiare da un altro (durante un compito) o scaricare/eliminare debiti.",
  "описать": "(описывать — описать): descrivere a parole o redigere un inventario (описать имущество).",
  "описаться": "(описаться — SV): commettere un errore scrivendo; scappare la pipì (uso infantile/volgare).",
  "надписать": "(надписывать — надписать): scrivere sopra qualcosa, spesso per dedicarlo (надписать книгу).",
  "подписать": "(подписывать — подписать): firmare un documento o abbonare qualcuno a una rivista.",
  "подписаться": "(подписываться — подписаться): mettere la propria firma o fare un abbonamento.",
  "расписать": "(расписывать — расписать): decorare con disegni o distribuire impegni e compiti (расписать день по минутам).",
  "расписаться": "(расписываться — расписаться): mettere la firma per ricevuta o sposarsi civilmente.",
  "исписать": "(исписывать — исписать): riempire completamente di scritte, consumare fogli o penne scrivendo.",
  "приписать": "(приписывать — приписать): aggiungere alla fine (postscriptum) o attribuire un merito/colpa a qualcuno.",
  "прописать": "(прописывать — прописать): registrare la residenza di qualcuno o prescrivere una cura/medicina.",
  "предписать": "(предписывать — предписать): ordinare ufficialmente di fare qualcosa.",
};

export const PISAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Я едва успел ... домашнее задание в дневник.",
    translation: "Ho fatto a malapena in tempo ad annotare il compito a casa sul diario.",
    options: ["записать", "написать", "вписать", "выписать"],
    optionBases: ["записать", "написать", "вписать", "выписать"],
    correctIndex: 0,
    verbPair: "записать — записывать",
    correctExplanation: PISAT_VERB_MAP["записать"]
  },
  {
    id: 2,
    sentence: "Вы должны ... свою фамилию в конце документа.",
    translation: "Dovete scrivere (inserire) il vostro cognome alla fine del documento.",
    options: ["вписать", "подписать", "записать", "дописать"],
    optionBases: ["вписать", "подписать", "записать", "дописать"],
    correctIndex: 0,
    verbPair: "вписать — вписывать",
    correctExplanation: PISAT_VERB_MAP["вписать"]
  },
  {
    id: 3,
    sentence: "Больного уже ... из хирургического отделения.",
    translation: "Il malato è già stato dimesso dal reparto di chirurgia.",
    options: ["выписали", "записали", "списали", "приписали"],
    optionBases: ["выписать", "записать", "списать", "приписать"],
    correctIndex: 0,
    verbPair: "выписать — выписывать",
    correctExplanation: PISAT_VERB_MAP["выписать"]
  },
  {
    id: 4,
    sentence: "Мне нужно ... ещё одну страницу, и работа будет готова.",
    translation: "Devo finire di scrivere ancora una pagina e il lavoro sarà pronto.",
    options: ["дописать", "переписать", "записать", "расписать"],
    optionBases: ["дописать", "переписать", "записать", "расписать"],
    correctIndex: 0,
    verbPair: "дописать — дописывать",
    correctExplanation: PISAT_VERB_MAP["дописать"]
  },
  {
    id: 5,
    sentence: "Опытный учитель сразу видит, когда ученик ... у соседа.",
    translation: "Un insegnante esperto vede subito quando l'alunno scopiazza dal vicino.",
    options: ["списал", "выписал", "записал", "расписал"],
    optionBases: ["списать", "выписать", "записать", "расписал"],
    correctIndex: 0,
    verbPair: "списать — списывать",
    correctExplanation: PISAT_VERB_MAP["списать"]
  },
  {
    id: 6,
    sentence: "Автор подробно ... все приключения своих героев.",
    translation: "L'autore ha descritto dettagliatamente tutte le avventure dei suoi eroi.",
    options: ["описал", "написал", "выписал", "расписал"],
    optionBases: ["описать", "написать", "выписать", "расписать"],
    correctIndex: 0,
    verbPair: "описать — описывать",
    correctExplanation: PISAT_VERB_MAP["описать"]
  },
  {
    id: 7,
    sentence: "Перед уходом не забудьте ... в журнале посещений.",
    translation: "Prima di uscire non dimenticate di firmare (mettere la firma) nel registro delle visite.",
    options: ["расписаться", "подписаться", "записаться", "вписаться"],
    optionBases: ["расписаться", "подписаться", "записаться", "вписаться"],
    correctIndex: 0,
    verbPair: "расписаться — расписываться",
    correctExplanation: PISAT_VERB_MAP["расписаться"]
  },
  {
    id: 8,
    sentence: "Доктор ... пациенту новое лекарство.",
    translation: "Il dottore ha prescritto al paziente una nuova medicina.",
    options: ["прописал", "надписал", "приписал", "предписал"],
    optionBases: ["прописать", "надписал", "приписать", "предписал"],
    correctIndex: 0,
    verbPair: "прописать — прописывать",
    correctExplanation: PISAT_VERB_MAP["прописать"]
  },
  {
    id: 9,
    sentence: "Он ... в библиотеку, чтобы брать книги на дом.",
    translation: "Si è iscritto in biblioteca per poter prendere libri a casa.",
    options: ["записался", "вписался", "расписался", "списался"],
    optionBases: ["записаться", "вписаться", "расписаться", "списаться"],
    correctIndex: 0,
    verbPair: "записаться — записываться",
    correctExplanation: PISAT_VERB_MAP["записываться"]
  },
  {
    id: 10,
    sentence: "Она всегда ... нам из отпуска длинные письма.",
    translation: "Lei ci scriveva (mandava per iscritto) sempre lunghe lettere dalle vacanze.",
    options: ["писала", "записывала", "выписывала", "списывала"],
    optionBases: ["писать", "записывать", "выписывать", "списывать"],
    correctIndex: 0,
    verbPair: "писать — написать",
    correctExplanation: PISAT_VERB_MAP["писать"]
  },
  {
    id: 11,
    sentence: "В этой тетради ... все правила по русскому языку.",
    translation: "In questo quaderno sono trascritte (annotate) tutte le regole di lingua russa.",
    options: ["записаны", "списаны", "расписаны", "выписаны"],
    optionBases: ["записать", "списать", "расписать", "выписать"],
    correctIndex: 0,
    verbPair: "записать — записывать",
    correctExplanation: "Annotati/Registrati per memoria."
  },
  {
    id: 12,
    sentence: "Мы ... с друзьями уже много лет.",
    translation: "Corrispondiamo (ci scambiamo messaggi) con gli amici già da molti anni.",
    options: ["переписываемся", "записываемся", "расписываемся", "вписываемся"],
    optionBases: ["переписываться", "записываться", "расписываться", "вписываться"],
    correctIndex: 0,
    verbPair: "переписываться",
    correctExplanation: PISAT_VERB_MAP["переписываться"]
  },
  {
    id: 13,
    sentence: "Придётся ... всю контрольную работу, так как в ней много ошибок.",
    translation: "Bisognerà riscrivere tutto il compito perché ci sono molti errori.",
    options: ["переписать", "дописать", "выписать", "записать"],
    optionBases: ["переписать", "дописать", "выписать", "записать"],
    correctIndex: 0,
    verbPair: "переписать — переписывать",
    correctExplanation: PISAT_VERB_MAP["переписать"]
  },
  {
    id: 14,
    sentence: "Художник ... стены храма удивительными фресками.",
    translation: "L'artista ha decorato (dipinto/coperto di pitture) le pareti del tempio con affreschi meravigliosi.",
    options: ["расписал", "описал", "надписал", "вписал"],
    optionBases: ["расписать", "описать", "надписать", "вписал"],
    correctIndex: 0,
    verbPair: "расписать — расписывать",
    correctExplanation: PISAT_VERB_MAP["расписать"]
  },
  {
    id: 15,
    sentence: "В конце письма он ... ещё несколько слов от себя.",
    translation: "Alla fine della lettera ha aggiunto ancora poche parole di suo pugno.",
    options: ["приписал", "надписал", "записал", "дописал"],
    optionBases: ["приписать", "надписал", "записал", "дописал"],
    correctIndex: 0,
    verbPair: "приписать — приписывать",
    correctExplanation: PISAT_VERB_MAP["приписать"]
  },
  {
    id: 16,
    sentence: "Я ... на этот журнал на целый год.",
    translation: "Mi sono abbonato a questa rivista per un anno intero.",
    options: ["подписался", "записался", "вписался", "расписался"],
    optionBases: ["подписаться", "записаться", "вписаться", "расписаться"],
    correctIndex: 0,
    verbPair: "подписаться — подписываться",
    correctExplanation: PISAT_VERB_MAP["подписаться"]
  },
  {
    id: 17,
    sentence: "Молодые люди ... в загсе в прошлую субботу.",
    translation: "I giovani si sono sposati civilmente (hanno firmato l'atto) sabato scorso.",
    options: ["расписались", "подписались", "записались", "вписались"],
    optionBases: ["расписаться", "подписаться", "записаться", "вписаться"],
    correctIndex: 0,
    verbPair: "расписаться — расписываться",
    correctExplanation: "Contrarre matrimonio civile."
  },
  {
    id: 18,
    sentence: "Мне пришлось ... за месяц три пачки бумаги.",
    translation: "Ho dovuto consumare (riempire completamente scrivendo) tre pacchi di carta in un mese.",
    options: ["исписать", "дописать", "переписать", "списать"],
    optionBases: ["исписать", "дописать", "переписать", "списать"],
    correctIndex: 0,
    verbPair: "исписать — исписывать",
    correctExplanation: PISAT_VERB_MAP["исписать"]
  },
  {
    id: 19,
    sentence: "Директор ... всем сотрудникам соблюдать тишину.",
    translation: "Il direttore ha ordinato ufficialmente a tutti i dipendenti di osservare il silenzio.",
    options: ["предписал", "прописал", "надписал", "подписал"],
    optionBases: ["предписать", "прописать", "надписать", "подписал"],
    correctIndex: 0,
    verbPair: "предписать — предписывать",
    correctExplanation: PISAT_VERB_MAP["предписать"]
  },
  {
    id: 20,
    sentence: "Он ... из статьи нужные данные для доклада.",
    translation: "Ha trascritto (estratto scrivendo) dall'articolo i dati necessari per la relazione.",
    options: ["выписал", "записал", "списал", "вписал"],
    optionBases: ["выписать", "записать", "списал", "вписал"],
    correctIndex: 0,
    verbPair: "выписать — выписывать",
    correctExplanation: PISAT_VERB_MAP["выписать"]
  }
];

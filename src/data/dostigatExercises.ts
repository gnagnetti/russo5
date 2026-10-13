import { Exercise } from '../types';

export const DOSTIGAT_VERB_MAP: Record<string, string> = {
  "достичь": "(достичь — достигать): significa arrivare a un punto fisico, un'età o un risultato concreto (достичь цели, достичь вершины). Spesso usato per traguardi oggettivi.",
  "добиться": "(добиться — добиваться): significa ottenere qualcosa dopo uno sforzo, una lotta o una persistenza (добиться успеха, добиться своего, добиться справедливости). Sottolinea l'impegno attivo.",
  "постичь": "(постичь — постигать): significa comprendere profondamente, afferrare il senso di qualcosa (постичь истину) o essere colpiti da una sventura (его постигло горе).",
  "настичь": "(настичь — настигать): significa raggiungere o sorprendere qualcuno (настичь врага, шторм настиг нас).",
  "перегнать": "(перегнать — перегонять): significa sorpassare o superare qualcuno in velocità o sviluppo.",
  "обогнать": "(обогнать — обгонять): significa superare fisicamente qualcuno (nella corsa o con l'auto) или superare in risultati.",
  "нагнать": "(нагнать — нагонять): significa recuperare il tempo perso o raggiungere qualcuno che è avanti (нагнать упущенное).",
  "заполучить": "riuscire a mettere le mani su qualcosa di desiderato, spesso con un po' di fatica o astuzia.",
  "превзойти": "(превзойти — превосходить): superare, eccellere o andare oltre le aspettative (превзойти все ожидания).",
  "справиться": "riuscire a gestire o superare una difficoltà (справиться с задачей).",
  "овладеть": "impadronirsi di una conoscenza o di un territorio (овладеть языком).",
  "реализовать": "realizzare o mettere in pratica un piano o un'idea."
};

export const DOSTIGAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Мы наконец-то ... вершины горы.",
    translation: "Finalmente abbiamo raggiunto la cima della montagna.",
    options: ["добились", "достигли", "постигли", "настигли"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 1,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 2,
    sentence: "Она упорно трудилась и ... своей цели.",
    translation: "Ha lavorato sodo e ha ottenuto (raggiunto con fatica) il suo scopo.",
    options: ["достигла", "добилась", "настигла", "постигла"],
    optionBases: ["достичь", "добиться", "настичь", "постичь"],
    correctIndex: 1,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 3,
    sentence: "Шторм ... корабль далеко в море.",
    translation: "La tempesta ha sorpreso (raggiunto) la nave in mare aperto.",
    options: ["достиг", "настиг", "постиг", "добился"],
    optionBases: ["достичь", "настичь", "постичь", "добиться"],
    correctIndex: 1,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 4,
    sentence: "Учёный посвятил жизнь тому, чтобы ... тайны природы.",
    translation: "Lo scienziato ha dedicato la vita a comprendere (afferrare) i misteri della natura.",
    options: ["постичь", "достичь", "добиться", "настичь"],
    optionBases: ["постичь", "достичь", "добиться", "настичь"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 5,
    sentence: "Вам нужно ..., чтобы получить разрешение.",
    translation: "Dovete insistere (lottare) per ottenere il permesso.",
    options: ["добиться", "достичь", "настичь", "постичь"],
    optionBases: ["добиться", "достичь", "настичь", "постичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 6,
    sentence: "Сын уже ... совершеннолетия.",
    translation: "Il figlio ha già raggiunto la maggiore età.",
    options: ["добился", "достиг", "настиг", "постиг"],
    optionBases: ["добиться", "достичь", "настичь", "постичь"],
    correctIndex: 1,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 7,
    sentence: "Его ... внезапная болезнь.",
    translation: "Lo ha colpito (sopraffatto/raggiunto) una malattia improvvisa.",
    options: ["постигла", "настигла", "добилась", "достигла"],
    optionBases: ["постичь", "настичь", "добиться", "достичь"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 8,
    sentence: "Спортсмен ... всех своих соперников.",
    translation: "L'atleta ha superato (fisicamente) tutti i suoi rivali.",
    options: ["обогнал", "нагнал", "перегнал", "достиг"],
    optionBases: ["обогнать", "нагнать", "перегнать", "достиг"],
    correctIndex: 0,
    verbPair: "обогнать — обгонять",
    correctExplanation: DOSTIGAT_VERB_MAP["обогнать"]
  },
  {
    id: 9,
    sentence: "Нам нужно ... упущенное время.",
    translation: "Dobbiamo recuperare il tempo perso.",
    options: ["нагнать", "обогнать", "перегнать", "постичь"],
    optionBases: ["нагнать", "обогнать", "перегнать", "постичь"],
    correctIndex: 0,
    verbPair: "нагнать — нагонять",
    correctExplanation: DOSTIGAT_VERB_MAP["нагнать"]
  },
  {
    id: 10,
    sentence: "Результат подготовки ... наши самые смелые ожидания.",
    translation: "Il risultato della preparazione ha superato (eccelso oltre) le nostre più ardite aspettative.",
    options: ["превзошёл", "достиг", "добился", "настиг"],
    optionBases: ["превзойти", "достичь", "добиться", "настичь"],
    correctIndex: 0,
    verbPair: "превзойти — превосходить",
    correctExplanation: DOSTIGAT_VERB_MAP["превзойти"]
  },
  {
    id: 11,
    sentence: "Она смогла ... признания в научном сообществе.",
    translation: "È riuscita a ottenere (con fatica) il riconoscimento nella comunità scientifica.",
    options: ["добиться", "достичь", "настичь", "постичь"],
    optionBases: ["добиться", "достичь", "настичь", "постичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 12,
    sentence: "Температура воздуха ... сорока градусов.",
    translation: "La temperatura dell'aria ha raggiunto i quaranta gradi.",
    options: ["добилась", "достигла", "настигла", "постигла"],
    optionBases: ["добиться", "достичь", "настичь", "постичь"],
    correctIndex: 1,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 13,
    sentence: "Беглец был ... правосудием.",
    translation: "Il fuggiasco è stato raggiunto dalla giustizia.",
    options: ["настигнут", "достигнут", "постигнут", "добился"],
    optionBases: ["настичь", "достичь", "постичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 14,
    sentence: "Студент ... основы квантовой физики.",
    translation: "Lo studente ha appreso (compreso a fondo) le basi della fisica quantistica.",
    options: ["постиг", "достиг", "добился", "настиг"],
    optionBases: ["постичь", "достичь", "добиться", "настичь"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 15,
    sentence: "Адвокат ... оправдания своего клиента.",
    translation: "L'avvocato ha ottenuto l'assoluzione del suo cliente.",
    options: ["добился", "достиг", "постиг", "настиг"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 16,
    sentence: "Уровень воды в реке ... критической отметки.",
    translation: "Il livello dell'acqua nel fiume ha raggiunto il punto critico.",
    options: ["достиг", "добился", "постиг", "настиг"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 17,
    sentence: "Путешественника ... неудача в самом начале пути.",
    translation: "Il viaggiatore è stato colpito (colto) dalla sfortuna all'inizio del cammino.",
    options: ["постигла", "настигла", "достигла", "добилась"],
    optionBases: ["постичь", "настичь", "достичь", "добиться"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 18,
    sentence: "Наш отдел ... высоких результатов в этом году.",
    translation: "Il nostro reparto ha raggiunto alti risultati quest'anno.",
    options: ["достиг", "добился", "постиг", "настиг"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 19,
    sentence: "Он смог ... успеха только благодаря упорству.",
    translation: "È riuscito a ottenere il successo solo grazie alla perseveranza.",
    options: ["добиться", "достичь", "постичь", "настичь"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 20,
    sentence: "Хищник быстро ... свою жертву.",
    translation: "Il predatore ha raggiunto velocemente la sua preda.",
    options: ["настиг", "достиг", "постиг", "добился"],
    optionBases: ["настичь", "достичь", "постичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 21,
    sentence: "Мы должны ... истины, чего бы нам это ни стоило.",
    translation: "Dobbiamo afferrare (comprendere) la verità, a qualunque costo.",
    options: ["постичь", "достичь", "добиться", "настичь"],
    optionBases: ["постичь", "достичь", "добиться", "настичь"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 22,
    sentence: "Зарплата рабочих ... среднего уровня по стране.",
    translation: "Lo stipendio dei lavoratori ha raggiunto il livello medio del paese.",
    options: ["достигла", "добилась", "постигла", "настигла"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 23,
    sentence: "Спортсмен ... победы в честной борьбе.",
    translation: "L'atleta ha ottenuto la vittoria in una lotta corretta.",
    options: ["добился", "достиг", "постиг", "настиг"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 24,
    sentence: "Нас ... известие о смерти старого друга.",
    translation: "Ci ha colto (raggiunto/colpito) la notizia della morte di un vecchio amico.",
    options: ["настигло", "постигло", "достигло", "добилось"],
    optionBases: ["настичь", "постичь", "достичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 25,
    sentence: "Тяжело было ... все тонкой этой профессии.",
    translation: "È stato difficile cogliere (comprendere) tutte le sfumature di questa professione.",
    options: ["постичь", "достичь", "добиться", "настичь"],
    optionBases: ["постичь", "достичь", "добиться", "настичь"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 26,
    sentence: "Планшет ... популярности среди молодежи.",
    translation: "Il tablet ha raggiunto la popolarità tra i giovani.",
    options: ["достиг", "добился", "постиг", "настиг"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 27,
    sentence: "Никто не верил, что он ... такого влияния.",
    translation: "Nessuno credeva che avesse ottenuto una simile influenza.",
    options: ["добьётся", "достигнет", "постигнет", "настигнет"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 28,
    sentence: "Гроза ... их на полпути к дому.",
    translation: "Il temporale li ha sorpresi (raggiunti) a metà strada verso casa.",
    options: ["настигла", "достигла", "постигла", "добилась"],
    optionBases: ["настичь", "достичь", "постичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 29,
    sentence: "Его ... глубокое разочарование в людях.",
    translation: "Lo ha colpito (sopraffatto) una profonda delusione verso le persone.",
    options: ["постигло", "настигло", "достигло", "добилось"],
    optionBases: ["постичь", "настичь", "достичь", "добиться"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 30,
    sentence: "К десяти часам утра облака ... горизонта.",
    translation: "Verso le dieci del mattino le nuvole avevano raggiunto l'orizzonte.",
    options: ["достигли", "добились", "постигли", "настигли"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 31,
    sentence: "Справедливости пришлось ... через суд.",
    translation: "Si è dovuta ottenere giustizia attraverso il tribunale.",
    options: ["добиваться", "достигать", "постигать", "настигать"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "добиваться — добиться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 32,
    sentence: "Ракета ... заданной орбиты.",
    translation: "Il razzo ha raggiunto l'orbita stabilita.",
    options: ["достигла", "добилась", "постигла", "настигла"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 33,
    sentence: "Ужасное несчастье ... эту семью.",
    translation: "Una terribile disgrazia ha colpito questa famiglia.",
    options: ["постигло", "настигло", "достигло", "добилось"],
    optionBases: ["постичь", "настичь", "достичь", "добиться"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 34,
    sentence: "Автомобиль ... лидера гонки.",
    translation: "L'auto ha raggiunto il leader della corsa.",
    options: ["настиг", "достиг", "постиг", "добился"],
    optionBases: ["настичь", "достичь", "постичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 35,
    sentence: "Я не могу ... смысла этой поэмы.",
    translation: "Non riesco ad afferrare (comprendere) il senso di questo poema.",
    options: ["постичь", "достичь", "добиться", "настичь"],
    optionBases: ["постичь", "достичь", "добиться", "настичь"],
    correctIndex: 0,
    verbPair: "постичь — постигать",
    correctExplanation: DOSTIGAT_VERB_MAP["постичь"]
  },
  {
    id: 36,
    sentence: "Проект ... завершающей стадии.",
    translation: "Il progetto ha raggiunto la fase conclusiva.",
    options: ["достиг", "добился", "постиг", "настиг"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 37,
    sentence: "Коллектив ... повышения зарплаты.",
    translation: "Il collettivo ha ottenuto (persitendo) l'aumento di stipendio.",
    options: ["добился", "достиг", "постиг", "настиг"],
    optionBases: ["добиться", "достичь", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: DOSTIGAT_VERB_MAP["добиться"]
  },
  {
    id: 38,
    sentence: "Сон ... его в глубоком кресле.",
    translation: "Il sonno lo ha colto (raggiunto) nella poltrona profonda.",
    options: ["настиг", "постиг", "достиг", "добился"],
    optionBases: ["настичь", "постичь", "достичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  },
  {
    id: 39,
    sentence: "Она мечтала ... совершенства в игре на скрипке.",
    translation: "Sognava di raggiungere la perfezione nel suonare il violino.",
    options: ["достичь", "добиться", "постичь", "настичь"],
    optionBases: ["достичь", "добиться", "постичь", "настичь"],
    correctIndex: 0,
    verbPair: "достичь — достигать",
    correctExplanation: DOSTIGAT_VERB_MAP["достичь"]
  },
  {
    id: 40,
    sentence: "Полиция ... преступников на окраине города.",
    translation: "La polizia ha raggiunto (preso) i criminali alla periferia della città.",
    options: ["настигла", "достигла", "постигла", "добилась"],
    optionBases: ["настичь", "достичь", "постичь", "добиться"],
    correctIndex: 0,
    verbPair: "настичь — настигать",
    correctExplanation: DOSTIGAT_VERB_MAP["настичь"]
  }
];

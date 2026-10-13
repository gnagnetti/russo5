import { Exercise } from '../types';

export const IZMENIT_VERB_MAP: Record<string, string> = {
  "изменить": "(изменить — изменять): significa cambiare qualcosa in modo parziale o totale (изменить план, изменить внешность). Può anche significare tradire (изменить родине, изменить мужу).",
  "измениться": "(измениться — изменяться): significa cambiare se stessi, mutare (погода изменилась, он изменился до неузнаваемости).",
  "превратить": "(превратить — превращать): significa trasformare completamente una cosa in un'altra (превратить воду в лёд, превратить мечту в реальность). Spesso richiede il caso 'в + accusativo'.",
  "превратиться": "(превратиться — превращаться): significa trasformarsi, diventare qualcos'altro (гусеница превратилась в бабочку).",
  "сменить": "(сменить — сменять): significa sostituire una cosa con un'altra della stessa categoria (сменить работу, сменить номер телефона, сменить бельё).",
  "обменять": "(обменять — обменивать): significa scambiare una cosa per un'altra (обменять валюту, обменять товар).",
  "заменить": "(заменить — заменять): significa rimpiazzare o fungere da sostituto (заменить сломанную деталь, никто не может его заменить).",
  "переменить": "(переменить — переменять): significa cambiare radicalmente o dare una nuova direzione (переменить климат, переменить отношение).",
  "подменить": "(подменить — подменять): significa sostituire di nascosto o temporaneamente (подменить документы, подменить коллегу на час).",
  "отменить": "(отменить — отменять): significa annullare o revocare (отменить рейс, отменить закон).",
  "применить": "(применить — применять): significa applicare o mettere in pratica (применить знания, применить силу).",
  "устранить": "(устранить — устранять): significa eliminare o rimuovere un ostacolo o un errore."
};

export const IZMENIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Нам пришлось ... наши планы на выходные из-за дождя.",
    translation: "Abbiamo dovuto cambiare i nostri piani per il fine settimana a causa della pioggia.",
    options: ["изменить", "превратить", "сменить", "отменить"],
    optionBases: ["изменить", "превратить", "сменить", "отменить"],
    correctIndex: 0,
    verbPair: "изменить — изменять",
    correctExplanation: IZMENIT_VERB_MAP["изменить"]
  },
  {
    id: 2,
    sentence: "Волшебник ... лягушку в прекрасного принца.",
    translation: "Il mago ha trasformato la rana in un bellissimo principe.",
    options: ["изменил", "превратил", "сменил", "заменил"],
    optionBases: ["изменить", "превратить", "сменить", "заменить"],
    correctIndex: 1,
    verbPair: "превратить — превращать",
    correctExplanation: IZMENIT_VERB_MAP["превратить"]
  },
  {
    id: 3,
    sentence: "Город очень ... за последние десять лет.",
    translation: "La città è cambiata molto negli ultimi dieci anni.",
    options: ["изменился", "превратился", "сменился", "подменился"],
    optionBases: ["измениться", "превратиться", "смениться", "подмениться"],
    correctIndex: 0,
    verbPair: "измениться — изменяться",
    correctExplanation: IZMENIT_VERB_MAP["измениться"]
  },
  {
    id: 4,
    sentence: "Я решил ... номер своего мобильного телефона.",
    translation: "Ho deciso di cambiare (sostituire) il mio numero di cellulare.",
    options: ["изменить", "сменить", "отменить", "применить"],
    optionBases: ["изменить", "сменить", "отменить", "применить"],
    correctIndex: 1,
    verbPair: "сменить — сменять",
    correctExplanation: IZMENIT_VERB_MAP["сменить"]
  },
  {
    id: 5,
    sentence: "Из-за тумана рейс самолёта был ... .",
    translation: "A causa della nebbia il volo è stato annullato.",
    options: ["изменён", "отменён", "сменён", "заменён"],
    optionBases: ["изменить", "отменить", "сменить", "заменить"],
    correctIndex: 1,
    verbPair: "отменить — отменять",
    correctExplanation: IZMENIT_VERB_MAP["отменить"]
  },
  {
    id: 6,
    sentence: "Вода на морозе ... в лёд.",
    translation: "L'acqua al gelo si trasforma in ghiaccio.",
    options: ["изменяется", "превращается", "сменяется", "отменяется"],
    optionBases: ["изменяться", "превращаться", "сменяться", "отменяться"],
    correctIndex: 1,
    verbPair: "превращаться — превратиться",
    correctExplanation: IZMENIT_VERB_MAP["превратиться"]
  },
  {
    id: 7,
    sentence: "Вам нужно ... старые доллары на новые.",
    translation: "Dovete cambiare (scambiare) i vecchi dollari con i nuovi.",
    options: ["изменить", "обменять", "заменить", "применить"],
    optionBases: ["изменить", "обменять", "заменить", "применить"],
    correctIndex: 1,
    verbPair: "обменять — обменивать",
    correctExplanation: IZMENIT_VERB_MAP["обменять"]
  },
  {
    id: 8,
    sentence: "Никто не сможет ... мне старого друга.",
    translation: "Nessuno potrà rimpiazzare/sostituire per me un vecchio amico.",
    options: ["изменить", "заменить", "сменить", "подменить"],
    optionBases: ["изменить", "заменить", "сменить", "подменить"],
    correctIndex: 1,
    verbPair: "заменить — заменять",
    correctExplanation: IZMENIT_VERB_MAP["заменить"]
  },
  {
    id: 9,
    sentence: "Я хочу ... свои знания на практике.",
    translation: "Voglio applicare le mie conoscenze nella pratica.",
    options: ["применить", "изменить", "отменить", "сменить"],
    optionBases: ["применить", "изменить", "отменить", "сменить"],
    correctIndex: 0,
    verbPair: "применить — применять",
    correctExplanation: IZMENIT_VERB_MAP["применить"]
  },
  {
    id: 10,
    sentence: "Врач решил ... лекарство на более сильное.",
    translation: "Il medico ha deciso di sostituire la medicina con una più forte.",
    options: ["изменить", "заменить", "превратить", "подменить"],
    optionBases: ["изменить", "заменить", "превратить", "подменить"],
    correctIndex: 1,
    verbPair: "заменить — заменять",
    correctExplanation: IZMENIT_VERB_MAP["заменить"]
  },
  {
    id: 11,
    sentence: "Молодой человек ... своей девушке с её подругой.",
    translation: "Il giovane ha tradito la sua ragazza con una sua amica.",
    options: ["изменил", "сменил", "отменил", "подменил"],
    optionBases: ["изменить", "сменить", "отменить", "подменить"],
    correctIndex: 0,
    verbPair: "изменить — изменять",
    correctExplanation: "Qui 'изменить' significa 'tradire' (richiede il dativo)."
  },
  {
    id: 12,
    sentence: "Нам нужно ... обстановку и поехать в горы.",
    translation: "Dobbiamo cambiare aria (ambiente/direzione) e andare in montagna.",
    options: ["изменить", "переменить", "сменить", "заменить"],
    optionBases: ["изменить", "переменить", "сменить", "заменить"],
    correctIndex: 1,
    verbPair: "переменить — переменять",
    correctExplanation: IZMENIT_VERB_MAP["переменить"]
  },
  {
    id: 13,
    sentence: "Он ... меня на посту, чтобы я мог пообедать.",
    translation: "Mi ha sostituito temporaneamente al posto di guardia perché potessi pranzare.",
    options: ["подменил", "заменил", "сменил", "изменил"],
    optionBases: ["подменить", "заменить", "сменить", "изменить"],
    correctIndex: 0,
    verbPair: "подменить — подменять",
    correctExplanation: IZMENIT_VERB_MAP["подменить"]
  },
  {
    id: 14,
    sentence: "Она ... до неузнаваемости после отпуска.",
    translation: "È cambiata (se stessa) in modo irriconoscibile dopo le vacanze.",
    options: ["изменилась", "превратилась", "сменилась", "отменилась"],
    optionBases: ["измениться", "превратиться", "смениться", "отмениться"],
    correctIndex: 0,
    verbPair: "изменилась — измениться",
    correctExplanation: IZMENIT_VERB_MAP["измениться"]
  },
  {
    id: 15,
    sentence: "Художник ... обычный холст в шедевр.",
    translation: "L'artista ha trasformato una tela ordinaria in un capolavoro.",
    options: ["изменил", "превратил", "сменил", "заменил"],
    optionBases: ["изменить", "превратить", "сменить", "заменить"],
    correctIndex: 1,
    verbPair: "превратить — превращать",
    correctExplanation: IZMENIT_VERB_MAP["превратить"]
  },
  {
    id: 16,
    sentence: "Мы должны ... все недостатки в нашей работе.",
    translation: "Dobbiamo eliminare (superare) tutti i difetti nel nostro lavoro.",
    options: ["изжить (устранить)", "изменить", "сменить", "заменить"],
    optionBases: ["устранить", "изменить", "сменить", "заменить"],
    correctIndex: 0,
    verbPair: "устранить — устранять",
    correctExplanation: IZMENIT_VERB_MAP["устранить"]
  },
  {
    id: 17,
    sentence: "Вы можете ... этот товар, если он вам не подошел.",
    translation: "Potete cambiare (scambiare) questa merce se non vi è andata bene.",
    options: ["изменить", "обменять", "подменить", "отменить"],
    optionBases: ["изменить", "обменять", "подменить", "отменить"],
    correctIndex: 1,
    verbPair: "обменять — обменивать",
    correctExplanation: IZMENIT_VERB_MAP["обменять"]
  },
  {
    id: 18,
    sentence: "Мирная демонстрация ... в столкновение с полицией.",
    translation: "La manifestazione pacifica si è trasformata in uno scontro con la polizia.",
    options: ["изменилась", "превратилась", "сменилась", "отменилась"],
    optionBases: ["измениться", "превратиться", "смениться", "отмениться"],
    correctIndex: 1,
    verbPair: "превратиться — превращаться",
    correctExplanation: IZMENIT_VERB_MAP["превратиться"]
  },
  {
    id: 19,
    sentence: "Я хочу ... гнев на милость.",
    translation: "Voglio cambiare l'ira in favore (espressione idiomatica).",
    options: ["сменить", "изменить", "заменить", "подменить"],
    optionBases: ["сменить", "изменить", "заменить", "подменить"],
    correctIndex: 0,
    verbPair: "сменить — сменять",
    correctExplanation: IZMENIT_VERB_MAP["сменить"]
  },
  {
    id: 20,
    sentence: "Он ... своё отношение к этой проблеме.",
    translation: "Lui ha cambiato (mutato radicalmente) il suo atteggiamento verso questo problema.",
    options: ["изменил", "переменил", "сменил", "подменил"],
    optionBases: ["изменить", "переменил", "сменить", "подменить"],
    correctIndex: 1,
    verbPair: "переменил — переменить",
    correctExplanation: IZMENIT_VERB_MAP["переменить"]
  },
  {
    id: 21,
    sentence: "Пожалуйста, ... сломанную деталь новой.",
    translation: "Per favore, sostituisca il pezzo rotto con uno nuovo.",
    options: ["замените", "измените", "подмените", "смените"],
    optionBases: ["заменить", "изменить", "подменить", "сменить"],
    correctIndex: 0,
    verbPair: "заменить — заменять",
    correctExplanation: IZMENIT_VERB_MAP["заменить"]
  },
  {
    id: 22,
    sentence: "Она ... прическу и стала выглядеть старше.",
    translation: "Ha cambiato pettinatura e ha iniziato a sembrare più vecchia.",
    options: ["изменила", "сменила", "подменила", "отменила"],
    optionBases: ["изменить", "сменить", "подменить", "отменить"],
    correctIndex: 1,
    verbPair: "сменила — сменить",
    correctExplanation: IZMENIT_VERB_MAP["сменить"]
  },
  {
    id: 23,
    sentence: "Преступник ... улики, чтобы запутать следствие.",
    translation: "Il criminale ha sostituito (di nascosto) le prove per confondere le indagini.",
    options: ["подменил", "заменил", "изменил", "сменил"],
    optionBases: ["подменить", "заменить", "изменить", "сменить"],
    correctIndex: 0,
    verbPair: "подменил — подменять",
    correctExplanation: IZMENIT_VERB_MAP["подменить"]
  },
  {
    id: 24,
    sentence: "Нам нужно ... этот метод для решения задачи.",
    translation: "Dobbiamo applicare questo metodo per risolvere il compito.",
    options: ["применить", "изменить", "отменить", "сменить"],
    optionBases: ["применить", "изменить", "отменить", "сменить"],
    correctIndex: 0,
    verbPair: "применить — применять",
    correctExplanation: IZMENIT_VERB_MAP["применить"]
  },
  {
    id: 25,
    sentence: "Её жизнь ... в кошмар после этого происшествия.",
    translation: "La sua vita si è trasformata in un incubo dopo quell'incidente.",
    options: ["превратилась", "изменилась", "сменилась", "отменилась"],
    optionBases: ["превратиться", "измениться", "сменяться", "отменить"],
    correctIndex: 0,
    verbPair: "превратилась — превращаться",
    correctExplanation: IZMENIT_VERB_MAP["превратиться"]
  },
  {
    id: 26,
    sentence: "Вы должны ... все ошибки в коде программы.",
    translation: "Dovete eliminare tutti gli errori nel codice del programma.",
    options: ["устранить", "изменить", "сменить", "заменить"],
    optionBases: ["устранить", "изменить", "сменить", "заменить"],
    correctIndex: 0,
    verbPair: "устранить — устранять",
    correctExplanation: IZMENIT_VERB_MAP["устранить"]
  },
  {
    id: 27,
    sentence: "Он ... своё имя и фамилию.",
    translation: "Ha cambiato (sostituito/mutato) il suo nome e cognome.",
    options: ["сменил", "изменил", "подменил", "отменил"],
    optionBases: ["сменил", "изменил", "подменил", "отменил"],
    correctIndex: 0,
    verbPair: "сменил — сменить",
    correctExplanation: IZMENIT_VERB_MAP["сменить"]
  },
  {
    id: 28,
    sentence: "Обычная беседа ... в жаркий спор.",
    translation: "Una conversazione ordinaria si è trasformata in una discussione accesa.",
    options: ["превратилась", "изменилась", "сменилась", "отменилась"],
    optionBases: ["превратиться", "измениться", "смениться", "отменить"],
    correctIndex: 0,
    verbPair: "превратилась — превращаться",
    correctExplanation: IZMENIT_VERB_MAP["превратиться"]
  },
  {
    id: 29,
    sentence: "Я хочу ... билеты на другую дату.",
    translation: "Voglio cambiare (scambiare) i biglietti per un'altra data.",
    options: ["обменять", "изменить", "сменить", "отменить"],
    optionBases: ["обменять", "изменить", "сменить", "отменить"],
    correctIndex: 0,
    verbPair: "обменять — обменивать",
    correctExplanation: IZMENIT_VERB_MAP["обменять"]
  },
  {
    id: 30,
    sentence: "Нам пришлось ... встречу из-за болезни директора.",
    translation: "Abbiamo dovuto annullare l'incontro a causa della malattia del direttore.",
    options: ["отменить", "изменить", "сменить", "заменить"],
    optionBases: ["отменить", "изменить", "сменить", "заменить"],
    correctIndex: 0,
    verbPair: "отменить — отменять",
    correctExplanation: IZMENIT_VERB_MAP["отменить"]
  },
  {
    id: 31,
    sentence: "Её настроение ... несколько раз за час.",
    translation: "Il suo umore è cambiato più volte in un'ora.",
    options: ["изменялось", "превращалось", "сменялось", "отменялось"],
    optionBases: ["изменяться", "превращаться", "сменяться", "отменяться"],
    correctIndex: 0,
    verbPair: "изменялось — изменяться",
    correctExplanation: IZMENIT_VERB_MAP["измениться"]
  },
  {
    id: 32,
    sentence: "Он смог ... свою слабость в силу.",
    translation: "È riuscito a trasformare la sua debolezza in forza.",
    options: ["превратить", "изменить", "сменить", "заменить"],
    optionBases: ["превратить", "изменить", "сменить", "заменить"],
    correctIndex: 0,
    verbPair: "превратить — превращать",
    correctExplanation: IZMENIT_VERB_MAP["превратить"]
  },
  {
    id: 33,
    sentence: "Погода на улице резко ... .",
    translation: "Il tempo fuori è cambiato bruscamente.",
    options: ["изменилась", "превратилась", "сменилась", "отменилась"],
    optionBases: ["изменилась", "превратиться", "смениться", "отменить"],
    correctIndex: 0,
    verbPair: "изменилась — измениться",
    correctExplanation: IZMENIT_VERB_MAP["измениться"]
  },
  {
    id: 34,
    sentence: "Я должен ... масло в двигателе автомобиля.",
    translation: "Devo cambiare (sostituire) l'olio nel motore dell'auto.",
    options: ["сменить", "изменить", "подменить", "применить"],
    optionBases: ["сменить", "изменить", "подменить", "применить"],
    correctIndex: 0,
    verbPair: "сменил — сменить",
    correctExplanation: IZMENIT_VERB_MAP["сменить"]
  },
  {
    id: 35,
    sentence: "Ему удалось ... все препятствия на своём пути.",
    translation: "È riuscito a eliminare (rimuovere) tutti gli ostacoli sul suo cammino.",
    options: ["устранить", "изменить", "превратить", "отменить"],
    optionBases: ["устранить", "изменить", "превратить", "отменить"],
    correctIndex: 0,
    verbPair: "устранить — устранять",
    correctExplanation: IZMENIT_VERB_MAP["устранить"]
  },
  {
    id: 36,
    sentence: "Она ... свою одежду на более удобную.",
    translation: "Ha cambiato i suoi vestiti con altri più comodi.",
    options: ["сменила", "изменила", "заменила", "подменила"],
    optionBases: ["сменить", "изменить", "заменить", "подменить"],
    correctIndex: 0,
    verbPair: "сменила — сменить",
    correctExplanation: IZMENIT_VERB_MAP["сменить"]
  },
  {
    id: 37,
    sentence: "Нам нужно ... новые технологии в производстве.",
    translation: "Dobbiamo applicare nuove tecnologie nella produzione.",
    options: ["применить", "изменить", "отменить", "сменить"],
    optionBases: ["применить", "изменить", "отменить", "сменить"],
    correctIndex: 0,
    verbPair: "применить — применять",
    correctExplanation: IZMENIT_VERB_MAP["применить"]
  },
  {
    id: 38,
    sentence: "Обычный парень ... в настоящего героя.",
    translation: "Un ragazzo comune si è trasformato in un vero eroe.",
    options: ["превратился", "изменился", "сменился", "подменился"],
    optionBases: ["превратился", "измениться", "сменяться", "подмениться"],
    correctIndex: 0,
    verbPair: "превратился — превращаться",
    correctExplanation: IZMENIT_VERB_MAP["превратиться"]
  },
  {
    id: 39,
    sentence: "Я хочу ... это платье на другой цвет.",
    translation: "Voglio cambiare (scambiare) questo vestito con un altro colore.",
    options: ["обменять", "изменить", "подменить", "отменить"],
    optionBases: ["обменять", "изменить", "подменить", "отменить"],
    correctIndex: 0,
    verbPair: "обменять — обменивать",
    correctExplanation: IZMENIT_VERB_MAP["обменять"]
  },
  {
    id: 40,
    sentence: "Он ... своё решение в последний момент.",
    translation: "Ha cambiato la sua decisione all'ultimo momento.",
    options: ["изменил", "переменил", "сменил", "отменил"],
    optionBases: ["изменить", "переменил", "сменил", "отменил"],
    correctIndex: 0,
    verbPair: "изменить — изменять",
    correctExplanation: IZMENIT_VERB_MAP["изменить"]
  }
];

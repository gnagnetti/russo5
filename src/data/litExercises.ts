import { Exercise } from '../types';

export const LIT_VERB_MAP: Record<string, string> = {
  "лить": "(лить — полить): significa versare un liquido in modo continuo (лить воду, дождь льёт).",
  "налить": "(налить — наливать): significa riempire un contenitore versando un liquido (налить чай в чашку, налить бензин).",
  "полить": "(полить — поливать): significa bagnare qualcosa (fiori, giardino) o versare un po' di liquido sopra qualcosa (полить цветы, полить соусом).",
  "вылить": "(вылить — выливать): significa svuotare un contenitore versando tutto il liquido fuori (вылить грязную воду).",
  "пролить": "(пролить — проливать): significa versare accidentalmente (spargere) o versare (lacrime, sangue) (пролить кофе, пролить слёзы).",
  "перелить": "(перелить — переливать): significa travasare da un contenitore all'altro o versare troppo (перелить через край). Anche trasfondere sangue.",
  "долить": "(долить — доливать): significa aggiungere liquido per riempire fino a un certo punto (долить воды в чайник).",
  "залить": "(залить — заливать): significa inondare, coprire completamente di liquido o versare dentro forzatamente (залить фундамент, залить соседей).",
  "отлить": "(отлить — отливать): significa togliere un po' di liquido versandolo via o fondere un oggetto di metallo (отлить деталь).",
  "подлить": "(подлить — подливать): significa aggiungere un po' di liquido (spesso di nascosto o gradualmente) (подлить масла в огонь).",
  "слить": "(слить — сливать): significa scaricare, far defluire il liquido o unire liquidi da diverse fonti (слить воду из бассейна).",
  "разлить": "(разлить — разливать): significa distribuire in più contenitori o versare in grandi quantità (разлить суп по тарелкам, река разлилась)."
};

export const LIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Пожалуйста, ... мне немного красного вина.",
    translation: "Per favore, versami (riempi il bicchiere) un po' di vino rosso.",
    options: ["налей", "полей", "вылей", "пролей"],
    optionBases: ["налить", "полить", "вылить", "пролить"],
    correctIndex: 0,
    verbPair: "налей — наливать",
    correctExplanation: LIT_VERB_MAP["налить"]
  },
  {
    id: 2,
    sentence: "Не забудь ... цветы на балконе вечером.",
    translation: "Non dimenticare di innaffiare (bagnare) i fiori sul balcone stasera.",
    options: ["полить", "налить", "вылить", "перелить"],
    optionBases: ["полить", "налить", "вылить", "перелить"],
    correctIndex: 0,
    verbPair: "полить — поливать",
    correctExplanation: LIT_VERB_MAP["полить"]
  },
  {
    id: 3,
    sentence: "Осторожно, ты можешь ... горячий чай на скатерть.",
    translation: "Fai attenzione, potresti rovesciare (accidentalmente) il tè caldo sulla tovaglia.",
    options: ["пролить", "налить", "вылить", "слить"],
    optionBases: ["пролить", "налить", "вылить", "слить"],
    correctIndex: 0,
    verbPair: "пролить — проливать",
    correctExplanation: LIT_VERB_MAP["пролить"]
  },
  {
    id: 4,
    sentence: "Нам пришлось ... всю воду из старого аквариума.",
    translation: "Abbiamo dovuto versare fuori (vuotare) tutta l'acqua dal vecchio acquario.",
    options: ["вылить", "налить", "полить", "долить"],
    optionBases: ["вылить", "налить", "полить", "долить"],
    correctIndex: 0,
    verbPair: "вылить — выливать",
    correctExplanation: LIT_VERB_MAP["вылить"]
  },
  {
    id: 5,
    sentence: "Нужно ... немного воды в кастрюлю, она почти пуста.",
    translation: "Bisogna aggiungere (fino a un certo punto) un po' d'acqua nella pentola, è quasi vuota.",
    options: ["долить", "налить", "перелить", "слить"],
    optionBases: ["долить", "налить", "перелить", "слить"],
    correctIndex: 0,
    verbPair: "долить — доливать",
    correctExplanation: LIT_VERB_MAP["долить"]
  },
  {
    id: 6,
    sentence: "Соседи сверху случайно ... нашу квартиру.",
    translation: "I vicini di sopra hanno accidentalmente allagato (inondato) il nostro appartamento.",
    options: ["залили", "налили", "вылили", "пролили"],
    optionBases: ["залить", "налить", "вылить", "пролить"],
    correctIndex: 0,
    verbPair: "залили — заливать",
    correctExplanation: LIT_VERB_MAP["залить"]
  },
  {
    id: 7,
    sentence: "Повар ... суп по глубоким тарелкам.",
    translation: "Il cuoco ha distribuito (versato in più piatti) la zuppa nei piatti fondi.",
    options: ["разлил", "налил", "перелил", "подлил"],
    optionBases: ["разлить", "налить", "перелить", "подлить"],
    correctIndex: 0,
    verbPair: "разлил — разливать",
    correctExplanation: LIT_VERB_MAP["разлить"]
  },
  {
    id: 8,
    sentence: "Врач сказал, что пациенту нужно ... кровь.",
    translation: "Il medico ha detto che al paziente bisogna trasfondere (travasare) il sangue.",
    options: ["перелить", "налить", "залить", "отлить"],
    optionBases: ["перелить", "налить", "залить", "отлить"],
    correctIndex: 0,
    verbPair: "перелить — переливать",
    correctExplanation: LIT_VERB_MAP["перелить"]
  },
  {
    id: 9,
    sentence: "Молоко закипело и начало ... через край.",
    translation: "Il latte è bollito e ha iniziato a traboccare (versarsi oltre il bordo).",
    options: ["переливаться", "наливаться", "разливаться", "сливаться"],
    optionBases: ["переливаться", "наливаться", "разливаться", "сливаться"],
    correctIndex: 0,
    verbPair: "переливаться — перелиться",
    correctExplanation: "Qui indica il movimento del liquido che supera i bordi."
  },
  {
    id: 10,
    sentence: "Мальчик незаметно ... соевый соус в тарелку друга.",
    translation: "Il ragazzo ha aggiunto (di nascosto) un po' di salsa di soia nel piatto dell'amico.",
    options: ["подлил", "налил", "долил", "побыл"],
    optionBases: ["подлить", "налить", "долить", "побыть"],
    correctIndex: 0,
    verbPair: "подлил — подливать",
    correctExplanation: LIT_VERB_MAP["подлить"]
  },
  {
    id: 11,
    sentence: "После дождя на дороге ... огромные лужи.",
    translation: "Dopo la pioggia sulla strada si sono formate (si sono sparse/distribuite) enormi pozzanghere.",
    options: ["разлились", "налились", "вылились", "пролились"],
    optionBases: ["разлиться", "налиться", "вылиться", "пролиться"],
    correctIndex: 0,
    verbPair: "разлились — разливаться",
    correctExplanation: LIT_VERB_MAP["разлить"]
  },
  {
    id: 12,
    sentence: "Сантехнику пришлось ... воду из труб перед ремонтом.",
    translation: "L'idraulico ha dovuto scaricare (far defluire) l'acqua dai tubi prima della riparazione.",
    options: ["слить", "налить", "вылить", "отлить"],
    optionBases: ["слить", "налить", "вылить", "отлить"],
    correctIndex: 0,
    verbPair: "слить — сливать",
    correctExplanation: LIT_VERB_MAP["слить"]
  },
  {
    id: 13,
    sentence: "На улице весь день ... холодный осенний дождь.",
    translation: "Fuori per tutto il giorno è caduta (ha piovuto ininterrottamente) una fredda pioggia autunnale.",
    options: ["льёт (лился)", "наливается", "поливается", "проливается"],
    optionBases: ["лить", "наливаться", "поливаться", "проливаться"],
    correctIndex: 0,
    verbPair: "лился — литься",
    correctExplanation: LIT_VERB_MAP["лить"]
  },
  {
    id: 14,
    sentence: "Чайник слишком полный, нужно немного ... воды.",
    translation: "Il bollitore è troppo pieno, bisogna togliere versando (togliere un po') d'acqua.",
    options: ["отлить", "налить", "долить", "залить"],
    optionBases: ["отлить", "налить", "долить", "залить"],
    correctIndex: 0,
    verbPair: "отлить — отливать",
    correctExplanation: LIT_VERB_MAP["отлить"]
  },
  {
    id: 15,
    sentence: "Рабочие начали ... бетон в опалубку фундамента.",
    translation: "Gli operai hanno iniziato a versare (colare/riempire) il cemento nella cassaforma del fondamento.",
    options: ["заливать", "наливать", "поливать", "разливать"],
    optionBases: ["заливать", "наливать", "поливать", "разливать"],
    correctIndex: 0,
    verbPair: "заливать — залить",
    correctExplanation: LIT_VERB_MAP["залить"]
  },
  {
    id: 16,
    sentence: "Она ... молоко из пакета в кувшин.",
    translation: "Ha travasato (spostato versando) il latte dal cartone alla caraffa.",
    options: ["перелила", "налила", "вылила", "пролила"],
    optionBases: ["перелить", "налить", "вылить", "пролить"],
    correctIndex: 0,
    verbPair: "перелила — переливать",
    correctExplanation: LIT_VERB_MAP["перелить"]
  },
  {
    id: 17,
    sentence: "Не стоит ... масло в огонь в этой ситуации.",
    translation: "Non vale la pena buttare (aggiungere) benzina sul fuoco in questa situazione (idioma).",
    options: ["подливать", "наливать", "поливать", "выливать"],
    optionBases: ["подливать", "наливать", "поливать", "выливать"],
    correctIndex: 0,
    verbPair: "подливать — подлить",
    correctExplanation: LIT_VERB_MAP["подлить"]
  },
  {
    id: 18,
    sentence: "Она ... много слёз после этой новости.",
    translation: "Ha versato (speso versando) molte lacrime dopo questa notizia.",
    options: ["пролила", "налила", "вылила", "побела"],
    optionBases: ["пролить", "налить", "вылить", "побыть"],
    correctIndex: 0,
    verbPair: "пролила — проливать",
    correctExplanation: "Si usa 'пролить слёзы' per indicare il pianto."
  },
  {
    id: 19,
    sentence: "Давай ... этот сок в один большой графин.",
    translation: "Dai, uniamo (scarichiamo/versiamo insieme) questo succo in una grande caraffa.",
    options: ["сольём", "нальём", "польём", "зальём"],
    optionBases: ["слить", "налить", "полить", "залить"],
    correctIndex: 0,
    verbPair: "сольём — сливать",
    correctExplanation: LIT_VERB_MAP["слить"]
  },
  {
    id: 20,
    sentence: "Нужно ... соус на мясо перед подачей.",
    translation: "Bisogna versare un po' (bagnare) la salsa sulla carne prima di servire.",
    options: ["полить", "налить", "вылить", "залить"],
    optionBases: ["полить", "налить", "вылить", "залить"],
    correctIndex: 0,
    verbPair: "полить — поливать",
    correctExplanation: LIT_VERB_MAP["полить"]
  },
  {
    id: 21,
    sentence: "Он ... воду в бак автомобиля.",
    translation: "Ha riempito (versato dentro) l'acqua nel serbatoio dell'auto.",
    options: ["налил", "пролил", "перелил", "отлил"],
    optionBases: ["налить", "пролить", "перелить", "отлить"],
    correctIndex: 0,
    verbPair: "налил — наливать",
    correctExplanation: LIT_VERB_MAP["налить"]
  },
  {
    id: 22,
    sentence: "Она ... остатки кофе в раковину.",
    translation: "Ha versato fuori (vuotato) i resti del caffè nel lavandino.",
    options: ["вылила", "налила", "пролила", "залила"],
    optionBases: ["вылить", "налить", "пролить", "залить"],
    correctIndex: 0,
    verbPair: "вылила — выливать",
    correctExplanation: LIT_VERB_MAP["вылить"]
  },
  {
    id: 23,
    sentence: "Вода в реке ... и затопила поля.",
    translation: "L'acqua nel fiume si è alzata (straripata/sparsa) e ha inondato i campi.",
    options: ["разлилась", "налилась", "вылилась", "пролилась"],
    optionBases: ["разлиться", "налиться", "вылиться", "пролиться"],
    correctIndex: 0,
    verbPair: "разлилась — разливаться",
    correctExplanation: LIT_VERB_MAP["разлить"]
  },
  {
    id: 24,
    sentence: "Я случайно ... воду на клавиатуру.",
    translation: "Accidentalmente ho rovesciato (accidentalmente sparso) l'acqua sulla tastiera.",
    options: ["пролил", "налил", "вылил", "перелил"],
    optionBases: ["пролить", "налить", "вылить", "перелить"],
    correctIndex: 0,
    verbPair: "пролил — проливать",
    correctExplanation: LIT_VERB_MAP["пролить"]
  },
  {
    id: 25,
    sentence: "Мастеру нужно ... медную статуэтку.",
    translation: "Il mastro deve fondere (colare in uno stampo) una statuetta di rame.",
    options: ["отлить", "залить", "разлить", "полить"],
    optionBases: ["отлить", "залить", "разлить", "полить"],
    correctIndex: 0,
    verbPair: "отлить — отливать",
    correctExplanation: "Significa creare un oggetto fondendo il metallo e colandolo."
  },
  {
    id: 26,
    sentence: "Окно было плохо закрыто, и дождь ... подоконник.",
    translation: "La finestra era chiusa male e la pioggia ha inondato (coperto di liquido) il davanzale.",
    options: ["залил", "налил", "пролил", "перелил"],
    optionBases: ["залить", "налить", "пролить", "перелить"],
    correctIndex: 0,
    verbPair: "залил — заливать",
    correctExplanation: LIT_VERB_MAP["залить"]
  },
  {
    id: 27,
    sentence: "Давай ... немного заварки в твою чашку.",
    translation: "Dai, aggiungiamo (fino a un punto) un po' di concentrato di tè nella tua tazza.",
    options: ["догреем (долью)", "налить", "вылить", "отлить"],
    optionBases: ["долить", "налить", "вылить", "отлить"],
    correctIndex: 0,
    verbPair: "долью — долить",
    correctExplanation: LIT_VERB_MAP["долить"]
  },
  {
    id: 28,
    sentence: "Река ... по всей долине.",
    translation: "Il fiume si è straripato (distribuito ampiamente) per tutta la valle.",
    options: ["разлилась", "налилась", "перелилась", "залилась"],
    optionBases: ["разлиться", "налиться", "перелиться", "залиться"],
    correctIndex: 0,
    verbPair: "разлилась — разливаться",
    correctExplanation: LIT_VERB_MAP["разлить"]
  },
  {
    id: 29,
    sentence: "Она ... всё содержимое флакона на пол.",
    translation: "Ha versato fuori (svuotato) tutto il contenuto della boccetta sul pavimento.",
    options: ["вылила", "налила", "пролила", "залила"],
    optionBases: ["вылить", "налить", "пролить", "залить"],
    correctIndex: 0,
    verbPair: "вылила — выливать",
    correctExplanation: LIT_VERB_MAP["вылить"]
  },
  {
    id: 30,
    sentence: "Нам нужно экономно ... топливо.",
    translation: "Dobbiamo consumare (versare/far defluire) il carburante con parsimonia.",
    options: ["сливать", "наливать", "заливать", "проливать"],
    optionBases: ["сливать", "наливать", "заливать", "проливать"],
    correctIndex: 0,
    verbPair: "сливать — слить",
    correctExplanation: LIT_VERB_MAP["слить"]
  },
  {
    id: 31,
    sentence: "Музыка ... из открытого окна.",
    translation: "La musica fluiva (si versava in modo continuo) dalla finestra aperta.",
    options: ["лилась", "наливалась", "поливалась", "проливалась"],
    optionBases: ["литься", "наливаться", "поливаться", "проливаться"],
    correctIndex: 0,
    verbPair: "лилась — литься",
    correctExplanation: "Significa fluire o scorrere (anche figurato)."
  },
  {
    id: 32,
    sentence: "Пожалуйста, ... мне полный стакан сока.",
    translation: "Per favore, versami (riempi) un bicchiere pieno di succo.",
    options: ["налей", "пролей", "перелей", "отлей"],
    optionBases: ["налить", "пролить", "перелить", "отлить"],
    correctIndex: 0,
    verbPair: "налей — наливать",
    correctExplanation: LIT_VERB_MAP["налить"]
  },
  {
    id: 33,
    sentence: "Вода ... через плотину во время паводка.",
    translation: "L'acqua traboccava (si versava oltre) attraverso la diga durante la piena.",
    options: ["переливалась", "наливалась", "выливалась", "заливалась"],
    optionBases: ["переливаться", "наливаться", "выливаться", "заливаться"],
    correctIndex: 0,
    verbPair: "переливалась — перелиться",
    correctExplanation: LIT_VERB_MAP["перелить"]
  },
  {
    id: 34,
    sentence: "Он ... краску в разные банки для смешивания цветов.",
    translation: "Ha distribuito (versato in più contenitori) la vernice in barattoli diversi per mescolare i colori.",
    options: ["разлил", "налил", "вылил", "подлил"],
    optionBases: ["разлить", "налить", "вылить", "подлить"],
    correctIndex: 0,
    verbPair: "разлил — разливать",
    correctExplanation: LIT_VERB_MAP["разлить"]
  },
  {
    id: 35,
    sentence: "Ты слишком много ... в стакан, сейчас всё вытечет.",
    translation: "Hai versato troppo (oltre il limite) nel bicchiere, ora uscirà tutto.",
    options: ["перелил", "налил", "долил", "отлил"],
    optionBases: ["перелить", "налить", "долить", "отлить"],
    correctIndex: 0,
    verbPair: "перелил — переливать",
    correctExplanation: LIT_VERB_MAP["перелить"]
  },
  {
    id: 36,
    sentence: "Она аккуратно ... масло в лампу.",
    translation: "Ha versato con cura (riempito) l'olio nella lampada.",
    options: ["налила", "вылила", "пролила", "залила"],
    optionBases: ["налить", "вылить", "пролить", "залить"],
    correctIndex: 0,
    verbPair: "налила — наливать",
    correctExplanation: LIT_VERB_MAP["налить"]
  },
  {
    id: 37,
    sentence: "Грусть ... в моей душе после его ухода.",
    translation: "La tristezza fluiva (si versava ininterrottamente - figurato) nella mia anima dopo la sua partenza.",
    options: ["лилась", "наливалась", "поливалась", "проливалась"],
    optionBases: ["литься", "наливаться", "поливаться", "проливаться"],
    correctIndex: 0,
    verbPair: "лилась — литься",
    correctExplanation: LIT_VERB_MAP["лить"]
  },
  {
    id: 38,
    sentence: "Он ... немного горячей воды в остывший суп.",
    translation: "Ha aggiunto (un po') d'acqua calda nella zuppa che si era raffreddata.",
    options: ["подлил", "налил", "вылил", "отлил"],
    optionBases: ["подлить", "налить", "вылить", "отлить"],
    correctIndex: 0,
    verbPair: "подлил — подливать",
    correctExplanation: LIT_VERB_MAP["подлить"]
  },
  {
    id: 39,
    sentence: "Молния ... всё небо ярким светом.",
    translation: "Il fulmine ha inondato (coperto di luce - figurato) tutto il cielo di luce intensa.",
    options: ["залила", "налила", "вылила", "пролила"],
    optionBases: ["залить", "налить", "вылить", "пролить"],
    correctIndex: 0,
    verbPair: "залила — заливать",
    correctExplanation: LIT_VERB_MAP["залить"]
  },
  {
    id: 40,
    sentence: "Мы ... масло из двигателя перед заменой на новое.",
    translation: "Abbiamo scaricato (fatto defluire) l'olio dal motore prima del cambio con quello nuovo.",
    options: ["слили", "налили", "разлили", "перелили"],
    optionBases: ["слить", "налить", "разлить", "перелить"],
    correctIndex: 0,
    verbPair: "слили — сливать",
    correctExplanation: LIT_VERB_MAP["слить"]
  }
];

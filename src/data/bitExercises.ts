import { Exercise } from '../types';
import { BRAT_VERB_MAP } from './bratExercises';

export const BIT_VERB_MAP: Record<string, string> = {
  "разбить": "(разбить — разбивать): si usa per indicare l'azione di rompere in pezzi qualcosa di fragile (разбить чашку, стекло), oppure per dividere qualcosa in gruppi o parti (разбить людей на группы), o sconfiggere un nemico (разбить врага).",
  "вбить": "(вбить — вбивать): significa conficcare o piantare qualcosa (come un chiodo) con forza in una superficie (вбить гвоздь в стену).",
  "забить": "(забить — забивать): indica il completamento di un'azione come segnare un gol (забить гол) o chiudere completamente qualcosa inchiodandolo (забить окно досками).",
  "отбить": "(отбить — отбивать): significa respingere (отбить атаку) o staccare un pezzo colpendolo (отбить ручку у чайника), oppure parare un colpo.",
  "выбить": "(выбить — выбивать): significa rimuovere qualcosa colpendolo (выбить ковёр) o cacciare via con la forza (выбить врага из города).",
  "побить": "(побить — побивать): si riferisce a colpire ripetutamente o rovinare molti oggetti (побить всю посуду), battere un record (побить рекорд), oppure battere/sconfiggere qualcuno in una competizione o scontro (побить соперника).",
  "перебить": "(перебить — перебивать): significa rompere tutto (перебить посуду) o interrompere qualcuno che parla (перебить собеседника).",
  "набить": "(набить — набивать): significa riempire o stipare qualcosa (набить портфель книгами) o foderare.",
  "пробить": "(пробить — пробивать): significa fare un buco attraverso qualcosa (пробить стену) o segnare un orario.",
  "сбить": "(сбить — сбивать): significa far cadere colpendolo (сбить самолёт) o confondere qualcuno (сбить с толку, сбиться с пути).",
  "убить": "(убить — убивать): significa togliere la vita o distruggere completamente.",
  "взбить": "(взбить — взбивать): significa montare o agitare per rendere soffice (взбить сливки, взбить подушку).",
  "прибить": "(прибить — прибивать): significa fissare con chiodi a qualcosa (прибить полку к стене) o schiacciare al suolo.",
  "добить": "(добить — добивать): significa finire di colpire o dare il colpo di grazia.",
  "отбиться": "(отбиться — отбиваться): significa difendersi/respingere un attacco (отбиться от врагов) o allontanarsi dal gruppo (отбиться от рук).",
  "сбиться": "(сбиться — сбиваться): significa perdere la strada o l'ordine (сбиться с пути, сбиться со счёта).",
  "добиться": "(добиться — добиваться): significa ottenere qualcosa dopo uno sforzo o una lotta (добиться успеха, добиться своего).",
  "забиться": "(забиться — забиваться): può indicare il cuore che batte forte (сердце забилось) o il nascondersi in un angolo.",
  "набиться": "(набиться — набиваться): significa infilarsi o ammassarsi in un luogo stretto (песок набился в обувь).",
  "пробиться": "(пробиться — пробиваться): farsi strada con fatica attraverso un ostacolo (пробиться сквозь толпу).",
};

export const BIT_EXERCISES: Exercise[] = [
  // 1-5: Classic breaking/damaging
  {
    id: 1,
    sentence: "Хулиганы ... окно в магазине.",
    translation: "I teppisti hanno rotto la finestra del negozio.",
    options: ["вбили", "разбили", "выбили", "отбили"],
    optionBases: ["вбить", "разбить", "выбить", "отбить"],
    correctIndex: 1,
    verbPair: "разбить — разбивать",
    correctExplanation: BIT_VERB_MAP["разбить"]
  },
  {
    id: 2,
    sentence: "В гневе он ... всю дорогую посуду в доме.",
    translation: "In preda all'ira ha rotto tutti i piatti costosi della casa.",
    options: ["забил", "перебил", "вбил", "пробил"],
    optionBases: ["забить", "перебить", "вбить", "пробить"],
    correctIndex: 1,
    verbPair: "перебить — перебивать",
    correctExplanation: BIT_VERB_MAP["перебить"]
  },
  {
    id: 3,
    sentence: "Осторожно! Не ... эту хрупкую вазу.",
    translation: "Attenzione! Non rompere questo fragile vaso.",
    options: ["разбей", "вбей", "сбей", "набей"],
    optionBases: ["разбить", "вбить", "сбить", "набить"],
    correctIndex: 0,
    verbPair: "разбить — разбивать",
    correctExplanation: BIT_VERB_MAP["разбить"]
  },
  {
    id: 4,
    sentence: "Во время града град ... урожай пшеницы.",
    translation: "Durante la grandinata, la grandine ha rovinato il raccolto di grano.",
    options: ["забил", "побил", "отбил", "выбил"],
    optionBases: ["забить", "побить", "отбил", "выбить"],
    correctIndex: 1,
    verbPair: "побить — побивать",
    correctExplanation: BIT_VERB_MAP["побить"]
  },
  {
    id: 5,
    sentence: "У чайника случайно ... носик.",
    translation: "Al bollitore è stato accidentalmente rotto il beccuccio.",
    options: ["вбили", "отбили", "сбили", "разбили"],
    optionBases: ["вбить", "отбить", "сбить", "разбить"],
    correctIndex: 1,
    verbPair: "отбить — отбивать",
    correctExplanation: BIT_VERB_MAP["отбить"]
  },
  // 6-10: Driving in, nails, walls
  {
    id: 6,
    sentence: "Отец ... гвоздь в стену, чтобы повесить картину.",
    translation: "Il padre ha conficcato un chiodo nel muro per appendere un quadro.",
    options: ["вбил", "набил", "отбил", "выбил"],
    optionBases: ["вбить", "набить", "отбить", "выбить"],
    correctIndex: 0,
    verbPair: "вбить — вбивать",
    correctExplanation: BIT_VERB_MAP["вбить"]
  },
  {
    id: 7,
    sentence: "Рабочие ... окно досками на зиму.",
    translation: "Gli operai hanno sbarrato la finestra con delle assi per l'inverno.",
    options: ["вбили", "забили", "пробили", "сбили"],
    optionBases: ["вбить", "забить", "пробить", "сбить"],
    correctIndex: 1,
    verbPair: "забить — забивать",
    correctExplanation: BIT_VERB_MAP["забить"]
  },
  {
    id: 8,
    sentence: "Снаряд ... огромную брешь в крепостной стене.",
    translation: "Il proiettile ha aperto un enorme squarcio nelle mura della fortezza.",
    options: ["пробил", "забил", "набил", "вбил"],
    optionBases: ["пробить", "забить", "набить", "вбить"],
    correctIndex: 0,
    verbPair: "пробить — пробивать",
    correctExplanation: BIT_VERB_MAP["пробить"]
  },
  {
    id: 9,
    sentence: "Он никак не мог ... этот старый костыль в землю.",
    translation: "Non riusciva in alcun modo a conficcare quel vecchio picchetto nel terreno.",
    options: ["забить", "вбить", "разбить", "взбить"],
    optionBases: ["забить", "вбить", "разбить", "взбить"],
    correctIndex: 1,
    verbPair: "вбить — вбивать",
    correctExplanation: BIT_VERB_MAP["вбить"]
  },
  {
    id: 10,
    sentence: "Нужно ... эту табличку к двери.",
    translation: "Bisogna inchiodare questa targa alla porta.",
    options: ["прибить", "набить", "вбить", "выбить"],
    optionBases: ["прибить", "набить", "вбить", "выбить"],
    correctIndex: 0,
    verbPair: "прибить — прибивать",
    correctExplanation: BIT_VERB_MAP["прибить"]
  },
  // 11-15:repelling, fighting
  {
    id: 11,
    sentence: "Армия героически ... атаку противника.",
    translation: "L'esercito ha respinto eroicamente l'attacco dell'avversario.",
    options: ["разбила", "отбила", "выбила", "сбила"],
    optionBases: ["разбить", "отбить", "выбить", "сбить"],
    correctIndex: 1,
    verbPair: "отбить — отбивать",
    correctExplanation: BIT_VERB_MAP["отбить"]
  },
  {
    id: 12,
    sentence: "Войска ... врага из стратегически важного города.",
    translation: "Le truppe hanno cacciato il nemico dalla città strategicamente importante.",
    options: ["выбили", "разбили", "отбили", "перебили"],
    optionBases: ["выбить", "разбить", "отбить", "перебить"],
    correctIndex: 0,
    verbPair: "выбить — выбивать",
    correctExplanation: BIT_VERB_MAP["выбить"]
  },
  {
    id: 13,
    sentence: "Наши войска полностью ... вражескую дивизию.",
    translation: "Le nostre truppe hanno completamente sconfitto la divisione nemica.",
    options: ["разбили", "сбили", "набили", "вбили"],
    optionBases: ["разбить", "сбить", "набить", "вбить"],
    correctIndex: 0,
    verbPair: "разбить — разбивать",
    correctExplanation: BIT_VERB_MAP["разбить"]
  },
  {
    id: 14,
    sentence: "Птица едва ... от нападения кошки.",
    translation: "L'uccello è appena riuscito a difendersi dall'attacco del gatto.",
    options: ["отбилась", "вбилась", "сбилась", "добилась"],
    optionBases: ["отбиться", "вбиться", "сбиться", "добиться"],
    correctIndex: 0,
    verbPair: "отбиться — отбиваться",
    correctExplanation: BIT_VERB_MAP["отбиться"]
  },
  {
    id: 15,
    sentence: "Охотник только ранил волка, но не ... его.",
    translation: "Il cacciatore ha solo ferito il lupo, ma non lo ha ucciso.",
    options: ["добил", "убил", "забил", "вбил"],
    optionBases: ["добить", "убить", "забить", "вбить"],
    correctIndex: 1,
    verbPair: "убить — убивать",
    correctExplanation: BIT_VERB_MAP["убить"]
  },
  // 16-20: sports and goals
  {
    id: 16,
    sentence: "Нападающий в последний момент ... решающий гол.",
    translation: "L'attaccante ha segnato il gol decisivo all'ultimo momento.",
    options: ["отбил", "забил", "выбил", "пробил"],
    optionBases: ["отбить", "забить", "выбить", "пробить"],
    correctIndex: 1,
    verbPair: "забить — забивать",
    correctExplanation: BIT_VERB_MAP["забить"]
  },
  {
    id: 17,
    sentence: "Вратарь уверенно ... мяч, летевший в угол ворот.",
    translation: "Il portiere ha parato con sicurezza la palla che volava verso l'angolo della porta.",
    options: ["забил", "отбил", "вбил", "набил"],
    optionBases: ["забить", "отбить", "вбить", "набить"],
    correctIndex: 1,
    verbPair: "отбить — отбивать",
    correctExplanation: BIT_VERB_MAP["отбить"]
  },
  {
    id: 18,
    sentence: "Спортсмен ... мяч далеко за пределы площадки.",
    translation: "L'atleta ha calciato la palla lontano fuori dal campo.",
    options: ["выбил", "сбил", "разбил", "пробил"],
    optionBases: ["выбить", "сбить", "разбить", "пробить"],
    correctIndex: 0,
    verbPair: "выбить — выбивать",
    correctExplanation: BIT_VERB_MAP["выбить"]
  },
  {
    id: 19,
    sentence: "Судья ... штрафной удар.",
    translation: "L'arbitro ha fatto battere il calcio di punizione.",
    options: ["пробил", "забил", "вбил", "отбил"],
    optionBases: ["пробить", "забить", "вбить", "отбить"],
    correctIndex: 0,
    verbPair: "пробить — пробивать",
    correctExplanation: BIT_VERB_MAP["пробить"]
  },
  {
    id: 20,
    sentence: "Боксёр ... своего соперника в первом раунде.",
    translation: "Il pugile ha battuto il suo avversario al primo round.",
    options: ["побил", "забил", "разбил", "сбил"],
    optionBases: ["побить", "забить", "разбить", "сбить"],
    correctIndex: 0,
    verbPair: "побить — побивать",
    correctExplanation: BIT_VERB_MAP["побить"]
  },
  // 21-25: filling, stuffing, whipping
  {
    id: 21,
    sentence: "Мать ... пушистую подушку перед сном.",
    translation: "La madre ha sprimacciato il soffice cuscino prima di dormire.",
    options: ["взбила", "набила", "сбила", "прибила"],
    optionBases: ["взбить", "набить", "сбить", "прибить"],
    correctIndex: 0,
    verbPair: "взбить — взбивать",
    correctExplanation: BIT_VERB_MAP["взбить"]
  },
  {
    id: 22,
    sentence: "Путешественник плотно ... рюкзак вещами.",
    translation: "Il viaggiatore ha riempito fittamente lo zaino di cose.",
    options: ["набил", "забил", "вбил", "выбил"],
    optionBases: ["набить", "забить", "вбить", "выбить"],
    correctIndex: 0,
    verbPair: "набить — набивать",
    correctExplanation: BIT_VERB_MAP["набить"]
  },
  {
    id: 23,
    sentence: "К завтраку бабушка ... яичные белки.",
    translation: "Per colazione la nonna ha montato gli albumi.",
    options: ["взбила", "сбила", "разбила", "набила"],
    optionBases: ["взбить", "сбить", "разбить", "набить"],
    correctIndex: 0,
    verbPair: "взбить — взбивать",
    correctExplanation: BIT_VERB_MAP["взбить"]
  },
  {
    id: 24,
    sentence: "Трубка была доверху ... табаком.",
    translation: "La pipa era riempita fino all'orlo di tabacco.",
    options: ["набита", "вбита", "разбита", "сбита"],
    optionBases: ["набить", "вбить", "разбить", "сбить"],
    correctIndex: 0,
    verbPair: "набить — набивать",
    correctExplanation: BIT_VERB_MAP["набить"]
  },
  {
    id: 25,
    sentence: "Он ... в подушку перья.",
    translation: "Ha imbottito il cuscino di piume.",
    options: ["набил", "забил", "взбил", "вбил"],
    optionBases: ["набить", "забить", "взбить", "вбить"],
    correctIndex: 0,
    verbPair: "набить — набивать",
    correctExplanation: BIT_VERB_MAP["набить"]
  },
  // 26-30: falling, confusing, interrupting
  {
    id: 26,
    sentence: "Маленький мальчик ... с пути в густом лесу.",
    translation: "Il bambino si è smarrito nel fitto bosco.",
    options: ["отбился", "сбился", "вбился", "разбился"],
    optionBases: ["отбиться", "сбиться", "вбиться", "разбиться"],
    correctIndex: 1,
    verbPair: "сбиться — сбиваться",
    correctExplanation: BIT_VERB_MAP["сбиться"]
  },
  {
    id: 27,
    sentence: "Зенитчики ... вражеский самолёт.",
    translation: "L'artiglieria contraerea ha abbattuto l'aereo nemico.",
    options: ["сбили", "выбили", "отбили", "пробили"],
    optionBases: ["сбить", "выбить", "отбить", "пробить"],
    correctIndex: 0,
    verbPair: "сбить — сбивать",
    correctExplanation: BIT_VERB_MAP["сбить"]
  },
  {
    id: 28,
    sentence: "Пожалуйста, не ... меня, когда я рассказываю.",
    translation: "Per favore, non interrompermi mentre sto raccontando.",
    options: ["разбивай", "перебивай", "отбивай", "вбивай"],
    optionBases: ["разбить", "перебить", "отбить", "вбить"],
    correctIndex: 1,
    verbPair: "перебить — перебивать",
    correctExplanation: BIT_VERB_MAP["перебить"]
  },
  {
    id: 29,
    sentence: "Ученик разволновался и ... со счёта.",
    translation: "Lo studente si è emozionato e ha perso il conto.",
    options: ["сбился", "отбился", "разбился", "вбился"],
    optionBases: ["сбиться", "отбиться", "разбиться", "вбиться"],
    correctIndex: 0,
    verbPair: "сбиться — сбиваться",
    correctExplanation: BIT_VERB_MAP["сбиться"]
  },
  {
    id: 30,
    sentence: "Сильный ветер ... все яблоки с яблони.",
    translation: "Il forte vento ha fatto cadere tutte le mele dal melo.",
    options: ["сбил", "набил", "выбил", "вбил"],
    optionBases: ["сбить", "набить", "выбить", "вбить"],
    correctIndex: 0,
    verbPair: "сбить — сбивать",
    correctExplanation: BIT_VERB_MAP["сбить"]
  },
  // 31-35: cleaning and maintenance
  {
    id: 31,
    sentence: "Весной полагается ... ковры на улице.",
    translation: "In primavera si usa battere i tappeti all'aperto.",
    options: ["выбивать", "отбивать", "разбивать", "вбивать"],
    optionBases: ["выбить", "отбить", "разбить", "вбить"],
    correctIndex: 0,
    verbPair: "выбить — выбивать",
    correctExplanation: BIT_VERB_MAP["выбить"]
  },
  {
    id: 32,
    sentence: "Он долго ... пыль из старого кресла.",
    translation: "Ha battuto a lungo la polvere dalla vecchia poltrona.",
    options: ["выбивал", "пробивал", "набивал", "сбивал"],
    optionBases: ["выбить", "пробить", "набить", "сбить"],
    correctIndex: 0,
    verbPair: "выбить — выбивать",
    correctExplanation: BIT_VERB_MAP["выбить"]
  },
  {
    id: 33,
    sentence: "В обуви во время прогулки по пляжу ... песок.",
    translation: "Nelle scarpe durante la passeggiata in spiaggia è entrata la sabbia.",
    options: ["набился", "вбился", "сбился", "пробился"],
    optionBases: ["набиться", "вбиться", "сбиться", "пробиться"],
    correctIndex: 0,
    verbPair: "набиться — набиваться",
    correctExplanation: BIT_VERB_MAP["набиться"]
  },
  {
    id: 34,
    sentence: "Нужно ... пыль с этой одежды.",
    translation: "Bisogna scuotere la polvere da questi vestiti.",
    options: ["выбить", "разбить", "отбить", "вбить"],
    optionBases: ["выбить", "разбить", "отбить", "вбить"],
    correctIndex: 0,
    verbPair: "выбить — выбивать",
    correctExplanation: BIT_VERB_MAP["выбить"]
  },
  {
    id: 35,
    sentence: "Ребёнок ... коленку, когда упал с велосипеда.",
    translation: "Il bambino si è sbucciato il ginocchio cadendo dalla bicicletta.",
    options: ["разбил", "вбил", "пробил", "набил"],
    optionBases: ["разбить", "вбить", "пробить", "набить"],
    correctIndex: 0,
    verbPair: "разбить — разбивать",
    correctExplanation: BIT_VERB_MAP["разбить"]
  },
  // 36-40: Metaphorical and others
  {
    id: 36,
    sentence: "От волнения у неё ... сердце.",
    translation: "Per l'emozione il cuore ha iniziato a battere forte.",
    options: ["вбилось", "забилось", "разбилось", "пробилось"],
    optionBases: ["вбиться", "забиться", "разбиться", "пробиться"],
    correctIndex: 1,
    verbPair: "забиться — забиваться",
    correctExplanation: BIT_VERB_MAP["забиться"]
  },
  {
    id: 37,
    sentence: "Телефонный разговор совершенно ... его из колеи.",
    translation: "La telefonata lo ha completamente destabilizzato (fatto uscire dai binari).",
    options: ["разбил", "выбил", "отбил", "сбил"],
    optionBases: ["разбить", "выбить", "отбить", "сбить"],
    correctIndex: 1,
    verbPair: "выбить — выбивать",
    correctExplanation: BIT_VERB_MAP["выбить"]
  },
  {
    id: 38,
    sentence: "Сквозь толпу зрителей к сцене ... молодая журналистка.",
    translation: "Una giovane giornalista si è fatta strada verso il palco tra la folla di spettatori.",
    options: ["пробилась", "отбилась", "сбилась", "вбилась"],
    optionBases: ["пробиться", "отбиться", "сбиться", "вбиться"],
    correctIndex: 0,
    verbPair: "пробиться — пробиваться",
    correctExplanation: BIT_VERB_MAP["пробиться"]
  },
  {
    id: 39,
    sentence: "Он наконец ... своего и получил разрешение.",
    translation: "Alla fine ha ottenuto quello che voleva e ha ricevuto il permesso.",
    options: ["добился", "сбился", "отбился", "вбился"],
    optionBases: ["добиться", "сбиться", "отбиться", "вбиться"],
    correctIndex: 0,
    verbPair: "добиться — добиваться",
    correctExplanation: BIT_VERB_MAP["добиться"]
  },
  {
    id: 40,
    sentence: "Медсестра ... лекарство в шприц.",
    translation: "L'infermiera ha aspirato il medicinale nella siringa.",
    options: ["набила", "забила", "вбила", "набрала"],
    optionBases: ["набить", "забить", "вбить", "набрать"],
    correctIndex: 3,
    verbPair: "набрать — набирать",
    correctExplanation: BRAT_VERB_MAP["набрать"]
  }
];

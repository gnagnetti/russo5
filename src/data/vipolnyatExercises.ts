import { Exercise } from '../types';

export const VIPOLNYAT_VERB_MAP: Record<string, string> = {
  "выполнить": "(выполнить — выполнять): significa portare a termine un compito, un piano o un dovere (выполнить задание, выполнить обещание).",
  "исполнить": "(исполнить — исполнять): significa eseguire un ordine, un desiderio o una composizione musicale (исполнить приказание, исполнить мечту, исполнить арию). Ha un tono più solenne.",
  "заполнить": "(заполнить — заполнять): significa riempire uno spazio fisicamente o completare un modulo (заполнить анкету, заполнить стакан).",
  "наполнить": "(наполнить — наполнять): significa rendere pieno, saturare (наполнить корзину фруктами, наполнить жизнь смыслом).",
  "переполнить": "(переполнить — переполнять): significa traboccare, riempire oltre il limite (переполнить чашу терпения, зал был переполнен).",
  "дополнить": "(дополнить — дополнять): significa aggiungere qualcosa per rendere completo (дополнить ответ, дополнить коллекцию).",
  "пополнить": "(пополнить — пополнять): significa rifornire o reintegrare una scorta (пополнить счет телефона, пополнить запасы).",
  "уполномочить": "dare il potere o l'autorità di fare qualcosa (уполномочить представителя).",
  "восполнить": "(восполнить — восполнять): significa colmare una lacuna o compensare una mancanza (восполнить пробелы в знаниях).",
  "справиться": "riuscire a completare un lavoro difficile (справиться с работой).",
  "осуществить": "mettere in atto, realizzare un progetto o un'idea (осуществить поджог - negativo, осуществить план - neutro).",
  "соблюсти": "osservare, rispettare una regola o un protocollo (соблюсти формальности)."
};

export const VIPOLNYAT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Рабочий должен ... план до конца месяца.",
    translation: "L'operaio deve completare il piano entro la fine del mese.",
    options: ["выполнить", "исполнить", "заполнить", "наполнить"],
    optionBases: ["выполнить", "исполнить", "заполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  },
  {
    id: 2,
    sentence: "Певец ... известную арию из оперы.",
    translation: "Il cantante ha eseguito una famosa aria dell'opera.",
    options: ["выполнил", "исполнил", "заполнил", "дополнил"],
    optionBases: ["выполнить", "исполнить", "заполнить", "дополнить"],
    correctIndex: 1,
    verbPair: "исполнить — исполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["исполнить"]
  },
  {
    id: 3,
    sentence: "Пожалуйста, ... эту анкету и передайте её секретарю.",
    translation: "Per favore, compili questo modulo e lo consegni al segretario.",
    options: ["заполните", "наполните", "дополните", "выполните"],
    optionBases: ["заполнить", "наполнит", "дополнить", "выполнить"],
    correctIndex: 0,
    verbPair: "заполнить — заполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["заполнить"]
  },
  {
    id: 4,
    sentence: "Радость ... её сердце, когда она увидела детей.",
    translation: "La gioia le riempì il cuore quando vide i bambini.",
    options: ["выполнила", "исполнила", "наполнила", "пополнила"],
    optionBases: ["выполнить", "исполнить", "наполнить", "пополнить"],
    correctIndex: 2,
    verbPair: "наполнить — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 5,
    sentence: "Нам нужно ... запасы продовольствия.",
    translation: "Dobbiamo rifornire le scorte di cibo.",
    options: ["заполнить", "пополнить", "дополнить", "выполнить"],
    optionBases: ["заполнить", "пополнить", "дополнить", "выполнить"],
    correctIndex: 1,
    verbPair: "пополнить — пополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["пополнить"]
  },
  {
    id: 6,
    sentence: "Оратор ... свою речь новыми фактами.",
    translation: "L'oratore ha integrato il suo discorso con nuovi fatti.",
    options: ["дополнил", "заполнил", "наполнил", "исполнил"],
    optionBases: ["дополнитель", "заполнить", "наполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "дополнить — дополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["дополнить"]
  },
  {
    id: 7,
    sentence: "Зал был ... зрителями до отказа.",
    translation: "La sala era stracolma di spettatori fino all'inverosim.",
    options: ["заполнен", "переполнен", "дополнен", "исполнен"],
    optionBases: ["заполнить", "переполнить", "дополнить", "исполнить"],
    correctIndex: 1,
    verbPair: "переполнить — переполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["переполнить"]
  },
  {
    id: 8,
    sentence: "Студент старался ... пробелы в своих знаниях.",
    translation: "Lo studente cercava di colmare le lacune nelle sue conoscenze.",
    options: ["восполнить", "исполнить", "выполнить", "заполнить"],
    optionBases: ["восполнить", "исполнить", "выполнить", "заполнить"],
    correctIndex: 0,
    verbPair: "восполнить — восполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["восполнить"]
  },
  {
    id: 9,
    sentence: "Солдат беспрекословно ... приказание командира.",
    translation: "Il soldato eseguì senza esitazione l'ordine del comandante.",
    options: ["выполнил", "исполнил", "заполнил", "наполнил"],
    optionBases: ["выполнить", "исполнить", "заполнить", "наполнить"],
    correctIndex: 1,
    verbPair: "исполнить — исполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["исполнить"]
  },
  {
    id: 10,
    sentence: "Обещание было ... вовремя.",
    translation: "La promessa è stata mantenuta (completata) in tempo.",
    options: ["выполнено", "исполнено", "заполнено", "наполнено"],
    optionBases: ["выполнить", "исполнить", "заполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  },
  {
    id: 11,
    sentence: "Он ... свою мечту и стал врачом.",
    translation: "Ha realizzato il suo sogno ed è diventato medico.",
    options: ["выполнил", "исполнил", "дополнил", "заполнил"],
    optionBases: ["выполнить", "исполнить", "дополнил", "заполнить"],
    correctIndex: 1,
    verbPair: "исполнить — исполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["исполнить"]
  },
  {
    id: 12,
    sentence: "Нам нужно ... стакан водой.",
    translation: "Dobbiamo riempire il bicchiere d'acqua.",
    options: ["наполнить", "выполнить", "исполнить", "переполнить"],
    optionBases: ["наполнить", "выполнить", "исполнить", "переполнить"],
    correctIndex: 0,
    verbPair: "наполнить — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 13,
    sentence: "Директор ... меня вести переговоры.",
    translation: "Il direttore mi ha delegato (dato autorità) a condurre le trattative.",
    options: ["уполномочил", "выполнил", "исполнил", "дополнил"],
    optionBases: ["уполномочить", "выполнить", "исполнить", "дополнил"],
    correctIndex: 0,
    verbPair: "уполномочить",
    correctExplanation: VIPOLNYAT_VERB_MAP["уполномочить"]
  },
  {
    id: 14,
    sentence: "Вы должны ... все правила безопасности.",
    translation: "Dovete rispettare (osservare) tutte le regole di sicurezza.",
    options: ["соблюсти", "выполнить", "исполнить", "заполнить"],
    optionBases: ["соблюсти", "выполнить", "исполнить", "заполнить"],
    correctIndex: 0,
    verbPair: "соблюсти — соблюдать",
    correctExplanation: VIPOLNYAT_VERB_MAP["соблюсти"]
  },
  {
    id: 15,
    sentence: "Я должен ... баланс своей карты.",
    translation: "Devo ricaricare (rifornire) il saldo della mia carta.",
    options: ["пополнить", "заполниь", "дополнить", "выполнить"],
    optionBases: ["пополнить", "заполнить", "дополнить", "выполнить"],
    correctIndex: 0,
    verbPair: "пополнить — пополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["пополнить"]
  },
  {
    id: 16,
    sentence: "Артист вдохновенно ... роль Гамлета.",
    translation: "L'attore ha interpretato (eseguito) con ispirazione il ruolo di Amleto.",
    options: ["исполнил", "выполнил", "заполнил", "наполнил"],
    optionBases: ["исполнить", "выполнить", "заполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "исполнить — исполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["исполнить"]
  },
  {
    id: 17,
    sentence: "Он ... комнату светом, открыв шторы.",
    translation: "Ha riempito la stanza di luce aprendo le tende.",
    options: ["наполнил", "заполнил", "выполнил", "дополнил"],
    optionBases: ["наполнить", "заполнить", "выполнить", "дополнил"],
    correctIndex: 0,
    verbPair: "наполнить — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 18,
    sentence: "Работу нужно ... качественно и в срок.",
    translation: "Il lavoro deve essere svolto in modo qualitativo ed entro i termini.",
    options: ["выполнить", "исполнить", "заполнить", "наполнить"],
    optionBases: ["выполнить", "исполнить", "заполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  },
  {
    id: 19,
    sentence: "Мы ... нашу коллекцию редких марок.",
    translation: "Abbiamo arricchito (integrato) la nostra collezione di francobolli rari.",
    options: ["дополнили", "выполнили", "заполнили", "пополнили"],
    optionBases: ["дополнить", "выполнить", "заполнить", "пополнить"],
    correctIndex: 3,
    verbPair: "пополнить — пополнять",
    correctExplanation: "Qui 'пополнить' è più adatto per un aumento di quantità/scorta, mentre 'дополнить' per aggiungere un dettaglio mancante."
  },
  {
    id: 20,
    sentence: "Это событие ... его жизнь новым смыслом.",
    translation: "Questo evento ha riempito la sua vita di un nuovo significato.",
    options: ["наполнило", "выполнило", "исполнило", "заполнило"],
    optionBases: ["наполнить", "выполнить", "исполнить", "заполнить"],
    correctIndex: 0,
    verbPair: "наполнить — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 21,
    sentence: "Пожалуйста, ... этот бланк заказа.",
    translation: "Per favore, compili questo modulo d'ordine.",
    options: ["заполните", "наполните", "дополните", "выполните"],
    optionBases: ["заполнить", "наполнить", "дополнить", "выполнить"],
    correctIndex: 0,
    verbPair: "заполнить — заполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["заполнить"]
  },
  {
    id: 22,
    sentence: "Его терпение было ..., и он закричал.",
    translation: "La sua pazienza era esaurita (riempita oltre il limite), e gridò.",
    options: ["переполнено", "наполнено", "заполнено", "выполнено"],
    optionBases: ["переполнить", "наполнить", "заполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "переполнить — переполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["переполнить"]
  },
  {
    id: 23,
    sentence: "Инженер ... сложный технический проект.",
    translation: "L'ingegnere ha portato a termine un complesso progetto tecnico.",
    options: ["выполнил", "исполнил", "заполнил", "дополнил"],
    optionBases: ["выполнить", "исполнить", "заполнить", "дополнил"],
    correctIndex: 0,
    verbPair: "выполнил — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  },
  {
    id: 24,
    sentence: "Она смогла ... потерю близкого человека только через годы.",
    translation: "È riuscita a compensare (colmare) la perdita della persona cara solo dopo anni.",
    options: ["восполнить", "наполнить", "выполнить", "исполнить"],
    optionBases: ["восполнить", "наполнить", "выполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "восполнить — восполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["восполнить"]
  },
  {
    id: 25,
    sentence: "Оркестр великолепно ... Девятую симфонию Бетховена.",
    translation: "L'orchestra ha eseguito magnificamente la Nona sinfonia di Beethoven.",
    options: ["исполнил", "выполнил", "заполнил", "наполнил"],
    optionBases: ["исполнить", "выполнить", "заполнить", "наполнил"],
    correctIndex: 0,
    verbPair: "исполнить — исполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["исполнить"]
  },
  {
    id: 26,
    sentence: "Вам нужно ... свой словарный запас.",
    translation: "Dovete arricchire (rifornire) il vostro vocabolario.",
    options: ["пополнить", "заполнить", "наполнить", "выполнить"],
    optionBases: ["пополнить", "заполнить", "наполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "пополнить — пополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["пополнить"]
  },
  {
    id: 27,
    sentence: "Книга ... мои знания об истории Древнего Рима.",
    translation: "Il libro ha integrato le mie conoscenze sulla storia dell'Antica Roma.",
    options: ["дополнила", "выполнила", "заполнила", "исполнила"],
    optionBases: ["дополнить", "выполнить", "заполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "дополнить — дополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["дополнить"]
  },
  {
    id: 28,
    sentence: "Договор должен быть ... обеими сторонами.",
    translation: "Il contratto deve essere adempiuto (completato) da entrambe le parti.",
    options: ["выполнен", "заполнен", "наполнен", "пополнен"],
    optionBases: ["выполнить", "заполнить", "наполнить", "пополнить"],
    correctIndex: 0,
    verbPair: "выполнил — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  },
  {
    id: 29,
    sentence: "Он ... своё желание и отправился в кругосветное путешествие.",
    translation: "Ha esaudito (eseguito) il suo desiderio ed è partito per un viaggio intorno al mondo.",
    options: ["исполнил", "выполнил", "заполнил", "дополнил"],
    optionBases: ["исполнить", "выполнить", "заполнить", "дополнил"],
    correctIndex: 0,
    verbPair: "исполнить — исполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["исполнить"]
  },
  {
    id: 30,
    sentence: "Утро было ... пением птиц.",
    translation: "Il mattino era saturo del canto degli uccelli.",
    options: ["наполнено", "заполнено", "выполнено", "исполнено"],
    optionBases: ["наполнить", "заполнить", "выполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "наполнено — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 31,
    sentence: "Я должен ... свой профиль на сайте.",
    translation: "Devo completare (riempire i campi) il mio profilo sul sito.",
    options: ["заполнить", "дополнить", "выполнить", "исполнить"],
    optionBases: ["заполнить", "дополнить", "выполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "заполнить — заполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["заполнить"]
  },
  {
    id: 32,
    sentence: "Вода ... всю долину после ливня.",
    translation: "L'acqua ha riempito tutta la valle dopo l'acquazzone.",
    options: ["заполнила", "наполнила", "выполнила", "переполнила"],
    optionBases: ["заполнить", "наполнить", "выполнить", "переполнить"],
    correctIndex: 0,
    verbPair: "заполнила — заполнять",
    correctExplanation: "Qui si intende uno spazio fisico che viene occupato."
  },
  {
    id: 33,
    sentence: "Астронавты успешно ... программу полета.",
    translation: "Gli astronauti hanno portato a termine con successo il programma di volo.",
    options: ["выполнили", "исполнили", "заполнили", "наполнили"],
    optionBases: ["выполнить", "исполнить", "заполнить", "наполнили"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  },
  {
    id: 34,
    sentence: "Судья ... закон и вынес справедливый приговор.",
    translation: "Il giudice ha rispettato (osservato) la legge ed emesso una sentenza giusta.",
    options: ["соблюл", "выполнил", "исполнил", "заполнил"],
    optionBases: ["соблюсти", "выполнить", "исполнить", "заполнить"],
    correctIndex: 0,
    verbPair: "соблюсти — соблюдать",
    correctExplanation: VIPOLNYAT_VERB_MAP["соблюсти"]
  },
  {
    id: 35,
    sentence: "Мы решили ... наши запасы воды.",
    translation: "Abbiamo deciso di rifornire le nostre riserve d'acqua.",
    options: ["пополнить", "наполнить", "заполнить", "выполнить"],
    optionBases: ["пополнить", "наполнить", "заполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "пополнить — пополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["пополнить"]
  },
  {
    id: 36,
    sentence: "Его слова ... меня надеждой.",
    translation: "Le sue parole mi hanno riempito di speranza.",
    options: ["наполнили", "заполнили", "выполнили", "исполнили"],
    optionBases: ["наполнить", "заполнили", "выполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "наполнить — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 37,
    sentence: "Он ... обязанности начальника отдела в его отсутствие.",
    translation: "Ha svolto le mansioni di capo reparto durante la sua assenza.",
    options: ["выполнял", "исполнял", "заполнял", "наполнял"],
    optionBases: ["выполнять", "исполнять", "заполнять", "наполнять"],
    correctIndex: 1,
    verbPair: "исполнял — исполнять",
    correctExplanation: "Per doveri o funzioni ufficiali si usa spesso 'исполнять обязанности'."
  },
  {
    id: 38,
    sentence: "Пожалуйста, ... этот текст примерами.",
    translation: "Per favore, integri questo testo con degli esempi.",
    options: ["дополните", "заполните", "наполните", "выполните"],
    optionBases: ["дополнить", "заполнить", "наполнить", "выполнить"],
    correctIndex: 0,
    verbPair: "дополнить — дополнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["дополнить"]
  },
  {
    id: 39,
    sentence: "Корзина была ... спелыми яблоками.",
    translation: "Il cesto era pieno di mele mature.",
    options: ["наполнена", "заполнена", "выполнена", "исполнена"],
    optionBases: ["наполнить", "заполнить", "выполнить", "исполнить"],
    correctIndex: 0,
    verbPair: "наполнена — наполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["наполнить"]
  },
  {
    id: 40,
    sentence: "Команда ... свою часть работы.",
    translation: "La squadra ha completato la sua parte di lavoro.",
    options: ["выполнила", "исполнила", "заполнила", "наполнила"],
    optionBases: ["выполнить", "исполнить", "заполнить", "наполнить"],
    correctIndex: 0,
    verbPair: "выполнить — выполнять",
    correctExplanation: VIPOLNYAT_VERB_MAP["выполнить"]
  }
];

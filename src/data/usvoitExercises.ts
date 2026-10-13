import { Exercise } from '../types';

export const USVOIT_VERB_MAP: Record<string, string> = {
  "усвоить": "(усваивать — усвоить): significa assimilare bene, imparare a fondo (очередное правило) o fare propria un'abitudine.",
  "освоить": "(осваивать — освоить): significa padroneggiare una nuova tecnologia (новую технику), una professione o colonizzare territori (новые земли).",
  "освоиться": "(осваиваться — освоиться): significa ambientarsi, sentirsi a proprio agio in una nuova situazione o luogo (с обстановкой).",
  "присвоить": "(присваивать — присвоить): significa appropriarsi di qualcosa (обычно чужого) o conferire un titolo/rango (звание капитана).",
};

export const USVOIT_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Студент за один месяц ... все правила грамматики.",
    translation: "Lo studente ha assimilato tutte le regole di grammatica in un solo mese.",
    options: ["усвоил", "освоил", "присвоил", "освоился"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "усвоить — усваивать",
    correctExplanation: USVOIT_VERB_MAP["усвоить"]
  },
  {
    id: 2,
    sentence: "За два месяца рабочий ... новую технологию производства.",
    translation: "In due mesi l'operaio ha padroneggiato la nuova tecnologia di produzione.",
    options: ["освоил", "усвоил", "присвоил", "освоился"],
    optionBases: ["освоить", "усвоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "освоить — осваивать",
    correctExplanation: USVOIT_VERB_MAP["освоить"]
  },
  {
    id: 3,
    sentence: "Новый сотрудник быстро ... в коллективе.",
    translation: "Il nuovo dipendente si è ambientato velocemente nel collettivo.",
    options: ["освоился", "освоил", "усвоил", "присвоил"],
    optionBases: ["освоиться", "освоить", "усвоить", "присвоить"],
    correctIndex: 0,
    verbPair: "освоиться — осваиваться",
    correctExplanation: USVOIT_VERB_MAP["освоиться"]
  },
  {
    id: 4,
    sentence: "Командующему ... звание генерала.",
    translation: "Al comandante è stato conferito il grado di generale.",
    options: ["присвоили", "освоили", "усвоили", "освоились"],
    optionBases: ["присвоить", "освоить", "усвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "присвоить — присваивать",
    correctExplanation: USVOIT_VERB_MAP["присвоить"]
  },
  {
    id: 5,
    sentence: "Мальчик всегда старался ... привычки своего старшего брата.",
    translation: "Il bambino ha sempre cercato di fare proprie (assimilare) le abitudini del fratello maggiore.",
    options: ["усвоить", "освоить", "присвоить", "освоиться"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "усвоить — усваивать",
    correctExplanation: USVOIT_VERB_MAP["усвоить"]
  },
  {
    id: 6,
    sentence: "В 70-е годы в Сибири начали ... нефтяные богатства.",
    translation: "Negli anni '70 in Siberia hanno iniziato a sfruttare (padroneggiare/colonizzare) le ricchezze petrolifere.",
    options: ["осваивать", "усваивать", "присваивать", "осваиваться"],
    optionBases: ["освоить", "усвоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "осваивать — освоить",
    correctExplanation: USVOIT_VERB_MAP["освоить"]
  },
  {
    id: 7,
    sentence: "Мошенник пытался ... государственное имущество.",
    translation: "Il truffatore cercava di appropriarsi della proprietà statale.",
    options: ["присвоить", "усвоить", "освоить", "освоиться"],
    optionBases: ["присвоить", "усвоить", "освоить", "освоиться"],
    correctIndex: 0,
    verbPair: "присвоить — присваивать",
    correctExplanation: USVOIT_VERB_MAP["присвоить"]
  },
  {
    id: 8,
    sentence: "Через несколько минут страх прошёл, и он совершенно ... .",
    translation: "Dopo pochi minuti la paura è passata e lui si è ambientato (sentito a suo agio) completamente.",
    options: ["освоился", "освоил", "усвоил", "присвоил"],
    optionBases: ["освоиться", "освоить", "усвоить", "присвоить"],
    correctIndex: 0,
    verbPair: "освоиться — осваиваться",
    correctExplanation: USVOIT_VERB_MAP["освоиться"]
  },
  {
    id: 9,
    sentence: "Нужно ... одну истину: без труда ничего не добьёшься.",
    translation: "Bisogna assimilare una verità: senza fatica non si ottiene nulla.",
    options: ["усвоить", "освоить", "присвоить", "освоиться"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "усвоить — усваивать",
    correctExplanation: USVOIT_VERB_MAP["усвоить"]
  },
  {
    id: 10,
    sentence: "Молодой лётчик быстро ... управление вертолётом.",
    translation: "Il giovane pilota ha imparato (padroneggiato) velocemente il comando dell'elicottero.",
    options: ["освоил", "усвоил", "присвоил", "освоился"],
    optionBases: ["освоить", "усвоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "освоить — осваивать",
    correctExplanation: USVOIT_VERB_MAP["освоить"]
  },
  {
    id: 11,
    sentence: "Директор школы хотел ... себе чужие заслуги.",
    translation: "Il direttore della scuola voleva appropriarsi dei meriti altrui.",
    options: ["присвоить", "усвоить", "освоить", "освоиться"],
    optionBases: ["присвоить", "усвоить", "освоить", "освоиться"],
    correctIndex: 0,
    verbPair: "присвоить — присваивать",
    correctExplanation: USVOIT_VERB_MAP["присвоить"]
  },
  {
    id: 12,
    sentence: "После переезда в другой город дети долго ... в новой школе.",
    translation: "Dopo il trasferimento in un'altra città, i bambini si sono ambientati a lungo nella nuova scuola.",
    options: ["осваивались", "усваивались", "присваивались", "присваивали"],
    optionBases: ["освоиться", "усвоить", "присвоить", "присвоить"],
    correctIndex: 0,
    verbPair: "осваиваться — освоиться",
    correctExplanation: USVOIT_VERB_MAP["освоиться"]
  },
  {
    id: 13,
    sentence: "Учитель похвалил ребят за то, что они хорошо ... новый материал.",
    translation: "L'insegnante ha lodato i ragazzi perché hanno assimilato bene il nuovo materiale.",
    options: ["усвоили", "освоили", "присвоили", "освоились"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "усвоить — усваивать",
    correctExplanation: USVOIT_VERB_MAP["усвоить"]
  },
  {
    id: 14,
    sentence: "Государству принадлежит значительная часть акций этой ... компании.",
    translation: "Allo stato appartiene una parte significativa delle azioni di questa compagnia (rif. освоить/считается/присвоить - qui il senso è padroneggiare risorse).",
    options: ["осваивающей", "усваивающей", "присваивающей", "осваивающейся"],
    optionBases: ["освоить", "усвоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "осваивать (risorse) — освоить",
    correctExplanation: USVOIT_VERB_MAP["освоить"]
  },
  {
    id: 15,
    sentence: "Писатель часто ... в своих произведениях мысли известных философов.",
    translation: "Lo scrittore spesso faceva proprie (assimilava/padroneggiava) nelle sue opere le riflessioni di celebri filosofi.",
    options: ["усваивал", "осваивал", "присваивал", "осваивался"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "усваивать — усвоить",
    correctExplanation: USVOIT_VERB_MAP["усвоить"]
  },
  {
    id: 16,
    sentence: "Организации ... имя выдающегося учёного.",
    translation: "All'organizzazione è stato conferito il nome di un eminente scienziato.",
    options: ["присвоили", "освоили", "усвоили", "освоились"],
    optionBases: ["присвоить", "освоить", "усвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "присвоить — присваивать",
    correctExplanation: USVOIT_VERB_MAP["присвоить"]
  },
  {
    id: 17,
    sentence: "Постепенно все ... с новой обстановкой и перестали волноваться.",
    translation: "Gradualmente tutti si sono ambientati nella nuova situazione e hanno smesso di preoccuparsi.",
    options: ["освоились", "освоили", "усвоили", "присвоили"],
    optionBases: ["освоиться", "освоить", "усвоить", "присвоить"],
    correctIndex: 0,
    verbPair: "освоиться — осваиваться",
    correctExplanation: USVOIT_VERB_MAP["освоиться"]
  },
  {
    id: 18,
    sentence: "Человеческий мозг способен ... огромные объёмы информации.",
    translation: "Il cervello umano è capace di assimilare enormi volumi di informazioni.",
    options: ["усваивать", "осваивать", "присваивать", "осваиваться"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 0,
    verbPair: "усваивать — усвоить",
    correctExplanation: USVOIT_VERB_MAP["усвоить"]
  },
  {
    id: 19,
    sentence: "Молодым учителям необходимо быстрее ... лучший педагогический опыт.",
    translation: "I giovani insegnanti devono padroneggiare (assimilare/fare proprio) più velocemente la migliore esperienza pedagogica.",
    options: ["усвоить", "освоить", "присвоить", "освоиться"],
    optionBases: ["усвоить", "освоить", "присвоить", "освоиться"],
    correctIndex: 1,
    verbPair: "освоить — осваивать",
    correctExplanation: USVOIT_VERB_MAP["освоить"]
  },
  {
    id: 20,
    sentence: "Он несправедливо ... себе победу в этом конкурсе.",
    translation: "Lui si è appropriato ingiustamente della vittoria in questo concorso.",
    options: ["присвоил", "усвоил", "освоил", "освоился"],
    optionBases: ["присвоить", "усвоить", "освоить", "освоиться"],
    correctIndex: 0,
    verbPair: "присвоить — присваивать",
    correctExplanation: USVOIT_VERB_MAP["присвоить"]
  }
];

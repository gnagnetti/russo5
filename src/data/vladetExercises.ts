import { Exercise } from '../types';

export const VLADET_VERB_MAP: Record<string, string> = {
  "владеть": "(владеть — овладеть): significa possedere (proprietà), avere il controllo o padroneggiare un'abilità/lingua (владеть домом, владеть собой, владеть языком). Richiede lo strumentale.",
  "обладать": "significa avere una qualità, una caratteristica o un talento innato (обладать талантом, обладать силой, обладать правом). Richiede lo strumentale.",
  "овладеть": "(овладеть — владеть): significa prendere possesso di qualcosa (con la forza) o acquisire padronanza di una nuova competenza (овладеть городом, овладеть техникой). Richiede lo strumentale.",
  "завладеть": "significa impossessarsi di qualcosa, catturare l'attenzione o il controllo (завладеть вниманием, завладеть имуществом). Spesso implica un'azione più brusca o decisa.",
  "совладать": "riuscire a controllare o dominare qualcosa di difficile, come le emozioni o un cavallo (совладать с гневом).",
  "преобладать": "prevalere, essere in maggioranza o predominare (преобладать в коллекции, преобладать в мнении).",
  "распоряжаться": "(распорядиться — распоряжаться): avere il diritto di disporre di qualcosa, comandare o dare ordini (распоряжаться деньгами, распоряжаться судьбой).",
  "иметь": "significa avere in senso generale (immediato/astratto), di solito richiede l'accusativo (иметь право, иметь значение).",
  "пропасть": "(fuori contesto)",
  "принадлежать": "appartenere a qualcuno (эта книга принадлежит мне).",
  "содержать": "contenere o mantenere qualcuno (vivere a spese di).",
  "удерживать": "trattenere o mantenere il controllo su qualcosa."
};

export const VLADET_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Она свободно ... тремя иностранными языками.",
    translation: "Lei padroneggia (parla correntemente) tre lingue straniere.",
    options: ["владеет", "обладает", "имеет", "распоряжается"],
    optionBases: ["владеть", "обладать", "иметь", "распоряжаться"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  },
  {
    id: 2,
    sentence: "Этот спортсмен ... невероятной силой.",
    translation: "Questo atleta possiede (ha come qualità) una forza incredibile.",
    options: ["владеет", "обладает", "имеет", "завладеет"],
    optionBases: ["владеть", "обладать", "иметь", "завладеть"],
    correctIndex: 1,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 3,
    sentence: "Вы не имеете права ... моим временем.",
    translation: "Non avete il diritto di disporre del mio tempo.",
    options: ["распоряжаться", "владеть", "обладать", "овладеть"],
    optionBases: ["распоряжаться", "владеть", "обладать", "овладеть"],
    correctIndex: 0,
    verbPair: "распоряжаться — распорядиться",
    correctExplanation: VLADET_VERB_MAP["распоряжаться"]
  },
  {
    id: 4,
    sentence: "Войскам удалось ... крепостью после долгой осады.",
    translation: "Le truppe sono riuscite a prendere possesso (conquistare) della fortezza dopo un lungo assedio.",
    options: ["овладеть", "владеть", "обладать", "распоряжаться"],
    optionBases: ["овладеть", "владеть", "обладать", "распоряжаться"],
    correctIndex: 0,
    verbPair: "овладеть — владеть",
    correctExplanation: VLADET_VERB_MAP["овладеть"]
  },
  {
    id: 5,
    sentence: "Ему было трудно ... со своим волнением.",
    translation: "Gli era difficile dominare (gestire) la sua emozione.",
    options: ["совладать", "владеть", "обладать", "завладеть"],
    optionBases: ["совладать", "владеть", "обладать", "завладеть"],
    correctIndex: 0,
    verbPair: "совладать",
    correctExplanation: VLADET_VERB_MAP["совладать"]
  },
  {
    id: 6,
    sentence: "Она ... прекрасным голосом и музыкальным слухом.",
    translation: "Lei possiede (ha come dote) una bellissima voce e orecchio musicale.",
    options: ["обладает", "владеет", "завладеет", "преобладает"],
    optionBases: ["обладать", "владеть", "завладеть", "преобладать"],
    correctIndex: 0,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 7,
    sentence: "Мошенники пытались ... его имуществом.",
    translation: "I truffatori hanno cercato di impossessarsi della sua proprietà.",
    options: ["завладеть", "владеть", "обладать", "совладать"],
    optionBases: ["завладеть", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "завладеть",
    correctExplanation: VLADET_VERB_MAP["завладеть"]
  },
  {
    id: 8,
    sentence: "В этой картине ... теплые тона.",
    translation: "In questo quadro predominano (prevalgono) i toni caldi.",
    options: ["преобладают", "владеют", "обладают", "завладеют"],
    optionBases: ["преобладать", "владеть", "обладать", "завладеть"],
    correctIndex: 0,
    verbPair: "преобладать",
    correctExplanation: VLADET_VERB_MAP["преобладать"]
  },
  {
    id: 9,
    sentence: "Он уже много лет ... крупной компанией.",
    translation: "Gestisce (possiede/ha il controllo) una grande azienda da molti anni.",
    options: ["владеет", "обладает", "распоряжается", "совладает"],
    optionBases: ["владеть", "обладать", "распоряжаться", "совладать"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  },
  {
    id: 10,
    sentence: "Студент смог ... новой специальностью за полгода.",
    translation: "Lo studente è riuscito a padroneggiare (acquisire competenza) la nuova specializzazione in sei mesi.",
    options: ["овладеть", "владеть", "обладать", "завладеть"],
    optionBases: ["овладеть", "владеть", "обладать", "завладеть"],
    correctIndex: 0,
    verbPair: "овладеть — владеть",
    correctExplanation: VLADET_VERB_MAP["овладеть"]
  },
  {
    id: 11,
    sentence: "Многие люди ... правом на бесплатное медицинское обслуживание.",
    translation: "Molte persone godono (hanno come qualità/caratteristica) del diritto all'assistenza medica gratuita.",
    options: ["обладают", "владеют", "завладеют", "совладают"],
    optionBases: ["обладать", "владеть", "завладеть", "совладать"],
    correctIndex: 0,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 12,
    sentence: "Директор сам ... всеми финансами фирмы.",
    translation: "Il direttore in persona dispone (comanda/gestisce) di tutte le finanze della ditta.",
    options: ["распоряжается", "владеет", "обладает", "преобладает"],
    optionBases: ["распоряжаться", "владеть", "обладать", "преобладать"],
    correctIndex: 0,
    verbPair: "распоряжаться — распорядиться",
    correctExplanation: VLADET_VERB_MAP["распоряжаться"]
  },
  {
    id: 13,
    sentence: "Страх полностью ... его разумом.",
    translation: "La paura si è impossessata (ha preso il controllo) completamente della sua mente.",
    options: ["завладел", "овладел", "совладал", "владел"],
    optionBases: ["завладеть", "овладеть", "совладать", "владеть"],
    correctIndex: 1,
    verbPair: "овладеть — владеть",
    correctExplanation: "Qui 'овладеть' indica un controllo mentale o emotivo improvviso."
  },
  {
    id: 14,
    sentence: "Оратор быстро ... вниманием аудитории.",
    translation: "L'oratore ha catturato (preso il controllo) velocemente l'attenzione dell'uditorio.",
    options: ["завладел", "совладал", "обладал", "преобладал"],
    optionBases: ["завладеть", "совладать", "обладать", "преобладать"],
    correctIndex: 0,
    verbPair: "завладеть",
    correctExplanation: VLADET_VERB_MAP["завладеть"]
  },
  {
    id: 15,
    sentence: "В этой местности ... хвойные леса.",
    translation: "In questa località predominano i boschi di conifere.",
    options: ["преобладают", "владеют", "обладают", "распоряжаются"],
    optionBases: ["преобладать", "владеть", "обладать", "распоряжаться"],
    correctIndex: 0,
    verbPair: "преобладать",
    correctExplanation: VLADET_VERB_MAP["преобладать"]
  },
  {
    id: 16,
    sentence: "Я не могу ... с этим упрямым конем.",
    translation: "Non riesco a dominare (gestire) questo cavallo testardo.",
    options: ["совладать", "владеть", "обладать", "завладеть"],
    optionBases: ["совладать", "владеть", "обладать", "завладеть"],
    correctIndex: 0,
    verbPair: "совладать",
    correctExplanation: VLADET_VERB_MAP["совладать"]
  },
  {
    id: 17,
    sentence: "Этот человек ... огромным состоянием.",
    translation: "Quest'uomo possiede (ha in proprietà) una ricchezza enorme.",
    options: ["владеет", "обладает", "распоряжается", "имеет"],
    optionBases: ["владеть", "обладать", "распоряжаться", "иметь"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  },
  {
    id: 18,
    sentence: "Новый метод ... рядом преимуществ.",
    translation: "Il nuovo metodo possiede (presenta come caratteristiche) una serie di vantaggi.",
    options: ["обладает", "владеет", "завладеет", "преобладает"],
    optionBases: ["обладать", "владеть", "завладеть", "преобладать"],
    correctIndex: 0,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 19,
    sentence: "Она прекрасно ... искусством вести переговоры.",
    translation: "Lei padroneggia (ha il controllo/abilità) perfettamente l'arte di condurre trattative.",
    options: ["владеет", "обладает", "распоряжается", "совладает"],
    optionBases: ["владеть", "обладать", "распоряжаться", "совладать"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  },
  {
    id: 20,
    sentence: "Сын еще не умеет ... своими деньгами.",
    translation: "Mio figlio non sa ancora come disporre (gestire) dei suoi soldi.",
    options: ["распоряжаться", "владеть", "обладать", "совладать"],
    optionBases: ["распоряжаться", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "распоряжаться — распорядиться",
    correctExplanation: VLADET_VERB_MAP["распоряжаться"]
  },
  {
    id: 21,
    sentence: "Он хотел ... миром, но потерпел неудачу.",
    translation: "Voleva conquistare (prendere il possesso) il mondo, ma è fallito.",
    options: ["завладеть", "владеть", "обладать", "совладать"],
    optionBases: ["завладеть", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "завладеть",
    correctExplanation: "In senso di conquista totale si usa spesso 'завладеть' o 'завоевать'."
  },
  {
    id: 22,
    sentence: "Чтобы ..., нужно долго тренироваться.",
    translation: "Per padroneggiare (un'abilità), bisogna allenarsi a lungo.",
    options: ["овладеть", "владеть", "обладать", "совладать"],
    optionBases: ["овладеть", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "овладеть — владеть",
    correctExplanation: VLADET_VERB_MAP["овладеть"]
  },
  {
    id: 23,
    sentence: "В нашем коллективе ... дружеская атмосфера.",
    translation: "Nel nostro collettivo predomina (prevale) un'atmosfera amichevole.",
    options: ["преобладает", "владеет", "обладает", "распоряжается"],
    optionBases: ["преобладать", "владеть", "обладать", "распоряжаться"],
    correctIndex: 0,
    verbPair: "преобладать",
    correctExplanation: VLADET_VERB_MAP["преобладать"]
  },
  {
    id: 24,
    sentence: "Мать смогла ... своим гневом и спокойно поговорила с сыном.",
    translation: "La madre è riuscita a dominare (gestire) la sua ira e ha parlato con calma al figlio.",
    options: ["совладать", "владеть", "обладать", "завладеть"],
    optionBases: ["совладать", "владеть", "обладать", "завладеть"],
    correctIndex: 0,
    verbPair: "совладать",
    correctExplanation: VLADET_VERB_MAP["совладать"]
  },
  {
    id: 25,
    sentence: "Вы должны ... всей информацией по этому делу.",
    translation: "Dovete possedere (avere il controllo/conoscenza) tutte le informazioni su questo caso.",
    options: ["владеть", "обладать", "распоряжаться", "совладать"],
    optionBases: ["владеть", "обладать", "распоряжаться", "совладать"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  },
  {
    id: 26,
    sentence: "Он ... редким даром убеждения.",
    translation: "Lui possiede (ha come talento) un raro dono di persuasione.",
    options: ["обладает", "владеет", "завладеет", "преобладает"],
    optionBases: ["обладать", "владеть", "завладеть", "преобладать"],
    correctIndex: 0,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 27,
    sentence: "Бандит ... оружием охранника.",
    translation: "Il bandito si è impossessato (ha preso il controllo) dell'arma della guardia.",
    options: ["завладел", "владел", "обладал", "совладал"],
    optionBases: ["завладеть", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "завладеть",
    correctExplanation: VLADET_VERB_MAP["завладеть"]
  },
  {
    id: 28,
    sentence: "В этой семье ... строгие правила.",
    translation: "In questa famiglia prevalgono (dominano) regole severe.",
    options: ["преобладают", "владеют", "обладают", "распоряжаются"],
    optionBases: ["преобладать", "владеть", "обладать", "распоряжаться"],
    correctIndex: 0,
    verbPair: "преобладать",
    correctExplanation: VLADET_VERB_MAP["преобладать"]
  },
  {
    id: 29,
    sentence: "Я не вправе ... вашим имуществом.",
    translation: "Non ho il diritto di disporre della vostra proprietà.",
    options: ["распоряжаться", "владеть", "обладать", "совладать"],
    optionBases: ["распоряжаться", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "распоряжаться — распорядиться",
    correctExplanation: VLADET_VERB_MAP["распоряжаться"]
  },
  {
    id: 30,
    sentence: "Ему удалось ... вниманием всей аудитории.",
    translation: "È riuscito a catturare l'attenzione di tutto l'uditorio.",
    options: ["завладеть", "совладать", "обладать", "преобладать"],
    optionBases: ["завладеть", "совладать", "обладать", "преобладать"],
    correctIndex: 0,
    verbPair: "завладеть",
    correctExplanation: VLADET_VERB_MAP["завладеть"]
  },
  {
    id: 31,
    sentence: "Профессор ... глубокими знаниями в области физики.",
    translation: "Il professore possiede (ha come caratteristica) profonde conoscenze nel campo della fisica.",
    options: ["обладает", "владеет", "завладеет", "преобладает"],
    optionBases: ["обладать", "владеть", "завладеть", "преобладать"],
    correctIndex: 0,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 32,
    sentence: "Она ... собой даже в самых трудных ситуациях.",
    translation: "Lei ha il controllo di sé (padronanza) anche nelle situazioni più difficili.",
    options: ["владеет", "обладает", "распоряжается", "совладает"],
    optionBases: ["владеть", "обладать", "распоряжаться", "совладать"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  },
  {
    id: 33,
    sentence: "Захватчики ... важным стратегическим объектом.",
    translation: "Gli invasori si sono impossessati di un importante obiettivo strategico.",
    options: ["завладели", "совладали", "обладали", "преобладали"],
    optionBases: ["завладеть", "совладать", "обладать", "преобладать"],
    correctIndex: 0,
    verbPair: "завладели",
    correctExplanation: VLADET_VERB_MAP["завладеть"]
  },
  {
    id: 34,
    sentence: "В его стихах ... грустные мотивы.",
    translation: "Nelle sue poesie predominano i motivi tristi.",
    options: ["преобладают", "владеют", "обладают", "распоряжаются"],
    optionBases: ["преобладать", "владеть", "обладать", "распоряжаться"],
    correctIndex: 0,
    verbPair: "преобладать",
    correctExplanation: VLADET_VERB_MAP["преобладать"]
  },
  {
    id: 35,
    sentence: "Он смог ... с техникой вождения болида.",
    translation: "È riuscito a padroneggiare/dominare la tecnica di guida di un bolide.",
    options: ["овладеть (совладать)", "владеть", "обладать", "завладеть"],
    optionBases: ["овладеть", "владеть", "обладать", "завладеть"],
    correctIndex: 0,
    verbPair: "овладеть — владеть",
    correctExplanation: "Per competenze tecniche si usa 'овладеть'."
  },
  {
    id: 36,
    sentence: "Я сам буду ... своим будущим.",
    translation: "Io stesso disporrò (gestirò) del mio futuro.",
    options: ["распоряжаться", "владеть", "обладать", "совладать"],
    optionBases: ["распоряжаться", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "распоряжаться — распорядиться",
    correctExplanation: VLADET_VERB_MAP["распоряжаться"]
  },
  {
    id: 37,
    sentence: "Эта женщина ... необычайной красотой.",
    translation: "Questa donna possiede (ha come dono) una bellezza straordinaria.",
    options: ["обладает", "владеет", "завладеет", "совладает"],
    optionBases: ["обладать", "владеть", "завладеть", "совладать"],
    correctIndex: 0,
    verbPair: "обладать",
    correctExplanation: VLADET_VERB_MAP["обладать"]
  },
  {
    id: 38,
    sentence: "Оратор ... умами миллионов людей.",
    translation: "L'oratore si è impossessato (ha preso il controllo) delle menti di milioni di persone.",
    options: ["завладел (овладел)", "владел", "обладал", "совладал"],
    optionBases: ["завладеть", "владеть", "обладать", "совладать"],
    correctIndex: 0,
    verbPair: "завладеть",
    correctExplanation: VLADET_VERB_MAP["завладеть"]
  },
  {
    id: 39,
    sentence: "В этой стране ... сельское население.",
    translation: "In questo paese predomina la popolazione rurale.",
    options: ["преобладает", "владеет", "обладает", "распоряжается"],
    optionBases: ["преобладать", "владеть", "обладать", "распоряжаться"],
    correctIndex: 0,
    verbPair: "преобладать",
    correctExplanation: VLADET_VERB_MAP["преобладать"]
  },
  {
    id: 40,
    sentence: "Он прекрасно ... приемами рукопашного боя.",
    translation: "Padroneggia (ha il controllo/abilità) perfettamente le tecniche di combattimento corpo a corpo.",
    options: ["владеет", "обладает", "распоряжается", "совладает"],
    optionBases: ["владеть", "обладать", "распоряжаться", "совладать"],
    correctIndex: 0,
    verbPair: "владеть — овладеть",
    correctExplanation: VLADET_VERB_MAP["владеть"]
  }
];

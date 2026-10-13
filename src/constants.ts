import { Verb } from './types';
import { BIT_EXERCISES } from './data/bitExercises';
import { BRAT_EXERCISES } from './data/bratExercises';
import { BROSAT_EXERCISES } from './data/brosatExercises';
import { GOVORIT_EXERCISES } from './data/govoritExercises';
import { DAT_EXERCISES } from './data/datExercises';
import { DUMAT_EXERCISES } from './data/dumatExercises';
import { ZHIT_EXERCISES } from './data/zhitExercises';
import { STARATSYA_EXERCISES } from './data/staratsyaExercises';
import { DOSTIGAT_EXERCISES } from './data/dostigatExercises';
import { VIPOLNYAT_EXERCISES } from './data/vipolnyatExercises';
import { ODEVATSYA_EXERCISES } from './data/odevatsyaExercises';
import { IZMENIT_EXERCISES } from './data/izmenitExercises';
import { POLZOVATSYA_EXERCISES } from './data/polzovatsyaExercises';
import { PRIGOTOVIT_EXERCISES } from './data/prigotovitExercises';
import { UCHITSYA_EXERCISES } from './data/uchitsyaExercises';
import { VESTIRE_EXERCISES } from './data/vestireExercises';
import { VLADET_EXERCISES } from './data/vladetExercises';
import { ISPRAVIT_EXERCISES } from './data/ispravitExercises';
import { LIT_EXERCISES } from './data/litExercises';
import { RUKOVODIT_EXERCISES } from './data/rukovoditExercises';
import { LYUBOVATSYA_EXERCISES } from './data/lyubovatsyaExercises';
import { TSENIT_EXERCISES } from './data/tsenitExercises';
import { JAVLYAT_EXERCISES } from './data/javlyatExercises';
import { CHITAT_EXERCISES } from './data/chitatExercises';
import { USVOIT_EXERCISES } from './data/usvoitExercises';
import { POLNY_EXERCISES } from './data/polnyExercises';
import { STAT_EXERCISES } from './data/statExercises';
import { PUSKAT_EXERCISES } from './data/puskatExercises';
import { DERZHAT_EXERCISES } from './data/derzhatExercises';
import { PISAT_EXERCISES } from './data/pisatExercises';

export const VERBS: Verb[] = [
  // Sezione 1: Verbi con Prefissi
  {
    id: 'bit',
    cyrillic: 'Бить',
    translation: 'Battere, colpire',
    description: 'Verbo base che esprime l\'azione di colpire o rompere, con varianti prefissate per significati specifici come "uccidere" (убить) o "rompere" (разбить).',
    exercisesCount: BIT_EXERCISES.length,
    category: 'prefix',
    exercises: BIT_EXERCISES
  },
  {
    id: 'brat',
    cyrillic: 'Брать',
    translation: 'Prendere',
    description: 'Verbo comune per raccogliere o scegliere, cambia radicalmente significato con prefissi come "scelta" (выбрать) o "raccolta" (собрать).',
    exercisesCount: BRAT_EXERCISES.length,
    category: 'prefix',
    exercises: BRAT_EXERCISES
  },
  {
    id: 'brosat',
    cyrillic: 'Бросать / Бросить',
    translation: 'Gettare / Lanciare',
    description: 'Verbo versatile per lanciare o abbandonare, con prefissi indica direzioni (сбросить - giù) o azioni figurative (забросить - trascurare).',
    exercisesCount: BROSAT_EXERCISES.length,
    category: 'prefix',
    exercises: BROSAT_EXERCISES
  },
  {
    id: 'govorit',
    cyrillic: 'Говорить / Поговорить',
    translation: 'Parlare / Dire',
    description: 'Le sfumature di conversazione, accordo (договориться) o persuasione (уговорить) attraverso i prefissi.',
    exercisesCount: GOVORIT_EXERCISES.length,
    category: 'prefix',
    exercises: GOVORIT_EXERCISES
  },
  {
    id: 'dat',
    cyrillic: 'Дать / Отдать',
    translation: 'Dare / Consegnare',
    description: 'Copre azioni come "consegnare" (сдать), "rinunciare" (отдать) o "pubblicare" (издать).',
    exercisesCount: DAT_EXERCISES.length,
    category: 'prefix',
    exercises: DAT_EXERCISES
  },
  {
    id: 'dumat',
    cyrillic: 'Думать / Подумать',
    translation: 'Pensare',
    description: 'Sfumature del pensiero: "ideare" (придумать), "cambiare idea" (передумать) o "ravvedersi" (одуматься).',
    exercisesCount: DUMAT_EXERCISES.length,
    category: 'prefix',
    exercises: DUMAT_EXERCISES
  },
  {
    id: 'zhit',
    cyrillic: 'Жить / Пожить',
    translation: 'Vivere',
    description: 'Dalla sopravvivenza (выжить) all\'ambientamento (обжить) o guarigione (зажить).',
    exercisesCount: ZHIT_EXERCISES.length,
    category: 'prefix',
    exercises: ZHIT_EXERCISES
  },
  {
    id: 'staratsya',
    cyrillic: 'Стараться / Постараться',
    translation: 'Sforzarsi / Tentare',
    description: 'Focus sullo sforzo (стараться) versus il tentativo infruttuoso o singola prova (пытаться / попробовать).',
    exercisesCount: STARATSYA_EXERCISES.length,
    category: 'prefix',
    exercises: STARATSYA_EXERCISES
  },
  {
    id: 'obiettivi',
    cyrillic: 'Достигать / Добиться',
    translation: 'Raggiungere / Ottenere',
    description: 'Raggiungere traguardi (достичь), ottenere con fatica (добиться) o afferrare concetti (постичь).',
    exercisesCount: DOSTIGAT_EXERCISES.length,
    category: 'prefix',
    exercises: DOSTIGAT_EXERCISES
  },
  {
    id: 'radice-legata',
    cyrillic: 'Выполнять / Исполнять',
    translation: 'Compiere / Eseguire',
    description: 'Verbi per compiti (выполнять), esecuzioni (исполнять) e riempimento (заполнять / восполнять).',
    exercisesCount: VIPOLNYAT_EXERCISES.length,
    category: 'prefix',
    exercises: VIPOLNYAT_EXERCISES
  },
  {
    id: 'abbigliamento',
    cyrillic: 'Одеться / Надеть',
    translation: 'Vestirsi / Indossare',
    description: 'Verbi per vestire se stessi (одеться), qualcun altro (одеть) o indossare capi specifici (надеть).',
    exercisesCount: ODEVATSYA_EXERCISES.length,
    category: 'prefix',
    exercises: ODEVATSYA_EXERCISES
  },
  {
    id: 'trasformazione',
    cyrillic: 'Превратить / Изменить',
    translation: 'Trasformare / Cambiare',
    description: 'Verbi per cambiare stato (изменить), trasformarsi (превратиться) o scambiare (обменять).',
    exercisesCount: IZMENIT_EXERCISES.length,
    category: 'prefix',
    exercises: IZMENIT_EXERCISES
  },
  {
    id: 'utilizzo',
    cyrillic: 'Пользоваться / Использовать',
    translation: 'Utilizzare / Usare',
    description: 'Sfumature tra servirsi di strumenti (пользоваться), impiegare risorse (использовать) o applicare regole (применять).',
    exercisesCount: POLZOVATSYA_EXERCISES.length,
    category: 'prefix',
    exercises: POLZOVATSYA_EXERCISES
  },
  {
    id: 'preparazione',
    cyrillic: 'Приготовить / Подготовить',
    translation: 'Preparazione',
    description: 'Sfumature tra preparare cibo (приготовить), documenti (подготовить) o fare scorte (заготовить).',
    exercisesCount: PRIGOTOVIT_EXERCISES.length,
    category: 'prefix',
    exercises: PRIGOTOVIT_EXERCISES
  },

  // Sezione 2: Gruppi di Verbi Correlati
  {
    id: 'studiare',
    cyrillic: 'Учиться / Изучать',
    translation: 'Studiare / Apprendere',
    description: 'Differenza tra frequentare un luogo (учиться), studiare una materia (изучать) o memorizzare (учить).',
    exercisesCount: UCHITSYA_EXERCISES.length,
    category: 'group',
    exercises: UCHITSYA_EXERCISES
  },
  {
    id: 'vestire',
    cyrillic: 'Одевать / Надевать',
    translation: 'Vestire',
    description: 'Errori comuni tra vestire un altro (одевать) o indossare qualcosa su di sé (надевать).',
    exercisesCount: VESTIRE_EXERCISES.length,
    category: 'group',
    exercises: VESTIRE_EXERCISES
  },
  {
    id: 'possesso',
    cyrillic: 'Владеть / Обладать',
    translation: 'Possesso',
    description: 'Dalla proprietà legale (владеть) alle qualità intrinseche o talenti (обладать).',
    exercisesCount: VLADET_EXERCISES.length,
    category: 'group',
    exercises: VLADET_EXERCISES
  },
  {
    id: 'riparazione',
    cyrillic: 'Исправить / Чинить',
    translation: 'Riparazione',
    description: 'Correggere errori (исправить) versus riparare oggetti fisici (чинить / ремонтировать).',
    exercisesCount: ISPRAVIT_EXERCISES.length,
    category: 'group',
    exercises: ISPRAVIT_EXERCISES
  },
  {
    id: 'lit',
    cyrillic: 'Лить',
    translation: 'Versare',
    description: 'Sfumature di versare liquidi (налить), innaffiare (полить) o straripare (разлиться).',
    exercisesCount: LIT_EXERCISES.length,
    category: 'group',
    exercises: LIT_EXERCISES
  },
  {
    id: 'comando',
    cyrillic: 'Руководить / Управлять',
    translation: 'Comando',
    description: 'Dirigere team (руководить), gestire risorse (распоряжаться) o pilotare veicoli (управлять).',
    exercisesCount: RUKOVODIT_EXERCISES.length,
    category: 'group',
    exercises: RUKOVODIT_EXERCISES
  },
  {
    id: 'apprezzamento',
    cyrillic: 'Любоваться',
    translation: 'Apprezzamento',
    description: 'Ammirare la bellezza (любоваться), godere del piacere (наслаждаться) o stimare il valore (ценить).',
    exercisesCount: LYUBOVATSYA_EXERCISES.length,
    category: 'group',
    exercises: LYUBOVATSYA_EXERCISES
  },
  {
    id: 'valutazione',
    cyrillic: 'Ценить / Оценивать',
    translation: 'Valutazione',
    description: 'Riconoscere il valore (ценить) o determinare il costo/merito (оценивать).',
    exercisesCount: TSENIT_EXERCISES.length,
    category: 'group',
    exercises: TSENIT_EXERCISES
  },
  {
    id: 'javlyat',
    cyrillic: 'Являть',
    translation: 'Mostrare / Apparire',
    description: 'Copre azioni come "apparire" (появиться), "annunciare" (объявить), "dichiarare" (заявить) o "mostrare qualità" (проявить).',
    exercisesCount: JAVLYAT_EXERCISES.length,
    category: 'prefix',
    exercises: JAVLYAT_EXERCISES
  },
  {
    id: 'chitat',
    cyrillic: 'Читать',
    translation: 'Leggere',
    description: 'Copre vari significati del leggere: finire (дочитать), rileggere (перечитать), essere assorbito (зачитаться) o sgridare (отчитать).',
    exercisesCount: CHITAT_EXERCISES.length,
    category: 'prefix',
    exercises: CHITAT_EXERCISES
  },
  {
    id: 'usvoit',
    cyrillic: 'Усвоить',
    translation: 'Assimilare / Padroneggiare',
    description: 'Copre significati come "assimilare conoscenze" (усвоить), "padroneggiare una tecnica" (освоить) o "appropriarsi" (присвоить).',
    exercisesCount: USVOIT_EXERCISES.length,
    category: 'prefix',
    exercises: USVOIT_EXERCISES
  },
  {
    id: 'polny',
    cyrillic: 'Полный',
    translation: 'Completo / Eseguire',
    description: 'Verbi derivati dall\'aggettivo "полный": eseguire (выполнить), interpretare (исполнить), riempire (наполнить) o compiere anni (исполниться).',
    exercisesCount: POLNY_EXERCISES.length,
    category: 'prefix',
    exercises: POLNY_EXERCISES
  },
  {
    id: 'stat',
    cyrillic: 'Стать',
    translation: 'Diventare / Alzarsi',
    description: 'Verbi del gruppo "стать": alzarsi (встать), insorgere (восстать), ottenere (достать), toccare in sorte (достаться) o sorprare (застать).',
    exercisesCount: STAT_EXERCISES.length,
    category: 'prefix',
    exercises: STAT_EXERCISES
  },
  {
    id: 'puskat',
    cyrillic: 'Пускать',
    translation: 'Lasciare / Lanciare',
    description: 'Verbi del gruppo "пускать": permettere (впустить), produrre (выпустить), saltare un lezione (пропустить) o mancare un\'occasione (упустить).',
    exercisesCount: PUSKAT_EXERCISES.length,
    category: 'prefix',
    exercises: PUSKAT_EXERCISES
  },
  {
    id: 'derzhat',
    cyrillic: 'Держать',
    translation: 'Tenere / Resistere',
    description: 'Verbi del gruppo "держать": resistere (выдержать), sostenere (поддержать), astenersi (воздержаться) o mantenere (содержать).',
    exercisesCount: DERZHAT_EXERCISES.length,
    category: 'prefix',
    exercises: DERZHAT_EXERCISES
  },
  {
    id: 'pisat',
    cyrillic: 'Писать',
    translation: 'Scrivere',
    description: 'Verbi del gruppo "писать": annotare (записать), dimettere (выписать), descrivere (описать) o firmare (подписать).',
    exercisesCount: PISAT_EXERCISES.length,
    category: 'prefix',
    exercises: PISAT_EXERCISES
  }
];

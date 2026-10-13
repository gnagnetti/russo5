import { Exercise } from '../types';

export const STARATSYA_VERB_MAP: Record<string, string> = {
  "стараться": "(стараться — постараться): significa mettercela tutta, applicarsi con impegno in un'attività continuativa.",
  "постараться": "(постараться — стараться): significa fare uno sforzo specifico per ottenere un risultato o compiere un'azione in un'occasione particolare.",
  "пытаться": "(пытаться — попытаться): significa fare dei tentativi, provare a fare qualcosa che potrebbe non riuscire.",
  "попытаться": "(попытаться — пытаться): indica un singolo tentativo, spesso con l'idea di \"fare una prova\" per vedere se si riesce.",
  "попробовать": "(попробовать — пробовать): significa tentare (spesso per la prima volta) o assaggiare qualcosa.",
  "расстараться": "(расстараться): significa darsi un gran da fare, impegnarsi al massimo (spesso per far colpo su qualcuno).",
  "переусердствовать": "(переусердствовать): significa sforzarsi troppo, esagerare con lo zelo fino a ottenere un effetto negativo.",
  "прикладывать усилия": "espressione che significa \"compiere sforzi\" o \"applicarsi\".",
  "силиться": "tentare con grande fatica fisica o mentale, sforzarsi quasi allo stremo.",
  "пытать счастья": "tentare la fortuna.",
  "вкладываться": "investire energie o risorse in qualcosa (mettersi in gioco).",
  "добиваться": "cercare di ottenere qualcosa con insistenza e sforzo."
};

export const STARATSYA_EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Я буду очень ..., чтобы сдать этот экзамен на пять.",
    translation: "Mi impegnerò molto per superare questo esame con il massimo dei voti.",
    options: ["стараться", "пытаться", "пробовать", "достигать"],
    optionBases: ["стараться", "пытаться", "пробовать", "достигать"],
    correctIndex: 0,
    verbPair: "стараться — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  },
  {
    id: 2,
    sentence: "Пожалуйста, ..., прийти вовремя завтра утром.",
    translation: "Per favore, cerca (fai uno sforzo) di venire puntuale domani mattina.",
    options: ["постарайся", "попытайся", "попробуй", "расстарайся"],
    optionBases: ["постараться", "попытаться", "попробовать", "расстараться"],
    correctIndex: 0,
    verbPair: "постараться — стараться",
    correctExplanation: STARATSYA_VERB_MAP["постараться"]
  },
  {
    id: 3,
    sentence: "Он трижды ... открыть дверь, но ключ не подходил.",
    translation: "Ha tentato tre volte di aprire la porta, ma la chiave non andava bene.",
    options: ["старался", "пытался", "расстарался", "вкладывался"],
    optionBases: ["стараться", "пытаться", "расстараться", "вкладываться"],
    correctIndex: 1,
    verbPair: "пытаться — попытаться",
    correctExplanation: STARATSYA_VERB_MAP["пытаться"]
  },
  {
    id: 4,
    sentence: "Я хочу ... этот новый рецепт пирога.",
    translation: "Voglio provare questa nuova ricetta di torta.",
    options: ["постараться", "попытаться", "попробовать", "стараться"],
    optionBases: ["постараться", "попытаться", "попробовать", "стараться"],
    correctIndex: 2,
    verbPair: "попробовать — пробовать",
    correctExplanation: STARATSYA_VERB_MAP["попробовать"]
  },
  {
    id: 5,
    sentence: "Хозяин дома очень ..., чтобы гостям было уютно.",
    translation: "Il padrone di casa si è dato un gran da fare affinché gli ospiti stessero bene.",
    options: ["расстарался", "переусердствовал", "пытался", "попробовал"],
    optionBases: ["расстараться", "переусердствовать", "пытаться", "попробовать"],
    correctIndex: 0,
    verbPair: "расстараться",
    correctExplanation: STARATSYA_VERB_MAP["расстараться"]
  },
  {
    id: 6,
    sentence: "Ты ..., когда солил суп, он теперь слишком солёный.",
    translation: "Hai esagerato (nello sforzo/attenzione) quando hai salato la zuppa, ora è troppo salata.",
    options: ["постарался", "переусердствовал", "попытался", "старался"],
    optionBases: ["постараться", "переусердствовать", "попытаться", "стараться"],
    correctIndex: 1,
    verbPair: "переусердствовать",
    correctExplanation: STARATSYA_VERB_MAP["переусердствовать"]
  },
  {
    id: 7,
    sentence: "Я ... вспомнить его имя, но так и не смог.",
    translation: "Ho provato (fatto un tentativo) a ricordare il suo nome, ma non ci sono riuscito.",
    options: ["попытался", "постарался", "расстарался", "приложил"],
    optionBases: ["попытаться", "постараться", "расстараться", "приложить"],
    correctIndex: 0,
    verbPair: "попытаться — пытаться",
    correctExplanation: STARATSYA_VERB_MAP["попытаться"]
  },
  {
    id: 8,
    sentence: "Она всегда ... делать всё идеально.",
    translation: "Lei cerca sempre (si sforza) di fare tutto in modo perfetto.",
    options: ["пытается", "старается", "пробует", "силится"],
    optionBases: ["пытаться", "стараться", "пробовать", "силиться"],
    correctIndex: 1,
    verbPair: "стараться — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  },
  {
    id: 9,
    sentence: "Нам нужно ..., чтобы закончить проект в срок.",
    translation: "Dobbiamo mettercela tutta per finire il progetto in tempo.",
    options: ["постараться", "попытаться", "попробовать", "достичь"],
    optionBases: ["постараться", "попытаться", "попробовать", "достичь"],
    correctIndex: 0,
    verbPair: "постараться — стараться",
    correctExplanation: STARATSYA_VERB_MAP["постараться"]
  },
  {
    id: 10,
    sentence: "Он ... поднять тяжелый камень, но тот даже не сдвинулся.",
    translation: "Si sforzava con fatica (quasi allo stremo) a sollevare la pietra pesante, ma quella non si è nemmeno mossa.",
    options: ["старался", "силился", "пробовал", "расстарался"],
    optionBases: ["стараться", "силиться", "пробовать", "расстараться"],
    correctIndex: 1,
    verbPair: "силиться",
    correctExplanation: STARATSYA_VERB_MAP["силиться"]
  },
  {
    id: 11,
    sentence: "Я решил ... в другом городе.",
    translation: "Ho deciso di tentare la fortuna in un'altra città.",
    options: ["попытать счастья", "постараться", "попробовать", "стараться"],
    optionBases: ["попытать счастья", "постараться", "попробовать", "стараться"],
    correctIndex: 0,
    verbPair: "попытать счастья",
    correctExplanation: STARATSYA_VERB_MAP["пытать счастья"]
  },
  {
    id: 12,
    sentence: "Она полностью ... в воспитание детей.",
    translation: "Lei si dedica completamente (si mette in gioco/investe energie) all'educazione dei figli.",
    options: ["вкладывается", "старается", "пытается", "пробует"],
    optionBases: ["вкладываться", "стараться", "пытаться", "пробовать"],
    correctIndex: 0,
    verbPair: "вкладывается",
    correctExplanation: STARATSYA_VERB_MAP["вкладываться"]
  },
  {
    id: 13,
    sentence: "Ученик ... не делать ошибок в диктанте.",
    translation: "Lo studente cerca (si sforza) di non fare errori nel dettato.",
    options: ["пытается", "старается", "пробует", "достигает"],
    optionBases: ["пытаться", "стараться", "пробовать", "достигать"],
    correctIndex: 1,
    verbPair: "стараться — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  },
  {
    id: 14,
    sentence: "Давай ... войти через запасной вход.",
    translation: "Proviamo (tentiamo) ad entrare dall'ingresso di servizio.",
    options: ["постараемся", "попытаемся", "расстараемся", "вложимся"],
    optionBases: ["постараться", "попытаться", "расстараться", "вкладываться"],
    correctIndex: 1,
    verbPair: "попытаемся — пытаться",
    correctExplanation: STARATSYA_VERB_MAP["попытаться"]
  },
  {
    id: 15,
    sentence: "Художник ... превзойти самого себя в этой картине.",
    translation: "L'artista si è dato un gran da fare per superare se stesso in questo quadro.",
    options: ["расстарался", "переусердствовал", "застарался", "попробовал"],
    optionBases: ["расстараться", "переусердствовать", "застараться", "попробовать"],
    correctIndex: 0,
    verbPair: "расстараться",
    correctExplanation: STARATSYA_VERB_MAP["расстараться"]
  },
  {
    id: 16,
    sentence: "Я ..., хотя это будет непросто.",
    translation: "Ci proverò (faro uno sforzo), anche se non sarà facile.",
    options: ["постараюсь", "попытаюсь", "попробую", "стараюсь"],
    optionBases: ["постараться", "попытаться", "попробовать", "стараться"],
    correctIndex: 0,
    verbPair: "постараюсь — стараться",
    correctExplanation: STARATSYA_VERB_MAP["постараться"]
  },
  {
    id: 17,
    sentence: "Он ... объяснить причину своего отсутствия.",
    translation: "Lui tentava di spiegare la ragione della sua assenza.",
    options: ["старался", "пытался", "силился", "вкладывался"],
    optionBases: ["стараться", "пытаться", "силиться", "вкладываться"],
    correctIndex: 1,
    verbPair: "пытаться — попытаться",
    correctExplanation: STARATSYA_VERB_MAP["пытаться"]
  },
  {
    id: 18,
    sentence: "Она ..., когда украшала зал, цветов было слишком много.",
    translation: "Ha esagerato quando ha decorato la sala, c'erano troppi fiori.",
    options: ["расстаралась", "переусердствовала", "постаралась", "попыталась"],
    optionBases: ["расстараться", "переусердствовать", "постараться", "попытаться"],
    correctIndex: 1,
    verbPair: "переусердствовать",
    correctExplanation: STARATSYA_VERB_MAP["переусердствовать"]
  },
  {
    id: 19,
    sentence: "Почему бы тебе не ... этот вид спорта?",
    translation: "Perché non provi questo sport?",
    options: ["попробовать", "постараться", "попытаться", "стараться"],
    optionBases: ["попробовать", "постараться", "попытаться", "стараться"],
    correctIndex: 0,
    verbPair: "попробовать — пробовать",
    correctExplanation: STARATSYA_VERB_MAP["попробовать"]
  },
  {
    id: 20,
    sentence: "Спортсмен ... из последних сил.",
    translation: "L'atleta si sforzava con le ultime energie rimaste.",
    options: ["старался", "силился", "пробовал", "надеялся"],
    optionBases: ["стараться", "силиться", "пробовать", "надеяться"],
    correctIndex: 1,
    verbPair: "силиться",
    correctExplanation: STARATSYA_VERB_MAP["силиться"]
  },
  {
    id: 21,
    sentence: "Я всегда ... выполнять обещания.",
    translation: "Cerco sempre (mi impegno) di mantenere le promesse.",
    options: ["пытаюсь", "стараюсь", "пробую", "добиваюсь"],
    optionBases: ["пытаться", "стараться", "пробовать", "добиваться"],
    correctIndex: 1,
    verbPair: "стараться — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  },
  {
    id: 22,
    sentence: "Они ... связаться с нами, но мобильная сеть не работала.",
    translation: "Hanno tentato di mettersi in contatto con noi, ma la rete mobile non funzionava.",
    options: ["старались", "пытались", "прикладывали", "вкладывались"],
    optionBases: ["стараться", "пытаться", "прикладывать", "вкладываться"],
    correctIndex: 1,
    verbPair: "пытались — попытаться",
    correctExplanation: STARATSYA_VERB_MAP["пытаться"]
  },
  {
    id: 23,
    sentence: "Повар ..., чтобы банкет прошел на высшем уровне.",
    translation: "Lo chef si è dato un gran da fare affinché il banchetto andasse al meglio.",
    options: ["расстарался", "переусердствовал", "старался", "попробовал"],
    optionBases: ["расстараться", "переусердствовать", "стараться", "попробовать"],
    correctIndex: 0,
    verbPair: "расстарался",
    correctExplanation: STARATSYA_VERB_MAP["расстараться"]
  },
  {
    id: 24,
    sentence: "Тебе нужно ... максимум ..., чтобы победить.",
    translation: "Devi metterci il massimo dello sforzo per vincere.",
    options: ["приложить усилия", "постараться", "попытаться", "попробовать"],
    optionBases: ["приложить усилия", "постараться", "попытаться", "попробовать"],
    correctIndex: 0,
    verbPair: "приложить усилия",
    correctExplanation: STARATSYA_VERB_MAP["прикладывать усилия"]
  },
  {
    id: 25,
    sentence: "Я ... открыть это окно, но оно заклинило.",
    translation: "Ho tentato (un solo tentativo rapido) di aprire quella finestra, ma era incastrata.",
    options: ["попытался", "постарался", "расстарался", "вложился"],
    optionBases: ["попытаться", "постараться", "расстараться", "вкладываться"],
    correctIndex: 0,
    verbPair: "попытаться — пытаться",
    correctExplanation: STARATSYA_VERB_MAP["попытаться"]
  },
  {
    id: 26,
    sentence: "Мы ... вас не подвести.",
    translation: "Faremo il possibile (ci impegneremo) per non deludervi.",
    options: ["постараемся", "попытаемся", "попробуем", "будем пытаться"],
    optionBases: ["постараться", "попытаться", "попробовать", "пытаться"],
    correctIndex: 0,
    verbPair: "постараться — стараться",
    correctExplanation: STARATSYA_VERB_MAP["постараться"]
  },
  {
    id: 27,
    sentence: "Он ... поступить в университет на протяжении трех лет.",
    translation: "Ha cercato (fatto tentativi ripetuti) di entrare all'università per tre anni.",
    options: ["старался", "пытался", "силился", "прикладывал"],
    optionBases: ["стараться", "пытаться", "силиться", "прикладывать"],
    correctIndex: 1,
    verbPair: "пытался — попытаться",
    correctExplanation: STARATSYA_VERB_MAP["пытаться"]
  },
  {
    id: 28,
    sentence: "Учитель ..., объясняя сложную тему, но дети его не слушали.",
    translation: "L'insegnante si è dato un gran da fare spiegando l'argomento difficile, ma i bambini non lo ascoltavano.",
    options: ["расстарался", "переусердствовал", "напостарался", "попробовал"],
    optionBases: ["расстараться", "переусердствовать", "постараться", "попробовать"],
    correctIndex: 0,
    verbPair: "расстарался",
    correctExplanation: STARATSYA_VERB_MAP["расстараться"]
  },
  {
    id: 29,
    sentence: "Она ... не плакать перед всеми.",
    translation: "Cercava (si sforzava) di non piangere davanti a tutti.",
    options: ["старалась", "пыталась", "пробовала", "силилась"],
    optionBases: ["стараться", "пытаться", "пробовать", "силиться"],
    correctIndex: 0,
    verbPair: "старалась — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  },
  {
    id: 30,
    sentence: "Я только ..., работает ли этот выключатель.",
    translation: "Provo solo se questo interruttore funziona.",
    options: ["попробую", "постараюсь", "попытаюсь", "стараюсь"],
    optionBases: ["попробовать", "постараться", "попытаться", "стараться"],
    correctIndex: 0,
    verbPair: "попробую — пробовать",
    correctExplanation: STARATSYA_VERB_MAP["попробовать"]
  },
  {
    id: 31,
    sentence: "Мальчик ... поднять тяжелый чемодан.",
    translation: "Il ragazzo faceva uno sforzo faticoso per sollevare la valigia pesante.",
    options: ["силился", "старался", "пытался", "пробовал"],
    optionBases: ["силиться", "стараться", "пытаться", "пробовать"],
    correctIndex: 0,
    verbPair: "силиться",
    correctExplanation: STARATSYA_VERB_MAP["силиться"]
  },
  {
    id: 32,
    sentence: "Вы должны ... в работу с головой.",
    translation: "Dovete immergervi (investire tutte le energie) nel lavoro.",
    options: ["вложиться", "стараться", "пытаться", "пробовать"],
    optionBases: ["вложиться", "стараться", "пытаться", "пробовать"],
    correctIndex: 0,
    verbPair: "вложиться",
    correctExplanation: STARATSYA_VERB_MAP["вкладываться"]
  },
  {
    id: 33,
    sentence: "Он слишком ..., когда мыл машину, и поцарапал краску.",
    translation: "Ha esagerato (nello sforzo) quando ha lavato la macchina e ha graffiato la vernice.",
    options: ["переусердствовал", "расстарался", "постарался", "попытался"],
    optionBases: ["переусердствовать", "расстараться", "постараться", "попытаться"],
    correctIndex: 0,
    verbPair: "переусердствовать",
    correctExplanation: STARATSYA_VERB_MAP["переусердствовать"]
  },
  {
    id: 34,
    sentence: "Они ... изменить свою жизнь к лучшему.",
    translation: "Cercano (si impegnano) di cambiare la loro vita in meglio.",
    options: ["стараются", "пытаются", "пробуют", "добиваются"],
    optionBases: ["стараться", "пытаться", "пробовать", "добиваться"],
    correctIndex: 0,
    verbPair: "стараться — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  },
  {
    id: 35,
    sentence: "Я ... написать письмо, но мысли путались.",
    translation: "Tentavo (facevo dei tentativi) di scrivere una lettera, ma i pensieri erano confusi.",
    options: ["пытался", "старался", "силился", "расстарался"],
    optionBases: ["пытаться", "стараться", "силиться", "расстараться"],
    correctIndex: 0,
    verbPair: "пытался — попытаться",
    correctExplanation: STARATSYA_VERB_MAP["пытаться"]
  },
  {
    id: 36,
    sentence: "Мужчина ..., чтобы свидание прошло идеально.",
    translation: "L'uomo si è dato un gran da fare affinché l'appuntamento fosse perfetto.",
    options: ["расстарался", "переусердствовал", "постарался", "попробовал"],
    optionBases: ["расстараться", "переусердствовать", "постараться", "попробовать"],
    correctIndex: 0,
    verbPair: "расстараться",
    correctExplanation: STARATSYA_VERB_MAP["расстараться"]
  },
  {
    id: 37,
    sentence: "Давай ..., чтобы всё получилось.",
    translation: "Facciamo uno sforzo affinché tutto riesca.",
    options: ["постараемся", "попытаемся", "попробуем", "вложимся"],
    optionBases: ["постараться", "попытаться", "попробовать", "вложиться"],
    correctIndex: 0,
    verbPair: "постараемся — стараться",
    correctExplanation: STARATSYA_VERB_MAP["постараться"]
  },
  {
    id: 38,
    sentence: "Он ... скрыть свое волнение, но руки дрожали.",
    translation: "Cercava (faceva uno sforzo faticoso) di nascondere la sua emozione, ma le mani tremavano.",
    options: ["силился", "старался", "пытался", "пробовал"],
    optionBases: ["силиться", "стараться", "пытаться", "пробовать"],
    correctIndex: 0,
    verbPair: "силиться",
    correctExplanation: STARATSYA_VERB_MAP["силиться"]
  },
  {
    id: 39,
    sentence: "Я хочу ... свои силы в новом проекте.",
    translation: "Voglio provare (testare) le mie forze in un nuovo progetto.",
    options: ["попробовать", "постараться", "попытаться", "стараться"],
    optionBases: ["попробовать", "постараться", "попытаться", "стараться"],
    correctIndex: 0,
    verbPair: "попробовать — пробовать",
    correctExplanation: STARATSYA_VERB_MAP["попробовать"]
  },
  {
    id: 40,
    sentence: "Она всегда ... достичь поставленных целей.",
    translation: "Lei cerca sempre (si impegna) di raggiungere gli obiettivi prefissati.",
    options: ["старается", "пытается", "пробует", "силится"],
    optionBases: ["стараться", "пытаться", "пробовать", "силиться"],
    correctIndex: 0,
    verbPair: "стараться — постараться",
    correctExplanation: STARATSYA_VERB_MAP["стараться"]
  }
];

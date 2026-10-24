/* ============================================================
   ŚCIEŻKA OGÓLNA B1 → C2 (od poziomu średniozaawansowanego)
   W(angielski, część mowy, polski, formy/wymowa, podobieństwo, przykład, przykład PL)
   Część mowy: n – rzeczownik, v – czasownik, adj – przymiotnik, adv – przysłówek,
   pv – phrasal verb, phr – zwrot, idm – idiom, f – słowo funkcyjne / łącznik.
   Podobieństwo do polskiego: t – przezroczyste, p – podobne, f – fałszywy przyjaciel, o – obce.
   W przykładzie słowo docelowe w {…} (ćwiczenia z luką).
   ============================================================ */
var UA = window.UA || (window.UA = {});
UA.TOPICS = [];
UA.WORDS = [];
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur });
  }

  /* ===================== B1 ===================== */
  L('B1', 'b1_people', 'Charakter i emocje');
  W('reliable', 'adj', 'niezawodny, solidny', '/rɪˈlaɪəbl/', 'o', 'She is the most {reliable} person on our team.', 'Ona jest najsolidniejszą osobą w naszym zespole.');
  W('stubborn', 'adj', 'uparty', '/ˈstʌbən/', 'o', 'My grandfather was too {stubborn} to ask for help.', 'Mój dziadek był zbyt uparty, żeby poprosić o pomoc.');
  W('shy', 'adj', 'nieśmiały', 'shier/shyer', 'o', 'He was {shy} at first, but then he opened up.', 'Na początku był nieśmiały, ale potem się otworzył.');
  W('generous', 'adj', 'hojny, szczodry', '/ˈdʒenərəs/', 'p', 'Thank you, that is very {generous} of you.', 'Dziękuję, to bardzo hojne z twojej strony.');
  W('anxious', 'adj', 'zaniepokojony, pełen obaw', '/ˈæŋkʃəs/', 'o', 'I always feel {anxious} before an exam.', 'Przed egzaminem zawsze się denerwuję.');
  W('embarrassed', 'adj', 'zawstydzony, zakłopotany', 'embarrassing – krępujący', 'o', 'I was so {embarrassed} when I forgot his name.', 'Było mi tak głupio, kiedy zapomniałem jego imienia.');
  W('disappointed', 'adj', 'rozczarowany', 'disappointing – rozczarowujący', 'o', 'The students were {disappointed} with their results.', 'Uczniowie byli rozczarowani wynikami.');
  W('proud of', 'phr', 'dumny z', '', 'o', 'We are very {proud of} you.', 'Jesteśmy z ciebie bardzo dumni.');
  W('jealous', 'adj', 'zazdrosny', '/ˈdʒeləs/', 'o', 'He gets {jealous} when she talks to other men.', 'Robi się zazdrosny, gdy ona rozmawia z innymi mężczyznami.');
  W('mood', 'n', 'nastrój, humor', '', 'o', 'The boss is in a bad {mood} today.', 'Szef ma dziś zły humor.');
  W('to get on with sb', 'pv', 'dogadywać się z kimś', 'got on', 'o', 'I {get on with} my colleagues really well.', 'Bardzo dobrze dogaduję się z kolegami.');
  W('to look forward to', 'pv', 'nie móc się doczekać, cieszyć się na', '+ -ing!', 'o', 'I am {looking forward to} meeting you.', 'Nie mogę się doczekać spotkania z tobą.');

  L('B1', 'b1_work', 'Praca i kariera');
  W('job interview', 'n', 'rozmowa kwalifikacyjna', '', 'p', 'I have a {job interview} on Monday.', 'W poniedziałek mam rozmowę o pracę.');
  W('to apply for', 'v', 'ubiegać się o', 'application – podanie', 'o', 'She {applied for} a job at the museum.', 'Złożyła podanie o pracę w muzeum.');
  W('salary', 'n', 'pensja (miesięczna/roczna)', 'wage – stawka (godzinowa/tygodniowa)', 'p', 'Teachers in Poland don’t earn a high {salary}.', 'Nauczyciele w Polsce nie zarabiają wysokiej pensji.');
  W('deadline', 'n', 'ostateczny termin', '', 'o', 'The {deadline} for the report is Friday.', 'Termin na raport upływa w piątek.');
  W('colleague', 'n', 'kolega/koleżanka z pracy', '/ˈkɒliːɡ/', 'p', 'A {colleague} of mine recommended this book.', 'Polecił mi tę książkę kolega z pracy.');
  W('to be in charge of', 'phr', 'być odpowiedzialnym za, kierować', '', 'o', 'Who is {in charge of} the history department?', 'Kto kieruje działem historii?');
  W('promotion', 'n', 'awans; promocja (marketing)', '', 'f', 'He got a {promotion} last year.', 'W zeszłym roku dostał awans.');
  W('to resign', 'v', 'zrezygnować (ze stanowiska)', 'resignation', 'p', 'The minister {resigned} after the scandal.', 'Minister podał się do dymisji po skandalu.');
  W('to fire', 'v', 'zwolnić (z pracy); strzelać', 'potocznie; formalnie: dismiss', 'o', 'He was {fired} for being late every day.', 'Zwolniono go za codzienne spóźnienia.');
  W('workload', 'n', 'obciążenie pracą', '', 'o', 'My {workload} is enormous before the end of term.', 'Przed końcem semestru mam ogromnie dużo pracy.');
  W('to take over', 'pv', 'przejąć (obowiązki, firmę)', 'took over · taken over', 'o', 'Who will {take over} your classes?', 'Kto przejmie twoje lekcje?');
  W('experienced', 'adj', 'doświadczony', 'experience – doświadczenie (bez lm.)', 'o', 'We need an {experienced} teacher.', 'Potrzebujemy doświadczonego nauczyciela.');

  L('B1', 'b1_media', 'Media i technologia');
  W('headline', 'n', 'nagłówek', '', 'o', 'The {headline} was completely misleading.', 'Nagłówek był zupełnie mylący.');
  W('fake news', 'n', 'fałszywe wiadomości', 'bez lm.', 't', 'It’s hard to tell {fake news} from real news.', 'Trudno odróżnić fałszywe wiadomości od prawdziwych.');
  W('reliable source', 'phr', 'wiarygodne źródło', '', 'p', 'Wikipedia is not always a {reliable source}.', 'Wikipedia nie zawsze jest wiarygodnym źródłem.');
  W('to go viral', 'phr', 'stać się viralem, błyskawicznie się rozprzestrzenić', '', 'o', 'The video {went viral} overnight.', 'Film z dnia na dzień stał się viralem.');
  W('to download', 'v', 'pobierać (z sieci)', 'upload – wysyłać', 'o', 'You can {download} the app for free.', 'Aplikację możesz pobrać za darmo.');
  W('device', 'n', 'urządzenie', '/dɪˈvaɪs/', 'o', 'Please switch off all electronic {devices}.', 'Proszę wyłączyć wszystkie urządzenia elektroniczne.');
  W('screen time', 'n', 'czas przed ekranem', '', 'o', 'Teenagers spend too much {screen time} on their phones.', 'Nastolatki spędzają za dużo czasu przed ekranem telefonu.');
  W('to subscribe to', 'v', 'subskrybować, prenumerować', 'subscription', 'p', 'I {subscribe to} a history podcast.', 'Subskrybuję podcast historyczny.');
  W('broadcast', 'n', 'transmisja, audycja', 'broadcast · broadcast (czas.)', 'o', 'The {broadcast} was interrupted by breaking news.', 'Audycję przerwano z powodu pilnych wiadomości.');
  W('privacy', 'n', 'prywatność', '/ˈprɪvəsi/', 'p', 'Social media is a threat to our {privacy}.', 'Media społecznościowe zagrażają naszej prywatności.');
  W('to log in', 'pv', 'zalogować się', 'log out – wylogować', 'o', 'I can’t {log in} to my account.', 'Nie mogę się zalogować na konto.');
  W('update', 'n', 'aktualizacja', 'to update – aktualizować', 'o', 'The app needs an {update}.', 'Aplikacja wymaga aktualizacji.');

  L('B1', 'b1_env', 'Środowisko');
  W('climate change', 'n', 'zmiana klimatu', '', 'p', '{Climate change} affects all of us.', 'Zmiana klimatu dotyczy nas wszystkich.');
  W('pollution', 'n', 'zanieczyszczenie', '', 'o', 'Air {pollution} is a serious problem in Kraków.', 'Zanieczyszczenie powietrza to poważny problem w Krakowie.');
  W('waste', 'n', 'odpady; marnotrawstwo', 'to waste – marnować', 'o', 'We produce too much plastic {waste}.', 'Produkujemy za dużo plastikowych odpadów.');
  W('to recycle', 'v', 'przetwarzać, poddawać recyklingowi', 'recycling', 't', 'We {recycle} paper, glass and plastic.', 'Oddajemy do recyklingu papier, szkło i plastik.');
  W('renewable energy', 'n', 'energia odnawialna', '', 'p', '{Renewable energy} is getting cheaper.', 'Energia odnawialna tanieje.');
  W('drought', 'n', 'susza', '/draʊt/', 'o', 'The {drought} destroyed the harvest.', 'Susza zniszczyła plony.');
  W('flood', 'n', 'powódź', '/flʌd/', 'o', 'The {flood} of 1997 was a disaster for Wrocław.', 'Powódź z 1997 roku była katastrofą dla Wrocławia.');
  W('endangered species', 'n', 'zagrożony gatunek', '', 'p', 'The European bison was once an {endangered species}.', 'Żubr był kiedyś gatunkiem zagrożonym.');
  W('sustainable', 'adj', 'zrównoważony, ekologiczny', 'sustainability', 'o', 'We need a more {sustainable} way of life.', 'Potrzebujemy bardziej zrównoważonego stylu życia.');
  W('carbon footprint', 'n', 'ślad węglowy', '', 'o', 'Flying increases your {carbon footprint}.', 'Latanie zwiększa twój ślad węglowy.');
  W('to run out of', 'pv', 'wyczerpać (zapasy), skończyć się', 'ran out', 'o', 'We are {running out of} time.', 'Kończy nam się czas.');
  W('to cut down on', 'pv', 'ograniczyć (coś)', 'cut down', 'o', 'I’m trying to {cut down on} meat.', 'Staram się ograniczyć mięso.');

  L('B1', 'b1_health', 'Zdrowie i styl życia');
  W('to recover', 'v', 'wracać do zdrowia', 'recovery', 'o', 'It took her weeks to {recover} from the flu.', 'Wyzdrowienie po grypie zajęło jej tygodnie.');
  W('symptom', 'n', 'objaw', '/ˈsɪmptəm/', 't', 'What are your {symptoms}?', 'Jakie ma pan objawy?');
  W('prescription', 'n', 'recepta', 'to prescribe', 'f', 'You need a {prescription} for this medicine.', 'Na ten lek potrzebna jest recepta.');
  W('to sprain', 'v', 'skręcić (np. kostkę)', 'a sprained ankle', 'o', 'I {sprained} my ankle playing football.', 'Skręciłem kostkę, grając w piłkę.');
  W('healthy diet', 'phr', 'zdrowa dieta', '', 'p', 'A {healthy diet} includes lots of vegetables.', 'Zdrowa dieta obejmuje dużo warzyw.');
  W('to work out', 'pv', 'ćwiczyć (na siłowni); rozwiązać', 'workout (n.)', 'o', 'I {work out} three times a week.', 'Ćwiczę trzy razy w tygodniu.');
  W('stressed out', 'adj', 'zestresowany', '', 'o', 'I’m totally {stressed out} this week.', 'W tym tygodniu jestem kompletnie zestresowany.');
  W('to get over', 'pv', 'dojść do siebie po, przeboleć', 'got over', 'o', 'It took him a year to {get over} the divorce.', 'Dojście do siebie po rozwodzie zajęło mu rok.');
  W('sore throat', 'n', 'ból gardła', '', 'o', 'I have a {sore throat} and a temperature.', 'Boli mnie gardło i mam gorączkę.');
  W('check-up', 'n', 'badanie kontrolne', '', 'o', 'I go for a {check-up} once a year.', 'Raz w roku chodzę na badania kontrolne.');
  W('to give up', 'pv', 'rzucić (nałóg); poddać się', 'gave up · given up', 'o', 'My father {gave up} smoking twenty years ago.', 'Mój ojciec rzucił palenie dwadzieścia lat temu.');
  W('sedentary', 'adj', 'siedzący (tryb życia)', '/ˈsedntri/', 'o', 'Teachers often have a {sedentary} lifestyle.', 'Nauczyciele często prowadzą siedzący tryb życia.');

  L('B1', 'b1_pv1', 'Phrasal verbs (1)');
  W('to find out', 'pv', 'dowiedzieć się, odkryć', 'found out', 'o', 'I want to {find out} more about my ancestors.', 'Chcę dowiedzieć się więcej o moich przodkach.');
  W('to turn up', 'pv', 'pojawić się (niespodziewanie)', 'też: podgłośnić', 'o', 'Only five students {turned up} for the lecture.', 'Na wykład przyszło tylko pięciu studentów.');
  W('to put off', 'pv', 'odkładać (na później)', 'put off', 'o', 'Don’t {put off} your homework until Sunday.', 'Nie odkładaj zadania domowego do niedzieli.');
  W('to look up', 'pv', 'sprawdzić (w słowniku, w sieci)', 'looked up', 'o', 'If you don’t know a word, {look} it {up}.', 'Jeśli nie znasz słowa, sprawdź je.');
  W('to come across', 'pv', 'natknąć się na', 'came across', 'o', 'I {came across} an interesting letter in the archive.', 'Natknąłem się w archiwum na ciekawy list.');
  W('to carry on', 'pv', 'kontynuować', '= continue', 'o', '{Carry on} reading, please.', 'Czytaj dalej, proszę.');
  W('to set up', 'pv', 'założyć, zorganizować', 'set up', 'o', 'They {set up} a history club at school.', 'Założyli w szkole klub historyczny.');
  W('to break down', 'pv', 'zepsuć się; załamać się', 'broke down', 'o', 'Our bus {broke down} on the motorway.', 'Nasz autobus zepsuł się na autostradzie.');
  W('to pick up', 'pv', 'odebrać (kogoś); podłapać (język)', 'picked up', 'o', 'I’ll {pick} you {up} at the station.', 'Odbiorę cię z dworca.');
  W('to point out', 'pv', 'zwrócić uwagę, wskazać', 'pointed out', 'o', 'She {pointed out} a mistake in the date.', 'Zwróciła uwagę na błąd w dacie.');
  W('to go through', 'pv', 'przejrzeć; przejść przez (trudności)', 'went through', 'o', 'Let’s {go through} the answers together.', 'Przejrzyjmy razem odpowiedzi.');
  W('to figure out', 'pv', 'rozgryźć, zrozumieć', 'figured out', 'o', 'I can’t {figure out} this handwriting.', 'Nie mogę rozszyfrować tego pisma.');

  L('B1', 'b1_opinion', 'Wyrażanie opinii');
  W('in my opinion', 'phr', 'moim zdaniem', 'NIE: according to me', 'p', '{In my opinion}, history should be compulsory.', 'Moim zdaniem historia powinna być obowiązkowa.');
  W('as far as I’m concerned', 'phr', 'jeśli o mnie chodzi', '', 'o', '{As far as I’m concerned}, the plan is fine.', 'Jeśli o mnie chodzi, plan jest w porządku.');
  W('to agree with', 'v', 'zgadzać się z', 'NIE: I am agree!', 'p', 'I completely {agree with} you.', 'Całkowicie się z tobą zgadzam.');
  W('to disagree', 'v', 'nie zgadzać się', 'disagreement', 'o', 'I’m afraid I {disagree}.', 'Obawiam się, że się nie zgadzam.');
  W('on the one hand … on the other hand', 'phr', 'z jednej strony… z drugiej strony', '', 'o', '{On the one hand} it’s cheap; on the other hand it’s slow.', 'Z jednej strony jest tanie, z drugiej wolne.');
  W('to be in favour of', 'phr', 'być za, popierać', 'US: favor', 'o', 'Most teachers are {in favour of} the reform.', 'Większość nauczycieli popiera reformę.');
  W('to be against', 'phr', 'być przeciw', '', 'p', 'I’m {against} the ban.', 'Jestem przeciwny zakazowi.');
  W('advantage', 'n', 'zaleta, korzyść', 'disadvantage – wada', 'o', 'The main {advantage} is the price.', 'Główną zaletą jest cena.');
  W('however', 'f', 'jednak', 'na początku zdania z przecinkiem', 'o', 'It was raining. {However}, we went out.', 'Padało. Mimo to wyszliśmy.');
  W('therefore', 'f', 'dlatego, zatem', 'formalne', 'o', 'He was ill and {therefore} absent.', 'Był chory i dlatego nieobecny.');
  W('to make a point', 'phr', 'przedstawić argument, zwrócić uwagę', '', 'o', 'You {make a} good {point}.', 'Trafna uwaga.');
  W('I see what you mean, but …', 'phr', 'rozumiem, o co ci chodzi, ale…', '', 'o', '{I see what you mean, but} I still think it’s wrong.', 'Rozumiem, o co ci chodzi, ale nadal uważam, że to błąd.');

  L('B1', 'b1_society', 'Społeczeństwo');
  W('society', 'n', 'społeczeństwo', '/səˈsaɪəti/', 'p', 'Education shapes {society}.', 'Edukacja kształtuje społeczeństwo.');
  W('unemployment', 'n', 'bezrobocie', 'unemployed – bezrobotny', 'o', '{Unemployment} has fallen this year.', 'Bezrobocie w tym roku spadło.');
  W('poverty', 'n', 'bieda, ubóstwo', 'poor – biedny', 'o', 'Millions of children live in {poverty}.', 'Miliony dzieci żyją w biedzie.');
  W('equality', 'n', 'równość', 'equal – równy', 'o', 'Women fought for {equality} at work.', 'Kobiety walczyły o równość w pracy.');
  W('immigrant', 'n', 'imigrant', 'emigrant – emigrant', 't', 'Many {immigrants} came to Britain after 2004.', 'Po 2004 roku do Wielkiej Brytanii przyjechało wielu imigrantów.');
  W('crime', 'n', 'przestępczość; przestępstwo', 'criminal', 'o', '{Crime} rates have dropped in the city.', 'Przestępczość w mieście spadła.');
  W('volunteer', 'n', 'wolontariusz', 'to volunteer', 'o', 'She works as a {volunteer} at a shelter.', 'Pracuje jako wolontariuszka w schronisku.');
  W('community', 'n', 'społeczność', '', 'o', 'The Polish {community} in London is huge.', 'Polska społeczność w Londynie jest ogromna.');
  W('tax', 'n', 'podatek', 'taxes, taxpayer', 'o', 'Everyone has to pay {tax}.', 'Każdy musi płacić podatki.');
  W('pension', 'n', 'emerytura', 'pensioner – emeryt', 'f', 'My mother lives on a small {pension}.', 'Moja mama żyje ze skromnej emerytury.');
  W('generation gap', 'n', 'przepaść pokoleniowa', '', 'p', 'There is a big {generation gap} in technology use.', 'W korzystaniu z technologii jest duża przepaść pokoleniowa.');
  W('homeless', 'adj', 'bezdomny', 'the homeless – bezdomni', 'o', 'The charity helps {homeless} people.', 'Fundacja pomaga bezdomnym.');

  /* ===================== B2 ===================== */
  L('B2', 'b2_pv2', 'Phrasal verbs (2)');
  W('to bring up', 'pv', 'wychować; poruszyć (temat)', 'brought up', 'o', 'She {brought up} an interesting question.', 'Poruszyła ciekawą kwestię.');
  W('to come up with', 'pv', 'wymyślić (pomysł)', 'came up with', 'o', 'We need to {come up with} a better idea.', 'Musimy wymyślić lepszy pomysł.');
  W('to turn down', 'pv', 'odrzucić (propozycję); ściszyć', 'turned down', 'o', 'He {turned down} the job offer.', 'Odrzucił ofertę pracy.');
  W('to put up with', 'pv', 'znosić, tolerować', 'put up with', 'o', 'I can’t {put up with} this noise any longer.', 'Nie mogę już znieść tego hałasu.');
  W('to look into', 'pv', 'zbadać, przyjrzeć się', 'looked into', 'o', 'The committee will {look into} the matter.', 'Komisja zbada tę sprawę.');
  W('to make up', 'pv', 'zmyślić; stanowić; pogodzić się', 'made up', 'o', 'Women {make up} 70% of teachers.', 'Kobiety stanowią 70% nauczycieli.');
  W('to rule out', 'pv', 'wykluczyć', 'ruled out', 'o', 'Historians cannot {rule out} this theory.', 'Historycy nie mogą wykluczyć tej teorii.');
  W('to back up', 'pv', 'poprzeć (dowodami); zrobić kopię zapasową', 'backed up', 'o', 'Can you {back up} your claim with sources?', 'Czy możesz poprzeć tezę źródłami?');
  W('to call off', 'pv', 'odwołać', 'called off', 'o', 'The trip was {called off} because of the strike.', 'Wycieczkę odwołano z powodu strajku.');
  W('to wear off', 'pv', 'mijać, słabnąć (o efekcie)', 'wore off', 'o', 'The novelty soon {wore off}.', 'Efekt nowości szybko minął.');
  W('to stand out', 'pv', 'wyróżniać się', 'stood out', 'o', 'Her essay really {stood out}.', 'Jej wypracowanie naprawdę się wyróżniało.');
  W('to get away with', 'pv', 'uniknąć kary za', 'got away with', 'o', 'He cheated and {got away with} it.', 'Ściągał i uszło mu to na sucho.');

  L('B2', 'b2_colloc', 'Kolokacje: make, do, take, have');
  W('to make a mistake', 'phr', 'zrobić błąd', 'NIE: do a mistake', 'o', 'Everyone {makes mistakes}.', 'Każdy popełnia błędy.');
  W('to do research', 'phr', 'prowadzić badania', 'NIE: make research', 'o', 'I {do research} on the Polish community in London.', 'Prowadzę badania nad Polonią w Londynie.');
  W('to make a decision', 'phr', 'podjąć decyzję', 'NIE: take a decision (US)', 'o', 'We need to {make a decision} today.', 'Musimy dziś podjąć decyzję.');
  W('to take part in', 'phr', 'brać udział w', '', 'o', 'Twenty schools {took part in} the competition.', 'W konkursie wzięło udział dwadzieścia szkół.');
  W('to do homework', 'phr', 'odrabiać lekcje', 'NIE: make homework', 'o', 'Have you {done} your {homework}?', 'Odrobiłeś lekcje?');
  W('to make progress', 'phr', 'robić postępy', '', 'o', 'You’re {making} great {progress}!', 'Robisz świetne postępy!');
  W('to take a break', 'phr', 'zrobić przerwę', '', 'o', 'Let’s {take a break} for ten minutes.', 'Zróbmy dziesięć minut przerwy.');
  W('to have a look', 'phr', 'rzucić okiem', '', 'o', 'Can I {have a look} at the document?', 'Mogę rzucić okiem na dokument?');
  W('to pay attention to', 'phr', 'zwracać uwagę na', '', 'o', 'Please {pay attention to} the dates.', 'Proszę zwrócić uwagę na daty.');
  W('to raise awareness', 'phr', 'zwiększać świadomość', '', 'o', 'The project aims to {raise awareness} of local history.', 'Projekt ma zwiększać świadomość historii lokalnej.');
  W('to draw a conclusion', 'phr', 'wyciągnąć wniosek', '', 'o', 'What {conclusion} can we {draw} from the source?', 'Jaki wniosek możemy wyciągnąć ze źródła?');
  W('to keep a promise', 'phr', 'dotrzymać obietnicy', 'break a promise – złamać', 'o', 'Politicians rarely {keep} their {promises}.', 'Politycy rzadko dotrzymują obietnic.');

  L('B2', 'b2_politics', 'Polityka i prawo');
  W('government', 'n', 'rząd', '/ˈɡʌvənmənt/', 'o', 'The {government} announced new reforms.', 'Rząd ogłosił nowe reformy.');
  W('election', 'n', 'wybory', 'general election – wybory parlamentarne', 'o', 'The {election} will be held in October.', 'Wybory odbędą się w październiku.');
  W('to vote', 'v', 'głosować', 'vote (n.) – głos', 'o', 'Who did you {vote} for?', 'Na kogo głosowałeś?');
  W('Member of Parliament', 'n', 'poseł (w Wielkiej Brytanii)', 'skrót: MP', 'p', 'Our local {Member of Parliament} visited the school.', 'Nasz lokalny poseł odwiedził szkołę.');
  W('bill', 'n', 'projekt ustawy; rachunek', 'act – ustawa (przyjęta)', 'f', 'Parliament rejected the {bill}.', 'Parlament odrzucił projekt ustawy.');
  W('law', 'n', 'prawo; ustawa', 'to break the law', 'o', 'Everyone is equal before the {law}.', 'Wszyscy są równi wobec prawa.');
  W('court', 'n', 'sąd', '/kɔːt/', 'o', 'The case went to {court}.', 'Sprawa trafiła do sądu.');
  W('trial', 'n', 'proces (sądowy)', 'on trial – przed sądem', 'o', 'The {trial} lasted three months.', 'Proces trwał trzy miesiące.');
  W('verdict', 'n', 'werdykt', '', 'p', 'The jury reached a {verdict}.', 'Ława przysięgłych wydała werdykt.');
  W('to sentence', 'v', 'skazać (na karę)', 'sentence (n.) – wyrok', 'o', 'He was {sentenced} to ten years in prison.', 'Skazano go na dziesięć lat więzienia.');
  W('the opposition', 'n', 'opozycja', '', 't', '{The opposition} criticised the budget.', 'Opozycja skrytykowała budżet.');
  W('referendum', 'n', 'referendum', 'lm. referendums / referenda', 't', 'The Brexit {referendum} took place in 2016.', 'Referendum w sprawie brexitu odbyło się w 2016 roku.');

  L('B2', 'b2_economy', 'Gospodarka');
  W('economy', 'n', 'gospodarka', 'economic – gospodarczy, economical – oszczędny', 'f', 'The {economy} is slowly recovering.', 'Gospodarka powoli się odbudowuje.');
  W('inflation', 'n', 'inflacja', '', 't', '{Inflation} has risen to 8%.', 'Inflacja wzrosła do 8%.');
  W('recession', 'n', 'recesja', '', 't', 'The country is in {recession}.', 'Kraj jest w recesji.');
  W('profit', 'n', 'zysk', 'loss – strata', 'p', 'The company made a huge {profit}.', 'Firma osiągnęła ogromny zysk.');
  W('to invest', 'v', 'inwestować', 'investment', 't', 'The city {invested} in public transport.', 'Miasto zainwestowało w transport publiczny.');
  W('supply and demand', 'phr', 'podaż i popyt', '', 'o', 'Prices depend on {supply and demand}.', 'Ceny zależą od podaży i popytu.');
  W('cost of living', 'n', 'koszty utrzymania', 'cost-of-living crisis', 'o', 'The {cost of living} in London is very high.', 'Koszty utrzymania w Londynie są bardzo wysokie.');
  W('to go bankrupt', 'phr', 'zbankrutować', 'bankruptcy', 'p', 'The shipyard {went bankrupt}.', 'Stocznia zbankrutowała.');
  W('trade', 'n', 'handel', 'to trade', 'o', 'The Hanseatic League controlled {trade} on the Baltic.', 'Hanza kontrolowała handel na Bałtyku.');
  W('wealth', 'n', 'bogactwo', 'wealthy – zamożny', 'o', 'The {wealth} of the empire came from its colonies.', 'Bogactwo imperium pochodziło z kolonii.');
  W('budget', 'n', 'budżet', '', 't', 'The school’s {budget} was cut.', 'Budżet szkoły został obcięty.');
  W('mortgage', 'n', 'kredyt hipoteczny', '/ˈmɔːɡɪdʒ/', 'o', 'We took out a {mortgage} to buy a flat.', 'Wzięliśmy kredyt hipoteczny na mieszkanie.');

  L('B2', 'b2_science', 'Nauka i badania');
  W('evidence', 'n', 'dowody (bez lm.)', 'a piece of evidence', 'o', 'There is no {evidence} for this theory.', 'Nie ma dowodów na tę teorię.');
  W('research', 'n', 'badania (bez lm.)', 'NIE: researches', 'o', 'Recent {research} shows that sleep is crucial.', 'Najnowsze badania pokazują, że sen jest kluczowy.');
  W('to discover', 'v', 'odkryć', 'discovery', 'o', 'Marie Curie {discovered} polonium and radium.', 'Maria Skłodowska-Curie odkryła polon i rad.');
  W('hypothesis', 'n', 'hipoteza', 'lm. hypotheses', 't', 'The experiment confirmed the {hypothesis}.', 'Eksperyment potwierdził hipotezę.');
  W('findings', 'n', 'wyniki (badań), ustalenia', 'tylko lm.', 'o', 'The {findings} were published in Nature.', 'Wyniki opublikowano w „Nature”.');
  W('to conduct', 'v', 'przeprowadzać (badanie)', 'conduct an experiment', 'o', 'They {conducted} a survey of 500 students.', 'Przeprowadzili ankietę wśród 500 uczniów.');
  W('breakthrough', 'n', 'przełom', '', 'o', 'Penicillin was a medical {breakthrough}.', 'Penicylina była przełomem w medycynie.');
  W('reliable data', 'phr', 'wiarygodne dane', 'data – lm. (datum)', 'p', 'We need {reliable data}.', 'Potrzebujemy wiarygodnych danych.');
  W('to prove', 'v', 'udowodnić', 'proved · proven/proved', 'o', 'Can you {prove} it?', 'Możesz to udowodnić?');
  W('theory', 'n', 'teoria', '/ˈθɪəri/', 't', 'Darwin’s {theory} changed biology.', 'Teoria Darwina zmieniła biologię.');
  W('peer review', 'n', 'recenzja naukowa', 'peer-reviewed', 'o', 'The article went through {peer review}.', 'Artykuł przeszedł recenzję naukową.');
  W('outcome', 'n', 'wynik, rezultat', '', 'o', 'Nobody could predict the {outcome} of the war.', 'Nikt nie mógł przewidzieć wyniku wojny.');

  L('B2', 'b2_culture', 'Kultura i sztuka');
  W('exhibition', 'n', 'wystawa', '/ˌeksɪˈbɪʃn/', 'o', 'The {exhibition} on the Tudors opens in May.', 'Wystawa o Tudorach otwiera się w maju.');
  W('masterpiece', 'n', 'arcydzieło', '', 'o', '„Lady with an Ermine” is a {masterpiece}.', '„Dama z gronostajem” to arcydzieło.');
  W('novel', 'n', 'powieść', 'NIE: nowela!', 'f', 'Orwell wrote the {novel} „1984” in 1948.', 'Orwell napisał powieść „Rok 1984” w 1948 roku.');
  W('playwright', 'n', 'dramatopisarz', '/ˈpleɪraɪt/', 'o', 'Shakespeare is England’s greatest {playwright}.', 'Szekspir to największy angielski dramatopisarz.');
  W('performance', 'n', 'występ, przedstawienie', '', 'o', 'The {performance} received a standing ovation.', 'Występ nagrodzono owacją na stojąco.');
  W('heritage', 'n', 'dziedzictwo', 'cultural heritage', 'o', 'Kraków is a UNESCO World {Heritage} Site.', 'Kraków jest na liście światowego dziedzictwa UNESCO.');
  W('to portray', 'v', 'przedstawiać, portretować', 'portrayal', 'o', 'The film {portrays} life in the trenches.', 'Film przedstawia życie w okopach.');
  W('review', 'n', 'recenzja', 'to review', 'o', 'The book got excellent {reviews}.', 'Książka dostała świetne recenzje.');
  W('sculpture', 'n', 'rzeźba', '', 'p', 'The museum has a {sculpture} by Rodin.', 'Muzeum ma rzeźbę Rodina.');
  W('audience', 'n', 'widownia, publiczność', '', 'o', 'The {audience} applauded for five minutes.', 'Publiczność biła brawo przez pięć minut.');
  W('to be set in', 'phr', 'rozgrywać się w (akcja)', '', 'o', 'The novel {is set in} Victorian London.', 'Akcja powieści rozgrywa się w wiktoriańskim Londynie.');
  W('bestseller', 'n', 'bestseller', '', 't', 'Her memoir became a {bestseller}.', 'Jej wspomnienia stały się bestsellerem.');

  L('B2', 'b2_link', 'Łączniki w tekście');
  W('although', 'f', 'chociaż', '+ zdanie', 'o', '{Although} it was late, we kept working.', 'Chociaż było późno, pracowaliśmy dalej.');
  W('despite', 'f', 'pomimo', '+ rzeczownik / -ing (bez „of”!)', 'o', '{Despite} the rain, the parade went ahead.', 'Pomimo deszczu parada się odbyła.');
  W('whereas', 'f', 'podczas gdy (kontrast)', '', 'o', 'Poland has a president, {whereas} Britain has a monarch.', 'Polska ma prezydenta, podczas gdy Wielka Brytania – monarchę.');
  W('moreover', 'f', 'ponadto', 'formalne', 'o', 'The plan is expensive. {Moreover}, it’s unrealistic.', 'Plan jest drogi. Ponadto jest nierealny.');
  W('as a result', 'f', 'w rezultacie', '', 'o', 'The harvest failed. {As a result}, prices rose.', 'Zbiory się nie udały. W rezultacie ceny wzrosły.');
  W('in spite of', 'f', 'pomimo', '+ rzeczownik / -ing', 'o', '{In spite of} his age, he climbed the mountain.', 'Pomimo wieku wspiął się na górę.');
  W('unless', 'f', 'chyba że, jeśli nie', '', 'o', 'We’ll go out {unless} it rains.', 'Wyjdziemy, chyba że będzie padać.');
  W('as long as', 'f', 'pod warunkiem że', '', 'o', 'You can stay {as long as} you are quiet.', 'Możesz zostać, pod warunkiem że będziesz cicho.');
  W('in order to', 'f', 'aby, żeby', '+ bezokolicznik', 'o', 'He went to London {in order to} study.', 'Pojechał do Londynu, żeby studiować.');
  W('nevertheless', 'f', 'niemniej jednak', '', 'o', 'The task was hard; {nevertheless}, they finished it.', 'Zadanie było trudne, niemniej je ukończyli.');
  W('whereby', 'f', 'na mocy którego, przez co', 'formalne', 'o', 'The treaty {whereby} Poland regained Pomerania…', 'Traktat, na mocy którego Polska odzyskała Pomorze…');
  W('provided that', 'f', 'pod warunkiem że', 'formalne', 'o', 'You may borrow the book {provided that} you return it.', 'Możesz pożyczyć książkę, pod warunkiem że ją oddasz.');

  L('B2', 'b2_abstract', 'Pojęcia abstrakcyjne');
  W('freedom', 'n', 'wolność', 'liberty – wolność (polityczna)', 'o', '{Freedom} of speech is a basic right.', 'Wolność słowa to podstawowe prawo.');
  W('responsibility', 'n', 'odpowiedzialność', '', 'o', 'Parents bear {responsibility} for their children.', 'Rodzice ponoszą odpowiedzialność za dzieci.');
  W('challenge', 'n', 'wyzwanie', 'to challenge – kwestionować', 'o', 'Teaching teenagers is a real {challenge}.', 'Uczenie nastolatków to prawdziwe wyzwanie.');
  W('cause', 'n', 'przyczyna; sprawa (idea)', 'to cause – powodować', 'o', 'What was the main {cause} of the war?', 'Co było główną przyczyną wojny?');
  W('consequence', 'n', 'konsekwencja, skutek', '', 'p', 'The decision had serious {consequences}.', 'Decyzja miała poważne konsekwencje.');
  W('influence', 'n', 'wpływ', 'to influence', 'o', 'Rome had a huge {influence} on European law.', 'Rzym miał ogromny wpływ na prawo europejskie.');
  W('awareness', 'n', 'świadomość', 'aware of – świadomy', 'o', 'Public {awareness} of the issue is growing.', 'Świadomość społeczna tego problemu rośnie.');
  W('belief', 'n', 'przekonanie, wiara', 'lm. beliefs · to believe', 'o', 'Medieval {beliefs} about illness were very different.', 'Średniowieczne przekonania o chorobach były zupełnie inne.');
  W('purpose', 'n', 'cel', '/ˈpɜːpəs/ · on purpose – celowo', 'o', 'What was the {purpose} of the document?', 'Jaki był cel tego dokumentu?');
  W('approach', 'n', 'podejście', 'to approach', 'o', 'We need a new {approach} to teaching.', 'Potrzebujemy nowego podejścia do nauczania.');
  W('identity', 'n', 'tożsamość', '', 'p', 'Language is part of national {identity}.', 'Język jest częścią tożsamości narodowej.');
  W('justice', 'n', 'sprawiedliwość; wymiar sprawiedliwości', '', 'p', 'The victims are still waiting for {justice}.', 'Ofiary wciąż czekają na sprawiedliwość.');

  /* ===================== C1 ===================== */
  L('C1', 'c1_idioms', 'Idiomy (1)');
  W('a blessing in disguise', 'idm', 'szczęście w nieszczęściu', '', 'o', 'Losing that job was {a blessing in disguise}.', 'Utrata tej pracy okazała się szczęściem w nieszczęściu.');
  W('to beat around the bush', 'idm', 'owijać w bawełnę', 'UK też: beat about the bush', 'o', 'Stop {beating around the bush} and tell me.', 'Przestań owijać w bawełnę i powiedz mi.');
  W('to break the ice', 'idm', 'przełamać lody', '', 'o', 'A quick game helped {break the ice}.', 'Krótka gra pomogła przełamać lody.');
  W('the last straw', 'idm', 'ostatnia kropla (która przelała czarę)', '', 'o', 'His rude email was {the last straw}.', 'Jego niegrzeczny mail był ostatnią kroplą.');
  W('to hit the nail on the head', 'idm', 'trafić w sedno', '', 'o', 'You’ve {hit the nail on the head}.', 'Trafiłeś w sedno.');
  W('once in a blue moon', 'idm', 'raz na ruski rok', '', 'o', 'We go to the theatre {once in a blue moon}.', 'Chodzimy do teatru raz na ruski rok.');
  W('to cut corners', 'idm', 'iść na skróty (kosztem jakości)', '', 'o', 'Don’t {cut corners} when you check sources.', 'Nie idź na skróty przy sprawdzaniu źródeł.');
  W('a piece of cake', 'idm', 'bułka z masłem', '', 'o', 'The test was {a piece of cake}.', 'Test był bułką z masłem.');
  W('to let the cat out of the bag', 'idm', 'wygadać się (zdradzić sekret)', '', 'o', 'Who {let the cat out of the bag}?', 'Kto się wygadał?');
  W('to be on the same page', 'idm', 'mieć wspólne zdanie, rozumieć się', '', 'o', 'Let’s make sure we’re {on the same page}.', 'Upewnijmy się, że myślimy tak samo.');
  W('to sit on the fence', 'idm', 'nie opowiadać się po żadnej stronie', '', 'o', 'Politicians often {sit on the fence}.', 'Politycy często nie zajmują stanowiska.');
  W('in the long run', 'idm', 'na dłuższą metę', '', 'o', '{In the long run}, education pays off.', 'Na dłuższą metę edukacja się opłaca.');

  L('C1', 'c1_formal', 'Język formalny');
  W('to acknowledge', 'v', 'przyznać, potwierdzić (odbiór)', 'acknowledgement', 'o', 'We {acknowledge} receipt of your letter.', 'Potwierdzamy otrzymanie Pana listu.');
  W('to enclose', 'v', 'załączać (do listu)', 'Please find enclosed…', 'o', 'Please find {enclosed} a copy of the certificate.', 'W załączeniu przesyłam kopię zaświadczenia.');
  W('regarding', 'f', 'odnośnie do, w sprawie', '= with regard to', 'o', 'I am writing {regarding} your enquiry.', 'Piszę w sprawie Pana zapytania.');
  W('to be grateful', 'phr', 'być wdzięcznym', 'I would be grateful if you could…', 'o', 'I would be {grateful} if you could reply soon.', 'Byłbym wdzięczny za szybką odpowiedź.');
  W('enquiry', 'n', 'zapytanie (UK)', 'US: inquiry', 'o', 'Thank you for your {enquiry}.', 'Dziękujemy za zapytanie.');
  W('to commence', 'v', 'rozpocząć (formalne)', '= begin', 'o', 'The ceremony will {commence} at noon.', 'Ceremonia rozpocznie się w południe.');
  W('prior to', 'f', 'przed (formalne)', '= before', 'o', 'Please register {prior to} your visit.', 'Prosimy o rejestrację przed wizytą.');
  W('to obtain', 'v', 'uzyskać', '', 'o', 'You must {obtain} permission to publish the images.', 'Musi pan uzyskać zgodę na publikację skanów.');
  W('to assist', 'v', 'pomagać (formalne)', 'assistance', 'f', 'Our staff will be happy to {assist} you.', 'Nasi pracownicy chętnie panu pomogą.');
  W('Yours sincerely', 'phr', 'Z poważaniem (gdy znasz nazwisko adresata)', 'Yours faithfully – Dear Sir/Madam', 'o', 'I look forward to hearing from you. {Yours sincerely}, M. Musiał', 'Czekam na odpowiedź. Z poważaniem, M. Musiał');
  W('to whom it may concern', 'phr', 'do wszystkich zainteresowanych', '', 'o', '{To whom it may concern}: this is to certify that…', 'Do wszystkich zainteresowanych: niniejszym zaświadcza się, że…');
  W('at your earliest convenience', 'phr', 'w najbliższym dogodnym terminie', '', 'o', 'Please reply {at your earliest convenience}.', 'Proszę o odpowiedź w najbliższym dogodnym terminie.');

  L('C1', 'c1_verbs', 'Czasowniki precyzyjne');
  W('to undermine', 'v', 'podważać, osłabiać', '', 'o', 'Fake news {undermines} trust in the media.', 'Fałszywe wiadomości podważają zaufanie do mediów.');
  W('to enhance', 'v', 'wzmacniać, poprawiać', '', 'o', 'Technology can {enhance} learning.', 'Technologia może usprawnić naukę.');
  W('to tackle', 'v', 'zmierzyć się z (problemem)', '', 'o', 'The government must {tackle} poverty.', 'Rząd musi zająć się problemem ubóstwa.');
  W('to foster', 'v', 'wspierać, rozwijać', '', 'o', 'Schools should {foster} critical thinking.', 'Szkoły powinny rozwijać krytyczne myślenie.');
  W('to overlook', 'v', 'przeoczyć; wychodzić na (o oknie)', 'overlooked', 'o', 'Historians often {overlook} women’s role in the war.', 'Historycy często pomijają rolę kobiet w wojnie.');
  W('to account for', 'v', 'wyjaśniać; stanowić (odsetek)', '', 'o', 'How do you {account for} the sudden change?', 'Jak wyjaśnisz tę nagłą zmianę?');
  W('to convey', 'v', 'przekazywać (znaczenie, emocje)', '', 'o', 'The letter {conveys} his despair.', 'List oddaje jego rozpacz.');
  W('to emerge', 'v', 'wyłonić się, pojawić się', 'emergence', 'o', 'New evidence {emerged} after the archives opened.', 'Po otwarciu archiwów pojawiły się nowe dowody.');
  W('to endure', 'v', 'znosić, przetrwać', 'enduring – trwały', 'o', 'The city {endured} a two-year siege.', 'Miasto przetrwało dwuletnie oblężenie.');
  W('to entail', 'v', 'pociągać za sobą, wiązać się z', '', 'o', 'What does the job {entail}?', 'Z czym wiąże się ta praca?');
  W('to refute', 'v', 'obalić (tezę)', '', 'o', 'New documents {refuted} the old theory.', 'Nowe dokumenty obaliły starą teorię.');
  W('to uphold', 'v', 'podtrzymać (wyrok); bronić (zasad)', 'upheld', 'o', 'The court {upheld} the verdict.', 'Sąd podtrzymał wyrok.');

  L('C1', 'c1_adj', 'Przymiotniki zaawansowane');
  W('controversial', 'adj', 'kontrowersyjny', '', 't', 'The monument remains {controversial}.', 'Pomnik nadal budzi kontrowersje.');
  W('unprecedented', 'adj', 'bezprecedensowy', '/ʌnˈpresɪdentɪd/', 'p', 'The pandemic caused {unprecedented} disruption.', 'Pandemia spowodowała bezprecedensowe zakłócenia.');
  W('plausible', 'adj', 'prawdopodobny, wiarygodny', 'implausible', 'o', 'His explanation sounds {plausible}.', 'Jego wyjaśnienie brzmi wiarygodnie.');
  W('biased', 'adj', 'stronniczy', 'bias (n.)', 'o', 'The chronicle is clearly {biased}.', 'Kronika jest wyraźnie stronnicza.');
  W('reluctant', 'adj', 'niechętny', 'reluctantly', 'o', 'He was {reluctant} to talk about the war.', 'Niechętnie mówił o wojnie.');
  W('thorough', 'adj', 'gruntowny, dokładny', '/ˈθʌrə/', 'o', 'The archivist did a {thorough} search.', 'Archiwista przeprowadził gruntowną kwerendę.');
  W('vivid', 'adj', 'żywy, barwny (opis)', '', 'o', 'Her diary gives a {vivid} picture of the uprising.', 'Jej dziennik daje żywy obraz powstania.');
  W('feasible', 'adj', 'wykonalny', '', 'o', 'Is the project {feasible}?', 'Czy projekt jest wykonalny?');
  W('ambiguous', 'adj', 'dwuznaczny', '', 'o', 'The treaty’s wording was {ambiguous}.', 'Sformułowania traktatu były dwuznaczne.');
  W('profound', 'adj', 'głęboki (wpływ, zmiana)', '', 'o', 'The war had a {profound} impact on society.', 'Wojna wywarła głęboki wpływ na społeczeństwo.');
  W('widespread', 'adj', 'powszechny, rozpowszechniony', '', 'o', 'Illiteracy was {widespread} in the 19th century.', 'W XIX wieku analfabetyzm był powszechny.');
  W('outdated', 'adj', 'przestarzały', '', 'o', 'This textbook is completely {outdated}.', 'Ten podręcznik jest zupełnie przestarzały.');

  L('C1', 'c1_nuance', 'Słowa mylone');
  W('affect / effect', 'phr', 'wpływać (cz.) / skutek (rz.)', 'affect = v, effect = n', 'o', 'The war {affected} every family.', 'Wojna dotknęła każdą rodzinę.');
  W('rise / raise', 'phr', 'rosnąć (bez dopełnienia) / podnosić (coś)', 'rose, risen / raised', 'o', 'Prices {rise}; governments raise taxes.', 'Ceny rosną; rządy podnoszą podatki.');
  W('economic / economical', 'phr', 'gospodarczy / oszczędny', '', 'o', 'The country faced an {economic} crisis.', 'Kraj stanął w obliczu kryzysu gospodarczego.');
  W('historic / historical', 'phr', 'przełomowy, doniosły / dotyczący historii', 'a historic moment, a historical novel', 'o', '1989 was a {historic} year for Poland.', 'Rok 1989 był dla Polski przełomowy.');
  W('lie / lay', 'phr', 'leżeć / kłaść (coś)', 'lay, lain / laid, laid', 'o', 'The documents {lie} on the desk.', 'Dokumenty leżą na biurku.');
  W('borrow / lend', 'phr', 'pożyczać (od) / pożyczać (komuś)', '', 'o', 'Can I {borrow} your pen?', 'Mogę pożyczyć twój długopis?');
  W('fewer / less', 'phr', 'mniej (policzalne) / mniej (niepoliczalne)', '', 'o', 'There are {fewer} students this year.', 'W tym roku jest mniej uczniów.');
  W('ensure / insure', 'phr', 'zapewnić / ubezpieczyć', '', 'o', 'Please {ensure} that all forms are signed.', 'Proszę upewnić się, że wszystkie formularze są podpisane.');
  W('principal / principle', 'phr', 'główny; dyrektor (szkoły, US) / zasada', '', 'o', 'It’s a matter of {principle}.', 'To kwestia zasad.');
  W('complement / compliment', 'phr', 'uzupełnienie / komplement', '', 'o', 'Thank you for the {compliment}!', 'Dziękuję za komplement!');
  W('stationary / stationery', 'phr', 'nieruchomy / materiały piśmiennicze', '', 'o', 'The train was {stationary} for an hour.', 'Pociąg stał przez godzinę.');
  W('discreet / discrete', 'phr', 'dyskretny / odrębny', '', 'o', 'Please be {discreet} about it.', 'Proszę zachować dyskrecję.');

  L('C1', 'c1_academic', 'Język akademicki');
  W('to argue that', 'phr', 'twierdzić, dowodzić, że', '', 'o', 'Davies {argues that} Poland was the heart of Europe.', 'Davies dowodzi, że Polska była sercem Europy.');
  W('to highlight', 'v', 'podkreślać, uwypuklać', '', 'o', 'The report {highlights} three key problems.', 'Raport uwypukla trzy kluczowe problemy.');
  W('to assess', 'v', 'oceniać', 'assessment', 'o', 'How do historians {assess} his reign?', 'Jak historycy oceniają jego panowanie?');
  W('a body of literature', 'phr', 'dorobek literatury przedmiotu', '', 'o', 'There is a large {body of literature} on the topic.', 'Literatura przedmiotu na ten temat jest obszerna.');
  W('to draw on', 'pv', 'opierać się na, czerpać z', 'drew on · drawn on', 'o', 'The study {draws on} unpublished letters.', 'Opracowanie opiera się na niepublikowanych listach.');
  W('primary source', 'n', 'źródło pierwotne', 'secondary source – opracowanie', 'p', 'A diary is a {primary source}.', 'Dziennik jest źródłem pierwotnym.');
  W('to shed light on', 'phr', 'rzucić światło na', '', 'o', 'The letters {shed light on} his motives.', 'Listy rzucają światło na jego motywy.');
  W('to be attributed to', 'phr', 'być przypisywanym (komuś)', '', 'o', 'The chronicle {is attributed to} Gallus Anonymus.', 'Kronikę przypisuje się Gallowi Anonimowi.');
  W('hence', 'f', 'stąd, zatem', 'formalne', 'o', 'The source is late; {hence} its reliability is limited.', 'Źródło jest późne; stąd ograniczona wiarygodność.');
  W('to a large extent', 'phr', 'w dużym stopniu', '', 'o', 'The war was, {to a large extent}, avoidable.', 'Wojny w dużym stopniu można było uniknąć.');
  W('notably', 'adv', 'zwłaszcza, w szczególności', '', 'o', 'Several countries, {notably} Poland, opposed the plan.', 'Kilka państw, zwłaszcza Polska, sprzeciwiło się planowi.');
  W('in terms of', 'phr', 'pod względem', '', 'o', '{In terms of} population, London was the largest city.', 'Pod względem ludności Londyn był największym miastem.');

  L('C1', 'c1_debate', 'Argumentacja i dyskusja');
  W('to make the case for', 'phr', 'przedstawić argumenty za', '', 'o', 'She {made the case for} teaching local history.', 'Przedstawiła argumenty za nauczaniem historii lokalnej.');
  W('to concede', 'v', 'przyznać (rację, punkt)', '', 'o', 'I {concede} that the evidence is limited.', 'Przyznaję, że dowody są ograniczone.');
  W('that’s a fair point', 'phr', 'to słuszna uwaga', '', 'o', 'Well, {that’s a fair point}.', 'Cóż, to słuszna uwaga.');
  W('with all due respect', 'phr', 'z całym szacunkiem (przed sprzeciwem)', '', 'o', '{With all due respect}, I think you’re wrong.', 'Z całym szacunkiem, myślę, że się mylisz.');
  W('to play devil’s advocate', 'idm', 'być adwokatem diabła', '', 'o', 'Let me {play devil’s advocate} for a moment.', 'Pozwól, że przez chwilę będę adwokatem diabła.');
  W('counterargument', 'n', 'kontrargument', '', 'p', 'Consider the {counterargument} too.', 'Weź pod uwagę także kontrargument.');
  W('to oversimplify', 'v', 'nadmiernie upraszczać', '', 'o', 'Textbooks often {oversimplify} the causes of war.', 'Podręczniki często nadmiernie upraszczają przyczyny wojen.');
  W('to back down', 'pv', 'wycofać się (ze stanowiska)', 'backed down', 'o', 'Neither side was willing to {back down}.', 'Żadna strona nie chciała ustąpić.');
  W('to jump to conclusions', 'idm', 'wyciągać pochopne wnioski', '', 'o', 'Don’t {jump to conclusions}.', 'Nie wyciągaj pochopnych wniosków.');
  W('compelling', 'adj', 'przekonujący, nieodparty', '', 'o', 'The prosecutor presented {compelling} evidence.', 'Prokurator przedstawił przekonujące dowody.');
  W('to take into account', 'phr', 'brać pod uwagę', '', 'o', 'We must {take into account} the context.', 'Musimy wziąć pod uwagę kontekst.');
  W('by and large', 'idm', 'ogólnie rzecz biorąc', '', 'o', '{By and large}, the reform was a success.', 'Ogólnie rzecz biorąc, reforma była sukcesem.');

  /* ===================== C2 ===================== */
  L('C2', 'c2_idioms', 'Idiomy (2)');
  W('to bite the bullet', 'idm', 'zacisnąć zęby i zrobić coś trudnego', '', 'o', 'I finally {bit the bullet} and started my thesis.', 'W końcu zacisnąłem zęby i zacząłem pisać pracę.');
  W('a red herring', 'idm', 'fałszywy trop', '', 'o', 'The anonymous letter turned out to be {a red herring}.', 'Anonimowy list okazał się fałszywym tropem.');
  W('to throw the baby out with the bathwater', 'idm', 'wylać dziecko z kąpielą', '', 'o', 'Reform the system, but don’t {throw the baby out with the bathwater}.', 'Zreformuj system, ale nie wylewaj dziecka z kąpielą.');
  W('the elephant in the room', 'idm', 'problem, o którym wszyscy wiedzą, ale milczą', '', 'o', 'Funding is {the elephant in the room}.', 'Finansowanie to problem, o którym nikt nie mówi.');
  W('to have a chip on one’s shoulder', 'idm', 'mieć kompleks, żywić urazę', '', 'o', 'He {has a chip on his shoulder} about his education.', 'Ma kompleksy na punkcie swojego wykształcenia.');
  W('to steal someone’s thunder', 'idm', 'ukraść komuś show', '', 'o', 'She {stole my thunder} by announcing it first.', 'Ukradła mi show, ogłaszając to pierwsza.');
  W('a Pyrrhic victory', 'idm', 'pyrrusowe zwycięstwo', '', 'p', 'It was {a Pyrrhic victory} – they won but lost the army.', 'To było pyrrusowe zwycięstwo – wygrali, ale stracili armię.');
  W('to cross the Rubicon', 'idm', 'przekroczyć Rubikon', '', 'p', 'By signing, he {crossed the Rubicon}.', 'Podpisując, przekroczył Rubikon.');
  W('to call a spade a spade', 'idm', 'nazywać rzeczy po imieniu', '', 'o', 'Let’s {call a spade a spade}: it was a massacre.', 'Nazwijmy rzeczy po imieniu: to była masakra.');
  W('to add insult to injury', 'idm', 'dolać oliwy do ognia; na domiar złego', '', 'o', 'To {add insult to injury}, it started to rain.', 'Na domiar złego zaczęło padać.');
  W('in a nutshell', 'idm', 'w skrócie', '', 'o', '{In a nutshell}, the plan failed.', 'W skrócie: plan się nie powiódł.');
  W('to go down in history', 'idm', 'przejść do historii', '', 'o', 'The speech {went down in history}.', 'Przemówienie przeszło do historii.');

  L('C2', 'c2_lit', 'Język literacki');
  W('melancholy', 'n', 'melancholia', '', 't', 'A sense of {melancholy} pervades the poem.', 'Poczucie melancholii przenika wiersz.');
  W('dusk', 'n', 'zmierzch', 'dawn – świt', 'o', 'They reached the village at {dusk}.', 'Dotarli do wsi o zmierzchu.');
  W('ephemeral', 'adj', 'ulotny, efemeryczny', '', 'p', 'Fame is {ephemeral}.', 'Sława jest ulotna.');
  W('to linger', 'v', 'pozostawać, nie znikać', '', 'o', 'The smell of smoke {lingered} for days.', 'Zapach dymu utrzymywał się przez kilka dni.');
  W('yearning', 'n', 'tęsknota, pragnienie', 'to yearn for', 'o', 'Exile poetry is full of {yearning} for home.', 'Poezja emigracyjna pełna jest tęsknoty za domem.');
  W('desolate', 'adj', 'opustoszały, ponury', '', 'o', 'After the war the village was {desolate}.', 'Po wojnie wieś była opustoszała.');
  W('to glimmer', 'v', 'migotać, tlić się', 'a glimmer of hope', 'o', 'A {glimmer} of hope remained.', 'Pozostał cień nadziei.');
  W('solitude', 'n', 'samotność (z wyboru)', 'loneliness – samotność (smutna)', 'o', 'The poet sought {solitude} in the mountains.', 'Poeta szukał samotności w górach.');
  W('poignant', 'adj', 'przejmujący', '/ˈpɔɪnjənt/', 'o', 'It’s a {poignant} letter from a soldier to his mother.', 'To przejmujący list żołnierza do matki.');
  W('to wane', 'v', 'słabnąć, zanikać', 'on the wane', 'o', 'The empire’s power began to {wane}.', 'Potęga imperium zaczęła słabnąć.');
  W('foreboding', 'n', 'złe przeczucie', '', 'o', 'He was filled with {foreboding}.', 'Ogarnęło go złe przeczucie.');
  W('the zeitgeist', 'n', 'duch czasu', '', 'p', 'The novel captures {the zeitgeist} of the 1920s.', 'Powieść oddaje ducha lat 20.');

  L('C2', 'c2_rare', 'Słownictwo wyrafinowane');
  W('ubiquitous', 'adj', 'wszechobecny', '/juːˈbɪkwɪtəs/', 'o', 'Smartphones are now {ubiquitous}.', 'Smartfony są dziś wszechobecne.');
  W('meticulous', 'adj', 'skrupulatny', '', 'o', 'She kept {meticulous} records.', 'Prowadziła skrupulatne zapiski.');
  W('to exacerbate', 'v', 'pogarszać, zaostrzać', '', 'o', 'The drought {exacerbated} the famine.', 'Susza pogłębiła głód.');
  W('paramount', 'adj', 'najważniejszy, nadrzędny', '', 'o', 'Safety is {paramount}.', 'Bezpieczeństwo jest najważniejsze.');
  W('inexorable', 'adj', 'nieubłagany', '', 'o', 'The {inexorable} decline of the empire…', 'Nieubłagany upadek imperium…');
  W('to corroborate', 'v', 'potwierdzić (dowodami)', 'corroboration', 'o', 'Other sources {corroborate} his account.', 'Inne źródła potwierdzają jego relację.');
  W('spurious', 'adj', 'fałszywy, pozorny', '', 'o', 'The document turned out to be {spurious}.', 'Dokument okazał się fałszywy.');
  W('to obfuscate', 'v', 'zaciemniać (celowo)', '', 'o', 'Propaganda {obfuscated} the facts.', 'Propaganda zaciemniała fakty.');
  W('quintessential', 'adj', 'wzorcowy, kwintesencjonalny', '', 'p', 'It’s the {quintessential} English village.', 'To wzorcowa angielska wieś.');
  W('to vindicate', 'v', 'oczyścić z zarzutów; dowieść słuszności', '', 'o', 'History {vindicated} his decision.', 'Historia przyznała mu rację.');
  W('serendipity', 'n', 'szczęśliwy traf', '', 'o', 'Finding the letter was pure {serendipity}.', 'Znalezienie listu było czystym szczęśliwym trafem.');
  W('hitherto', 'adv', 'dotychczas (formalne)', '', 'o', 'The archive revealed {hitherto} unknown facts.', 'Archiwum ujawniło nieznane dotąd fakty.');

  L('C2', 'c2_traps', 'Pułapki dla Polaków');
  W('actually', 'adv', 'właściwie, tak naprawdę (NIE: aktualnie)', 'aktualnie – currently, at present', 'f', '{Actually}, I’m from Kraków, not Warsaw.', 'Właściwie jestem z Krakowa, nie z Warszawy.');
  W('eventually', 'adv', 'w końcu, ostatecznie (NIE: ewentualnie)', 'ewentualnie – possibly, alternatively', 'f', 'We {eventually} found the right file.', 'W końcu znaleźliśmy właściwą teczkę.');
  W('sympathetic', 'adj', 'współczujący (NIE: sympatyczny)', 'sympatyczny – nice, likeable', 'f', 'The doctor was very {sympathetic}.', 'Lekarz był bardzo wyrozumiały.');
  W('lecture', 'n', 'wykład (NIE: lektura)', 'lektura – (set) reading', 'f', 'The {lecture} on the Tudors starts at ten.', 'Wykład o Tudorach zaczyna się o dziesiątej.');
  W('fabric', 'n', 'tkanina (NIE: fabryka)', 'fabryka – factory', 'f', 'The flag was made of silk {fabric}.', 'Flaga była uszyta z jedwabnej tkaniny.');
  W('pathetic', 'adj', 'żałosny (NIE: patetyczny)', 'patetyczny – grandiloquent', 'f', 'What a {pathetic} excuse!', 'Co za żałosna wymówka!');
  W('ordinary', 'adj', 'zwyczajny (NIE: ordynarny)', 'ordynarny – vulgar, rude', 'f', 'He was an {ordinary} soldier.', 'Był zwykłym żołnierzem.');
  W('receipt / recipe', 'phr', 'paragon / przepis kulinarny (NIE: recepta!)', 'recepta – prescription', 'f', 'Keep the {receipt} in case you return it.', 'Zachowaj paragon na wypadek zwrotu.');
  W('gymnasium', 'n', 'sala gimnastyczna (NIE: liceum)', 'liceum – secondary school', 'f', 'The exam is held in the school {gymnasium}.', 'Egzamin odbywa się w sali gimnastycznej.');
  W('preservative', 'n', 'konserwant (NIE: prezerwatywa)', 'prezerwatywa – condom', 'f', 'This jam contains no {preservatives}.', 'Ten dżem nie zawiera konserwantów.');
  W('extra', 'adj', 'dodatkowy (NIE: ekstra = super)', 'super – great', 'f', 'There is an {extra} charge for luggage.', 'Za bagaż jest dodatkowa opłata.');
  W('dress', 'n', 'sukienka (NIE: dres)', 'dres – tracksuit', 'f', 'She wore a long blue {dress}.', 'Miała na sobie długą niebieską sukienkę.');

  L('C2', 'c2_register', 'Rejestr i styl');
  W('to put it mildly', 'phr', 'delikatnie mówiąc', '', 'o', 'The results were, {to put it mildly}, disappointing.', 'Wyniki były, delikatnie mówiąc, rozczarowujące.');
  W('to cut a long story short', 'phr', 'krótko mówiąc', '', 'o', '{To cut a long story short}, we missed the train.', 'Krótko mówiąc, spóźniliśmy się na pociąg.');
  W('needless to say', 'phr', 'nie trzeba dodawać, że', '', 'o', '{Needless to say}, the archive was closed.', 'Nie trzeba dodawać, że archiwum było zamknięte.');
  W('so to speak', 'phr', 'że tak powiem', '', 'o', 'He was, {so to speak}, the black sheep of the family.', 'Był, że tak powiem, czarną owcą rodziny.');
  W('it goes without saying', 'phr', 'to oczywiste, rzecz jasna', '', 'o', '{It goes without saying} that sources must be cited.', 'Rzecz jasna, źródła trzeba cytować.');
  W('kind of / sort of', 'phr', 'tak jakby, w pewnym sensie (potoczne)', '', 'o', 'I’m {kind of} tired.', 'Jestem trochę zmęczony.');
  W('mate', 'n', 'kolega, stary (UK, potoczne)', 'US: buddy, dude', 'o', 'Cheers, {mate}!', 'Dzięki, stary!');
  W('gonna / wanna', 'phr', 'going to / want to (potoczne, w mowie)', 'nie w piśmie formalnym', 'o', 'I’m {gonna} be late.', 'Spóźnię się.');
  W('I reckon', 'phr', 'myślę, sądzę (UK, potoczne)', '', 'o', '{I reckon} it’ll rain later.', 'Myślę, że później będzie padać.');
  W('notwithstanding', 'f', 'pomimo (bardzo formalne)', '', 'o', '{Notwithstanding} these difficulties, the project succeeded.', 'Pomimo tych trudności projekt się powiódł.');
  W('heretofore', 'adv', 'dotychczas (prawnicze)', '', 'o', 'Rights {heretofore} granted remain valid.', 'Dotychczas przyznane prawa pozostają w mocy.');
  W('understatement', 'n', 'niedopowiedzenie (typowo brytyjskie)', '„not bad” = świetnie', 'o', '„Quite good” is a British {understatement} for „excellent”.', '„Quite good” to brytyjskie niedopowiedzenie oznaczające „świetny”.');
})();

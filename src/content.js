/* ============================================================
   TREŚCI: dźwięki, fałszywi przyjaciele, wymowa, gramatyka, dialogi
   ============================================================ */
var UA = window.UA || (window.UA = {});

/* ---------- Dźwięki angielskie ----------
   [zapis, jak brzmi (PL), IPA, opis dla Polaka, przykład, znaczenie, pułapka?] */
UA.ALPHABET = [
  ['th (bezdźwięczne)', 'język między zębami', 'θ', 'czubek języka lekko między zębami, wydmuchujesz powietrze – nie „f”, nie „s”', 'think', 'myśleć', 1],
  ['th (dźwięczne)', 'jak wyżej, z głosem', 'ð', 'ta sama pozycja, ale z drganiem strun głosowych – nie „d”, nie „z”', 'this', 'to, ten', 1],
  ['w', 'ł (dawne, wargowe)', 'w', 'usta zaokrąglone jak do „u” – jak polskie „ł” w „łódka”; nie „w”!', 'west', 'zachód', 1],
  ['v', 'w', 'v', 'jak polskie „w” – zęby na dolnej wardze', 'very', 'bardzo'],
  ['i (krótkie)', 'y / i (krótko, luźno)', 'ɪ', 'krótkie, luźne – coś między polskim „y” a „i”', 'ship', 'statek', 1],
  ['ee (długie)', 'i (długie)', 'iː', 'długie, napięte „i”', 'sheep', 'owca', 1],
  ['a (płaskie)', 'e z szeroko otwartą buzią', 'æ', 'szeroko otwarte usta, coś między „a” i „e”', 'cat', 'kot', 1],
  ['e', 'e', 'e', 'jak polskie „e”, trochę węższe', 'bed', 'łóżko'],
  ['u (w cup)', 'krótkie a', 'ʌ', 'krótkie, środkowe „a”', 'cup', 'filiżanka', 1],
  ['ar', 'długie a', 'ɑː', 'długie, głębokie „a” (w brytyjskim bez „r”)', 'car', 'samochód'],
  ['o (krótkie)', 'o', 'ɒ', 'krótkie, otwarte „o” (brytyjskie)', 'hot', 'gorący'],
  ['or / aw', 'długie o', 'ɔː', 'długie, zaokrąglone „o”', 'door', 'drzwi'],
  ['oo (krótkie)', 'krótkie u', 'ʊ', 'krótkie, luźne „u”', 'book', 'książka'],
  ['oo (długie)', 'długie u', 'uː', 'długie „u”', 'food', 'jedzenie'],
  ['ir / ur / er', 'ö (bez zaokrąglenia)', 'ɜː', 'długi dźwięk jak niemieckie „ö”, ale bez zaokrąglania ust', 'bird', 'ptak', 1],
  ['schwa', 'niewyraźne „y/e”', 'ə', 'najczęstszy dźwięk angielskiego – w sylabach nieakcentowanych: about, teacher, banana', 'about', 'o, około', 1],
  ['ay / a_e', 'ej', 'eɪ', 'dwugłoska „ej”', 'day', 'dzień'],
  ['o / oa', 'eł (brytyjskie)', 'əʊ', 'dwugłoska „eł” (US: „oł”) – nie czyste „o”!', 'go', 'iść', 1],
  ['ng', 'nosowe ng', 'ŋ', 'tylne „n” bez wymawiania „g” na końcu: sing [sɪŋ], nie „sing-g”', 'sing', 'śpiewać', 1],
  ['r', 'r bez drgania', 'ɹ', 'język cofnięty, nie drga; w brytyjskim nie wymawia się „r” po samogłosce (car [kɑː])', 'red', 'czerwony', 1],
  ['h', 'h (lekki wydech)', 'h', 'tylko wydech – słabsze niż polskie „ch”', 'house', 'dom'],
  ['końcowe b, d, g, v, z', 'dźwięczne!', 'b d ɡ v z', 'na końcu słowa NIE ubezdźwięczniamy jak po polsku: bag ≠ back, dog ≠ dock', 'bag', 'torba', 1]
];

/* ---------- Fałszywi przyjaciele ----------
   [angielski, prawdziwe znaczenie, mylące polskie skojarzenie, jak powiedzieć to polskie słowo po angielsku, przykład, przykład PL] */
UA.FRIENDS = [
  ['actually', 'właściwie, tak naprawdę', 'aktualnie', 'currently, at the moment', 'Actually, I’m not from London.', 'Właściwie nie jestem z Londynu.'],
  ['eventually', 'w końcu, ostatecznie', 'ewentualnie', 'possibly, alternatively', 'We eventually found the hotel.', 'W końcu znaleźliśmy hotel.'],
  ['sympathetic', 'współczujący', 'sympatyczny', 'nice, friendly, likeable', 'She was very sympathetic when I was ill.', 'Bardzo mi współczuła, kiedy byłem chory.'],
  ['lecture', 'wykład', 'lektura', 'set book, required reading', 'The lecture lasted two hours.', 'Wykład trwał dwie godziny.'],
  ['fabric', 'tkanina', 'fabryka', 'factory', 'This fabric is pure wool.', 'Ta tkanina to czysta wełna.'],
  ['pathetic', 'żałosny', 'patetyczny', 'grandiloquent, solemn', 'That’s a pathetic excuse.', 'To żałosna wymówka.'],
  ['ordinary', 'zwyczajny', 'ordynarny', 'vulgar, rude', 'It was an ordinary day.', 'To był zwyczajny dzień.'],
  ['receipt', 'paragon', 'recepta', 'prescription', 'Keep the receipt.', 'Zachowaj paragon.'],
  ['recipe', 'przepis kulinarny', 'recepta', 'prescription', 'This is my grandmother’s recipe.', 'To przepis mojej babci.'],
  ['gymnasium', 'sala gimnastyczna', 'gimnazjum, liceum', 'secondary school', 'The exam is in the gymnasium.', 'Egzamin jest w sali gimnastycznej.'],
  ['preservative', 'konserwant', 'prezerwatywa', 'condom', 'No artificial preservatives.', 'Bez sztucznych konserwantów.'],
  ['dress', 'sukienka', 'dres', 'tracksuit', 'She bought a new dress.', 'Kupiła nową sukienkę.'],
  ['extra', 'dodatkowy', 'ekstra (super)', 'great, awesome', 'There is an extra charge.', 'Jest dodatkowa opłata.'],
  ['novel', 'powieść', 'nowela', 'short story, novella', 'I’m reading a historical novel.', 'Czytam powieść historyczną.'],
  ['chef', 'szef kuchni', 'szef', 'boss, manager', 'The chef recommends the fish.', 'Szef kuchni poleca rybę.'],
  ['closet', 'szafa (wnękowa, US)', 'klozet', 'toilet', 'Hang your coat in the closet.', 'Powieś płaszcz w szafie.'],
  ['confection', 'słodycz, wyrób cukierniczy', 'konfekcja', 'ready-made clothing', 'The shop sells sweets and confections.', 'Sklep sprzedaje cukierki i wyroby cukiernicze.'],
  ['ambulance', 'karetka', 'ambulans (to akurat to samo)', '–', 'Call an ambulance!', 'Wezwij karetkę!'],
  ['camera', 'aparat fotograficzny', 'kamera (tylko)', 'video camera', 'I forgot my camera.', 'Zapomniałem aparatu.'],
  ['billion', 'miliard (10⁹)', 'bilion (10¹²)', 'trillion', 'The project cost a billion dollars.', 'Projekt kosztował miliard dolarów.'],
  ['transparent', 'przezroczysty; przejrzysty', 'transparent (napis)', 'banner', 'The process should be transparent.', 'Proces powinien być przejrzysty.'],
  ['promotion', 'awans (w pracy)', 'promocja (tylko sklepowa)', 'special offer', 'She got a promotion.', 'Dostała awans.'],
  ['provision', 'zapewnienie; przepis (prawny); zapasy', 'prowizja', 'commission', 'The law includes a provision for teachers.', 'Ustawa zawiera przepis dotyczący nauczycieli.'],
  ['eventual', 'ostateczny', 'ewentualny', 'possible, potential', 'His eventual victory surprised everyone.', 'Jego ostateczne zwycięstwo zaskoczyło wszystkich.'],
  ['physician', 'lekarz', 'fizyk', 'physicist', 'The king’s physician wrote a diary.', 'Nadworny lekarz króla prowadził dziennik.']
];

/* ---------- Pary minimalne (słuchanie) ---------- */
UA.PAIRS = [
  { id: 'ii', name: 'Krótkie [ɪ] czy długie [iː]?', items: [
    ['ship', 'statek', 'sheep', 'owca'], ['bit', 'kawałek', 'beat', 'bić'], ['live', 'mieszkać', 'leave', 'wyjechać'],
    ['fill', 'napełnić', 'feel', 'czuć'], ['sit', 'siedzieć', 'seat', 'miejsce'], ['hit', 'uderzyć', 'heat', 'upał']
  ]},
  { id: 'ae', name: '[æ] czy [e]?', items: [
    ['bad', 'zły', 'bed', 'łóżko'], ['man', 'mężczyzna', 'men', 'mężczyźni'], ['sad', 'smutny', 'said', 'powiedział'],
    ['pan', 'patelnia', 'pen', 'długopis'], ['bag', 'torba', 'beg', 'błagać'], ['had', 'miał', 'head', 'głowa']
  ]},
  { id: 'th', name: 'th czy s / f / d?', items: [
    ['think', 'myśleć', 'sink', 'zlew'], ['three', 'trzy', 'free', 'wolny'], ['thin', 'chudy', 'sin', 'grzech'],
    ['mouth', 'usta', 'mouse', 'mysz'], ['they', 'oni', 'day', 'dzień'], ['thank', 'dziękować', 'tank', 'zbiornik']
  ]},
  { id: 'final', name: 'Dźwięczna czy bezdźwięczna na końcu?', items: [
    ['bag', 'torba', 'back', 'plecy'], ['dog', 'pies', 'dock', 'dok'], ['card', 'karta', 'cart', 'wózek'],
    ['prize', 'nagroda', 'price', 'cena'], ['leave', 'wyjechać', 'leaf', 'liść'], ['eyes', 'oczy', 'ice', 'lód']
  ]},
  { id: 'wv', name: 'w czy v?', items: [
    ['west', 'zachód', 'vest', 'podkoszulek'], ['wine', 'wino', 'vine', 'winorośl'], ['wet', 'mokry', 'vet', 'weterynarz'], ['worse', 'gorszy', 'verse', 'wers']
  ]}
];

/* ---------- Zasady wymowy (karty) ---------- */
UA.RULES = [
  { t: 'th – nie „f”, nie „s”, nie „d”', b: 'Najbardziej słyszalny polski błąd. Czubek języka lekko między zębami i wydmuchanie powietrza: think, three. W wersji dźwięcznej (this, mother) dodaj głos. Ćwicz pary think – sink, three – free.', ex: ['think', 'three', 'this', 'mother'] },
  { t: 'Długość i jakość samogłosek', b: 'ship – sheep, full – fool, live – leave: długość i napięcie zmieniają znaczenie. Polacy mają tylko jedno „i” – trzeba wyćwiczyć dwa.', ex: ['ship', 'sheep', 'live', 'leave'] },
  { t: 'Bez ubezdźwięczniania na końcu', b: 'Po polsku „bóg” brzmi jak „buk”. Po angielsku końcowe b, d, g, v, z zostają dźwięczne: bag ≠ back, dog ≠ dock, prize ≠ price. Samogłoska przed dźwięczną spółgłoską jest też trochę dłuższa.', ex: ['bag', 'back', 'dog', 'dock'] },
  { t: 'Schwa [ə] – dźwięk najczęstszy', b: 'Sylaby nieakcentowane redukują się do krótkiego, niewyraźnego [ə]: about [əˈbaʊt], teacher [ˈtiːtʃə], banana [bəˈnɑːnə]. Wymawianie wszystkich samogłosek „pełno” daje polski akcent.', ex: ['about', 'teacher', 'banana', 'chocolate'] },
  { t: 'Akcent wyrazowy jest ruchomy', b: 'W polskim akcent pada zwykle na przedostatnią sylabę, w angielskim – różnie: PHOtograph, phoTOgraphy, photoGRAphic. Zmienia się nawet znaczenie: a REcord (zapis), to reCORD (nagrywać).', ex: ['photograph', 'photography', 'record', 'history'] },
  { t: 'w to nie polskie „w”', b: 'Angielskie w to zaokrąglone usta, jak w polskim „ł” w „łódka”: west, window, would. Polskie „w” to angielskie v: very, vest.', ex: ['west', 'window', 'very', 'vine'] },
  { t: 'Nieme litery', b: 'Wiele liter się nie wymawia: k w knife, know; w w write, wrong; b w climb, doubt; l w walk, half; t w castle, listen; gh w night, daughter.', ex: ['knife', 'write', 'doubt', 'castle'] },
  { t: 'Słabe formy w zdaniu', b: 'Słowa funkcyjne w zdaniu są zredukowane: „for” to [fə], „to” to [tə], „and” to [ən]: fish and chips [fɪʃ ən tʃɪps]. To klucz do rozumienia szybkiej mowy.', ex: ['fish and chips', 'a cup of tea', 'I want to go', 'for you'] },
  { t: 'Brytyjski czy amerykański?', b: 'W brytyjskim „r” po samogłosce znika (car [kɑː]), a w amerykańskim się wymawia (car [kɑːr]). Brytyjskie „t” jest wyraźne, amerykańskie między samogłoskami brzmi jak „d” (water [ˈwɑːdər]). W Ustawieniach możesz wybrać głos.', ex: ['car', 'water', 'better', 'party'] }
];

/* ---------- Gramatyka kontrastowa ---------- */
UA.GRAMMAR = [
  { id: 'articles', t: 'Przedimki: a, the, czy nic?',
    b: '<p>Polski nie ma przedimków, więc to największa pułapka. Najprostsze reguły:</p><table class="tbl"><tr><td><b>a / an</b></td><td>coś po raz pierwszy, jedno z wielu: <i>I bought a book.</i></td></tr><tr><td><b>the</b></td><td>coś znanego, jedynego albo już wspomnianego: <i>The book is about Napoleon. The sun, the Thames.</i></td></tr><tr><td><b>brak</b></td><td>ogólnie o rzeczach w lm. lub niepoliczalnych: <i>Books are expensive. History is fascinating.</i></td></tr></table><p>Pułapki: <i>the United Kingdom</i>, ale <i>Poland</i>; <i>go to school / to bed / to church</i> (bez przedimka, gdy chodzi o funkcję); <i>play the piano</i>, ale <i>play football</i>.</p>',
    quiz: [
      ['Lubię historię.', ['I like the history.', 'I like history.', 'I like a history.'], 1],
      ['Czytałem wczoraj książkę. Książka była nudna.', ['I read a book yesterday. The book was boring.', 'I read the book yesterday. A book was boring.', 'I read book yesterday. Book was boring.'], 0],
      ['Mieszkam w Wielkiej Brytanii.', ['I live in United Kingdom.', 'I live in the United Kingdom.', 'I live in a United Kingdom.'], 1],
      ['Gra na pianinie.', ['She plays piano the.', 'She plays a piano.', 'She plays the piano.'], 2]
    ] },
  { id: 'perfect', t: 'Present Perfect czy Past Simple?',
    b: '<p>Polski ma jeden czas przeszły, angielski – dwa w tej roli:</p><table class="tbl"><tr><td><b>Past Simple</b> – zakończony moment w przeszłości (często z: yesterday, in 1989, ago, last year)</td><td><i>I visited London in 2019.</i></td></tr><tr><td><b>Present Perfect</b> – doświadczenie, skutek teraz, okres trwający (ever, never, already, yet, just, since, for)</td><td><i>I have visited London three times. I have lost my key.</i></td></tr></table><p>Pułapka: <i>I live here for ten years</i> ✗ → <b>I have lived here for ten years</b> (od dziesięciu lat). <b>for</b> + okres, <b>since</b> + punkt startu: <i>since 2015</i>.</p>',
    quiz: [
      ['Mieszkam tu od 2010 roku.', ['I live here since 2010.', 'I have lived here since 2010.', 'I lived here since 2010.'], 1],
      ['Byłem w Szkocji w zeszłym roku.', ['I have been to Scotland last year.', 'I was in Scotland last year.', 'I am in Scotland last year.'], 1],
      ['Czy byłeś kiedyś w Kew?', ['Were you ever at Kew?', 'Have you ever been to Kew?', 'Did you ever be to Kew?'], 1],
      ['Właśnie skończyłem.', ['I just finish.', 'I have just finished.', 'I finished just.'], 1]
    ] },
  { id: 'conditionals', t: 'Okresy warunkowe (0–3 i mieszane)',
    b: '<table class="tbl"><tr><td><b>0</b> – prawdy ogólne</td><td>If you heat ice, it melts.</td></tr><tr><td><b>1</b> – realna przyszłość</td><td>If it rains, we will stay at home.</td></tr><tr><td><b>2</b> – nierealne teraz</td><td>If I had more time, I would learn Latin.</td></tr><tr><td><b>3</b> – nierealne w przeszłości</td><td>If they had attacked earlier, they would have won.</td></tr><tr><td><b>mieszany</b> – przeszłość → teraz</td><td>If I had studied harder, I would be a doctor now.</td></tr></table><p>Pułapka: po <b>if</b> NIE dajemy <i>will</i> ani <i>would</i>: <i>If it will rain</i> ✗. W 2. okresie formalnie <b>If I were you</b>.</p>',
    quiz: [
      ['Jeśli będzie padać, zostaniemy w domu.', ['If it will rain, we stay at home.', 'If it rains, we will stay at home.', 'If it rained, we will stay at home.'], 1],
      ['Gdybym był tobą, zgodziłbym się.', ['If I were you, I would agree.', 'If I am you, I will agree.', 'If I would be you, I agree.'], 0],
      ['Gdyby Napoleon nie zaatakował Rosji, mógłby wygrać.', ['If Napoleon didn’t attack Russia, he could win.', 'If Napoleon hadn’t attacked Russia, he might have won.', 'If Napoleon wouldn’t attack Russia, he would win.'], 1]
    ] },
  { id: 'reported', t: 'Mowa zależna',
    b: '<p>W mowie zależnej czasy cofają się o „krok w przeszłość” (gdy czasownik wprowadzający jest w przeszłości):</p><table class="tbl"><tr><td>„I am tired.”</td><td>He said (that) he <b>was</b> tired.</td></tr><tr><td>„I have finished.”</td><td>She said she <b>had finished</b>.</td></tr><tr><td>„I will help.”</td><td>He said he <b>would</b> help.</td></tr><tr><td>„Where do you live?”</td><td>She asked where I <b>lived</b>. (szyk zdania oznajmującego!)</td></tr></table><p>Pułapki: <b>say</b> (bez osoby) vs <b>tell</b> + osoba: <i>He told me</i>, ale <i>He said to me</i>. W pytaniach zależnych bez <i>do/does/did</i>.</p>',
    quiz: [
      ['Powiedział mi, że jest zmęczony.', ['He said me that he was tired.', 'He told me that he was tired.', 'He told that he is tired.'], 1],
      ['Zapytała, gdzie mieszkam.', ['She asked where do I live.', 'She asked where I lived.', 'She asked where did I live.'], 1],
      ['Powiedział, że pomoże.', ['He said he will help.', 'He said he would help.', 'He told he would help.'], 1]
    ] },
  { id: 'passive', t: 'Strona bierna',
    b: '<p>Strona bierna jest w angielskim dużo częstsza niż w polskim – zwłaszcza w tekstach naukowych i historycznych:</p><table class="tbl"><tr><td>The castle <b>was built</b> in 1290.</td><td>Zamek zbudowano w 1290 r.</td></tr><tr><td>The letters <b>are kept</b> in Kew.</td><td>Listy przechowuje się w Kew.</td></tr><tr><td>The file <b>has been digitised</b>.</td><td>Teczka została zdigitalizowana.</td></tr><tr><td>He <b>is said to</b> have been a spy.</td><td>Mówi się, że był szpiegiem.</td></tr></table><p>Polskie „zbudowano, mówi się, przechowuje się” to po angielsku zwykle strona bierna.</p>',
    quiz: [
      ['Kościół zbudowano w XII wieku.', ['The church built in the 12th century.', 'The church was built in the 12th century.', 'They built the church was in the 12th century.'], 1],
      ['Dokumenty przechowuje się w Londynie.', ['The documents keep in London.', 'The documents are kept in London.', 'The documents is kept in London.'], 1],
      ['Mówi się, że był bogaty.', ['He is said to have been rich.', 'It says he rich was.', 'He says to be rich.'], 0]
    ] },
  { id: 'usedto', t: 'used to, would, be used to',
    b: '<table class="tbl"><tr><td><b>used to</b> + bezokolicznik</td><td>dawne nawyki i stany: <i>I used to live in Gdańsk.</i> (kiedyś mieszkałem)</td></tr><tr><td><b>would</b> + bezokolicznik</td><td>powtarzające się czynności w przeszłości (bez stanów): <i>Every summer we would go to the sea.</i></td></tr><tr><td><b>be used to</b> + -ing</td><td>być przyzwyczajonym: <i>I’m used to getting up early.</i></td></tr><tr><td><b>get used to</b> + -ing</td><td>przyzwyczajać się: <i>I’m getting used to driving on the left.</i></td></tr></table>',
    quiz: [
      ['Kiedyś mieszkałem w Londynie.', ['I used to live in London.', 'I am used to live in London.', 'I would live in London.'], 0],
      ['Jestem przyzwyczajony do pracy w nocy.', ['I used to working at night.', 'I’m used to working at night.', 'I’m used to work at night.'], 1],
      ['Przyzwyczajam się do jazdy po lewej stronie.', ['I’m getting used to driving on the left.', 'I get used to drive on the left.', 'I used to driving on the left.'], 0]
    ] },
  { id: 'deduction', t: 'Wnioskowanie: must have, can’t have',
    b: '<table class="tbl"><tr><td><b>must have done</b></td><td>na pewno (wniosek): <i>The letter must have been written after 1918.</i></td></tr><tr><td><b>can’t have done</b></td><td>na pewno nie: <i>He can’t have written it – he was in prison.</i></td></tr><tr><td><b>might / may / could have done</b></td><td>może: <i>The document might have been lost in the fire.</i></td></tr><tr><td><b>should have done</b></td><td>powinien był (a nie zrobił): <i>You should have booked earlier.</i></td></tr></table><p>Dla historyka to podstawowe narzędzie: tak formułuje się hipotezy o przeszłości.</p>',
    quiz: [
      ['Na pewno napisał to po wojnie.', ['He must write it after the war.', 'He must have written it after the war.', 'He can’t have written it after the war.'], 1],
      ['Nie mógł tego widzieć – był w Paryżu.', ['He can’t have seen it – he was in Paris.', 'He mustn’t see it – he was in Paris.', 'He couldn’t see it – he is in Paris.'], 0],
      ['Powinieneś był zarezerwować wcześniej.', ['You should book earlier.', 'You should have booked earlier.', 'You must have booked earlier.'], 1]
    ] },
  { id: 'ingto', t: '-ing czy to? (remember, stop, try)',
    b: '<p>Niektóre czasowniki zmieniają znaczenie zależnie od formy:</p><table class="tbl"><tr><td><b>remember doing</b> / <b>remember to do</b></td><td>pamiętam, że zrobiłem / pamiętaj, żeby zrobić</td></tr><tr><td><b>stop smoking</b> / <b>stop to smoke</b></td><td>rzucić palenie / zatrzymać się, żeby zapalić</td></tr><tr><td><b>try opening</b> / <b>try to open</b></td><td>spróbuj otworzyć (eksperyment) / staraj się otworzyć</td></tr></table><p>Tylko <b>-ing</b>: enjoy, avoid, mind, finish, look forward to. Tylko <b>to</b>: want, decide, hope, plan, refuse.</p>',
    quiz: [
      ['Pamiętaj, żeby zamknąć drzwi.', ['Remember closing the door.', 'Remember to close the door.', 'Remember close the door.'], 1],
      ['Nie mogę się doczekać spotkania z tobą.', ['I look forward to see you.', 'I look forward to seeing you.', 'I look forward seeing you.'], 1],
      ['Rzucił palenie w 2010 roku.', ['He stopped to smoke in 2010.', 'He stopped smoking in 2010.', 'He stopped smoke in 2010.'], 1]
    ] },
  { id: 'inversion', t: 'Inwersja dla podkreślenia (C1)',
    b: '<p>W stylu formalnym po przysłówkach przeczących szyk się odwraca, jak w pytaniu:</p><table class="tbl"><tr><td><b>Never have I seen</b> such chaos.</td><td>Nigdy nie widziałem takiego chaosu.</td></tr><tr><td><b>Not only did</b> he lose, but he also…</td><td>Nie tylko przegrał, ale też…</td></tr><tr><td><b>Hardly had</b> we arrived when…</td><td>Ledwo przyjechaliśmy, gdy…</td></tr><tr><td><b>Had I known</b>, I would have helped.</td><td>Gdybym wiedział, pomógłbym. (= If I had known)</td></tr></table>',
    quiz: [
      ['Nigdy nie widziałem tak pięknego rękopisu.', ['Never I have seen such a beautiful manuscript.', 'Never have I seen such a beautiful manuscript.', 'Never seen I have such a beautiful manuscript.'], 1],
      ['Gdybym wiedział, przyszedłbym.', ['Had I known, I would have come.', 'If I would know, I came.', 'Had known I, I would come.'], 0],
      ['Nie tylko przegrał bitwę, ale też stracił tron.', ['Not only he lost the battle…', 'Not only did he lose the battle…', 'Not only lost he the battle…'], 1]
    ] }
];

/* ---------- Dialogi (linie: [rola, angielski, polski]) ---------- */
UA.DIALOGS = [
  { id: 'station', unit: 'tr_train', t: 'Na dworcu', ua: 'At the station', roles: ['Ticket officer', 'Traveller'], lines: [
    [1, 'Hi, could I have a return ticket to York, please?', 'Dzień dobry, poproszę bilet w obie strony do Yorku.'],
    [0, 'Are you coming back today?', 'Wraca pan dziś?'],
    [1, 'No, on Sunday.', 'Nie, w niedzielę.'],
    [0, 'That’s an open return, then. Sixty-four pounds, please. Do you have a railcard?', 'W takim razie bilet powrotny otwarty. Sześćdziesiąt cztery funty. Ma pan kartę zniżkową?'],
    [1, 'No, I don’t. Which platform does the train leave from?', 'Nie. Z którego peronu odjeżdża pociąg?'],
    [0, 'Platform four, at ten fifteen. You’ll need to change at Doncaster.', 'Z czwartego, o dziesiątej piętnaście. Przesiadka w Doncaster.'],
    [1, 'Great, thanks a lot.', 'Świetnie, dziękuję bardzo.'],
    [0, 'You’re welcome. Have a good trip!', 'Proszę bardzo. Udanej podróży!']
  ]},
  { id: 'checkin', unit: 'tr_hotel', t: 'W hotelu', ua: 'Checking in', roles: ['Receptionist', 'Guest'], lines: [
    [1, 'Good evening. I have a reservation under the name Nowak.', 'Dobry wieczór. Mam rezerwację na nazwisko Nowak.'],
    [0, 'Welcome! A single room for three nights, is that right?', 'Witamy! Pokój jednoosobowy na trzy noce, zgadza się?'],
    [1, 'Yes. Is breakfast included?', 'Tak. Czy śniadanie jest w cenie?'],
    [0, 'It is – from seven till half past nine in the dining room.', 'Tak – od siódmej do wpół do dziesiątej w jadalni.'],
    [1, 'Lovely. And what’s the Wi-Fi password?', 'Świetnie. A jakie jest hasło do Wi-Fi?'],
    [0, 'It’s on your key card. Your room is on the second floor; the lift is just over there.', 'Jest na karcie do drzwi. Pokój jest na drugim piętrze, winda jest tam.'],
    [1, 'Can I leave my luggage here after check-out?', 'Czy mogę zostawić tu bagaż po wymeldowaniu?'],
    [0, 'Of course, no problem at all.', 'Oczywiście, żaden problem.']
  ]},
  { id: 'pub', unit: 'tr_food', t: 'W pubie', ua: 'At the pub', roles: ['Bartender', 'Customer'], lines: [
    [0, 'Hiya, what can I get you?', 'Cześć, co podać?'],
    [1, 'Two pints of the local ale, please. And are you still serving food?', 'Dwie pinty lokalnego ale, proszę. Czy jeszcze wydajecie jedzenie?'],
    [0, 'Kitchen’s open till nine. The fish and chips are very popular.', 'Kuchnia jest otwarta do dziewiątej. Ryba z frytkami jest bardzo popularna.'],
    [1, 'Sounds great – two fish and chips, then. I’m allergic to nuts, by the way.', 'Brzmi świetnie – to dwa razy ryba z frytkami. Przy okazji: mam alergię na orzechy.'],
    [0, 'No nuts in that, don’t worry. What’s your table number?', 'Tam nie ma orzechów, spokojnie. Jaki jest numer stolika?'],
    [1, 'Table twelve, by the window.', 'Stolik dwanaście, przy oknie.'],
    [0, 'Lovely. That’s thirty-two pounds altogether.', 'Świetnie. Razem trzydzieści dwa funty.'],
    [1, 'Here you go. Cheers!', 'Proszę. Dzięki!']
  ]},
  { id: 'directions', unit: 'tr_way', t: 'Pytanie o drogę', ua: 'Asking for directions', roles: ['Tourist', 'Local'], lines: [
    [0, 'Excuse me, how do I get to the National Gallery?', 'Przepraszam, jak dojdę do National Gallery?'],
    [1, 'Go straight on until you reach Trafalgar Square. It’s on the north side.', 'Proszę iść prosto aż do Trafalgar Square. Jest po północnej stronie.'],
    [0, 'Is it far?', 'Czy to daleko?'],
    [1, 'Not at all – about ten minutes on foot.', 'Wcale nie – jakieś dziesięć minut pieszo.'],
    [0, 'Could you show me on the map?', 'Może mi pan pokazać na mapie?'],
    [1, 'Sure. We’re here, and the gallery is right here, opposite Nelson’s Column.', 'Jasne. Jesteśmy tu, a galeria jest tutaj, naprzeciwko Kolumny Nelsona.'],
    [0, 'Brilliant, thank you so much!', 'Super, bardzo dziękuję!'],
    [1, 'No worries. Enjoy your visit!', 'Nie ma sprawy. Miłego zwiedzania!']
  ]},
  { id: 'kew', unit: 'ar_archive', t: 'W The National Archives', ua: 'At The National Archives', roles: ['Archivist', 'Researcher'], lines: [
    [1, 'Good morning. I’d like to order some documents. I’m researching Polish airmen in the Second World War.', 'Dzień dobry. Chciałbym zamówić dokumenty. Badam losy polskich lotników w czasie II wojny światowej.'],
    [0, 'Do you have a reader’s ticket?', 'Ma pan kartę czytelnika?'],
    [1, 'Not yet. What do I need?', 'Jeszcze nie. Co jest potrzebne?'],
    [0, 'You need proof of identity and proof of address. After that you can order documents online in advance.', 'Potrzebny jest dokument tożsamości i potwierdzenie adresu. Potem może pan zamawiać dokumenty online z wyprzedzeniem.'],
    [1, 'I found a file in the online catalogue. The reference is AIR 50/112.', 'Znalazłem teczkę w katalogu online. Sygnatura to AIR 50/112.'],
    [0, 'Great. It should be ready in the reading room in about an hour.', 'Świetnie. Powinna być gotowa w czytelni za mniej więcej godzinę.'],
    [1, 'Am I allowed to take photographs?', 'Czy mogę robić zdjęcia?'],
    [0, 'Yes, for research purposes, but please don’t use flash.', 'Tak, do celów badawczych, ale proszę nie używać lampy błyskowej.']
  ]},
  { id: 'ancestor', unit: 'ar_records', t: 'Szukam przodka', ua: 'Tracing an ancestor', roles: ['Volunteer', 'Visitor'], lines: [
    [1, 'I’m trying to trace my great-uncle. He came to Britain with the Polish army in 1940.', 'Próbuję odnaleźć ślady mojego stryjecznego dziadka. Przybył do Wielkiej Brytanii z polskim wojskiem w 1940 roku.'],
    [0, 'Did he stay in Britain after the war?', 'Czy został w Wielkiej Brytanii po wojnie?'],
    [1, 'Yes, I think he settled in Manchester.', 'Tak, chyba osiadł w Manchesterze.'],
    [0, 'Then check the electoral registers and his naturalisation record. He may also appear in the Polish Resettlement Corps files.', 'W takim razie proszę sprawdzić rejestry wyborców i akta naturalizacji. Może też figurować w aktach Polskiego Korpusu Przysposobienia i Rozmieszczenia.'],
    [1, 'Are those records open to the public?', 'Czy te akta są publicznie dostępne?'],
    [0, 'Most of them are. Some personal files are still closed, but you can request a review.', 'Większość tak. Część akt osobowych jest wciąż zastrzeżona, ale można złożyć wniosek o ich przegląd.'],
    [1, 'Thank you – that’s really helpful.', 'Dziękuję – to bardzo pomocne.']
  ]},
  { id: 'interview', unit: 'b1_work', t: 'Rozmowa o pracę', ua: 'A job interview', roles: ['Interviewer', 'Candidate'], lines: [
    [0, 'So, tell me a little about yourself.', 'Proszę powiedzieć coś o sobie.'],
    [1, 'I’ve been teaching history for fifteen years, mostly at secondary level.', 'Uczę historii od piętnastu lat, głównie w szkole średniej.'],
    [0, 'What would you say is your greatest strength?', 'Jaka jest pana największa mocna strona?'],
    [1, 'I’d say I’m good at making the past come alive for students.', 'Powiedziałbym, że potrafię ożywić przeszłość dla uczniów.'],
    [0, 'And a weakness?', 'A słaba strona?'],
    [1, 'I tend to take on too much, but I’m learning to delegate.', 'Mam skłonność do brania na siebie za dużo, ale uczę się delegować.'],
    [0, 'Why do you want to work with us?', 'Dlaczego chce pan z nami pracować?'],
    [1, 'Your museum’s education programme is outstanding, and I’d love to be part of it.', 'Program edukacyjny waszego muzeum jest wybitny i chętnie bym go współtworzył.']
  ]},
  { id: 'debate', unit: 'c1_debate', t: 'Dyskusja: pomniki', ua: 'Should statues come down?', roles: ['Anna', 'James'], lines: [
    [0, 'I think statues of controversial figures should be moved to museums.', 'Uważam, że pomniki kontrowersyjnych postaci powinny trafić do muzeów.'],
    [1, 'I see what you mean, but isn’t that rewriting history?', 'Rozumiem, o co ci chodzi, ale czy to nie jest przepisywanie historii?'],
    [0, 'Not really. A museum gives context; a statue in a square celebrates someone.', 'Niezupełnie. Muzeum daje kontekst, a pomnik na placu kogoś czci.'],
    [1, 'That’s a fair point. Still, we shouldn’t judge the past only by today’s standards.', 'Słuszna uwaga. Mimo to nie powinniśmy oceniać przeszłości wyłącznie dzisiejszą miarą.'],
    [0, 'With all due respect, some actions were condemned even at the time.', 'Z całym szacunkiem, niektóre czyny potępiano już wtedy.'],
    [1, 'I concede that. Perhaps the answer is an information plaque rather than removal.', 'Przyznaję. Może rozwiązaniem jest tablica informacyjna zamiast usuwania.']
  ]}
];

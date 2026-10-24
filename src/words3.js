/* ============================================================
   ŚCIEŻKI TEMATYCZNE (od poziomu początkującego, otwarte od razu)
   TR – Podróż: Wielka Brytania, Irlandia, USA
   AR – Archiwum i historia: kwerendy, dokumenty, stare pismo, Polacy w Wielkiej Brytanii
   ============================================================ */
var UA = window.UA || (window.UA = {});
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur });
  }

  /* ===================== PODRÓŻ ===================== */
  L('TR', 'tr_basics', 'Podstawy i grzeczność');
  W('Excuse me', 'phr', 'przepraszam (zaczepiając kogoś)', 'Sorry – przepraszam (za coś)', 'o', '{Excuse me}, is this seat taken?', 'Przepraszam, czy to miejsce jest zajęte?');
  W('Could you help me, please?', 'phr', 'czy mógłby mi pan pomóc?', '', 'o', '{Could you help me, please?} I’m lost.', 'Czy mógłby mi pan pomóc? Zgubiłem się.');
  W('Could you speak more slowly?', 'phr', 'czy może pan mówić wolniej?', '', 'o', 'Sorry, {could you speak more slowly?}', 'Przepraszam, czy może pan mówić wolniej?');
  W('Pardon?', 'phr', 'słucham? (proszę powtórzyć)', 'też: Sorry?', 'o', '{Pardon?} I didn’t catch that.', 'Słucham? Nie dosłyszałem.');
  W('Cheers!', 'phr', 'dzięki! / na zdrowie! (UK)', '', 'o', '{Cheers}, mate!', 'Dzięki, stary!');
  W('No worries', 'phr', 'nie ma sprawy', '', 'o', '— Thanks a lot! — {No worries}.', '— Wielkie dzięki! — Nie ma sprawy.');
  W('How much is it?', 'phr', 'ile to kosztuje?', '', 'o', '{How much is it}, please?', 'Ile to kosztuje?');
  W('I’d like …', 'phr', 'poproszę…, chciałbym…', '= I would like', 'o', '{I’d like} a coffee, please.', 'Poproszę kawę.');
  W('Do you take cards?', 'phr', 'czy przyjmujecie karty?', '', 'o', '{Do you take cards}, or is it cash only?', 'Przyjmujecie karty czy tylko gotówkę?');
  W('Where is the nearest …?', 'phr', 'gdzie jest najbliższy…?', '', 'o', '{Where is the nearest} cash machine?', 'Gdzie jest najbliższy bankomat?');
  W('toilet', 'n', 'toaleta', 'UK: loo (pot.), US: restroom, bathroom', 'p', 'Where are the {toilets}, please?', 'Gdzie są toalety?');
  W('queue', 'n', 'kolejka', '/kjuː/ · US: line · to queue', 'o', 'Please join the {queue}.', 'Proszę stanąć w kolejce.');
  W('Have a nice day!', 'phr', 'miłego dnia!', '', 'o', 'Thank you. {Have a nice day!}', 'Dziękuję. Miłego dnia!');

  L('TR', 'tr_airport', 'Lotnisko i samolot');
  W('flight', 'n', 'lot', '', 'o', 'Our {flight} is delayed by two hours.', 'Nasz lot jest opóźniony o dwie godziny.');
  W('boarding pass', 'n', 'karta pokładowa', '', 'o', 'Please show your {boarding pass}.', 'Proszę pokazać kartę pokładową.');
  W('gate', 'n', 'wyjście (do samolotu); brama', '', 'o', 'Boarding starts at {gate} 14.', 'Boarding zaczyna się przy wyjściu 14.');
  W('check-in desk', 'n', 'stanowisko odprawy', '', 'p', 'Where is the {check-in desk} for Ryanair?', 'Gdzie jest stanowisko odprawy Ryanaira?');
  W('hand luggage', 'n', 'bagaż podręczny', 'US: carry-on (bag)', 'o', 'Liquids in {hand luggage} must be under 100 ml.', 'Płyny w bagażu podręcznym nie mogą przekraczać 100 ml.');
  W('baggage reclaim', 'n', 'odbiór bagażu', 'US: baggage claim', 'o', 'We waited at {baggage reclaim} for an hour.', 'Czekaliśmy godzinę przy odbiorze bagażu.');
  W('delayed', 'adj', 'opóźniony', 'delay (n.)', 'o', 'The flight to Edinburgh is {delayed}.', 'Lot do Edynburga jest opóźniony.');
  W('cancelled', 'adj', 'odwołany', 'US: canceled', 'p', 'Our flight was {cancelled} because of fog.', 'Nasz lot odwołano z powodu mgły.');
  W('passport control', 'n', 'kontrola paszportowa', 'UK: Border Force', 'p', 'There was a long queue at {passport control}.', 'Przy kontroli paszportowej była długa kolejka.');
  W('customs', 'n', 'odprawa celna, urząd celny', 'nothing to declare', 'o', 'Go through the green channel at {customs}.', 'Przejdź zielonym korytarzem przez odprawę celną.');
  W('to miss a flight', 'phr', 'spóźnić się na samolot', '', 'o', 'Hurry up or we’ll {miss} our {flight}!', 'Pośpiesz się, bo spóźnimy się na samolot!');
  W('My luggage hasn’t arrived.', 'phr', 'mój bagaż nie dotarł', '', 'o', 'Excuse me, {my luggage hasn’t arrived}.', 'Przepraszam, mój bagaż nie dotarł.');
  W('ETA', 'n', 'elektroniczna autoryzacja podróży (UK)', 'Electronic Travel Authorisation', 'o', 'You need an {ETA} to visit the UK.', 'Na wizytę w Wielkiej Brytanii potrzebna jest autoryzacja ETA.');

  L('TR', 'tr_train', 'Pociąg i komunikacja');
  W('return ticket', 'n', 'bilet powrotny (w obie strony)', 'single – w jedną stronę · US: round trip / one-way', 'o', 'A {return ticket} to Oxford, please.', 'Bilet w obie strony do Oksfordu, proszę.');
  W('platform', 'n', 'peron', 'US: track', 't', 'The train leaves from {platform} 9.', 'Pociąg odjeżdża z peronu 9.');
  W('to change trains', 'phr', 'przesiadać się', '', 'o', 'You have to {change trains} at Crewe.', 'Musisz przesiąść się w Crewe.');
  W('timetable', 'n', 'rozkład jazdy', 'US: schedule', 'o', 'Check the {timetable} before you go.', 'Sprawdź rozkład przed wyjazdem.');
  W('the Tube', 'n', 'metro londyńskie', 'US: subway, UK inne miasta: underground / metro', 'o', 'We took {the Tube} to the British Museum.', 'Pojechaliśmy metrem do British Museum.');
  W('Oyster card', 'n', 'karta miejska w Londynie', 'albo płatność zbliżeniowa (contactless)', 'o', 'You can top up your {Oyster card} at the station.', 'Kartę Oyster doładujesz na stacji.');
  W('Mind the gap!', 'phr', 'uwaga na szczelinę! (między pociągiem a peronem)', '', 'o', '„{Mind the gap!}” said the announcement.', '„Uwaga na szczelinę!” – mówił komunikat.');
  W('double-decker', 'n', 'autobus piętrowy', '', 'o', 'We sat on the top deck of a {double-decker}.', 'Siedzieliśmy na górze piętrowego autobusu.');
  W('bus stop', 'n', 'przystanek autobusowy', '', 'p', 'Get off at the next {bus stop}.', 'Wysiądź na następnym przystanku.');
  W('to get off', 'pv', 'wysiadać', 'get on – wsiadać', 'o', 'Where should I {get off} for the Tower?', 'Gdzie mam wysiąść do Tower?');
  W('rush hour', 'n', 'godziny szczytu', '', 'o', 'Avoid the Tube during {rush hour}.', 'Unikaj metra w godzinach szczytu.');
  W('Is this the train to …?', 'phr', 'czy to pociąg do…?', '', 'o', 'Excuse me, {is this the train to} York?', 'Przepraszam, czy to pociąg do Yorku?');
  W('railcard', 'n', 'karta zniżkowa na kolej (UK)', 'np. Two Together, Senior', 'o', 'With a {railcard} you save a third.', 'Z kartą zniżkową oszczędzasz jedną trzecią.');

  L('TR', 'tr_hotel', 'Nocleg');
  W('I have a reservation.', 'phr', 'mam rezerwację', 'under the name …', 'p', 'Good evening, {I have a reservation} under Nowak.', 'Dobry wieczór, mam rezerwację na nazwisko Nowak.');
  W('single room', 'n', 'pokój jednoosobowy', 'double / twin room', 'p', 'I’d like a {single room} for two nights.', 'Poproszę pokój jednoosobowy na dwie noce.');
  W('breakfast included', 'phr', 'śniadanie w cenie', '', 'p', 'Is {breakfast included}?', 'Czy śniadanie jest w cenie?');
  W('to check in', 'pv', 'zameldować się', 'check out – wymeldować się', 'o', 'What time can we {check in}?', 'O której możemy się zameldować?');
  W('reception', 'n', 'recepcja', '', 't', 'Leave your key at {reception}.', 'Zostaw klucz w recepcji.');
  W('towel', 'n', 'ręcznik', '/ˈtaʊəl/', 'o', 'Could we have some more {towels}?', 'Czy możemy dostać więcej ręczników?');
  W('… doesn’t work', 'phr', '… nie działa', '', 'o', 'The heating {doesn’t work}.', 'Ogrzewanie nie działa.');
  W('B&B', 'n', 'pensjonat ze śniadaniem (bed and breakfast)', '', 'o', 'We stayed at a lovely {B&B} in Cornwall.', 'Zatrzymaliśmy się w uroczym pensjonacie w Kornwalii.');
  W('hostel', 'n', 'hostel, schronisko', 'youth hostel', 't', 'The {hostel} has shared dormitories.', 'Hostel ma wspólne sale sypialne.');
  W('What’s the Wi-Fi password?', 'phr', 'jakie jest hasło do Wi-Fi?', '', 'o', 'Sorry, {what’s the Wi-Fi password?}', 'Przepraszam, jakie jest hasło do Wi-Fi?');
  W('noisy', 'adj', 'głośny, hałaśliwy', 'quiet – cichy', 'o', 'Our room is very {noisy}.', 'Nasz pokój jest bardzo głośny.');
  W('Can I leave my luggage here?', 'phr', 'czy mogę zostawić tu bagaż?', '', 'o', '{Can I leave my luggage here} until five?', 'Czy mogę zostawić tu bagaż do piątej?');
  W('ground floor', 'n', 'parter (UK)', 'US: first floor (!)', 'o', 'Breakfast is served on the {ground floor}.', 'Śniadanie podaje się na parterze.');

  L('TR', 'tr_food', 'Jedzenie i pub');
  W('A table for two, please.', 'phr', 'stolik dla dwojga, proszę', '', 'o', 'Hi! {A table for two, please.}', 'Dzień dobry! Stolik dla dwojga, proszę.');
  W('Could we have the bill, please?', 'phr', 'czy możemy prosić o rachunek?', 'US: check', 'o', 'Excuse me, {could we have the bill, please?}', 'Przepraszam, możemy prosić o rachunek?');
  W('I’m allergic to …', 'phr', 'mam alergię na…', '', 'p', '{I’m allergic to} nuts.', 'Mam alergię na orzechy.');
  W('What do you recommend?', 'phr', 'co pan poleca?', '', 'o', '{What do you recommend} today?', 'Co pan dziś poleca?');
  W('starter', 'n', 'przystawka', 'main course – danie główne, dessert/pudding – deser · US: appetizer, entrée', 'o', 'For a {starter}, I’ll have the soup.', 'Na przystawkę wezmę zupę.');
  W('tap water', 'n', 'woda z kranu (darmowa)', 'still / sparkling water', 'o', 'Could we have some {tap water}, please?', 'Czy możemy prosić wodę z kranu?');
  W('to go / to take away', 'phr', 'na wynos', 'US: to go, UK: takeaway', 'o', 'Two coffees {to take away}, please.', 'Dwie kawy na wynos, proszę.');
  W('fish and chips', 'n', 'ryba z frytkami', '', 'p', 'We had {fish and chips} by the sea.', 'Zjedliśmy rybę z frytkami nad morzem.');
  W('full English breakfast', 'n', 'pełne angielskie śniadanie', 'jajka, bekon, kiełbaski, fasolka, tost', 'p', 'The hotel serves a {full English breakfast}.', 'Hotel podaje pełne angielskie śniadanie.');
  W('a pint', 'n', 'pinta (piwa, ok. 0,57 l)', 'half a pint', 'o', 'Two {pints} of bitter, please.', 'Dwie pinty bittera, proszę.');
  W('tip', 'n', 'napiwek', 'service charge – opłata za obsługę', 'o', 'Is a {tip} included?', 'Czy napiwek jest wliczony?');
  W('vegetarian', 'adj', 'wegetariański; wegetarianin', 'vegan', 't', 'Do you have any {vegetarian} dishes?', 'Macie dania wegetariańskie?');
  W('Enjoy your meal!', 'phr', 'smacznego!', '', 'o', 'Here you are. {Enjoy your meal!}', 'Proszę bardzo. Smacznego!');

  L('TR', 'tr_money', 'Pieniądze i zakupy');
  W('cash machine', 'n', 'bankomat', 'UK też: cashpoint, US: ATM', 'o', 'Is there a {cash machine} nearby?', 'Czy jest w pobliżu bankomat?');
  W('contactless', 'adj', 'zbliżeniowy (płatność)', '', 'p', 'Can I pay by {contactless}?', 'Mogę zapłacić zbliżeniowo?');
  W('change', 'n', 'reszta; drobne', 'Keep the change.', 'o', 'Here’s your {change}.', 'Proszę, pana reszta.');
  W('pound', 'n', 'funt', 'p (pence) – pens; quid (pot.)', 'p', 'It costs five {pounds} fifty.', 'To kosztuje pięć funtów pięćdziesiąt.');
  W('receipt', 'n', 'paragon, pokwitowanie', '/rɪˈsiːt/', 'o', 'Can I have a {receipt}, please?', 'Mogę prosić o paragon?');
  W('to try on', 'pv', 'przymierzać', '', 'o', 'Can I {try} this jacket {on}?', 'Mogę przymierzyć tę kurtkę?');
  W('fitting room', 'n', 'przymierzalnia', 'US: dressing room', 'o', 'The {fitting rooms} are on the left.', 'Przymierzalnie są po lewej.');
  W('refund', 'n', 'zwrot pieniędzy', 'to refund', 'o', 'Can I get a {refund}?', 'Czy mogę dostać zwrot pieniędzy?');
  W('on sale', 'phr', 'w promocji, przeceniony', '', 'o', 'These books are {on sale}.', 'Te książki są przecenione.');
  W('I’m just looking.', 'phr', 'tylko się rozglądam', '', 'o', 'Thanks, {I’m just looking}.', 'Dziękuję, tylko się rozglądam.');
  W('souvenir', 'n', 'pamiątka', '/ˌsuːvəˈnɪə/', 'p', 'We bought a {souvenir} at the castle shop.', 'Kupiliśmy pamiątkę w sklepiku w zamku.');
  W('charity shop', 'n', 'sklep charytatywny (z używanymi rzeczami)', 'US: thrift store', 'o', 'I found old maps in a {charity shop}.', 'Znalazłem stare mapy w sklepie charytatywnym.');

  L('TR', 'tr_help', 'Zdrowie i nagłe wypadki');
  W('Help!', 'phr', 'pomocy!', '', 'o', '{Help}! Call an ambulance!', 'Pomocy! Wezwijcie karetkę!');
  W('Call 999!', 'phr', 'dzwoń pod 999! (numer alarmowy w UK)', 'US: 911 · 112 też działa w UK', 'o', 'Someone has collapsed – {call 999}!', 'Ktoś zasłabł – dzwoń pod 999!');
  W('A&E', 'n', 'izba przyjęć, SOR (UK)', 'Accident and Emergency · US: ER', 'o', 'We waited four hours in {A&E}.', 'Czekaliśmy cztery godziny na SOR-ze.');
  W('pharmacy', 'n', 'apteka', 'UK też: chemist’s, US: drugstore', 'p', 'Is there a {pharmacy} open now?', 'Czy jest teraz otwarta apteka?');
  W('painkiller', 'n', 'środek przeciwbólowy', '', 'o', 'Do you have any {painkillers}?', 'Ma pan coś przeciwbólowego?');
  W('plaster', 'n', 'plaster (UK)', 'US: Band-Aid', 'p', 'I need a {plaster} for my finger.', 'Potrzebuję plastra na palec.');
  W('I feel sick.', 'phr', 'niedobrze mi', '', 'o', 'Can we stop? {I feel sick}.', 'Możemy się zatrzymać? Niedobrze mi.');
  W('police station', 'n', 'posterunek policji', '', 'p', 'Where is the nearest {police station}?', 'Gdzie jest najbliższy posterunek policji?');
  W('My wallet has been stolen.', 'phr', 'ukradziono mi portfel', '', 'o', 'Officer, {my wallet has been stolen}.', 'Panie władzo, ukradziono mi portfel.');
  W('I’ve lost my passport.', 'phr', 'zgubiłem paszport', '', 'o', 'Help me, please – {I’ve lost my passport}.', 'Proszę mi pomóc – zgubiłem paszport.');
  W('embassy', 'n', 'ambasada', 'consulate – konsulat', 'o', 'I need to contact the Polish {embassy}.', 'Muszę skontaktować się z polską ambasadą.');
  W('travel insurance', 'n', 'ubezpieczenie podróżne', '', 'o', 'Do you have {travel insurance}?', 'Masz ubezpieczenie podróżne?');
  W('lost property', 'n', 'biuro rzeczy znalezionych', 'US: lost and found', 'o', 'Ask at {lost property}.', 'Zapytaj w biurze rzeczy znalezionych.');

  L('TR', 'tr_way', 'Orientacja w mieście');
  W('How do I get to …?', 'phr', 'jak dojdę/dojadę do…?', '', 'o', 'Excuse me, {how do I get to} Big Ben?', 'Przepraszam, jak dojdę do Big Bena?');
  W('Is it far?', 'phr', 'czy to daleko?', '', 'o', 'The museum… {is it far}?', 'Muzeum… czy to daleko?');
  W('turn left', 'phr', 'skręć w lewo', 'turn right – w prawo', 'o', '{Turn left} at the traffic lights.', 'Skręć w lewo na światłach.');
  W('go straight on', 'phr', 'idź prosto', 'US: go straight ahead', 'o', '{Go straight on} for five minutes.', 'Idź prosto przez pięć minut.');
  W('traffic lights', 'n', 'światła drogowe', '', 'o', 'Cross at the {traffic lights}.', 'Przejdź na światłach.');
  W('crossroads', 'n', 'skrzyżowanie', 'US: intersection', 'o', 'At the {crossroads}, turn right.', 'Na skrzyżowaniu skręć w prawo.');
  W('opposite', 'f', 'naprzeciwko', '', 'o', 'The hotel is {opposite} the station.', 'Hotel jest naprzeciwko dworca.');
  W('next to', 'f', 'obok', '', 'o', 'The café is {next to} the bank.', 'Kawiarnia jest obok banku.');
  W('around the corner', 'phr', 'za rogiem', '', 'o', 'The pharmacy is just {around the corner}.', 'Apteka jest zaraz za rogiem.');
  W('I’m lost.', 'phr', 'zgubiłem się', '', 'o', 'Sorry, {I’m lost}. Where are we?', 'Przepraszam, zgubiłem się. Gdzie jesteśmy?');
  W('Could you show me on the map?', 'phr', 'może mi pan pokazać na mapie?', '', 'o', '{Could you show me on the map?}', 'Może mi pan pokazać na mapie?');
  W('Look right!', 'phr', 'patrz w prawo! (napis na jezdni w Londynie – ruch lewostronny)', '', 'o', 'In London the road says: „{Look right}”.', 'W Londynie na jezdni jest napis: „Patrz w prawo”.');

  L('TR', 'tr_sights', 'Zwiedzanie');
  W('admission', 'n', 'wstęp (opłata)', 'admission free – wstęp wolny', 'o', 'How much is {admission}?', 'Ile kosztuje wstęp?');
  W('concession', 'n', 'bilet ulgowy (UK)', 'concessions: students, seniors', 'o', 'Is there a {concession} for teachers?', 'Czy jest zniżka dla nauczycieli?');
  W('guided tour', 'n', 'zwiedzanie z przewodnikiem', '', 'o', 'The next {guided tour} starts at two.', 'Następne zwiedzanie z przewodnikiem zaczyna się o drugiej.');
  W('opening hours', 'n', 'godziny otwarcia', '', 'o', 'What are the {opening hours}?', 'Jakie są godziny otwarcia?');
  W('cathedral', 'n', 'katedra', '', 'p', 'Canterbury {Cathedral} is magnificent.', 'Katedra w Canterbury jest wspaniała.');
  W('castle', 'n', 'zamek', '/ˈkɑːsl/', 'o', 'Edinburgh {Castle} stands on a rock.', 'Zamek w Edynburgu stoi na skale.');
  W('stately home', 'n', 'rezydencja arystokratyczna', 'National Trust', 'o', 'We visited a {stately home} in Derbyshire.', 'Zwiedziliśmy rezydencję w hrabstwie Derby.');
  W('No photography', 'phr', 'zakaz fotografowania', '', 'o', 'The sign says „{No photography}”.', 'Napis mówi: „Zakaz fotografowania”.');
  W('gift shop', 'n', 'sklepik z pamiątkami', '', 'o', 'Exit through the {gift shop}.', 'Wyjście przez sklep z pamiątkami.');
  W('free entry', 'phr', 'wstęp wolny', 'większość muzeów państwowych w Londynie', 'o', 'The British Museum has {free entry}.', 'Do British Museum wstęp jest wolny.');
  W('audio guide', 'n', 'audioprzewodnik', '', 'p', 'Is there an {audio guide} in Polish?', 'Czy jest audioprzewodnik po polsku?');
  W('to book in advance', 'phr', 'zarezerwować z wyprzedzeniem', '', 'o', 'You have to {book in advance} for the Tower.', 'Do Tower trzeba rezerwować z wyprzedzeniem.');

  L('TR', 'tr_talk', 'Rozmowa i small talk');
  W('Where are you from?', 'phr', 'skąd jesteś?', '', 'o', 'Nice to meet you! {Where are you from?}', 'Miło cię poznać! Skąd jesteś?');
  W('I’m from Poland.', 'phr', 'jestem z Polski', '', 'p', '{I’m from Poland}, from Kraków.', 'Jestem z Polski, z Krakowa.');
  W('What do you do?', 'phr', 'czym się zajmujesz? (zawodowo)', '', 'o', 'So, {what do you do}?', 'To czym się zajmujesz?');
  W('I’m a history teacher.', 'phr', 'jestem nauczycielem historii', '', 'p', '{I’m a history teacher} at a secondary school.', 'Jestem nauczycielem historii w liceum.');
  W('How’s it going?', 'phr', 'jak leci?', '', 'o', 'Hi Tom, {how’s it going?}', 'Cześć Tom, jak leci?');
  W('Lovely weather, isn’t it?', 'phr', 'piękna pogoda, prawda? (klasyczny small talk)', '', 'o', '{Lovely weather, isn’t it?}', 'Piękna pogoda, prawda?');
  W('Nice to meet you.', 'phr', 'miło cię poznać', '', 'o', 'I’m Marcin. {Nice to meet you.}', 'Jestem Marcin. Miło cię poznać.');
  W('Fancy a cup of tea?', 'phr', 'masz ochotę na herbatę? (UK)', '', 'o', '{Fancy a cup of tea?}', 'Masz ochotę na herbatę?');
  W('That sounds great!', 'phr', 'brzmi świetnie!', '', 'o', '— Let’s go to the pub. — {That sounds great!}', '— Chodźmy do pubu. — Brzmi świetnie!');
  W('I’m afraid …', 'phr', 'obawiam się, że… (grzecznie przed złą wiadomością)', '', 'o', '{I’m afraid} I can’t come.', 'Obawiam się, że nie dam rady przyjść.');
  W('Safe travels!', 'phr', 'bezpiecznej podróży!', 'też: Have a safe trip!', 'o', 'Thanks for everything – {safe travels!}', 'Dzięki za wszystko – bezpiecznej podróży!');
  W('Keep in touch!', 'phr', 'bądźmy w kontakcie!', '', 'o', 'It was great to meet you. {Keep in touch!}', 'Świetnie było cię poznać. Bądźmy w kontakcie!');

  /* ===================== ARCHIWUM I HISTORIA ===================== */
  L('AR', 'ar_archive', 'W archiwum');
  W('archive', 'n', 'archiwum', 'często lm.: the archives · /ˈɑːkaɪv/', 't', 'I spent a week in the {archives}.', 'Spędziłem tydzień w archiwum.');
  W('reading room', 'n', 'czytelnia', '', 'o', 'The {reading room} opens at nine.', 'Czytelnia otwiera się o dziewiątej.');
  W('archivist', 'n', 'archiwista', '/ˈɑːkɪvɪst/', 't', 'The {archivist} helped me find the file.', 'Archiwista pomógł mi znaleźć teczkę.');
  W('reader’s ticket', 'n', 'karta czytelnika', '', 'o', 'You need a {reader’s ticket} to order documents.', 'Do zamawiania dokumentów potrzebna jest karta czytelnika.');
  W('catalogue', 'n', 'katalog', 'US: catalog · online catalogue', 'p', 'Search the online {catalogue} first.', 'Najpierw przeszukaj katalog online.');
  W('finding aid', 'n', 'pomoc ewidencyjna, inwentarz', '', 'o', 'The {finding aid} lists all the files in the collection.', 'Inwentarz wymienia wszystkie teczki w zespole.');
  W('collection', 'n', 'zbiór, zespół (archiwalny)', 'też: fonds, record group', 'p', 'The {collection} contains 300 boxes.', 'Zbiór liczy 300 pudeł.');
  W('reference', 'n', 'sygnatura; odniesienie, przypis', 'np. TNA, FO 371/123', 'o', 'Write down the full {reference}.', 'Zapisz pełną sygnaturę.');
  W('file', 'n', 'teczka, akta (jednostka)', 'też: folder, item', 'p', 'I ordered three {files}.', 'Zamówiłem trzy teczki.');
  W('folio', 'n', 'karta (rękopisu)', 'f. 12r / 12v – recto / verso', 'p', 'The entry is on {folio} 45 verso.', 'Wpis jest na karcie 45v.');
  W('to order a document', 'phr', 'zamówić dokument (do czytelni)', '', 'o', 'You can {order a document} online before your visit.', 'Dokument możesz zamówić online przed wizytą.');
  W('closed record', 'n', 'akta zastrzeżone (niedostępne)', 'closure period – okres karencji', 'o', 'Some files are still {closed records}.', 'Niektóre akta wciąż są zastrzeżone.');
  W('digitised', 'adj', 'zdigitalizowany', 'US: digitized', 'p', 'The census is {digitised} and available online.', 'Spis jest zdigitalizowany i dostępny online.');

  L('AR', 'ar_records', 'Rodzaje dokumentów');
  W('parish register', 'n', 'księga parafialna (metrykalna)', 'baptisms, marriages, burials', 'o', 'His baptism is recorded in the {parish register}.', 'Jego chrzest zapisano w księdze parafialnej.');
  W('census', 'n', 'spis ludności', 'UK: co 10 lat od 1801 r.', 'o', 'The 1921 {census} was released in 2022.', 'Spis z 1921 roku udostępniono w 2022 roku.');
  W('birth certificate', 'n', 'akt urodzenia', 'marriage / death certificate', 'o', 'I need a copy of his {birth certificate}.', 'Potrzebuję kopii jego aktu urodzenia.');
  W('will', 'n', 'testament', 'probate – postępowanie spadkowe', 'o', 'In his {will} he left everything to the church.', 'W testamencie zapisał wszystko Kościołowi.');
  W('deed', 'n', 'akt (notarialny, nadania)', 'title deeds – akty własności', 'o', 'The {deed} of sale is dated 1765.', 'Akt sprzedaży jest datowany na 1765 rok.');
  W('charter', 'n', 'przywilej, dokument nadania; karta', 'Magna Carta (1215)', 'p', 'The town received its {charter} in 1257.', 'Miasto otrzymało przywilej w 1257 roku.');
  W('manuscript', 'n', 'rękopis', '', 't', 'The {manuscript} is kept in the British Library.', 'Rękopis jest przechowywany w British Library.');
  W('diary', 'n', 'dziennik, pamiętnik', 'NIE: dairy (mleczarnia)', 'o', 'Her {diary} describes daily life during the Blitz.', 'Jej dziennik opisuje codzienne życie w czasie Blitzu.');
  W('correspondence', 'n', 'korespondencja', '', 'p', 'The {correspondence} between the two kings survives.', 'Zachowała się korespondencja obu królów.');
  W('memoir', 'n', 'wspomnienia, pamiętnik', 'zwykle lm.: memoirs', 'p', 'The general wrote his {memoirs} in exile.', 'Generał napisał wspomnienia na emigracji.');
  W('minutes', 'n', 'protokół (z posiedzenia)', 'tylko lm. w tym znaczeniu', 'o', 'The {minutes} of the meeting were signed by the secretary.', 'Protokół z posiedzenia podpisał sekretarz.');
  W('naturalisation record', 'n', 'akta naturalizacji (obywatelstwa)', 'US: naturalization', 'o', 'His {naturalisation record} shows he came from Poland.', 'Akta naturalizacji pokazują, że przybył z Polski.');

  L('AR', 'ar_reading', 'Stare pismo i daty');
  W('handwriting', 'n', 'charakter pisma', '', 'o', 'The clerk’s {handwriting} is almost illegible.', 'Pismo urzędnika jest prawie nieczytelne.');
  W('illegible', 'adj', 'nieczytelny', 'legible – czytelny', 'p', 'The surname is {illegible}.', 'Nazwisko jest nieczytelne.');
  W('palaeography', 'n', 'paleografia', 'US: paleography', 't', 'I’m taking a course in {palaeography}.', 'Chodzę na kurs paleografii.');
  W('secretary hand', 'n', 'pismo sekretarskie (XVI–XVII w.)', '', 'o', 'Tudor wills are often written in {secretary hand}.', 'Testamenty z czasów Tudorów często pisano pismem sekretarskim.');
  W('to transcribe', 'v', 'przepisać, sporządzić transkrypcję', 'transcription', 'p', 'I {transcribed} the letter word by word.', 'Przepisałem list słowo po słowie.');
  W('abbreviation', 'n', 'skrót', '', 'o', 'What does the {abbreviation} „bapt.” mean?', 'Co znaczy skrót „bapt.”?');
  W('Old Style', 'n', 'stary styl (kalendarz juliański)', 'New Style – gregoriański · skrót: O.S. / N.S.', 'o', 'The date is given in {Old Style}.', 'Data jest podana według starego stylu.');
  W('regnal year', 'n', 'rok panowania (datacja dokumentów)', 'np. 3 Edw. VI', 'o', 'Acts were dated by {regnal year}.', 'Ustawy datowano latami panowania.');
  W('seal', 'n', 'pieczęć', '', 'o', 'The royal {seal} is damaged.', 'Pieczęć królewska jest uszkodzona.');
  W('watermark', 'n', 'znak wodny', '', 'o', 'The {watermark} helps to date the paper.', 'Znak wodny pomaga datować papier.');
  W('to date', 'v', 'datować', 'dating – datowanie', 'o', 'Experts {dated} the map to around 1580.', 'Eksperci datowali mapę na około 1580 rok.');
  W('circa', 'f', 'około (data)', 'skrót: c. / ca.', 'p', 'The church was built {circa} 1200.', 'Kościół zbudowano około 1200 roku.');

  L('AR', 'ar_britain', 'Historia Wielkiej Brytanii');
  W('monarchy', 'n', 'monarchia', 'constitutional monarchy', 't', 'Britain is a constitutional {monarchy}.', 'Wielka Brytania jest monarchią konstytucyjną.');
  W('the Crown', 'n', 'Korona (państwo jako monarchia)', '', 'p', 'The land belonged to {the Crown}.', 'Ziemia należała do Korony.');
  W('the Reformation', 'n', 'reformacja', 'the dissolution of the monasteries', 't', 'Henry VIII started {the Reformation} in England.', 'Henryk VIII zapoczątkował reformację w Anglii.');
  W('civil war', 'n', 'wojna domowa', 'the English Civil War 1642–1651', 'p', 'The {civil war} ended with the execution of the king.', 'Wojna domowa zakończyła się egzekucją króla.');
  W('the Industrial Revolution', 'n', 'rewolucja przemysłowa', '', 'p', '{The Industrial Revolution} began in Britain.', 'Rewolucja przemysłowa zaczęła się w Wielkiej Brytanii.');
  W('the British Empire', 'n', 'Imperium Brytyjskie', '', 'p', 'At its height, {the British Empire} covered a quarter of the world.', 'W szczytowym okresie Imperium Brytyjskie obejmowało jedną czwartą świata.');
  W('colony', 'n', 'kolonia', 'colonial, decolonisation', 't', 'India was a British {colony} until 1947.', 'Indie były brytyjską kolonią do 1947 roku.');
  W('the Blitz', 'n', 'Blitz (bombardowania Londynu 1940–1941)', '', 'p', 'Thousands of Londoners died in {the Blitz}.', 'W czasie Blitzu zginęły tysiące londyńczyków.');
  W('evacuee', 'n', 'ewakuowany (dziecko z miasta na wieś, II w.ś.)', 'evacuation', 'p', 'My grandmother was an {evacuee} in Wales.', 'Moja babcia była ewakuowana do Walii.');
  W('the welfare state', 'n', 'państwo opiekuńcze', 'NHS – 1948', 'o', '{The welfare state} was built after 1945.', 'Państwo opiekuńcze zbudowano po 1945 roku.');
  W('suffragette', 'n', 'sufrażystka', 'women’s suffrage – prawo wyborcze kobiet', 'p', 'The {suffragettes} fought for the vote.', 'Sufrażystki walczyły o prawo głosu.');
  W('Parliament', 'n', 'parlament (Izba Gmin i Izba Lordów)', 'House of Commons / House of Lords', 't', '{Parliament} met in Westminster.', 'Parlament obradował w Westminsterze.');

  L('AR', 'ar_poles', 'Polacy w Wielkiej Brytanii');
  W('government-in-exile', 'n', 'rząd na uchodźstwie', '', 'p', 'The Polish {government-in-exile} was based in London.', 'Polski rząd na uchodźstwie miał siedzibę w Londynie.');
  W('squadron', 'n', 'dywizjon, eskadra', 'No. 303 Squadron', 'o', 'No. 303 {Squadron} fought in the Battle of Britain.', 'Dywizjon 303 walczył w bitwie o Anglię.');
  W('the Battle of Britain', 'n', 'bitwa o Anglię (1940)', '', 'p', 'Polish pilots shot down many planes in {the Battle of Britain}.', 'Polscy piloci zestrzelili wiele samolotów w bitwie o Anglię.');
  W('Enigma', 'n', 'Enigma (niemiecka maszyna szyfrująca)', 'codebreakers – kryptolodzy', 't', 'Polish mathematicians first broke {Enigma}.', 'Polscy matematycy jako pierwsi złamali Enigmę.');
  W('Bletchley Park', 'n', 'Bletchley Park (ośrodek kryptologów)', '', 't', 'The Enigma work continued at {Bletchley Park}.', 'Prace nad Enigmą kontynuowano w Bletchley Park.');
  W('displaced person', 'n', 'dipis, osoba przesiedlona', 'skrót: DP', 'o', 'After the war he lived in a {displaced persons} camp.', 'Po wojnie mieszkał w obozie dla dipisów.');
  W('to resettle', 'v', 'przesiedlić', 'Polish Resettlement Corps', 'o', 'Thousands of Polish soldiers {resettled} in Britain.', 'Tysiące polskich żołnierzy osiedliło się w Wielkiej Brytanii.');
  W('veteran', 'n', 'weteran', '', 't', 'The {veterans} met every year in London.', 'Weterani spotykali się co roku w Londynie.');
  W('émigré', 'n', 'emigrant (polityczny)', '/ˈemɪɡreɪ/', 'p', 'Polish {émigrés} founded schools and churches.', 'Polscy emigranci zakładali szkoły i kościoły.');
  W('the Sikorski Institute', 'n', 'Instytut Polski i Muzeum im. gen. Sikorskiego (Londyn)', '', 'p', 'The archives of the army are kept at {the Sikorski Institute}.', 'Archiwa wojska są przechowywane w Instytucie Sikorskiego.');
  W('the Yalta Conference', 'n', 'konferencja jałtańska (1945)', '', 'p', 'Many Poles felt betrayed by {the Yalta Conference}.', 'Wielu Polaków czuło się zdradzonych przez konferencję jałtańską.');
  W('to commemorate', 'v', 'upamiętniać', 'commemoration', 'o', 'A memorial {commemorates} the Polish airmen.', 'Pomnik upamiętnia polskich lotników.');

  L('AR', 'ar_war', 'Wojny i XX wiek');
  W('outbreak', 'n', 'wybuch (wojny, epidemii)', 'to break out', 'o', 'At the {outbreak} of war he was in Warsaw.', 'W chwili wybuchu wojny był w Warszawie.');
  W('invasion', 'n', 'inwazja', 'to invade', 't', 'The German {invasion} of Poland began on 1 September 1939.', 'Niemiecka inwazja na Polskę zaczęła się 1 września 1939 roku.');
  W('occupation', 'n', 'okupacja', 'occupied', 'p', 'Life under {occupation} was brutal.', 'Życie pod okupacją było brutalne.');
  W('resistance', 'n', 'ruch oporu', 'the Home Army – Armia Krajowa', 'o', 'He joined the {resistance} at seventeen.', 'Wstąpił do ruchu oporu w wieku siedemnastu lat.');
  W('uprising', 'n', 'powstanie', 'the Warsaw Uprising', 'o', 'The Warsaw {Uprising} lasted 63 days.', 'Powstanie warszawskie trwało 63 dni.');
  W('deportation', 'n', 'deportacja', 'to deport', 't', 'Mass {deportations} to Siberia began in 1940.', 'Masowe deportacje na Syberię zaczęły się w 1940 roku.');
  W('concentration camp', 'n', 'obóz koncentracyjny', 'death camp – obóz zagłady', 'p', 'Auschwitz was both a {concentration camp} and a death camp.', 'Auschwitz był zarówno obozem koncentracyjnym, jak i obozem zagłady.');
  W('the Holocaust', 'n', 'Holokaust, Zagłada', '', 't', '{The Holocaust} claimed six million Jewish lives.', 'Holokaust pochłonął sześć milionów Żydów.');
  W('armistice', 'n', 'rozejm', 'Armistice Day – 11 listopada', 'o', 'The {armistice} was signed on 11 November 1918.', 'Rozejm podpisano 11 listopada 1918 roku.');
  W('the Iron Curtain', 'n', 'żelazna kurtyna', '', 'p', 'Churchill spoke of {the Iron Curtain} in 1946.', 'Churchill mówił o żelaznej kurtynie w 1946 roku.');
  W('the Cold War', 'n', 'zimna wojna', '', 'p', '{The Cold War} ended in 1989–1991.', 'Zimna wojna zakończyła się w latach 1989–1991.');
  W('martial law', 'n', 'stan wojenny', '', 'o', '{Martial law} was declared in Poland in December 1981.', 'Stan wojenny wprowadzono w Polsce w grudniu 1981 roku.');

  L('AR', 'ar_historian', 'Warsztat historyka');
  W('secondary source', 'n', 'opracowanie (źródło wtórne)', 'primary source – źródło pierwotne', 'p', 'A textbook is a {secondary source}.', 'Podręcznik jest opracowaniem.');
  W('footnote', 'n', 'przypis dolny', 'endnote – przypis końcowy', 'o', 'Cite the archive reference in a {footnote}.', 'Podaj sygnaturę archiwalną w przypisie.');
  W('bibliography', 'n', 'bibliografia', '', 't', 'The {bibliography} lists 150 titles.', 'Bibliografia obejmuje 150 tytułów.');
  W('historiography', 'n', 'historiografia', '', 't', 'The {historiography} of the topic is huge.', 'Historiografia tematu jest ogromna.');
  W('reliability', 'n', 'wiarygodność', 'reliable – wiarygodny', 'o', 'Historians question the {reliability} of the chronicle.', 'Historycy kwestionują wiarygodność kroniki.');
  W('bias', 'n', 'stronniczość, uprzedzenie', 'biased – stronniczy', 'o', 'Every source has some {bias}.', 'Każde źródło jest w jakimś stopniu stronnicze.');
  W('forgery', 'n', 'fałszerstwo, falsyfikat', 'to forge', 'o', 'The document turned out to be a {forgery}.', 'Dokument okazał się falsyfikatem.');
  W('oral history', 'n', 'historia mówiona', '', 'p', 'We recorded {oral history} interviews with veterans.', 'Nagraliśmy wywiady z weteranami w ramach historii mówionej.');
  W('eyewitness', 'n', 'naoczny świadek', 'eyewitness account – relacja', 'o', 'The {eyewitness} account contradicts the official report.', 'Relacja naocznego świadka przeczy oficjalnemu raportowi.');
  W('ibid.', 'f', 'tamże (w przypisach)', 'op. cit. – dz. cyt.', 'p', '{Ibid.}, p. 45.', 'Tamże, s. 45.');
  W('to cite', 'v', 'cytować, powoływać się', 'citation', 'p', 'Always {cite} your sources.', 'Zawsze podawaj źródła.');
  W('collective memory', 'n', 'pamięć zbiorowa', '', 'p', 'Katyn is part of Polish {collective memory}.', 'Katyń jest częścią polskiej pamięci zbiorowej.');
})();

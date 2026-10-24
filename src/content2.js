/* ============================================================
   ŚCIĄGI „DOBRZE WIEDZIEĆ” + CZASOWNIKI NIEREGULARNE
   ============================================================ */
var UA = window.UA || (window.UA = {});

UA.TIPS = {
  tr_basics: ['Brytyjczycy bardzo często mówią <b>sorry</b>, <b>please</b> i <b>thank you</b> – bez nich prośba brzmi szorstko. Zamiast „Give me…” mów <b>Could I have…?</b> albo <b>I’d like…</b>', 'W kolejce (<b>queue</b>) stoi się karnie – wpychanie się to poważne faux pas.', '<b>Cheers</b> w Wielkiej Brytanii znaczy też „dzięki” i „cześć”.'],
  tr_airport: ['Od 2025 r. obywatele UE potrzebują przed podróżą do Wielkiej Brytanii elektronicznej autoryzacji <b>ETA</b>; do USA – <b>ESTA</b>. Sprawdź aktualne zasady przed wyjazdem.', 'Na tablicach: <b>Departures</b> – odloty, <b>Arrivals</b> – przyloty, <b>Delayed</b>, <b>Cancelled</b>, <b>Gate closing</b>.'],
  tr_train: ['W Londynie zamiast karty Oyster można płacić zbliżeniowo kartą lub telefonem – opłata dzienna ma limit (<b>daily cap</b>).', 'Bilety kolejowe w UK są dużo tańsze, gdy kupujesz je wcześniej (<b>Advance</b>) i poza godzinami szczytu (<b>Off-Peak</b>).', 'W Wielkiej Brytanii ruch jest lewostronny – na jezdni w Londynie często jest napis <b>LOOK RIGHT</b>.'],
  tr_hotel: ['<b>Ground floor</b> to parter, a <b>first floor</b> – pierwsze piętro (w USA first floor = parter!).', '<b>Twin room</b> ma dwa osobne łóżka, <b>double room</b> – jedno podwójne.'],
  tr_food: ['W pubie zwykle zamawia się i płaci przy barze, podając numer stolika.', 'Napiwki: w UK w restauracji ok. 10–12,5% (sprawdź, czy <b>service charge</b> nie jest już doliczony), w pubie przy barze – nie daje się; w USA 15–20% to standard.', 'Woda z kranu (<b>tap water</b>) jest w restauracjach w UK zwykle podawana za darmo – wystarczy poprosić.'],
  tr_money: ['W UK płaci się funtami (<b>£</b>), potocznie <b>quid</b>; prawie wszędzie działa płatność zbliżeniowa.', 'Ceny w USA zwykle nie zawierają podatku od sprzedaży (<b>sales tax</b>) – przy kasie zapłacisz więcej, niż jest na metce.'],
  tr_help: ['Numery alarmowe: <b>999</b> lub <b>112</b> w UK, <b>911</b> w USA. W UK w sprawach pilnych, ale nie zagrażających życiu – <b>NHS 111</b>.', 'Z Europejską Kartą Ubezpieczenia Zdrowotnego leczysz się w UE; w UK (po brexicie) obowiązuje ona na podstawie umowy, ale warto mieć też ubezpieczenie podróżne. Sprawdź aktualne zasady przed wyjazdem.'],
  tr_way: ['Brytyjczycy często podają kierunki z odniesieniem do pubów i kościołów: „turn left after the Red Lion”.', 'Ruch lewostronny: przechodząc przez ulicę, najpierw patrz w prawo.'],
  tr_sights: ['Wiele dużych muzeów państwowych w Londynie (British Museum, National Gallery, Tate) ma <b>wstęp wolny</b> – płaci się tylko za wystawy czasowe.', '<b>Concession</b> to bilet ulgowy – dla studentów, seniorów, czasem nauczycieli.', '<b>National Trust</b> i <b>English Heritage</b> zarządzają setkami zamków i rezydencji – roczna karta członkowska szybko się zwraca.'],
  tr_talk: ['Small talk o pogodzie to w UK rytuał, a nie nuda – warto go podtrzymać.', 'Brytyjskie niedopowiedzenie: <b>quite good</b> może znaczyć „całkiem dobre” albo „przeciętne”, a <b>not bad</b> – „świetne”.', '<b>How are you?</b> to powitanie, nie pytanie o zdrowie – odpowiedz krótko: <b>Fine, thanks. And you?</b>'],
  ar_archive: ['<b>The National Archives</b> (TNA) w Kew to główne archiwum państwowe Wielkiej Brytanii; katalog <b>Discovery</b> jest online. Sygnatura ma postać: <b>departament + seria / numer</b>, np. <b>FO 371/12345</b> (Foreign Office), <b>AIR</b> (lotnictwo), <b>WO</b> (wojsko), <b>HO</b> (Home Office).', 'Kartę czytelnika (<b>reader’s ticket</b>) wyrabia się na miejscu z dokumentem tożsamości i potwierdzeniem adresu; dokumenty warto zamówić online z wyprzedzeniem.', 'Inne ważne zbiory: <b>British Library</b> (rękopisy), <b>Imperial War Museum</b>, archiwa hrabstw (<b>county record offices</b>), a dla Polaków – <b>Instytut Polski i Muzeum im. gen. Sikorskiego</b> oraz <b>Studium Polski Podziemnej</b> w Londynie.'],
  ar_records: ['W Anglii i Walii powszechny spis ludności (<b>census</b>) prowadzi się co 10 lat od 1801 r.; dane osobowe udostępnia się po 100 latach (spis z 1921 r. opublikowano w 2022 r.).', 'Urzędowa rejestracja urodzeń, ślubów i zgonów (<b>civil registration</b>) obowiązuje w Anglii i Walii od 1837 r.; wcześniej podstawą są księgi parafialne (<b>parish registers</b>).'],
  ar_reading: ['Wielka Brytania przeszła z kalendarza juliańskiego na gregoriański w 1752 r. (po 2 września nastąpił 14 września); wcześniej rok zaczynał się 25 marca, stąd daty typu <b>1 February 1701/2</b>.', 'Dokumenty prawne datowano często latami panowania (<b>regnal years</b>), np. <b>3 Edw. VI</b> = trzeci rok panowania Edwarda VI.', 'Pismo <b>secretary hand</b> (XVI–XVII w.) ma litery bardzo różne od dzisiejszych – The National Archives oferuje darmowy kurs paleografii online.'],
  ar_britain: ['W Wielkiej Brytanii nie ma jednej spisanej konstytucji – ustrój opiera się na ustawach, orzeczeniach i konwenansach.', '<b>the United Kingdom</b> = Anglia, Szkocja, Walia i Irlandia Północna; <b>Great Britain</b> – bez Irlandii Północnej.'],
  ar_poles: ['Polskie Siły Zbrojne na Zachodzie liczyły pod koniec wojny ok. 200 tys. żołnierzy; po wojnie wielu osiedliło się w Wielkiej Brytanii dzięki <b>Polish Resettlement Act 1947</b>.', 'Akta polskich żołnierzy na Zachodzie przechowuje m.in. brytyjskie Ministerstwo Obrony; część dokumentacji jest w Instytucie Sikorskiego w Londynie.'],
  ar_war: ['W angielskim mówi się <b>the Warsaw Uprising</b> (1944) – nie mylić z <b>the Warsaw Ghetto Uprising</b> (1943).', 'Anglojęzyczne nazwy polskich wydarzeń: <b>the Katyn massacre</b>, <b>martial law</b>, <b>the Solidarity movement</b>, <b>the Round Table talks</b>.'],
  ar_historian: ['Brytyjskie i amerykańskie publikacje używają różnych stylów cytowania – najczęściej <b>Chicago</b> (przypisy) i <b>Harvard</b> (autor-data).', 'Skróty: <b>ibid.</b> – tamże, <b>op. cit.</b> – dz. cyt., <b>cf.</b> – por., <b>ed./eds</b> – red., <b>n.d.</b> – brak daty, <b>c.</b> – około.']
};

/* ---------- Czasowniki nieregularne ----------
   [bezokolicznik, znaczenie, Past Simple, Past Participle] */
UA.VERBS = [
  ['arise', 'powstać, pojawić się', 'arose', 'arisen'], ['awake', 'obudzić się', 'awoke', 'awoken'], ['be', 'być', 'was/were', 'been'],
  ['bear', 'znosić; rodzić', 'bore', 'borne'], ['beat', 'bić, pokonać', 'beat', 'beaten'], ['become', 'stać się', 'became', 'become'],
  ['begin', 'zaczynać', 'began', 'begun'], ['bend', 'zginać', 'bent', 'bent'], ['bet', 'zakładać się', 'bet', 'bet'],
  ['bind', 'wiązać', 'bound', 'bound'], ['bite', 'gryźć', 'bit', 'bitten'], ['bleed', 'krwawić', 'bled', 'bled'],
  ['blow', 'wiać, dmuchać', 'blew', 'blown'], ['break', 'łamać', 'broke', 'broken'], ['breed', 'hodować', 'bred', 'bred'],
  ['bring', 'przynosić', 'brought', 'brought'], ['build', 'budować', 'built', 'built'], ['burn', 'palić', 'burnt/burned', 'burnt/burned'],
  ['burst', 'pękać', 'burst', 'burst'], ['buy', 'kupować', 'bought', 'bought'], ['cast', 'rzucać; obsadzać', 'cast', 'cast'],
  ['catch', 'łapać', 'caught', 'caught'], ['choose', 'wybierać', 'chose', 'chosen'], ['cling', 'przywierać', 'clung', 'clung'],
  ['come', 'przychodzić', 'came', 'come'], ['cost', 'kosztować', 'cost', 'cost'], ['creep', 'skradać się', 'crept', 'crept'],
  ['cut', 'ciąć', 'cut', 'cut'], ['deal', 'zajmować się; rozdawać', 'dealt', 'dealt'], ['dig', 'kopać', 'dug', 'dug'],
  ['do', 'robić', 'did', 'done'], ['draw', 'rysować; ciągnąć', 'drew', 'drawn'], ['dream', 'śnić, marzyć', 'dreamt/dreamed', 'dreamt/dreamed'],
  ['drink', 'pić', 'drank', 'drunk'], ['drive', 'prowadzić (auto)', 'drove', 'driven'], ['eat', 'jeść', 'ate', 'eaten'],
  ['fall', 'upadać', 'fell', 'fallen'], ['feed', 'karmić', 'fed', 'fed'], ['feel', 'czuć', 'felt', 'felt'],
  ['fight', 'walczyć', 'fought', 'fought'], ['find', 'znajdować', 'found', 'found'], ['flee', 'uciekać', 'fled', 'fled'],
  ['fly', 'latać', 'flew', 'flown'], ['forbid', 'zabraniać', 'forbade', 'forbidden'], ['forget', 'zapominać', 'forgot', 'forgotten'],
  ['forgive', 'wybaczać', 'forgave', 'forgiven'], ['freeze', 'zamarzać', 'froze', 'frozen'], ['get', 'dostawać', 'got', 'got (US: gotten)'],
  ['give', 'dawać', 'gave', 'given'], ['go', 'iść, jechać', 'went', 'gone'], ['grow', 'rosnąć', 'grew', 'grown'],
  ['hang', 'wieszać, wisieć', 'hung', 'hung'], ['have', 'mieć', 'had', 'had'], ['hear', 'słyszeć', 'heard', 'heard'],
  ['hide', 'ukrywać', 'hid', 'hidden'], ['hit', 'uderzać', 'hit', 'hit'], ['hold', 'trzymać', 'held', 'held'],
  ['hurt', 'ranić', 'hurt', 'hurt'], ['keep', 'trzymać, zachowywać', 'kept', 'kept'], ['know', 'wiedzieć, znać', 'knew', 'known'],
  ['lay', 'kłaść', 'laid', 'laid'], ['lead', 'prowadzić, przewodzić', 'led', 'led'], ['learn', 'uczyć się', 'learnt/learned', 'learnt/learned'],
  ['leave', 'zostawiać, wyjeżdżać', 'left', 'left'], ['lend', 'pożyczać (komuś)', 'lent', 'lent'], ['let', 'pozwalać', 'let', 'let'],
  ['lie', 'leżeć', 'lay', 'lain'], ['lose', 'gubić, przegrywać', 'lost', 'lost'], ['make', 'robić, tworzyć', 'made', 'made'],
  ['mean', 'znaczyć', 'meant', 'meant'], ['meet', 'spotykać', 'met', 'met'], ['pay', 'płacić', 'paid', 'paid'],
  ['put', 'kłaść', 'put', 'put'], ['quit', 'rzucić, odejść', 'quit', 'quit'], ['read', 'czytać', 'read', 'read'],
  ['ride', 'jeździć (konno, rowerem)', 'rode', 'ridden'], ['ring', 'dzwonić', 'rang', 'rung'], ['rise', 'wznosić się', 'rose', 'risen'],
  ['run', 'biec', 'ran', 'run'], ['say', 'mówić', 'said', 'said'], ['see', 'widzieć', 'saw', 'seen'],
  ['seek', 'szukać', 'sought', 'sought'], ['sell', 'sprzedawać', 'sold', 'sold'], ['send', 'wysyłać', 'sent', 'sent'],
  ['set', 'ustawiać', 'set', 'set'], ['shake', 'trząść', 'shook', 'shaken'], ['shine', 'świecić', 'shone', 'shone'],
  ['shoot', 'strzelać', 'shot', 'shot'], ['show', 'pokazywać', 'showed', 'shown'], ['shut', 'zamykać', 'shut', 'shut'],
  ['sing', 'śpiewać', 'sang', 'sung'], ['sink', 'tonąć', 'sank', 'sunk'], ['sit', 'siedzieć', 'sat', 'sat'],
  ['sleep', 'spać', 'slept', 'slept'], ['speak', 'mówić', 'spoke', 'spoken'], ['spend', 'wydawać; spędzać', 'spent', 'spent'],
  ['spread', 'rozprzestrzeniać', 'spread', 'spread'], ['stand', 'stać', 'stood', 'stood'], ['steal', 'kraść', 'stole', 'stolen'],
  ['stick', 'kleić, przyklejać', 'stuck', 'stuck'], ['strike', 'uderzać; strajkować', 'struck', 'struck'], ['swear', 'przysięgać; kląć', 'swore', 'sworn'],
  ['swim', 'pływać', 'swam', 'swum'], ['take', 'brać', 'took', 'taken'], ['teach', 'uczyć (kogoś)', 'taught', 'taught'],
  ['tear', 'drzeć', 'tore', 'torn'], ['tell', 'mówić, opowiadać', 'told', 'told'], ['think', 'myśleć', 'thought', 'thought'],
  ['throw', 'rzucać', 'threw', 'thrown'], ['understand', 'rozumieć', 'understood', 'understood'], ['wake', 'budzić się', 'woke', 'woken'],
  ['wear', 'nosić (ubranie)', 'wore', 'worn'], ['weep', 'płakać', 'wept', 'wept'], ['win', 'wygrywać', 'won', 'won'],
  ['withdraw', 'wycofywać', 'withdrew', 'withdrawn'], ['write', 'pisać', 'wrote', 'written']
];

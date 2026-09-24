/* script.js - */

// ===== CARS DATA =====
// NOTE: "category" powers the homepage category filter.
// NOTE: "videoId" is the YouTube video ID (the part after watch?v=) for
// this car's presentation clip. Replace the placeholder with the real ID
// once each video is uploaded — leave it as "" to hide the video button.
const CARS = [

 {
  id: 33,
  name: "Skoda Octavia 2.0 TDI DSG Style",
  price: "14.990 €",
  priceValue: 14990,
    category: "Skoda",


  year: 2022,
  firstRegistration: "31.05.2022",
  km: "137.800 km",

  fuel: "Diesel",
  engine: "2.0 TDI",
  power: "116 CP",
  gearbox: "Automată DSG",
  drive: "Față",
  body: "Combi",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Argintiu",

  owners: "Unic proprietar",
  serviceHistory: "Carte service",

  vin: "TMBJG7NX3NY105705",

  badge: "Style",

  features: [
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "Wireless Charging",
    "Sistem navigație",
    "Sistem audio",
    "Monitor cu touch screen",
    "Control vocal",
    "Conexiune Internet",

    "Climatronic 2 zone",
    "Tapițerie stofă",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan cu schimbător de viteze",
    "Keyless Go",
    "Pornire motor Keyless",
    "Senzor ploaie",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Ștergătoare parbriz",

    "Pilot automat adaptiv (Distronic)",
    "Faruri LED",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Oglinzi exterioare cu reglare electrică",
    "Oglinzi exterioare încălzite",
    "Oglinzi exterioare rabatabile electric",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Limitator viteză",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Controlul tracțiunii",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri autoadaptive",
    "Faruri cu temporizator",
    "Lumini de zi",
    "Lumini de zi LED",
    "Faruri ceață",
    "Faruri ceață LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Asistență ambuteiaj",

    "Jante aliaj 16",
    "Anvelope vară",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag scaun pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "Isofix",

    "Scaun șofer cu reglaj lombar electric",
    "Senzori ploaie/lumină",
    "Funcție Cornering",
    "Proiectoare ceață",
    "Asistență la coborâre",
    "Volan multifuncțional",
    "Oglindă retrovizoare dreapta cu asistență marșarier",
    "Asistență părăsire bandă",
    "Parbriz antireflexie solară",
    "Sistem navigare Premium Full Europa",
    "Limba română pentru navigație",
    "MirrorLink",
    "HDD intern 20 GB",
    "Cameră asistență fază lungă/scurtă",
    "AUX",
    "SD Card",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Coming Home",
    "Leaving Home",
    "7 airbag-uri",
    "Afișaj viteză electronic",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Privacy Glass",
    "2 chei"
  ],

  images: [
    "cars/skodaoctavia2022/1.webp",
    "cars/skodaoctavia2022/2.webp",
    "cars/skodaoctavia2022/3.webp",
    "cars/skodaoctavia2022/4.webp",
    "cars/skodaoctavia2022/5.webp",
    "cars/skodaoctavia2022/6.webp",
    "cars/skodaoctavia2022/7.webp",
    "cars/skodaoctavia2022/8.webp",
    "cars/skodaoctavia2022/9.webp",
    "cars/skodaoctavia2022/10.webp",
    "cars/skodaoctavia2022/11.webp",
    "cars/skodaoctavia2022/12.webp",
    "cars/skodaoctavia2022/13.webp",
    "cars/skodaoctavia2022/14.webp",
    "cars/skodaoctavia2022/15.webp",
    "cars/skodaoctavia2022/16.webp",
    "cars/skodaoctavia2022/17.webp",
    "cars/skodaoctavia2022/18.webp",
    "cars/skodaoctavia2022/19.webp",
    "cars/skodaoctavia2022/20.webp",
    "cars/skodaoctavia2022/21.webp",
    "cars/skodaoctavia2022/22.webp",
    "cars/skodaoctavia2022/23.webp",
    "cars/skodaoctavia2022/24.webp",
    "cars/skodaoctavia2022/25.webp",
    "cars/skodaoctavia2022/26.webp",
    "cars/skodaoctavia2022/27.webp",
    "cars/skodaoctavia2022/28.webp",
    "cars/skodaoctavia2022/29.webp",
    "cars/skodaoctavia2022/30.webp",
    "cars/skodaoctavia2022/31.webp",
    "cars/skodaoctavia2022/32.webp",
    "cars/skodaoctavia2022/33.webp"
  ],

  videoId: "pjVKx-ZvD94",

  description: "Skoda Octavia 2.0 TDI, 116 CP, diesel, cu transmisie automată DSG și tracțiune față. Model 2022, prima înmatriculare la 31.05.2022, 137.800 km, un singur proprietar și carte service. Echiparea include pilot automat adaptiv Distronic, Lane Assist, Apple CarPlay, Android Auto, navigație Premium Full Europa cu limba română, Wireless Charging, Keyless Go, climatizare Climatronic 2 zone, faruri Full LED, senzori de parcare față/spate, asistență la parcare și jante de aliaj de 16 inch. Mașina nu are accident în istoric și beneficiază de garanție 12 luni în limita a 20.000 km pentru motor și cutie."
}
 
 {
  id: 32,
  name: "BMW Seria 3 320d Aut. Sport Line",
  price: "22.990 €",
  priceValue: 22990,
     category: "BMW",

  year: 2019,
  firstRegistration: "20.09.2019",
  km: "54.000 km",

  fuel: "Diesel",
  engine: "2.0D",
  power: "190 CP",
  gearbox: "Automată 8+1",
  drive: "",
  body: "Sedan",
  doors: 4,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Alb",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua BMW",

  vin: "WBA5V510X0AJ54192",

  badge: "Sport Line",

  features: [
    "Carte service",
    "Computer de bord",
    "Navigație",
    "Radio",
    "Android Auto",
    "Apple CarPlay",
    "Bluetooth",
    "Touchscreen",
    "MirrorLink",
    "Jante aliaj 17",
    "Senzori parcare față/spate",
    "Cameră marșarier",
    "Asistență la parcare",
    "Asistență la ieșirea din parcare",
    "Cruise control",
    "Limitator de viteză",
    "ABS",
    "ESP",
    "Frână de parcare electrică",
    "Geamuri electrice față/spate",
    "Oglinzi electrice și încălzite",
    "Climatronic automat 3 zone",
    "Volan piele multifuncțional",
    "Scaune sport față",
    "Scaune față încălzite",
    "Scaune Comfort",
    "Tapițerie piele parțială",
    "Keyless Go",
    "Start/Stop",
    "USB",
    "AUX",
    "Filtru de particule",
    "Sistem avertizare coliziune",
    "Lane Assist",
    "Asistență frânare de urgență",
    "Asistență la părăsirea benzii",
    "Asistență la coborâre",
    "Senzori ploaie",
    "Senzori lumină",
    "Faruri LED",
    "Lumini de zi Full LED",
    "Proiectoare ceață LED",
    "Funcție Cornering",
    "Cameră asistență fază lungă/scurtă",
    "Cotieră față/spate",
    "Airbaguri frontale",
    "Airbaguri laterale",
    "Airbaguri cortină",
    "9 airbaguri",
    "Sistem avertizare oboseală",
    "Digital Key",
    "Wireless Charging",
    "Încărcare cablu",
    "Senzori presiune roți",
    "Senzori ploaie/lumină",
    "Parbriz antireflexie solară",
    "Sistem de navigare Premium Full Europa",
    "HDD intern 20 GB",
    "Pachet iarnă",
    "Pachet crom exterior/interior",
    "Parasolare iluminate",
    "Iluminare ambientală LED",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Afișaj viteză electronic",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Privacy Glass",
    "2 chei"
  ],

  images: [
    "cars/bmws32019/1.webp",
    "cars/bmws32019/2.webp",
    "cars/bmws32019/3.webp",
    "cars/bmws32019/4.webp",
    "cars/bmws32019/5.webp",
    "cars/bmws32019/6.webp",
    "cars/bmws32019/7.webp",
    "cars/bmws32019/8.webp",
    "cars/bmws32019/9.webp",
    "cars/bmws32019/10.webp",
    "cars/bmws32019/11.webp",
    "cars/bmws32019/12.webp",
    "cars/bmws32019/13.webp",
    "cars/bmws32019/14.webp",
    "cars/bmws32019/15.webp",
    "cars/bmws32019/16.webp",
    "cars/bmws32019/17.webp",
    "cars/bmws32019/18.webp",
    "cars/bmws32019/19.webp",
    "cars/bmws32019/20.webp"
  ],

  videoId: "",

  description: "BMW Seria 3 320d Sport Line, an fabricație 2019, cu motor 2.0 diesel de 190 CP și cutie automată 8+1. Mașina are 54.000 km, un singur proprietar și service complet efectuat în rețeaua BMW. Echiparea include scaune sport încălzite, climatizare automată pe 3 zone, navigație Premium Full Europa, Apple CarPlay, Android Auto, cameră marșarier, senzori de parcare față/spate, Keyless Go, Wireless Charging, faruri Full LED, Lane Assist, Cruise Control, jante de aliaj de 17 inch și iluminare ambientală LED. Se emite factură, TVA deductibil."
}
 
 {
  id: 0,
  name: "Volkswagen Tiguan 2.0 TDI DPF DSG Comfortline",
  price: "20.990 €",
  priceValue: 20990,
     category: "Volkswagen",

  year: 2023,
  firstRegistration: "19.12.2022",
  km: "98.500 km",

  fuel: "Diesel",
  engine: "2.0 TDI",
  power: "150 CP",
  gearbox: "Automată DSG",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Gri",

  owners: "Unic proprietar",
  serviceHistory: "Carte service",

  vin: "WVGZZZ5NXPW034911",

  badge: "Comfortline",

  features: [
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "Sistem navigație",
    "Sistem audio",
    "Monitor cu touch screen",
    "Control vocal",
    "Conexiune Internet",

    "Cârlig remorcare retractabil electric",
    "Climatronic 3 zone",
    "Tapițerie stofă",
    "Climatizare spate",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Schimbător viteze piele",
    "Senzor ploaie",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",

    "Pilot automat adaptiv (Distronic)",
    "Faruri Full LED IQ.LIGHT",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Oglinzi exterioare cu reglare electrică",
    "Oglinzi exterioare încălzite",
    "Oglinzi exterioare rabatabile electric",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Limitator viteză",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Controlul tracțiunii",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Asistență ambuteiaj",

    "Jante aliaj 17",
    "Anvelope vară",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Asistență telefonică urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag scaun pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Isofix",

    "Scaun șofer cu reglaj lombar electric",
    "Încălzire scaune față",
    "Funcție Cornering",
    "Proiectoare ceață",
    "Pachet crom exterior/interior",
    "Asistență la coborâre",
    "Parbriz antireflexie solară",
    "Sistem navigare Premium Full Europa",
    "MirrorLink",
    "HDD intern 20 GB",
    "Cameră asistență fază lungă/scurtă",
    "AUX",
    "SD Card",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Coming Home",
    "Leaving Home",
    "7 airbag-uri",
    "Afișaj viteză electronic",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Senzori presiune roți",
    "Privacy Glass",
    "2 chei"
  ],

images: [
  "cars/tiguan2.02023/1.webp",
  "cars/tiguan2.02023/2.webp",
  "cars/tiguan2.02023/3.webp",
  "cars/tiguan2.02023/4.webp",
  "cars/tiguan2.02023/5.webp",
  "cars/tiguan2.02023/6.webp",
  "cars/tiguan2.02023/7.webp",
  "cars/tiguan2.02023/8.webp",
  "cars/tiguan2.02023/9.webp",
  "cars/tiguan2.02023/10.webp",
  "cars/tiguan2.02023/11.webp",
  "cars/tiguan2.02023/12.webp",
  "cars/tiguan2.02023/13.webp",
  "cars/tiguan2.02023/14.webp",
  "cars/tiguan2.02023/15.webp",
  "cars/tiguan2.02023/16.webp",
  "cars/tiguan2.02023/17.webp",
  "cars/tiguan2.02023/18.webp",
  "cars/tiguan2.02023/19.webp",
  "cars/tiguan2.02023/20.webp",
  "cars/tiguan2.02023/21.webp",
  "cars/tiguan2.02023/22.webp",
  "cars/tiguan2.02023/23.webp",
  "cars/tiguan2.02023/24.webp",
  "cars/tiguan2.02023/25.webp",
  "cars/tiguan2.02023/26.webp",
  "cars/tiguan2.02023/27.webp",
  "cars/tiguan2.02023/28.webp",
  "cars/tiguan2.02023/29.webp"
],

  videoId: "",

  description: "Volkswagen Tiguan 2.0 TDI, model 2023, cu motor diesel de 150 CP, cutie automată DSG și tracțiune față. Unic proprietar, carte service și fără accident în istoric. Dotat cu faruri Full LED IQ.LIGHT, pilot automat adaptiv Distronic, Lane Assist, navigație, Apple CarPlay, Android Auto, Climatronic 3 zone, încălzire scaune față, senzori de parcare față/spate, asistență la parcare, cârlig de remorcare retractabil electric și jante de aliaj de 17 inch."
}
 
 {
  id: 1,
  category: "DS Automobiles",
  name: "DS 4 E-TENSE 225 Performance Line+",
  price: "21.990 €",
  priceValue: 21990,

  year: 2023,
  firstRegistration: "29/11/2022",
  km: "84.500 km",

  fuel: "Plug-in Hybrid",
  engine: "1.6L benzină + electric",
  power: "225 CP",
  gearbox: "Automată 8+1 trepte",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "12.2 kWh",
  electricRange: "Până la 38 km",

  euro: "Euro 6",
  color: "Gri",

  owners: "Unic proprietar",
  serviceHistory: "Service complet în rețeaua DS",

  vin: "WBA52AB0X0CN12345",

  badge: "Performance",

  features: [
    "Nivel echipare Performance Line",
    "Faruri Full LED adaptive",
    "Lumini de zi LED / Daylight",
    "Bord virtual",
    "Head-Up Display",
    "Scaune din piele Alcantara",
    "Bord îmbrăcat în piele",
    "Navigație Premium Full Europa",
    "CarPlay & MirrorLink",
    "Bluetooth",
    "Touchscreen",
    "HDD intern 20 GB",
    "AUX / SD Card / USB",
    "Încărcare wireless",
    "Keyless Go Pack",
    "Climatronic automat",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Oglindă dreapta cu asistență la marșarier",
    "Asistență fază lungă / scurtă",
    "Senzori de ploaie",
    "Senzori de lumină",
    "Asistență la coborâre",
    "Asistență la părăsirea benzii",
    "Limitator de viteză",
    "Senzori presiune roți",
    "Oglindă retrovizoare antiorbire",
    "Oglinzi electrice și încălzite",
    "Geamuri electrice",
    "Parbriz antireflexie solară",
    "Privacy Glass",
    "Lumini ambientale LED",
    "Lumini ambientale mânere / habitaclu / picioare",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Proiectoare de ceață",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "Volan multifuncțional",
    "Jante aliaj 19\" Performance",
    "9 airbaguri",
    "Afișaj viteză electronic",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Filtru de particule",
    "Două chei"
  ],

images: [
  "cars/ds4-2023/ds41.webp",
  "cars/ds4-2023/ds42.webp",
  "cars/ds4-2023/ds43.webp",
  "cars/ds4-2023/ds44.webp",
  "cars/ds4-2023/ds45.webp",
  "cars/ds4-2023/ds46.webp",
  "cars/ds4-2023/ds47.webp",
  "cars/ds4-2023/ds48.webp",
  "cars/ds4-2023/ds49.webp",
  "cars/ds4-2023/ds410.webp",
  "cars/ds4-2023/ds411.webp",
  "cars/ds4-2023/ds412.webp",
  "cars/ds4-2023/ds413.webp",
  "cars/ds4-2023/ds414.webp",
  "cars/ds4-2023/ds415.webp",
  "cars/ds4-2023/ds416.webp",
  "cars/ds4-2023/ds417.webp",
  "cars/ds4-2023/ds418.webp",
  "cars/ds4-2023/ds419.webp",
  "cars/ds4-2023/ds420.webp",
  "cars/ds4-2023/ds421.webp",
  "cars/ds4-2023/ds422.webp",
  "cars/ds4-2023/ds423.webp",
  "cars/ds4-2023/ds424.webp",
  "cars/ds4-2023/ds425.webp",
  "cars/ds4-2023/ds426.webp",
  "cars/ds4-2023/ds427.webp",
  "cars/ds4-2023/ds428.webp",
  "cars/ds4-2023/ds429.webp"
],

  videoId: "XYhYh_6vZeo",

  description: "DS 4 E-TENSE 225 Performance Line+ din 2023, cu 84.500 km, propulsie plug-in hybrid de 225 CP și cutie automată. Un model premium cu design distinctiv, interior rafinat și un nivel bogat de dotări, completat de faruri Full LED, Head-Up Display, Alcantara, cameră de marșarier, Keyless Go și jante de 19inch."
},
 {
  id: 2,
  category: "Opel",
  name: "Opel Grandland 1.5 D Automatik Business Elegance",
  price: "15.990  €",
  priceValue: "15990",

  year: 2023,
  firstRegistration: "17/01/2023",
  km: "132.500 km",

  fuel: "Diesel",
  engine: "1.5L BlueHDi",
  power: "130 CP",
  gearbox: "Automată 8+1 trepte",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Negru",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Opel",

  vin: "W0VZCYHZ7N6845194",

  badge: "Elegance",

  features: [
    "Nivel echipare Elegance",
    "Climatizare automată pe două zone",
    "Faruri Full LED adaptive",
    "Fază lungă automată",
    "Lumini direcționale",
    "Lumini de zi Daylight Full LED",
    "Bord virtual 3D",
    "Scaune cu piele parțială",
    "Scaune sport față",
    "Tapițerie textilă",
    "Reglaj lombar electric șofer",
    "Volan îmbrăcat în piele cu padele",
    "Volan multifuncțional",
    "Sistem audio",
    "Radio",
    "Android Auto",
    "Bluetooth",
    "Touchscreen",
    "Sistem de navigare Premium Full Europa",
    "Limba română inclusă",
    "CarPlay & MirrorLink",
    "AUX / SD Card / USB",
    "Încărcare wireless",
    "Keyless Go Pack",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Park Assist",
    "Cruise control",
    "DISTRONIC activ",
    "Limitator de viteză",
    "Lane Assist",
    "Asistență la menținerea benzii",
    "Sistem de avertizare unghi mort",
    "Cross Traffic Alert",
    "Frânare automată de urgență",
    "Asistență la coborâre",
    "Control tracțiune",
    "ABS",
    "ESP",
    "EDS",
    "Hill Holder",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "7 airbaguri",
    "Airbaguri frontale, laterale și cortină",
    "Senzori de lumină",
    "Senzori de ploaie",
    "Senzori presiune roți",
    "Oglinzi electrice, încălzite și rabatabile",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Geamuri electrice",
    "Geamuri colorate",
    "Parbriz antireflexie solară",
    "Privacy Glass",
    "Lumini ambientale mânere / habitaclu / picioare",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Proiectoare de ceață LED",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "Parasolare iluminate",
    "Torpedou refrigerat",
    "Cotieră față/spate",
    "Frână de parcare electrică",
    "Servodirecție",
    "Comenzi pe volan",
    "Computer de bord",
    "Fixare scaun copil",
    "Jante aliaj 17",
    "Anvelope de vară",
    "Carte service",
    "Consumul mixt 3,8 l/100 km",
    "Emisii CO2 99 g/km"
  ],

images: [
  "cars/opel-grand2022/1.webp",
  "cars/opel-grand2022/2.webp",
  "cars/opel-grand2022/3.webp",
  "cars/opel-grand2022/4.webp",
  "cars/opel-grand2022/5.webp",
  "cars/opel-grand2022/6.webp",
  "cars/opel-grand2022/7.webp",
  "cars/opel-grand2022/8.webp",
  "cars/opel-grand2022/9.webp",
  "cars/opel-grand2022/10.webp",
  "cars/opel-grand2022/11.webp",
  "cars/opel-grand2022/12.webp",
  "cars/opel-grand2022/13.webp",
  "cars/opel-grand2022/14.webp",
  "cars/opel-grand2022/15.webp",
  "cars/opel-grand2022/16.webp",
  "cars/opel-grand2022/17.webp",
  "cars/opel-grand2022/18.webp",
  "cars/opel-grand2022/19.webp",
  "cars/opel-grand2022/20.webp",
  "cars/opel-grand2022/21.webp",
  "cars/opel-grand2022/22.webp",
  "cars/opel-grand2022/23.webp",
  "cars/opel-grand2022/24.webp",
  "cars/opel-grand2022/25.webp",
  "cars/opel-grand2022/26.webp",
  "cars/opel-grand2022/27.webp",
  "cars/opel-grand2022/28.webp",
  "cars/opel-grand2022/29.webp",
  "cars/opel-grand2022/30.webp",
  "cars/opel-grand2022/31.webp"
],

  videoId: "2_I3Qdj1ucg",

  description: "Opel Grandland 1.5 D Automatik Business Elegance, model 2023, cu 132.500 km, motor 1.5 BlueHDi de 130 CP și transmisie automată 8+1 trepte. SUV cu tracțiune față, un singur proprietar și service complet efectuat în rețeaua Opel. Este echipat cu faruri Full LED adaptive, bord virtual 3D, scaune cu piele parțială, navigație Premium Full Europa, CarPlay & MirrorLink, Keyless Go, climatronic, cameră de marșarier, Park Assist, DISTRONIC activ, Cross Traffic Alert, asistență unghi mort și asistență la menținerea benzii. Mașina are Euro 6, jante din aliaj de 17\" și o configurație completă de sisteme de confort și siguranță."
},
{
  id: 3,
  category: "Renault",
  name: "Renault Koleos BLUE dCi X-Tronic 4WD Initiale Paris",
  price: "22.990 €",
  priceValue: "22990",

  year: 2021,
  firstRegistration: "30/01/2021",
  km: "71.500 km",

  fuel: "Diesel",
  engine: "2.0L Blue dCi",
  power: "190 CP",
  gearbox: "Automată X-Tronic",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Argintiu",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Renault",

  vin: "VF1RZG00266350305",

  badge: "4x4",

  features: [
    "Nivel echipare Initiale Paris",
    "Tapițerie piele Nappa",
    "Scaune față încălzite și ventilate",
    "Scaune față reglabile electric",
    "Memorie scaun șofer",
    "Scaun pasager reglabil electric",
    "Încălzire în volan",
    "Încălzire parbriz",
    "Trapă panoramică",
    "Bord virtual",
    "Bord îmbrăcat în piele",
    "Climatizare automată",
    "Sistem de navigare Premium Full Europa",
    "Limba română inclusă",
    "Touchscreen",
    "Radio",
    "CarPlay & MirrorLink",
    "Sistem audio BOSE",
    "HDD intern 20 GB",
    "AUX / SD Card / USB",
    "Sistem hands-free",
    "Keyless Go Pack",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Park Assist",
    "Cruise control",
    "Limitator de viteză",
    "Frânare automată de urgență",
    "Asistență la coborâre",
    "Hill Holder",
    "Asistență unghi mort",
    "Blind Spot Warning",
    "Sistem monitorizare șofer",
    "Faruri Full LED",
    "Lumini de zi Daylight Full LED",
    "Asistență fază lungă / scurtă",
    "Proiectoare de ceață",
    "Funcție Cornering",
    "Senzori de ploaie",
    "Senzori de lumină",
    "Oglinzi electrice, încălzite și rabatabile",
    "Oglindă retrovizoare antiorbire",
    "Geamuri electrice față/spate",
    "Parbriz antireflexie solară",
    "Privacy Glass",
    "Haion cu acționare electrică",
    "Lumini ambientale mânere / habitaclu / picioare",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Pachet crom exterior/interior",
    "Parasolare iluminate",
    "Torpedou refrigerat",
    "9 airbaguri",
    "Senzori presiune roți",
    "Start/Stop",
    "Frână de parcare electrică",
    "Jante aliaj 19",
    "Anvelope de vară",
    "Două chei/carduri",
    "Consumul mixt 5,7 l/100 km",
    "Emisii CO2 153 g/km"
  ],

images: [
  "cars/rkoleos2021/1.webp",
  "cars/rkoleos2021/2.webp",
  "cars/rkoleos2021/3.webp",
  "cars/rkoleos2021/4.webp",
  "cars/rkoleos2021/5.webp",
  "cars/rkoleos2021/6.webp",
  "cars/rkoleos2021/7.webp",
  "cars/rkoleos2021/8.webp",
  "cars/rkoleos2021/9.webp",
  "cars/rkoleos2021/10.webp",
  "cars/rkoleos2021/11.webp",
  "cars/rkoleos2021/12.webp",
  "cars/rkoleos2021/13.webp",
  "cars/rkoleos2021/14.webp",
  "cars/rkoleos2021/15.webp",
  "cars/rkoleos2021/16.webp",
  "cars/rkoleos2021/17.webp",
  "cars/rkoleos2021/18.webp",
  "cars/rkoleos2021/19.webp",
  "cars/rkoleos2021/20.webp",
  "cars/rkoleos2021/21.webp",
  "cars/rkoleos2021/22.webp",
  "cars/rkoleos2021/23.webp",
  "cars/rkoleos2021/24.webp",
  "cars/rkoleos2021/25.webp",
  "cars/rkoleos2021/26.webp",
  "cars/rkoleos2021/27.webp"
],

  videoId: "",

  description: "Renault Koleos BLUE dCi X-Tronic 4WD Initiale Paris din 2021, cu 71.500 km, motor 2.0 Blue dCi de 190 CP și transmisie automată X-Tronic 4x4. SUV în echipare Initiale Paris, cu piele Nappa, scaune încălzite și ventilate, trapă panoramică, bord virtual, sistem audio BOSE și navigație Premium Full Europa. Este echipat cu cameră marșarier, Park Assist, Keyless Go, faruri Full LED, asistență unghi mort și numeroase sisteme de siguranță. Mașina are un singur proprietar și service complet efectuat în rețeaua Renault."
},
  {
  id: 4,
  category: "Nissan",
  name: "Nissan LEAF 62 kWh e+ Tekna",
  price: "18.990  €",
  priceValue: "18990",

  year: 2020,
  firstRegistration: "20/09/2020",
  km: "24.000 km",

  fuel: "Electric",
  engine: "62 kWh",
  power: "217 CP",
  gearbox: "Automată",
  drive: "Față",
  body: "Compactă",
  doors: 5,
  seats: 5,

  battery: "62 kWh",
  electricRange: "385 km",

  euro: "Euro 6e",
  color: "Alb perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Nissan",

  vin: "SJNFAAZE1U0103379",

  badge: "Electric",

  features: [
    "Nivel echipare Tekna",
    "Carte service",
    "Computer de bord",
    "Navigație/GPS",
    "Radio",
    "Volan reglabil",
    "Jante aliaj 17",
    "Senzori parcare față/spate",
    "Cameră 360°",
    "Cameră marșarier",
    "Cruise control adaptiv",
    "Keyless Go",
    "Sistem audio premium",
    "Apple CarPlay & Android Auto",
    "Climatronic automat",
    "Senzori ploaie/lumină",
    "Faruri LED",
    "Lumini de zi Daylight Full LED",
    "Proiectoare ceață LED",
    "Geamuri electrice față/spate",
    "Oglinzi electrice, încălzite și rabatabile",
    "Scaune față și spate încălzite",
    "Volan încălzit",
    "Tapițerie piele",
    "Scaun șofer cu reglaje lombare",
    "Sistem monitorizare unghi mort",
    "Asistență la menținerea benzii",
    "Asistență la părăsirea benzii",
    "Asistență frânare de urgență",
    "Recunoaștere semne trafic",
    "Asistență ambuteiaj",
    "Asistență la coborâre",
    "Distronic activ",
    "Limitator de viteză",
    "Sistem pornire/oprire automată",
    "Încărcare rapidă",
    "Cablu încărcare inclus",
    "Pompă de căldură",
    "Banchetă încălzită",
    "Senzori de ploaie",
    "Senzori de lumină",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "Oglindă retrovizoare dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Sistem de navigare Premium Full Europa",
    "CarPlay & MirrorLink",
    "HDD intern 20 GB",
    "Cameră asistență fază lungă/scurtă",
    "AUX / SD Card / USB",
    "Keyless Go Pack",
    "Parasolare iluminate",
    "Lumini ambientale mânere / habitaclu / picioare",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "7 airbaguri",
    "Afișaj viteză electronic",
    "Oglindă retrovizoare cu funcție antiorbire",
    "Torpedou refrigerat",
    "Senzori presiune roți",
    "Privacy Glass",
    "EVSE EUR + MOD3 32A",
    "2 chei",
    "Garanție producător europeană 8 ani / 160.000 km până la 04.06.2029"
  ],

  images: [
  "cars/nissan-leaf/1.webp",
  "cars/nissan-leaf/2.webp",
  "cars/nissan-leaf/3.webp",
  "cars/nissan-leaf/4.webp",
  "cars/nissan-leaf/5.webp",
  "cars/nissan-leaf/6.webp",
  "cars/nissan-leaf/7.webp",
  "cars/nissan-leaf/8.webp",
  "cars/nissan-leaf/9.webp",
  "cars/nissan-leaf/10.webp",
  "cars/nissan-leaf/11.webp",
  "cars/nissan-leaf/12.webp",
  "cars/nissan-leaf/13.webp",
  "cars/nissan-leaf/14.webp",
  "cars/nissan-leaf/15.webp",
  "cars/nissan-leaf/16.webp",
  "cars/nissan-leaf/17.webp",
  "cars/nissan-leaf/18.webp",
  "cars/nissan-leaf/19.webp",
  "cars/nissan-leaf/20.webp",
  "cars/nissan-leaf/21.webp",
  "cars/nissan-leaf/22.webp",
  "cars/nissan-leaf/23.webp",
  "cars/nissan-leaf/24.webp",
  "cars/nissan-leaf/25.webp",
  "cars/nissan-leaf/26.webp",
  "cars/nissan-leaf/27.webp",
  "cars/nissan-leaf/28.webp",
  "cars/nissan-leaf/29.webp",
  "cars/nissan-leaf/30.webp",
  "cars/nissan-leaf/31.webp",
  "cars/nissan-leaf/32.webp",
  "cars/nissan-leaf/33.webp"
],

  videoId: "j-bjs31mqYc",

  description: "Nissan LEAF 62 kWh e+ Tekna din 2020, cu 24.000 km, motor electric de 217 CP și transmisie automată cu tracțiune față. Compactă 100% electrică, cu baterie de 62 kWh și autonomie declarată de până la 385 km. Echipată cu cameră 360°, cruise control adaptiv, Keyless Go, navigație Premium Full Europa, Apple CarPlay & Android Auto, climatronic, pompă de căldură, scaune și volan încălzite, faruri Full LED și sisteme avansate de asistență. Mașina are un singur proprietar, service complet în rețeaua Nissan și încărcare rapidă."
},

{
  id: 5,
   category: "Peugeot",
  name: "Peugeot 2008 PureTech 130 EAT8 GT",
  price: "15.999  €",
  priceValue: "15999",

  year: 2023,
  firstRegistration: "31/10/2022",
  km: "38.500 km",

  fuel: "Benzină",
  engine: "1.2L PureTech",
  power: "130 CP",
  gearbox: "Automată 8+1 trepte",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Gri metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Peugeot",

  vin: "VR3USHNSSNJ772652",

  badge: "GT",

  features: [
    "Nivel echipare GT",
    "Jante aliaj 17",
    "Senzori parcare față/spate",
    "Cruise control",
    "DISTRONIC activ",
    "Limitator de viteză",
    "ABS",
    "ESP",
    "Hill Holder",
    "Frână de parcare electrică",
    "Geamuri electrice față/spate",
    "Oglinzi electrice, încălzite și rabatabile",
    "Climatronic automat",
    "Volan sport din piele multifuncțional cu padele",
    "Volan cu comenzi",
    "Airbaguri frontale, laterale și cortină",
    "7 airbaguri",
    "Fixare scaun copil ISOFIX",
    "Senzori ploaie/lumină",
    "Faruri Full LED adaptive",
    "Lumini de zi Daylight Full LED",
    "Proiectoare ceață LED",
    "Funcție Cornering",
    "Stopuri LED",
    "Asistență fază lungă automată",
    "Cameră asistență fază lungă/scurtă",
    "Asistență la coborâre",
    "Sistem avertizare coliziune",
    "Recunoaștere semne trafic",
    "Asistență frânare de urgență",
    "Monitorizare unghi mort",
    "Cross Traffic Alert",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Cameră marșarier",
    "Oglindă retrovizoare dreapta cu asistență la marșarier",
    "Sistem de navigare Premium Full Europa",
    "Limba română inclusă",
    "CarPlay & MirrorLink",
    "HDD intern 20 GB",
    "Bluetooth",
    "Sistem audio",
    "Radio",
    "USB",
    "AUX / SD Card / USB",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "Keyless Go",
    "Pornire motor Keyless",
    "Tapiserie mixtă piele-textil",
    "Scaune sport față",
    "Scaune piele Nappa",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Parbriz antireflexie solară",
    "Oglindă retrovizoare cu funcție antiorbire",
    "Privacy Glass",
    "Pachet crom exterior/interior",
    "Parasolare iluminate",
    "Lumini ambientale mânere / habitaclu / picioare",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Torpedou refrigerat",
    "Senzori presiune roți",
    "Sistem Start/Stop",
    "Iluminare interioară LED",
    "Asistență în rampă",
    "Asistență în pantă",
    "Controlul tracțiunii",
    "Servodirecție",
    "Frânare asistată",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Sistem avertizare marșarier",
    "Sistem monitorizare stare șofer",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "Carte service"
  ],

 images: [
  "cars/pg20082023/1.webp",
  "cars/pg20082023/2.webp",
  "cars/pg20082023/3.webp",
  "cars/pg20082023/4.webp",
  "cars/pg20082023/5.webp",
  "cars/pg20082023/6.webp",
  "cars/pg20082023/7.webp",
  "cars/pg20082023/8.webp",
  "cars/pg20082023/9.webp",
  "cars/pg20082023/10.webp",
  "cars/pg20082023/11.webp",
  "cars/pg20082023/12.webp",
  "cars/pg20082023/13.webp",
  "cars/pg20082023/14.webp",
  "cars/pg20082023/15.webp",
  "cars/pg20082023/16.webp",
  "cars/pg20082023/17.webp",
  "cars/pg20082023/18.webp",
  "cars/pg20082023/19.webp",
  "cars/pg20082023/20.webp",
  "cars/pg20082023/21.webp",
  "cars/pg20082023/22.webp",
  "cars/pg20082023/23.webp",
  "cars/pg20082023/24.webp",
  "cars/pg20082023/25.webp",
  "cars/pg20082023/26.webp",
  "cars/pg20082023/27.webp",
  "cars/pg20082023/28.webp",
  "cars/pg20082023/29.webp",
  "cars/pg20082023/30.webp"
],

  videoId: "itEE7sQR0Kc",

  description: "Peugeot 2008 PureTech 130 EAT8 GT din 2023, cu 38.500 km, motor 1.2 PureTech de 130 CP și transmisie automată EAT8 cu tracțiune față. SUV în echipare GT, cu faruri Full LED adaptive, bord virtual 3D, scaune piele Nappa, Keyless Go, navigație Premium Full Europa, cameră marșarier, DISTRONIC activ și asistență unghi mort. Mașina are un singur proprietar, service complet în rețeaua Peugeot și jante din aliaj de 17."
},

{
  id: 6,
   category: "Renault",
  name: "Renault Koleos BLUE dCi 185 4WD X-tronic INITIALE PARIS",
  price: "21.990  €",
  priceValue: "21990",

  year: 2021,
  firstRegistration: "29/06/2021",
  km: "73.500 km",

  fuel: "Diesel",
  engine: "2.0L Blue dCi",
  power: "183 CP",
  gearbox: "Automată X-tronic",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6d",
  color: "Negru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Renault",

  vin: "VF1RZG00667356683",

  badge: "Premium",

  features: [
    "Nivel echipare Initiale Paris",
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 19",
    "Anvelope de vară",
    "Navigație/GPS",
    "Radio/CD",
    "Volan reglabil",
    "ABS",
    "Airbag",
    "9 airbaguri",
    "Alarmă",
    "Antifurt",
    "Control tracțiune",
    "EDS",
    "ESP",
    "Imobilizator",
    "Comenzi pe volan",
    "Cruise control",
    "Geamuri colorate",
    "Geamuri electrice față/spate",
    "Încălzire auxiliară",
    "Oglinzi electrice, încălzite și rabatabile",
    "Senzori de lumină",
    "Senzori de ploaie",
    "Servodirecție",
    "Climatronic pe două zone",
    "Plafon panoramic",
    "Tapițerie piele",
    "Scaune piele Nappa",
    "Scaune față încălzite",
    "Scaune față ventilate",
    "Scaune față cu masaj",
    "Scaune spate încălzite",
    "Scaun șofer reglabil electric",
    "Scaun pasager reglabil electric",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Scaun cu memorie",
    "Încălzire în volan",
    "Încălzire parbriz",
    "Trapă panoramică",
    "Volan din piele",
    "Volan sport",
    "Volan multifuncțional",
    "Keyless Entry",
    "Keyless Go",
    "Senzor ploaie",
    "Faruri Full LED",
    "Lumini de zi Full LED",
    "Stopuri LED",
    "Faruri ceață LED",
    "Faruri adaptive",
    "Faruri direcționale",
    "Spălare faruri",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "Asistență la coborâre",
    "Haion cu acționare electrică",
    "Limitator de viteză",
    "Senzori parcare față/spate",
    "Park Assist",
    "Sistem de parcare automat",
    "Cameră marșarier",
    "Oglindă retrovizoare dreapta cu asistență la marșarier",
    "Asistență la părăsirea benzii",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Monitorizare unghi mort",
    "Pilot automat adaptiv",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență ambuteiaj",
    "Asistență fază lungă",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Parbriz antireflexie solară",
    "Sistem de navigare Premium Full Europa",
    "Limba română inclusă",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Sistem audio BOSE",
    "Radio",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",
    "AUX / SD Card / USB",
    "Port USB",
    "Lumini ambientale mânere / habitaclu / picioare",
    "Iluminare interioară LED",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Parasolare iluminate",
    "Torpedou refrigerat",
    "Oglindă retrovizoare cu funcție antiorbire",
    "Privacy Glass",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Sistem Start/Stop",
    "Două chei/carduri",
    "4x4 / AWD"
  ],

images: [
  "cars/rkoleos2021-2/1.webp",
  "cars/rkoleos2021-2/2.webp",
  "cars/rkoleos2021-2/3.webp",
  "cars/rkoleos2021-2/4.webp",
  "cars/rkoleos2021-2/5.webp",
  "cars/rkoleos2021-2/6.webp",
  "cars/rkoleos2021-2/7.webp",
  "cars/rkoleos2021-2/8.webp",
  "cars/rkoleos2021-2/9.webp",
  "cars/rkoleos2021-2/10.webp",
  "cars/rkoleos2021-2/11.webp",
  "cars/rkoleos2021-2/12.webp",
  "cars/rkoleos2021-2/13.webp",
  "cars/rkoleos2021-2/14.webp",
  "cars/rkoleos2021-2/15.webp",
  "cars/rkoleos2021-2/16.webp",
  "cars/rkoleos2021-2/17.webp",
  "cars/rkoleos2021-2/18.webp",
  "cars/rkoleos2021-2/19.webp",
  "cars/rkoleos2021-2/20.webp",
  "cars/rkoleos2021-2/21.webp",
  "cars/rkoleos2021-2/22.webp",
  "cars/rkoleos2021-2/23.webp",
  "cars/rkoleos2021-2/24.webp",
  "cars/rkoleos2021-2/25.webp",
  "cars/rkoleos2021-2/26.webp",
  "cars/rkoleos2021-2/27.webp",
  "cars/rkoleos2021-2/28.webp",
  "cars/rkoleos2021-2/29.webp",
  "cars/rkoleos2021-2/30.webp",
  "cars/rkoleos2021-2/31.webp",
  "cars/rkoleos2021-2/32.webp",
  "cars/rkoleos2021-2/33.webp"
],

  videoId: "y0I5GIUITAI",

  description: "Renault Koleos BLUE dCi 185 4WD X-tronic Initiale Paris din 2021, cu 73.500 km, motor 2.0 Blue dCi de 183 CP și transmisie automată X-tronic 4x4. SUV în echipare Initiale Paris, cu piele Nappa, scaune încălzite și ventilate, trapă panoramică, bord virtual, scaune cu masaj și sistem audio BOSE. Este echipat cu haion electric, Park Assist, cameră de marșarier, Keyless Go, faruri Full LED, pilot automat adaptiv și sisteme de asistență pentru condus. Mașina are un singur proprietar și service complet efectuat în rețeaua Renault."
},

{
  id: 7,
   category: "Renault",
  name: "Renault Captur PHEV 160 Engineered",
  price: "17.990  €",
  priceValue: "17990",

  year: 2020,
  firstRegistration: "25/08/2020",
  km: "100.500 km",

  fuel: "Hibrid Plug-In",
  engine: "1.6L Plug-In Hybrid",
  power: "160 CP",
  gearbox: "Automată",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Negru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Istoric complet de service exclusiv în rețeaua autorizată Renault",

  vin: "VF1RJB00865468200",

  badge: "Premium",

  features: [
    "Initiale Paris",
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 18",
    "Anvelope all season",
    "Navigație/GPS",
    "Radio/CD",
    "Volan reglabil",
    "ABS",
    "Airbag",
    "9 airbaguri",
    "Alarmă",
    "Antifurt",
    "Control tracțiune",
    "EDS",
    "ESP",
    "Imobilizator",
    "Comenzi pe volan",
    "Cruise control",
    "Geamuri colorate",
    "Geamuri electrice față/spate",
    "Încălzire auxiliară",
    "Oglinzi electrice și încălzite",
    "Senzori de lumină",
    "Senzori de ploaie",
    "Servodirecție",
    "Lumini de zi Full LED",
    "Faruri Full LED",
    "Faruri LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Faruri adaptive",
    "Faruri direcționale",
    "Asistență fază lungă",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "Asistență la coborâre",
    "Volan multifuncțional",
    "Volan din piele",
    "Volan sport",
    "Încălzire în volan",
    "Limitator de viteză",
    "Senzori parcare față/spate",
    "Park Assist",
    "Sistem de parcare automat",
    "Cameră video spate",
    "Oglindă dreapta cu asistență la marșarier",
    "Asistență la părăsirea benzii",
    "Lane Assist",
    "Pilot automat adaptiv",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență ambuteiaj",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Parbriz antireflexie solară",
    "Bord virtual",
    "Bord îmbrăcat în piele",
    "Tapițerie piele Nappa",
    "Scaun șofer reglabil electric",
    "Scaune față încălzite",
    "Suport lombar electric scaun șofer",
    "Climatronic 2 zone",
    "Trapă panoramică",
    "Trapă electrică",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Sistem navigație Premium Full Europa",
    "Limba română inclusă",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "Sistem audio BOSE",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",
    "AUX / SD Card / USB",
    "Încărcător wireless",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Privacy Glass",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Sistem Start/Stop",
    "Iluminare interioară LED",
    "Carlig remorcare",
    "Suspensie confort"
  ],

 images: [
  "cars/rcaptur2020/1.webp",
  "cars/rcaptur2020/2.webp",
  "cars/rcaptur2020/3.webp",
  "cars/rcaptur2020/4.webp",
  "cars/rcaptur2020/5.webp",
  "cars/rcaptur2020/6.webp",
  "cars/rcaptur2020/7.webp",
  "cars/rcaptur2020/8.webp",
  "cars/rcaptur2020/9.webp",
  "cars/rcaptur2020/10.webp",
  "cars/rcaptur2020/11.webp",
  "cars/rcaptur2020/12.webp",
  "cars/rcaptur2020/13.webp",
  "cars/rcaptur2020/14.webp",
  "cars/rcaptur2020/15.webp",
  "cars/rcaptur2020/16.webp",
  "cars/rcaptur2020/17.webp",
  "cars/rcaptur2020/18.webp",
  "cars/rcaptur2020/19.webp",
  "cars/rcaptur2020/20.webp",
  "cars/rcaptur2020/21.webp",
  "cars/rcaptur2020/22.webp",
  "cars/rcaptur2020/23.webp",
  "cars/rcaptur2020/24.webp",
  "cars/rcaptur2020/25.webp",
  "cars/rcaptur2020/26.webp",
  "cars/rcaptur2020/27.webp",
  "cars/rcaptur2020/28.webp",
  "cars/rcaptur2020/29.webp",
  "cars/rcaptur2020/30.webp",
  "cars/rcaptur2020/31.webp",
  "cars/rcaptur2020/32.webp",
  "cars/rcaptur2020/33.webp",
  "cars/rcaptur2020/34.webp",
  "cars/rcaptur2020/35.webp",
  "cars/rcaptur2020/36.webp",
  "cars/rcaptur2020/37.webp",
  "cars/rcaptur2020/38.webp"
],

  videoId: "UQl2OKtbqoY",

  description: "Renault Captur Initiale Paris PHEV 160 din 2020, cu 100.500 km, motor 1.6 Plug-In Hybrid de 160 CP și transmisie automată cu tracțiune față. Echiparea include tapițerie din piele Nappa, scaune încălzite, trapă panoramică, bord virtual, navigație Premium, sistem audio BOSE, Keyless Go, Park Assist și cameră video spate. Mașina are un singur proprietar și istoric complet de service în rețeaua autorizată Renault."
},

{
  id: 8,
   category: "Peugeot",
  name: "Peugeot 3008 PHEV 225 EAT8 GT",
  price: "18.990  €",
  priceValue: "18990",

  year: 2022,
  firstRegistration: "29/12/2021",
  km: "126.900 km",

  fuel: "Hibrid Plug-In",
  engine: "1.6L benzină + electric",
  power: "225 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "14.2 kWh",
  electricRange: "45 km",

  euro: "Euro 6b",
  color: "Alb perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Peugeot",

  vin: "VF3M4DGZUMS227611",

  badge: "GT",

  features: [
    "Nivel echipare GT",
    "Carte service",
    "Computer de bord",
    "Jante aliaj 18",
    "Anvelope de vară",
    "Navigație/GPS",
    "Radio/CD",
    "Android Auto",
    "Apple CarPlay",
    "Bluetooth",
    "Touchscreen",
    "Sistem hands-free",
    "Port USB",
    "HDD intern 20 GB",
    "AUX / SD Card / USB",
    "Sistem audio FOCAL",
    "Climatronic automat pe două zone",
    "Volan piele multifuncțional",
    "Volan cu padele",
    "Volan sport",
    "Scaune piele GT",
    "Scaune față cu masaj",
    "Scaun șofer cu memorie",
    "Scaun pasager cu masaj",
    "Scaune față încălzite",
    "Scaune sport față",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Easy Access portbagaj",
    "Geamuri electrice față/spate",
    "Oglinzi electrice, încălzite și rabatabile",
    "Senzori de ploaie",
    "Senzori de lumină",
    "Privacy Glass",
    "Încălzire auxiliară",
    "Bord virtual",
    "Bord îmbrăcat în piele",
    "Pachet iarnă",
    "Parbriz antireflexie solară",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Lumini ambientale LED",
    "Iluminare interioară LED",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Parasolare iluminate",
    "Faruri Full LED adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Lumini de zi Full LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Asistență fază lungă",
    "Senzori parcare față/spate",
    "Cameră marșarier",
    "Asistență parcare",
    "Oglindă dreapta cu asistență la marșarier",
    "Pilot automat adaptiv",
    "Controlul distanței",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Asistență la frânare",
    "Asistență frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Sistem franare automată pietoni",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență ambuteiaj",
    "Asistență în pantă",
    "Asistență în rampă",
    "3 moduri de condus: Hybrid, Electric, Sport",
    "Asistență la coborâre",
    "ABS",
    "ESP",
    "EBD",
    "EDS",
    "Control tracțiune",
    "Hill Holder",
    "Frână de parcare electrică",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "9 airbaguri",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "ISOFIX"
  ],

images: [
  "cars/pg30082022/1.webp",
  "cars/pg30082022/2.webp",
  "cars/pg30082022/3.webp",
  "cars/pg30082022/4.webp",
  "cars/pg30082022/5.webp",
  "cars/pg30082022/6.webp",
  "cars/pg30082022/7.webp",
  "cars/pg30082022/8.webp",
  "cars/pg30082022/9.webp",
  "cars/pg30082022/10.webp",
  "cars/pg30082022/11.webp",
  "cars/pg30082022/12.webp",
  "cars/pg30082022/13.webp",
  "cars/pg30082022/14.webp",
  "cars/pg30082022/15.webp",
  "cars/pg30082022/16.webp",
  "cars/pg30082022/17.webp",
  "cars/pg30082022/18.webp",
  "cars/pg30082022/19.webp",
  "cars/pg30082022/20.webp",
  "cars/pg30082022/21.webp",
  "cars/pg30082022/22.webp",
  "cars/pg30082022/23.webp",
  "cars/pg30082022/24.webp",
  "cars/pg30082022/25.webp",
  "cars/pg30082022/26.webp",
  "cars/pg30082022/27.webp",
  "cars/pg30082022/28.webp",
  "cars/pg30082022/29.webp",
  "cars/pg30082022/30.webp",
  "cars/pg30082022/31.webp",
  "cars/pg30082022/32.webp",
  "cars/pg30082022/33.webp",
  "cars/pg30082022/34.webp",
  "cars/pg30082022/35.webp",
  "cars/pg30082022/36.webp"
],

  videoId: "z0KVuetk4JQ",

  description: "Peugeot 3008 GT PHEV 225 din 2022, cu 126.900 km, motor 1.6 benzină + electric de 225 CP și transmisie automată EAT8 cu tracțiune față. Echiparea GT include scaune din piele cu masaj, memorie pentru șofer, scaune încălzite, bord virtual, navigație Premium, sistem audio FOCAL, Keyless Go, Park Assist și cameră de marșarier. Bateria de 14.2 kWh oferă o autonomie electrică de până la 45 km. Mașina are un singur proprietar și service complet în rețeaua Peugeot."
},
 
 {
  id: 9,  
  category: "Toyota",
  name: "Toyota Yaris Cross 1.5 VVT-i AWD-i Adventure",
  price: "22.990 €",
  priceValue: "22990",

  year: 2022,
  firstRegistration: "07/09/2022",
  km: "91.000 km",

  fuel: "Hibrid",
  engine: "1.5L VVT-i Hybrid",
  power: "116 CP",
  gearbox: "Automată",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6c",
  color: "Roșu perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Toyota",

  vin: "JTDKCACB00A023212",

  badge: "Adventure",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 18",
    "Anvelope all season",
    "Navigație/GPS",
    "Radio",
    "Sistem audio",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "Monitor touchscreen",
    "Conexiune Internet",
    "Head Up Display",
    "Climatronic 2 zone",
    "Tapițerie mixtă piele-textil",
    "Scaune sport față",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Schimbător viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Senzori de lumină",
    "Senzori de ploaie",
    "Servodirecție",
    "Cruise control",
    "Pilot automat adaptiv",
    "Controlul distanței",
    "Limitator de viteză",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Cameră video spate",
    "Oglindă dreapta cu asistență la marșarier",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Active Lane Control Assistant",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență fază lungă",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "ABS",
    "ESP",
    "EBD",
    "Controlul tracțiunii",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "7 airbag",
    "Isofix",
    "Daylight Full LED",
    "Faruri Full LED",
    "Funcție Cornering",
    "Proiectoare ceață",
    "Pachet crom exterior/interior",
    "Asistență la coborâre",
    "Parbriz antireflexie solară",
    "Sistem navigare Premium Full Europa",
    "Limba română",
    "CarPlay & MirrorLink",
    "HDD intern 20 GB",
    "Climatronic",
    "Cameră asistență fază lungă/scurtă",
    "AUX IN/SD-Card/USB",
    "Keyless Go Pack",
    "Parasolare iluminate",
    "Coming Home",
    "Leaving Home",
    "Afișaj viteză electronic",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Privacy Glass",
    "Senzori presiune roți"
  ],

images: [
  "cars/yaris2022/1.webp",
  "cars/yaris2022/2.webp",
  "cars/yaris2022/3.webp",
  "cars/yaris2022/4.webp",
  "cars/yaris2022/5.webp",
  "cars/yaris2022/6.webp",
  "cars/yaris2022/7.webp",
  "cars/yaris2022/8.webp",
  "cars/yaris2022/9.webp",
  "cars/yaris2022/10.webp",
  "cars/yaris2022/11.webp",
  "cars/yaris2022/12.webp",
  "cars/yaris2022/13.webp",
  "cars/yaris2022/14.webp",
  "cars/yaris2022/15.webp",
  "cars/yaris2022/16.webp",
  "cars/yaris2022/17.webp",
  "cars/yaris2022/18.webp",
  "cars/yaris2022/19.webp",
  "cars/yaris2022/20.webp",
  "cars/yaris2022/21.webp",
  "cars/yaris2022/22.webp",
  "cars/yaris2022/23.webp",
  "cars/yaris2022/24.webp",
  "cars/yaris2022/25.webp",
  "cars/yaris2022/26.webp",
  "cars/yaris2022/27.webp",
  "cars/yaris2022/28.webp",
  "cars/yaris2022/29.webp",
  "cars/yaris2022/30.webp",
  "cars/yaris2022/31.webp",
  "cars/yaris2022/32.webp",
  "cars/yaris2022/33.webp",
  "cars/yaris2022/34.webp"
],

  videoId: "mXztJjYIw_o",

  description: "Toyota Yaris Cross Hybrid AWD-i din 2022, cu 91.000 km, motor 1.5 VVT-i Hybrid de 116 CP și transmisie automată cu tracțiune integrală 4x4. Echiparea include Head Up Display, scaune încălzite, navigație Premium, Apple CarPlay & Android Auto, Keyless Go, climatronic, cameră de marșarier, senzori de parcare și Lane Assist. Mașina are un singur proprietar și service complet în rețeaua Toyota."
},

 {
  id: 10,
    category: "Ford",
  name: "Ford Kuga 2.5 Duratec FHEV FWD Vignale",
  price: "20.990 €",
  priceValue: "20990",

  year: 2021,
  firstRegistration: "06/09/2021",
  km: "107.500 km",

  fuel: "Hibrid",
  engine: "2.5L Duratec FHEV",
  power: "190 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Alb perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Ford",

  vin: "WF0FXXWPMHMR39610",

  badge: "Vignale",

  features: [
    "Vignale",
    "Carte service",
    "Computer de bord",
    "Navigație/GPS",
    "Radio",
    "Sistem audio Bang & Olufsen",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "Head Up Display",
    "HDD intern 20 GB",
    "Climatronic 2 zone",
    "Climatizare spate",
    "Plafon panoramic",
    "Tapițerie piele Nappa",
    "Scaun șofer ajustabil electric",
    "Scaun șofer cu memorie",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Încălzire scaune spate",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan încălzit",
    "Schimbător viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Parbriz încălzit",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Senzor ploaie",
    "Senzor lumină",
    "Pilot automat adaptiv",
    "Controlul distanței",
    "Limitator de viteză",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Sistem de parcare automat",
    "Cameră video spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Active Lane Control Assistant",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri LED",
    "Faruri Full LED Adaptive",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale",
    "Cameră asistență fază lungă/scurtă",
    "Parbriz antireflexie solară",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Jante aliaj 18",
    "Anvelope vară",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "Isofix"
  ],

images: [
  "cars/kuga2021/1.webp",
  "cars/kuga2021/2.webp",
  "cars/kuga2021/3.webp",
  "cars/kuga2021/4.webp",
  "cars/kuga2021/5.webp",
  "cars/kuga2021/6.webp",
  "cars/kuga2021/7.webp",
  "cars/kuga2021/8.webp",
  "cars/kuga2021/9.webp",
  "cars/kuga2021/10.webp",
  "cars/kuga2021/11.webp",
  "cars/kuga2021/12.webp",
  "cars/kuga2021/13.webp",
  "cars/kuga2021/14.webp",
  "cars/kuga2021/15.webp",
  "cars/kuga2021/16.webp",
  "cars/kuga2021/17.webp",
  "cars/kuga2021/18.webp",
  "cars/kuga2021/19.webp",
  "cars/kuga2021/20.webp",
  "cars/kuga2021/21.webp",
  "cars/kuga2021/22.webp",
  "cars/kuga2021/23.webp",
  "cars/kuga2021/24.webp",
  "cars/kuga2021/25.webp",
  "cars/kuga2021/26.webp",
  "cars/kuga2021/27.webp",
  "cars/kuga2021/28.webp",
  "cars/kuga2021/29.webp",
  "cars/kuga2021/30.webp"
],

  videoId: "c9kWSYHyMSg",

  description: "Ford Kuga Vignale Hybrid din 2021, cu 107.500 km, motor 2.5 Duratec FHEV de 190 CP și transmisie automată 8+1 cu tracțiune față. Echiparea Vignale include plafon panoramic, scaune din piele Nappa încălzite, memorie pentru șofer, volan încălzit, Head Up Display, navigație, sistem audio Bang & Olufsen, Keyless Go, pilot automat adaptiv, Park Assist și cameră de marșarier. Mașina are un singur proprietar și service complet în rețeaua Ford."
},
 
{
  id: 11,  
 category: "Peugeot",
  name: "Peugeot 3008 PHEV 300 EAT8 4X4 GT",
  price: "18.990 €",
  priceValue: "18990",

  year: 2022,
  firstRegistration: "31/05/2022",
  km: "106.500 km",

  fuel: "Hibrid Plug-In",
  engine: "1.6L benzină + electric",
  power: "300 CP",
  gearbox: "Automată 8+1 EAT8",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "14.2 kWh",
  electricRange: "51 km",

  euro: "Euro 6b",
  color: "Gri metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Peugeot",

  vin: "VF3M45GBUNS058305",

  badge: "GT",

  features: [
    "GT",
    "Carte service",
    "Computer de bord",
    "Navigație/GPS",
    "Radio",
    "Android Auto",
    "Apple CarPlay",
    "Bluetooth",
    "Touchscreen",
    "Port USB",
    "Sistem audio",
    "Control vocal",
    "Conexiune Internet",
    "Climatronic 2 zone",
    "Tapițerie Alcantara",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Padele volan",
    "Schimbător viteze piele",
    "Cheie digitală",
    "Keyless Entry",
    "Keyless Go",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Senzori ploaie",
    "Senzori lumină",
    "Pilot automat adaptiv",
    "Controlul distanței",
    "Limitator de viteză",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Cameră video spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Active Lane Control Assistant",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Controlul tracțiunii",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Faruri direcționale",
    "Faruri cu temporizator",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Lumini ambientale LED",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Asistență în ambuteiaj",
    "Jante aliaj 18",
    "Anvelope all season",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "9 airbag",
    "Isofix",
    "Bord virtual",
    "Bord îmbrăcat în piele",
    "Scaune piele GT",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "Oglindă retrovizoare dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Navigație Premium Full Europa",
    "Limba română",
    "CarPlay & MirrorLink",
    "4 moduri de condus: Hybrid, Electric, Sport, AWD",
    "HDD intern 20 GB",
    "Cameră asistență fază lungă/scurtă",
    "AUX IN/SD-Card/USB",
    "Keyless Go Pack",
    "Parasolare iluminate",
    "Coming Home",
    "Leaving Home",
    "Afișaj viteză electronic",
    "Oglindă retrovizoare antiorbire",
    "Torpedou refrigerat",
    "Filtru de particule"
  ],

 images: [
  "cars/pg30082022-2/1.webp",
  "cars/pg30082022-2/2.webp",
  "cars/pg30082022-2/3.webp",
  "cars/pg30082022-2/4.webp",
  "cars/pg30082022-2/5.webp",
  "cars/pg30082022-2/6.webp",
  "cars/pg30082022-2/7.webp",
  "cars/pg30082022-2/8.webp",
  "cars/pg30082022-2/9.webp",
  "cars/pg30082022-2/10.webp",
  "cars/pg30082022-2/11.webp",
  "cars/pg30082022-2/12.webp",
  "cars/pg30082022-2/13.webp",
  "cars/pg30082022-2/14.webp",
  "cars/pg30082022-2/15.webp",
  "cars/pg30082022-2/16.webp",
  "cars/pg30082022-2/17.webp",
  "cars/pg30082022-2/18.webp",
  "cars/pg30082022-2/19.webp",
  "cars/pg30082022-2/20.webp",
  "cars/pg30082022-2/21.webp",
  "cars/pg30082022-2/22.webp",
  "cars/pg30082022-2/23.webp",
  "cars/pg30082022-2/24.webp",
  "cars/pg30082022-2/25.webp",
  "cars/pg30082022-2/26.webp",
  "cars/pg30082022-2/27.webp",
  "cars/pg30082022-2/28.webp",
  "cars/pg30082022-2/29.webp",
  "cars/pg30082022-2/30.webp",
  "cars/pg30082022-2/31.webp"
],

  videoId: "ov8CXSXnVkY",

  description: "Peugeot 3008 GT PHEV 300 din 2022, cu 106.500 km, motor 1.6 benzină + electric de 300 CP și transmisie automată EAT8 cu tracțiune integrală 4x4. Echiparea GT include scaune din piele, bord virtual, navigație Premium, Keyless Go, pilot automat adaptiv, asistență la parcare, cameră de marșarier și faruri Full LED Adaptive. Bateria de 14.2 kWh oferă o autonomie electrică de până la 51 km. Mașina are un singur proprietar și service complet în rețeaua Peugeot."
},
 {
  id: 12,
    category: "Peugeot",
  name: "Peugeot 2008 1.2 PureTech EAT8 STT GT",
  price: "15.999 €",
  priceValue: 15999,

  year: 2021,
  firstRegistration: "02/04/2021",
  km: "52.000 km",

  fuel: "Benzină",
  engine: "1.2 PureTech",
  power: "130 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Gri metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Peugeot",

  vin: "VR3USHNSSMJ778938",

  badge: "GT",

  features: [
    "Nivel echipare GT",
    "Bord virtual 3D",
    "Scaune piele Nappa",
    "Scaune sport față",
    "Scaune față cu masaj",
    "Scaun șofer ajustabil electric",
    "Scaun cu memorie",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Climatronic 2 zone",
    "Volan piele",
    "Volan sport GT",
    "Volan multifuncțional cu comenzi",
    "Padele schimbare viteze",
    "Schimbător viteze piele",
    "Keyless Go",
    "Pornire motor Keyless",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Senzori ploaie",
    "Senzori lumină",
    "Jante aliaj 17",
    "Anvelope vară",
    "Senzori presiune roți",
    "Faruri Full LED Adaptive",
    "Lumini de zi Full LED",
    "Lumini de zi LED",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Proiectoare ceață LED",
    "Stopuri LED",
    "Asistență fază lungă automată",
    "Funcție Cornering",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale",
    "Pachet crom exterior/interior",
    "Parbriz antireflexie solară",
    "Navigație Premium Full Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Sistem hands-free",
    "Sistem audio",
    "Radio",
    "Monitor touchscreen",
    "USB",
    "AUX",
    "SD Card",
    "HDD intern 20 GB",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Pilot automat adaptiv Distronic",
    "Limitator de viteză",
    "Monitorizare unghi mort",
    "Cross Traffic Alert",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență frânare de urgență",
    "Sistem avertizare coliziune",
    "Sistem pre-coliziune",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Asistență intersecție",
    "Asistență ambuteiaj",
    "Asistență la coborâre",
    "Asistență în rampă",
    "Asistență fază lungă",
    "Controlul tracțiunii",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare marșarier",
    "Sistem monitorizare stare șofer",
    "Asistență activă monitorizare șofer",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "7 airbaguri",
    "ISOFIX",
    "Frână de parcare electrică",
    "Servodirecție",
    "Start/Stop",
    "Torpedou refrigerat"
  ],

  images: [
  "cars/pg20082021/1.webp",
  "cars/pg20082021/2.webp",
  "cars/pg20082021/3.webp",
  "cars/pg20082021/4.webp",
  "cars/pg20082021/5.webp",
  "cars/pg20082021/6.webp",
  "cars/pg20082021/7.webp",
  "cars/pg20082021/8.webp",
  "cars/pg20082021/9.webp",
  "cars/pg20082021/10.webp",
  "cars/pg20082021/11.webp",
  "cars/pg20082021/12.webp",
  "cars/pg20082021/13.webp",
  "cars/pg20082021/14.webp",
  "cars/pg20082021/15.webp",
  "cars/pg20082021/16.webp",
  "cars/pg20082021/17.webp",
  "cars/pg20082021/18.webp",
  "cars/pg20082021/19.webp",
  "cars/pg20082021/20.webp",
  "cars/pg20082021/21.webp",
  "cars/pg20082021/22.webp",
  "cars/pg20082021/23.webp",
  "cars/pg20082021/24.webp",
  "cars/pg20082021/25.webp",
  "cars/pg20082021/26.webp",
  "cars/pg20082021/27.webp"
],

  videoId: "9qj6d3TvKB0",

  description: "Peugeot 2008 GT din 2021, cu 52.000 km, motor 1.2 PureTech de 130 CP și transmisie automată EAT8 cu tracțiune față. Echiparea GT include scaune din piele Nappa cu încălzire și masaj, bord virtual 3D, navigație Premium, Keyless Go, pilot automat adaptiv, monitorizare unghi mort, cameră de marșarier și faruri Full LED Adaptive. Mașina are un singur proprietar și service complet în rețeaua Peugeot."
},

 {
  id: 13,
    category: "Renault",
  name: "Renault Talisman Blue dCi EDC Intens",
  price: "15.990 €",
  priceValue: 15990,

  year: 2020,
  firstRegistration: "04/08/2020",
  km: "76.000 km",

  fuel: "Diesel",
  engine: "2.0 Blue dCi",
  power: "160 CP",
  gearbox: "Automată",
  drive: "Față",
  body: "Sedan",
  doors: 4,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Albastru metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Istoric complet de service exclusiv în rețeaua autorizată Renault",

  vin: "VF1RFD00865770633",

  badge: "Intens",

  features: [
    "Nivel echipare Intens",
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 18",
    "Navigație Premium Full Europa",
    "Navigație cu limba română",
    "Radio/CD",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Sistem hands-free",
    "Sistem audio",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "Port USB",
    "AUX",
    "SD Card",
    "HDD intern 20 GB",
    "Climatronic",
    "Încălzire cu reglare automată",
    "Tapiserie mixtă piele-textil",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Scaune față cu masaj",
    "Scaune sport față",
    "Scaune spate ventilate",
    "Scaun pasager reglabil",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Încălzire volan",
    "Schimbător viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Senzori ploaie",
    "Senzori lumină",
    "Ștergătoare parbriz",
    "Pilot automat adaptiv Distronic",
    "Limitator de viteză",
    "Controlul distanței",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Monitorizare unghi mort",
    "Asistență schimbare bandă",
    "Asistență la frânare",
    "Asistență viraj",
    "Asistență în panta",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Asistență intersecție",
    "Asistență fază lungă",
    "Faruri LED",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Faruri ceață LED",
    "Lumini de zi LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale",
    "Pachet crom exterior/interior",
    "Parbriz antireflexie solară",
    "Cameră asistență fază lungă/scurtă",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Start/Stop",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "Controlul tracțiunii",
    "EDS",
    "Sistem recuperare energie"
  ],

  images: [
  "cars/talisman2020/1.webp",
  "cars/talisman2020/2.webp",
  "cars/talisman2020/3.webp",
  "cars/talisman2020/4.webp",
  "cars/talisman2020/5.webp",
  "cars/talisman2020/6.webp",
  "cars/talisman2020/7.webp",
  "cars/talisman2020/8.webp",
  "cars/talisman2020/9.webp",
  "cars/talisman2020/10.webp",
  "cars/talisman2020/11.webp",
  "cars/talisman2020/12.webp",
  "cars/talisman2020/13.webp",
  "cars/talisman2020/14.webp",
  "cars/talisman2020/15.webp",
  "cars/talisman2020/16.webp",
  "cars/talisman2020/17.webp",
  "cars/talisman2020/18.webp",
  "cars/talisman2020/19.webp",
  "cars/talisman2020/20.webp",
  "cars/talisman2020/21.webp",
  "cars/talisman2020/22.webp",
  "cars/talisman2020/23.webp",
  "cars/talisman2020/24.webp",
  "cars/talisman2020/25.webp",
  "cars/talisman2020/26.webp",
  "cars/talisman2020/27.webp"
],

  videoId: "",

  description: "Renault Talisman Intens din 2020, cu 76.000 km, motor 2.0 Blue dCi de 160 CP și transmisie automată EDC cu tracțiune față. Echiparea include scaune din piele parțială cu masaj, bord virtual, navigație Premium, Keyless Go, pilot automat adaptiv, monitorizare unghi mort, asistență la păstrarea benzii și faruri Full LED. Mașina are un singur proprietar și istoric complet de service în rețeaua autorizată Renault."
},

{
  id: 14,
   category: "BMW",
  name: "BMW X1 xDrive25e M Sport",
  price: "21.990 €",
  priceValue: 21990,

  year: 2021,
  firstRegistration: "12/04/2021",
  km: "117.700 km",

  fuel: "Hibrid Plug-In",
  engine: "1.5",
  power: "220 CP",
  gearbox: "Automată 8+1",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Negru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Istoric complet de service exclusiv în rețeaua autorizată BMW",

  vin: "WBA71AB0305T64444",

  badge: "M Sport",

  features: [
    "Pachet M Sport",
    "4x4 xDrive",
    "Plafon panoramic",
    "Tapiserie mixtă piele-textil",
    "Scaune sport față",
    "Scaune față încălzite",
    "Scaun șofer reglabil electric",
    "Scaun pasager reglabil electric",
    "Scaun șofer cu memorie",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Climatronic 2 zone",
    "Volan sport M din piele",
    "Volan multifuncțional",
    "Volan cu comenzi",
    "Keyless Entry",
    "Keyless Go",
    "Cheie digitală",
    "Pornire motor Keyless",
    "Easy Access portbagaj",
    "Geamuri electrice față/spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Privacy Glass",
    "Senzori ploaie",
    "Senzori lumină",
    "Jante aliaj 18",
    "Anvelope all season",
    "Suspensie reglabilă",
    "Suspensie sport",
    "Suspensie controlată electronic",
    "Senzori presiune roți",
    "Navigație Premium Full Europa",
    "Navigație/GPS",
    "Apple CarPlay",
    "Bluetooth",
    "Sistem hands-free",
    "Sistem audio performant",
    "Radio",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "USB",
    "AUX",
    "SD Card",
    "HDD intern 20 GB",
    "Cameră marșarier",
    "Cameră 360°",
    "Senzori parcare față/spate",
    "Asistență la parcare",
    "Asistență ieșire din parcare",
    "Pilot automat",
    "Limitator de viteză",
    "Controlul distanței",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Asistență ambuteiaj",
    "Asistență viraj",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Asistență intersecție",
    "Asistență fază lungă",
    "Faruri Full LED Adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Faruri ceață LED",
    "Lumini de zi Full LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Lumini ambientale",
    "Camera asistență fază lungă/scurtă",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Frânare automată de urgență",
    "Sistem frânare automată pietoni",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Recomandare pauză șofer",
    "Active Lane Control Assistant",
    "Control tracțiune",
    "Frână de parcare electrică",
    "Servodirecție",
    "Start/Stop",
    "9 airbaguri",
    "ISOFIX",
    "Asistență telefonică de urgență",
    "Apelare automată 112"
  ],

 images: [
  "cars/bmwx12022/1.webp",
  "cars/bmwx12022/2.webp",
  "cars/bmwx12022/3.webp",
  "cars/bmwx12022/4.webp",
  "cars/bmwx12022/5.webp",
  "cars/bmwx12022/6.webp",
  "cars/bmwx12022/7.webp",
  "cars/bmwx12022/8.webp",
  "cars/bmwx12022/9.webp",
  "cars/bmwx12022/10.webp",
  "cars/bmwx12022/11.webp",
  "cars/bmwx12022/12.webp",
  "cars/bmwx12022/13.webp",
  "cars/bmwx12022/14.webp",
  "cars/bmwx12022/15.webp",
  "cars/bmwx12022/16.webp",
  "cars/bmwx12022/17.webp",
  "cars/bmwx12022/18.webp",
  "cars/bmwx12022/19.webp",
  "cars/bmwx12022/20.webp",
  "cars/bmwx12022/21.webp",
  "cars/bmwx12022/22.webp",
  "cars/bmwx12022/23.webp",
  "cars/bmwx12022/24.webp",
  "cars/bmwx12022/25.webp",
  "cars/bmwx12022/26.webp",
  "cars/bmwx12022/27.webp",
  "cars/bmwx12022/28.webp",
  "cars/bmwx12022/29.webp",
  "cars/bmwx12022/30.webp",
  "cars/bmwx12022/31.webp",
  "cars/bmwx12022/32.webp",
  "cars/bmwx12022/33.webp"
],

  videoId: "",

  description: "BMW X1 xDrive25e M Sport din 2021, cu 117.700 km, sistem Plug-In Hybrid de 220 CP și transmisie automată cu tracțiune integrală xDrive. Echiparea M Sport include plafon panoramic, scaune electrice și încălzite, memorie pentru șofer, navigație Premium, Keyless Go, cameră 360°, asistență la parcare și faruri Full LED Adaptive. Mașina are un singur proprietar și istoric complet de service exclusiv în rețeaua autorizată BMW."
},

{
  id: 15,
   category: "Volvo",
  name: "Volvo XC 40 D4 AWD Geartronic Inscription",
  price: "17.990 €",
  priceValue: 17990,

  year: 2019,
  firstRegistration: "10/05/2019",
  km: "214.500 km",

  fuel: "Diesel",
  engine: "2.0 D4",
  power: "190 CP",
  gearbox: "Automată 7+1",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Albastru metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Volvo",

  vin: "YV1XZA6VCK2156006",

  badge: "Inscription",

  features: [
    "Nivel echipare Inscription",
    "Bord virtual",
    "Tapiserie mixtă piele-textil",
    "Scaune sport față",
    "Scaune față încălzite",
    "Scaun șofer reglabil electric",
    "Scaun șofer cu memorie",
    "Scaun pasager reglabil electric",
    "Suport lombar electric scaun pasager",
    "Climatronic 3 zone",
    "Climatizare spate",
    "Volan piele",
    "Volan multifuncțional",
    "Volan încălzit",
    "Comenzi volan",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Easy Access portbagaj",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Senzori ploaie",
    "Senzori lumină",
    "Jante aliaj 18",
    "Anvelope all season",
    "Senzori presiune roți",
    "Sistem navigație Premium Full Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Sistem hands-free",
    "Sistem audio premium",
    "Radio",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "USB",
    "AUX",
    "SD Card",
    "Wireless Charging",
    "HDD intern 20 GB",
    "Cameră marșarier",
    "Cameră 360° Bird View",
    "Senzori parcare față/spate",
    "Asistență la parcare",
    "Pilot automat adaptiv",
    "Limitator de viteză",
    "Controlul distanței",
    "Monitorizare unghi mort",
    "Cross Traffic Alert",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Asistență la frânare",
    "Asistență viraj",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Asistență intersecție",
    "Asistență ambuteiaj",
    "Conducere autonomă",
    "Asistență fază lungă",
    "Faruri Full LED Adaptive",
    "Faruri autoadaptive",
    "Faruri cu temporizator",
    "Lumini de zi Full LED",
    "Lumini de zi LED",
    "Proiectoare ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Lumini ambientale LED",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Cârlig remorcare",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "Controlul tracțiunii",
    "EDS",
    "Frână de parcare electrică",
    "Servodirecție",
    "Start/Stop"
  ],

  images: [
  "cars/vvxc402019/1.webp",
  "cars/vvxc402019/2.webp",
  "cars/vvxc402019/3.webp",
  "cars/vvxc402019/4.webp",
  "cars/vvxc402019/5.webp",
  "cars/vvxc402019/6.webp",
  "cars/vvxc402019/7.webp",
  "cars/vvxc402019/8.webp",
  "cars/vvxc402019/9.webp",
  "cars/vvxc402019/10.webp",
  "cars/vvxc402019/11.webp",
  "cars/vvxc402019/12.webp",
  "cars/vvxc402019/13.webp",
  "cars/vvxc402019/14.webp",
  "cars/vvxc402019/15.webp",
  "cars/vvxc402019/16.webp",
  "cars/vvxc402019/17.webp",
  "cars/vvxc402019/18.webp",
  "cars/vvxc402019/19.webp",
  "cars/vvxc402019/20.webp",
  "cars/vvxc402019/21.webp",
  "cars/vvxc402019/22.webp",
  "cars/vvxc402019/23.webp",
  "cars/vvxc402019/24.webp",
  "cars/vvxc402019/25.webp",
  "cars/vvxc402019/26.webp",
  "cars/vvxc402019/27.webp",
  "cars/vvxc402019/28.webp",
  "cars/vvxc402019/29.webp",
  "cars/vvxc402019/30.webp"
],

  videoId: "X_marhf84II",

  description: "Volvo XC40 Inscription D4 AWD din 2019, cu 214.500 km, motor 2.0 diesel de 190 CP și transmisie automată cu tracțiune integrală. Echiparea include bord virtual, scaune încălzite și reglabile electric, memorie pentru șofer, navigație Premium, Keyless Go, încărcare wireless, cameră 360°, pilot automat adaptiv și faruri Full LED Adaptive. Mașina are un singur proprietar și service complet în rețeaua Volvo."
},

{
  id: 16,
   category: "Renault",
  name: "Renault Kadjar Energy dCi 130 Bose Edition",
  price: "9.490 €",
  priceValue: 9490,

  year: 2017,
  firstRegistration: "15/11/2017",
  km: "221.500 km",

  fuel: "Diesel",
  engine: "1.6 dCi",
  power: "130 CP",
  gearbox: "Manuală 6+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Negru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Carte service, revizie completă efectuată, distribuție înlocuită preventiv",

  vin: "VF1RFE00858673869",

  badge: "Bose",

  features: [
    "Bose Edition",
    "Tapiserie mixtă piele-textil",
    "Scaune sport față",
    "Climatronic 2 zone",
    "Volan piele",
    "Volan sport",
    "Volan multifuncțional",
    "Comenzi volan",
    "Schimbător de viteze din piele",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Senzori ploaie",
    "Senzori lumină",
    "Jante aliaj 19",
    "Anvelope vară",
    "Senzori presiune roți",
    "Navigație Premium Full Europa",
    "Navigație cu limba română",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Radio",
    "Sistem audio Bose",
    "Monitor touchscreen",
    "Control vocal",
    "USB",
    "AUX",
    "SD Card",
    "HDD intern 20 GB",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Asistență la parcare",
    "Park Assist",
    "Pilot automat adaptiv predictiv",
    "Limitator de viteză",
    "Controlul distanței",
    "Monitorizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Active Lane Assist",
    "Asistență la frânare",
    "Asistență viraj",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Controlul tracțiunii",
    "Recunoaștere semne trafic",
    "Asistență fază lungă",
    "Faruri Full LED",
    "Faruri direcționale",
    "Faruri cu temporizator",
    "Lumini de zi LED",
    "Proiectoare ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale",
    "Sistem Start/Stop",
    "Frână de parcare electrică",
    "Servodirecție",
    "Asistență ambuteiaj",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "ISOFIX",
    "7 airbag-uri"
  ],

  images: [
  "cars/kadjar2017/1.webp",
  "cars/kadjar2017/2.webp",
  "cars/kadjar2017/3.webp",
  "cars/kadjar2017/4.webp",
  "cars/kadjar2017/5.webp",
  "cars/kadjar2017/6.webp",
  "cars/kadjar2017/7.webp",
  "cars/kadjar2017/8.webp",
  "cars/kadjar2017/9.webp",
  "cars/kadjar2017/10.webp",
  "cars/kadjar2017/11.webp",
  "cars/kadjar2017/12.webp",
  "cars/kadjar2017/13.webp",
  "cars/kadjar2017/14.webp",
  "cars/kadjar2017/15.webp",
  "cars/kadjar2017/16.webp",
  "cars/kadjar2017/17.webp",
  "cars/kadjar2017/18.webp",
  "cars/kadjar2017/19.webp",
  "cars/kadjar2017/20.webp",
  "cars/kadjar2017/21.webp",
  "cars/kadjar2017/22.webp",
  "cars/kadjar2017/23.webp",
  "cars/kadjar2017/24.webp",
  "cars/kadjar2017/25.webp",
  "cars/kadjar2017/26.webp",
  "cars/kadjar2017/27.webp",
  "cars/kadjar2017/28.webp",
  "cars/kadjar2017/29.webp",
  "cars/kadjar2017/30.webp",
  "cars/kadjar2017/31.webp"
],

  videoId: "0vZDFA-Tg7I",

  description: "Renault Kadjar Bose Edition din 2017, model 2018, cu 221.500 km, motor 1.6 dCi de 130 CP și transmisie manuală cu 6 trepte. Echiparea include navigație Premium, sistem audio Bose, Keyless Go, climatronic pe două zone, Park Assist, cameră de marșarier, Lane Assist, monitorizare unghi mort și faruri Full LED. Mașina are un singur proprietar, carte service și revizie completă efectuată."
},

{
  id: 17,
   category: "DS Automobiles",
  name: "DS Automobiles DS 7 Crossback 1.6 PHeV FWD 225 EAT8 OPERA",
  price: "22.990 €",
  priceValue: 22990,

  year: 2021,
  firstRegistration: "29/10/2021",
  km: "79.800 km",

  fuel: "Hibrid Plug-In",
  engine: "1.6 benzină + electric",
  power: "225 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "14.2 kWh",
  electricRange: "54 km",

  euro: "Euro 6",
  color: "Alb",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua DS",

  vin: "VR1J4DGZUMY513446",

  badge: "OPERA",

  features: [
    "Nivel echipare OPERA",
    "Bord virtual",
    "Bord îmbrăcat în piele",
    "Scaune piele Nappa",
    "Scaune sport față",
    "Scaune față încălzite",
    "Scaune față ventilate",
    "Scaune față cu masaj",
    "Scaun șofer reglabil electric",
    "Scaun șofer cu memorie",
    "Scaun pasager reglabil electric",
    "Suport lombar electric șofer",
    "Suport lombar electric pasager",
    "Climatronic",
    "Climatizare automată",
    "Volan piele",
    "Volan sport",
    "Volan multifuncțional",
    "Comenzi volan",
    "Padele volan",
    "Schimbător de viteze din piele",
    "Keyless Entry",
    "Keyless Go",
    "Easy Access portbagaj",
    "Încălzire auxiliară",
    "Încălzire parbriz",
    "Parbriz antireflexie solară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Senzor ploaie",
    "Senzor lumină",
    "Jante aliaj 19",
    "Cauciucuri all season",
    "Senzori presiune roți",
    "Suspensie controlată electronic",
    "Suspensie reglabilă",
    "Navigație Premium Full Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Sistem hands-free",
    "Radio",
    "Sistem audio",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "USB",
    "AUX",
    "SD Card",
    "Încărcare wireless",
    "HDD intern 20 GB",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Pilot automat adaptiv",
    "Limitator de viteză",
    "Controlul distanței",
    "Monitorizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Asistență intersecție",
    "Asistență fază lungă",
    "Faruri Full LED Adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Faruri direcționale",
    "Faruri cu temporizator",
    "Lumini de zi Full LED",
    "Lumini de zi LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale LED",
    "Sistem Start/Stop",
    "Frână de parcare electrică",
    "Servodirecție",
    "Asistență ambuteiaj",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX"
  ],

 images: [
  "cars/ds72021/1.webp",
  "cars/ds72021/2.webp",
  "cars/ds72021/3.webp",
  "cars/ds72021/4.webp",
  "cars/ds72021/5.webp",
  "cars/ds72021/6.webp",
  "cars/ds72021/7.webp",
  "cars/ds72021/8.webp",
  "cars/ds72021/9.webp",
  "cars/ds72021/10.webp",
  "cars/ds72021/11.webp",
  "cars/ds72021/12.webp",
  "cars/ds72021/13.webp",
  "cars/ds72021/14.webp",
  "cars/ds72021/15.webp",
  "cars/ds72021/16.webp",
  "cars/ds72021/17.webp",
  "cars/ds72021/18.webp",
  "cars/ds72021/19.webp",
  "cars/ds72021/20.webp",
  "cars/ds72021/21.webp",
  "cars/ds72021/22.webp",
  "cars/ds72021/23.webp",
  "cars/ds72021/24.webp",
  "cars/ds72021/25.webp",
  "cars/ds72021/26.webp",
  "cars/ds72021/27.webp",
  "cars/ds72021/28.webp",
  "cars/ds72021/29.webp",
  "cars/ds72021/30.webp",
  "cars/ds72021/31.webp",
  "cars/ds72021/32.webp",
  "cars/ds72021/33.webp",
  "cars/ds72021/34.webp",
  "cars/ds72021/35.webp",
  "cars/ds72021/36.webp",
  "cars/ds72021/37.webp",
  "cars/ds72021/38.webp",
  "cars/ds72021/39.webp"
],

  videoId: "JJGr5g-oziQ",

  description: "DS 7 Crossback OPERA din 2021, model 2022, cu 79.800 km, sistem Plug-in Hybrid de 225 CP și transmisie automată EAT8 cu tracțiune față. Bateria de 14.2 kWh oferă o autonomie electrică declarată de până la 54 km. Echiparea OPERA include scaune Nappa încălzite, ventilate și cu masaj, memorie pentru șofer, suspensie adaptivă, navigație Premium, Keyless Go, încărcare wireless, cameră de marșarier și numeroase sisteme de asistență. Mașina are un singur proprietar și service complet în rețeaua DS."
},

{
  id: 18,
   category: "BMW",
  name: "BMW Seria 3 330e Aut. Luxury Line",
  price: "25.990 €",
  priceValue: 25990,

  year: 2021,
  firstRegistration: "25/06/2021",
  km: "102.000 km",

  fuel: "Hibrid Plug-In",
  engine: "2.0 benzină + electric",
  power: "292 CP",
  gearbox: "Automată 8+1",
  drive: "Spate",
  body: "Sedan",
  doors: 4,
  seats: 5,

  battery: "11.15 kWh",
  electricRange: "52 km",

  euro: "Euro 6",
  color: "Alb perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua BMW",

  vin: "WBA5P51090FM09170",

  badge: "Luxury Line",

  features: [
    "Pachet Individual",
    "Climatronic 3 zone",
    "Climatizare spate",
    "Tapiserie mixtă piele-textil",
    "Interior piele",
    "Scaune sport față",
    "Scaune Comfort",
    "Scaune față încălzite",
    "Suport lombar electric șofer",
    "Suport lombar electric pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan multifuncțional",
    "Comenzi volan",
    "Cheie digitală",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Pachet iarnă",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Senzori ploaie",
    "Senzori lumină",
    "Jante aliaj 17",
    "Anvelope iarnă",
    "Senzori presiune roți",
    "Suspensie confort",
    "Suspensie controlată electronic",
    "Sistem navigație Premium Full Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Sistem hands-free",
    "Radio",
    "Sistem audio",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "USB",
    "AUX",
    "Încărcare wireless",
    "HDD intern 20 GB",
    "Cameră marșarier",
    "Senzori parcare față/spate",
    "Asistență la parcare",
    "Parcare automată",
    "Asistență la ieșirea din parcare",
    "Pilot automat adaptiv",
    "Limitator de viteză",
    "Controlul distanței",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Recunoaștere indicatoare de viteză",
    "Recunoaștere semne trafic",
    "Asistență intersecție",
    "Asistență ambuteiaj",
    "Conducere autonomă",
    "Asistență fază lungă",
    "Faruri LED",
    "Faruri cu temporizator",
    "Lumini de zi Full LED",
    "Lumini de zi LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale LED",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Sistem Start/Stop",
    "Frână de parcare electrică",
    "Servodirecție",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Airbag cortină spate",
    "ISOFIX",
    "Filtru de particule"
  ],

images: [
  "cars/bmws32021/1.webp",
  "cars/bmws32021/2.webp",
  "cars/bmws32021/3.webp",
  "cars/bmws32021/4.webp",
  "cars/bmws32021/5.webp",
  "cars/bmws32021/6.webp",
  "cars/bmws32021/7.webp",
  "cars/bmws32021/8.webp",
  "cars/bmws32021/9.webp",
  "cars/bmws32021/10.webp",
  "cars/bmws32021/11.webp",
  "cars/bmws32021/12.webp",
  "cars/bmws32021/13.webp",
  "cars/bmws32021/14.webp",
  "cars/bmws32021/15.webp",
  "cars/bmws32021/16.webp",
  "cars/bmws32021/17.webp",
  "cars/bmws32021/18.webp",
  "cars/bmws32021/19.webp",
  "cars/bmws32021/20.webp",
  "cars/bmws32021/21.webp",
  "cars/bmws32021/22.webp",
  "cars/bmws32021/23.webp",
  "cars/bmws32021/24.webp",
  "cars/bmws32021/25.webp",
  "cars/bmws32021/26.webp",
  "cars/bmws32021/27.webp",
  "cars/bmws32021/28.webp",
  "cars/bmws32021/29.webp",
  "cars/bmws32021/30.webp",
  "cars/bmws32021/31.webp",
  "cars/bmws32021/32.webp",
  "cars/bmws32021/33.webp",
  "cars/bmws32021/34.webp",
  "cars/bmws32021/35.webp"
],

  videoId: "7hgdc3g_wQw",

  description: "BMW Seria 3 330e Individual Line din 2021, cu 102.000 km, sistem Plug-In Hybrid de 292 CP și motor 2.0 benzină + electric. Transmisia automată cu 8 trepte și tracțiunea spate oferă o configurație sportivă, iar bateria de 11.15 kWh permite o autonomie electrică declarată de până la 52 km. Echiparea include interior din piele, scaune sport încălzite, climatronic 3 zone, navigație Premium, Apple CarPlay, Android Auto, încărcare wireless, Keyless Go, cameră de marșarier, parcare automată și sisteme avansate de asistență. Mașina are un singur proprietar și service complet în rețeaua BMW."
},
{
  id: 19,
   category: "Toyota",
  name: "Toyota Yaris Cross 1.5 VVT-i AWD-i Adventure",
  price: "22.990 €",
  priceValue: 22990,

  year: 2023,
  firstRegistration: "07/09/2022",
  km: "91.000 km",

  fuel: "Hibrid",
  engine: "1.5 benzină + electric",
  power: "116 CP",
  gearbox: "Automată",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Alb",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Toyota",

  vin: "JTDKCACB40A032656",

  badge: "Adventure",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 17",
    "Navigație GPS",
    "Proiectoare ceață LED",
    "Radio",
    "Volan reglabil",
    "ABS",
    "Airbag",
    "Alarmă",
    "Antifurt",
    "Control tracțiune",
    "EDS",
    "ESP",
    "Imobilizator",
    "Climatronic 2 zone",
    "Tapițerie stofă",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun șofer",
    "Cotieră față",
    "Volan piele",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Schimbător de viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Senzor ploaie",
    "Senzori lumină",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Încălzire auxiliară",
    "Pilot automat adaptiv",
    "Faruri Full LED",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Lumini de zi LED",
    "Stopuri LED",
    "Proiectoare ceață LED",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Sistem de parcare automat",
    "Cameră video spate",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Avertizare unghi mort",
    "Controlul distanței",
    "Limitator de viteză",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Conducere autonomă",
    "Asistență fază lungă",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "Încărcare wireless",
    "Sistem navigație Premium Europa",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",
    "AUX / SD Card / USB",
    "Keyless Go Pack",
    "Lumini ambientale",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Oglindă retrovizoare antiorbire",
    "7 airbag-uri",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Monitorizare stare șofer",
    "Recomandare activă pauză șofer",
    "Monitorizare activă șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "ISOFIX",
    "Jante aliaj 17",
    "Anvelope vară",
    "4x4 AWD-i",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "2 chei"
  ],

  images: [
  "cars/yaris2023/1.webp",
  "cars/yaris2023/2.webp",
  "cars/yaris2023/3.webp",
  "cars/yaris2023/4.webp",
  "cars/yaris2023/5.webp",
  "cars/yaris2023/6.webp",
  "cars/yaris2023/7.webp",
  "cars/yaris2023/8.webp",
  "cars/yaris2023/9.webp",
  "cars/yaris2023/10.webp",
  "cars/yaris2023/11.webp",
  "cars/yaris2023/12.webp",
  "cars/yaris2023/13.webp",
  "cars/yaris2023/14.webp",
  "cars/yaris2023/15.webp",
  "cars/yaris2023/16.webp"
],

  videoId: "XA8l-ErVusA",

  description: "Toyota Yaris Cross 1.5 VVT-i AWD-i Adventure din 2023, cu 91.000 km și sistem hibrid de 116 CP. Echipată cu tracțiune integrală 4x4, transmisie automată, climatronic 2 zone, scaune față încălzite, navigație Premium, Apple CarPlay, Android Auto, Keyless Go, cameră de marșarier, senzori de parcare și numeroase sisteme de asistență. Mașina are un singur proprietar și service complet în rețeaua Toyota."
},
{
  id: 20,
   category: "Volvo",
  name: "Volvo XC 40 T5 Recharge DKG Inscription",
  price: "24.990 €",
  priceValue: 24990,

  year: 2020,
  firstRegistration: "22/05/2020",
  km: "95.000 km",

  fuel: "Hibrid Plug-In",
  engine: "1.5 benzină + electric",
  power: "262 CP",
  gearbox: "Automată 7+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "10.7 kWh",
  electricRange: "41 km",

  euro: "Euro 6b",
  color: "Gri perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Volvo",

  vin: "YV1XZBBVFM2418525",

  badge: "Inscription",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 19",
    "Navigație GPS",
    "Radio/CD",
    "Proiectoare ceață LED",
    "Volan reglabil",
    "ABS",
    "Airbag",
    "Alarmă",
    "Antifurt",
    "Control tracțiune",
    "EDS",
    "ESP",
    "Imobilizator",
    "Climatronic 2 zone",
    "Climatronic 3 zone",
    "Plafon panoramic",
    "Tapițerie piele Nappa",
    "Scaun șofer ajustabil electric",
    "Scaun pasager ajustabil electric",
    "Scaun șofer cu memorie",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Scaune sport față",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan încălzit",
    "Cheie digitală",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Senzor ploaie",
    "Senzori lumină",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglinzi exterioare digitale",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Carlig remorcare",
    "Easy Access portbagaj",
    "Pilot automat",
    "Pilot automat adaptiv",
    "Limitator de viteză",
    "Faruri Full LED",
    "Faruri LED adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Stopuri LED",
    "Proiectoare ceață LED",
    "Spălare faruri",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Sistem de parcare automat",
    "Cameră video 360°",
    "Cameră video spate",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Avertizare unghi mort",
    "Cross Traffic Alert",
    "Controlul distanței",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Asistență la coborare",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Cameră asistență fază lungă/scurtă",
    "Faruri cu temporizator",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Iluminare interioară LED",
    "Lumini ambientale LED",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Sistem audio Harman Kardon",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Încărcare wireless",
    "Sistem navigație Premium Europa",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",
    "Radio",
    "Sistem audio",
    "9 airbag-uri",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Airbag cortină spate",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Monitorizare stare șofer",
    "Recomandare activă pauză șofer",
    "Monitorizare activă șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "ISOFIX",
    "Jante aliaj 19",
    "Anvelope vară",
    "Suspensie controlată electronic",
    "Suspensie sport",
    "Suspensie reglabilă",
    "Funcție Cornering",
    "Pachet crom exterior/interior",
    "2 chei"
  ],

  images: [
  "cars/vvxc402020/1.webp",
  "cars/vvxc402020/2.webp",
  "cars/vvxc402020/3.webp",
  "cars/vvxc402020/4.webp",
  "cars/vvxc402020/5.webp",
  "cars/vvxc402020/6.webp",
  "cars/vvxc402020/7.webp",
  "cars/vvxc402020/8.webp",
  "cars/vvxc402020/9.webp",
  "cars/vvxc402020/10.webp",
  "cars/vvxc402020/11.webp",
  "cars/vvxc402020/12.webp",
  "cars/vvxc402020/13.webp",
  "cars/vvxc402020/14.webp",
  "cars/vvxc402020/15.webp",
  "cars/vvxc402020/16.webp",
  "cars/vvxc402020/17.webp",
  "cars/vvxc402020/18.webp",
  "cars/vvxc402020/19.webp",
  "cars/vvxc402020/20.webp",
  "cars/vvxc402020/21.webp",
  "cars/vvxc402020/22.webp",
  "cars/vvxc402020/23.webp",
  "cars/vvxc402020/24.webp",
  "cars/vvxc402020/25.webp",
  "cars/vvxc402020/26.webp",
  "cars/vvxc402020/27.webp",
  "cars/vvxc402020/28.webp",
  "cars/vvxc402020/29.webp",
  "cars/vvxc402020/30.webp",
  "cars/vvxc402020/31.webp",
  "cars/vvxc402020/32.webp",
  "cars/vvxc402020/33.webp",
  "cars/vvxc402020/34.webp",
  "cars/vvxc402020/35.webp",
  "cars/vvxc402020/36.webp",
  "cars/vvxc402020/37.webp"
],

  videoId: "sgpE1zkkP9k",

  description: "Volvo XC40 T5 Recharge Inscription din 2020, cu 95.000 km și sistem Plug-In Hybrid de 262 CP. Motorul de 1.5 litri benzină + electric este cuplat la o transmisie automată 7+1 și tracțiune față, iar bateria de 10.7 kWh oferă o autonomie electrică declarată de până la 41 km. Echiparea include piele Nappa, plafon panoramic, scaune față electrice și încălzite, Harman Kardon, navigație Premium, Apple CarPlay, Android Auto, încărcare wireless, Keyless Go, cameră 360°, pilot automat adaptiv și numeroase sisteme de asistență. Mașina are un singur proprietar și service complet în rețeaua Volvo."
},

{
  id: 21,
   category: "Citroën",
  name: "Citroën C4 PureTech 130 Stop&Start EAT8 SHINE",
  price: "14.990 €",
  priceValue: 14990,

  year: 2022,
  firstRegistration: "23/02/2022",
  km: "117.900 km",

  fuel: "Benzină",
  engine: "1.2 PureTech",
  power: "130 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "Compactă",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Alb metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Citroën; distribuție schimbată la 76.000 km; revizie nouă la livrare",

  vin: "VR7BAHNSBNE008554",

  badge: "SHINE",

  features: [
    "Carte service",
    "Computer de bord",
    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Radio",
    "Sistem audio profesional",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "Head Up Display",
    "HDD intern 20 GB",
    "Climatronic",
    "Tapiterie mixtă piele-textil",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan încălzit",
    "Schimbător de viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Senzor ploaie",
    "Senzori lumină",
    "Parbriz încălzit",
    "Parbriz antireflexie solară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Torpedou refrigerat",
    "Trapa panoramică",
    "Trapa electrică",
    "Suport tabletă",
    "Parasolare iluminate",
    "Lumini ambientale LED",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Pilot automat adaptiv",
    "DISTRONIC activ",
    "Limitator de viteză",
    "Faruri Full LED",
    "Faruri LED adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Stopuri LED",
    "Proiectoare ceață LED",
    "Cameră asistență fază lungă/scurtă",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Park Assist",
    "Sistem de parcare automat",
    "Asistență la ieșirea din parcare",
    "Cameră video 360°",
    "Cameră video spate",
    "Cameră trafic",
    "Oglinzi exterioare cu reglare electrică",
    "Oglinzi exterioare încălzite",
    "Oglinzi exterioare rabatabile electric",
    "Avertizare unghi mort",
    "Cross Traffic Alert",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Asistență menținere bandă",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență frânare de urgență",
    "Sistem avertizare coliziune",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "Controlul tracțiunii",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență la coborâre",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri cu temporizator",
    "Funcție Cornering",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",
    "Jante aliaj 18",
    "Anvelope All Season",
    "Suspensie hidropneumatică",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",
    "Pachet crom exterior/interior",
    "Geamuri fumurii spate",
    "Filtru de particule",
    "Hill Holder",
    "2 chei"
  ],

images: [
  "cars/citroenc4/1.webp",
  "cars/citroenc4/2.webp",
  "cars/citroenc4/3.webp",
  "cars/citroenc4/4.webp",
  "cars/citroenc4/5.webp",
  "cars/citroenc4/6.webp",
  "cars/citroenc4/7.webp",
  "cars/citroenc4/8.webp",
  "cars/citroenc4/9.webp",
  "cars/citroenc4/10.webp",
  "cars/citroenc4/11.webp",
  "cars/citroenc4/12.webp",
  "cars/citroenc4/13.webp",
  "cars/citroenc4/14.webp",
  "cars/citroenc4/15.webp",
  "cars/citroenc4/16.webp",
  "cars/citroenc4/17.webp",
  "cars/citroenc4/18.webp",
  "cars/citroenc4/19.webp",
  "cars/citroenc4/20.webp",
  "cars/citroenc4/21.webp",
  "cars/citroenc4/22.webp",
  "cars/citroenc4/23.webp",
  "cars/citroenc4/24.webp",
  "cars/citroenc4/25.webp",
  "cars/citroenc4/26.webp",
  "cars/citroenc4/27.webp",
  "cars/citroenc4/28.webp",
  "cars/citroenc4/29.webp",
  "cars/citroenc4/30.webp",
  "cars/citroenc4/31.webp",
  "cars/citroenc4/32.webp",
  "cars/citroenc4/33.webp",
  "cars/citroenc4/34.webp",
  "cars/citroenc4/35.webp"
],

  videoId: "",

  description: "Citroën C4 PureTech 130 EAT8 Shine din 2022, cu 117.900 km și motor 1.2 PureTech de 130 CP. Echipată cu transmisie automată EAT8 și tracțiune față, mașina dispune de cameră 360°, Park Assist, Head Up Display, navigație Premium, Apple CarPlay, Android Auto, Keyless Go, climatronic, scaune încălzite, volan încălzit și plafon panoramic. Are un singur proprietar, service complet în rețeaua Citroën și distribuția schimbată la 76.000 km."
},
{
  id: 22,
 category: "Citroën",
  name: "Citroën C5 Aircross 1.5 BlueHDi S&S EAT8 Shine",
  price: "13.990 €",
  priceValue: 13990,

  year: 2020,
  firstRegistration: "26/06/2019",
  km: "149.500 km",

  fuel: "Diesel",
  engine: "1.5 BlueHDi",
  power: "130 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6d",
  color: "Alb perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Citroën",

  vin: "VR7ACYHZRKL065082",

  badge: "Shine",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante aliaj 18",
    "Anvelope All Season",
    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Radio",
    "Sistem audio profesional",
    "Apple CarPlay",
    "MirrorLink",
    "Android Auto",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Încărcare wireless",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "Climatronic",
    "Tapițerie piele",
    "Scaun șofer ajustabil electric",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Volan piele",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan cu schimbător de viteze",
    "Schimbător viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Senzor ploaie",
    "Senzori lumină",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Cârlig remorcare",
    "Easy Access portbagaj",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Pilot automat adaptiv",
    "DISTRONIC activ",
    "Limitator de viteză",
    "Faruri Full LED",
    "Faruri LED adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Lumini de zi LED",
    "Stopuri LED",
    "Proiectoare ceață LED",
    "Cameră asistență fază lungă/scurtă",
    "Faruri cu temporizator",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Park Assist",
    "Sistem de parcare automat",
    "Asistență la ieșirea din parcare",
    "Cameră video 360°",
    "Cameră video spate",
    "Avertizare unghi mort",
    "Cross Traffic Alert",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Limitator viteză",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri direcționale",
    "Lumini de zi",
    "Faruri ceață",
    "Faruri ceață LED",
    "Frână de parcare electrică",
    "Servodirecție",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Suspensie controlată electronic",
    "Suspensie reglabilă",
    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "ISOFIX",
    "Hill Holder",
    "Pachet crom exterior/interior",
    "7 airbag-uri",
    "2 chei"
  ],

images: [
  "cars/citroenc52020/1.webp",
  "cars/citroenc52020/2.webp",
  "cars/citroenc52020/3.webp",
  "cars/citroenc52020/4.webp",
  "cars/citroenc52020/5.webp",
  "cars/citroenc52020/6.webp",
  "cars/citroenc52020/7.webp",
  "cars/citroenc52020/8.webp",
  "cars/citroenc52020/9.webp",
  "cars/citroenc52020/10.webp",
  "cars/citroenc52020/11.webp",
  "cars/citroenc52020/12.webp",
  "cars/citroenc52020/13.webp",
  "cars/citroenc52020/14.webp",
  "cars/citroenc52020/15.webp",
  "cars/citroenc52020/16.webp",
  "cars/citroenc52020/17.webp",
  "cars/citroenc52020/18.webp",
  "cars/citroenc52020/19.webp",
  "cars/citroenc52020/20.webp",
  "cars/citroenc52020/21.webp",
  "cars/citroenc52020/22.webp",
  "cars/citroenc52020/23.webp",
  "cars/citroenc52020/24.webp",
  "cars/citroenc52020/25.webp",
  "cars/citroenc52020/26.webp",
  "cars/citroenc52020/27.webp",
  "cars/citroenc52020/28.webp",
  "cars/citroenc52020/29.webp",
  "cars/citroenc52020/30.webp",
  "cars/citroenc52020/31.webp",
  "cars/citroenc52020/32.webp",
  "cars/citroenc52020/33.webp",
  "cars/citroenc52020/34.webp",
  "cars/citroenc52020/35.webp",
  "cars/citroenc52020/36.webp",
  "cars/citroenc52020/37.webp"
],

  videoId: "zgpUkAvArik",

  description: "Citroën C5 Aircross Shine din 2020, cu 149.500 km și motor 1.5 BlueHDi de 130 CP. Echipat cu transmisie automată EAT8 și tracțiune față, modelul dispune de cameră 360°, Park Assist, pilot automat adaptiv, asistență unghi mort, navigație Premium, Apple CarPlay, Android Auto, încărcare wireless, Keyless Go, scaune față încălzite și climatronic. Mașina are un singur proprietar și service complet în rețeaua Citroën."
},
{
  id: 23,
 category: "Mercedes-Benz",
  name: "Mercedes-Benz A 180 d Sedan 8G-DCT Lim. AMG Line Advanced Plus",
  price: "19.990 €",
  priceValue: 19990,

  year: 2021,
  firstRegistration: "21/04/2021",
  km: "156.000 km",

  fuel: "Diesel",
  engine: "1.95 diesel",
  power: "116 CP",
  gearbox: "Automată 8+1 DCT",
  drive: "Față",
  body: "Sedan",
  doors: 4,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6d",
  color: "Argint metalizat",

  owners: "Unic proprietar",
  serviceHistory: "Carte service",

  vin: "W1K1771101J313415",

  badge: "AMG Line",

  features: [
    "Pachet AMG Line",
    "Assistance Plus Pack",
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",
    "ABS",
    "ESP",
    "Controlul tracțiunii",
    "Jante aliaj 18",
    "Anvelope vară",

    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Limba română pentru navigație",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Radio",
    "Radio/CD",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Sistem audio",
    "Monitor touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",

    "Climatronic",
    "Tapițerie mixtă piele-textil",
    "Scaune sport față",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan AMG Line",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Senzor ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",

    "Pilot automat adaptiv DISTRONIC",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență viraj",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Conducere autonomă",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",

    "Faruri Full LED",
    "Faruri LED adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Asistență fază lungă",
    "Cameră asistență fază lungă/scurtă",
    "Faruri cu temporizator",
    "Lumini de zi",
    "Lumini de zi LED",
    "Faruri ceață",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",

    "Senzori parcare față",
    "Senzori parcare spate",
    "Park Assist",
    "Sistem de parcare automat",
    "Cameră video spate",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "Suspensie confort",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "Pachet crom exterior/interior",
    "Proiectoare ceață",
    "2 chei",
    "Cârlig remorcare"
  ],

  images: [
  "cars/mercb-a1802021/1.webp",
  "cars/mercb-a1802021/2.webp",
  "cars/mercb-a1802021/3.webp",
  "cars/mercb-a1802021/4.webp",
  "cars/mercb-a1802021/5.webp",
  "cars/mercb-a1802021/6.webp",
  "cars/mercb-a1802021/7.webp",
  "cars/mercb-a1802021/8.webp",
  "cars/mercb-a1802021/9.webp",
  "cars/mercb-a1802021/10.webp",
  "cars/mercb-a1802021/11.webp",
  "cars/mercb-a1802021/12.webp",
  "cars/mercb-a1802021/13.webp",
  "cars/mercb-a1802021/14.webp",
  "cars/mercb-a1802021/15.webp",
  "cars/mercb-a1802021/16.webp",
  "cars/mercb-a1802021/17.webp",
  "cars/mercb-a1802021/18.webp",
  "cars/mercb-a1802021/19.webp",
  "cars/mercb-a1802021/20.webp",
  "cars/mercb-a1802021/21.webp",
  "cars/mercb-a1802021/22.webp",
  "cars/mercb-a1802021/23.webp",
  "cars/mercb-a1802021/24.webp",
  "cars/mercb-a1802021/25.webp",
  "cars/mercb-a1802021/26.webp",
  "cars/mercb-a1802021/27.webp",
  "cars/mercb-a1802021/28.webp",
  "cars/mercb-a1802021/29.webp",
  "cars/mercb-a1802021/30.webp",
  "cars/mercb-a1802021/31.webp",
  "cars/mercb-a1802021/32.webp"
],

  videoId: "ULM9fee2kPM",

  description: "Mercedes-Benz A 180 d Sedan AMG Line Advanced Plus din 2021, cu 156.000 km și motor diesel de 116 CP. Echipat cu transmisie automată 8+1 DCT și tracțiune față, modelul dispune de pachet AMG, faruri Full LED adaptive, bord virtual Widescreen, navigație Premium, Apple CarPlay, Android Auto, Keyless Go, climatronic, scaune sport, pilot automat adaptiv DISTRONIC, Blind Spot, Lane Assist, Park Assist și cameră de marșarier. Mașina are un singur proprietar, carte service și 2 chei."
},
 {
  id: 24,
 category: "Renault",
  name: "Renault Kadjar TCe GPF Intens",
  price: "15.490 €",
  priceValue: 15490,

  year: 2021,
  firstRegistration: "27/10/2021",
  km: "113.200 km",

  fuel: "Benzină",
  engine: "1.3 TCe GPF",
  power: "140 CP",
  gearbox: "Manuală 6+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Albastru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Renault",

  vin: "VF1RFE00868144150",

  badge: "Intens",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",
    "ABS",
    "ESP",
    "Controlul tracțiunii",
    "Jante aliaj 18",
    "Anvelope vară",

    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Sistem audio",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",

    "Climatronic",
    "Tapițerie mixtă piele-textil",
    "Scaune sport față",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan cu schimbător de viteze",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Senzor ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Cârlig remorcare",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",

    "Pilot automat",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Faruri direcționale",
    "Faruri cu temporizator",
    "Lumini de zi",
    "Lumini de zi LED",
    "Faruri ceață",
    "Faruri ceață LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",

    "Faruri Full LED",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Cameră video spate",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",

    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "Pachet crom exterior/interior",
    "Proiectoare ceață",
    "7 airbag-uri",
    "2 chei"
  ],

images: [
  "cars/kadjar2021/1.webp",
  "cars/kadjar2021/2.webp",
  "cars/kadjar2021/3.webp",
  "cars/kadjar2021/4.webp",
  "cars/kadjar2021/5.webp",
  "cars/kadjar2021/6.webp",
  "cars/kadjar2021/7.webp",
  "cars/kadjar2021/8.webp",
  "cars/kadjar2021/9.webp",
  "cars/kadjar2021/10.webp",
  "cars/kadjar2021/11.webp",
  "cars/kadjar2021/12.webp",
  "cars/kadjar2021/13.webp",
  "cars/kadjar2021/14.webp",
  "cars/kadjar2021/15.webp",
  "cars/kadjar2021/16.webp",
  "cars/kadjar2021/17.webp",
  "cars/kadjar2021/18.webp",
  "cars/kadjar2021/19.webp",
  "cars/kadjar2021/20.webp",
  "cars/kadjar2021/21.webp",
  "cars/kadjar2021/22.webp",
  "cars/kadjar2021/23.webp",
  "cars/kadjar2021/24.webp",
  "cars/kadjar2021/25.webp",
  "cars/kadjar2021/26.webp",
  "cars/kadjar2021/27.webp",
  "cars/kadjar2021/28.webp"
],

  videoId: "ZPOZ44375ZM",

  description: "Renault Kadjar Intens din 2021, model 2022, cu 113.200 km și motor 1.3 TCe de 140 CP. Echipat cu transmisie manuală 6+1 și tracțiune față, modelul dispune de faruri Full LED, navigație Premium Europa, Apple CarPlay, MirrorLink, climatronic, Keyless Go, scaune față încălzite, cameră de marșarier, senzori de parcare față/spate, Lane Assist, avertizare unghi mort și pilot automat. Mașina are un singur proprietar, service complet în rețeaua Renault și două chei."
},

{
  id: 25,
 category: "Peugeot",
  name: "Peugeot 408 PureTech 130 EAT8 GT",
  price: "20.990 €",
  priceValue: 20990,

  year: 2024,
  firstRegistration: "19/10/2023",
  km: "57.500 km",

  fuel: "Benzină",
  engine: "1.2 PureTech",
  power: "131 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Negru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Peugeot",

  vin: "VR3FPHNSTPY623535",

  badge: "GT",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",
    "ABS",
    "ESP",
    "Controlul tracțiunii",
    "Jante aliaj 19",
    "Anvelope vară",

    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Sistem audio",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",

    "Climatronic 2 zone",
    "Tapițerie mixtă piele-textil",
    "Scaune sport față",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Încălzire volan",
    "Volan cu schimbător de viteze",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Senzor ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou / cotieră refrigerată",
    "Easy Access portbagaj",
    "Portbagaj cu acționare electrică",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",

    "Pilot automat adaptiv DISTRONIC",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Asistență ambuteiaj",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri autoadaptive",
    "Faruri Full LED Matrix",
    "Faruri adaptive",
    "Faruri direcționale",
    "Faruri cu temporizator",
    "Lumini de zi LED",
    "Stopuri LED",
    "Proiectoare ceață",
    "Follow Me Home",
    "Iluminare interioară LED",

    "Senzori parcare față",
    "Senzori parcare spate",
    "Cameră video spate",
    "Asistență la parcare",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "3 moduri de condus: Eco, Comfort, Sport",
    "Pachet crom exterior/interior",
    "2 chei"
  ],

images: [
  "cars/pg4082024/1.webp",
  "cars/pg4082024/2.webp",
  "cars/pg4082024/3.webp",
  "cars/pg4082024/4.webp",
  "cars/pg4082024/5.webp",
  "cars/pg4082024/6.webp",
  "cars/pg4082024/7.webp",
  "cars/pg4082024/8.webp",
  "cars/pg4082024/9.webp",
  "cars/pg4082024/10.webp",
  "cars/pg4082024/11.webp",
  "cars/pg4082024/12.webp",
  "cars/pg4082024/13.webp",
  "cars/pg4082024/14.webp",
  "cars/pg4082024/15.webp",
  "cars/pg4082024/16.webp",
  "cars/pg4082024/17.webp",
  "cars/pg4082024/18.webp",
  "cars/pg4082024/19.webp",
  "cars/pg4082024/20.webp",
  "cars/pg4082024/21.webp",
  "cars/pg4082024/22.webp",
  "cars/pg4082024/23.webp",
  "cars/pg4082024/24.webp",
  "cars/pg4082024/25.webp",
  "cars/pg4082024/26.webp",
  "cars/pg4082024/27.webp",
  "cars/pg4082024/28.webp",
  "cars/pg4082024/29.webp"
],

  videoId: "oz-IvOiAVE4",

  description: "Peugeot 408 GT din 2024, cu 57.500 km și motor 1.2 PureTech de 131 CP. Echipat cu transmisie automată EAT8 și tracțiune față, modelul dispune de faruri Full LED Matrix adaptive, jante de 19, bord virtual 3D, scaune sport din piele, navigație Premium Europa, Apple CarPlay, MirrorLink, încărcare wireless, Keyless Go, climatronic, cameră de marșarier, pilot automat adaptiv, Blind Spot și Lane Assist. Mașina are un singur proprietar și service complet în rețeaua Peugeot."
},

 {
  id: 26,
 category: "Volkswagen",
  name: "Volkswagen Golf 1.6 TDI BlueMotion Comfortline",
  price: "6.490 €",
  priceValue: 6490,

  year: 2016,
  firstRegistration: "04/06/2016",
  km: "225.000 km",

  fuel: "Diesel",
  engine: "1.6 TDI BlueMotion",
  power: "110 CP",
  gearbox: "Manuală",
  drive: "Față",
  body: "Mașină de oraș",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6b",
  color: "Roșu metalizat",

  owners: "",
  serviceHistory: "Carte service",

  vin: "WVWZZZAUZGP090054",

  badge: "Comfortline",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Jante oțel",
    "Anvelope All Season",
    "2 chei",

    "Radio/CD",
    "Bluetooth",
    "Sistem hands-free",
    "Port USB",
    "Sistem audio",
    "Monitor cu touchscreen",
    "Control vocal",

    "Aer condiționat",
    "Tapițerie stofă",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan sport",
    "Volan reglabil",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",

    "Cruise Control",
    "Limitator de viteză",
    "Senzori parcare spate",
    "Asistență la frânare",
    "Controlul tracțiunii",
    "Asistență în rampă",
    "Sistem recunoaștere semne trafic",
    "Lumini de zi",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",
    "Diferențial blocabil",

    "ABS",
    "ESP",
    "Frânare asistată",
    "Hill Holder",
    "Asistență telefonică de urgență",
    "Apelare automată 112",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "ISOFIX"
  ],

images: [
  "cars/vwgolf2016/1.webp",
  "cars/vwgolf2016/2.webp",
  "cars/vwgolf2016/3.webp",
  "cars/vwgolf2016/4.webp",
  "cars/vwgolf2016/5.webp",
  "cars/vwgolf2016/6.webp",
  "cars/vwgolf2016/7.webp",
  "cars/vwgolf2016/8.webp",
  "cars/vwgolf2016/9.webp",
  "cars/vwgolf2016/10.webp",
  "cars/vwgolf2016/11.webp",
  "cars/vwgolf2016/12.webp",
  "cars/vwgolf2016/13.webp",
  "cars/vwgolf2016/14.webp",
  "cars/vwgolf2016/15.webp",
  "cars/vwgolf2016/16.webp",
  "cars/vwgolf2016/17.webp",
  "cars/vwgolf2016/18.webp",
  "cars/vwgolf2016/19.webp",
  "cars/vwgolf2016/20.webp",
  "cars/vwgolf2016/21.webp"
],

  videoId: "",

  description: "Volkswagen Golf 1.6 TDI BlueMotion Comfortline din 2016, cu 225.000 km și motor diesel de 110 CP. Echipat cu transmisie manuală și tracțiune față, modelul dispune de aer condiționat, scaune față încălzite, senzori de parcare spate, cruise control, recunoașterea semnelor de trafic, Bluetooth, USB și sistem Start/Stop. Mașina are carte service, două chei, anvelope All Season noi și frâne noi."
},

{
  id: 27,
 category: "Renault",
  name: "Renault Kadjar TCe EDC GPF Intens",
  price: "12.999 €",
  priceValue: 12999,

  year: 2019,
  firstRegistration: "11/07/2019",
  km: "124.800 km",

  fuel: "Benzină",
  engine: "1.3 TCe GPF",
  power: "140 CP",
  gearbox: "Automată EDC",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6",
  color: "Roșu perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Renault",

  vin: "VF1RFE00563642903",

  badge: "Intens",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",
    "ABS",
    "ESP",
    "Controlul tracțiunii",
    "Jante aliaj 18",
    "Anvelope noi",

    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "AUX / SD Card / USB",
    "Sistem audio",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",

    "Climatronic",
    "Tapițerie piele Nappa",
    "Tapițerie mixtă piele-textil",
    "Scaune sport față",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Senzor ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",

    "Pilot automat",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Sistem asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență fază lungă",
    "Faruri Full LED",
    "Faruri LED",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Faruri direcționale",
    "Lumini de zi",
    "Lumini de zi LED",
    "Proiectoare ceață",
    "Proiectoare ceață LED",
    "Stopuri LED",
    "Cameră asistență fază lungă/scurtă",
    "Follow Me Home",
    "Iluminare interioară LED",

    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Cameră video spate",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",

    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "Funcția Cornering",
    "Pachet crom exterior/interior",
    "7 airbag-uri",
    "2 chei"
  ],

images: [
  "cars/kadjar2019/1.webp",
  "cars/kadjar2019/2.webp",
  "cars/kadjar2019/3.webp",
  "cars/kadjar2019/4.webp",
  "cars/kadjar2019/5.webp",
  "cars/kadjar2019/6.webp",
  "cars/kadjar2019/7.webp",
  "cars/kadjar2019/8.webp",
  "cars/kadjar2019/9.webp",
  "cars/kadjar2019/10.webp",
  "cars/kadjar2019/11.webp",
  "cars/kadjar2019/12.webp",
  "cars/kadjar2019/13.webp",
  "cars/kadjar2019/14.webp",
  "cars/kadjar2019/15.webp",
  "cars/kadjar2019/16.webp",
  "cars/kadjar2019/17.webp",
  "cars/kadjar2019/18.webp",
  "cars/kadjar2019/19.webp",
  "cars/kadjar2019/20.webp",
  "cars/kadjar2019/21.webp",
  "cars/kadjar2019/22.webp",
  "cars/kadjar2019/23.webp",
  "cars/kadjar2019/24.webp",
  "cars/kadjar2019/25.webp",
  "cars/kadjar2019/26.webp",
  "cars/kadjar2019/27.webp",
  "cars/kadjar2019/28.webp",
  "cars/kadjar2019/29.webp",
  "cars/kadjar2019/30.webp",
  "cars/kadjar2019/31.webp",
  "cars/kadjar2019/32.webp",
  "cars/kadjar2019/33.webp",
  "cars/kadjar2019/34.webp"
],

  videoId: "VTgGtxxjJZg",

  description: "Renault Kadjar Intens din 2019, model 2020, cu 124.800 km și motor 1.3 TCe de 140 CP. Echipat cu transmisie automată EDC și tracțiune față, modelul dispune de scaune din piele Nappa încălzite, faruri Full LED, navigație Premium Europa, Apple CarPlay, MirrorLink, climatronic, Keyless Go, cameră de marșarier, senzori de parcare față/spate, avertizare unghi mort și Lane Assist. Mașina are un singur proprietar, service complet în rețeaua Renault și două chei."
},

{
  id: 28,
 category: "DS Automobiles",
  name: "DS Automobiles DS 7 Crossback 1.5 BlueHDi 130 EAT8 SO CHIC",
  price: "15.990 €",
  priceValue: 15990,

  year: 2020,
  firstRegistration: "14/05/2020",
  km: "147.500 km",

  fuel: "Diesel",
  engine: "1.5 BlueHDi",
  power: "130 CP",
  gearbox: "Automată 8+1",
  drive: "Față",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6d-Temp",
  color: "Albastru perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua DS; service nou la 147.228 km",

  vin: "VR1JCYHZRLY012786",

  badge: "SO CHIC",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",

    "Jante aliaj 19",
    "Anvelope All Season noi",
    "Suspensie confort",

    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Radio/CD",
    "Sistem hands-free",
    "Port USB",
    "AUX",
    "SD Card",
    "Sistem audio",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",

    "Climatronic",
    "Climatizare spate",
    "Tapițerie stofă",
    "Scaune sport față",
    "Suport lombar electric scaun șofer",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan multifuncțional",
    "Volan cu comenzi",
    "Schimbător de viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Încălzire auxiliară",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Privacy Glass",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Senzori ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",

    "Cruise Control",
    "Pilot automat adaptiv",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență ambuteiaj",
    "Conducere autonomă",

    "Park Assist",
    "Parcare automată",
    "Senzori parcare față",
    "Senzori parcare spate",
    "Cameră video spate",
    "Cameră video frontală",
    "Cameră video 360°",
    "Cameră asistență fază lungă/scurtă",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "Faruri Full LED",
    "Faruri LED adaptive",
    "Faruri autoadaptive",
    "Faruri direcționale dinamice",
    "Asistență fază lungă",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Iluminare interioară LED",

    "Night Vision",
    "Frânare de urgență până la 140 km/h",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Sistem frânare automată pietoni",
    "Sistem asistență frânare oraș",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Controlul tracțiunii",

    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi șofer",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centuri de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "Pachet crom exterior/interior",
    "9 airbag-uri"
  ],

 images: [
  "cars/ds72020/1.webp",
  "cars/ds72020/2.webp",
  "cars/ds72020/3.webp",
  "cars/ds72020/4.webp",
  "cars/ds72020/5.webp",
  "cars/ds72020/6.webp",
  "cars/ds72020/7.webp",
  "cars/ds72020/8.webp",
  "cars/ds72020/9.webp",
  "cars/ds72020/10.webp",
  "cars/ds72020/11.webp",
  "cars/ds72020/12.webp",
  "cars/ds72020/13.webp",
  "cars/ds72020/14.webp",
  "cars/ds72020/15.webp",
  "cars/ds72020/16.webp",
  "cars/ds72020/17.webp",
  "cars/ds72020/18.webp",
  "cars/ds72020/19.webp",
  "cars/ds72020/20.webp",
  "cars/ds72020/21.webp",
  "cars/ds72020/22.webp",
  "cars/ds72020/23.webp",
  "cars/ds72020/24.webp",
  "cars/ds72020/25.webp",
  "cars/ds72020/26.webp",
  "cars/ds72020/27.webp",
  "cars/ds72020/28.webp",
  "cars/ds72020/29.webp",
  "cars/ds72020/30.webp",
  "cars/ds72020/31.webp",
  "cars/ds72020/32.webp",
  "cars/ds72020/33.webp",
  "cars/ds72020/34.webp"
],

  videoId: "jNttPmdQ9Ew",

  description: "DS Automobiles DS 7 Crossback SO CHIC din 2020, cu 147.500 km și motor 1.5 BlueHDi de 130 CP. Echipat cu transmisie automată 8+1 și tracțiune față, modelul dispune de faruri Full LED adaptive, Night Vision, bord virtual, scaune sport, navigație Premium Europa cu limba română, Apple CarPlay, MirrorLink, climatronic, Keyless Go, camere video, Park Assist și sisteme avansate de siguranță. Mașina are un singur proprietar, carte service și service complet în rețeaua DS."
},

 {
  id: 29,
 category: "Hyundai",
  name: "Hyundai Tucson PHEV 1.6 265 CP 4WD 6AT Luxury",
  price: "27.990 €",
  priceValue: 27990,

  year: 2021,
  firstRegistration: "28/07/2021",
  km: "62.500 km",

  fuel: "Hibrid Plug-In",
  engine: "1.6 T-GDI PHEV",
  power: "265 CP",
  gearbox: "Automată",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6d-Temp",
  color: "Negru",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Hyundai; service nou",

  vin: "TMAJE812DNJ036396",

  badge: "Luxury",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",

    "Jante aliaj 19",
    "Anvelope vară",
    "Plafon panoramic",
    "Pachet crom exterior/interior",
    "Privacy Glass",

    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "Wireless charging",
    "Sistem navigație Premium Europa",
    "Navigație cu limba română",
    "Sistem audio Krell",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "HDD intern 20 GB",
    "AUX",
    "SD Card",

    "Climatronic 3 zone",
    "Climatizare spate",
    "Tapițerie piele Nappa",
    "Scaune sport față",
    "Scaun șofer ajustabil electric",
    "Scaun pasager ajustabil electric",
    "Scaun șofer cu memorie",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Scaune față ventilate",
    "Încălzire scaune spate",
    "Scaune spate cu masaj",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan multifuncțional",
    "Volan reglabil electric",
    "Încălzire volan",
    "Schimbător de viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire auxiliară",
    "Jaluzele manuale geamuri spate",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglinzi exterioare digitale",
    "Senzor ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Easy Access portbagaj",

    "Pilot automat adaptiv Distronic",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență ambuteiaj",
    "Conducere autonomă",
    "Asistență fază lungă",
    "Faruri Full LED",
    "Faruri autoadaptive",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Iluminare interioară LED",
    "Cameră asistență fază lungă/scurtă",

    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Parcare automată",
    "Cameră video 360°",
    "Cameră video spate",
    "Funcție parcare din cheie",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",

    "7 airbag-uri",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "Garanție sistem hibrid 8 ani",
    "2 chei Smart",
    "Garanție dealer 12 luni / 20.000 km"
  ],

  images: [
  "cars/hytucson2021/1.webp",
  "cars/hytucson2021/2.webp",
  "cars/hytucson2021/3.webp",
  "cars/hytucson2021/4.webp",
  "cars/hytucson2021/5.webp",
  "cars/hytucson2021/6.webp",
  "cars/hytucson2021/7.webp",
  "cars/hytucson2021/8.webp",
  "cars/hytucson2021/9.webp",
  "cars/hytucson2021/10.webp",
  "cars/hytucson2021/11.webp",
  "cars/hytucson2021/12.webp",
  "cars/hytucson2021/13.webp",
  "cars/hytucson2021/14.webp",
  "cars/hytucson2021/15.webp",
  "cars/hytucson2021/16.webp",
  "cars/hytucson2021/17.webp",
  "cars/hytucson2021/18.webp",
  "cars/hytucson2021/19.webp",
  "cars/hytucson2021/20.webp",
  "cars/hytucson2021/21.webp",
  "cars/hytucson2021/22.webp",
  "cars/hytucson2021/23.webp",
  "cars/hytucson2021/24.webp",
  "cars/hytucson2021/25.webp",
  "cars/hytucson2021/26.webp",
  "cars/hytucson2021/27.webp",
  "cars/hytucson2021/28.webp",
  "cars/hytucson2021/29.webp",
  "cars/hytucson2021/30.webp"
],

  videoId: "DDTjfUGMvRI",

  description: "Hyundai Tucson PHEV Luxury din 2021, model 2022, cu 62.500 km și sistem Plug-In Hybrid de 265 CP. Echipat cu tracțiune 4x4 și transmisie automată, modelul dispune de plafon panoramic, scaune din piele Nappa încălzite și ventilate, navigație Premium cu limba română, Apple CarPlay, încărcare wireless, sistem audio Krell, climatronic 3 zone, Keyless Go, cameră 360°, Park Assist și pilot automat adaptiv. Mașina are un singur proprietar, service complet în rețeaua Hyundai, două chei Smart și garanție pentru sistemul hibrid de 8 ani."
},

{
  id: 30,
 category: "Hyundai",
  name: "Hyundai Tucson PHEV 1.6 265 CP 4WD 6AT Luxury",
  price: "25.990 €",
  priceValue: 25990,

  year: 2021,
  firstRegistration: "30/08/2021",
  km: "100.100 km",

  fuel: "Hibrid Plug-In",
  engine: "1.6 T-GDI PHEV",
  power: "265 CP",
  gearbox: "Automată 7+1",
  drive: "4x4",
  body: "SUV",
  doors: 5,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6c",
  color: "Gri perlat",

  owners: "Unic proprietar",
  serviceHistory: "Service complet doar în rețeaua Hyundai; service nou",

  vin: "TMAJE812DNJ041571",

  badge: "Luxury",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",

    "Jante aliaj 19",
    "Anvelope vară",
    "Plafon panoramic",
    "Pachet crom exterior/interior",
    "Privacy Glass",
    "Cârlig remorcare",

    "Navigație GPS",
    "Sistem navigație Premium Europa",
    "Navigație cu limba română",
    "Apple CarPlay",
    "Android Auto",
    "MirrorLink",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "Wireless charging",
    "Sistem audio Krell",
    "Monitor cu touchscreen",
    "Control vocal",
    "Conexiune Internet",
    "AUX",
    "SD Card",
    "HDD intern 20 GB",

    "Climatronic 2 zone",
    "Climatizare spate",
    "Tapițerie piele Nappa",
    "Scaune sport față",
    "Scaun șofer reglabil electric",
    "Scaun pasager reglabil electric",
    "Scaun șofer cu memorie",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Scaune față ventilate",
    "Încălzire banchetă spate",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan multifuncțional",
    "Volan reglabil electric",
    "Încălzire volan",
    "Keyless Entry",
    "Keyless Go",
    "Pornire motor Keyless",
    "Încălzire cu reglare automată",
    "Jaluzele manuale geamuri spate",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglinzi exterioare digitale",
    "Senzor ploaie",
    "Senzori lumină",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",
    "Easy Access portbagaj",
    "Funcție parcare din cheie",

    "Pilot automat adaptiv Distronic",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență ambuteiaj",
    "Asistență fază lungă",
    "Faruri Full LED",
    "Faruri LED",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Funcție Cornering",
    "Iluminare interioară LED",
    "Cameră asistență fază lungă/scurtă",
    "Cross Traffic Alert",

    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Parcare automată",
    "Cameră video 360°",
    "Cameră video spate",
    "Frână de parcare electrică",
    "Servodirecție",
    "Senzori presiune roți",
    "Sistem Start/Stop",

    "ABS",
    "ESP",
    "EBD",
    "Frânare asistată",
    "Sistem asistență frânare oraș",
    "Frânare automată pietoni",
    "Sistem activ frânare de urgență",
    "Sistem avertizare pre-coliziune",
    "Avertizare sonoră pre-coliziune",
    "Sistem pre-coliziune spate",
    "Sistem pre-coliziune lateral",
    "Sistem avertizare marșarier",
    "Sistem acustic avertizare pietoni",
    "Sistem monitorizare stare șofer",
    "Sistem activ recomandare pauză șofer",
    "Sistem activ monitorizare șofer cu asistență de urgență",
    "Active Lane Control Assistant",
    "Asistență telefonică de urgență",
    "Apelare automată 112",

    "7 airbag-uri",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag genunchi șofer",
    "Airbag genunchi pasager",
    "Airbag-uri cap față",
    "Airbag central șofer și pasager",
    "Airbag-uri frontale pasageri spate",
    "Airbag lateral șofer",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "Airbag-uri laterale spate",
    "Centură de siguranță cu airbag spate",
    "Airbag cortină spate",
    "ISOFIX",

    "Garanție sistem hibrid 8 ani",
    "2 chei Smart",
    "Garanție dealer 12 luni / 20.000 km"
  ],

images: [
  "cars/hytucson2021-2/1.webp",
  "cars/hytucson2021-2/2.webp",
  "cars/hytucson2021-2/3.webp",
  "cars/hytucson2021-2/4.webp",
  "cars/hytucson2021-2/5.webp",
  "cars/hytucson2021-2/6.webp",
  "cars/hytucson2021-2/7.webp",
  "cars/hytucson2021-2/8.webp",
  "cars/hytucson2021-2/9.webp",
  "cars/hytucson2021-2/10.webp",
  "cars/hytucson2021-2/11.webp",
  "cars/hytucson2021-2/12.webp",
  "cars/hytucson2021-2/13.webp",
  "cars/hytucson2021-2/14.webp",
  "cars/hytucson2021-2/15.webp",
  "cars/hytucson2021-2/16.webp",
  "cars/hytucson2021-2/17.webp",
  "cars/hytucson2021-2/18.webp",
  "cars/hytucson2021-2/19.webp",
  "cars/hytucson2021-2/20.webp",
  "cars/hytucson2021-2/21.webp",
  "cars/hytucson2021-2/22.webp",
  "cars/hytucson2021-2/23.webp",
  "cars/hytucson2021-2/24.webp",
  "cars/hytucson2021-2/25.webp",
  "cars/hytucson2021-2/26.webp",
  "cars/hytucson2021-2/27.webp",
  "cars/hytucson2021-2/28.webp",
  "cars/hytucson2021-2/29.webp",
  "cars/hytucson2021-2/30.webp",
  "cars/hytucson2021-2/31.webp",
  "cars/hytucson2021-2/32.webp",
  "cars/hytucson2021-2/33.webp",
  "cars/hytucson2021-2/34.webp",
  "cars/hytucson2021-2/35.webp",
  "cars/hytucson2021-2/36.webp",
  "cars/hytucson2021-2/37.webp",
  "cars/hytucson2021-2/38.webp",
  "cars/hytucson2021-2/39.webp"
],

  videoId: "Zm2r87JzKFg",

  description: "Hyundai Tucson PHEV Luxury din 2021, model 2022, cu 100.100 km și sistem Plug-In Hybrid de 265 CP. Echipat cu tracțiune 4x4 și transmisie automată, modelul dispune de plafon panoramic, scaune din piele Nappa încălzite și ventilate, navigație Premium Europa cu limba română, Apple CarPlay, încărcare wireless, sistem audio Krell, climatronic, Keyless Go, cameră 360°, Park Assist și pilot automat adaptiv Distronic. Mașina are un singur proprietar, service complet în rețeaua Hyundai, două chei Smart și garanție pentru partea hibridă de 8 ani."
},

 {
  id: 31,
 category: "Renault",
  name: "Renault Talisman Blue dCi 200 EDC INITIALE PARIS",
  price: "17.290 €",
  priceValue: 17290,

  year: 2020,
  firstRegistration: "19/12/2019",
  km: "144.500 km",

  fuel: "Diesel",
  engine: "2.0 Blue dCi",
  power: "200 CP",
  gearbox: "Automată",
  drive: "Față",
  body: "Sedan",
  doors: 4,
  seats: 5,

  battery: "",
  electricRange: "",

  euro: "Euro 6d-Temp",
  color: "Alb perlat",

  owners: "Unic proprietar",
  serviceHistory: "Carte service; service complet doar în rețeaua Renault",

  vin: "VF1RFD00464042510",

  badge: "Initiale Paris",

  features: [
    "Carte service",
    "Computer de bord",
    "Filtru de particule",
    "Închidere centralizată",
    "Alarmă",
    "Antifurt",
    "Imobilizator",
    "EDS",
    "9 airbag-uri",

    "Jante aliaj 19",
    "Anvelope vară",
    "Suspensie controlată electronic",
    "Pachet crom exterior/interior",
    "Privacy Glass",

    "Apple CarPlay",
    "MirrorLink",
    "Android Auto",
    "Bluetooth",
    "Radio",
    "Sistem hands-free",
    "Port USB",
    "AUX",
    "SD Card",
    "Sistem navigație Premium Europa",
    "Navigație cu limba română",
    "Sistem audio BOSE",
    "Head-Up Display",
    "Monitor cu touchscreen",
    "Conexiune Internet",
    "HDD intern 20 GB",

    "Climatronic 2 zone",
    "Tapițerie piele Nappa",
    "Scaune sport față",
    "Scaun șofer ajustabil electric",
    "Scaun pasager ajustabil electric",
    "Scaun cu memorie",
    "Suport lombar electric scaun șofer",
    "Suport lombar electric scaun pasager",
    "Încălzire scaun șofer",
    "Încălzire scaun pasager",
    "Scaune față ventilate",
    "Scaune față cu masaj",
    "Cotieră față",
    "Cotieră spate",
    "Volan piele",
    "Volan sport",
    "Volan cu comenzi",
    "Volan multifuncțional",
    "Volan încălzit",
    "Schimbător de viteze piele",
    "Keyless Entry",
    "Keyless Go",
    "Încălzire cu reglare automată",
    "Încălzire auxiliară",
    "Senzor ploaie",
    "Senzori lumină",
    "Geamuri electrice față",
    "Geamuri electrice spate",
    "Oglinzi electrice",
    "Oglinzi încălzite",
    "Oglinzi rabatabile electric",
    "Oglindă retrovizoare antiorbire",
    "Oglindă dreapta cu asistență la marșarier",
    "Parbriz antireflexie solară",
    "Torpedou refrigerat",
    "Parasolare iluminate",
    "Lumini ambientale",
    "Follow Me Home",
    "Coming Home",
    "Leaving Home",

    "4Control",
    "Pilot automat adaptiv Distronic",
    "Limitator de viteză",
    "Avertizare unghi mort",
    "Asistență schimbare bandă",
    "Lane Assist",
    "Controlul distanței",
    "Asistență la frânare",
    "Asistență viraj",
    "Controlul tracțiunii",
    "Asistență la coborâre",
    "Asistență în pantă",
    "Asistență în rampă",
    "Sistem recunoaștere indicatoare de viteză",
    "Sistem recunoaștere semne trafic",
    "Sistem asistență intersecție",
    "Asistență ambuteiaj",
    "Asistență fază lungă",
    "Faruri Full LED",
    "Faruri direcționale dinamice",
    "Faruri direcționale",
    "Lumini de zi LED",
    "Faruri ceață LED",
    "Stopuri LED",
    "Follow Me Home",
    "Iluminare interioară LED",
    "Sistem Start/Stop",
    "Senzori presiune roți",
    "Frână de parcare electrică",
    "Servodirecție",

    "Senzori parcare față",
    "Senzori parcare spate",
    "Asistență la parcare",
    "Parcare automată",
    "Cameră video spate",

    "ABS",
    "ESP",
    "Frânare asistată",
    "Sistem frânare automată pietoni",
    "Sistem activ frânare urgență",
    "Sistem monitorizare stare șofer",
    "Airbag șofer",
    "Airbag pasager",
    "Airbag-uri cap față",
    "Airbag lateral șofer și pasager",
    "Airbag-uri cap spate",
    "ISOFIX",

    "2 chei"
  ],

 images: [
  "cars/talisman2020-2/1.webp",
  "cars/talisman2020-2/2.webp",
  "cars/talisman2020-2/3.webp",
  "cars/talisman2020-2/4.webp",
  "cars/talisman2020-2/5.webp",
  "cars/talisman2020-2/6.webp",
  "cars/talisman2020-2/7.webp",
  "cars/talisman2020-2/8.webp",
  "cars/talisman2020-2/9.webp",
  "cars/talisman2020-2/10.webp",
  "cars/talisman2020-2/11.webp",
  "cars/talisman2020-2/12.webp",
  "cars/talisman2020-2/13.webp",
  "cars/talisman2020-2/14.webp",
  "cars/talisman2020-2/15.webp",
  "cars/talisman2020-2/16.webp",
  "cars/talisman2020-2/17.webp",
  "cars/talisman2020-2/18.webp",
  "cars/talisman2020-2/19.webp",
  "cars/talisman2020-2/20.webp",
  "cars/talisman2020-2/21.webp",
  "cars/talisman2020-2/22.webp",
  "cars/talisman2020-2/23.webp",
  "cars/talisman2020-2/24.webp",
  "cars/talisman2020-2/25.webp",
  "cars/talisman2020-2/26.webp",
  "cars/talisman2020-2/27.webp",
  "cars/talisman2020-2/28.webp",
  "cars/talisman2020-2/29.webp",
  "cars/talisman2020-2/30.webp",
  "cars/talisman2020-2/31.webp",
  "cars/talisman2020-2/32.webp",
  "cars/talisman2020-2/33.webp",
  "cars/talisman2020-2/34.webp",
  "cars/talisman2020-2/35.webp",
  "cars/talisman2020-2/36.webp",
  "cars/talisman2020-2/37.webp",
  "cars/talisman2020-2/38.webp",
  "cars/talisman2020-2/39.webp"
],

  videoId: "",

  description: "Renault Talisman Initiale Paris din 2020, cu 144.500 km și motor 2.0 Blue dCi de 200 CP. Echipat cu transmisie automată, sistem 4Control și un nivel ridicat de confort, modelul dispune de scaune din piele Nappa încălzite, ventilate și cu masaj, reglaje electrice, Head-Up Display, navigație Premium cu limba română, Apple CarPlay, sistem audio BOSE, Keyless Go, cameră de marșarier, Park Assist și pilot automat adaptiv. Mașina are un singur proprietar, carte service și istoric complet în rețeaua Renault."
}
 
];


// ===== CURRENT FILTER / SORT STATE =====

const carsState = {
  category: "all",
  sort: "default"
};


// ===== DOM READY =====

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();

 const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

  const page = document.body.dataset.page;

  if (page === 'index') {
    initCarFilters();
    renderCarsGrid();
    initAnimations();
  } else if (page === 'car') {
    initCarPage();
  }
});


// ===== NAVBAR =====

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  const onScroll = () => {
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');

      document.body.style.overflow =
        mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}


// ===== FILTERS (index.html) =====

function initCarFilters() {
  const categorySelect = document.getElementById('filterCategory');
  const sortSelect = document.getElementById('filterSort');
  const resetBtn = document.getElementById('filterReset');

  if (!categorySelect || !sortSelect) return;

  const categories = [
    ...new Set(
      CARS
        .map(c => c.category)
        .filter(Boolean)
    )
  ].sort((a, b) => a.localeCompare(b, 'ro', { sensitivity: 'base' }));

  categories.forEach(cat => {
    const opt = document.createElement('option');

    opt.value = cat;
    opt.textContent = cat;

    categorySelect.appendChild(opt);
  });

  categorySelect.addEventListener('change', () => {
    carsState.category = categorySelect.value;
    renderCarsGrid();
  });

  sortSelect.addEventListener('change', () => {
    carsState.sort = sortSelect.value;
    renderCarsGrid();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      carsState.category = 'all';
      carsState.sort = 'default';

      categorySelect.value = 'all';
      sortSelect.value = 'default';

      renderCarsGrid();
    });
  }
}


function getFilteredSortedCars() {
  let list = CARS.slice();

  if (carsState.category !== 'all') {
    list = list.filter(
      c => c.category === carsState.category
    );
  }

  if (carsState.sort === 'asc') {
    list.sort(
      (a, b) => a.priceValue - b.priceValue
    );
  } else if (carsState.sort === 'desc') {
    list.sort(
      (a, b) => b.priceValue - a.priceValue
    );
  }

  return list;
}


// ===== RENDER CARS GRID (index.html) =====

function renderCarsGrid() {
  const grid = document.getElementById('carsGrid');

  if (!grid) return;

  const cars = getFilteredSortedCars();

  if (cars.length === 0) {
    grid.innerHTML = `
      <div class="cars-empty">
        Nu am găsit mașini pentru filtrul selectat.
        Încearcă alt filtru sau sună-ne pentru stocul complet.
      </div>
    `;

    return;
  }

  grid.innerHTML = cars.map(car => `
    <a href="car.html?id=${car.id}" class="car-card fade-in-up delay-${car.id}">
      
      <div class="car-card-img">
        <img
          src="${car.images[0]}"
          alt="${car.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x375/141414/444?text=${encodeURIComponent(car.name)}'"
        >

        <span class="car-card-badge">
          ${car.badge}
        </span>
      </div>

      <div class="car-card-body">

        <div class="car-card-name">
          ${car.name}
        </div>

        <div class="car-card-specs">

          <span class="car-spec-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>

            ${car.year}
          </span>

          <span class="car-spec-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>

            ${car.km}
          </span>

          <span class="car-spec-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>

            ${car.fuel}
          </span>

          <span class="car-spec-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>

            ${car.power}
          </span>

        </div>

        <div class="car-card-footer">

          <div>
            <div class="car-price">
              ${car.price}
            </div>

            <div class="car-price-sub">
              Preț negociabil
            </div>
          </div>

          <span class="btn-card">
            Vezi detalii
          </span>

        </div>

      </div>

    </a>
  `).join('');
}


// ===== INTERSECTION OBSERVER ANIMATIONS =====

function initAnimations() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll('.fade-in-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    obs.observe(el);
  });
}


// ============================================================
// ===== CAR PAGE ==============================================
// ============================================================

function initCarPage() {
  const params = new URLSearchParams(
    window.location.search
  );

  const id =
    parseInt(params.get('id')) || 1;

  const car =
    CARS.find(c => c.id === id) || CARS[0];

  renderCarDetail(car);
}


// ============================================================
// ===== HELPER FUNCTIONS FOR DESKTOP + MOBILE =================
// ============================================================

function setTextForIds(ids, value) {
  ids.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
      el.textContent = value;
    }
  });
}


function setHTMLForIds(ids, value) {
  ids.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
      el.innerHTML = value;
    }
  });
}


function setAttributeForIds(ids, attribute, value) {
  ids.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
      el.setAttribute(attribute, value);
    }
  });
}


// ============================================================
// ===== RENDER CAR DETAIL =====================================
// ============================================================

function renderCarDetail(car) {

  document.title = `${car.name} — AUTO PARK`;

  setTextForIds(
    [
      'carBreadcrumbName',
      'carBreadcrumbName-mobile'
    ],
    car.name
  );

  setTextForIds(
    [
      'carName',
      'carName-mobile'
    ],
    car.name
  );

  setHTMLForIds(
    [
      'carPrice',
      'carPrice-mobile'
    ],
    `${car.price} <span>TVA inclus</span>`
  );

  setTextForIds(
    [
      'carBadge',
      'carBadge-mobile'
    ],
    car.badge
  );

  const quickSpecsHTML = `
    <div class="quick-spec">
      <div class="quick-spec-label">
        An fabricație
      </div>

      <div class="quick-spec-val">
        ${car.year}
      </div>
    </div>

    <div class="quick-spec">
      <div class="quick-spec-label">
        Kilometraj
      </div>

      <div class="quick-spec-val">
        ${car.km}
      </div>
    </div>

    <div class="quick-spec">
      <div class="quick-spec-label">
        Combustibil
      </div>

      <div class="quick-spec-val">
        ${car.fuel}
      </div>
    </div>

    <div class="quick-spec">
      <div class="quick-spec-label">
        Putere
      </div>

      <div class="quick-spec-val">
        ${car.power}
      </div>
    </div>
  `;

  setHTMLForIds(
    [
      'carQuickSpecs',
      'carQuickSpecs-mobile'
    ],
    quickSpecsHTML
  );

  const technicalTableHTML = `
  <tr>
    <td>An fabricație</td>
    <td>${car.year}</td>
  </tr>

  <tr>
    <td>Prima înmatriculare</td>
    <td>${car.firstRegistration || "-"}</td>
  </tr>

  <tr>
    <td>Kilometraj</td>
    <td>${car.km}</td>
  </tr>

  <tr>
    <td>Combustibil</td>
    <td>${car.fuel}</td>
  </tr>

  <tr>
    <td>Motorizare</td>
    <td>${car.engine}</td>
  </tr>

  <tr>
    <td>Putere</td>
    <td>${car.power}</td>
  </tr>

  <tr>
    <td>Cutie viteze</td>
    <td>${car.gearbox}</td>
  </tr>

  <tr>
    <td>Tracțiune</td>
    <td>${car.drive}</td>
  </tr>

  <tr>
    <td>Caroserie</td>
    <td>${car.body}</td>
  </tr>

  <tr>
    <td>Număr uși</td>
    <td>${car.doors || "-"}</td>
  </tr>

  <tr>
    <td>Număr locuri</td>
    <td>${car.seats || "-"}</td>
  </tr>

  <tr>
    <td>Capacitate baterie</td>
    <td>${car.battery || "-"}</td>
  </tr>

  <tr>
    <td>Autonomie electrică</td>
    <td>${car.electricRange || "-"}</td>
  </tr>

  <tr>
    <td>Normă poluare</td>
    <td>${car.euro}</td>
  </tr>

  <tr>
    <td>Culoare</td>
    <td>${car.color}</td>
  </tr>

  <tr>
    <td>Număr proprietari</td>
    <td>${car.owners || "-"}</td>
  </tr>

  <tr>
    <td>Istoric service</td>
    <td>${car.serviceHistory || "-"}</td>
  </tr>

  <tr>
    <td>VIN</td>
    <td>${car.vin}</td>
  </tr>
`;

  setHTMLForIds(
    [
      'carTechTable',
      'carTechTable-mobile'
    ],
    technicalTableHTML
  );

  const featuresHTML = car.features
  .map(feature => `<li>${feature}</li>`)
  .join("");

setHTMLForIds(
  [
    'carFeatures',
    'carFeatures-mobile'
  ],
  featuresHTML
);

  setTextForIds(
    [
      'carDescription',
      'carDescription-mobile'
    ],
    car.description
  );

  const query =
    encodeURIComponent(car.name);

  const autovitURL =
    `https://www.autovit.ro/autoturisme?search%5Bkeyword%5D=${query}`;

  setAttributeForIds(
    [
      'autovitLink',
      'autovitLink-mobile'
    ],
    'href',
    autovitURL
  );

  initGallery(
    car.images,
    car.name
  );

  initCarVideo(
    car.videoId,
    car.name
  );
}


// ============================================================
// ===== VIDEO (car.html) ======================================
// ============================================================

function initCarVideo(videoId, carName) {

  const trigger =
    document.getElementById('videoTrigger');

  const wrap =
    document.getElementById('videoEmbedWrap');

  if (!trigger || !wrap) return;

  if (!videoId) {

    const title =
      trigger.querySelector('.video-trigger-title');

    const sub =
      trigger.querySelector('.video-trigger-sub');

    if (title) {
      title.textContent =
        'Clip video indisponibil momentan';
    }

    if (sub) {
      sub.textContent =
        'Revenim în curând cu prezentarea video a acestei mașini';
    }

    trigger.disabled = true;
    trigger.style.opacity = '0.55';
    trigger.style.cursor = 'default';

    return;
  }

  trigger.addEventListener('click', () => {

    const isOpen =
      wrap.classList.contains('open');

    if (isOpen) {

      wrap.classList.remove('open');
      wrap.innerHTML = '';

      return;
    }

    wrap.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        title="Prezentare video ${carName}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    `;

    wrap.classList.add('open');
  });
}


// ============================================================
// ===== GALLERY ================================================
// ============================================================
//
// Starea galeriei (lista de imagini, indexul curent) + un
// control `goTo` sunt publicate pe `window.carGallery`, ca
// orice alt script (lightbox-ul inclus) să poată citi exact
// ce e pe ecran și să navigheze galeria — pentru 4 poze sau 40.
//
// În plus, gestionăm aici clasa `.at-end` / `.no-scroll` de pe
// `.gallery-thumbs-wrap`, care controlează fade-ul din dreapta
// benzii de thumbnail-uri.
// ============================================================

function initGallery(images, carName) {

  let currentIndex = 0;


  // ==========================================================
  // ELEMENTS
  // ==========================================================

  const mainImg =
    document.getElementById('galleryMainImg');

  const counter =
    document.getElementById('galleryCounter');

  const thumbsContainer =
    document.getElementById('galleryThumbs');

  const thumbsWrap =
    document.getElementById('galleryThumbsWrap');

  const prevBtn =
    document.getElementById('galleryPrev');

  const nextBtn =
    document.getElementById('galleryNext');


  if (!mainImg || !thumbsContainer) {
    return;
  }


  // ==========================================================
  // FALLBACK IMAGE
  // ==========================================================

  const fallback = (name) => {
    return `https://placehold.co/800x500/141414/444?text=${encodeURIComponent(name)}`;
  };


  // ==========================================================
  // BUILD THUMBNAILS
  // ==========================================================

  thumbsContainer.innerHTML =
    images.map((src, i) => `
      <div
        class="gallery-thumb ${i === 0 ? 'active' : ''}"
        data-index="${i}"
      >
        <img
          src="${src}"
          alt="${carName} ${i + 1}"
          loading="lazy"
          onerror="this.src='${fallback(carName + ' ' + (i + 1))}'"
        >
      </div>
    `).join('');


  // ==========================================================
  // SET INITIAL IMAGE
  // ==========================================================

  mainImg.src =
    images[0];

  mainImg.alt =
    carName;

  mainImg.onerror =
    function () {
      this.src =
        fallback(carName);
    };


  updateCounter();


  // ==========================================================
  // FADE DREAPTA LA THUMBNAILS
  // ==========================================================
  //
  // Dacă banda se poate derula și nu suntem la capăt, se vede
  // gradientul din dreapta => semn că mai există imagini.

  function updateThumbsFade() {

    if (!thumbsWrap) return;

    const maxScroll =
      thumbsContainer.scrollWidth -
      thumbsContainer.clientWidth;


    /* nu e nimic de derulat */

    if (maxScroll <= 4) {

      thumbsWrap.classList.add('no-scroll');
      thumbsWrap.classList.remove('at-end');

      return;
    }

    thumbsWrap.classList.remove('no-scroll');


    const atEnd =
      thumbsContainer.scrollLeft >= (maxScroll - 4);


    thumbsWrap.classList.toggle('at-end', atEnd);
  }


  thumbsContainer.addEventListener(
    'scroll',
    updateThumbsFade,
    { passive: true }
  );


  window.addEventListener(
    'resize',
    updateThumbsFade
  );


  /* după ce se așază layout-ul / se încarcă pozele */

  updateThumbsFade();

  setTimeout(updateThumbsFade, 120);

  window.addEventListener('load', updateThumbsFade);


  // ==========================================================
  // GO TO IMAGE
  // ==========================================================

  function goTo(index) {

    currentIndex =
      (index + images.length) % images.length;


    mainImg.classList.add('fade-out');


    setTimeout(() => {

      mainImg.src =
        images[currentIndex];

      mainImg.onerror =
        function () {
          this.src =
            fallback(carName);
        };


      mainImg.classList.remove('fade-out');


      updateCounter();
      updateThumbs();

    }, 140);
  }


  // ==========================================================
  // COUNTER
  // ==========================================================

  function updateCounter() {

    if (counter) {

      counter.textContent =
        `${currentIndex + 1} / ${images.length}`;
    }
  }


  // ==========================================================
  // ACTIVE THUMBNAILS
  // ==========================================================

  function updateThumbs() {

    thumbsContainer
      .querySelectorAll('.gallery-thumb')
      .forEach((t, i) => {

        t.classList.toggle(
          'active',
          i === currentIndex
        );

        // keep the active thumb scrolled into view when
        // navigating with arrows / keyboard / lightbox
        if (i === currentIndex) {
          t.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }

      });


    setTimeout(updateThumbsFade, 350);
  }


  // ==========================================================
  // PREVIOUS / NEXT BUTTONS
  // ==========================================================

  if (prevBtn) {

    prevBtn.addEventListener(
      'click',
      () => goTo(currentIndex - 1)
    );

  }


  if (nextBtn) {

    nextBtn.addEventListener(
      'click',
      () => goTo(currentIndex + 1)
    );

  }


  // ==========================================================
  // THUMBNAILS
  // ==========================================================

  thumbsContainer.addEventListener(
    'click',
    (e) => {

      const thumb =
        e.target.closest('.gallery-thumb');

      if (thumb) {

        goTo(
          parseInt(
            thumb.dataset.index
          )
        );

      }

    }
  );


  // ==========================================================
  // KEYBOARD NAVIGATION
  // ==========================================================

  document.addEventListener(
    'keydown',
    (e) => {

      if (e.key === 'ArrowLeft') {
        goTo(currentIndex - 1);
      }

      if (e.key === 'ArrowRight') {
        goTo(currentIndex + 1);
      }

    }
  );


  // ==========================================================
  // TOUCH / SWIPE SUPPORT
  // ==========================================================

  let touchStartX = 0;


  const mainWrap =
    document.getElementById('galleryMain');


  if (mainWrap) {

    mainWrap.addEventListener(
      'touchstart',
      (e) => {

        touchStartX =
          e.touches[0].clientX;

      },
      {
        passive: true
      }
    );


    mainWrap.addEventListener(
      'touchend',
      (e) => {

        const diff =
          touchStartX -
          e.changedTouches[0].clientX;


        if (Math.abs(diff) > 40) {

          goTo(
            currentIndex +
            (diff > 0 ? 1 : -1)
          );

        }

      },
      {
        passive: true
      }
    );

  }


  // ==========================================================
  // PUBLISH STATE FOR THE LIGHTBOX (window.carGallery)
  // ==========================================================

  window.carGallery = {
    getImages: () => images,
    getIndex: () => currentIndex,
    goTo: goTo
  };
}


// ============================================================
// ===== SMOOTH SCROLL FOR ANCHOR LINKS ========================
// ============================================================

document.addEventListener(
  'click',
  (e) => {

    const link =
      e.target.closest(
        'a[href^="#"]'
      );

    if (!link) return;


    const target =
      document.querySelector(
        link.getAttribute('href')
      );


    if (target) {

      e.preventDefault();


      const offset = 80;


      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;


      window.scrollTo({
        top,
        behavior: 'smooth'
      });

    }

  }
);


// ============================================================
// ===== ORDER FORM (comanda.html) ==============================
// ============================================================

document.addEventListener(
  'DOMContentLoaded',
  () => {

    if (
      document.body.dataset.page !== 'comanda'
    ) {
      return;
    }

    initOrderForm();

  }
);


function initOrderForm() {

  const form =
    document.getElementById('orderForm');

  const successBox =
    document.getElementById('orderSuccess');


  if (!form) return;


  form.addEventListener(
    'submit',
    (e) => {

      e.preventDefault();


      if (!form.checkValidity()) {

        form.reportValidity();

        return;
      }


      const data =
        Object.fromEntries(
          new FormData(form).entries()
        );


      console.log(
        'Comandă mașină:',
        data
      );


      form.style.display =
        'none';


      if (successBox) {

        successBox.classList.add(
          'open'
        );

      }

    }
  );
}

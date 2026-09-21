/* script.js - */

// ===== CARS DATA =====
// NOTE: "category" powers the homepage category filter.
// NOTE: "videoId" is the YouTube video ID (the part after watch?v=) for
// this car's presentation clip. Replace the placeholder with the real ID
// once each video is uploaded — leave it as "" to hide the video button.
const CARS = [
 {
  id: 1,
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

  badge: "Ofertă",

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
  "cars/ds4-2023/ds41png.png"
],

  videoId: "XYhYh_6vZeo",

  description: "DS 4 E-TENSE 225 Performance Line+ din 2023, cu 84.500 km, propulsie plug-in hybrid de 225 CP și cutie automată. Un model premium cu design distinctiv, interior rafinat și un nivel bogat de dotări, completat de faruri Full LED, Head-Up Display, Alcantara, cameră de marșarier, Keyless Go și jante de 19inch."
},
 {
  id: 2,
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

  badge: "Ofertă",

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
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFyaGJpbmlxemF0dTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wCnxRQKzDcLD37LlZ5LDv-B_1Uw-S0G1q7ySvWVt3Z8/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imc0YjI3OTdrdng1ZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7g4vDbKMSecffqGQCMaLOt5Y0lJHYfpYyjweoduPJvo/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZ6bnNiODEzb2J0djItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fMjZFUSSfBbUVyigJBVdz9DIMA5sadGK0ddNu1oSUho/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNvajJvNWluaWwzbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SYT9H3g0eRS3Lm32QAutbT8SPwsYkP_Ox6Hhv7QlgGI/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InMyZGFsajR6cGxmODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TGDeQo9y5YKmtR5iYVyhNoJgacep_xtKOGIsO6KMjY8/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imxlb2lseXNvazR4ZS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.f3WvI1vKfAlF_lk-GNg9r2rP6uUrlmsfwrU945rEU0M/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImYydjV4bmFzZWs5bzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.G_UUe8b6k3bw-9ghvkaDH0-ogTzpmULX_yjxrjMq_z8/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9yc3Z5ZHM5MmR1NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MiOmSaff5w2A1DfwkBQWjZk6v5U4tij3HFKSaHcnY80/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJmaHNhYWxmMXAwdzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.cylmJUDp56F3PwzVLGfDK8ryIFpYGjknMV4h55VgQik/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR4ejR3N2thYTUxaS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.k6mGP9F3B1I8bYh7UI8pBdofCw5WUb-PUHDaK2t7LU0/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjRoY3h3ODhxbjMzbjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KSbWakRVcaMRzB8vekO7U3QzECDGxvqcOo0ch-lY6Yo/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlxYjUycmFnNHVhbTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.00UqekSQPqLwvs1jZlcCCaB8UpjaRv8cJ6DnP7Qa_TU/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRmaTFqYjgyOW5idDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wHNL0pxdBD5ymJwZ2euSfqrHWgHiSuc2UBq92ziI4-A/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ2ZXc4Nm5lM214cTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.rZN7qKtYO_2ypX36OspX0SuVTp1433LsovTaiIFJqJY/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpsdzM3ZnM0YWJiNS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.TfOQ4bP4NS0QXDlikpANUXyOr87MvrI-qEh2W7O5MvA/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVpaHhibTN3NnhiZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.CYRwkzmDqKh2J0Q_KEUM3b0fOkUjn2PX_9Rh_vPb_Mk/image;s=5120x0;q=100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imd1aXE4am16ZXdhbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sVAPPc6xN-IjL_ydvjyUe9eAGneat6ap959LSRv-dA0/image;s=5120x0;q=100"
],

  videoId: "2_I3Qdj1ucg",

  description: "Opel Grandland 1.5 D Automatik Business Elegance, model 2023, cu 132.500 km, motor 1.5 BlueHDi de 130 CP și transmisie automată 8+1 trepte. SUV cu tracțiune față, un singur proprietar și service complet efectuat în rețeaua Opel. Este echipat cu faruri Full LED adaptive, bord virtual 3D, scaune cu piele parțială, navigație Premium Full Europa, CarPlay & MirrorLink, Keyless Go, climatronic, cameră de marșarier, Park Assist, DISTRONIC activ, Cross Traffic Alert, asistență unghi mort și asistență la menținerea benzii. Mașina are Euro 6, jante din aliaj de 17\" și o configurație completă de sisteme de confort și siguranță."
},
{
  id: 3,
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im43MXdwbHc1bXdtai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.cVJMIlh_GltRZ0Cbc7YHqQqFNJzCuNdG11aSj3R5_dE/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR5NW9idWx5NThwbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SmdfLSlMM_MZsnpOfXD0c92bGy6yrVxWCag48-0OBeg/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im4yempiczNjNG0wNy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.MuBngvxxXD5v2V6DIFkO18fgyNCPfTyD8FIVsr_M0vY/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjlpcXFtbmhudGd4ZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XO_dZRGcFrO35i_gSeYCdyMiubKZO4Crf-P8ljqX1Fs/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNoZjF5cmpxbjJqei1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.886Fna4DNaRhSq7kxs3dna2RfCapnXu98V8MEff8CGo/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InUzNWtnMTBtZjd0NDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.16aNr1aXhk40gMWWfvNjNTwbQ_7AdlbYn4VRxTp0_io/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJicGZ3MTZndHZveC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0gRlMYV8vJiFSvap1gmWjj-oKih0Yut9v4RofY3nOF8/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImV1ZnJrZDNkNGQ1NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.YiLNRUpBpjdwmo_RzIR9eZ5s4dJyefKpghEFhV4QRTc/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhiMWR3c2plaG4zdTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MxoH5pQv_A7cpw10fa00_8v_-pdCnWCCJ0xd2SRDGUo/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ing4cXFyZnA2MXNwYjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.L0LH-gBuib1w4HaBVRZNnFmc-ByBq6cI4A62CiQ1-GA/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjgyM2ZrZ2VqbGgzai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.dYxdMArFQ-P7gI1KczBIUh9-_-1iT4MIBMnGOr6us_w/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InI3NnBmbGhmZ2U0bTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.y0TvN-ZqhH9SqN8K0lxj_WKfQSZqHZ9Y-ukD9Cx2Acs/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5jNW5hdjdqcmhjczMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.PrJSCIqSpgAB608NkqsTTfUqu9uYDqouYjbLTOjCTL4/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhhbHpmcW5oaGVmdjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.H4ap8H9614KhiEJgiV9UJ47aIt34YM5RZYmy3kgWPcw/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imc3YnMxeXlxamtmbC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.DNBABE0Swg2wkFvONnQN8XnwIL_X88Z5CzQepO7-3c/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV1MXp4ZGZqYTcxMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kQi8mMPXL4YwcEDCe-3VsBogXvQICEhehYBQfm7qHco/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imd0bzc1bWswdThwci1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.MTWl58v388GN4n43DIZFrhKfuLH__8M1NrmuzxJiwhI/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc2cnR4cnlsdzY2Yi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.6OTTTHMF0CNUitWDYTZQcV13MFd7FpgiYjZPQFjbnQ0/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZjb3oyNXBsbXg3aTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.hlYHFjWwLg-kiyfICdJq-VHRgrevR1j9eOhBEIy7hpA/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjRxZXlvYnN4bW5xMDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Fp9wMg0GQF2FQcEMPo--tQruWyZGQfVSAtV5_HfM8f4/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImhpZ3Q2YnlkeWxreTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.jreQ5CHeNA_Fv9GPA6SmxatNBEafBqDS8k3zfK6kyFo/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFrZ3kweGV6eW15czEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.R-V2KSQhUlXe2ZNUtkwxL6aCxU0js35ERNWOg8rw2to/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ6cmk3cjZldGg3YjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vlAe0WwdXuB65hSGYcxyZ41Nyn-mRLHtJl5SC-wRtoo/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA4em14dHhpd3RhODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WInW9n1tFrAVtjB9ug9n4yAis-2ITY6yMu3qAo1FuEM/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InAxMjRodDdqNGhsby1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.-s9frkbm3j8bGE37HqW4wwVua98lspguuFpI3sdDQPM/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBhMXlraW50d2ZqcDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-g_UsWdnvopdHMUcZBsRigFZMLhvDTjaqCqncNJgsv4/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im90Y3h3bmo3MWQ2YS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.jNHVc9ocvbUxWxg8Ba2csAPDNN2PiUOyG7QvgvCJQl4/image;s=5120x0;q=100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1odXV3ZnR2dHlvai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.-0Em3mnlRYIpLjOkIF8dmyQWwJ7tF2D5oAx5D2wDx1I/image;s=5120x0;q=100"
  ],

  videoId: "",

  description: "Renault Koleos BLUE dCi X-Tronic 4WD Initiale Paris din 2021, cu 71.500 km, motor 2.0 Blue dCi de 190 CP și transmisie automată X-Tronic 4x4. SUV în echipare Initiale Paris, cu piele Nappa, scaune încălzite și ventilate, trapă panoramică, bord virtual, sistem audio BOSE și navigație Premium Full Europa. Este echipat cu cameră marșarier, Park Assist, Keyless Go, faruri Full LED, asistență unghi mort și numeroase sisteme de siguranță. Mașina are un singur proprietar și service complet efectuat în rețeaua Renault."
},
  {
  id: 4,
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
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVuM3Voc250cDN2cy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Ljgg1MExv51DJXSoEIvXid1SZQVj0Q-0D91iRHpBCnk/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNhNnZpcGd5a3VkMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nkUvsSC_Ab6UnE4mOpqfZYqaEwzAmwdw15JqjUxRE8w/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB1ZXljaTI4cGcxaS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.L_x7I8djZURhpfYUxXFm8aQ2Blp0JgsprRIhsIuWzrc/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IngybGEwajJjbmt4ZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.onMw-FlpF-itSfqnJ-TB0p_rpN6IaWJafdcMJXEbEcY/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ4OHZqZmt6YXU2cjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RIyoouVnTDiM-Ed0JuDOtiE7H4gh4aPyWplKcCBlwgA/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR1bHpvZHFwdTdmNjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.p5YyQNj78t8JysHUJtJ12FsntHt70lpFTAGQNcQcdEI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc0d3BybWN6NXo3Yy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.y9W7yybFe8CLOnzbIJrb-iW755G19qVVJwRDsiEF0Vc/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM3cWVkZjcxYWZydi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.7YLOOInyo1H5Eeej0YocUo64I6EMnHxCgksDaoYSzDU/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNydnRjMnU4dTI1bDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.J3rOeUmr0F_G8HwoNKLjHbskOe3UZu55HOBLqXzU_X8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRoOG1oYWJ0d2Zibi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.pl0EaNJOh2VTuRphkQQLqpocjsqYz2H8bBnB4pZH55s/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFnMXY0NGQ0NnZndS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.OkulYT_cTtoOlGLoovqY8rX43BVVu1rKuJ_nYkg_k-Y/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imk2Y210ZHkwYXFwcTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.1ogtFCsl96w1SEKVG2lFt2rtmmiS2-iu8BtpkzXdTnA/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFxajVkdTJubWc5OTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.BGuiCfGagpmB2tAsWx-NV_9vqQ8dKmVpANGqGvIR7Y4/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImczeHo2NWlmY3Q5dDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.1ijM-dF-GtDzqRBm7VQv3THcif1273KJMPviGfsxU2w/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjllYWhuZ2t1dnRqNi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.DLVo2C1Zj5RDxzsNC76NNUFPEKC4Fyv10qVZsy90JYg/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFldW9jeDliN2Z5cC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.aICyDhGa9nZfrf9uc4WBckjI8laWpO_k5Z_g_OCZGpQ/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdqdjZjcWx3ZTZhaC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19._eMFuzgtUvp-bKAqAqaDItNb-azkLQ8BjesDWTlLiIo/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp4Mm9mbWY2d2t6ODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OPHCiHhnPFQkimuEOyQeM-namrzo-vZU_O6e2M4pYxM/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ0a3Y0YTJtdml2bDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oBoEmISnu79YhjyEkGUM-XYZzmyBI28ncQS0UChDUgU/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InozdTRrd3I3NWhyYy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Wo23bdgyahoygvcEGmLh7W4-Qabh5fntW-EGJJ_4GzI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZtbWxtcnJtamJoYzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.P_SK95tqIG5oB6bbQNJaJz_N0w-a7sWWUNR3PB1Mzuk/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InF2ZG9xYnpwZ3NpZjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ykDLbE-UNCe4A3rWefpbiiPe5Sn4tJlP-3nS3FhPABI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlzOXVnbnpoMzFwdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.PnQUw1hkKnLaO4Xn7nHSBlYkUjBoIgpwg8VK9yOwvlk/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImgwNzI4bWdidDl3aC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.gpFGCmMDrkoNIEXzXL1VKxfyE3bAn_O5kpi5iBeUOGI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM5aW1oaDd5Ym40NTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.iKMRv5J8b7rXMifeELDVptNE-b3nODsrWbbXmy6p7eQ/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFuZzl4eXltd3ZhdTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mXrF5TbPj3N1rQXXJQ0EQIxxw9sje0XOkIEDTHns798/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InE4cW5iY3F5cXJ2Yy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.mXrF5TbPj3N1rQXXJQ0EQIxxw9sje0XOkIEDTHns798/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ0MWx6bXp2MG1ldTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mSqLId0hJ0GkLdrYz0e7OSX0YP-ovbpJvMJAwwHosvE/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJ6Y3BvajI0YjNzei1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.arJl4g3YjvjNHeR6GT5HNkZ-EyYP4clot023LAq1JWA/image%3Bs%3D5120x0%3Bq%3D100"
],

  videoId: "j-bjs31mqYc",

  description: "Nissan LEAF 62 kWh e+ Tekna din 2020, cu 24.000 km, motor electric de 217 CP și transmisie automată cu tracțiune față. Compactă 100% electrică, cu baterie de 62 kWh și autonomie declarată de până la 385 km. Echipată cu cameră 360°, cruise control adaptiv, Keyless Go, navigație Premium Full Europa, Apple CarPlay & Android Auto, climatronic, pompă de căldură, scaune și volan încălzite, faruri Full LED și sisteme avansate de asistență. Mașina are un singur proprietar, service complet în rețeaua Nissan și încărcare rapidă."
},

{
  id: 5,
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjkzemRldzBxZHdyaDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Mu8Mqxc2ZBZny_3HMkO-lauLo4shirTp9tRAYMoDzo4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZqZ2JsbHVqOWcwZzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.g43hgURKX97o11aWIeDrygW-45KCMg6hKG2wdBcyprU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxwbDNxdWZibG1waTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RoyPljW6PPCmdiCayMEWp_OAjopGBUEEMBJ321n35TE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZvMjhjOG51bTZsZi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.driu9iBe31c_PbL5UDEn70wETJaftpZRjnmfOEAbnTE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN1Z2FxMzhtOXQ3czEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.IaHo6xiZf3iKZcLS6-e0xQ2LHQUh-FF69l0dHq6rI58/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRtNDg0Y3J1ZzhxdC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GKGPiDZA4SY7-Yj2HsUSQ7l9h_F4e9VDu49VEVPOs4Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im13NzRuaGVidWNzbS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.pjIwMd0Id2fntGfGoDQlFYx-DNLyFL2b9Qpk19VzQ1I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc0cHNueDI1bGowNTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.t5jPnS3IOzCo1bKqZ6UoYMf-DDMtvxYwJl5LANyuDCo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFmbmhhNDkxNWJybS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.WZ9Q5Tyu-ksnjwAH5doD0sizHa3-oBxD3LuoZvosviQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ4OHZqZmt6YXU2cjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RIyoouVnTDiM-Ed0JuDOtiE7H4gh4aPyWplKcCBlwgA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRzeTM3MHF6Y2E4ajEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9ZGXg9KaSZodjAeQ3_aW3ic2KrSfH9jIw0vQ-IdIc8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh6d2s0djUyZTV2eDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HMsgDRAooPvHvZnyaLTCUSLXZIGEcuR9NN_8hgrV0Cg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imxva2RiNTVvOHI3MjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vTd930LigwhMJgBbKig8bIKBD5HCMz6m80fyW687AHo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhqZXhlOW1pMDdsYzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dhKTnBNsOXoVtf2CMZkkqL6wIsrfdAh40Uza_uj1ukA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRzeTM3MHF6Y2E4ajEtQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9ZGXg9KaSZodjAeQ3_aW3ic2KrSfH9jIw0vQ-IdIc8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRzeTM3MHF6Y2E4ajEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9ZGXg9KaSZodjAeQ3_aW3ic2KrSfH9jIw0vQ-IdIc8/image%3Bs%3D5120x0%3Bq%3D100"
  ],

  videoId: "itEE7sQR0Kc",

  description: "Peugeot 2008 PureTech 130 EAT8 GT din 2023, cu 38.500 km, motor 1.2 PureTech de 130 CP și transmisie automată EAT8 cu tracțiune față. SUV în echipare GT, cu faruri Full LED adaptive, bord virtual 3D, scaune piele Nappa, Keyless Go, navigație Premium Full Europa, cameră marșarier, DISTRONIC activ și asistență unghi mort. Mașina are un singur proprietar, service complet în rețeaua Peugeot și jante din aliaj de 17."
},






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
  ];

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
    `${car.price} <span>+ TVA</span>`
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

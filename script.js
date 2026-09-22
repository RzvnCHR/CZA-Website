/* script.js - */

// ===== CARS DATA =====
// NOTE: "category" powers the homepage category filter.
// NOTE: "videoId" is the YouTube video ID (the part after watch?v=) for
// this car's presentation clip. Replace the placeholder with the real ID
// once each video is uploaded — leave it as "" to hide the video button.
const CARS = [
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
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFyaGJpbmlxemF0dTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wCnxRQKzDcLD37LlZ5LDv-B_1Uw-S0G1q7ySvWVt3Z8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imc0YjI3OTdrdng1ZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7g4vDbKMSecffqGQCMaLOt5Y0lJHYfpYyjweoduPJvo/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZ6bnNiODEzb2J0djItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fMjZFUSSfBbUVyigJBVdz9DIMA5sadGK0ddNu1oSUho/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNvajJvNWluaWwzbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SYT9H3g0eRS3Lm32QAutbT8SPwsYkP_Ox6Hhv7QlgGI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImMyZGFsajR6cGxmODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TGDeQo9y5YKmtR5iYVyhNoJgacep_xtKOGIsO6KMjY8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imxlb2lseXNvazR4ZS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.f3WvI1vKfAlF_lk-GNg9r2rP6uUrlmsfwrU945rEU0M/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImYydjV4bmFzZWs5bzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.G_UUe8b6k3bw-9ghvkaDH0-ogTzpmULX_yjxrjMq_z8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9yc3Z5ZHM5MmR1NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MiOmSaff5w2A1DfwkBQWjZk6v5U4tij3HFKSaHcnY80/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJmaHNhYWxmMXAwdzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.cylmJUDp56F3PwzVLGfDK8ryIFpYGjknMV4h55VgQik/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR4ejR3N2thYTUxaS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.k6mGP9F3B1I8bYh7UI8pBdofCw5WUb-PUHDaK2t7LU0/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlxYjUycmFnNHVhbTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.00UqekSQPqLwvs1jZlcCCaB8UpjaRv8cJ6DnP7Qa_TU/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRmaTFqYjgyOW5idDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wHNL0pxdBD5ymJwZ2euSfqrHWgHiSuc2UBq92ziI4-A/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ2ZXc4Nm5lM214cTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.rZN7qKtYO_2ypX36OspX0SuVTp1433LsovTaiIFJqJY/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpsdzM3ZnM0YWJiNS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.TfOQ4bP4NS0QXDlikpANUXyOr87MvrI-qEh2W7O5MvA/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVpaHhibTN3NnhiZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.CYRwkzmDqKh2J0Q_KEUM3b0fOkUjn2PX_9Rh_vPb_Mk/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imd1aXE4am16ZXdhbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sVAPPc6xN-IjL_ydvjyUe9eAGneat6ap959LSRv-dA0/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjcwNmI5aTNpeG5tay1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Q8cbv3fyiIRjHPWIlXhpecxBSEEiBunXv6x-XI05bg4/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImpmeDF3dGZ6cDF0by1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.RVK0f2y9NH3uC1us3dsTpUhF8xKW4lpTHY_PrBN8eCc/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjlodDNqNXEwZXh2by1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.G8ZlUn9CHgvRhCB8LLpwx0SbHB_TrviqlyNMDfMuh-Y/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc2djc2czJvazVjNzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HBb9pS1N3rp_Vvy5POkekwcEV7ijOrkl-MuPKXQp0S4/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im80cGU0MzBjdWhjaC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.hTemHulMxWETQQOG3bIkDu9lFlls-CJ9fXUbjextYKg/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN4NHRleDY4OTM2MjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Pobj8NAsn5unwKFViXaBO9b1obZ2wQI4WG19pUldXkQ/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inh5ZzZuaHl6dnR3ZDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.A5Wd3DZaGy1VcswxuRy7zaLStHbPQBvV6DKY1Ahf6S8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjA1OGg1WbgxMmw0ajEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.u7vw7sYM1Epap692unFOmE9qfulQdd51-gUlDe0bhO8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhueW1nZTc2aDlnbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19._UQ4ya19yW9W9Zn2vh5BupmkW-dLZKEjxwoshByiAkg/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImtkZGZ0a2E0NWxmZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZIkDmYIF2R2c9vku61Q3VM8lOOOyDNXsW6iffngqFO4/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9tN2FsYzFpYjZjZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fjBIGUi6q91jOm4S2LicsUSVbb_HFr4uKBEvj7kcQUQ/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InAycTRrN2Z5eXRoby1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.cU_LVmPHtpzr2ScbKyuDFb5UpAQYQFZ7_nT_qpstaug/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhpbjJubXVmN2JybzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.i8mymHOqp83cwq5P9VqO7E3u7eaDUmTJdJ3lyl0_saU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImpiZTlxdmsxYTYxYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dTR3bvgyazHrd3h1X_W85_LFBKap1gXZeS-t9J1Vwc4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9vMzNyeXNhYzFwejEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.F0QRuo932eqk1o_dM-tOQ-LUsXonaq_4JlayO97D2MQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVtdjR3dHJycWQwNS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.N2dZJKTyib32AzL5SduQIPvWp77VMZvlKe2WF_Yq0FY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlrbWRxNGxmb2ZvajMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HFQa-dJ8ssXxKuCMcRUjHDnZDPxGdvJ0gilSO6PWMy8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ4YWF4ZjYyZWE3aS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.hi_XI4GNvtnr4CPx2CAyFjZ5nWbhdHfbHBZ_0fZJh2Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNkcmVidDVsazRnZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.O4rXiCMNtdLfHhSM3jiRgbsPSwvChnqsSAs27_gW2ek/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBhdjQwZmVhZGllbC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.UffCFladjPCxyBdmOPe69uuQj9Vw4y3-1gYN_MhfHNo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im56ZnNoMnpxNnN6NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yH7T7T_Agx8V6WOqvDVDJSEnB2i5Fg4fuahKzNUEBak/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imw0MDh3YW96Znh2YjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.k3d_mGomjHOlCgj9jX3SRqtlXfmpKRLHpuddho9jUgs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQxOTFhY3Vzb2tobS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.zxsT2HiMC8TSew4ePi7tXrmfe0QcEGbsWbdxXEwsnXA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVhbzRha3V3ODBsbDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WEcz5OhsS4paZBM5mxZ-O0pW8HdRPyCOdf8_dzDxTQk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZtcWN4N2dlNXpoMTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._WdA594Y_3bailQGK8LHc1wiELTmk2JhXOiBrUATPks/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQwd2pxemwzeTlrZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JeemlPq1xg_-NI2_A3EEwGOz_PgAmBkBdXnmYj9YMPU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijg3ZWRyenA4MHdmdS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.E_tzlEE2z7suKblHjnVhiQk-cFnnCrVY7IuNMw_I_1Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB5bXh5MmMwZzZ3aC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.g2ygowiNZZyCz4rqjKmKZYTXE1D-7WEbRu2SMvrvSW0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlmODM5bWhreHZycTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.DxWGC1FzK4o7lviZEcoQ2FQSpxTKiwIc5cCXcQwxkLk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZlanIzZzFqdjd4NDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sycN8Heqq-c2Ed3W2_EHzZXuq4TWz-Tg58B-R-9PrFM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImphYjFwazVvZHV6NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2PzLnu6BZYrYiIooAAiqg0Q24G7OyATUXWp0pTFrzr4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRtd3d5N3l2bW9vMS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.9lO4Z2VhG8sGxj6b8xL0w6oP8Q9r5xJ5J1Q7d3s4k9Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlhajA3em1yNGl5bS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.hxVn0F0AU5zdfjxi2-QVmk_3uMXy8iWwtVHHZrIzxlg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx2OXI3b2oxdG85cDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yv8SeyAQdce_pnKH_MA2Fqv68jmOz-2eQEBMvQcLvTU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxhdGJpaGQ0cmlsbjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.FFDW9Agun-YR4TS-H9Bk3dRiDqTsmB3vJIkDt3JbDn4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImphYjFwazVvZHV6NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2PzLnu6BZYrYiIooAAiqg0Q24G7OyATUXWp0pTFrzr4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlrM3I3dzlhNmhvMTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.l-YPa66mLvgsnaA7cc8QZRJJrwEPNhU-pt0_95KBTqQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJob2NhMHc2ZWpkZzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.qC6b64sb5WXXxfMqPAs9w5UtbFK485QiNi2X6SWI4Es/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZ6NTJ5cmdvZzZjODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MIsbwiH15zTEzmOFXACsP9wCQOH0uHEj7broqJtZfG8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImViaDFlanBieWxhYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ivu1pwLliIm1F3S7za5mHRCnTwpTTB8WlTOMlVqbrM8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Indmam41ZDV0c2ZjZy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.LawPlmi-NQGTfdRf-XE6fhu5ITxY5haFV8fppasRevI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB3YXYweXFvY3lqZzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fRFUbIqNxujwoCePflptp-F7WhK41yAsguW3d92AGk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjkyMnU0bzR0cWoybC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.k-M7ayGLNOS7UWncKO7gTNBRx2kPmfaHrrpamBpySww/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRyancyN3pwZGs4Mi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.mcEoM_K9S6_OkJ6346SK1jCbj3Tn6UEzXv01Ez6UJZo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZnOHRsdHdiYmdxYzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.DaySYFr0shwr0PJMtuIY0YdraJyw7ARxJ6kuAzezaKM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImY0dGlseTRpZXh2MTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Uo7LZgHFMHCdzNmcmf_Z6Ij4rm7guUtFfmFfjz0TV9M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRzNnFpazQ4YnlmNTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vdgiWxy1hfbWKHAzZMim_cYzDll00zEXFgrOJl4b5ZQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVjaGtpeGxvZnR4cS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.D7ccuncZiTLX2R0UPYlDbRtrRKzwZP9z0J-cNLvW-AY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imd1dDA5YTFzNWdjei1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.inELP1F-ho8pRbmEI_xDnrC0LBkqq70iej3mN1HtPE8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InczbXVreWwyc2pubDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.C3Wnv8dOFHnynDJKdRnwjloyMs3irGXf0wgC9X-IR9g/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJ6M2l2MjFvcTFscTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lHc7pnQyPKgTgTmPejlurinfwmiVmtSju5Wbu1fdxFU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InYydmZleXFicmlpazItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.b_zlg8GvLuls2257svAZLuR-43w_CSThGVwWHbLskuE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjUybnh2MGRmNjNqMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oFA5keT1GpMgDO-vpEwKaRu-slaFVXDzlwzLYQe3dUo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5zamc3bzJpaGp1ei1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.9bsfP-Xd71F-oGN3foHevf8YljfiFcTTMoUUIGwXciw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjUzNzNzeTNpY3kxay1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.mjnzdPmvKzknzpWtIWlomfV1Q2EH5ThDlFsY9BkO-dg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlidDJrYzA1cG96bzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZoEHV8lgP_CsYlMkGyPwLD1sHd_J8QmFV5dn-NKIrP4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijk5eWhscTBmaG44aDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yJhsyWkiHj4V7ORn6SJzdEFh4VwZ6u4MFQndloa4ybY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRzcm80a3Q0dTlzajItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.BzMytPi-FHmo3hdIvbKqzh2cCvBDiwfBaY4ecdv6rjw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN3bmUzb2U0aTQwODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kaK9omxtt3hlgjf2jPybW6pKBTB8Xx9eUVKc9a3oGtA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ4amVsOGhlcHR5NDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3EQpp3o9ELZ3Ie6Eeg8h1wrDsIwEKS-zV5ge1uCNiDM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFkYmtmcTRnZmtnYS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.jxutKo4T-4VW42lMSDx2yYTx8z7MjnS2mx5TzBJrYv8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5pY29wOXY4dDlmcS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.uoxi8XjnkjYqEzyxv7TzFFPThSvw54EcaOq-KaTHfaM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM1bmhxYm9uMmN2bjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.QtSscuQRGLlv-1gKU_DJHpTHl9lmtkii0_gNWt2iBBo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InY5Y3NnbXcyNTgxODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.1Q8yxE6NimPgK-nTkXv9CSsJrNZh2jWLKSgqWEc80Eg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxqaTIwajRwcTU3di1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.VyJ2hnE39dfVRz_lX_puvDbeqUIv7WdjFZkRzCo82YM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc1anViOWg4dnFicTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OX5hI_wqtnIM5HjOYpNSwZlwiBaISJ0ISXgRiQiO7Xk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFuazluamJ0dTR2ODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HcJvuNGoyshIk6wDCMeoaWJVUGk7uCGk1T1oZuzvjps/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImIzNm90NjE4NnI4NTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wCRmE427mwtssBOGzQdH8yCfbsCJ6cB8Azt5cdZLzxg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA5ZTJxczUweWw4bTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XKZHA43negRwWaQhLUD7p-d1ASY9FEMtHdTDWyqLuyI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjlnOGE1aWlrZGVpcTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.t1kQjP_eOJqZ0C44v9yDKAjIi_5HyPgpWc7fFdjKFCU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImhkZDl1cHJva2U0dS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.3Rj8FBTb8haz9EFMdHl96YTDMeWm6N5P3EV_705GPVs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFrM2ZqcHA1dWd2YzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fXNDFW_xnH4xDeewT0pjkHa-rM0Eu_kvsS6dyFH-fOU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjUzd2oxc2prNDFseS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.MnNAHEI-Egce6DYohPfzYlDrWi2h5wSzQ72b8kvroJo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im4ycXl1azRweHZpNDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.zi7frinbWByBcVjkkcsw7rKu6aBO_7FCt95Kl1w6e7s/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFzcG50bHhheXFmNzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.h64sDxAega7r19HsX461DvoQ8YF_UMUtUvBWzdhiahU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc2MnQ1OTRxd2VibzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XyXzsHp-zgCEnIDAwefWTywye1f84SGlB3zojB-f0-s/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9iYzdqNWlqazVtby1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.8TfRkpbYaDu8duaRK2u1ZpmXPSipFUfQy5BBlmc1jfA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndhY3Eyd3kwYzJyNy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.AXWUXNIBiWvyjX1fr7h3u5DG-rS291osyPpxIYvA9UU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ0djV6bXd6Y3lobzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._5j7IVOVci1RYuUXAL8TfR1gQP7uHGeOPgNPodAW48M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFhM2hoZ3huMXdiazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lhx1w54bkPs85s-unSBiVlJjwpVAcAgqz4Z273tzUik/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im02c2c0N216bmFyOTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.A-k5pTTpU4qlZ3lGPkJCmoZcDJy7XbcTHLsdfkIA57k/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBqcGg4NnlzdWxzZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.FBVAZjEvPuxgeP0qJg5oy8UiZFM1eVlqfc6Rx2dID7c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFzNXNnYnJqbW5xMjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LnbAEfwLnN1StUw5TvC6_Apkh0V-cvtL4mizX2MgRXI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Is30HyZVRIs4UgvpK64yXl6_w2rLYsj4hl3dDtJugX4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InIxcWt4aXNheW54by1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.IYpkWIjqlaiEg663428qNK_0Wd6HIMpg5YQPAZPukz8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBqZ3p1MWlleXU1dTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.NYpPaKjVpOKem-Qjt3JYPiyxn-FDeTCmr_Rai56b894/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imo1YXdrbjMweDk1bTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3pvqwkYkNPlfAP5ye6_vF64bfiYv3G48e06wtcahfY4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im91eWRlZHZvb3oyeDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fC3z-0zftIy5OjFiJ4NaFHulW7PG1vp1KRcKVI9f1Yo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNvc2Jia29yb25kdTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eL6cuQZVERO8wUIDiWzffC4noPYR3cDLhkvsfD7Tc6w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBqNXdieDBhdTV2dS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.O9cC5fiaBoJdkf-eRpoKJWLVojpC5zcPRUYj08fh-TY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImszemUwZWloZDRodjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.VsQiO2A9_NkoV5R3m2KPXvegpnMj3O03cDSVqRbN6zk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im95aHZxbnhwanpvNDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.w5VZkoXnWCwD_dpal867DioB_w8SPyDlbRe4EJVHmg0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InIzYWpibjE1eXdldC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.7GosSv7xdO5-MroOeyKbSf5W-gJ_LEkrdvkIoWHBVzs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB2bGo3dmNoZXI5ZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XkT6OK31LN9oOL3hRiOXRArmIEP0G4xCXovB2QLpyjo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNuYW9hdzdlandhOC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.vHNyndkc2SHNx3iEWuRDe61QX-obeymUTADr3eru3kQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh3dDhldWZtNW44OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.t3HLaHFx6xGFQsoDitUQgShvWZmJcGLoChtpNDRiKoU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InljZDF2c3l1Ym45djItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4BNzAQyIh_lc23klyLQfm2q2u8pHDurqPZsgro-y0wc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh6b2xucXF6bHEycDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nROZrw2TwPFimCkEeFK2OOlbbuvhSxxr1fDZmWC6PnE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBvZTJtODhlYnUzdjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.khF9edQRJ8QxT21kvmPRqdXOSjTWQxwAgYI64xC7GpA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1oaDAzdmtjcmY5MjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.e6hHsAni-PFQ4iQnA3cT-ieQDYivrfKpysb-_rqdEv0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im91Z0M4dmYzY2I3NDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZRtY3kBHz6Pc1vonl4Pwh4hY7i-00Eix7v6KUPevuoM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ1aWxhYjZzcjlxZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.d2tr607ZM5ddr4yDgVo3R2Fn7LzyLqEW4jeyVKpZQyY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN1bGpydGZteWdxcDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZT3_INNVYrf4FUJJZo_cN5EsRVCvj_Et-bkyPKJptUM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhwcGJrZTJ0enVmai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.WTQfz9elJoAyQHGGTmZIaqrPk4lHZDLT6PofrLsVH44/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im8wMmVlczRwMjY5Yy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.CiUIN25661gz5nm9DlVjVvY8OoXPdBoGvBFzd7EgWkY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InppOTdwbGo4MGwxdjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uOUD_3hzIFLgFVOqoWwHIkvD0sA5b1y58HgKO-mesks/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQxNG93NDRkdGRtbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.CshPwgUxbWMCVXoH-J6_R46yTfyKJFVwWu7sHhFjbgE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imd6Z2NhMnU1MWoyaTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.6jxFnzQPZjrUUSKWwxa61rvwwU9B82lvlfVkAQ7pkcY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9iZ3p1MWlleXU1dTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.qKVto4GZcOOblzqzSklgtKdSvRPT4RFhiB6zrZ__7-8/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imt1MmFleTdyNW1lZTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kqw9S8uviZgzvtBm3h2aCkD-v-7W2-UHzP4OoYeq1Wg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImluejRhamVwMG12czMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XoiZne_GA13f6Il9NPxhCWKbsKNkJ6kPT20bpc4Gkns/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJscTc0dmM2YzkyYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OciAa3e7mqvM6fDhu4JvW9ulrpP64a2c1wdUlyfrEGc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVpeXo3ZTUxYzN4MjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.A79jr88ShnNiDWwMMbVP97WFWPUdex5zOAVf_Ha7rXg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZqcWNnZGloc25odjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4RlrBWHqiiIIh-KKEmXivS1Xx6l4WiWLIOxW--z6yIs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InkwZTg0Zmhwc3BlMjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.87eB_H4mrr547VWS_vXrxDCyQFTghMOPQlhaP3NQeek/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijd5bTE3dnd0NnhqaTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.0VLiN8yNVpSeBPnMY95hYccWa7BeoDF0_QRU7H99uac/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdwNHllZ3FxejMzdC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.-KlbVzCK6nrH1hBZPI5yZf26Id5L3QfQV_gSevIUSJI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZ0Ymlzc2Vzam5xMTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eoeBaIhGXcEtyDVCg9sE_ZFgqMi7dWurhr6qBSS3Iwo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImV2MjZ6MGlwZGlkMi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Qvf9usFM0cC4veW4v_lPqQ2ATNXhPXfb2fjfQCdj1VE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ1anp2ZzlndmJ4azItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.96qZqEfB5qhCyamUZmnG5y62wkzUAF_JpLarZC9toR4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImppeWJ5dXA4MDd4bTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.AhMy3YujXhqv_udRgkQBnFMswN-EsLEFVXy9tsJ9Ytg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNmY2RoMGFnYnltZDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ATPJ8G3D9dAZSe_eiQzBRNAF14xDeAYqhluY4yQzFJM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im84OXI1cjJvMmQwazMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._AYTTRhidx-s8gVzd1W06H4ZOpZHNmcxh-DTRkkDOqU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRrbmgzNmkyMzB5di1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Owjiqx-bFcYH3Gsk0v2dTaDeTQplSzkwGoaUaZtfklU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImV0aG10emt1bWUzajItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.YilhFV9ous0pqneVOCA2ew4SkL29BdnfCUWYWylzjas/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl4d295ZzF4OWY5YjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.W3r7aRdWaXLXMXW_BDO9ICsmVu-BjY6Fg2lKOUwi618/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imo2d2liYTlnNTVmYy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Jc_td_02K7i6wdBP6D2xYHzpAAnAaWhhpmQ0AJuARzY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJpZGR3OW40ejI4djEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oHM1zdC8MMKOjczebOF3xloGXfeINzWWJi3c0VIyu9c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV0cWU4cnl4MWJsbjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.w3KuCGFhdOIA65xDhD3Nz1chMYHp_qnJn3t5H9kni7w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBnYTN1bXZ6M2lseC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.JaikEtzOsVdyftReE4l-deDXishIS1hBbD7lKpJ3lIo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im15dDl0b2pzeXpkNzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JWFXD5Op5rqr--zlJA3solIfvA9Onppra8IleSpQtF0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im54cGoyY2o0amdrbS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.py_7xojTBNaEvtYkoOxIW_ZTuhSGkjm5pUo7iCMaTQw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5uejdtdXBraTM3cTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.hous-qx4slqiodrZDCpIPzzXJLtGsq3zkdhxq7McekY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijd2OXFkdzVuenJ2NDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7xE8C6wurkGZwNfbqJNT3psntrsggZrjuEgQpMcCuDs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1hZTZqY2o3OGw2aDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kQIPlx4CKeiyB7bSWMuRbtRcuSp-DxR6SZmimhjx1JY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inl1Mmx6bTdvcmhiMzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.f_ZE882smbhQ647c6fKe3tS9ZWiIN97jeERg_rTKiXw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im92dWlvcTFxdGVzMjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MuUL8UnSlNRikJgXEPQik-pNmFzyH_hXTjVIt7ErzPE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM4ZW81Y3BjbmE3ZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WyqT2Xj6e69B2yWBUQTGKhAwPwvsUj0lAgpsbzDmRHw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZtY3l6NGRkMTNtZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Db-8MZXS0xuAXJ-b2XqWre2sBqfZFYNS9CIhTXbL8mY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNhYmhzOGY4MjMzbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Dzv8QERxwbGhMxUGOSTBXiMvb_rPrj9uXpcuBN5h6KE/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBwcG9tMm5wOGMycDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Hpj64N4kU-ZyZDwn5mI4wC032aYao0LUkXPEZchb3SE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imdrb2d4c2szMnprbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.qyJWjG5sNNF0qMJx1OP8B7uXpJDGrLOeGwjZie82HvQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZhNnpseGxzbG00aTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pkrbv_S45uFq04Yw-fyKjszLFiIqrMIk3FdBhA9Y0oU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijlyc3BlbmJqeGk1NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2XGWJlM4xjP1VXiNubJqTn-2IsGRwm_U2pE_O1gbPqY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZ4ejM0ZDdwcXBtMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.z1C2Gxkmx6KJRRl_aphg2AHAmaLj2OZzlYYuAYaIBM4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjYyZmRpMnE4YzVpcC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.zEuMcSQSiHeggDQVY_5ii6yafqIlXi-6HCvDZew5D4U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRwdDB2ZGM0cWVlNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lerG6jRjM2mTgB_IlH-_r0GoojkMhgqBi1aShs08JkA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InU0bjRzNno5M2c4cTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EQfK7MKod6E7KKvNs3BjyIh5SvPx4uGwUB9Yg8tZv1g/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQxam5vMDg1Z3c5bi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.V5Kk5empioLLFSNgTXgxDs4oBGvO6qwD2dFcZCVckUk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9nNnZpMnV1bTIxdzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.puW22YSUiezF3mz2vnQcWrUYCelG5nb0LsWlCbvWFQk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNmZDczN2JoNHJlNy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.3pFAm1m04m1qV8tV_G7y8rX2N_KxApkt52wUEtqHjIM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVwNXFidTFrNWUwejEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._vGI4O6uobiW22tSl1bNlvUze0RSTL2I7P9tO6MpZaA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjMzZWxseGN6b3hqbjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.BM09CjZvoRHoohsF32ZpBoJDo-qrKg7W2ucwfcXl4J4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh4em4xdWJvY2lwdDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EEkaCOSF_Tvq6c0FxtvgwDC7kf6qOzseoVcDc1fr6io/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQ2anoxaTQ5bDQ4YjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.76lDLxKMY32b6qZnaQekmX3PDLPICQAYaruaCJInYKA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQzdmZ6cXMyZ3V1czEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pqxys2hnbU4LKwIB0TKcSTPYI4y4vF4iUuZQF9mnSCE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inp0MHgzNXZkY2ZtcTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.UPaHabcAl2VfuJfuUMIJfNLl0dcV7iKShS5OKTitwFo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjgzZWxseGN6b3hqbjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.BM09CjZvoRHoohsF32ZpBoJDo-qrKg7W2ucwfcXl4J4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImgyYmN5azNkb243Yi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.o5AzRCcvM4JcePvuVqffFbIgEa3Z5VWRRff319Tm244/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZwM2Q0anM4M2xsbTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OfOmDjxBW1HqlrwynRB2nB9QlfDtN0eAUzoS9ycrX4Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBvZDFrbGNyeHNvMjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7Vjg63pQYmqHU1A05NlIY2OC1x6EjXtKSg6Z9Dm8BXM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im0xdXZvbnJvZmJiYzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.VFfD01t_EbZYUXZjyHXUTbUUCmWSs8n99QY07Ma_nI4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJzN2xqdTFlNXI5ZzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bx7X7GJbJO_W8hs7GQw-_MkQh_-88Ip-uKEgwcpCkKY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQ3dGlrcHFjZDFiNC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.z-T9wGEFSQUjGRiB77rTgzeHpT1LJHqG2ZNimh3Sx6I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InIxbXB6YnBlZGJkNDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._xL4kq9NUZvXJEmOhWjBhfI2XUPctnRH80H8Q1YYt4w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl4OTAxM3B5MDI5azItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4qomjH8b72laQSe8KoU2u7Mg1PyQzLjnvahpGeMUwXU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImYxOTAxM3B5MDI5azItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4qomjH8b72laQSe8KoU2u7Mg1PyQzLjnvahpGeMUwXU/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA3cnphZ2FheTh1bS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.7kbONAixFbtRlNlzq2Ofj0lsc3B12hXxYIt6nRysk1o/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBtZ2t6MGpmNmY4djEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9_BSzHq2ahBqIYWegmL5RXnRp5Ip2M2ayz9RayFYXB8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFpcmdhenQxNXpheC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.6jHKQZFuuLMAnMeTK9646Ft2CDK3EmwafTuXXQkfgmY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNybmwwbm9uOHphazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.V3ExMWafSGLY-YtmUpnopbMsSpFew6La_OJ3wNU4mBw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVvY2RyYTFwMmIybTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sxJoZw8lGP3VVwpMpufcLHmQabP8QjMmGwKRpRwKK8g/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5xdjQ5bjU4enR6cDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OCk_DBWECFhanyY1pgcBfCc0nJgFAwKfYHsvdeQJBRk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndqMXcxeDV1eTNtdDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Yz_Oqp-OMVfuTxTcsrJKEVEtP3UfSTAr7yfLVRJm0rs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ3M2s5bWJkaXV5YzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZOManTiYskG3by_KhvLDWnE-Ha1X_7lwKaLf1Fr4960/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpkZ3NxdnNlY2ZoeTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.1AnatqHH1UQjbeN5NseyQTCNi1NsSyGb_6sdm6U2StE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inlkb3VsdWQyamZkZzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oOOpHizxVSz6O9vxaEf23XTsxchqOere58qHB_2kEgc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imw2YTc4amMwYmRxejItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KJf5HLy8yat1gXv5_DIcUZUjeeIUvw1lyHkKwjcH2Rc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1sNXB4bzJsbGpxazMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ROYYR-WBrCjD5iMAj64cKkDsZgrvAz7M3bLU8-op1oI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImE4cnVkcTZsaG5zdjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LS3MtG4djQjCMbKVEhCFgE2v6cqVgZREriMTmNI4uK8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRwZjBydXI2YXd3eTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LGjll5O6r6jmNZwT1wVSppEnKEH3UcLHZZoUAZir7xM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im91Nm91cTdtanBubDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.elSnPlhN6vaJmSJpmYav-Z62i8C4Y3DykW09gOFNJ-0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB5M2RnMW9jaXhoeC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.7wYTP3_bamND2BRZm2BaFeq0-W4zxM0BwpiwlFDreUU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjEwZ2d1a2tmNjBybDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ByD9E_RYrWAPjGclTqMKT1LWbe1ilNSDuHrj_B-Bi-c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFycHo4NjM1amIwYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4wtoMH6jKF_8z2ZrTrzMQh1QXMgzMOcsyU-GN9JTyQI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImF6eWRwMWN3a2x1MzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dnGgRRcL2mgpIMtlYqFcn6wDGh2r6nJqW_le9Jt6vHo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im40d3Jyd2JiazZnLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.waPGQ4bwpbdTfjKKtZp1QmlS5oI3T5sbKCTK7aLawfQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBiZnpjZGgyb2U4Zi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.5txe9-LLwvly-SdjPr_Ji3SjplC7r5_YVUB-kq_-kCg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA0bTkyM2N0OWE1ZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oVaxODb5HHBsjWgiAW1ZdUgiyFszqrAY_fVC2KTtvMs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InF4eXc2aWtmZjJxbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Xq3jusdE7lX6g8jwWoJh87wuGu2aApwVmsZAEBabvkI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB6Zjd4eDI5dWswZS1BVVRJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.AxMUwhNkgzfM9I3aRzfcilu2hEbRWr6Gdyc43iC4gYk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFxb3doZDRzcHR1eTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LNco9JoFLZ3lEU9TgWGmt5mZrDPKjbAFYes8TZa2R6Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZ4aXNvbTRuYXllMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uo-s8GGImVyN4cxpvcUoQhpnS70rRDY49Mui_Ij5ZsY/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InU0bHQyZXZvNW56cjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.B6Nz2VJ9x3xtkSws3LYKZ7Fsw5O5KPnheDDIzDI6geA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InF3emQ3eDQ5cmpqNzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lGsH4CUHgc6-4z2XD-kpfUxezp8TV6sh6u8CxihssOQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBpa2NiampyNjl3cDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Qaw-5zQeMPFU8SHkCqq_KvmWRbHiavRdgCfNojD3xAg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQ3Z29hOGJ1anVuNDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.QikD5I9I13fEV-_mpiOJst6LZdq3blcWlBiERm93hRc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjA2b2RmcGk4bHUzdzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LyT0Fn--0qOd8uaq7zGT6KJt4vDtSjjwT22vgiNR65A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBuMnI3dXIxa3ZlcC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.k3EzdZLnQH5iGNEJ8lkB5IrxwqsvQ0bPkBHhz5rP2nc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRzZHFnbzlreDV4aDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lAYTtfMtjx6kRQHiCmUSBFDWt-g4jBEQj10WhSEVSVc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZuMGk2bmpjeGt0MDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.y_Uj6jQMPSJuA7QfnEt1TYj6IhwooFGCr15EsOoHKfQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNjeGUxdzU5d2RqMTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vQncqmbq60dAsjUtzwTUSaiivTbpN_REX_Lr8sQKZZQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InViazh2djNscTFnajItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.qt7ohq3YuqWsnmk_Llg5Qe36NfnaOrAK_3ZaHUVdE4U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJ5bzVvNHg2M2QyczMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.54DDc4h3xnTtY5dNyNwR2wkt9waSIRJpYQBo13Of7Cw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjY3aXN0MDZyaWRkOS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.FMt_QheYzBNB_uYn0hPCu-OZ1FWrujJLLie5pHiC_I0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im56MHdqMW54am1hOS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.1PZO3U6k-o4aGZKpcKKzl_xUGOps7MV6GzbYlTTSb7Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImF1OGFxbzE2NGQzNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.elGh7cYwfcavkYg3XKca_Ei-PNiRgR0Kw0WNzC2EWhA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjB2YzAwMmlqdGFhNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JwN5uqChHGoK3lqvPVKko0AASPz0NbKDBdwP--7J5k8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InI0NGRhYnBsaWM5NDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WFuYcIkZMxdHxwRIb9CPWib7SmIFhV8aZaBQI3i4fPk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc3aGN3cTY0am5jZzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.cSA3VOdRHlgMK-uqHaTtSvrgeBsWQ-zomAILMu4AfH0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpkMHNpeDVsanIzejEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.VSWvD55-Tn8Gzi9FiOdGdBW8kUkA_X_PV3q7m1Vmj8k/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM1dG9uaHYzODZnaTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9Zx_kjI4QVUXYm4q_atA2JjxKScvlziMJOaHk58auio/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijcxc2lrNXRkaGMxMzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4DH5cmffizWBAJ3oUIwLgI00KYcpS2h9w0AH6l19HlM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImE3aDVrNjVuYmtnNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Goz9uYQrfJGHiBJPrYEInOP87R0PnpD0xzYBUnPQ9K0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBuaXZmdDc2eHg2NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Zbg-oZ1mWlysLwjrDDticff9lyqzJ8ld47ep6reIXiA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9maGZodmIwZTJtdjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.p2I_7Y2Acf6hWfAROZP-AlQyogfa4c4EmGdjqfFjVVE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlsNThpeTdrNGg4dDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Yj9x4A4Z5D5RTimIgigrPFUFz-96eOJmN26gaKNf5Q4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFycHo4NjM1amIwYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4wtoMH6jKF_8z2ZrTrzMQh1QXMgzMOcsyU-GN9JTyQI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImF6eWRwMWN3a2x1MzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dnGgRRcL2mgpIMtlYqFcn6wDGh2r6nJqW_le9Jt6vHo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Img0OWR0NTh0cWY4MTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.CiuvS_0NdF5nAYBXqVb4YETqI2mrSo52IQYIGLt5woE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im40d3Jyd2JiazZnLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.waPGQ4bwpbdTfjKKtZp1QmlS5oI3T5sbKCTK7aLawfQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBiZnpjZGgyb2U4Zi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.5txe9-LLwvly-SdjPr_Ji3SjplC7r5_YVUB-kq_-kCg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA0bTkyM2N0OWE1ZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oVaxODb5HHBsjWgiAW1ZdUgiyFszqrAY_fVC2KTtvMs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InF4eXc2aWtmZjJxbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Xq3jusdE7lX6g8jwWoJh87wuGu2aApwVmsZAEBabvkI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB6Zjd4eDI5dWswZS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.AxMUwhNkgzfM9I3aRzfcilu2hEbRWr6Gdyc43iC4gYk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFxb3doZDRzcHR1eTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LNco9JoFLZ3lEU9TgWGmt5mZrDPKjbAFYes8TZa2R6Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZ4aXNvbTRuYXllMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uo-s8GGImVyN4cxpvcUoQhpnS70rRDY49Mui_Ij5ZsY/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjlwZWJvY2s0dTAxMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.IQkZSz0lkD4g5DJpXqTVI3LiuOSxwOCVaW5wrh-AL5M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRmcXhvazExNXV0azEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.W3Vx8hEi8VIBABhfBEqkDLTI2qLm_MUtWLrPFGmKzGU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBzbDVpYWljODFmZzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TarTmT-SwflpseUP8EttLgPo-HvmhW9w0fQ2f8GxIjI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNxd2J6ZHVjN3pxcTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XC6LbD2j3Z5lGBys1EPA20AvadQNXkvmBZuvnGHhP94/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB0enA0bjIzOGN2eS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.vwWWbySCyE6xNAz8ePBop91sa3WjioQijnccQvMO4AU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imk1c3RxZmR2M29qcTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.QyIwX5uDF9-q5dAyjJQbX7OhV4099-Ru00eoLgY-r7I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp6dHBsNm1mdWNuZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GRNNb03iIGesXMa6PAgCtpmx1Ke8XdJhVDU1av-M9AI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNoZjM1MjFheG5rZi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.8GHY3S1pOXqsI6VfVPv3MOP1-DxZie_y9EKcaDF560c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM2b29ldWtuMWo0bjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Nbpu5cFm9CAiW5_0xPSTu-bmyjOADBGUZ43-KigyhAI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImhxY3N0dDlrcDdidjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ahW0LHsWFTwLXBoz6kQjVENPrkxWklIkMvkDUdFksuU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpobTNpZWNkZDFyMzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tU4EJ7Bh2RyfXuxTTbsGnZ_d-ok3UcX3oc_UTri-Bz4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQwYThuNDVwbTYxNS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.t9QJjBXGNKXk_0HRDOQSMsjOjQDlf4sbet2FKUeunww/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVncGhoeTdrcTN6MDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.G2sgda0M0Ibo4I0p4OnkA3Augis78pEdkaL542boUVw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5xN3VxNDU2ZWQycS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.77rmX64FO3wuUDjX6peJHioTmxAY9zfiY-sUKDj5tzk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRvcmp1Zjh2a3BqaS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.hmvrGfl1jVP6TLojYoE0s7FcL-wye3MN-jAgOXHRj_U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFyanM5bWsybDY3aTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.1xAocyNLX0hQZetvRtPS1G3Tha7EjmPpqpzsGRBry0Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZ0YXBmM2xpYXQydjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vfb4g71bC6wFLCfcM5nc3Z4ePVMOnDLolveCKKVgxfs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFycHo4NjM1amIwYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4wtoMH6jKF_8z2ZrTrzMQh1QXMgzMOcsyU-GN9JTyQI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImF6eWRwMWN3a2x1MzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dnGgRRcL2mgpIMtlYqFcn6wDGh2r6nJqW_le9Jt6vHo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Img0OWR0NTh0cWY4MTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.CiuvS_0NdF5nAYBXqVb4YETqI2mrSo52IQYIGLt5woE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im40d3Jyd2JiazZnLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.waPGQ4bwpbdTfjKKtZp1QmlS5oI3T5sbKCTK7aLawfQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBiZnpjZGgyb2U4Zi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.5txe9-LLwvly-SdjPr_Ji3SjplC7r5_YVUB-kq_-kCg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA0bTkyM2N0OWE1ZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oVaxODb5HHBsjWgiAW1ZdUgiyFszqrAY_fVC2KTtvMs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InF4eXc2aWtmZjJxbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Xq3jusdE7lX6g8jwWoJh87wuGu2aApwVmsZAEBabvkI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB6Zjd4eDI5dWswZS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.AxMUwhNkgzfcilu2hEbRWr6Gdyc43iC4gYk/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFsMDF4bDgwb2hjYzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.aGWYe_1X5WAzPrJ9aLRr5ojCOhSKy2oEk_ecyvOcgrY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imhjdm5tNzBxaXkzazMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.O6Y9oWdXoyZ8lYM_Q4Tlke1xStB74aiyAbJGmjgGTug/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImllZTVoOGxwbjRhbDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.PPEoEjFfBCCoeuJ8HsmphVrmHBYevYjkHr8jydMuPP8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB6YjRieHBmODJhZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Y_vIR2FO7mOR6fVdAMyL3pDC_Wi1ILGKMlIkLKdea3s/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImhtNzFtbzh2NmMyYTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4fcHWG_i11f73XYPDnjwCRd__hnP1yWtZGtNQ8_7PWI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijd0cDJtYmE1dmN2bTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MC1E2ZP_eY2a58wQ7Ibl7sytZOiDYbud0lmMRbbXdq4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhvMXppOTMzdm9vczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.0PFWIrAPXAfCZcg7k0j795QHGQiZOnKw5-3pHGzHFK0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ind3N3EwNHlyb2M5cDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.30WaDwb6-HYFJg5ylXRxd1v30LURuGekFhxzgOaUX_M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imxpa3R5bnJrdDZhOTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tdi8IJ8__YCnOtqTHK1JHCTHJ_5lWQHC5TjVFUQxqYI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InAwa21hNDN6dzY4bTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xD732QpAkFfyBroqB6tUSC_p4Z4TFaUNQ53nVO4T8Do/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjMzemhyZHQxMGVjaDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tqdPcbqEyF0Hf1LX_Sk3qVHaMtWSFhgEEfrZJI4wAPA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBlaWtrNnp2bXlqYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.al-ZNBAQoWo5N6-HqZ80VFfhE4hbLVu3L384wNn_dsA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijlma3JmdWM5b2dyMzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ALt_jiTYDZjfRO59GQOjZjAsAjHxrejwHD5f97OFnJM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndxenFqbDY1cXBzbDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._2Y5_kskSOsds9C7J_uRsCnjbY4bbpi4QpBsHg-8cKE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InU0d2V3YWI2OGxjeC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.RUMtBl0xxozYqn4bzIdS1sUTpyjwReumwHJmMELXSCw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZ6MXhuemsxdHJjbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.sDj-yGOm-x7MpSNMxTRWA-kvXt5nct23Evg__pHUbiE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJvZHZrbm40NTJqbzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LcOvCjZhW4ftUE_obwqdeyvieckwdRQbr8O0caWPYA8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjExd3hmanJ6c2kzdzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XdXzVsgJS6l6gkXXDY1s0aVUVA9ZXyDjnNNKSxcz6Hk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRxeWs3emFjZDh3YzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._eEE8ZYgP6qPGsiFkW74IRj7pqpar1hC2pBr6I78n6U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjU5ZzNqcHNlZDJ2ODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.NwJ7XTmzt8hKRLksPZM_idsHK9DgU9pehJZLvK4lqR0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im4wMDcyZDNkbmtlZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.awxPWRcz2mTKMxSe059WbINo2htYzRXJGcNG6YZM9nY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQxcmUxcDc1cnZsdjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.s338u5YZ5pIi-yCyIX8-cKnFsPbpZ9cyWraU_pWkmTA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijh5amxxZG9zeDUyMzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RJi4B3mGnTAMxtxoTYGmftjRe54SfRm4gAgk6aT3aoU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjB4aDhpeDRldHZlZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.hcMcR5ShbPoLm4kogPuJlsHxprg_l5619pA-ghJHUig/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRoamQzaTJwdG1tOS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.kT2xWPGGH2J3NemUQXOuo05FRspCZta-3lCGfq3k0M0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpjNzg4enp3ZGgwcDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HY5W75M-29aU2AGbyb5gzY31xTO4-b3CiK5sJ0AJ-9k/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InR0cHBzdGtqcGd2bjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Qmk62n3cQquO5FdSSeXD1enOsv119qfQ4tjWYTPrYAU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM4Z3lhYXE3bXRmNS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.s_sRya0tNpQOGjmt2j6Qy1pzS_gpkQtl6AuaOx061Ig/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc0dnc2NWdwanFiZS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.PddfCRKL0hmJLeqDXOgdB1DEL7OGO-ASdE33zJSJ2KQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZqbzl0eHRxM3hpbDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.y0y9Vhk7SNUFDKKP2d6r7rfjqfMbqkbe-r_MAhpY0xs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhpNm5zeDE5dG5rNjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RkNQ6rlZadNgt9zb9eL1ej1B5pTkrc3EQHcxZOLiRnM/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im40Zno3dDhyMndpZy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GqXjdoS3g7DYd-VJPmHDUzzvEqSbf4F3O0jciVvOX7g/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5hdm5mbG9yazR0eC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.cuNyVeDwyiw_TyBLdMsnAkFXUFg09ukl5-qfl8bxkwg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZrMzc1Njk5cHg5NzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LxZhCaPpjo94BxC2ojqIC3jCoGVneN1kWP40pevaSd8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImU1c3prY2hxYTE1MDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8p5ihHwPi-KpAHyL0DBro5kG-l0rxxTY5E9lM7bQaeI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5yam56N2o5OTg4cDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.QuJR6qU-qbXeb2nH0xCFx3bF4evSrkxex6cafnDttkk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im85dm85MXFkdDBrcy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0pTQWJ9nsi4CoGeCUGQaI2qWHBip9x_oix1G7Gf2r2I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imc2YzI4ODBlZGt1bzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eJEVrawVGHBqOjHJg-MbCZ7lOwx7KggGwPeXLGXPLjw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ5Z2VrNHJpcHFzdzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oUa0n9zuRffkdUj2hRyad2C808wXGo0r6MrHIOF330E/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl6NWxtaW4xdHp6YzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SyJVEaVUV9DCLfzUQLm1aJX3GTd-bVHiS_JlEEqQfEg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImI4cWZwcGNzN3pkNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Tg2-CKHkN-KIYODe7EJznTzrLKjkIP5Be0yXTsVZpsc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjMwbnB0MTNpczcybi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.OJbh0dQXppOben30PL5SIXANuu_u2p-9ki670eFOPz8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVxZmQ3ZXJvZmNjNi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.JNDvK0QmoN12efI__TLdElZp-bOsdXyTWmWqkBt00Uc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVvZHNpc3Z2NDNvOC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Nsyn5i3zmcF29RhJtFf7V8_VYvouGOCp0w6SU2BRf3M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjdyMXo1YnE5czNzcDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lFNwUuGIvxcWvWVs8UNgLwF5EcHChuRTdk_X0yLnnD8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVvMTB6cGQ0d255bTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.K9d1rZ1JSbedvxH3hvkgzolEnWmLWSvRJSzAveoNcN8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNlNGtobmZsMHM3MjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yJaYwQJynsqkRwNUzf-T3yjiSvCkuuqKEZZ2eylVqoQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im04cDBvaTA5YjN4Yy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Z67jmEkRdMYeE0ugSnB1g_1B1AZuThJWxDzsSP9EiMA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZieWp4dmRwMW5yMjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lpT0QGp1dHBLbgzjsBDXvQDMK88vikuA5vD-1E68Bnw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp6ZnN4enljNWZkMjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7XUMwTG45vYKRmZhl5M-vVRu-4PoGa1TFt6WOziiNHM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjlxOGZub20yZ3pxbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.aMkoojHk0ePliDCytxK2mU9CEd3j7MksniocV0_P68U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InppNHZicXFqNHVhMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.gURaLIsP0HknIN68wfO3GEWU3otbWQa7hRXziC6-Sfo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZweDdrc3hlenV4MzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Isl_9o8ojZP43kmt-aiEsCnP88PMT5YnQpYZ-1ugs4k/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1rY3dpYXNhbnd5bDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ycCcinBhf9jp7v0q5WbRW2JL_8jjZgvDmgzkyRDpuXA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZqdnd2czhzbW1uNTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kpDfvnvUWAJx78TI8ZKPB90dF23R-LRG9bJUi2eub6A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InF3amF6Ym52ODF0YjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.rp3baoVJ4BmVDasqSU0DXWZ4Zf8cQtBCHJixfFnQ9xY/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlzczY5ZHQydzRlNy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.AJmfESobFkn2HQhAB9pSnHG8LFhd6L5ClncHZ79V9EA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQ4cWE5NmxhdWdhbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.hcJB2BfJ5QAEYYhEahlVoMrmUFIxNdEIttAyPpnfWiw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhzcWdkOTZrYW15NzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vRq3P11jGO0glHvf6h07IVEwGq1WzKQWbw4exrsW8c0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjY4Mjk0MG1vN3lkLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.JAA2g318eq37OJ8q698M4UDbMofOEe7kboQYkNORGjk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijk4aHkxMnVsNWZkcTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kSnnTVRNDe2sMfOwVWQ0DgUPhCe6vyMRRC4LCEHMDoM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImgwbXRpdDRlbzR3YjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Afg7qvZA3QH493vbDOvlRtQyL2j2oDrEQEDphnDJaMo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh5czN3Z2d6dWo0eDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.S0ToEqHG8WTlT5qUyRAyxOGvRBf8nexx7SGoLo9VsAw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5pdHo0bjVpdmkyYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.DQo2PG5OKz_O2vuMs9BYe4pXfgjzUki1V3qmk4ZrJ0I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ing1bHJna3AzNXM1YjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.z6PchS-NZ93hnC5O7W-RHICbYsncanjGJ1B_2Azg-ls/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InAzdHN0OW9lZ3Y0dDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.e8RDbFEO6bBVaU8p8XbQ36eKJGXqYa62hSma7ksxt_4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlyN29mem9wNnd1ZzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pfO3cGi8vygpZ_WWcFIWAc3Wh7rfSdvpgA41f0f8kAQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjY1ODExbGd1eWVpNi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.BoheeGkPhPrp1pW8O8hux9q2lwrOYLdJ8w7dhZFEz1Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imk1aTVndWN6OTU1MjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.x0FryHfNaC8V_fjHwC_kQyqYMPBz8kQJYO8k5p-jW80/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh5bmc0ZHFzZDMxajEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.D_SM2TrBDYBOpuOgFss1-qMt6DpxjHhyQgURTDmI2CE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJmaHdwbmoyd21jMDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.guiwgPmZnQEIkQTfBG64RRdqSKd9B-tQoCnIMzsp294/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxvNWl5amZ5ZmtzdS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0IIwiiBnZmTrqqbB_N0utku0fzf8UlyuKNHw9E8GNLs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InYxNDY2Z3pqZm8yaTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.r7WFJ7mc_xGi-miEXksW5DyhA3zwuf_z_7WVn3YdKb0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ing2dmVkdHQwN21yMjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pwEhj0gHJcB0E9tD0VkUGTLPbyw7vofPB7ZHZFCD5Rk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM5c3poNXQzNjI2NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2s40GwzJxqySjgQzjJl5TSsstWuGmmo8PM2ros6O5vo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9YWlueWJudmFqMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sbZ3JQQJp2b9FSe0LxjVAGTWeREx-HGhjFK0y4KET9I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im16b25rMXIxeW5qNzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.E6uwSHvegVa-DMThNdHrRRcYM8HbqKDzWg2RrkNGfCg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlhcWNiOHdiMTE4ci1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.479Iw0QT5fCA_V5TkYPRitDrozHA9wT6syTxiX7Ippk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5sNG9oMWV2dWV0ZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.b0HjsDZ7Pb4NiECDdhDa5KPXF2qRcy1iIkOyNEexYhs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InAwbXN4cWdhd2l0bDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.p16WeJDS6dW-u0lG47kvjyLG6lBcGQesFMqXIrUT4h8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNvemswbG0xZGJ6ajMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uEXOV13Aey19ci75suNCgxHA20NCEbfW6XKrhIjCN1o/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl1ZXJnbzhidzA2cDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LvW7mivVnvTIpe7uZBLMVop0_S-9O3H4EsQeNuSO14w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNvemswbG0xZGJ6ajMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uEXOV13Aey19ci75suNCgxHA20NCEbfW6XKrhIjCN1o/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN1Y3ptem0zOWVrYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HxQlikvnF2d2hX8QuqQ-_IMvYOv4QuWxLDspQ-PFVPU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZqZnZmMTFrMjA1OC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.meYsf8qMb8fyqPUONnpGyqyFUUNhsZ0MZKXGKeT-DgQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZ6Y2Y0djZxZ29haC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.fs1rezWH6Y2f3ubi3zzdFVjHToaxfETacUXVtc-1N7c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjI1NjRwaXlhNzNxbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mdSQtQOMoxdAM1aej0SvYzGIhCqgY04aVx1i6pzcS2E/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhzMWh4endhdmJ6ajItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.QDVT1bP-nOzmlsTo0md7EHz6XMF9vlFHjYw_Nckt4sU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl6Y2Y0djZxZ29haC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.fs1rezWH6Y2f3ubi3zzdFVjHToaxfETacUXVtc-1N7c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijd4MzRnamhzdjZ1YzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.IXSdp9i_rmGfXIbm3GGn7HJSvdg5Dx7KbX7vXB74Ohg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFkbzI2c2FxbzMzeDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RvEi6Y55S_4xtHjqaosawbOY4KhUX1R9twIX1i47gpU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imk0M25hYzhqNWdhaTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.6AgVUNb-_sYh6NSW5p6ZdjKkdjzYXx1-pliL5p2Wzwc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRoeDYwYWI5aTd2bTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.igLvrbsvTxiAgjNWeorKJxiwtQKJ2VriTfW-NmUg8Mk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNnbWd5czQ4OHBiczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.rXHxDubZ6jAH3ltckgXk9Q7nCJtvqMT-Is_wQFSFdS8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImI1cjcxZnd3dGplMS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.dEMhWeT_EmEcPDBB_JQ3XmGyVStm78rGvcL-t_zSWrg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdsZnJpM3YwdXAzby1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.-RnlLJjeUqhJx_mjQNTc537oFXDfOaJ4fAYGoTMf2Qs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImV5NTRtZDIzb2wyaTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mgMoaffv0hUHu51PTntZtuXpIQ-M4Xbjipj1304QUT4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImhzMDZ6aHdzdnltdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.NFF88gpmccFLVGJTUaZd53Vi3VcTs74MK4TCniHX8Yc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFra254a3FscHdqNTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EX1WaxREBvAaO2b_pXV0IHau79lKAmQ5mzmYxGhtKnY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImY4bXdkZnV1YTBwYTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.X755t4fsRMq7DVF-XPHGsDmeXZiI9NvU4UcG8U58ccU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFnbHhzZmNhMzFrYjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dHD7OAbjEcF3Z0ZDb0MEsZP0PVUFfgUwzjvmze0brDI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVvdWg3Mm02MTBveS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.KqHqlKXr4bHJR5z1H9dr3JyPWW-gMOpQR362H13Mdvs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFnbHhzZmNhMzFrYjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dHD7OAbjEcF3Z0ZDb0MEsZP0PVUFfgUwzjvmze0brDI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjU5OHQxNTJscmR6ZzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.s9zQ2y1YNrGL239VELS2JaAHPSYfhwOaGqMtwlRbws4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBrODdtYjRoeXVuZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.c6ObP24Q_3ZN3yygTF09egvfgP0sGO_PaUuMbG9HVq4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVhOTJyZGgzbDVwczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.c2kwVNbqCNUbDmzCZ4k5nGPyZM7cRGweJoqE3wNiODw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFyNTl1aW1qbWE1azMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.NCLmu6NAn0jprfl8JEbDmTVv6cn3bs9A7hfNnzkKSb0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM3cTU5emF3OGNhdTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KdSXXE-57pAevuf8DkLKoj1nKjGmZXG4kpeoQks0lpg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijk1d2doOTNiNzg2Ny1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.6Hk0Y7r2vKQCLoScDANwP8rJqwwfOxHV3qqpxEXz-cI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJpMDlrbGxuYTI4ODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WoZwUiHNH9f66xNfc7YKsZJpBy-B9Www5fr6mbBH1Gw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN4YXB0eTk0aHJ3OC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.6HNBRIB2LK6exJrWaHO31EYYIPQTshg3NxK3jAOvPiU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhnYmhveDBocmxybzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JeanP6E8HQh-5ywjqIB0fOSeFWiuF7ciWbn8rNCvqbI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im4xc3RiMXM3aGJkYzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.o2fJf_3tWrEb7NViPPXm95qICr_cKGpR6MV0CZpBnAo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl4dGg5eTY3c2lmcTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ItLUk5pnz873wDr2v_67_-NXzmoTk5M7sV7rhQoCap0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNzMDcyMXdqZncxYzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3MJV_9iChelDqjV5rl_A-y2jplj-Rv45mITKiemcjps/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJseDd6dGZibnlrbjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nRVn1VvG42nS7fbkv48vAfXOD8w-nJgSeBfpcjZEbz8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN4YXB0eTk0aHJ3OC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.6HNBRIB2LK6exJrWaHO31EYYIPQTshg3NxK3jAOvPiU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhnYmhveDBocmxybzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JeanP6E8HQh-5ywjqIB0fOSeFWiuF7ciWbn8rNCvqbI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN0c3l0dXc5N2JkZTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.O2fJf_3tWrEb7NViPPXm95qICr_cKGpR6MV0CZpBnAo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN5N3A2a3RxZXVhZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5pH2MZVhO9Qj0C2W6i4nB7dM8QxQnM0pQn0oQm1s3gE/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ims2NW13NXI2bDVsaTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.zLzX3PofBlfm1vJ2cIPm3SZbMnxazbUzenfYeYtPfsc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFuNmhmd2U2aXhpZC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.-R0bWP8Hs11fzvH7xtpnLqHYcekpOPKq9hBxrvB56Dk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNlY3B0b2JkcGQzaS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.FCZnXNk3Gtorntz_UPGJXfoVA5h0vlQ89OJBpwdOKfE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx2dmt3NW14NDAxOTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tIL7dPssFo4T3-INR_v3jf4uVLh-NiLkxH0n3mjypGQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlpYjU4MW11djZuZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.AWCkFp6WOCzBfZeyHbn9G4Cv4Uw-sRsCyJ1HTK2iG8A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZxM3FxcXFzamxkbDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3ZslNnHEq-v7KxnDzXbCyuqL5COj2NT3sSe0OudperA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Iml5d3duNnFxNHJ3cS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Z5TwgYuT9B3Whih7gEySnB79XcSop8-a5cUtQQQeu80/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdxZXphdG40eDhwdTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.FmtsRny6DFb6cFIVYfBwSn6medTd5Ru-3tP5OPLitTg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN1d250ZnR4dGhxMy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.3vY14WlDrFD7b6CP909NhkyY-FqKnLJGpQcvqy_R3NU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ing1bWFsemQycmxsbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8V2s5IgJlffxC5tK62sxHRNHiSuRMjJV7xU1Rhc032U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVjaWY1NGFlcGswby1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.xYfs8ML0AUe29uxsjLBM2-hUH68cXZgeIBqq6oZVlcA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Iml2Z2tnN3M0b3NibDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.oJHsC5bF62cUBmhmYmzoVBVio-_U4hyjfum8-NR7rns/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ink1c2hzN3ZobmRlczMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.M3DyR_1y9Spo12qhGWg_srGvAqf2YbREYTPk7yVyZbo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImU1ajU2MHRjNTU2Yy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.RZy7iOVRkSo1KsA-uyIdFWV9JmIZZUkBJOOEjQki6Wc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM5aDBzZWd4NzJxeDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.iozFroo9fbuyk6pRmapUPefQXv9t5PBMIrrJ5TRtUHU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxnZXRneWJkNWpmdjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GtDz__vb3w_USdkiZJnLQed8E3WN4xrc_WkMOBTGRRs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Iml6M3M5ZHI1MnBqODItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.omgdIaz4OvJQqJZ9PQenlIQLj_JQDDjATGE1qgob6ds/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJwbzZpN2I4ZndocjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Got4GXANYN6kqsxZcsUCEyRDmuCU1zs4TMYA7qgbOq0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImpveWQyMmtjd3J3eS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.QJjOTY856kOLwGDJx__zgUzlXsfvfemaazAJiKbWqQw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjV5bW5tMWR6Y21xcjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7ljtbNXyhzdMlnko8wN_uCzhuYCOfslFDQ5lB-EgNBo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1yaXN4OHV2a3NuLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.L491qpes7t_K0JccPwiJYN5R8zaQwulIp58-YemA-Ko/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBlOHplemRsanBnYjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.X096SDef7WIaHLuGaO05SrWCPHTCgQ2RFgKO_RYk7LY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5ldTE3bDB4NW9heDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kDN4K_mrKJ4fWVQ39RWmfTDpU21ZzZBRbXf2FV5uPfM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImR0N3JyN2Z5NTN1MzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sKGzvSYH5d1F4g7tV3yVPcH-CUkEO2l5w6yEtBAO1Qg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBpeGR1b2s4OW5uMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eqE5W07Ixwrza0xsmqRad1vh-x5p5q1g56tGMDVG05w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1yaXN4OHV2a3NuLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.L491qpes7t_K0JccPwiJYN5R8zaQwulIp58-YemA-Ko/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN1d250ZnR4dGhxMy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.3vY14WlDrFD7b6CP909NhkyY-FqKnLJGpQcvqy_R3NU/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJmaW9rcWFyaWphZzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Bl3nJGtOOPMTQOb82Kz2WzGO3qfWmDf5bD46og0tagU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJmaW9rcWFyaWphZzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Bl3nJGtOOPMTQOb82KzW2zGO3qfWmDf5bD46og0tagU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndhNDV3eXJxemlxcDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EnyMrhAhkMRKMo48XLBI-EeyVgoUx9ahUm1uq87zNqo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjA3OGc1YzVoNTFreDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bOWza21mOAgEe4I2_9WWYfilUkLk8X96anrYyTWVL3A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM2MnhvNzgycXl4YjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pKR0UdNzoX0HPJeCgc1Smx3_sXSQY1BqAba_UJ3iiSg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjB5eG9pZ3Q1bHdicTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.i1r8pCstFY-is66t3JEKuBOIg3T2NHn5pdAEXhAQQv0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZyZ29wOHg1ZHVoMDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.6dCy8WpIOS5dveeUA04TNHybo8fJa4Jqu717s4eXDXs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhsdXd3Z3UxNW5laS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.ZHovpJ2QrJOR7cJJKSGzyDqhYE7Ykz8mk6qZoTeU0Po/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNlZ2tnb21oNTUyYzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sFlwx9pG2l4Zup7IgiAWfW3_U0oOF1Z__uk6ASZztqM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ3Y3g0OGxlcDRxdDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eLQIqdLSSP238NHrNGqJyKo_ff5cn5F1ojgk5MW9NoQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijk4aXY0NjZtdDlnZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bSsGmaKXkIncw-4-EL77GBa5VKdtVW-5Wmm8PyinCnE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjkzZm90MHlucTZ5LUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.iTLgremoxgAVQCiINxa-ygKXsDgYs-RybLh7kpHhnao/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlrdXF1d3BtbG01djItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2z-aImjAGcFZcXD5GJk6U-z72-gYfFKjKisOOxcltXc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZzZ2g0MXJhZDNhcy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.ofGMr3a5nLQBwobKhMo2mqwUj5Fy6KeROx7OnVT4mH8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjE4NHZkMGRmbzZyaTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JKc3OnE8M3GYR9St-Zxk10BvWWQYskHankwpy6OWSfA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjY1OHVwenNiZTA4cDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EsRyWLvXWjOT-jTwudT0Nsg4KDJmXqNyAQl8kaJmQuw/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImsxYXk0dzNsc3NhbzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eayT4oMMMD1rZbabJueI1EV4AT1PzwPrHZm4Cr2WGW0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imc3MTZuOGtleG5sMS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.pTlRT36hwlnucrKkRxrcDb7rjMQLLXYNgpDrItDe60c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InkwODhpOXlyY3Jzai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.0vX_MwiUGTVXU1INMTCgdOzmO5JW8-_y-zmf5BzqUtk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImMzbHMxMjcwdDFzeTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LHCv6lNXmhLyqcR2zhe0Ip31JbO3n-ASYCVcW5EmN1A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZyeWJwejRzMzhvcTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.NW17Ui6G7Y1TqkN6sa1LOh02TMPvi1tQE9u-QTJARG4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InMyNmZqanp2ajU2cjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4yBjWy21_kZJDwjX6KQ7WvAT0Dq6IgWpMlAaEQZtViY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhqaTJ5cXV5ZWEyZjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.w9qetdvaZzZdJE2YclFI8wLP6Yxo_RXuIWXgA5oVfW8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImU4NnZ4YTB2c3FkOTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.S19nrSyhgf85YDOr8fnwoo5lxDgEdzfrQhmyOOS2BI0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNleHJsY21tbXp6cDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EL7HaDQ7S7cDNJm4sWIt13DZ-01jz66TE6VxyEuYQpo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inp4NzQxdHc1N2VsZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4WF0IUcytxosOUdeAZU6KvIASDb6L92UkhknjEIy8zE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJyeWhoMjJvendvZTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.53fTVdwWw_qLUvX9EjiDTvDyK7VFfQgH5RwfmV8QXxw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im43Y3dtampheTEzaTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.M8Cx2rb_DXB9k9FQhK2jnNivu2MFzZ0Z6qq0BDB-CeY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVjcGhrM29kYXF6bDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Iy0Ao2xRUHutd3tSULHCYIdKlRQhw5UMWUVk7rrsB9A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im11a3lpamxqMzMwNC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.fCXS1bbGkDjhmL_PG8s_bqwkC3gHh8fSrnVjZN0gf7M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im8ybHlpYTE1bDVpdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.pBltnrlQsk81u3Ho7uXL4jDup-PZp8JmrQOTKulkP5I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imk2aXFxY2k3ZXBpYzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.myNZwgi7icxtuU3XVdqRLb9Xpnd8cobXtAjTrwaTfCk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndjemZoaXlncm1kejEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.DhtJvMo5wQEGI5y2diI4d4AS3LEM8kwlVn5SD7iEfls/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im54aG52Zm9hMjV1ZjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.48MFmTg53f-M5ALPNsigVjXKmwP24P7zomL7raw089A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZhNmMzcW1jbDdscDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lwDjD4NJAkfuiWekp8oqhaNSV2el-u4RgUIFNeFAdKk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJlYzk4eGV6YzMxZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RlSngUKV0VqFj3YNmws4CV2BTf_uqOyLY9xOPINbt5w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFkczRkYW92NTFzYjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Y6aUoTZ1J4C0uNvwPWAoi08Nlph2YY2romLZY32oPaU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx5NHRzNjczcHFvczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3DcmlFS9mDeLOba5Vw-3Y2fqiVfG5dszDI-9ysTSpdA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Img1NTQxZDl5eHdlMjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TlXdBOG-H7Qmf9nbFceQtNv8jTyUBHVHci9xI23AaoQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJldDFyb3ZidDEweTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fhOht3G24IzU6uFDQgyk-G9W3CfQf1_DqVJcJoUHuzE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjU1ZGtyaWVqZW04bi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.xzyT0tT8hi2ZKw9xXfkrpgQdNuAuKxtlNQzl8o9DAik/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZrOTVrZmg4N284ZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TZv_q8eaFEM9Vi24U7n4rP-BgztdXiMuSBIGzN7BAlo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFrYjhiM3o3YzcyajItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.AW0w2pdeJB0Ib8J01K06dDz-4BH-SQ2QvI81PK3s26g/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InUwc3JocmVsc2tlby1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.bPLogNmrBSDPh9Pam97qdUJi-2AgHJZSEqlcUqNvD8w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpoY3B0Z3M5ZXFpai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.QkazdyB2VNwZjENNO_gnCbY-dMpOvzWw99b4PX3L6N4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im04bTZyM256bnhtNjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.w1f81Y585QV-J0dcD1BzH_pzKbEzl0zdIeeeimYpJ0A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZhazlqYW5meHc3ei1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.cD9Glogml4clCByceeKLgleVi6Jmm2B46-SkF6gZ4OI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inl2ZW85bHB3cDRpazItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TWOixNAGtqqyUXKHQBrWKWZ_SxGoCFdDk24QswfxLRk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjRrZ2NteGFmbTJqNTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XRoBqW0jyMCnUCvgkwNqvfQRLT5kLfyVZ6Jsw2a6prE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1neTRjeHhxYXZ4bzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Mvxb_Cc6vLCAajcWX7jCiu7M2hjLQzzH6bDhKU9h29Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlmMGlpMzJjaGJ2ajEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.l-aO8fGMMNwoD0NZc5DwiIRp6tB6iumbFBlvdQsb_S4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjN5MXFiNjExMzZyMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TBCkl0yQIq3sE3SA8ar5W7gd_e2UNZrIfKUcFwhDykA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFlYzJkY2NrZXJoeDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Z-3LvxlRDrsCAS_xqWiNxtEXlRh98fadzR1V5VYjHFU/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFlcnRiMjZ5dHJlbTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Kh1qYpiu6JQHqoP9_NDUa_evP219n5hvLKA0Qo0OEHU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijh3cnZ1YjRxeHE4MTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GT64HTS9iGLqjSqoBBoH4WqbJd1l5BaCVe1uKNrWIoQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inl6em5uZ3B1ZnkyczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZDzjisrpS7oucI-Qnco0Oi5wx69B4SHcbRNHgmiEOH0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhiMzlkNXQ1bjNqOC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.8xZSrerfPqrkOkvrLjxHX65i5mGZQnvEjSwUfOKIgHk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImwxaHUybzEzM25zNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5jC5L4wY6CZ92KR3UEMVlhBZRnWa_-ru-YeI8HuaVqg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im15ZHAxZ2ZpNTV5ZC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.UUfPqbUzBX28rCCE1fzaM-rAReyPq8Cz9NeVAfulPRA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhsdXd3Z3UxNW5laS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.ZHovpJ2QrJOR7cJJKSGzyDqhYE7Ykz8mk6qZoTeU0Po/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNlZ2tnb21oNTUyYzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sFlwx9pG2l4Zup7IgiAWfW3_U0oOF1Z__uk6ASZztqM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJ3Y3g0OGxlcDRxdDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eLQIqdLSSP238NHrNGqJyKo_ff5cn5F1ojgk5MW9NoQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijk4aXY0NjZtdDlnZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bSsGmaKXkIncw-4-EL77GBa5VKdtVW-5Wmm8PyinCnE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjkzZm90MHlucTZ5LUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.iTLgremoxgAVQCiINxa-ygKXsDgYs-RybLh7kpHhnao/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlrdXF1d3BtbG01djItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2z-aImjAGcFZcXD5GJk6U-z72-gYfFKjKisOOxcltXc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZzZ2g0MXJhZDNhcy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.ofGMr3a5nLQBwobKhMo2mqwUj5Fy6KeROx7OnVT4mH8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjE4NHZkMGRmbzZyaTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JKc3OnE8M3GYR9St-Zxk10BvWWQYskHankwpy6OWSfA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjY1OHVwenNiZTA4cDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EsRyWLvXWjOT-jTwudT0Nsg4KDJmXqNyAQl8kaJmQuw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9zcjB2dms5dnViaTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XHp_kbDDtJ5RK2AYMPg6idzZQsxyYq2j5Q2L7l9ziiY/image%3Bs%3D5120x0",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ind4bG1mOHRzdjJyZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EFC2RXh4nhJjkBr0gzK_5j2t5N1_lgs8jNzSmPxclsM/image%3Bs%3D5120x0",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV1YWJqam9tc2Npdy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.w8StomA2iGkMUUejHFaGLZvurlVpjuISGLwS484ANsk/image%3Bs%3D5120x0",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNzN0R0b2p5Z3FhMy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.VcY2KQ7v9oQX5d4Qq3jv6xZ0Y2V8yQ/image%3Bs%3D5120x0"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc1OWE4cXJocWQ4ZjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TEj42XQ7pgjKIVacePojB3myvaSCb6c5wgItx_Myw_w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhieXVscDF5bnoweTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JiPsEEj3gRrV-76h5ZjiQZ_g-sSIt1cU70pRuEWiqZE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp2Z2Fqd3BuZHRmaTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.FsnhRjeXNzI61v-Qhh6Js4ccIbWy9fwFENDsorcBwds/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjA4a2thNXh5aDZ1YTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.q7GxesAznIcld-F6WTuzETVpj8mIBboZF_anEkrxu9U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijh3M2RwbWljcWZ1ZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2iMmf-ASfgXYiuntpJkfprmSxvNXjTnCdhv6zb7jUws/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1tN3c1eTlhcHMyZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.0VQ8x2wYvRrLx9YzQ0w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImltZWhyY21nd2F5ZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.L4KBNW1ZOYbpjbdbjUIzOP_5Yp00zbsXgL-ZOBN7Ugw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imszamc1ZXVhdmhyeC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.rXIHRJv8Xyg2JGj2rmkbL0WEUOvSQ7pPpBhkR00FfWg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlrZmR6amg4cWFuNDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SYvzQjKjGsvMvECvpEAZfm3D4-OxU0HOocuPZGv-gMI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InR0Z3lvZTFva3BncjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.2dQwUEalYxdRDqdZdL3fss9e-_3faeTWtqJxAm356Pw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ind3dzVjZmNqbnRmMzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WJ2Cu2Pu-azOxf22JkOWwwLjWWHelGTOJ0VlWLtsb18/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR0aGptM216aGpqODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Uk7F9v1qQUfjZ97CWalXfUd-uhXegvvDphVNIEcN4SM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx5YjE5YWJ5MXJmMy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GSvWaColOStGWPebq4UqjAz43Pa4pA43hY-IMvmrRV0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im90bGJmZWFoM3VmcDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bjjo15GGw03SDvEbMbJamD926xpwevQcQPKOfX7rOrU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imh6ZmlvbjhyZzE0cDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.jst1DFfbUXX5Ax61WgAvKWvhneoO6sWZ_D7QCKvapxw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InllbW54Zm15cm9lLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.UhXEZdZ3dN9LqWULGHArQWT9DquJxwkxnpxH3iyHiNQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpoY3B0Z3M5ZXFpai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.QkazdyB2VNwZjENNO_gnCbY-dMpOvzWw99b4PX3L6N4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im04bTZyM256bnhtNjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.w1f81Y585QV-J0dcD1BzH_pzKbEzl0zdIeeeimYpJ0A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZhazlqYW5meHc3ei1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.cD9Glogml4clCByceeKLgleVi6Jmm2B46-SkF6gZ4OI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inl2ZW85bHB3cDRpazItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TWOixNAGtqqyUXKHQBrWKWZ_SxGoCFdDk24QswfxLRk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjRrZ2NteGFmbTJqNTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.XRoBqW0jyMCnUCvgkwNqvfQRLT5kLfyVZ6Jsw2a6prE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1neTRjeHhxYXZ4bzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Mvxb_Cc6vLCAajcWX7jCiu7M2hjLQzzH6bDhKU9h29Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjN5MXFiNjExMzZyMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.TBCkl0yQIq3sE3SA8ar5W7gd_e2UNZrIfKUcFwhDykA/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRwdG43Y3J3ZW5pczItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tppTFaDO5qWej1Kx99OXUqI84HobxVsHWgXF0CirYCg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJpZmMyazQ3cG5veC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.C9PWy_dcLecxorCA84nuZvW7C-J65wVp16sIaYAbpI4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJscjJnaXl5M212cTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nhUISVVjrJwJGp0N5QCAaYy6W0oh1uQkbAAb59G_V2E/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndkdXh4d2hlNWJmZzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.F7X-OfnsimgYLkeB3mWZfubDH1iT7zAy4oJVnwYYkUk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjF3b2UzMnlkZXFlNDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JY0kGRO5SAbTFpYq3JvRstMsGDAYG_zicrgpXvw6AbI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ4MWdmNXR2MmYwZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sVCUOAQQmaaRVGqMljQauXgiQzPOq64XHJgPlAnqlG4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijliczc1amplMTMxbDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.duIg9a87p36IMa-ZHwgHBBf58mFm4MUutzDrUC-K61Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imwzc291anpzYjV6aDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mvq5dIVLchQYi-dV2K6cQTpZ29yr_544n32GtB5KNbM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijh3cmM2eW42aTRiNi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.j50kvg4k2kdOjA3uzSIP5QT5kziE34uC5y8K5BGyPFQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjdxbjVyYTEwN2t3bzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.chCnYDYDkrK0ULo7W9-P0bF9z7HYT4z0fLMb9QR7iLU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRjaDMxaTZ1ZzF4cTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.qJC4-lmiKiDMkysz09OQKyW_nYNS-FBvSI0XyOs2b40/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imwwa2dybW5jMWdzMzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RGIKXKyeSiR6VkDOtY-VbDBGo8GRDoIr-H6JlZKbvnI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxtcGtmYWw5c2Z6YzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EER50t2gBAe49NnZ6mqQkI-pWJHWwmWqAAu5BPvoolc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImtncXlxbGhhOWhray1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SxYXKNUdATUTzQ-nS-YHHiKd-OP2dgt9CxVkhMA5qhU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijdyc3ZvMGE5ejVsbTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dbRX0VJMM4Rr4PSEacz0GFuiOBcjqbr0u6Nb5g0WhWY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA1cmV2czQ5dTlrMy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.PXrKIiDkzty0RscBIG281Zqf9AJIb40qs-Xxh8ni8vo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc1Nm1tbzVkeW8yOTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yfkTsR7AfOqNESDcp77phggyQIZu1x4sDrckm6cA_Rs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQ4MjA0cDJkaTNjazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WIXqXFCKffo7g8PgFVai8bmRWI0vBBoiQbSvVp8Xz_A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNxNWhlNjhmMXF1NDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.cCgnTNfnzNDqs_l-AsVtGxBpo4uQx3SVIQ-_7VSq1rw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZvM3FsOWlpYWhlMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.x9TFPBUAPaC_2C5880DIp94HFn8lMIW4ifH4ZVwqNjU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImUzbW1tcHIzam5oZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tA_bOzPToo4vd0McNsbKH3kLz4hd1I5w8rV75FVj-bU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InI5OXB6dndqMmtjaS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.i4Y2kUWZ4AN_wx05JGGtvkeOU9JvBNxHG3x04kWAR2w/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJhd3k0emprdTR5cjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HyfghuoXoqsJA9WWBd164LtpWd62dfPd3z5uq7CJyGI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im00aHhxMGY4amE2bzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.s0Xz_9lOkLwm_kveMGxH0Z01W8XE0KyrRA1HKOZXMxM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjltMDh3MzQ1Mnc4Yi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.PStO9NLNgqi6MrWbPr8QkJQ1S0P5Em1102nuDoGilWs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV5ZHY3aGVlMjloZy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.ERluXK_9z1JlEUC3sSgwZDbD5_r9IuCYD1PeHC0qo2Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InlvbXNzeGVpbTdubC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.j7r9t-jt-KrRnFDrOajtGy6s2hMS4H-8KCIdmaRI3Uo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQyNWxvNzQ0NDV2dS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.59cBn1vaNLackrP1BiJx5U7gnjhXrBgLPnExJvg0p1M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhwaWdnbzA1dWVhczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vdmNsd-uV1GE3hE8EStZhb8CHsu1eBtXUoW9I2shqqk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhwaWdnbzA1dWVhczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vdmNsd-uV1GE3hE8EStZhb8CHsu1eBtXUoW9I2shqqk/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjNlc3pibmQ0ZmFtazMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RSG3LKYeqaoPD4-fPJqArvydAy0aXe37yaECsU7I3Tg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ino1Ynl3NWZidWlpcjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.PviXUNuBSCCbi_L7jt27pGZrko1nk4zOB6IuOtgzF8E/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFoY21ieWd5dDlvOTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Kw0649u-Yx1BYJzB8IwCWVo4lZdtpCeWcRenJVEtI4Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InluMTU5Z216YmJ0NTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.flWSRdhkDJufBMQBiOxTgV4yVnKgkyHlrjW4SIFBRYo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZ1ZnBzNnN1ZXp2aS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.kh9InA36vfGhV01s26P_epeteS74vPDKpM9Qa-HLJZk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJvNWlqeGY3YWdyZjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.fFPDbq64wXc1ZbQG0OD1XDeMUL8qVVW83fHKjgAVxj4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdyZnQ3ZnJzamhlYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Qj2C7ZUy3QXpS7LZm2TUMdVIOLFmE-nklvgFVB0tP5M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBqZXk4dWRscXFsdzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pJCBTnCCZzX6OY8qPs_S7ldFsFhewwQG8ayPZVdZi5s/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im0zZWh1bGFnbnVkYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.VIisMYXrOhujJJ8s8grL1FBdy0ffllVk-9OkFvXADcQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQwNjRxNDdqNWJsbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7yloHj31lEglIIxDgUmhjgGGN-L7sRpcZ7SrTYHHOOQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im81ODM0bTVzMzVpMzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.82qbKGPZSz1XH1Ms0IgOoEwFrhK97MzDUPcZRb21OaM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQwNjRxNDdqNWJsbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.7yloHj31lEglIIxDgUmhjgGGN-L7sRpcZ7SrTYHHOOQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9lbW1tcHIzam5oZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tA_bOzPToo4vd0McNsbKH3kLz4hd1I5w8rV75FVj-bU/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM5cm1lMjkzMTZndzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eaIFCUumym607pVnhGL3cskdLaQz9UcRmPUjOAU_whw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ5NG55cjMya29wdDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.hWvQArOp0dXgFKRU_4MAzNRhvjVUugGsIBmhoOTQ9BQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB0ODltYmZsc3k4bjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Te8WOIVZxsgzrOKhc9f4piKlncLvk7gKPouqUVXzLxo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inh3eG90b3loemJydTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tuTtKA2VxYZOV2tyMn3RZvQg_15Uiv-dczUjr8MkJAo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjlkcW50amhjZnlpdjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.siTESJsiz8r-J2Dkg6dd4VJsO4p-mSfMSwlph0b0-Bo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV1MnduM3JpMW16di1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.7FdlDwdGyBblVPMPC3FBMFKy8T4yr0xqsD6UXemdun4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ink4ZGM2dDl6YWdhai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19._xaAPTZN7xG7G1K45suXBho3lMnlLGyciHlK2jjl-jU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5wM3B2eHJ5OG81dS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.OxqDokr_y4pvRDUQ7V7wh0ROqKWz5tAcO1ZoN9FOxbM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBicng2ZGpxem5zNC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19._-GLXViybDmzcSvlpvCesxgH4SahsU8ok7w5xST-Kmo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc2Z3czMTd3enQ0bzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-Yt2jOLkbllO804khMf_OpEtBUrDltC6AA65bob_CoI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im91YWdmNWI3czJiNjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RLlSvYvDU8-ZRa16PJwmH7dV1AD2JGz7UiyAKLwQCCk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZibWR6cG12ZmlyaC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.uMkfSBhzUt9ImoxsEAXKOEXmYVi70a9ydXAgSO0WTi8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQ0amNhaWtjZWFlczMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9DEWZ83vNx0riB9Z5FTQ6Aw-Jr9tL75iAzgA9AJBT2Q/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN0aWx2OWR6YnZoZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LQffTwfrGoG00EHU68KlyFjbECHb_iOFcn7qKpnwYQo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJoZzd5bnM1bmFjdS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.NcOkZ2-avtfZoHrdxb81FrbdIfmdO5NBG0v3MAzRhuo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZucHhkNHdid3Z4ZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.cF1ZpRLDGfgX684pMoiMr_l_ouQiwWgMmils7Z4v61o/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVtaWZ3dDVsbnowMjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lSuu38uOhvYYl2D0qvifi9M8crA7gZhdDehIKhSEZHw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InA2NHpjN2ozczM5MzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9k34bZft82QG6ODKA3Fdcz-tcY9kwnyDJ3y6TGGwcqA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpleXAxc3o3eDd5OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.e0UJIj7ECMIPnxvjFWdOzVzyitPgwgmimie_Vl53qw0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5leXAxc3o3eDd5OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.v8gZgy-_sFVBXftPVW4XwVSTC3Aj8LKnzdjzFPz_Gv0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im91YWdmNWI3czJiNjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RLlSvYvDU8-ZRa16PJwmH7dV1AD2JGz7UiyAKLwQCCk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imwzc291anpzYjV6aDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mvq5dIVLchQYi-dV2K6cQTpZ29yr_544n32GtB5KNbM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR6cHcxZWJ6cmJ2NDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.placeholder/image%3Bs%3D5120x0"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNjOHB1NXFrN3p4ejEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wM1VjhhuGnYKfGYS6kJpJPfIBZf7P9s7Dhw_GRs5ZC8/image%3Bs%3D5120x0%3Bq%3D80",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjQyZ3VyamFob3NkcTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mnHa4IJ-erMP3um25KDH606Xtm_KUGEfey7EV13AmGA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNoazVreXV2ZTRhdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.sSOCqQKHtCSjdzLgcUyEGOTSR2coVTOyAdnW1gbSK2o/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNjNnJ3dWVjeTV3YjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KxkNK0K2q360wNyWo3AnKmf2J1fS8mHP1o6dWblz0-M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFtdXg5bnZoMTYxMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.THmTlElr0ovewepAFrnVeLQjTkowS3ZVqSS0hT3jNLc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx2MnhqaDMycGN2bDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5Nv8Utt6tn088l-N2N5leC_z8-N7TDGuYb-biOnZEKw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijc3MHl5d3AxOHNrZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.EOwOeRoAxi7CXd-11wYJEygJwCMXRheZD21IGWA-4rQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNpODZucjQ2YngyNDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.02dAC4USqZuGKyCbfgmRBoxhblYwZp4reqQj1BPeWQU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Iml4MDYwcWl4NDFpajMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KR4fyeXNpKE0fB5hT9uPeSXfZIR5pQXjHMqEGsELqh8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Iml4MDYwcWl4NDFpajMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KR4fyeXNpKE0fB5hT9uPeSXfZIR5pQXjHMqEGsELqh8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im41dDZlaTA5OHNvYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MW1-A7HfAhbbw3WeUS1YGSyWS4vbsTRJQqtEaw2LuBI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVkanJxMThoeHF0MzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.cnMLbvjeUQPCiqBNtk_NqNEOQkeDxk1TJWsOi0VARtA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN1MGRhcDZxdXBjYzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MSSldnPUzg35Wis4bvIgr86uM6arBEXhnIDWm_LFoOs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImduYm13OWkzbTh0YTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HDVUkFTIf9n5ZVlZ13HANKSlEFe3Bm-HZBsWG2_Oyfw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InplYWNtMDVlY2E3NTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tD76ag1NWKT7ybaJX-feC0Gt0tvn005g_01PP2jG6aw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBsczd0a2h2NDB3NjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HuiiZ4w_En9qP0qEKuBLIaPV3DKiqiRVXlYY88gdfkI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZlNTl6eWZpNnh1eTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.N0xlobYVbekyeH_I731RGp2Wv4QtTqtnQgvJw8Ndlro/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxiampoMDB4anF2MjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.iQrhwQpSOcIYOWfaVSbUHo3q9aB8NV4LZ_eOlF32xaA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inh5aDBod25yNmFsbzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.87JpfovB-PI4XSQ5-lu0s4opsr_XmIR3l0pZ9Kgonv4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhiYWpicGg5dmlkeDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Wc75_Tu-XWV9W1R1keRiRkSuK2JjvkJTwSEzanS8Qo8/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imd3ZWMzM2trc280ODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ZfrxQeJpnBr_0Nml7dNpUPIBh1_LNQtgFc8uqg28ZQY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imo4Ym9rY3Z5Y2k4NDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xUvOG2IKs2jjB0mAwjbWOnngGoBkocBSWLdV7aFYT0k/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJ2eThzc2Z5MHFkbzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yyqLF8cxv9fyoDleAEl_VOCAFtGExeJRkk8emHglVxQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjB6ZmdsMXBhampyczMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tbSb3YArCFzZedGQcp-4ja8MqzEal2f9A1QdyhNL2x4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndmeTZnMmpqNWcxMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._IqhVYWLPh8JXFukeoLzXHPqj8LOFTKmqh-q1IpQPiM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZveHB6dzJhcDBsNzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3gIY1VNxR79hspbOAjiFhRpdtXjUVPtVnF9uIt7A2HU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV2M3R4Y2VoeGl3eC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.yUExxIUWoZnLcoW4_wKQBrFikvtPqbSpbu1QmSHgQr8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndqN2M3M2Q5ejI4bjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tI6hIIBViRkSqhuvr2LRyYtRF83x9W43dW1uoTrpQOM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJidmZyazBpcmxmNi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.y9W3p4kGF30VFqIhfl7P2Ua2rOCyEVofMphabZGyWnw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imlma3k1dGV0ejkwOS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GvfbCxnU61DH2Fg6fVTfQJ6UtOhULEYkrShwwr3_9yA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFibjc0MDVyZG1hazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nIMy1pSwu1TgOPqmVoMB9KtGktSGTV4-ordJfVZxxsQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp2b25qbHIyaGVsZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pEuM56MoB-N67eQZl_3Z0Kmq6BnOVJH27rjaA2_WMk4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InEyMXFvanlpMzZjeS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Ee_gj44fYFK0jOzfQyuyBUDzDUPqEzf2NrUDpQidH9A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im93dGZlcng2cWlodTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lQWk7wEBPp6OBuxIecStXeA-tGPSXNEJ4r2gLJkAthI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImllZWJwN2FwMjBydDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JrYnulG1OaRHCT4CyzueY7pl7QZdYnD9e7fe20e6AIE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhjbHBhb2M1YnI2OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ckSPg4WdwmgOVtcOS-MH3fnfqKmDzE7yTEUM8pf-5vM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVjdWRka2RzbDU2bC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.kosyc9zP1zpxgWzNK8t4DZIvpMWpty8N5a44MaCp9Jo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZhbTN0YXZjZDA5bjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xSZd3P4th5sgxKP7FqZqshS5j8_yHiCqGCwkrO96MKI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9jM3I2N29jaDJ6YzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5xLePWJYxlXvP6y9K8DY6mJu8y2OL5AsphgL5TRcG9s/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InMzNXFmdnlrOG1wZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.J3x-EjjKrtdcuYV1u1YkYKlnq8R37vKy9-ih4quKZSQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjIwanZuaTdtajRyNjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xUIBKUOhn_YSpuJTjx8rNzbkJ63hXZJogGuSrmRO7Ng/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM5amVlbHdqbTU3dDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.r621YBV-7UH7N0EybGcHgF-pQaTTXWTmCTUQcycdrt0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjA3MzFmc2ZnZ2RvYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Q1kUL_EGc4k5tTo_BLGMuRWwPnjSRm-AgCaE1aV5NHQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhtaGVmbjkwNWpkbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3WYsLRDf1c0SMI9QqG96KrfaxWI8wp1mg9TeuPdeSC8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJwanZuaTdtajRyNjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xUIBKUOhn_YSpuJTjx8rNzbkJ63hXZJogGuSrmRO7Ng/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5wamR1cHlyY3hqdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.placeholder/image%3Bs%3D5120x0"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjY5am53a3p4dHR1bjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.w1j57FuSiEIQfd1S5hjVe-evMaVaXyhIJRokO0ow9N4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZmZGlodzFxOGNhcy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Sat_lRcggQ_6uubYz7YKSjx6i_68XyR5bewhEcHDnCE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InduNGRkZ3F4N2dwaDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.argzc2KQh9IxdFnH1n0gqjdUfykzt_-04ssfx55ul8c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc4amY1aGk1MnB0ay1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.n8uGHmTIsadOXQH_82U3Ms9tUsKVjw7i7B_ghv5ID80/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InB5Z3M3dGl2NmRlODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.VFfMMyLKszl9rlGRM83w5sN8QzE13m2oTqUxlcPZaNs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InNwanptNmM0bnJ6cDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KZlHjhlUwmflBTtcDRufD4uZrHwWkBhOGFXfQu4DMMs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVuanIxOGFrYTN0czEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.m32cbZ-tB-YGhu4-CL1bgc4e3_uDse96VtgUUQ8s39M/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjI2ODdsa2tsbXFmajEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.LtYpNZy28nKhqnrMqNOLkpNJkbhzWHXezLFb8DmqkYs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijd2YThkMjR5enFscTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mCh7-SNO_kTaW4qZqiDwHQ6XFZMiTNWTwdpMI6v6n_o/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImptZHRhcXB6dDc4ZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bUYiVD05eirwPuPeWgCn-vualwjtkeQvKhwsCpZtSgE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdrdWZnNDZpaGw5bTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.khbY7CRxDfRD1SH0FnbjAZhxQGNrBDgP3NxtKfNdCJI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV3MnlxZHY0a2FnMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.AB_uIibMmOP_TpttLiP8Uv2FNClhXpCUkPcJOOpOZq8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inhrbjh2ajFqZ3oxeTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wQhX67AGL4pUdROz-qyspE_h-Mn0NojvE91rGpwIRRU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImN5OG9oZnFrd214eTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9sOO7iyUbT1ozYeNc91X3prfY4JIuK-jRBfyhdwgU3I/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZycjd1NjE5aWNndDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SaWF4UvGrn88ZZFIecQJcpL2-GXAg99nQPX71QWYaMI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImBsb3h2dmFqbXB5bjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Ayv3Zrba8dFse6MJ3RJUZwj2ruyt37WF6WlObhh3Nq0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InEyeW93cG94dzN5ejEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nAlGbTbxvmssLdhTz_ukd9bIL9skN5Qb7ZnyCSzZ-Is/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InE4cngzaWFtem9kdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.p-_0muHKeI8--ixTTIp-ON_prffaeDYRbF65nGZhia8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFscGNjdHc4ZTRjYjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.HOpSHVXnCg-kdzuG1XD4uE62rge3wVFkq1F6NTYMeTQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImMzNDI1MjQwZnoxdjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SbQercnZ8lH2U8bC-hr7t5HOwhUDuHpODC3-1r-D2ZE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjIzYjZvMTV5OXZ5ODItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KQzil61Hwv07nwcEiLwHuOY983ThNAvLbrXV4YJpAKQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJoY252OTc5ODY4djMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.J-NclWlaF1sZastz-pmdOd6avSJ1MHMVA0MwJf4GRqU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ1NjZtaHJ0ZGI4MTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.wy-ko4nn6qrR2OogOjclXrp2ij_Ik05yeLU2u5Y1q0c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImhrZXhpbG1jbzc0ZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Tn6kjbMOdD57yz815ftTQA3AyS4DgtyNY9MGH8epOCY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijd1YmpwZDY1cXZidDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dA9TPWqDLGOabkpeQ-C_3Uhw9W2oLcuwANNTN8WOUMA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjVibmd6YnZhNTkwMzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tjaHXkTmfPAVuCsxNNeFASMe4TtkjwTNq6TdRbp49sY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InprMzFuNDdxMTNyYjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GmoRTuC9tUqHlE_8d-tMC0B5TGXkCBjeI1BD1RnT0as/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImU3dGVxYWdjcXU5djEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dXyrezI2EditCKUcjjwfp9P00pdHeHGmF-hGoHmAitE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjI4NnMyZzI5bnF4NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5_MBRD86sx5qVL7c4-lgwXKazOc-elB_h7i-WexrZd4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVoNHV1ZzQ3MzltcDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sYIxKD0ZpocyDaRZOKV6MPW6DRjNIh0ler5s2c0OCQM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpuZDlwMTJ0bm1xbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eK22L3iK1DXjfD6Zv_gDhEfXyaLootH7kvG0PAQr7_c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inl0bHdkc2czcnM4OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SxIDggcwXrJQMVWFGRF1IeNvdDef_NMcBLCujPxOnsZg/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZ0YWZxNGd3amVpbjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Y0vWOsw_ZMrAS9LVhd3oYYVV37JdHG2Lmo4PgX4eAG0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJpMWQ3NTdobXBzczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.6PDD0aA4b3vmAeeRJ8WLRGOFfmrWXv9steSMkQpffok/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFpN3hhMm1qcWR1ai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.K1tFMmx7t98IK-DK8RnZ0nutBpj4gb9gxm-71QpeaE8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InMwZzJsNXlxYXFmOTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.KcT-4eRkQOtf4PrFPvVA1B18aFstFEWjALv_D4FDKj4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndmeTZnMmpqNWcxMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._IqhVYWLPh8JXFukeoLzXHPqj8LOFTKmqh-q1IpQPiM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZveHB6dzJhcDBsNzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3gIY1VNxR79hspbOAjiFhRpdtXjUVPtVnF9uIt7A2HU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV2M3R4Y2VoeGl3eC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.yUExxIUWoZnLcoW4_wKQBrFikvtPqbSpbu1QmSHgQr8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndqN2M3M2Q5ejI4bjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tI6hIIBViRkSqhuvr2LRyYtRF83x9W43dW1uoTrpQOM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJidmZyazBpcmxmNi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.y9W3p4kGF30VFqIhfl7P2Ua2rOCyEVofMphabZGyWnw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imlma3k1dGV0ejkwOS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GvfbCxnU61DH2Fg6fVTfQJ6UtOhULEYkrShwwr3_9yA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InFibjc0MDVyZG1hazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.nIMy1pSwu1TgOPqmVoMB9KtGktSGTV4-ordJfVZxxsQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp2b25qbHIyaGVsZTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pEuM56MoB-N67eQZl_3Z0Kmq6BnOVJH27rjaA2_WMk4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InEyMXFvanlpMzZjeS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.Ee_gj44fYFK0jOzfQyuyBUDzDUPqEzf2NrUDpQidH9A/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im93dGZlcng2cWlodTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lQWk7wEBPp6OBuxIecStXeA-tGPSXNEJ4r2gLJkAthI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImllZWJwN2FwMjBydDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JrYnulG1OaRHCT4CyzueY7pl7QZdYnD9e7fe20e6AIE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhjbHBhb2M1YnI2OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ckSPg4WdwmgOVtcOS-MH3fnfqKmDzE7yTEUM8pf-5vM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVjdWRka2RzbDU2bC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.kosyc9zP1zpxgWzNK8t4DZIvpMWpty8N5a44MaCp9Jo/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZhbTN0YXZjZDA5bjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xSZd3P4th5sgxKP7FqZqshS5j8_yHiCqGCwkrO96MKI/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9jM3I2N29jaDJ6YzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5xLePWJYxlXvP6y9K8DY6mJu8y2OL5AsphgL5TRcG9s/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InMzNXFmdnlrOG1wZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.J3x-EjjKrtdcuYV1u1YkYKlnq8R37vKy9-ih4quKZSQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjIwanZuaTdtajRyNjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xUIBKUOhn_YSpuJTjx8rNzbkJ63hXZJogGuSrmRO7Ng/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InM5amVlbHdqbTU3dDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.r621YBV-7UH7N0EybGcHgF-pQaTTXWTmCTUQcycdrt0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjA3MzFmc2ZnZ2RvYjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Q1kUL_EGc4k5tTo_BLGMuRWwPnjSRm-AgCaE1aV5NHQ/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhtaGVmbjkwNWpkbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3WYsLRDf1c0SMI9QqG96KrfaxWI8wp1mg9TeuPdeSC8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJwanZuaTdtajRyNjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.xUIBKUOhn_YSpuJTjx8rNzbkJ63hXZJogGuSrmRO7Ng/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5wamR1cHlyY3hqdi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.3WYsLRDf1c0SMI9QqG96KrfaxWI8wp1mg9TeuPdeSC8/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InprMzFuNDdxMTNyYjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GmoRTuC9tUqHlE_8d-tMC0B5TGXkCBjeI1BD1RnT0as/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImU3dGVxYWdjcXU5djEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.dXyrezI2EditCKUcjjwfp9P00pdHeHGmF-hGoHmAitE/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjI4NnMyZzI5bnF4NzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.5_MBRD86sx5qVL7c4-lgwXKazOc-elB_h7i-WexrZd4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVoNHV1ZzQ3MzltcDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sYIxKD0ZpocyDaRZOKV6MPW6DRjNIh0ler5s2c0OCQM/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpuZDlwMTJ0bm1xbDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eK22L3iK1DXjfD6Zv_gDhEfXyaLootH7kvG0PAQr7_c/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inl0bHdkc2czcnM4OTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SxIDggcwXrJQMVWFGRF1IeNvdDef_NMcBLCujPxOnsZg/image%3Bs%3D5120x0%3Bq%3D100"
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
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJ5N3l2bWhvbmJkODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.qN1c0nfe14g6UKwWrv2DXwI5M6JwEXnOhkszkbwuTVk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZ6OWlhMHNhNDh3bzEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mJyfJ47Mv-aD20OdZGZOXxjN47keqTw88hfgOMF4t1k/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im5mNDhsM2Z5cXE4ZTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.z2B1jlgNohVRiCP3cR2Tp1q208hh1NsZ-Vazrs9ElVA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9tYjIyYXJ1dGd0MjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Howpm0ZL1KDvQAAlbebIITP79wbg4LiY_B6Yu4AyB9U/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImplMG5kMzU2dHdzcTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pz3VwzQYVejkcCMaeJ3rI-bZEcocNCgH1UJiwbpwGzk/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imt1bHJubDZ4cHYxLUFVVE9WSVRSTyIsInciOlt7ImZuIjoicTdtejUzYmlmcHprLUFVVE9WSVRSTyIsInMiOiIxNiIsImEiOiIwIiwicCI6IjEwLC0xMCJ9XX0.fCEobkD3pwh4EuoGtJafKc3To3Tej5gCwEkBrisS2wY/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImMzZXFxcmp1eGdieS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.izQMOZnLtQDfWCPEjbwpjoFU5UueauaGnu_lfBT3MYc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBiNndkMmdzaTBqMDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ctmzN82CvAlNFI08bjq0ye6OcKxyXL5kbmTSVp75zOU/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjMyaTl3NXlhcnprbTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.VjcdC09K2VqB8sQ2KG07hELwtS10CJdsH7RrNUe-vSw/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImczdTc4dnU1dTJxYjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.pNL3RmhHtnsMVfRmJv6zx8rF5dMu1DcETqq5s7t9u78/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjR3aDh5ZTIxNjBubjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yz5XrAu5oJJ6ZK6EJr1bMSZ4RroJ6GpSHZGQlDio_yg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJ6N2lteXFtYzltNC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.vTWEeX1E-nkB_9jEic1C3XZ_oBiAuMqgCQ4SJX2Vu9Y/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQyNnJoZXNxODd4ZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OBZkVbV0drnqenTvvuzon4Ii-gOOfcpTyVfg76Sv4W4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQ5YXlnZHJocGlhbTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.0kbP_MF26mSmCEd7ZY1OtaZbP9BM-_Zk2zjTiDILeaA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImgwaXp1YWhsczhrcTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.mNOE8r7v3XM2ev1_BnXN5dq8_tVJG4m6SO_Dc_ruqPA/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imp2MDlxaW91NWVzZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.P_3iIL5uoeeH9uG9lLn4-ELdiceABp2qwByJo1Vi7sc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im82ZzNhNTRia2x4dDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yB0ljmM9BKvpNSJ9DBfjUGwtYCuz6QLiV6VD7Iei1Ro/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImQxMXlrMTZ4ODYwZC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.HN8W0x24gwZ0ADugGdiGjP5V9kMqADJuznB7czKOhZs/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InR6dHQyb3dtb3dseTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.hjYdgWR5I8JAdDkqfnwimjynYEYfnte63NYO52ktcC4/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9sMGxpNzNodGRsbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.HW0Vzrg3uXlJaPf5bfTyxHHs4ZXPWN_fkcLInt5k-2g/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZ1bjE2emp5c2FzZTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.JPUec-ttZ7kxgF5-lVQcqSwuPI2oHyI14epNb18OhKg/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im02OTkwdzFzeDhibDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OzpaipaN4L_8HV52f_f2dAWfIl7aLQa_2r7jM88gMws/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9mZzNobDJvcGgzbjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.DHaZBC6jJguxphtRkT0nDzpYA51UpIlIp3IvqLEeXok/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImcyYm91eW9lbHJxZDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.ib3ZbRFddgqz7uzdYZq8E7to2U6uXSi9lFT-EjaFjU0/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImFkYnJsNGh0amp3ODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RwZKj8ewewhXthgHQaJ0XaFLM5UfEDs83mt3KLIFekc/image%3Bs%3D5120x0%3Bq%3D100",
    "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imlodm4yMXJ1eXh1ZS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.placeholder/image%3Bs%3D5120x0%3Bq%3D100"
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
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InBvN2IyaHAyZGpxdjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.smmEuONeTW2vcrlPjzPZmeOCSi10wdYX7HuQ5OevEoE/image%3Bs%3D5120x0%3Bq%3D80",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImpucWo5dHBqcjRjMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WLpm7VzwePMIgEb8pqlGNRMXhrUWKJmR6h_OKm8E0dE/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZmdnQ0amJ5ZnNmczEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.P2f4JLAJQrIM_mzhC5vsNChuUqKV_W2tBpGZt3H_XOA/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJvbGQ0MHFsYTRidjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.NuqFgndzZXmgYFTITWOdWyE0W3zcCUK38bWr3lMauVo/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImlyNDh1YmVyM3l4My1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GbS9hES55wKqBJ8Cqf7n8e7KYyUe33Lh7-ZN--4yFLg/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxtMDFydzZoeGp4aTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.0BhNkS54kxjaZqVUHW1-ms_3myLPIxm68yukPPSyHaI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inc0MHhsOTJkZHQwbzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GryjCrbTH4adky9hIh6mKv9F4fEqFSyCWO1seS3YIi4/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inpoemg0d2lyNjR4bTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.P_1jNLkSkXu3ffoW7GE1f8SIOF6OhjgQqUrUZRdfkgQ/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx2cHVtNzNrbm83Zi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.eEofMWQV-QP_h4pIKfnMv52PsTauGrnP4QmgieAR038/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFhamRtbDR5MmJlcTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-onDgKCa_PeWMKpdC2FFEZ5GDvawnDoGVidYPrJbDtc/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9hNHYzbTYwdzI1dy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.2sNnIjYgxOvazB63zqYuFeG4-ZFQxTmFVdzNS7oIeWw/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVubHVxZ2V4Y2JqZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.blDxU8MNkFR5nKRqmauZ__KIx3E8hk8I8tTbQKOt-pc/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhvNDRyZDFnZ2loNTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Qum7dwOW9XXalgjdT7ysC3AZeWVGAb5uz6Z13sVn-qA/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjRwN2g1Z3Z2MTBwNDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lDsfOendeYMGDQfLVFCr4uwXbXwtV13C30GJa1uRWeo/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZuaWlpcjJnMjBubTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.lxzFAZXFVj6W7tM6MgHcRf3tI2AjYkb2Q9V1Dfhjpug/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImdraTB4MTJtNmh3ZDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.aSbEmS4A6U-kfosdRldESq5BivjwOV2NfDMlJa2RAIg/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRnbWVlNmg2b2ptdC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.TxShIFK0hO7VBe2Wiy27-wWhNykXLpj22JMryLjtN14/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InU5aXBkY2FueWViNDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3KCRG2vICVaZyJHdzZVDQEr3VN3xUT0YCs5gY29xg_Q/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjYzYjVkb2s0bDVpeTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.GTAFVHjd7Tf3hnUUPUTLBNv2VCbamNikmOcLiX8E4w8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImV6cDB1czNzNjFjdTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.rUTS09dX9q9AkMxDm5GhXSa3Egw9Y7NJzftXAet6XNo/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBvcWpjeW5xcHI4by1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.o-AKgxJqIDRYiF04F-UZ7wM3BfHbAjdBdnPM0FfuyIM/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InVoMzY5cjdmYjRiZTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.Gh7awTKwAqRjeNUtoD5Dbnua5ktD8EY-dMm4iX2Y9-w/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijlsa2luMG1sbzlpZDItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.RDr6fFVAFHF8REDUPukEk4mQE67VubO6xOyqPqQhWmU/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjRjbzZybjV3OGxqcTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.C5QYBAtkpeqCwKJX6_bt-ZRhgaKTq4jAdfAfx_X46S8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImcycHB0YjYwNnVscDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8Y3V3PLE1VuE_5idcpT5OIBnUqin_ZwZV-PpQAQrHT8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inpudmduam1nMWExcjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8xDl3IJTl4s8Zoo2haPmxfrWkFFhs0UOU1N6UzpFqsY/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndwNm5pemN3YmozYTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.jwrT7bmWwkUi6zG_78FlVBJ8hW1dwPfCu0oHSYNQDB0/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjM0a3BmZWN4amowZC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.phd6T5pWm_ipzSxCuKn2z798kX5CRiFAIqzEKegcLls/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImxyNHlkN3RjcDd2cjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.kbmGoItY4axyFGicx-WhYpno68oRvqoP9AH8cZ_80wE/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ink3YzZoM2trb2V3czItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.t17V5W9SjqxifsAa6Oe5mOWDzLUxEFiQGq_ldd_TcZQ/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjdwN3RsODAxM29wZjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sd8Qruo0bgCE4Nv-YpQl31ZiyXBTgJXNLxiHLqswsoM/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRjcm9zMjJzdm16NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8ZG0f3SqO8ykZPlz9ctgU63V7bvgJ4PuXFynDJ1MXUE/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImNwemQxdXVmazczaTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.sA-1qgBxZHLf2zEOOK8qvormH3VSGGVBqSHF_tSNPZs/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhpbGhsenU0MWt4My1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.uB8yxB5UrW8s6KkXJFsGfyWWrM540skvSSa5w8-ZkiI/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImJqNnR6ZDN1eHhlci1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SK9StYZ2rGfmRc8XATyZshzo5ht5vfRMbiOqZeRKPJ8/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRjcm9zMjJzdm16NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8ZG0f3SqO8ykZPlz9ctgU63V7bvgJ4PuXFynDJ1MXUE/image%3Bs%3D5120x0%3Bq%3D100",
  "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InN0cm9zMjJzdm16NTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.8ZG0f3SqO8ykZPlz9ctgU63V7bvgJ4PuXFynDJ1MXUE/image%3Bs%3D5120x0%3Bq%3D100"
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

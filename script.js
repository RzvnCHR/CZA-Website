/* script.js - AUTO PARK */

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
  "ds41.png",
  "ds4 2.webp",
  "ds4 3.webp",
  "ds4 4.webp",
  "ds4 5.webp",
  "ds4 6.webp",
  "ds4 7.webp",
  "ds4 8.webp",
  "ds4 9.webp",
  "ds4 10.webp"
],

  videoId: "",

  description: "#"
},
  {
    id: 2,
    name: "Mercedes-Benz C220d AMG",
    price: "29.500 €",
    priceValue: 29500,
    year: 2021,
    km: "52.000 km",
    fuel: "Diesel",
    gearbox: "Automată 9G-Tronic",
    engine: "2.0L CDI",
    power: "200 CP",
    body: "Berlină",
    category: "Mercedes-Benz",
    drive: "Spate",
    euro: "Euro 6d",
    vin: "WDD2050041R123456",
    color: "Obsidian Black",
    badge: "Premium",
    images: ["masina2-1.jpg","masina2-2.jpg","masina2-3.jpg","masina2-4.jpg"],
    videoId: "",
    description: "Mercedes-Benz Clasa C pachet AMG Line cu aspect sportiv și confort de clasă. Echipată cu MBUX cu ecran touchscreen 10.25\", scaune din piele neagră cu cusături AMG, jante AMG 18\", suspensie sport, pilot automat activ, asistente de siguranță complete. Mașină din primul proprietar, cu factură."
  },
  {
    id: 3,
    name: "Volkswagen Passat 2.0 TDI",
    price: "17.900 €",
    priceValue: 17900,
    year: 2019,
    km: "102.000 km",
    fuel: "Diesel",
    gearbox: "Manuală 6 trepte",
    engine: "2.0L TDI",
    power: "150 CP",
    body: "Berlină",
    category: "Volkswagen",
    drive: "Față",
    euro: "Euro 6",
    vin: "WVWZZZ3CZKE123456",
    color: "Reflex Silver",
    badge: "Raport calitate/preț",
    images: ["masina3-1.jpg","masina3-2.jpg","masina3-3.jpg","masina3-4.jpg"],
    videoId: "",
    description: "Volkswagen Passat fiabil și confortabil, ideal pentru rulaj intensiv sau familie. Climatronic bizonă, Active Info Display, cruise control activ, senzori parcare, geamuri electrice față/spate, airbaguri laterale. Verificat la dealeri VW autorizați, fără rugini, caroserie perfectă."
  },
  {
    id: 4,
    name: "Audi A4 40 TFSI S-Line",
    price: "27.200 €",
    priceValue: 27200,
    year: 2020,
    km: "65.000 km",
    fuel: "Benzină",
    gearbox: "Automată S-Tronic 7T",
    engine: "2.0L TFSI",
    power: "204 CP",
    body: "Berlină",
    category: "Audi",
    drive: "Față",
    euro: "Euro 6d",
    vin: "WAUZZZ8V2LA123456",
    color: "Navarra Blue",
    badge: "Nou în parc",
    images: ["masina4-1.jpg","masina4-2.jpg","masina4-3.jpg","masina4-4.jpg"],
    videoId: "",
    description: "Audi A4 în versiunea S-Line, exterior agresiv cu interior rafinat. Virtual Cockpit 12.3\", MMI Navigation Plus, scaune sport S-Line din piele/alcantara, matrix LED, control gest, asistență lane keeping, faruri adaptive. Istoric full dealer Audi, 2 seturi de cauciucuri."
  },
  {
    id: 5,
    name: "Skoda Octavia 1.5 TSI",
    price: "14.500 €",
    priceValue: 14500,
    year: 2020,
    km: "88.000 km",
    fuel: "Benzină",
    gearbox: "Manuală 6 trepte",
    engine: "1.5L TSI",
    power: "150 CP",
    body: "Berlină",
    category: "Skoda",
    drive: "Față",
    euro: "Euro 6d",
    vin: "TMBJG9NE5L5123456",
    color: "Moon White",
    badge: "Economic",
    images: ["masina5-1.jpg","masina5-2.jpg","masina5-3.jpg","masina5-4.jpg"],
    videoId: "",
    description: "Skoda Octavia generația IV, spațioasă, economică și bine echipată. Bolero infotainment cu Android Auto & Apple CarPlay, climatronic, senzori parcare față/spate, camera marșarier, faruri full LED, scaune încălzite față, PDC. Consum real urban ~7L/100km. Ideală pentru familie sau flotă."
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

  // Scroll effect
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

  // Hamburger
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

  // Populate category options from the data
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

/*
  Această funcție caută mai multe ID-uri și pune același text
  în toate elementele găsite.

  Exemplu:

  setTextForIds(
    ['carName', 'carName-mobile'],
    car.name
  );

  Dacă există doar versiunea desktop sau doar cea mobile,
  funcționează în continuare fără eroare.
*/

function setTextForIds(ids, value) {
  ids.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
      el.textContent = value;
    }
  });
}


/*
  Aceeași idee pentru HTML.

  Este folosită pentru:
  - preț
  - quick specs
  - tabel
*/

function setHTMLForIds(ids, value) {
  ids.forEach(id => {
    const el = document.getElementById(id);

    if (el) {
      el.innerHTML = value;
    }
  });
}


/*
  Setează un atribut pe toate elementele găsite.

  Este folosit pentru link-uri precum Autovit.
*/

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

  // ==========================================================
  // PAGE TITLE
  // ==========================================================

  document.title = `${car.name} — AUTO PARK`;


  // ==========================================================
  // BREADCRUMB
  // ==========================================================

  setTextForIds(
    [
      'carBreadcrumbName',
      'carBreadcrumbName-mobile'
    ],
    car.name
  );


  // ==========================================================
  // NAME
  // ==========================================================

  setTextForIds(
    [
      'carName',
      'carName-mobile'
    ],
    car.name
  );


  // ==========================================================
  // PRICE
  // ==========================================================

  setHTMLForIds(
    [
      'carPrice',
      'carPrice-mobile'
    ],
    `${car.price} <span>+ TVA</span>`
  );


  // ==========================================================
  // BADGE
  // ==========================================================

  setTextForIds(
    [
      'carBadge',
      'carBadge-mobile'
    ],
    car.badge
  );


  // ==========================================================
  // QUICK SPECS
  // ==========================================================

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


  // ==========================================================
  // TECHNICAL TABLE
  // ==========================================================

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

  // ==========================================================
  // DOTĂRI
  // ==========================================================
  
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

  // ==========================================================
  // DESCRIPTION
  // ==========================================================

  setTextForIds(
    [
      'carDescription',
      'carDescription-mobile'
    ],
    car.description
  );


  // ==========================================================
  // AUTOVIT LINK
  // ==========================================================

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


  // ==========================================================
  // GALLERY
  // ==========================================================

  initGallery(
    car.images,
    car.name
  );


  // ==========================================================
  // VIDEO
  // ==========================================================

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


  // ==========================================================
  // NO VIDEO
  // ==========================================================

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


  // ==========================================================
  // OPEN / CLOSE VIDEO
  // ==========================================================

  trigger.addEventListener('click', () => {

    const isOpen =
      wrap.classList.contains('open');


    // Close
    if (isOpen) {

      wrap.classList.remove('open');
      wrap.innerHTML = '';

      return;
    }


    // Open
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

      });
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


      // No backend is wired up yet — this collects the data client-side and
      // shows a confirmation. Swap this block for a fetch()/mailto action
      // once a submission endpoint exists.

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

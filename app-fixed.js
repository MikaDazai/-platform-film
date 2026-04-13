const translations = {
  en: {
    "nav.home": "Home",
    "nav.new": "New",
    "nav.collections": "Collections",
    "nav.movies": "Movies",
    "nav.catalog": "Catalog",
    "hero.eyebrow": "Study project + portfolio",
    "hero.title": "Platform for watching movies and AI videos",
    "hero.text":
      "The homepage is designed like a movie portal with a big banner, collections, cards, and a quick jump to the watch page.",
    "hero.open": "Open movie",
    "hero.catalog": "Go to catalog",
    "spotlight.badge": "Premiere",
    "spotlight.title": 'Project "The End of the World"',
    "spotlight.text":
      "Demo movie card: after a click the teacher goes to a separate page with a video player and project description.",
    "meta.durationShort": "90 min",
    "premieres.title": "New this week",
    "premieres.text": "Click any card to open the watch page",
    "sidebar.title": "Navigation panel",
    "sidebar.categories": "Categories",
    "sidebar.allMovies": "All movies",
    "sidebar.newReleases": "New releases",
    "sidebar.scifi": "Sci-fi",
    "sidebar.drama": "Drama",
    "sidebar.animation": "Animation",
    "sidebar.years": "Years",
    "sidebar.archive": "Archive",
    "sidebar.defenseTitle": "For project defense",
    "sidebar.defenseText":
      "The site already has a ready structure. To show your AI work, just replace the video link in the app.js file.",
    "catalog.title": "Movie catalog",
    "catalog.text": "Styled like a classic cinema portal, but polished for a portfolio",
    "collections.title": "Collections",
    "collections.text": "Use these blocks for a lesson or presentation",
    "collection.aiTitle": "AI short films",
    "collection.aiText": "A selection of short videos created with neural networks for study projects.",
    "collection.portfolioTitle": "Portfolio picks",
    "collection.portfolioText": "Best projects that are easy to present to a teacher or client.",
    "collection.premiereTitle": "Premiere hall",
    "collection.premiereText": "A highlighted block for the most important film in your defense.",
    "player.emptyTitle": "Video is not connected yet",
    "player.emptyText": "Add your AI film to the project and set its path in the app.js file.",
    "recommendations.title": "More to show",
    "recommendations.text": "Additional works for your portfolio",
    "page.homeTitle": "CineVerse | Home",
    "page.watchTitle": "CineVerse | Watch",
    "movie.recommended": "Recommended",
    "movie.watchOnline": "Watch now",
    "movie.openCollections": "Open collections",
    "movie.watch": "Watch",
    "movie.details": "Details",
    "movie.backHome": "Back to homepage",
    "movie.country": "Country",
    "movie.age": "Age rating",
    "movie.format": "Format",
    "movie.use": "Use case",
    "movie.formatValue": "MP4 / Web video",
    "movie.useValue": "Lesson / Portfolio / Presentation",
  },
  uk: {
    "nav.home": "Головна",
    "nav.new": "Новинки",
    "nav.collections": "Добірки",
    "nav.movies": "Фільми",
    "nav.catalog": "Каталог",
    "hero.eyebrow": "Навчальний проєкт + портфоліо",
    "hero.title": "Платформа для перегляду фільмів та AI-відео",
    "hero.text":
      "Головна сторінка оформлена як кінопортал: великий банер, добірки, картки та швидкий перехід на сторінку перегляду.",
    "hero.open": "Відкрити фільм",
    "hero.catalog": "Перейти до каталогу",
    "spotlight.badge": "Прем'єра",
    "spotlight.title": 'Проєкт "Кінець світу"',
    "spotlight.text":
      "Демонстраційна картка фільму: після натискання вчитель переходить на окрему сторінку з відеоплеєром та описом проєкту.",
    "meta.durationShort": "90 хв",
    "premieres.title": "Новинки тижня",
    "premieres.text": "Натисни на картку, щоб перейти до перегляду",
    "sidebar.title": "Панель навігації",
    "sidebar.categories": "Категорії",
    "sidebar.allMovies": "Усі фільми",
    "sidebar.newReleases": "Новинки",
    "sidebar.scifi": "Фантастика",
    "sidebar.drama": "Драма",
    "sidebar.animation": "Анімація",
    "sidebar.years": "Роки",
    "sidebar.archive": "Архів",
    "sidebar.defenseTitle": "Для захисту проєкту",
    "sidebar.defenseText":
      "Сайт уже має готову структуру. Щоб показати свою AI-роботу, достатньо замінити посилання на відео у файлі app.js.",
    "catalog.title": "Каталог фільмів",
    "catalog.text": "Оформлено у стилі класичного кінопорталу, але акуратно для портфоліо",
    "collections.title": "Добірки",
    "collections.text": "Можна використовувати як блоки для уроку або презентації",
    "collection.aiTitle": "AI short films",
    "collection.aiText": "Добірка коротких відео, створених нейромережами для навчальних проєктів.",
    "collection.portfolioTitle": "Portfolio picks",
    "collection.portfolioText": "Найкращі проєкти, які зручно показувати вчителю або клієнту.",
    "collection.premiereTitle": "Premiere hall",
    "collection.premiereText": "Акцентний блок для найважливішого фільму під час захисту.",
    "player.emptyTitle": "Відео ще не підключене",
    "player.emptyText": "Додай свій AI-фільм у проєкт і вкажи шлях до нього у файлі app.js.",
    "recommendations.title": "Ще можна показати",
    "recommendations.text": "Додаткові роботи для портфоліо",
    "page.homeTitle": "CineVerse | Головна",
    "page.watchTitle": "CineVerse | Перегляд",
    "movie.recommended": "Рекомендуємо",
    "movie.watchOnline": "Дивитися зараз",
    "movie.openCollections": "Відкрити добірки",
    "movie.watch": "Дивитися",
    "movie.details": "Детальніше",
    "movie.backHome": "Повернутися на головну",
    "movie.country": "Країна",
    "movie.age": "Віковий рейтинг",
    "movie.format": "Формат",
    "movie.use": "Призначення",
    "movie.formatValue": "MP4 / Web video",
    "movie.useValue": "Урок / Портфоліо / Презентація",
  },
};

const movies = [
  {
    id: "project-end",
    title: { en: 'Project "The End of the World"', uk: 'Проєкт "Кінець світу"' },
    year: "2026",
    genre: { en: "Sci-fi / Thriller", uk: "Фантастика / Трилер" },
    country: { en: "USA", uk: "США" },
    duration: { en: "90 min", uk: "90 хв" },
    age: "12+",
    rating: "8.4",
    tagline: { en: "Main movie for your project defense", uk: "Головний фільм для захисту проєкту" },
    description: {
      en: "Astronaut Ryland Grace wakes up aboard a spacecraft and realizes his mission may decide the fate of humanity. This card is already styled for a portfolio and can lead to your own AI video.",
      uk: "Астронавт Райленд Грейс прокидається на борту космічного корабля й розуміє, що його місія може вирішити долю людства. Ця картка вже оформлена для портфоліо й може вести на твоє власне AI-відео.",
    },
    posterGradient: "linear-gradient(180deg, #f59e0b 0%, #f97316 34%, #991b1b 100%)",
    videoUrl: "file:///C:/Users/LoQ/AppData/Local/CapCut/Videos/0413.mp4",
  },
  {
    id: "big-man",
    title: { en: "Big Man", uk: "Велика людина" },
    year: "2026",
    genre: { en: "Comedy / Drama", uk: "Комедія / Драма" },
    country: { en: "Ukraine", uk: "Україна" },
    duration: { en: "44 min", uk: "44 хв" },
    age: "16+",
    rating: "6.7",
    tagline: { en: "A lighter story for the second block", uk: "Легка історія для другого блоку" },
    description: {
      en: "A story about a programmer who completely changes his life when he decides to work on himself and starts seeing the world in a new way.",
      uk: "Історія про програміста, який повністю змінює своє життя, коли вирішує зайнятися собою та починає бачити світ по-новому.",
    },
    posterGradient: "linear-gradient(180deg, #60a5fa 0%, #1d4ed8 48%, #172554 100%)",
    videoUrl: "",
  },
  {
    id: "deep-signal",
    title: { en: "Deep Signal", uk: "Глибокий сигнал" },
    year: "2025",
    genre: { en: "Sci-Fi / Mystery", uk: "Фантастика / Містика" },
    country: { en: "Canada", uk: "Канада" },
    duration: { en: "71 min", uk: "71 хв" },
    age: "12+",
    rating: "7.9",
    tagline: { en: "AI short film showcase", uk: "Вітрина коротких AI-фільмів" },
    description: {
      en: "A young team receives a mysterious signal from the ocean depth and discovers that it is connected to artificial intelligence.",
      uk: "Молода команда отримує загадковий сигнал з океанської глибини та виявляє, що він пов'язаний зі штучним інтелектом.",
    },
    posterGradient: "linear-gradient(180deg, #22d3ee 0%, #155e75 52%, #082f49 100%)",
    videoUrl: "",
  },
  {
    id: "ash-city",
    title: { en: "Ash City", uk: "Попелясте місто" },
    year: "2024",
    genre: { en: "Drama / Neo-noir", uk: "Драма / Нео-нуар" },
    country: { en: "France", uk: "Франція" },
    duration: { en: "84 min", uk: "84 хв" },
    age: "16+",
    rating: "7.5",
    tagline: { en: "An atmospheric movie for the collection", uk: "Атмосферний фільм для добірки" },
    description: {
      en: "A photographer returns to his hometown and starts investigating an old disappearance that changes his understanding of family.",
      uk: "Фотограф повертається до рідного міста й починає розслідування давнього зникнення, яке змінює його уявлення про родину.",
    },
    posterGradient: "linear-gradient(180deg, #ef4444 0%, #7f1d1d 52%, #1c1917 100%)",
    videoUrl: "",
  },
  {
    id: "last-orbit",
    title: { en: "Last Orbit", uk: "Остання орбіта" },
    year: "2026",
    genre: { en: "Sci-fi / Adventure", uk: "Фантастика / Пригоди" },
    country: { en: "Germany", uk: "Німеччина" },
    duration: { en: "102 min", uk: "102 хв" },
    age: "12+",
    rating: "8.1",
    tagline: { en: "High-stakes space mission", uk: "Космічна місія з високими ставками" },
    description: {
      en: "The crew of a damaged station gets one last chance to return home before the orbit collapses.",
      uk: "Екіпаж пошкодженої станції отримує останній шанс повернутися додому, перш ніж орбіта зруйнується.",
    },
    posterGradient: "linear-gradient(180deg, #a855f7 0%, #312e81 48%, #0f172a 100%)",
    videoUrl: "",
  },
  {
    id: "silent-frame",
    title: { en: "Silent Frame", uk: "Тиха рамка" },
    year: "2025",
    genre: { en: "Drama / Festival", uk: "Драма / Фестивальне кіно" },
    country: { en: "Poland", uk: "Польща" },
    duration: { en: "63 min", uk: "63 хв" },
    age: "16+",
    rating: "7.3",
    tagline: { en: "A visual story for portfolio mood", uk: "Візуальна історія для атмосферного портфоліо" },
    description: {
      en: "A young director edits memories into one final reel and discovers what was hidden between the frames.",
      uk: "Молода режисерка монтує спогади в одну фінальну стрічку й знаходить те, що ховалося між кадрами.",
    },
    posterGradient: "linear-gradient(180deg, #fda4af 0%, #9f1239 55%, #1f2937 100%)",
    videoUrl: "",
  },
];

const defaultLang = "en";

function getCurrentLang() {
  try {
    const savedLang = localStorage.getItem("cineverse-language");
    return savedLang === "uk" ? "uk" : defaultLang;
  } catch {
    return defaultLang;
  }
}

function setCurrentLang(lang) {
  try {
    localStorage.setItem("cineverse-language", lang);
  } catch {}
}

function t(key) {
  const lang = getCurrentLang();
  return translations[lang]?.[key] || translations[defaultLang]?.[key] || key;
}

function localizeMovieField(field) {
  const lang = getCurrentLang();
  return typeof field === "string" ? field : field[lang] || field[defaultLang];
}

function getMovieById(id) {
  return movies.find((movie) => movie.id === id) || movies[0];
}

function createPoster(title, gradient, className = "poster") {
  return `<div class="${className}" data-title="${title.replace(/"/g, "&quot;")}" style="--poster-gradient: ${gradient};"></div>`;
}

function createMiniCard(movie) {
  return `
    <a class="mini-card" href="movie.html?id=${movie.id}">
      ${createPoster(localizeMovieField(movie.title), movie.posterGradient, "movie-card__poster")}
    </a>
  `;
}

function createMovieCard(movie) {
  return `
    <article class="movie-card">
      <a href="movie.html?id=${movie.id}">
        ${createPoster(localizeMovieField(movie.title), movie.posterGradient, "movie-card__poster")}
      </a>
      <div class="movie-card__content">
        <div class="movie-card__header">
          <div>
            <a href="movie.html?id=${movie.id}">
              <h3 class="movie-card__title">${localizeMovieField(movie.title)}</h3>
            </a>
            <p class="movie-card__desc">${localizeMovieField(movie.tagline)}</p>
          </div>
          <span class="rating">IMDb ${movie.rating}</span>
        </div>
        <ul class="meta-inline">
          <li>${movie.year}</li>
          <li>${localizeMovieField(movie.genre)}</li>
          <li>${localizeMovieField(movie.country)}</li>
          <li>${localizeMovieField(movie.duration)}</li>
        </ul>
        <p class="movie-card__desc">${localizeMovieField(movie.description)}</p>
        <div class="movie-card__actions">
          <a class="button button--primary" href="movie.html?id=${movie.id}">${t("movie.watch")}</a>
          <a class="button button--ghost" href="movie.html?id=${movie.id}">${t("movie.details")}</a>
        </div>
      </div>
    </article>
  `;
}

function renderHomePage() {
  const premieresStrip = document.getElementById("premieres-strip");
  const featuredCard = document.getElementById("featured-card");
  const movieList = document.getElementById("movie-list");

  if (!premieresStrip || !featuredCard || !movieList) return;

  premieresStrip.innerHTML = movies.slice(0, 6).map(createMiniCard).join("");

  const featured = movies[0];
  featuredCard.innerHTML = `
    ${createPoster(localizeMovieField(featured.title), featured.posterGradient)}
    <div class="featured-card__content">
      <span class="eyebrow">${t("movie.recommended")}</span>
      <h3>${localizeMovieField(featured.title)}</h3>
      <ul class="meta-inline">
        <li>${featured.year}</li>
        <li>${localizeMovieField(featured.genre)}</li>
        <li>${localizeMovieField(featured.country)}</li>
        <li>IMDb ${featured.rating}</li>
      </ul>
      <p>${localizeMovieField(featured.description)}</p>
      <div class="movie-card__actions">
        <a class="button button--primary" href="movie.html?id=${featured.id}">${t("movie.watchOnline")}</a>
        <a class="button button--ghost" href="#collections">${t("movie.openCollections")}</a>
      </div>
    </div>
  `;

  movieList.innerHTML = movies.slice(1).map(createMovieCard).join("");
}

function renderMoviePage() {
  const params = new URLSearchParams(window.location.search);
  const movie = getMovieById(params.get("id"));
  const movieInfo = document.getElementById("movie-info");
  const player = document.getElementById("movie-player");
  const placeholder = document.getElementById("player-placeholder");
  const recommendations = document.getElementById("recommendations-strip");

  if (!movieInfo || !player || !placeholder || !recommendations) return;

  document.title = `${t("page.watchTitle")} | ${localizeMovieField(movie.title)}`;
  movieInfo.innerHTML = `
    <span class="eyebrow">${localizeMovieField(movie.tagline)}</span>
    <h1>${localizeMovieField(movie.title)}</h1>
    <ul class="meta-inline">
      <li>${movie.year}</li>
      <li>${localizeMovieField(movie.genre)}</li>
      <li>${localizeMovieField(movie.duration)}</li>
      <li>IMDb ${movie.rating}</li>
    </ul>
    <p>${localizeMovieField(movie.description)}</p>
    <div class="movie-facts">
      <div><span>${t("movie.country")}</span><span>${localizeMovieField(movie.country)}</span></div>
      <div><span>${t("movie.age")}</span><span>${movie.age}</span></div>
      <div><span>${t("movie.format")}</span><span>${t("movie.formatValue")}</span></div>
      <div><span>${t("movie.use")}</span><span>${t("movie.useValue")}</span></div>
    </div>
    <a class="button button--primary" href="index.html">${t("movie.backHome")}</a>
  `;

  player.poster = "";
  if (movie.videoUrl) {
    player.src = movie.videoUrl;
    placeholder.hidden = true;
  } else {
    player.removeAttribute("src");
    player.load();
    placeholder.hidden = false;
  }

  recommendations.innerHTML = movies
    .filter((item) => item.id !== movie.id)
    .slice(0, 5)
    .map(createMiniCard)
    .join("");
}

function applyTranslations() {
  document.documentElement.lang = getCurrentLang() === "uk" ? "uk" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18n);
  });
}

function updateLanguageButtons() {
  const lang = getCurrentLang();
  document.querySelectorAll(".language-switcher__button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function renderPage() {
  applyTranslations();
  updateLanguageButtons();

  if (document.body.dataset.page === "home") {
    document.title = t("page.homeTitle");
    renderHomePage();
  }

  if (document.body.dataset.page === "movie") {
    renderMoviePage();
  }
}

document.querySelectorAll(".language-switcher__button").forEach((button) => {
  button.addEventListener("click", () => {
    setCurrentLang(button.dataset.lang);
    renderPage();
  });
});

renderPage();

const translations = {
  en: {
    "nav.home": "Home",
    "nav.new": "New",
    "nav.collections": "Collections",
    "nav.movies": "Movies",
    "nav.catalog": "Catalog",
    "hero.eyebrow": "AI cinema showcase",
    "hero.title": "Where AI movies get a proper premiere",
    "hero.text":
      "A cinematic portfolio front built for AI films: bold posters, a featured premiere, and a clean watch page for presentation day.",
    "hero.open": "Open movie",
    "hero.catalog": "Go to catalog",
    "spotlight.badge": "Featured premiere",
    "spotlight.title": "Redline: No Escape",
    "spotlight.text":
      "A high-speed mountain run turns into a brutal survival race where one wrong turn means there is no way back.",
    "meta.durationShort": "12 min",
    "premieres.title": "Now showing",
    "premieres.text": "Two AI movie concepts ready for portfolio presentation",
    "sidebar.title": "Navigation panel",
    "sidebar.categories": "Categories",
    "sidebar.allMovies": "All movies",
    "sidebar.newReleases": "New releases",
    "sidebar.scifi": "Sci-fi",
    "sidebar.drama": "Drama",
    "sidebar.animation": "Thriller",
    "sidebar.years": "Years",
    "sidebar.archive": "Archive",
    "sidebar.defenseTitle": "Presentation ready",
    "sidebar.defenseText":
      "This version is built for portfolio review: one movie with video already connected, and one concept card ready for a future upload.",
    "catalog.title": "Movie catalog",
    "catalog.text": "A focused two-title showcase built around your own AI film concepts",
    "collections.title": "Collections",
    "collections.text": "Blocks for a lesson, portfolio page, or defense presentation",
    "collection.aiTitle": "AI originals",
    "collection.aiText": "Original film concepts designed to feel like streaming-platform releases.",
    "collection.portfolioTitle": "Pitch ready",
    "collection.portfolioText": "Poster, tagline, synopsis, and watch page structured for showcasing work quickly.",
    "collection.premiereTitle": "Main premiere",
    "collection.premiereText": "Your strongest movie sits in the lead slot with direct video playback.",
    "player.emptyTitle": "Video is not connected yet",
    "player.emptyText": "This movie card is ready. Add a video file later when the second project is finished.",
    "recommendations.title": "Also in the lineup",
    "recommendations.text": "Another AI movie concept from the same portfolio",
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
    "nav.new": "Нове",
    "nav.collections": "Добірки",
    "nav.movies": "Фільми",
    "nav.catalog": "Каталог",
    "hero.eyebrow": "AI cinema showcase",
    "hero.title": "Місце, де AI-фільми отримують свою прем'єру",
    "hero.text":
      "Кінематографічна вітрина для AI-фільмів: сильні постери, прем'єрний акцент і чиста сторінка перегляду для захисту або портфоліо.",
    "hero.open": "Відкрити фільм",
    "hero.catalog": "Перейти до каталогу",
    "spotlight.badge": "Головна прем'єра",
    "spotlight.title": "Redline: No Escape",
    "spotlight.text":
      "Шалений гірський заїзд перетворюється на жорстоку гонку за виживання, де один хибний поворот означає відсутність шляху назад.",
    "meta.durationShort": "12 хв",
    "premieres.title": "Зараз у показі",
    "premieres.text": "Два AI-фільми, готові для презентації у портфоліо",
    "sidebar.title": "Панель навігації",
    "sidebar.categories": "Категорії",
    "sidebar.allMovies": "Усі фільми",
    "sidebar.newReleases": "Новинки",
    "sidebar.scifi": "Фантастика",
    "sidebar.drama": "Драма",
    "sidebar.animation": "Трилер",
    "sidebar.years": "Роки",
    "sidebar.archive": "Архів",
    "sidebar.defenseTitle": "Готово до показу",
    "sidebar.defenseText":
      "Ця версія зібрана для портфоліо: один фільм уже має підключене відео, а друга картка готова для майбутнього завантаження.",
    "catalog.title": "Каталог фільмів",
    "catalog.text": "Сфокусована вітрина з двох робіт, побудована навколо твоїх AI-фільмів",
    "collections.title": "Добірки",
    "collections.text": "Блоки для уроку, портфоліо або захисту проєкту",
    "collection.aiTitle": "AI originals",
    "collection.aiText": "Оригінальні кіноконцепти, оформлені як релізи стримінгової платформи.",
    "collection.portfolioTitle": "Pitch ready",
    "collection.portfolioText": "Постер, tagline, опис і сторінка перегляду вже структуровані для швидкого показу.",
    "collection.premiereTitle": "Main premiere",
    "collection.premiereText": "Найсильніший фільм стоїть у головному слоті з прямим відтворенням відео.",
    "player.emptyTitle": "Відео ще не підключене",
    "player.emptyText": "Картка вже готова. Додай відеофайл пізніше, коли завершиш другий проєкт.",
    "recommendations.title": "Ще в лінійці",
    "recommendations.text": "Ще один AI-фільм із цього ж портфоліо",
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
    title: { en: "Redline: No Escape", uk: "Redline: No Escape" },
    year: "2026",
    genre: { en: "Action / Thriller", uk: "Екшн / Трилер" },
    country: { en: "USA", uk: "США" },
    duration: { en: "12 min", uk: "12 хв" },
    age: "12+",
    rating: "8.8",
    tagline: {
      en: "One wrong turn and there is no way back",
      uk: "Один хибний поворот і дороги назад немає",
    },
    description: {
      en: "A high-speed street racer takes on a deadly mountain challenge against elite drivers. What starts as a race for dominance quickly turns into a fight for survival. One wrong turn... and there is no way back.",
      uk: "Вуличний гонщик на шаленій швидкості приймає смертельний гірський виклик проти елітних суперників. Те, що починається як гонка за перевагу, швидко перетворюється на боротьбу за виживання. Один хибний поворот... і дороги назад немає.",
    },
    posterGradient: "linear-gradient(180deg, #6e1111 0%, #12141b 46%, #040507 100%)",
    posterImage: "assets/redline-no-escape.png",
    videoUrl: "0413.mp4",
  },
  {
    id: "echoes-city-of-silence",
    title: { en: "ECHOES: City of Silence", uk: "ECHOES: City of Silence" },
    year: "2026",
    genre: { en: "Sci-fi / Mystery", uk: "Фантастика / Містика" },
    country: { en: "Unknown", uk: "Невідомо" },
    duration: { en: "Coming soon", uk: "Незабаром" },
    age: "16+",
    rating: "8.1",
    tagline: {
      en: "Some voices were never meant to be heard.",
      uk: "Деякі голоси ніколи не мали бути почутими.",
    },
    description: {
      en: "In a city that never sleeps, silence can be more dangerous than noise. A lone figure stands above the chaos, haunted by voices no one else can hear. As reality begins to blur, he uncovers a hidden truth buried deep within the city, a truth that was never meant to surface. Some echoes should stay forgotten.",
      uk: "У місті, яке ніколи не спить, тиша може бути небезпечнішою за шум. Самотня постать стоїть над хаосом, переслідувана голосами, яких більше ніхто не чує. Коли реальність починає розмиватися, він відкриває приховану правду, поховану глибоко в серці міста, правду, яка ніколи не мала вийти назовні. Деякі відлуння повинні залишитися забутими.",
    },
    posterGradient: "linear-gradient(180deg, #1e293b 0%, #111827 50%, #040507 100%)",
    posterImage: "assets/echoes-city-of-silence.png",
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

function createPoster(movie, className = "poster") {
  const title = localizeMovieField(movie.title);
  const posterClass = `${className}${movie.posterImage ? " poster--image" : ""}`;
  const posterTitle = movie.posterImage ? "" : title.replace(/"/g, "&quot;");
  const posterMedia = movie.posterImage
    ? `<img class="poster__image" src="${movie.posterImage}" alt="${title}" loading="lazy" />`
    : "";

  return `<div class="${posterClass}" data-title="${posterTitle}" style="--poster-gradient: ${movie.posterGradient};">${posterMedia}</div>`;
}

function createMiniCard(movie) {
  return `
    <a class="mini-card" href="movie.html?id=${movie.id}">
      ${createPoster(movie, "movie-card__poster")}
    </a>
  `;
}

function createMovieCard(movie) {
  return `
    <article class="movie-card">
      <a href="movie.html?id=${movie.id}">
        ${createPoster(movie, "movie-card__poster")}
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

  premieresStrip.innerHTML = movies.map(createMiniCard).join("");

  const featured = movies[0];
  featuredCard.innerHTML = `
    ${createPoster(featured)}
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

  player.poster = movie.posterImage || "";
  if (movie.videoUrl) {
    player.src = movie.videoUrl;
    player.hidden = false;
    placeholder.hidden = true;
  } else {
    player.pause();
    player.removeAttribute("src");
    player.load();
    player.hidden = false;
    placeholder.hidden = false;
  }

  recommendations.innerHTML = movies
    .filter((item) => item.id !== movie.id)
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

const dramas = [
  {
    title: "Алиса в Пограничье (Сезон 1)",
    year: 2020,
    country: "Япония",
    genre: ["Фантастика", "Триллер", "Выживание"],
    description: "Группа друзей неожиданно попадает в параллельный Токио...",
    image: "images/alice-season1.jpg",
    link: "https://doramy.club/23884-alisa-v-pograniche.html"
  },
  {
    title: "Алиса в Пограничье (Сезон 2)",
    year: 2022,
    country: "Япония",
    genre: ["Фантастика", "Триллер", "Выживание"],
    description: "Продолжение истории в жестоком мире игр, где герои стремятся разгадать тайну и найти выход.",
    image: "images/alice-season2.jpg",
    link: "https://doramy.club/34532-1-alisa-v-pograniche-2.html"
  },
  {
    title: "Атакуя твоё сердце",
    year: 2023,
    country: "Китай",
    genre: ["Мелодрама", "Спорт", "Романтика"],
    description: "История любви между женщиной-полицейским и профессиональным стрелком, полный искр и противостояния.",
    image: "images/attacking.jpg",
    link: "https://doramy.club/13183-atakuya-tvoyo-serdce.html"
  },
  {
    title: "Вперёд, кальмар!",
    year: 2019,
    country: "Китай",
    genre: ["Романтика", "Киберспорт", "Комедия"],
    description: "Скромная студентка-программист влюбляется в капитана команды по киберспорту — роман начинается с конкуренции и взаимных побед.",
    image: "images/go-go-squid.jpg",
    link: "https://doramy.club/13005-1-dorogoj-lyubimy.html"
  },
  {
    title: "Выйти замуж за врага моего врага",
    year: 2021,
    country: "Китай",
    genre: ["Мелодрама", "Комедия"],
    description: "Двое врагов заключают фиктивный брак, чтобы победить общего врага, но чувства берут верх.",
    image: "images/marry-enemy.jpg",
    link: "https://doramy.club/47408-vyjti-zamuzh-za-vraga-moego-vraga.html"
  },
  {
    title: "Коп с чёрным поясом",
    year: 2022,
    country: "Южная Корея",
    genre: ["Экшен", "Комедия", "Криминал"],
    description: "Комедийный боевик о женщине-полицейском, владеющей боевыми искусствами и распутывающей опасные преступления.",
    image: "images/blackbelt.jpg",
    link: "https://doramy.club/45161-chyornyj-poyas-oficera.html"
  },
  {
    title: "Милый дом (Сезон 1)",
    year: 2020,
    country: "Южная Корея",
    genre: ["Ужасы", "Фантастика", "Триллер"],
    description: "Подросток переезжает в новый дом, где жильцы сталкиваются с монстрами, отражающими их желания.",
    image: "images/sweethome1.jpg",
    link: "https://doramy.club/23826-milyj-dom.html"
  },
  {
    title: "Милый дом (Сезон 2)",
    year: 2023,
    country: "Южная Корея",
    genre: ["Ужасы", "Фантастика", "Триллер"],
    description: "Герои оказываются в новом убежище и сталкиваются с ещё более сложными моральными выборами и угрозами.",
    image: "images/sweethome2.jpg",
    link: "https://doramy.club/41671-1-milyj-dom-2.html"
  },
  {
    title: "Милый дом (Сезон 3)",
    year: 2024,
    country: "Южная Корея",
    genre: ["Ужасы", "Фантастика", "Триллер"],
    description: "Заключительная глава, где раскрываются тайны монстров и герои делают последний выбор.",
    image: "images/sweethome3.jpg",
    link: "https://doramy.club/44568-milyj-dom-3.html"
  },
  {
    title: "Мы все мертвы",
    year: 2022,
    country: "Южная Корея",
    genre: ["Ужасы", "Триллер", "Школа"],
    description: "Школьники оказываются в ловушке в собственной школе после вспышки зомби-вируса и борются за выживание.",
    image: "images/allofus.jpg",
    link: "https://doramy.club/30016-my-vse-mertvy-2022.html"
  },
  {
    title: "Слабый герой (Сезон 1)",
    year: 2022,
    country: "Южная Корея",
    genre: ["Экшен", "Школа", "Психология", "Боевик", "Драма"],
    description: "Умный, но физически слабый ученик использует интеллект, чтобы бороться с насилием в школе.",
    image: "images/weakhero1.jpg",
    link: "https://doramy.club/34154-slabyj-geroj.html"
  },
  {
    title: "Слабый герой (Сезон 2)",
    year: 2025,
    country: "Южная Корея",
    genre: ["Экшен", "Школа", "Психология", "Драма"],
    description: "Продолжение борьбы за справедливость...",
    image: "images/weakhero2.jpg",
    link: "https://doramy.club/47355-slabyj-geroj-2.html"
  },
  {
    title: "Незнакомцы из Ада",
    year: 2019,
    country: "Южная Корея",
    genre: ["Триллер", "Ужасы", "Психология"],
    description: "Молодой парень переезжает в общежитие с пугающими соседями. Постепенно атмосфера становится всё более зловещей.",
    image: "images/hellisotherpeople.jpg",
    link: "https://doramy.club/13243-neznakomcy-iz-ada.html"
  },
  {
    title: "Балерина",
    year: 2023,
    country: "Южная Корея",
    genre: ["Экшен", "Триллер", "Драма"],
    description: "Телохранитель мстит за смерть своей подруги-балерины. Стильный неонуар с элементами боевика.",
    image: "images/ballerina.jpg",
    link: "https://doramy.club/43968-balerina-2023.html"
  },
  {
    title: "Первый: Герой старшей школы",
    year: 2025,
    country: "Южная Корея",
    genre: ["Драма", "Школа","Боевик","Выживание"],
    description: "Обачные школьники внезапно получают шанс стать супергероями - и платят за эту цену.",
    image: "images/the first one high school hero.jpg",
    link: "https://doramy.club/47718-pervyj-geroi-starshej-shkoly.html"
  },
  {
    title: "Акула: Начало",
    year: 2021,
    country: "Южная Корея",
    genre: ["Драма","Боевик","Боевые искусства"],
    description: "Школьник с мрачным прошлым сталкивается с системой, где выживает сильнейший.",
    image: "images/shark-the beginning.jpg",
    link: "https://doramy.club/28522-akula-nachalo.html"
  },
  {
    title: "Акула: Буря",
    year: 2025,
    country: "Южная Корея",
    genre: ["Драма","Триллер","Криминал"],
    description: "Продолжение истории о мести и борьбе за справедливость в стенах жестокого интерната.",
    image: "images/shark- the storm.jpg",
    link: "https://doramy.club/?s=Акула%3A+Буря"
  },
  {
    title: "Тише, король спит",
    year: 2025,
    country: "Южная Корея",
    genre: ["Драма","Триллер","Криминал"],
    description: "Художница, потерявшая всё из-за скандала, отправляется в снежные горы за вдохновением и неожиданно обретает и себя, и любовь, осваивая сноуборд с загадочным тренером.",
    image: "images/hush, the king is sleeping.jpg",
    link: "https://doramaclub.ong/194-tishe-korol-spit.html"
  },
  {
    title: "Учебная группа",
    year: 2025,
    country: "Южная Корея",
    genre: ["Школа","Комедия"],
    description: "Подростки с разным прошлым объединяются в секретной спецгруппе чтобы востоновить справедливость.",
    image: "images/Study group.jpg",
    link: "https://2.doramyclubtv.org/5274-uchebnaja-gruppa.html"
  },
  {
    title: "Магазин для киллеров",
    year: 2024,
    country: "Южная Корея",
    genre: ["Драма","Триллер","Криминал","Боевик"],
    description: "За безобидной лавкой скрывается не что больше чем просто лавка.",
    image: "images/a shop for killers.jpg",
    link: "https://doramy.club/42253-magazin-dlya-ubijc.html"
  },
  {
    title: "Счастье",
    year: 2021,
    country: "Южная Корея",
    genre: ["Драма","Триллер","Романтика","Боевик"],
    description: "В изолированном жилом комплексе вспыхивает таинственная инфекция, и выживание становится испытанием человечности.",
    image: "images/happiness.jpg",
    link: "https://doramy.club/28489-1-schaste.html"
  },
  { title: "Самая яркая звезда на ночном небе",
    year: 2019,
    country: "Китай",
    genre: ["Романтика","Комедия","Музыка",],
    description: "Амбициозный менеджер - девушка сталкивается с упрямым айдолом и влюбляется в него под софитами славы",
    image: "images/The brightest star in the night sky.jpg",
    link: "https://doramy.club/11401-samaya-yarkaya-zvezda-v-nochnom-nebe.html"
  },
  { title: "Когда я лечу к тебе",
    year: 2023,
    country: "Китай",
    genre: ["Романтика","Комедия",],
    description: "Романтическая школьная история о дружбе, поддержке и первых чувствах.",
    image: "images/When I fly towards you.jpg",
    link: "https://doramy.club/38094-kogda-ya-lechu-k-tebe.html"
  },
  { title: "Семь зловещих дощечек",
    year: 2025,
    country: "Китай",
    genre: ["Фантастика",],
    description: "Мистическая история о проклятии, которое пробуждается при касании древних табличек.",
    image: "images/the seven relics of omen.jpg",
    link: "https://doramy.club/47785-sem-zloveshhix-doshhechek.html"
  },
  { title: "Охотничьи псы",
    year: 2023,
    country: "Южная Корея",
    genre: ["Драма","Триллер","Боевик"],
    description: "Молодые бойцы вступают в бой с теневыми финансовыми бандитами ради справедливости. Но чем это все обернулось?",
    image: "images/Bloodhounds.jpg",
    link: "https://doramy.club/37704-1-oxotnichi-psy.html"
  },
  { title: "Возражденная",
    year: 2025,
    country: "Китай",   
    genre: ["Драма","Романтика"],
    description: "Парой смерть близких наносит большую боль,некоторые предаливают а некоторые нет. Сможет ли главная героиня справиться?",
    image: "images/Reborn.jpg",
    link: "https://doramaclub.ong/5718-vozrozhdennaja.html"
  },
  { title: "Пойманная судьба",
    year: 2025,
    country: "Китай",
    genre: ["Романтика","Мелодрама"],
    description: "Однажды случайная встреча перерасла в не что больше. Иногда простой поцелуй заканчивается не просто поцелуем, а целой историей.",
    image: "images/Trapped Fate.jpg",
    link: "images/https://doramy.club/47111-pojmannaya-sudba.html.jpg"
  },
];

let allDramasVisible = false;

function showAllDramas() {
  const container = document.getElementById("drama-list");

  if (!allDramasVisible) {
    renderDramas(dramas);
    allDramasVisible = true;
  } else {
    container.innerHTML = "<center><p>Нажмите «Все дорамы», чтобы отобразить список.</p></center>";
    allDramasVisible = false;
  }
}

function renderDramas(list) {
  const container = document.getElementById("drama-list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<center><p>Ничего не найдено.</p></center>";
    return;
  }

  list.forEach((drama) => {
    const card = document.createElement("div");
    card.className = "drama-card";
    card.innerHTML = `
      <img src="${drama.image}" alt="${drama.title}" class="drama-image">
      <div>
        <h2>${drama.title}</h2>
        <p><strong>Жанр:</strong> ${drama.genre.join(", ")}</p>
        <p><strong>Год:</strong> ${drama.year}</p>
        <p><strong>Страна:</strong> ${drama.country}</p>
        <p>${drama.description}</p>
        <a href="${drama.link}" target="_blank">
          <button class="watch-button">Посмотреть дораму</button>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterDramas() {
  const genre = document.getElementById("genre").value;
  const country = document.getElementById("country").value;
  const year = document.getElementById("year").value;

  const filtered = dramas.filter((drama) => {
    return (
      (genre === "" || drama.genre.includes(genre)) &&
      (country === "" || drama.country === country) &&
      (year === "" || drama.year == year)
    );
  });

  renderDramas(filtered);
  allDramasVisible = false; // Чтобы кнопка "Все дорамы" снова работала
}

function resetFilters() {
  document.getElementById("genre").value = "";
  document.getElementById("country").value = "";
  document.getElementById("year").value = "";

  document.getElementById("drama-list").innerHTML = "<center><p>Нажмите «Все дорамы», чтобы отобразить список.</p></center>";
  allDramasVisible = false;
}

window.onload = () => {
  document.getElementById("drama-list").innerHTML = "<center><p>Нажмите «Все дорамы», чтобы отобразить список.</p></center>";
};

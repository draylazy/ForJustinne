// Config
const ph = (text, w = 600, h = 600) =>
  `https://placehold.co/${w}x${h}/E2F0CB/2C3E35?text=${encodeURIComponent(text)}&font=playfair-display`;

const OUR_MEMORIES = {
  startDate: "2026-01-18",
  myName: "Dray",
  herName: "Justinne",
  brandLeft: "J",
  brandRight: "J",
  brandTitle: "for justinne",

  intro: {
    text: "for justinne <3",
    subtitle: "a little scrapbook of us",
    autoOpenAfterMs: 0,
  },

  music: {
    src: "music/The 1975 - About You (Official).mp3",
    title: "About You",
    artist: "The 1975",
    volume: 0.2,
    playOnOpen: true,
  },

  home: {
    eyebrow: "Welcome home, Bab!",
    subtitle: "I made this little corner of the internet just for you, so you can scroll through every month, every silly moment, and every reason I'm so lucky to have you.",
    heroPhoto: "photos/ourphoto.png",
    sticker: "you & me",
    loveNote: "Out of all the people in this whole wide world, I'm so happy it's you I get to annoy, adore, and hold hands with. Thank you for choosing me, every single day.",
    loveNoteSignature: "— yours always, Dray",
  },

  lockFutureMonths: true,
  monthsaries: [
    {
      month: 1, date: "2026-02-18", title: "The Beginning of Us",
      cover: "photos/cover/cover1month.jpg",
      message: `Happy first monthsary, my love!

One month ago on January 18, you officially became my girlfriend. I was just a guy with a huge crush on you, and now I get to call you mine. I still can't believe how lucky I am.

Thank you for saying yes, for every late night conversation, and for making ordinary days feel like little adventures. Here's to our very first month!`,
      photos: ["photos/Month1/month1a.jpg", "photos/Month1/month1b.jpg", "photos/Month1/month1c.jpg"],
    },
    {
      month: 2, date: "2026-03-18", title: "Blooming Together",
      cover: "photos/cover/cover2month.jpg",
      message: `Two months with you, and everything already feels brighter.

I love how comfortable we've become, but also how my heart still does a little skip every time your name pops up on my phone.

Thank you for being so patient, so sweet, and so uniquely you.`,
      photos: ["photos/Month2/month2a.jpg", "photos/Month2/month2b.jpg", "photos/Month2/month2c.jpg"],
    },
    {
      month: 3, date: "2026-04-18", title: "Simple Joys",
      cover: "photos/cover/cover3month.jpg",
      message: `Three months already!

Thank you for all the food trips, watching movies together, and for always letting me hold your hand.

Every little adventure with you turns into my new favorite memory.`,
      photos: ["photos/Month3/month3a.jpg", "photos/Month3/month3b.jpg", "photos/Month3/month3c.jpg"],
    },
    {
      month: 4, date: "2026-05-18", title: "Sunny Smiles",
      cover: "photos/cover/cover4month.jpg",
      message: `Four months with my sunshine!

Summer is in full swing, but honestly you outshine the sun any day.

Thank you for always finding ways to make me laugh, even on my most stressful days. You make life so light and happy.`,
      photos: ["photos/Month4/month4a.jpg", "photos/Month4/month4b.jpg", "photos/Month4/month4c.jpg"],
    },
    {
      month: 5, date: "2026-06-18", title: "Rainy Day Cuddles",
      cover: "photos/cover/cover5month.jpg",
      message: `Five months! Rainy days are here, which means the best excuse to stay in and cuddle.

I love our quiet moments the most: you scrolling on your phone, me just admiring you, pretending I'm looking at something else.

Home isn't a place anymore. It's you.`,
      photos: ["photos/Month5/month5a.jpg", "photos/Month5/month5b.jpg", "photos/Month5/month5c.jpg"],
    },
    {
      month: 6, date: "2026-07-18", title: "Half a Year of Us",
      cover: "photos/cover/cover6month.jpg",
      message: `Six months! Half a whole year of being yours.

We've had our sweet days and our challenging days, and I'd choose every single one of them again as long as they're with you.

You make me want to be a better man. I'm so proud of us.`,
      photos: ["photos/Month6/month6a.jpg", "photos/Month6/month6b.jpg", "photos/Month6/month6c.jpg"],
    },
    {
      month: 7, date: "2026-08-18", title: "Little Inside Jokes",
      cover: "photos/cover/cover7month.jpg",
      message: `Seven months of inside jokes nobody else understands.

I love that you laugh at my corniest jokes, and I love that you're weird with me. "bazalrighttt!"

Never stop being my favorite person to be weird with.`,
      photos: ["photos/Month7/month7a.jpg", "photos/Month7/month7b.jpg", "photos/Month7/month7c.jpg"],
    },
    {
      month: 8, date: "2026-09-18", title: "Growing Up Together",
      cover: "photos/cover/cover8month.jpg",
      message: `Eight months! We keep growing together, and somehow I fall for every new little thing I discover about you.

Thank you for listening to my chikas, for sharing your thoughts, and for trusting me with your heart.

Loving you is the best decision I've ever made.`,
      photos: ["photos/ourphoto1.jpg", "photos/Month8/month8b.jpg", "photos/Month8/month8c.jpg"],
    },
    {
      month: 9, date: "2026-10-18", title: "Best Birthday Gift",
      cover: "photos/cover/cover9month.jpg",
      message: `Nine months! Three-quarters of a year together.

It's my birth month, and having you as my girlfriend is the best gift I could ever ask for.

I love you so much, and I'm so grateful to have you in my life.`,
      photos: ["photos/Month9/month9a.jpg", "photos/Month9/month9b.jpg", "photos/Month9/month9c.jpg"],
    },
    {
      month: 10, date: "2026-11-18", title: "Double Digits & Grateful",
      cover: "photos/cover/unavailable.jpg",
      message: `Ten months! Double digits, baby!

This month is all about gratitude, and there is nothing I'm more thankful for than having you by my side.

Thank you for being my constant, my favorite person, and my biggest blessing.`,
      photos: [ph("Month 10 · A"), ph("Month 10 · B"), ph("Month 10 · C")],
    },
    {
      month: 11, date: "2026-12-18", title: "Our First Holidays",
      cover: "photos/cover/unavailable.jpg",
      message: `Eleven months! And the most wonderful time of the year, made a million times better because I have you.

You're the warmest thing about this December. Better than hot chocolate, Christmas lights, and anything under the tree.

One more month until our whole first year together!`,
      photos: [ph("Month 11 · A"), ph("Month 11 · B"), ph("Month 11 · C")],
    },
    {
      month: 12, date: "2027-01-18", title: "One Whole Year",
      cover: "photos/cover/unavailable.jpg",
      message: `HAPPY 1ST ANNIVERSARY, Babb!

365 days since January 18 when you became my girlfriend. Twelve monthsaries of us.

Countless hugs, laughs, food trips, late night calls, and endless 'I love you's.

Thank you for this year. Thank you for choosing me every single day. I love you more than words can say. Here's to forever, starting with year two!`,
      photos: [ph("Year 1 · A"), ph("Year 1 · B"), ph("Year 1 · C")],
    },
  ],

  // moments
  filters: [
    { id: "all", label: "All" },
    { id: "dates", label: "Dates" },
    { id: "silly", label: "Silly" },
    { id: "favorites", label: "Favorites" },
  ],
  moments: [
    { src: "photos/moments/rn.jpg", caption: "my RN <3 congrats ", date: "2026-01-18", tags: ["dates", "favorites"] },
    { src: "photos/moments/valentinesdate.jpg", caption: "our first valentine's date", date: "2026-02-14", tags: ["dates", "favorites"] },
    { src: "photos/moments/toosweet.jpg", caption: "i love ice cream dates with u", date: "2026-05-07", tags: ["favorites", "dates"] },
    { src: "photos/moments/felixdupe.jpg", caption: "lookalike of felix sa santa fe", date: "2026-09-20", tags: ["silly"] },
    { src: "photos/moments/cavenidray.jpg", caption: "cuties sa cave ni draylazy", date: "2026-05-18", tags: ["dates"] },
    { src: "photos/moments/greengirl.jpg", caption: "the green girl", date: "2026-10-03", tags: ["silly", "favorites"] },
    { src: "photos/moments/ilabdabyew.jpg", caption: "i lab da byew hehe", date: "2026-05-07", tags: ["silly"] },
    { src: "photos/moments/santafe1.jpg", caption: "our first santa fe trip", date: "2026-09-19", tags: ["dates", "favorites"] },
    { src: "photos/moments/cutiejusiya.jpg", caption: "hehe cutie jud ani na pic", date: "2026-09-20", tags: ["dates", "favorites"] },
    { src: "photos/moments/iloveyou.jpg", caption: "my 2 cuties", date: "2026-08-14", tags: ["favorites"] },
    { src: "photos/moments/hahaha.jpg", caption: "nawng ohhh heheh", date: "2026-09-19", tags: ["silly"] },
    { src: "photos/moments/liog.jpg", caption: "your fave position huhu🍤", date: "2026-10-02", tags: ["silly"] },
  ],

  // reasons
  reasons: [
    "The way your eyes crinkle when you laugh.",
    "How safe and calm I feel whenever I'm beside you.",
    "You always know when something's wrong, even when I say I'm fine.",
    "Your hugs fix literally everything.",
    "Your gentle heart and how you genuinely care for people.",
    "The way your eyes light up when you talk about the things you love.",
    "You believe in me more than I believe in myself.",
    "Your voice is my favorite sound in the world.",
    "You laugh at my jokes, even the really bad ones.",
    "You look cute even when you just woke up. Unfair, honestly.",
    "How you look at me like I'm the most special person in the world.",
    "You're my safe place.",
    "The way you say my name.",
    "How excited you get over food trips and sweet treats.",
    "You make me want to be better, every single day.",
    "You hold my hand like you never want to let go.",
    "You're beautiful inside and out (mostly inside, but wow, the outside too).",
    "You handle my moods with so much patience.",
    "Every moment with you feels like home.",
    "You turned my ordinary life into my favorite story.",
    "You're my best friend AND my girlfriend. Jackpot.",
    "Simply because you're you, and there's no one else like you.",
  ],

  // open when
  openWhen: [
    {
      label: "you miss me", message: `Hi Bab. If you're reading this, you miss me, and I promise I miss you more.

Close your eyes and imagine me giving you the tightest hug right now. Can you feel it? That's me.

Text me, call me, send me a hundred hearts. I'm never really far.`,
    },
    {
      label: "you're having a bad day", message: `Hey, my strong girl. Bad days happen, but they don't get to keep you.

You've gotten through every hard day so far, and you'll get through this one too. Drink some water, eat something sweet, and be gentle with yourself.

I'm so proud of you, always. And I'm one call away.`,
    },
    {
      label: "you can't sleep", message: `Can't sleep, huh? Here's a little bedtime story:

Once upon a time, a lucky guy met the most amazing girl. He thought about her every night before falling asleep, and he still does. The end.

Now get cozy, breathe slowly, and dream of us. Goodnight, bab.`,
    },
    {
      label: "you need a laugh", message: `Just a reminder of the time I saw you throw your bag into the trash can. Funniest thing ever! HAHAHAHA

Smile, pretty. It's my favorite view.`,
    },
  ],

  // footer
  footer: {
    hand: "made with all my love",
    text: "for Justinne, from Dray · 2026",
  },
};


(() => {
  "use strict";

  const C = OUR_MEMORIES;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // icons
  const ICONS = {
    heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.6-4.6-10-9.4C.4 8.3 2.4 4 6.4 4c2.3 0 3.8 1.3 5.6 3.4C13.8 5.3 15.3 4 17.6 4c4 0 6 4.3 4.4 7.6C19.6 16.4 12 21 12 21z"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20C4 10 10 4 21 3c-.5 11-7 17-17 17z" fill="currentColor"/><path d="M4 20 14 10" stroke="rgba(255,255,255,.7)" stroke-width="1.4" stroke-linecap="round"/></svg>`,
    lock: ``,
  };
  $$("[data-icon]").forEach(el => el.innerHTML = ICONS[el.dataset.icon] || "");

  // date helpers
  const parseDate = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const today0 = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
  const fmtLong = d => d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const fmtShort = d => d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const DAY = 864e5;
  const daysBetween = (a, b) => Math.round((b - a) / DAY);
  const ordinal = n => { const s = ["th", "st", "nd", "rd"], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  const monthsBetween = (a, b) => {
    let m = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
    if (b.getDate() < a.getDate()) m--;
    return Math.max(0, m);
  };
  const nthMonthsary = (start, n) => {
    const y = start.getFullYear(), m = start.getMonth() + n;
    const last = new Date(y, m + 1, 0).getDate();
    return new Date(y, m, Math.min(start.getDate(), last));
  };
  const paragraphs = txt => txt.trim().split(/\n\s*\n/).map(p => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`).join("");
  const rand = (a, b) => a + Math.random() * (b - a);
  const shuffle = arr => { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };

  const START = parseDate(C.startDate);

  // toast
  let toastTimer;
  function toast(msg, ms = 3200) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), ms);
  }

  // confetti
  let heartShape = null;
  const CONFETTI_COLORS = ["#9CAF88", "#B5EAD7", "#E2F0CB", "#7A9168", "#F3C9C4", "#FFFFFF"];
  function burst(x = 0.5, y = 0.6, big = false) {
    if (typeof confetti !== "function") return;
    if (!heartShape && confetti.shapeFromPath) {
      try {
        heartShape = confetti.shapeFromPath({ path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z" });
      } catch (e) { /* fallback to circles */ }
    }
    const shapes = heartShape ? [heartShape, heartShape, "circle"] : ["circle"];
    const base = { origin: { x, y }, colors: CONFETTI_COLORS, shapes, scalar: 1.25, ticks: 240, disableForReducedMotion: true, zIndex: 1200 };
    confetti({ ...base, particleCount: big ? 110 : 55, spread: big ? 110 : 75, startVelocity: big ? 48 : 36 });
    if (big) {
      setTimeout(() => confetti({ ...base, particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.75 } }), 250);
      setTimeout(() => confetti({ ...base, particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.75 } }), 400);
    }
  }
  const burstFrom = (el, big) => {
    const r = el.getBoundingClientRect();
    burst((r.left + r.width / 2) / innerWidth, (r.top + r.height / 2) / innerHeight, big);
  };

  // particles
  function spawnParticles(container, count, palette) {
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "particle";
      s.innerHTML = Math.random() < 0.55 ? ICONS.heart : ICONS.leaf;
      const dur = rand(16, 32);
      s.style.cssText = `
        left:${rand(0, 100)}%;
        --size:${rand(10, 26).toFixed(0)}px;
        --dur:${dur}s;
        --delay:${-rand(0, dur)}s;
        --drift:${rand(-80, 80).toFixed(0)}px;
        --rot:${rand(-260, 260).toFixed(0)}deg;
        --o:${rand(.35, .8).toFixed(2)};
        --c:${palette[Math.floor(Math.random() * palette.length)]};`;
      container.appendChild(s);
    }
  }

  // loader
  let opened = false;
  function initLoader() {
    const el = $("#typeText");
    const text = C.intro.text;
    $("#loaderSub").textContent = C.intro.subtitle;
    spawnParticles($("#loaderParticles"), innerWidth < 640 ? 16 : 26, ["rgba(255,255,255,.9)", "#E2F0CB", "#B5EAD7"]);

    let i = 0;
    const step = () => {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(step, text[i - 1] === " " ? 160 : rand(85, 150));
      } else {
        $("#loader").classList.add("typed");
        if (C.intro.autoOpenAfterMs > 0) setTimeout(openSite, C.intro.autoOpenAfterMs);
      }
    };
    setTimeout(step, 900);
    $("#openBtn").addEventListener("click", openSite);
  }

  function openSite() {
    if (opened) return;
    opened = true;
    if (C.music.playOnOpen) playMusic(true);
    const loader = $("#loader");
    loader.classList.add("opening");
    document.body.classList.remove("is-loading");
    document.body.classList.add("revealed");
    setTimeout(() => {
      loader.remove();
      positionIndicator();
      animateProgressBars();
      celebrateIfMonthsary();
    }, 1300);
  }

  // nav
  const VIEWS = ["home", "timeline", "scrapbook", "fun"];
  let currentView = "home";

  function positionIndicator() {
    const active = $(".nav-btn.active");
    const ind = $("#navIndicator");
    if (!active) return;
    ind.style.width = active.offsetWidth + "px";
    ind.style.transform = `translateX(${active.offsetLeft}px)`;
  }

  function showView(name, updateHash = true) {
    if (!VIEWS.includes(name)) name = "home";
    if (name === currentView && updateHash) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    currentView = name;
    $$(".view").forEach(v => v.classList.toggle("active", v.id === `view-${name}`));
    $$(".nav-btn").forEach(b => {
      const on = b.dataset.view === name;
      b.classList.toggle("active", on);
      on ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current");
    });
    positionIndicator();
    window.scrollTo({ top: 0, behavior: "instant" });
    if (updateHash) history.replaceState(null, "", `#${name}`);
    animateProgressBars();
  }

  function initNav() {
    $$(".nav-btn").forEach(b => b.addEventListener("click", () => showView(b.dataset.view)));
    document.addEventListener("click", e => {
      const g = e.target.closest("[data-goto]");
      if (g) showView(g.dataset.goto);
    });
    window.addEventListener("resize", positionIndicator);
    window.addEventListener("hashchange", () => showView(location.hash.slice(1), false));
    const initial = location.hash.slice(1);
    if (VIEWS.includes(initial)) showView(initial, false);
    document.fonts && document.fonts.ready.then(positionIndicator);
  }

  // home view
  function initHome() {
    const h = C.home;
    $("#heroName").textContent = C.herName;
    $("#heroSub").textContent = h.subtitle;
    $("#heroPhoto").src = h.heroPhoto;
    $("#heroSticker").textContent = h.sticker;
    $("#loveNote").textContent = h.loveNote;
    $("#loveNoteSig").textContent = h.loveNoteSignature;
    if ($("#brandMe")) $("#brandMe").textContent = C.brandLeft || "J";
    if ($("#brandHer")) $("#brandHer").textContent = C.brandRight || "J";
    if ($("#brandText")) $("#brandText").textContent = C.brandTitle || "for justinne";
    $("#footerHand").textContent = C.footer.hand;
    $("#footerText").textContent = C.footer.text;
    $("#sinceDate").textContent = fmtLong(START);

    // Eyebrow: special message on monthsary day
    const t = today0();
    const n = monthsBetween(START, t);
    const isMonthsary = n > 0 && nthMonthsary(START, n).getTime() === t.getTime();
    $("#heroEyebrow").textContent = isMonthsary
      ? (n % 12 === 0 ? `Happy ${ordinal(n / 12)} Anniversary` : `Happy ${ordinal(n)} Monthsary`)
      : h.eyebrow;

    // Live counter
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, now - START);
      $("#cDays").textContent = Math.floor(diff / DAY).toLocaleString();
      $("#cMonths").textContent = monthsBetween(START, now).toLocaleString();
      $("#cHours").textContent = Math.floor(diff / 36e5).toLocaleString();
      $("#cMinutes").textContent = Math.floor(diff / 6e4).toLocaleString();
      $("#cSeconds").textContent = Math.floor(diff / 1e3).toLocaleString();
    };
    tick();
    setInterval(tick, 1000);

    // Next monthsary
    let k = Math.max(1, n);
    while (nthMonthsary(START, k) < t) k++;
    const next = nthMonthsary(START, k);
    const prev = k > 1 ? nthMonthsary(START, k - 1) : START;
    const left = daysBetween(t, next);
    if (left === 0) {
      $("#nextTitle").textContent = `Our ${ordinal(k)} monthsary`;
      $("#nextDays").textContent = "Today!";
      $("#nextDate").textContent = fmtLong(next);
    } else {
      $("#nextTitle").textContent = `Our ${ordinal(k)} monthsary`;
      $("#nextDays").textContent = `in ${left} day${left === 1 ? "" : "s"}`;
      $("#nextDate").textContent = fmtLong(next);
    }
    const total = daysBetween(prev, next) || 1;
    const pct = left === 0 ? 100 : Math.round((daysBetween(prev, t) / total) * 100);
    $("#monthProgress").dataset.pct = pct;
    $("#monthProgressLabel").textContent = pct + "%";
  }

  function animateProgressBars() {
    requestAnimationFrame(() => {
      $$("[data-pct]").forEach(el => { el.style.width = "0"; });
      requestAnimationFrame(() => setTimeout(() => {
        $$("[data-pct]").forEach(el => { el.style.width = el.dataset.pct + "%"; });
      }, 150));
    });
  }

  function celebrateIfMonthsary() {
    const t = today0();
    const n = monthsBetween(START, t);
    if (n > 0 && nthMonthsary(START, n).getTime() === t.getTime()) {
      burst(0.5, 0.55, true);
      toast(n % 12 === 0 ? `Happy ${ordinal(n / 12)} anniversary, ${C.herName}!` : `Happy ${ordinal(n)} monthsary, ${C.herName}!`, 4500);
    }
  }

  // timeline
  function initTimeline() {
    const grid = $("#monthsGrid");
    const t = today0();
    let unlockedCount = 0;

    C.monthsaries.forEach((m, idx) => {
      const d = parseDate(m.date);
      const unlocked = !C.lockFutureMonths || d <= t;
      if (unlocked) unlockedCount++;
      const num = String(m.month).padStart(2, "0");
      const card = document.createElement("article");
      card.className = "flip-card reveal" + (unlocked ? "" : " locked");
      card.style.setProperty("--i", Math.min(idx, 8) + 2);
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Month ${m.month}: ${m.title}. Tap to flip.`);
      const daysLeft = daysBetween(t, d);
      card.innerHTML = `
        <div class="flip-inner">
          <div class="flip-face flip-front">
            <div class="month-photo">
              <img src="${m.cover}" alt="Month ${m.month} photo" loading="lazy" />
              <span class="month-badge">Month ${num}</span>
              <span class="month-heart">${ICONS.heart}</span>
              ${unlocked ? "" : `<div class="lock-overlay"><span>unlocks in ${daysLeft} day${daysLeft === 1 ? "" : "s"}</span></div>`}
            </div>
            <div class="month-info">
              <div><p class="date">${fmtShort(d)}</p><h3>${m.title}</h3></div>
              <span class="tap-hint">flip ↻</span>
            </div>
          </div>
          <div class="flip-face flip-back">
            <span class="num" aria-hidden="true">${num}</span>
            <span class="chip">Month ${m.month}</span>
            <h3>${unlocked ? m.title : "Not yet, love!"}</h3>
            <p class="snippet">${unlocked ? m.message.trim().split("\n")[0] : `Be patient, this letter opens on ${fmtLong(d)}.`}</p>
            <div class="back-actions">
              ${unlocked ? `<button class="btn btn-primary" data-letter="${idx}">Read my letter</button>` : ""}
              <small>tap to flip back</small>
            </div>
          </div>
        </div>`;
      card.addEventListener("click", e => {
        const btn = e.target.closest("[data-letter]");
        if (btn) { e.stopPropagation(); openLetter(+btn.dataset.letter, btn); return; }
        card.classList.toggle("flipped");
      });
      card.addEventListener("keydown", e => {
        if ((e.key === "Enter" || e.key === " ") && e.target === card) { e.preventDefault(); card.classList.toggle("flipped"); }
      });
      grid.appendChild(card);
    });

    const total = C.monthsaries.length;
    $("#journeyLabel").textContent = `${unlockedCount} / ${total} celebrated`;
    $("#journeyBar").dataset.pct = Math.round((unlockedCount / total) * 100);
  }

  function openLetter(idx, fromEl) {
    const m = C.monthsaries[idx];
    const d = parseDate(m.date);
    const photos = (m.photos || []).map((src, i) =>
      `<button class="mini-polaroid" style="--r:${[-3, 2, -1.5, 3, -2][i % 5]}deg" data-photo="${i}"><img src="${src}" alt="Month ${m.month} photo ${i + 1}" loading="lazy" /></button>`
    ).join("");
    openModal(`
      <div class="letter">
        <div class="letter-head">
          <span class="letter-emoji"></span>
          <span class="chip">Month ${m.month} · ${fmtLong(d)}</span>
          <h2>${m.title}</h2>
        </div>
        <div class="letter-paper">
          <div class="letter-body">${paragraphs(m.message)}</div>
          <p class="signature">With all my love, ${C.myName}</p>
        </div>
        ${photos ? `<h3 class="letter-photos-title">Little memories from this month</h3><div class="letter-photos">${photos}</div>` : ""}
      </div>`);
    $$("#modalContent [data-photo]").forEach(b => b.addEventListener("click", () => {
      openLightbox(m.photos.map((src, i) => ({ src, caption: `${m.title} · ${i + 1}`, date: m.date })), +b.dataset.photo);
    }));
    if (fromEl) burstFrom(fromEl, false);
  }

  // modal
  let lastFocus = null;
  let onModalClose = null;
  function openModal(html, onClose) {
    lastFocus = document.activeElement;
    onModalClose = onClose || null;
    $("#modalContent").innerHTML = html;
    $("#modalCard").scrollTop = 0;
    const m = $("#modal");
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    setTimeout(() => $("#modalClose").focus({ preventScroll: true }), 50);
  }
  function closeModal() {
    const m = $("#modal");
    if (!m.classList.contains("open")) return;
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (onModalClose) { onModalClose(); onModalClose = null; }
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  }
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });

  // lightbox
  let lbItems = [], lbIndex = 0;
  function openLightbox(items, index) {
    lbItems = items; lbIndex = index;
    renderLightbox(false);
    const lb = $("#lightbox");
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function renderLightbox(animate = true) {
    const it = lbItems[lbIndex];
    const img = $("#lbImg");
    img.src = it.src;
    img.alt = it.caption || "Photo";
    $("#lbCaption").textContent = it.caption || "";
    $("#lbDate").textContent = it.date ? fmtLong(parseDate(it.date)) : "";
    $("#lbCounter").textContent = `${lbIndex + 1} / ${lbItems.length}`;
    const multi = lbItems.length > 1;
    $("#lbPrev").style.visibility = $("#lbNext").style.visibility = multi ? "visible" : "hidden";
    if (animate) { img.classList.remove("swap"); void img.offsetWidth; img.classList.add("swap"); }
  }
  const lbStep = dir => { if (lbItems.length < 2) return; lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length; renderLightbox(); };
  function closeLightbox() {
    const lb = $("#lightbox");
    if (!lb.classList.contains("open")) return;
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    if (!$("#modal").classList.contains("open")) document.body.classList.remove("no-scroll");
  }
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => lbStep(-1));
  $("#lbNext").addEventListener("click", () => lbStep(1));
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox" || e.target.classList.contains("lb-stage")) closeLightbox(); });
  let touchX = null;
  $("#lightbox").addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
  $("#lightbox").addEventListener("touchend", e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
    touchX = null;
  });

  document.addEventListener("keydown", e => {
    if ($("#lightbox").classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lbStep(1);
      if (e.key === "ArrowLeft") lbStep(-1);
    } else if (e.key === "Escape") closeModal();
  });

  // scrapbook
  let activeFilter = "all";
  function initScrapbook() {
    const gallery = $("#gallery");
    const filters = $("#filters");

    C.filters.forEach(f => {
      const count = f.id === "all" ? C.moments.length : C.moments.filter(m => (m.tags || []).includes(f.id)).length;
      const b = document.createElement("button");
      b.className = "filter-btn" + (f.id === "all" ? " active" : "");
      b.dataset.filter = f.id;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", f.id === "all");
      b.innerHTML = `${f.label}<span class="count">${count}</span>`;
      b.addEventListener("click", () => applyFilter(f.id));
      filters.appendChild(b);
    });

    C.moments.forEach((m, i) => {
      const fig = document.createElement("figure");
      const isNote = m.isNote || (m.caption && m.caption.toLowerCase().includes("more moments"));
      fig.className = "polaroid reveal" + (isNote ? " is-note" : "");
      fig.style.setProperty("--i", Math.min(i, 10) + 2);
      fig.style.setProperty("--r", `${[-3, 2.2, -1.4, 3.2, -2.4, 1.2, -3.4, 2.6][i % 8]}deg`);
      fig.style.setProperty("--tape", `${[-4, 3, -2, 5, -5][i % 5]}deg`);
      fig.dataset.index = i;
      fig.tabIndex = 0;
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", `Open photo: ${m.caption}`);
      const fav = (m.tags || []).includes("favorites");
      fig.innerHTML = `
        <img src="${m.src}" alt="${m.caption}" loading="lazy" />
        ${fav ? `<span class="fav">${ICONS.heart}</span>` : ""}
        <figcaption>${m.caption}</figcaption>`;
      const open = () => {
        const visible = $$(".polaroid:not(.hide)", gallery).map(el => +el.dataset.index);
        openLightbox(visible.map(k => C.moments[k]), visible.indexOf(i));
      };
      fig.addEventListener("click", open);
      fig.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      gallery.appendChild(fig);
    });
  }
  function applyFilter(id) {
    activeFilter = id;
    $$(".filter-btn").forEach(b => {
      const on = b.dataset.filter === id;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    let shown = 0;
    $$(".polaroid", $("#gallery")).forEach(el => {
      const m = C.moments[+el.dataset.index];
      const match = id === "all" || (m.tags || []).includes(id);
      el.classList.remove("pop", "reveal");
      el.classList.toggle("hide", !match);
      if (match) { el.style.setProperty("--d", shown++); void el.offsetWidth; el.classList.add("pop"); }
    });
    $("#emptyState").style.display = shown ? "none" : "block";
  }

  // jar
  function initJar() {
    const body = $("#jarBody");
    const colors = ["#9CAF88", "#B5EAD7", "#F3C9C4", "#7A9168", "#E2F0CB", "#FFFFFF"];
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("span");
      s.className = "jar-item";
      const isHeart = i % 2 === 0;
      const size = isHeart ? rand(18, 28) : rand(16, 24);
      s.style.cssText = `left:${rand(8, 78)}%; bottom:${rand(4, 52)}%; width:${size}px; height:${isHeart ? size : size * .7}px;
        transform:rotate(${rand(-40, 40)}deg); --rr:${rand(-40, 40).toFixed(0)}deg; animation-delay:${-rand(0, 3.5)}s;
        color:${colors[i % colors.length]};`;
      if (isHeart) s.innerHTML = ICONS.heart;
      else { s.classList.add("jar-paper"); s.style.background = colors[(i + 2) % colors.length]; }
      body.appendChild(s);
    }

    let bag = [];
    const seen = new Set();
    const total = C.reasons.length;
    const updateCount = () => $("#reasonCount").textContent = `${seen.size} of ${total} reasons discovered${seen.size === total ? " — and counting forever" : ""}`;
    updateCount();

    const pull = () => {
      if (!bag.length) bag = shuffle([...Array(total).keys()]);
      const idx = bag.pop();
      seen.add(idx);
      const jar = $("#jar");
      jar.classList.remove("shake"); void jar.offsetWidth; jar.classList.add("shake");
      const note = $("#reasonNote");
      $("#reasonNum").textContent = `Reason #${idx + 1}`;
      $("#reasonText").textContent = C.reasons[idx];
      note.classList.remove("pop"); void note.offsetWidth; note.classList.add("pop");
      updateCount();
      setTimeout(() => burstFrom(jar, false), 250);
    };
    $("#jar").addEventListener("click", pull);
    $("#reasonBtn").addEventListener("click", pull);
  }

  // envelopes
  function initEnvelopes() {
    const wrap = $("#envelopes");
    const KEY = "ourMemories.openedEnvelopes";
    let openedSet;
    try { openedSet = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { openedSet = new Set(); }
    const palettes = [
      { env: "#C8E6B8", dark: "#A9C796", flap: "#B7D8A4" },
      { env: "#C9EEDF", dark: "#9FD8C2", flap: "#B5EAD7" },
      { env: "#F1EFE6", dark: "#DCD8C8", flap: "#E8E5D8" },
      { env: "#B9C9A8", dark: "#97AD85", flap: "#A9BC95" },
    ];
    C.openWhen.forEach((o, i) => {
      const p = palettes[i % palettes.length];
      const b = document.createElement("button");
      b.className = "env-card" + (openedSet.has(i) ? " was-opened" : "");
      b.style.cssText = `--env:${p.env}; --env-dark:${p.dark}; --env-flap:${p.flap};`;
      b.setAttribute("aria-label", `Open when ${o.label}`);
      b.innerHTML = `
        <div class="envelope">
          <span class="env-back"></span>
          <span class="env-letter">for you</span>
          <span class="env-front"></span>
          <span class="env-flap"></span>
          <span class="env-seal">${ICONS.heart}</span>
        </div>
        <p class="env-label"><span>open when…</span><strong>${o.label}</strong></p>
        <span class="env-opened">opened</span>`;
      b.addEventListener("click", () => {
        if (b.classList.contains("open")) return;
        b.classList.add("open");
        setTimeout(() => {
          burstFrom(b, false);
          openModal(`
            <div class="letter">
              <div class="letter-head">
                <span class="letter-emoji">${o.emoji || ""}</span>
                <span class="chip">open when…</span>
                <h2>${o.label.charAt(0).toUpperCase() + o.label.slice(1)}</h2>
              </div>
              <div class="letter-paper">
                <div class="letter-body">${paragraphs(o.message)}</div>
                <p class="signature">Love, ${C.myName}</p>
              </div>
            </div>`, () => setTimeout(() => b.classList.remove("open"), 300));
          openedSet.add(i);
          b.classList.add("was-opened");
          try { localStorage.setItem(KEY, JSON.stringify([...openedSet])); } catch { /* private mode */ }
        }, 800);
      });
      wrap.appendChild(b);
    });
  }

  // music
  const audio = $("#bgMusic");
  function initMusic() {
    $("#songTitle").textContent = C.music.title;
    $("#songArtist").textContent = C.music.artist;
    if (C.music.src) { audio.src = C.music.src; }
    audio.volume = Math.min(1, Math.max(0, C.music.volume ?? 0.6));
    $("#musicBtn").addEventListener("click", () => audio.paused ? playMusic(false) : pauseMusic());
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("play", () => setPlaying(true));
  }
  function setPlaying(on) {
    $("#musicPlayer").classList.toggle("playing", on);
    $("#musicBtn").setAttribute("aria-label", on ? "Pause our song" : "Play our song");
  }
  function playMusic(silent) {
    if (!C.music.src) {
      if (!silent) toast("Add your song in OUR_MEMORIES.music.src");
      return;
    }
    audio.play().catch(() => { if (!silent) toast("Couldn't play the song. Check the file path"); });
  }
  function pauseMusic() { audio.pause(); }

  // init
  spawnParticles($("#bgParticles"), innerWidth < 640 ? 14 : 24, ["#9CAF88", "#B5EAD7", "#C8DDB4", "#F3C9C4"]);
  initHome();
  initTimeline();
  initScrapbook();
  initJar();
  initEnvelopes();
  initMusic();
  initNav();
  initLoader();
})();

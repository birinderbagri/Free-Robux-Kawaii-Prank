/* ✿ Kawaii Robux Cloud ✿
   A prank page. Nothing here generates anything, and nothing ever leaves
   this browser tab — there is no fetch(), no form action, no storage.  */

const $ = (id) => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const state = { name: '', amount: 0 };

/* ---------------- decorative sky ---------------- */
(function stars() {
  const box = $('stars');
  const glyphs = ['✧', '✦', '·', '❀', '♡', '☁'];
  for (let i = 0; i < 34; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.textContent = pick(glyphs);
    s.style.left = rand(0, 100) + '%';
    s.style.top = rand(0, 100) + '%';
    s.style.animationDelay = rand(0, 3.4) + 's';
    s.style.fontSize = rand(10, 22) + 'px';
    box.appendChild(s);
  }
})();

/* ---------------- fake social proof ticker ---------------- */
(function ticker() {
  const names = ['StrawberryMilk_99', 'boba_gremlin', 'xX_SoftKitty_Xx', 'PixelPlum', 'nugget.exe',
    'MochiKnight', 'sleepydev', 'CloudBunbun', 'Sir_Snacks', 'peachy_void', 'TinyDragon77', 'marshmallowop'];
  const line = () =>
    `♡ ${pick(names)} just "received" ${(Math.floor(rand(1, 90)) * 100).toLocaleString()} R$ (not really)`;
  const items = Array.from({ length: 14 }, line);
  $('tickerTrack').textContent = [...items, ...items].join('   ·   ');
})();

/* ---------------- ever-climbing fake counter ---------------- */
(function counter() {
  const el = $('globalCounter');
  let n = 8_472_913;
  const paint = () => (el.textContent = n.toLocaleString());
  paint();
  setInterval(() => { n += Math.floor(rand(3, 240)); paint(); }, 700);
})();

/* ---------------- step 1: pick a bag ---------------- */
document.querySelectorAll('.amount').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amount').forEach((b) => b.setAttribute('aria-checked', 'false'));
    btn.setAttribute('aria-checked', 'true');
    state.amount = Number(btn.dataset.amt);
  });
});

function show(step) {
  document.querySelectorAll('.step').forEach((s) => s.classList.add('hidden'));
  const el = $('step-' + step);
  el.classList.remove('hidden');
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('startBtn').addEventListener('click', () => {
  const raw = $('username').value.trim();
  state.name = raw || 'anonymous cutie';
  if (!state.amount) {
    const first = document.querySelector('.amount');
    first.click();
    first.animate(
      [{ transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }],
      { duration: 260, iterations: 2 }
    );
    return;
  }
  buildGrid();
  show(2);
});

/* ---------------- step 2: the cat check ---------------- */
const CATS = ['🐱', '😺', '😻', '🐈', '🙀', '😸'];
const NOT_CATS = ['🐶', '🐸', '🍰', '🦄', '🐼', '🍓', '🐧', '🌈', '🧁'];

function buildGrid() {
  const grid = $('catGrid');
  grid.innerHTML = '';
  const tiles = [];
  const catCount = 4;
  for (let i = 0; i < catCount; i++) tiles.push(pick(CATS));
  for (let i = tiles.length; i < 9; i++) tiles.push(pick(NOT_CATS));
  tiles.sort(() => Math.random() - 0.5);

  tiles.forEach((glyph) => {
    const cell = document.createElement('button');
    cell.className = 'cell';
    cell.type = 'button';
    cell.textContent = glyph;
    cell.setAttribute('aria-pressed', 'false');
    cell.setAttribute('aria-label', 'verification tile');
    cell.addEventListener('click', () => {
      cell.setAttribute('aria-pressed', cell.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      const n = grid.querySelectorAll('[aria-pressed=true]').length;
      $('verifyBtn').disabled = n < 3;
      $('verifyHint').textContent = n < 3 ? `select at least 3 kitties (${n}/3)` : 'purrfect ♡';
    });
    grid.appendChild(cell);
  });
  $('verifyBtn').disabled = true;
  $('verifyHint').textContent = 'select at least 3 kitties (0/3)';
}

$('verifyBtn').addEventListener('click', () => {
  const chosen = [...$('catGrid').querySelectorAll('[aria-pressed=true]')];
  const allCats = chosen.every((c) => CATS.includes(c.textContent));
  $('loadTitle').textContent = allCats ? 'Verified! Injecting cuteness… 🫧' : 'Close enough 😹 Injecting cuteness…';
  show(3);
  runTheatre();
});

/* ---------------- step 3: pure theatre ---------------- */
const LINES = [
  'connecting to <b>kawaii-node-07.uwu</b> …',
  'handshake with the marshmallow server ♡',
  'bypassing the <b>cuteness firewall</b> …',
  'asking the hamsters very politely 🐹',
  'compiling sparkles (0 errors, 4 giggles)',
  'decrypting <b>bubble tea</b> protocol …',
  'allocating 12 GB of glitter',
  'rerouting through cloud ☁ number 3',
  'convincing the accountant cat 🧮',
  'polishing each individual R$ by hand ✨',
  'almost there, being so brave …',
  'finalizing transfer <b>99%</b> …'
];

async function runTheatre() {
  const box = $('console');
  const fill = $('barFill');
  const pct = $('barPct');
  const bar = $('bar');
  box.innerHTML = '';

  let p = 0;
  for (let i = 0; i < LINES.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = '♡ ' + LINES[i];
    box.appendChild(li);
    box.scrollTop = box.scrollHeight;

    p = Math.min(99, Math.round(((i + 1) / LINES.length) * 99));
    fill.style.width = p + '%';
    pct.textContent = p + '%';
    bar.setAttribute('aria-valuenow', String(p));

    await sleep(i > LINES.length - 4 ? rand(700, 1100) : rand(320, 620));
  }

  // the classic stall
  for (const msg of ['still 99%…', 'still 99%… 🫠', 'suspiciously still 99%…']) {
    const li = document.createElement('li');
    li.innerHTML = '♡ ' + msg;
    box.appendChild(li);
    box.scrollTop = box.scrollHeight;
    await sleep(900);
  }

  await sleep(500);
  reveal();
}

/* ---------------- step 4: the truth ---------------- */
function reveal() {
  $('revealName').textContent = state.name;
  $('revealAmt').textContent = state.amount.toLocaleString();
  show(4);
  confetti();
}

function confetti() {
  const box = $('confetti');
  const glyphs = ['💖', '✨', '🎀', '🧁', '☁', '🐱', '🍓', '💅'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('span');
    c.className = 'conf';
    c.textContent = pick(glyphs);
    c.style.left = rand(0, 100) + '%';
    c.style.fontSize = rand(14, 30) + 'px';
    c.style.animationDuration = rand(2.6, 5.2) + 's';
    c.style.animationDelay = rand(0, 1.2) + 's';
    box.appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }
}

$('againBtn').addEventListener('click', () => {
  state.amount = 0;
  $('username').value = '';
  document.querySelectorAll('.amount').forEach((b) => b.setAttribute('aria-checked', 'false'));
  $('barFill').style.width = '0%';
  $('barPct').textContent = '0%';
  show(1);
});

$('copyBtn').addEventListener('click', async () => {
  const btn = $('copyBtn');
  try {
    await navigator.clipboard.writeText(location.href);
    btn.textContent = '✓ copied!';
  } catch {
    btn.textContent = location.href;
  }
  setTimeout(() => (btn.textContent = '🔗 copy link'), 2000);
});

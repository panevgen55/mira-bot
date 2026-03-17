// ============================================================
// MIRA BOT — Main Application Logic
// ============================================================

window.currentLang = 'en';
let navigationStack = [];
let currentState = {};

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Always start in English
  window.currentLang = 'en';
  updateUILanguage();
  showLanguagePrompt();
});

function updateUILanguage() {
  document.getElementById('headerTitle').textContent = t('bot_name');
  document.getElementById('headerSubtitle').textContent = t('bot_subtitle');
  document.getElementById('userInput').placeholder = t('placeholder');
  document.getElementById('currentFlag').textContent = TRANSLATIONS[window.currentLang]?.flag || '🇬🇧';
  document.title = `${t('bot_name')} — ${t('bot_subtitle')}`;
}

// ============================================================
// MESSAGE RENDERING
// ============================================================
function addBotMessage(html) {
  const chatArea = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'message bot';
  div.innerHTML = `<div class="msg-bubble">${html}</div>`;
  chatArea.appendChild(div);
  scrollToBottom();
}

function addUserMessage(text) {
  const chatArea = document.getElementById('chatArea');
  const div = document.createElement('div');
  div.className = 'message user';
  div.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
  chatArea.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  const chatArea = document.getElementById('chatArea');
  setTimeout(() => chatArea.scrollTop = chatArea.scrollHeight, 50);
}

function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}

// ============================================================
// NAVIGATION
// ============================================================
function navButtons() {
  return `<div class="nav-btns">
    <button class="nav-btn" onclick="goBack()">${t('back')}</button>
    <button class="nav-btn" onclick="showMainMenu()">${t('home')}</button>
  </div>`;
}

function goBack() {
  if (navigationStack.length > 1) {
    navigationStack.pop();
    const prev = navigationStack[navigationStack.length - 1];
    prev();
  } else {
    showMainMenu();
  }
}

function pushNav(fn) {
  navigationStack.push(fn);
}

// ============================================================
// LANGUAGE PROMPT (First load)
// ============================================================
function showLanguagePrompt() {
  navigationStack = [];
  let btns = '';
  for (const [code, tr] of Object.entries(TRANSLATIONS)) {
    btns += `<button class="btn" onclick="selectInitialLanguage('${code}')">${tr.flag} ${tr.lang_name}</button>`;
  }
  addBotMessage(`<strong>Welcome! / Ласкаво просимо! / Добро пожаловать!</strong>
    <p style="font-size:13px;color:#666;margin:6px 0">Please select your language / Оберіть мову / Выберите язык:</p>
    <div class="lang-grid">${btns}</div>`);
}

function selectInitialLanguage(code) {
  window.currentLang = code;
  updateUILanguage();
  addBotMessage(`✅ ${TRANSLATIONS[code].flag} ${TRANSLATIONS[code].lang_name}`);
  showWelcome();
}

// ============================================================
// WELCOME & MAIN MENU
// ============================================================
function showWelcome() {
  navigationStack = [];
  addBotMessage(t('welcome'));
  showMainMenu();
}

function showMainMenu() {
  navigationStack = [showMainMenu];
  addBotMessage(`
    <div class="btn-grid">
      <button class="btn accent" onclick="showSystemBuilder()">${t('menu_system')}</button>
      <button class="btn accent" onclick="showCalculatorMenu()">${t('menu_calculator')}</button>
      <button class="btn" onclick="showProductCatalog()">${t('menu_products')}</button>
      <button class="btn" onclick="showSolutions()">${t('menu_solutions')}</button>
      <button class="btn" onclick="showSupport()">${t('menu_support')}</button>
      <button class="btn" onclick="showLanguageSelector()">${t('menu_language')}</button>
    </div>
  `);
}

// ============================================================
// LANGUAGE SELECTOR
// ============================================================
function showLanguageSelector() {
  pushNav(showLanguageSelector);
  let btns = '';
  for (const [code, tr] of Object.entries(TRANSLATIONS)) {
    const active = code === window.currentLang ? ' active' : '';
    btns += `<button class="btn${active}" onclick="setLanguage('${code}')">${tr.flag} ${tr.lang_name}</button>`;
  }
  addBotMessage(`<div class="lang-grid">${btns}</div>`);
}

function setLanguage(code) {
  window.currentLang = code;
  updateUILanguage();
  navigationStack = [];
  addBotMessage(`✅ ${TRANSLATIONS[code].flag} ${TRANSLATIONS[code].lang_name}`);
  showMainMenu();
}

// ============================================================
// SYSTEM BUILDER (Decision Tree)
// ============================================================
function showSystemBuilder() {
  pushNav(showSystemBuilder);
  currentState = {};
  addBotMessage(`<strong>${t('sb_title')}</strong>`);
  askLocation();
}

function askLocation() {
  const opts = DECISION_TREE.location.options;
  let btns = opts.map(o =>
    `<button class="btn" onclick="selectLocation('${o.id}')"><span class="btn-icon">${o.icon}</span> ${t(o.nameKey)}</button>`
  ).join('');
  addBotMessage(`${t('sb_step_location')}<div class="btn-grid">${btns}</div>${navButtons()}`);
}

function selectLocation(loc) {
  currentState.location = loc;
  addUserMessage(t(`loc_${loc}`));
  askRoomType();
}

function askRoomType() {
  const loc = currentState.location;
  const rooms = DECISION_TREE.roomType[loc] || DECISION_TREE.roomType.interior;
  let btns = rooms.map(r =>
    `<button class="btn full-width" onclick="selectRoom('${r.id}')"><span class="btn-icon">${r.icon}</span> ${t(r.nameKey)}</button>`
  ).join('');
  addBotMessage(`${t('sb_step_room')}<div class="btn-grid">${btns}</div>${navButtons()}`);
}

function selectRoom(room) {
  currentState.room = room;
  addUserMessage(t(`room_${room}`));

  // For special cases, skip to solution directly
  if (room === 'facade') return showSystemResult('facade');
  if (room === 'special') return askSpecialType();

  askSubstrate();
}

function askSpecialType() {
  addBotMessage(`<div class="btn-grid">
    <button class="btn full-width" onclick="showSystemResult('pool')"><span class="btn-icon">🏊</span> ${t('sys_pool')}</button>
    <button class="btn full-width" onclick="showSystemResult('fireplace')"><span class="btn-icon">🔥</span> ${t('sys_fireplace')}</button>
  </div>${navButtons()}`);
}

function askSubstrate() {
  const subs = DECISION_TREE.substrate;
  let btns = subs.map(s =>
    `<button class="btn" onclick="selectSubstrate('${s.id}')"><span class="btn-icon">${s.icon}</span> ${t(s.nameKey)}</button>`
  ).join('');
  addBotMessage(`${t('sb_step_substrate')}<div class="btn-grid">${btns}</div>${navButtons()}`);
}

function selectSubstrate(sub) {
  currentState.substrate = sub;
  addUserMessage(t(`sub_${sub}`));

  // Wood → special path
  if (sub === 'wood' || sub === 'plywood') {
    return showSystemResult('wooden_floor');
  }

  askSurface();
}

function askSurface() {
  const opts = DECISION_TREE.surface;
  let btns = opts.map(o =>
    `<button class="btn" onclick="selectSurface('${o.id}')"><span class="btn-icon">${o.icon}</span> ${t(o.nameKey)}</button>`
  ).join('');
  addBotMessage(`${t('sb_step_surface')}<div class="btn-grid">${btns}</div>${navButtons()}`);
}

function selectSurface(surface) {
  currentState.surface = surface;
  addUserMessage(t(`surface_${surface}`));
  askFinish();
}

function askFinish() {
  let fins = DECISION_TREE.finish;
  // PVC/Vinyl only makes sense for floors
  if (currentState.surface === 'wall') {
    fins = fins.filter(f => f.id !== 'pvc_vinyl');
  }
  let btns = fins.map(f =>
    `<button class="btn" onclick="selectFinish('${f.id}')"><span class="btn-icon">${f.icon}</span> ${t(f.nameKey)}</button>`
  ).join('');
  addBotMessage(`${t('sb_step_finish')}<div class="btn-grid">${btns}</div>${navButtons()}`);
}

function selectFinish(fin) {
  currentState.finish = fin;
  addUserMessage(t(`fin_${fin}`));

  // PVC — no tile adhesive needed
  if (fin === 'pvc_vinyl') {
    return showLevelingOnlyResult();
  }

  // Heated floor question only for floors, not walls
  if (currentState.surface === 'floor') {
    askHeatedFloor();
  } else {
    currentState.heated = 'no';
    generateRecommendation();
  }
}

function askHeatedFloor() {
  const opts = DECISION_TREE.heatedFloor;
  let btns = opts.map(o =>
    `<button class="btn" onclick="selectHeated('${o.id}')"><span class="btn-icon">${o.icon}</span> ${t(o.nameKey)}</button>`
  ).join('');
  addBotMessage(`${t('sb_step_heated')}<div class="btn-grid">${btns}</div>${navButtons()}`);
}

function selectHeated(heated) {
  currentState.heated = heated;
  addUserMessage(t(`heated_${heated}`));
  generateRecommendation();
}

function generateRecommendation() {
  const s = currentState;

  // Determine which system solution to show
  if (s.heated === 'yes') return showSystemResult('heated_floor');
  if (s.location === 'exterior' && (s.room === 'terrace' || s.room === 'balcony')) return showSystemResult('terrace');
  if (s.room === 'wet') {
    if (s.finish === 'large_format' && s.surface === 'floor') return showSystemResult('bathroom_large_tile');
    if (s.finish === 'large_format' && s.surface === 'wall') return showSystemResult('bathroom_standard');
    return showSystemResult('bathroom_standard');
  }

  // Dry room — simple recommendation
  showDryRoomResult();
}

function showDryRoomResult() {
  const s = currentState;
  let primer = findProduct('4180');
  let adhesive;
  let grout;

  // Select adhesive based on tile type and surface
  if (s.finish === 'large_format') {
    // 3250 gigafix floor — ONLY for floors! Walls use 3130.
    adhesive = (s.surface === 'floor') ? findProduct('3250') : findProduct('3130');
  } else if (s.finish === 'natural_stone' || s.finish === 'glass_mosaic') {
    adhesive = findProduct('zfix') || findProduct('3130');
  } else {
    adhesive = findProduct('3110');
  }

  grout = findProduct('sc');

  let html = `<strong>${t('sb_result')}</strong><div class="system-steps">`;
  html += renderStep(1, t('step_primer'), primer);
  html += renderStep(2, t('step_adhesive'), adhesive);
  html += renderStep(3, t('step_grout'), grout);
  html += `</div>`;

  // Warnings
  if (s.finish === 'large_format') html += `<div class="warning-banner">${t('warn_large_tile')}</div>`;
  if (s.finish === 'natural_stone') html += `<div class="warning-banner">${t('warn_marble_cleaner')}</div>`;

  html += navButtons();
  addBotMessage(html);
}

function showLevelingOnlyResult() {
  let primer = findProduct('4180');
  let leveling = findProduct('6700');
  let html = `<strong>${t('sb_result')}</strong><div class="system-steps">`;
  html += renderStep(1, t('step_primer'), primer);
  html += renderStep(2, t('step_leveling'), leveling);
  html += `</div>${navButtons()}`;
  addBotMessage(html);
}

function showSystemResult(solutionKey) {
  const solution = SYSTEM_SOLUTIONS[solutionKey];
  if (!solution) return;

  let html = `<strong>${t(solution.nameKey)} ${solution.icon}</strong>
  <p style="font-size:13px;color:#666;margin:4px 0">${t('sb_result_system')}</p>
  <div class="system-steps">`;

  solution.steps.forEach((step, i) => {
    const product = step.product ? findProduct(step.product) : null;
    const products = step.products ? step.products.map(pid => findProduct(pid)).filter(Boolean) : null;

    if (product) {
      html += renderStep(i + 1, t(step.nameKey), product, step.note);
    } else if (products) {
      html += `<div class="system-step">
        <div class="step-num">${i + 1}</div>
        <div class="step-content">
          <div class="step-label">${t(step.nameKey)}</div>
          ${products.map(p => `<div class="step-product">${p.name}</div>`).join('')}
        </div>
      </div>`;
    }
  });

  html += `</div>`;
  html += `<div class="warning-banner">${t('warn_temp')}</div>`;
  html += navButtons();
  addBotMessage(html);
}

function renderStep(num, label, product, note) {
  if (!product) return '';
  return `<div class="system-step">
    <div class="step-num">${num}</div>
    <div class="step-content">
      <div class="step-label">${label}</div>
      <div class="step-product" style="cursor:pointer" onclick="showProductDetail('${product.id}')">${product.name} ${product.classEN ? `<span class="product-class">${product.classEN}</span>` : ''}</div>
      ${note ? `<div class="step-note">${note}</div>` : ''}
      ${product.consumption ? `<div class="step-note">${t('prod_consumption')} ${product.consumption}</div>` : ''}
    </div>
  </div>`;
}

// ============================================================
// PRODUCT CATALOG
// ============================================================
function showProductCatalog() {
  pushNav(showProductCatalog);
  let html = `<strong>${t('prod_title')}</strong><div class="cat-list">`;
  for (const [catKey, cat] of Object.entries(MIRA_PRODUCTS)) {
    const count = cat.products.length;
    html += `<div class="cat-item" onclick="showCategoryProducts('${catKey}')">
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-name">${t(cat.nameKey)}</span>
      <span class="cat-count">${count}</span>
    </div>`;
  }
  html += `</div>${navButtons()}`;
  addBotMessage(html);
}

function showCategoryProducts(catKey) {
  pushNav(() => showCategoryProducts(catKey));
  const cat = MIRA_PRODUCTS[catKey];
  if (!cat) return;

  let html = `<strong>${cat.icon} ${t(cat.nameKey)}</strong><div class="products-list">`;
  cat.products.forEach(p => {
    html += `<div class="prod-item" onclick="showProductDetail('${p.id}')">
      <span class="prod-code">${p.name}</span>
      <span class="prod-type">${p.type}</span>
    </div>`;
  });
  html += `</div>${navButtons()}`;
  addBotMessage(html);
}

function showProductDetail(productId) {
  pushNav(() => showProductDetail(productId));
  const product = findProduct(productId);
  if (!product) return;

  let html = `<div class="product-card">
    <div class="product-name">${product.name} ${product.classEN ? `<span class="product-class">${product.classEN}</span>` : ''}</div>
    <div class="product-detail"><strong>${t('prod_type')}</strong> ${product.type}</div>`;

  if (product.consumption) html += `<div class="product-detail"><strong>${t('prod_consumption')}</strong> ${product.consumption}</div>`;
  if (product.thickness) html += `<div class="product-detail"><strong>${t('prod_thickness')}</strong> ${product.thickness}</div>`;
  if (product.strength) html += `<div class="product-detail"><strong>${t('prod_strength')}</strong> ${product.strength}</div>`;
  if (product.walkable) html += `<div class="product-detail"><strong>${t('prod_walkable')}</strong> ${product.walkable}</div>`;
  if (product.tileReady) html += `<div class="product-detail"><strong>${t('prod_tile_ready')}</strong> ${product.tileReady}</div>`;
  if (product.jointWidth) html += `<div class="product-detail"><strong>${t('prod_joint_width')}</strong> ${product.jointWidth}</div>`;
  if (product.colors) html += `<div class="product-detail"><strong>${t('prod_colors')}</strong> ${product.colors}</div>`;
  if (product.dryTime) html += `<div class="product-detail"><strong>Dry time:</strong> ${product.dryTime}</div>`;
  if (product.tileSize) html += `<div class="product-detail"><strong>Tile size:</strong> ${product.tileSize}</div>`;
  if (product.color) html += `<div class="product-detail"><strong>Color:</strong> ${product.color}</div>`;

  if (product.notes) html += `<div class="product-notes">💡 ${product.notes}</div>`;

  // Safety
  if (product.hazard && product.hazard.length > 0) {
    html += `<div class="product-warning">`;
    product.hazard.forEach(h => {
      const info = HAZARD_INFO[h];
      if (info) html += `<span class="safety-badge">${info.icon} ${h}: ${t(info.textKey)}</span> `;
    });
    html += `<br><br>${t('ppe_text')}</div>`;
  }

  html += `</div>${navButtons()}`;
  addBotMessage(html);
}

function findProduct(id) {
  for (const cat of Object.values(MIRA_PRODUCTS)) {
    const p = cat.products.find(p => p.id === id);
    if (p) return p;
  }
  return null;
}

// ============================================================
// READY SOLUTIONS
// ============================================================
function showSolutions() {
  pushNav(showSolutions);
  let html = `<strong>${t('menu_solutions')}</strong><div class="cat-list">`;
  for (const [key, sol] of Object.entries(SYSTEM_SOLUTIONS)) {
    html += `<div class="cat-item" onclick="showSystemResult('${key}')">
      <span class="cat-icon">${sol.icon}</span>
      <span class="cat-name">${t(sol.nameKey)}</span>
    </div>`;
  }
  html += `</div>${navButtons()}`;
  addBotMessage(html);
}

// ============================================================
// CALCULATORS
// ============================================================
function showCalculatorMenu() {
  pushNav(showCalculatorMenu);
  addBotMessage(`<strong>${t('calc_title')}</strong>
  <p style="font-size:13px;color:#666;margin:4px 0">${t('calc_select')}</p>
  <div class="btn-grid">
    <button class="btn accent" onclick="showCalcWaterproofing()">${t('calc_waterproofing')}</button>
    <button class="btn accent" onclick="showCalcLeveling()">${t('calc_leveling')}</button>
    <button class="btn" onclick="showCalcGrout()">${t('calc_grout')}</button>
    <button class="btn" onclick="showCalcAdhesive()">${t('calc_adhesive')}</button>
  </div>${navButtons()}`);
}

// --- Waterproofing Calculator ---
function showCalcWaterproofing() {
  pushNav(showCalcWaterproofing);
  addBotMessage(`<strong>💧 ${t('calc_waterproofing')}</strong>
  <p style="font-size:12px;color:#666;margin:4px 0">${t('calc_product')}: 4400 multicoat</p>
  <div class="calc-form">
    <div class="field"><label>${t('calc_wall_area')}</label><input type="number" id="wc_wall" min="0" step="0.1" value="12"></div>
    <div class="field"><label>${t('calc_floor_area')}</label><input type="number" id="wc_floor" min="0" step="0.1" value="4"></div>
    <button class="calc-btn" onclick="calcWaterproofing()">${t('calc_calculate')}</button>
    <div id="wc_result"></div>
  </div>${navButtons()}`);
}

function calcWaterproofing() {
  const wall = parseFloat(document.getElementById('wc_wall').value) || 0;
  const floor = parseFloat(document.getElementById('wc_floor').value) || 0;
  const total = wall + floor;
  const multicoatKg = total * 1.0 * 1.1; // 1 kg/m² + 10% reserve
  const multicoatBuckets = Math.ceil(multicoatKg / 15); // 15kg bucket
  const perimeter = Math.sqrt(floor) * 4; // rough perimeter estimate
  const sealBandM = Math.ceil((perimeter + 4) * 1.1); // + corners, 10% reserve

  document.getElementById('wc_result').innerHTML = `<div class="calc-result">
    <div class="result-title">${t('calc_result')} ${t('calc_reserve')}</div>
    <div class="result-value">${multicoatKg.toFixed(1)} ${t('calc_kg')}</div>
    <div class="result-detail">4400 multicoat: ~${multicoatBuckets} x 15kg</div>
    <div class="result-detail">Seal band: ~${sealBandM} ${t('calc_meters')}</div>
    <div class="result-detail">${t('calc_consumption')}: 1.0 kg/m² (2 ${t('calc_bags')})</div>
  </div>`;
}

// --- Leveling Compound Calculator ---
function showCalcLeveling() {
  pushNav(showCalcLeveling);
  addBotMessage(`<strong>📐 ${t('calc_leveling')}</strong>
  <div class="calc-form">
    <div class="field">
      <label>${t('calc_product')}</label>
      <select id="lc_product">
        <option value="6600">6600 cemplan (1.6 kg/m²/mm)</option>
        <option value="6700">6700 cemplan (1.6 kg/m²/mm)</option>
        <option value="xplan" selected>x-plan (1.7 kg/m²/mm)</option>
        <option value="6975">6975 betomix flow (1.8 kg/m²/mm)</option>
        <option value="6998">6998 betomix quick (2.0 kg/m²/mm)</option>
      </select>
    </div>
    <div class="field"><label>${t('calc_area')}</label><input type="number" id="lc_area" min="0" step="0.1" value="20"></div>
    <div class="field"><label>${t('calc_thickness')}</label><input type="number" id="lc_thick" min="1" step="1" value="5"></div>
    <button class="calc-btn" onclick="calcLeveling()">${t('calc_calculate')}</button>
    <div id="lc_result"></div>
  </div>${navButtons()}`);
}

function calcLeveling() {
  const productId = document.getElementById('lc_product').value;
  const area = parseFloat(document.getElementById('lc_area').value) || 0;
  const thick = parseFloat(document.getElementById('lc_thick').value) || 0;
  const rates = { '6600': 1.6, '6700': 1.6, 'xplan': 1.7, '6975': 1.8, '6998': 2.0 };
  const rate = rates[productId] || 1.7;
  const totalKg = area * thick * rate * 1.1; // +10%
  const bags = Math.ceil(totalKg / 25);
  const product = findProduct(productId);

  document.getElementById('lc_result').innerHTML = `<div class="calc-result">
    <div class="result-title">${t('calc_result')} ${t('calc_reserve')}</div>
    <div class="result-value">${totalKg.toFixed(0)} ${t('calc_kg')}</div>
    <div class="result-detail">${product ? product.name : productId}: ${bags} x 25kg ${t('calc_bags')}</div>
    <div class="result-detail">${t('calc_consumption')}: ${rate} kg/m²/mm</div>
  </div>`;
}

// --- Grout Calculator ---
function showCalcGrout() {
  pushNav(showCalcGrout);
  addBotMessage(`<strong>✨ ${t('calc_grout')}</strong>
  <div class="calc-form">
    <div class="field">
      <label>${t('calc_product')}</label>
      <select id="gc_product">
        <option value="sce">supercolour excellent</option>
        <option value="sc" selected>supercolour</option>
        <option value="classic">classic</option>
        <option value="3650g">3650 multipox (epoxy)</option>
      </select>
    </div>
    <div class="field"><label>${t('calc_tile_length')}</label><input type="number" id="gc_tl" min="1" value="300"></div>
    <div class="field"><label>${t('calc_tile_width')}</label><input type="number" id="gc_tw" min="1" value="300"></div>
    <div class="field"><label>${t('calc_tile_thickness')}</label><input type="number" id="gc_tt" min="1" value="8"></div>
    <div class="field"><label>${t('calc_joint_width')}</label><input type="number" id="gc_jw" min="1" value="3"></div>
    <div class="field"><label>${t('calc_area')}</label><input type="number" id="gc_area" min="0" step="0.1" value="15"></div>
    <button class="calc-btn" onclick="calcGrout()">${t('calc_calculate')}</button>
    <div id="gc_result"></div>
  </div>${navButtons()}`);
}

function calcGrout() {
  const productId = document.getElementById('gc_product').value;
  const L = parseFloat(document.getElementById('gc_tl').value) || 300;
  const W = parseFloat(document.getElementById('gc_tw').value) || 300;
  const T = parseFloat(document.getElementById('gc_tt').value) || 8;
  const J = parseFloat(document.getElementById('gc_jw').value) || 3;
  const area = parseFloat(document.getElementById('gc_area').value) || 0;
  const density = productId === '3650g' ? 1.5 : 1.6;

  // Formula: ((L+W) / (L*W)) * T * J * density * area
  const kgPerM2 = ((L + W) / (L * W)) * T * J * density;
  const totalKg = kgPerM2 * area * 1.1; // +10%
  const product = findProduct(productId);
  const bagSize = productId === '3650g' ? 5 : (productId === 'classic' ? 5 : 5);
  const bags = Math.ceil(totalKg / bagSize);

  document.getElementById('gc_result').innerHTML = `<div class="calc-result">
    <div class="result-title">${t('calc_result')} ${t('calc_reserve')}</div>
    <div class="result-value">${totalKg.toFixed(1)} ${t('calc_kg')}</div>
    <div class="result-detail">${product ? product.name : productId}: ~${bags} x ${bagSize}kg</div>
    <div class="result-detail">${t('calc_consumption')}: ${kgPerM2.toFixed(2)} kg/m²</div>
  </div>`;
}

// --- Adhesive Calculator ---
function showCalcAdhesive() {
  pushNav(showCalcAdhesive);
  addBotMessage(`<strong>🧱 ${t('calc_adhesive')}</strong>
  <div class="calc-form">
    <div class="field">
      <label>${t('calc_product')}</label>
      <select id="ac_product">
        <option value="3000">3000 standardfix (2.0–3.0)</option>
        <option value="3110" selected>3110 unifix (2.0–3.5)</option>
        <option value="3130">3130 superfix (2.0–4.0)</option>
        <option value="3250">3250 gigafix floor (2.5–4.5)</option>
        <option value="3230">3230 superrapidfix (2.0–4.0)</option>
        <option value="zfix">z-fix excellent (2.0–4.0)</option>
      </select>
    </div>
    <div class="field"><label>${t('calc_area')}</label><input type="number" id="ac_area" min="0" step="0.1" value="20"></div>
    <div class="field"><label>${t('calc_trowel')}</label>
      <select id="ac_trowel">
        <option value="6">6 mm (~2.5 kg/m²)</option>
        <option value="8" selected>8 mm (~3.0 kg/m²)</option>
        <option value="10">10 mm (~3.8 kg/m²)</option>
        <option value="12">12 mm (~4.5 kg/m²)</option>
      </select>
    </div>
    <button class="calc-btn" onclick="calcAdhesive()">${t('calc_calculate')}</button>
    <div id="ac_result"></div>
  </div>${navButtons()}`);
}

function calcAdhesive() {
  const productId = document.getElementById('ac_product').value;
  const area = parseFloat(document.getElementById('ac_area').value) || 0;
  const trowel = parseInt(document.getElementById('ac_trowel').value) || 8;
  const rates = { 6: 2.5, 8: 3.0, 10: 3.8, 12: 4.5 };
  const rate = rates[trowel] || 3.0;
  const totalKg = area * rate * 1.1; // +10%
  const bags = Math.ceil(totalKg / 25);
  const product = findProduct(productId);

  document.getElementById('ac_result').innerHTML = `<div class="calc-result">
    <div class="result-title">${t('calc_result')} ${t('calc_reserve')}</div>
    <div class="result-value">${totalKg.toFixed(0)} ${t('calc_kg')}</div>
    <div class="result-detail">${product ? product.name : productId}: ${bags} x 25kg ${t('calc_bags')}</div>
    <div class="result-detail">${t('calc_consumption')}: ${rate} kg/m² (${trowel}mm trowel)</div>
  </div>`;
}

// ============================================================
// SUPPORT
// ============================================================
function showSupport() {
  pushNav(showSupport);
  const contacts = {
    en: { website: 'mira.eu.com', email: 'info@mira.dk', regions: 'Denmark, International' },
    et: { website: 'mira.ee', email: 'info@mira.ee', regions: 'Estonia (Saue)' },
    uk: { website: 'mira.ee', email: 'info@mira.ee', regions: 'Ukraine (Mira Building Materials LLC, Kyiv)' },
    ru: { website: 'mira.ee', email: 'info@mira.ee', regions: 'CIS' },
    da: { website: 'mira.eu.com', email: 'info@mira.dk', regions: 'Denmark (Gadstrup)' },
    pl: { website: 'mira.eu.com', email: 'info@mira.dk', regions: 'Poland' },
    no: { website: 'mira.eu.com', email: 'info@mira.dk', regions: 'Norway' },
    sv: { website: 'mira.eu.com', email: 'info@mira.dk', regions: 'Sweden' },
    fi: { website: 'mira.eu.com', email: 'info@mira.dk', regions: 'Finland' },
    lv: { website: 'mira.ee', email: 'info@mira.ee', regions: 'Latvia (Riga)' },
    lt: { website: 'mira.ee', email: 'info@mira.ee', regions: 'Lithuania (Vilnius)' }
  };
  const c = contacts[window.currentLang] || contacts.en;

  addBotMessage(`<strong>${t('support_title')}</strong>
  <div class="support-info">
    <div class="contact-row">${t('support_website')}: <a href="https://${c.website}" target="_blank">${c.website}</a></div>
    <div class="contact-row">${t('support_email')}: <a href="mailto:${c.email}">${c.email}</a></div>
    <div class="contact-row">📍 ${c.regions}</div>
  </div>${navButtons()}`);
}

// ============================================================
// FREE TEXT SEARCH (Chat mode)
// ============================================================
function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  addUserMessage(text);
  processUserQuery(text);
}

function processUserQuery(query) {
  const q = query.toLowerCase();

  // Search products by name/id
  const matchedProducts = [];
  for (const cat of Object.values(MIRA_PRODUCTS)) {
    for (const p of cat.products) {
      const searchStr = `${p.id} ${p.name} ${p.type} ${p.notes || ''}`.toLowerCase();
      if (searchStr.includes(q) || q.split(/\s+/).every(w => searchStr.includes(w))) {
        matchedProducts.push(p);
      }
    }
  }

  if (matchedProducts.length > 0) {
    if (matchedProducts.length === 1) {
      showProductDetail(matchedProducts[0].id);
    } else {
      let html = `${t('chat_product_found')}<div class="products-list">`;
      matchedProducts.slice(0, 8).forEach(p => {
        html += `<div class="prod-item" onclick="showProductDetail('${p.id}')">
          <span class="prod-code">${p.name}</span>
          <span class="prod-type">${p.type}</span>
        </div>`;
      });
      html += `</div>`;
      addBotMessage(html);
    }
    return;
  }

  // Keyword-based routing
  const keywords = {
    calculator: () => showCalculatorMenu(),
    calc: () => showCalculatorMenu(),
    калькулятор: () => showCalculatorMenu(),
    розрахувати: () => showCalculatorMenu(),
    расход: () => showCalculatorMenu(),
    grout: () => showCalcGrout(),
    затирка: () => showCalcGrout(),
    fuga: () => showCalcGrout(),
    waterproof: () => showCalcWaterproofing(),
    гидроизоляция: () => showCalcWaterproofing(),
    гідроізоляція: () => showCalcWaterproofing(),
    bathroom: () => showSystemResult('bathroom_standard'),
    ванная: () => showSystemResult('bathroom_standard'),
    ванна: () => showSystemResult('bathroom_standard'),
    pool: () => showSystemResult('pool'),
    бассейн: () => showSystemResult('pool'),
    басейн: () => showSystemResult('pool'),
    terrace: () => showSystemResult('terrace'),
    тераса: () => showSystemResult('terrace'),
    терраса: () => showSystemResult('terrace'),
    fireplace: () => showSystemResult('fireplace'),
    камін: () => showSystemResult('fireplace'),
    камин: () => showSystemResult('fireplace'),
    facade: () => showSystemResult('facade'),
    фасад: () => showSystemResult('facade'),
    heated: () => showSystemResult('heated_floor'),
    тепла: () => showSystemResult('heated_floor'),
    теплый: () => showSystemResult('heated_floor'),
    wood: () => showSystemResult('wooden_floor'),
    дерево: () => showSystemResult('wooden_floor'),
    help: () => showMainMenu(),
    допомога: () => showMainMenu(),
    помощь: () => showMainMenu(),
    products: () => showProductCatalog(),
    продукция: () => showProductCatalog(),
    продукція: () => showProductCatalog(),
    support: () => showSupport(),
    підтримка: () => showSupport(),
    поддержка: () => showSupport(),
    kalkulator: () => showCalculatorMenu(),
    produkty: () => showProductCatalog(),
    łazienka: () => showSystemResult('bathroom_standard'),
    basen: () => showSystemResult('pool'),
    taras: () => showSystemResult('terrace'),
    kominek: () => showSystemResult('fireplace'),
    primer: () => showCategoryProducts('primers'),
    грунтовка: () => showCategoryProducts('primers'),
    ґрунтовка: () => showCategoryProducts('primers'),
    adhesive: () => showCategoryProducts('tile_adhesives'),
    клей: () => showCategoryProducts('tile_adhesives'),
    plaster: () => showCategoryProducts('plasters'),
    штукатурка: () => showCategoryProducts('plasters'),
    clean: () => showCategoryProducts('cleaning'),
    очистка: () => showCategoryProducts('cleaning'),
    чистка: () => showCategoryProducts('cleaning'),
  };

  for (const [kw, fn] of Object.entries(keywords)) {
    if (q.includes(kw)) {
      fn();
      return;
    }
  }

  // Temperature warning
  if (q.match(/\b-?\d+\s*°?\s*[cс]\b/i)) {
    const tempMatch = q.match(/-?\d+/);
    if (tempMatch) {
      const temp = parseInt(tempMatch[0]);
      if (temp < 10) {
        addBotMessage(t('warn_temp'));
        return;
      }
    }
  }

  // No match
  addBotMessage(`${t('chat_no_match')}
  <div class="btn-grid" style="margin-top:8px">
    <button class="btn" onclick="showMainMenu()">${t('home')}</button>
    <button class="btn" onclick="showProductCatalog()">${t('menu_products')}</button>
  </div>`);
}

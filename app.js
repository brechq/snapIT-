/**
 * snapIT! — Minimalist Neo-Brutalist Client-Side Photo Booth
 * No backend, no dependencies, pure vanilla JavaScript.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. TEMPLATE DEFINITIONS (16 Diverse Layouts)
  // =========================================================================
  const BUILTIN_TEMPLATES = [
    {
      id: 'strip-4-classic',
      name: 'Classic 4-Strip',
      photos: 4,
      width: 600,
      height: 1800,
      bg: '#111111',
      textColor: '#FFFFFF',
      slots: [
        { x: 40, y: 120, w: 520, h: 360 },
        { x: 40, y: 510, w: 520, h: 360 },
        { x: 40, y: 900, w: 520, h: 360 },
        { x: 40, y: 1290, w: 520, h: 360 }
      ],
      header: 'snapIT!',
      footer: true
    },
    {
      id: 'strip-3-studio',
      name: 'Studio 3-Strip',
      photos: 3,
      width: 600,
      height: 1450,
      bg: '#F5F0E8',
      textColor: '#111111',
      slots: [
        { x: 45, y: 110, w: 510, h: 370 },
        { x: 45, y: 510, w: 510, h: 370 },
        { x: 45, y: 910, w: 510, h: 370 }
      ],
      header: 'snapIT!',
      footer: true
    },
    {
      id: 'grid-4-square',
      name: '2x2 Pop Grid',
      photos: 4,
      width: 1200,
      height: 1300,
      bg: '#FFDE59',
      textColor: '#111111',
      slots: [
        { x: 60, y: 100, w: 520, h: 520 },
        { x: 620, y: 100, w: 520, h: 520 },
        { x: 60, y: 660, w: 520, h: 520 },
        { x: 620, y: 660, w: 520, h: 520 }
      ],
      header: 'snapIT! • 2X2',
      footer: true
    },
    {
      id: 'solo-polaroid',
      name: 'Solo Polaroid',
      photos: 1,
      width: 800,
      height: 1000,
      bg: '#FFFFFF',
      textColor: '#111111',
      slots: [
        { x: 60, y: 60, w: 680, h: 680 }
      ],
      header: '',
      footer: true
    },
    {
      id: 'minimal-duo',
      name: 'Minimal Duo',
      photos: 2,
      width: 600,
      height: 1050,
      bg: '#111111',
      textColor: '#FFFFFF',
      slots: [
        { x: 45, y: 100, w: 510, h: 400 },
        { x: 45, y: 530, w: 510, h: 400 }
      ],
      header: 'snapIT!',
      footer: true
    },
    {
      id: 'twin-landscape',
      name: 'Twin Horizon',
      photos: 2,
      width: 1200,
      height: 800,
      bg: '#7FE3A1',
      textColor: '#111111',
      slots: [
        { x: 50, y: 80, w: 530, h: 620 },
        { x: 620, y: 80, w: 530, h: 620 }
      ],
      header: 'snapIT! • TWIN',
      footer: true
    },
    {
      id: 'trio-spotlight',
      name: 'Trio Spotlight',
      photos: 3,
      width: 1000,
      height: 1250,
      bg: '#111111',
      textColor: '#FFFFFF',
      slots: [
        { x: 60, y: 90, w: 880, h: 580 },
        { x: 60, y: 700, w: 425, h: 430 },
        { x: 515, y: 700, w: 425, h: 430 }
      ],
      header: 'snapIT! SPOTLIGHT',
      footer: true
    },
    {
      id: 'trio-panorama',
      name: 'Trio Filmstrip',
      photos: 3,
      width: 1400,
      height: 620,
      bg: '#111111',
      textColor: '#FFFFFF',
      slots: [
        { x: 40, y: 60, w: 410, h: 480 },
        { x: 495, y: 60, w: 410, h: 480 },
        { x: 950, y: 60, w: 410, h: 480 }
      ],
      header: 'FILM 35MM',
      footer: true
    },
    {
      id: 'asymmetric-4',
      name: 'Asymmetric 4',
      photos: 4,
      width: 1200,
      height: 1000,
      bg: '#6C63FF',
      textColor: '#FFFFFF',
      slots: [
        { x: 50, y: 80, w: 580, h: 820 },
        { x: 660, y: 80, w: 490, h: 250 },
        { x: 660, y: 365, w: 490, h: 250 },
        { x: 660, y: 650, w: 490, h: 250 }
      ],
      header: 'snapIT! • COLLAGE',
      footer: true
    },
    {
      id: 'collage-5',
      name: '5-Photo Mosaic',
      photos: 5,
      width: 1200,
      height: 1100,
      bg: '#F5F0E8',
      textColor: '#111111',
      slots: [
        { x: 50, y: 80, w: 560, h: 560 },
        { x: 640, y: 80, w: 510, h: 265 },
        { x: 640, y: 375, w: 510, h: 265 },
        { x: 50, y: 670, w: 510, h: 320 },
        { x: 590, y: 670, w: 560, h: 320 }
      ],
      header: 'snapIT! MOSAIC',
      footer: true
    },
    {
      id: 'grid-6-vertical',
      name: '6-Photo 2x3 Grid',
      photos: 6,
      width: 1000,
      height: 1450,
      bg: '#111111',
      textColor: '#FFFFFF',
      slots: [
        { x: 50, y: 100, w: 425, h: 380 },
        { x: 525, y: 100, w: 425, h: 380 },
        { x: 50, y: 510, w: 425, h: 380 },
        { x: 525, y: 510, w: 425, h: 380 },
        { x: 50, y: 920, w: 425, h: 380 },
        { x: 525, y: 920, w: 425, h: 380 }
      ],
      header: 'snapIT! • 6 SHOTS',
      footer: true
    },
    {
      id: 'grid-6-wide',
      name: '6-Photo 3x2 Grid',
      photos: 6,
      width: 1350,
      height: 980,
      bg: '#FF6B6B',
      textColor: '#FFFFFF',
      slots: [
        { x: 45, y: 80, w: 395, h: 380 },
        { x: 475, y: 80, w: 395, h: 380 },
        { x: 905, y: 80, w: 395, h: 380 },
        { x: 45, y: 490, w: 395, h: 380 },
        { x: 475, y: 490, w: 395, h: 380 },
        { x: 905, y: 490, w: 395, h: 380 }
      ],
      header: 'snapIT! • HEXA',
      footer: true
    },
    {
      id: 'double-strip-6',
      name: 'Double 3-Strip',
      photos: 6,
      width: 1100,
      height: 1500,
      bg: '#F5F0E8',
      textColor: '#111111',
      slots: [
        { x: 45, y: 110, w: 480, h: 380 },
        { x: 575, y: 110, w: 480, h: 380 },
        { x: 45, y: 525, w: 480, h: 380 },
        { x: 575, y: 525, w: 480, h: 380 },
        { x: 45, y: 940, w: 480, h: 380 },
        { x: 575, y: 940, w: 480, h: 380 }
      ],
      header: 'snapIT! TWIN STRIP',
      footer: true
    },
    {
      id: 'poster-8',
      name: '8-Photo Poster',
      photos: 8,
      width: 1000,
      height: 1800,
      bg: '#111111',
      textColor: '#FFFFFF',
      slots: [
        { x: 45, y: 100, w: 430, h: 360 },
        { x: 525, y: 100, w: 430, h: 360 },
        { x: 45, y: 490, w: 430, h: 360 },
        { x: 525, y: 490, w: 430, h: 360 },
        { x: 45, y: 880, w: 430, h: 360 },
        { x: 525, y: 880, w: 430, h: 360 },
        { x: 45, y: 1270, w: 430, h: 360 },
        { x: 525, y: 1270, w: 430, h: 360 }
      ],
      header: 'snapIT! • POSTER 8',
      footer: true
    },
    {
      id: 'double-strip-8',
      name: 'Double 4-Strip',
      photos: 8,
      width: 1150,
      height: 1850,
      bg: '#FFDE59',
      textColor: '#111111',
      slots: [
        { x: 45, y: 100, w: 505, h: 370 },
        { x: 600, y: 100, w: 505, h: 370 },
        { x: 45, y: 495, w: 505, h: 370 },
        { x: 600, y: 495, w: 505, h: 370 },
        { x: 45, y: 890, w: 505, h: 370 },
        { x: 600, y: 890, w: 505, h: 370 },
        { x: 45, y: 1285, w: 505, h: 370 },
        { x: 600, y: 1285, w: 505, h: 370 }
      ],
      header: 'snapIT! • DOUBLE 4',
      footer: true
    },
    {
      id: 'vintage-mono-4',
      name: 'Vintage B&W 4-Strip',
      photos: 4,
      width: 600,
      height: 1800,
      bg: '#FFFFFF',
      textColor: '#111111',
      defaultFilter: 'bw',
      slots: [
        { x: 50, y: 110, w: 500, h: 370 },
        { x: 50, y: 505, w: 500, h: 370 },
        { x: 50, y: 900, w: 500, h: 370 },
        { x: 50, y: 1295, w: 500, h: 370 }
      ],
      header: 'snapIT! CLASSIC',
      footer: true
    }
  ];

  // =========================================================================
  // 1.5 STICKERS & DOODLES LIBRARY (14 Neo-Brutalist Vector SVGs)
  // =========================================================================
  const STICKERS_LIBRARY = [
    {
      id: 'heart-red',
      name: 'Red Heart',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 35S4 23 4 13a9 9 0 0116-4.5A9 9 0 0136 13c0 10-16 22-16 22z" fill="#FF6B6B" stroke="#111" stroke-width="3"/><path d="M11 11a4 4 0 014-4" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
      id: 'heart-pink',
      name: 'Pink Heart',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 35S4 23 4 13a9 9 0 0116-4.5A9 9 0 0136 13c0 10-16 22-16 22z" fill="#FFB5E8" stroke="#111" stroke-width="3"/><path d="M11 11a4 4 0 014-4" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
      id: 'heart-black',
      name: 'Black Heart',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 35S4 23 4 13a9 9 0 0116-4.5A9 9 0 0136 13c0 10-16 22-16 22z" fill="#111111" stroke="#111" stroke-width="3"/><path d="M11 11a4 4 0 014-4" stroke="#FFF" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
      id: 'star-yellow',
      name: 'Star',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="20,2 25.5,14 39,15 29,24 32,38 20,30 8,38 11,24 1,15 14.5,14" fill="#FFDE59" stroke="#111" stroke-width="3"/></svg>`
    },
    {
      id: 'sparkle-yellow',
      name: 'Sparkle',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0 C20 12 28 20 40 20 C28 20 20 28 20 40 C20 28 12 20 0 20 C12 20 20 12 20 0 Z" fill="#FFDE59" stroke="#111" stroke-width="2.5"/><circle cx="20" cy="20" r="2.5" fill="#111"/></svg>`
    },
    {
      id: 'sparkle-pink',
      name: 'Pink Twinkle',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0 C20 12 28 20 40 20 C28 20 20 28 20 40 C20 28 12 20 0 20 C12 20 20 12 20 0 Z" fill="#FFB5E8" stroke="#111" stroke-width="2.5"/></svg>`
    },
    {
      id: 'lightning',
      name: 'Lightning',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="22,2 8,22 19,22 16,38 32,18 20,18" fill="#FFDE59" stroke="#111" stroke-width="3"/></svg>`
    },
    {
      id: 'flower',
      name: 'Daisy Flower',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="11" r="7" fill="#FFF" stroke="#111" stroke-width="2.5"/><circle cx="29" cy="20" r="7" fill="#FFF" stroke="#111" stroke-width="2.5"/><circle cx="20" cy="29" r="7" fill="#FFF" stroke="#111" stroke-width="2.5"/><circle cx="11" cy="20" r="7" fill="#FFF" stroke="#111" stroke-width="2.5"/><circle cx="20" cy="20" r="6" fill="#FFDE59" stroke="#111" stroke-width="2.5"/></svg>`
    },
    {
      id: 'crown',
      name: 'Crown',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="6,30 34,30 36,12 26,20 20,8 14,20 4,12" fill="#FFDE59" stroke="#111" stroke-width="3"/><circle cx="4" cy="10" r="2" fill="#FF6B6B" stroke="#111" stroke-width="1.5"/><circle cx="20" cy="6" r="2.5" fill="#6C63FF" stroke="#111" stroke-width="1.5"/><circle cx="36" cy="10" r="2" fill="#7FE3A1" stroke="#111" stroke-width="1.5"/></svg>`
    },
    {
      id: 'ribbon',
      name: 'Ribbon',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12 C4 8 4 28 16 22 L20 20 L24 22 C36 28 36 8 28 12 L20 18 Z" fill="#FFB5E8" stroke="#111" stroke-width="2.5"/><path d="M16 22 L10 34 L18 29 L20 23 L22 29 L30 34 L24 22" fill="#FFB5E8" stroke="#111" stroke-width="2.5"/><circle cx="20" cy="20" r="4.5" fill="#FF6B6B" stroke="#111" stroke-width="2"/></svg>`
    },
    {
      id: 'smiley',
      name: 'Smiley',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="17" fill="#FFDE59" stroke="#111" stroke-width="3"/><circle cx="14" cy="16" r="2.5" fill="#111"/><circle cx="26" cy="16" r="2.5" fill="#111"/><path d="M13 24 C16 30 24 30 27 24" stroke="#111" stroke-width="3" stroke-linecap="round"/></svg>`
    },
    {
      id: 'cherry',
      name: 'Cherries',
      svg: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25 C13 14 26 12 30 6" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M27 25 C27 15 25 12 30 6" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M30 6 C24 4 19 6 18 8" fill="#7FE3A1" stroke="#111" stroke-width="2"/><circle cx="13" cy="27" r="8" fill="#FF6B6B" stroke="#111" stroke-width="2.5"/><circle cx="27" cy="27" r="8" fill="#FF6B6B" stroke="#111" stroke-width="2.5"/><path d="M10 24 a3 3 0 013-3" stroke="#FFF" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
      id: 'stamp-cute',
      name: 'Cute Badge',
      svg: `<svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="56" height="26" fill="#FFB5E8" stroke="#111" stroke-width="2.5"/><text x="30" y="19" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="#111" text-anchor="middle" letter-spacing="1">CUTE</text></svg>`
    },
    {
      id: 'stamp-bestie',
      name: 'Bestie Badge',
      svg: `<svg viewBox="0 0 68 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="64" height="26" fill="#FFDE59" stroke="#111" stroke-width="2.5"/><text x="34" y="19" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#111" text-anchor="middle" letter-spacing="1">BESTIE</text></svg>`
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT
  // =========================================================================
  const state = {
    allTemplates: BUILTIN_TEMPLATES,
    currentTemplate: BUILTIN_TEMPLATES[0],
    activeFilter: 'all',
    
    // Camera
    mediaStream: null,
    facingMode: 'user',
    timerSeconds: 3,
    
    // Session Capture
    isCapturing: false,
    currentPhotoIndex: 0,
    capturedPhotos: [],
    
    // Result Customization
    resultBgColor: BUILTIN_TEMPLATES[0].bg,
    resultFilter: 'none',
    showTimestamp: true,

    // Stickers
    placedStickers: [],
    selectedStickerId: null
  };

  const STORAGE_LAST_TEMPLATE_KEY = 'snapit_last_template_id';

  // =========================================================================
  // 3. DOM ELEMENTS
  // =========================================================================
  const dom = {
    // Views
    viewHome: document.getElementById('view-home'),
    viewCamera: document.getElementById('view-camera'),
    viewResult: document.getElementById('view-result'),

    // Nav
    navBrand: document.getElementById('nav-brand'),
    navHomeBtn: document.getElementById('nav-home-btn'),
    navCameraBtn: document.getElementById('nav-camera-btn'),

    // Hero
    btnHeroStart: document.getElementById('btn-hero-start'),
    countAll: document.getElementById('count-all'),

    // Template Picker
    templateGrid: document.getElementById('template-grid'),
    filterChips: document.querySelectorAll('.filter-chip'),

    // Camera
    btnCameraBack: document.getElementById('btn-camera-back'),
    currentPhotoNum: document.getElementById('current-photo-num'),
    totalPhotosNum: document.getElementById('total-photos-num'),
    btnFlipCamera: document.getElementById('btn-flip-camera'),
    cameraVideo: document.getElementById('camera-video'),
    cameraFlash: document.getElementById('camera-flash'),
    countdownOverlay: document.getElementById('countdown-overlay'),
    countdownText: document.getElementById('countdown-text'),
    cameraErrorCard: document.getElementById('camera-error-card'),
    cameraErrorMsg: document.getElementById('camera-error-msg'),
    btnRetryCamera: document.getElementById('btn-retry-camera'),
    shotsSlotsContainer: document.getElementById('shots-slots-container'),
    timerButtons: document.querySelectorAll('.btn-timer'),
    btnCaptureTrigger: document.getElementById('btn-capture-trigger'),
    captureBtnText: document.getElementById('capture-btn-text'),
    btnRestartSession: document.getElementById('btn-restart-session'),

    // Result
    canvasContainer: document.getElementById('canvas-container'),
    resultCanvas: document.getElementById('result-canvas'),
    stickerLayer: document.getElementById('sticker-layer'),
    stickerPalette: document.getElementById('sticker-palette'),
    btnClearStickers: document.getElementById('btn-clear-stickers'),
    colorSwatches: document.getElementById('color-swatches'),
    filterButtons: document.querySelectorAll('.btn-filter'),
    btnToggleStamp: document.getElementById('btn-toggle-stamp'),
    btnDownloadPng: document.getElementById('btn-download-png'),
    btnRetake: document.getElementById('btn-retake'),
    btnChangeTemplate: document.getElementById('btn-change-template'),

    // Raw Canvas for Frame Grab
    rawCaptureCanvas: document.getElementById('raw-capture-canvas')
  };

  // =========================================================================
  // 4. INITIALIZATION
  // =========================================================================
  function init() {
    loadLastSelectedTemplate();
    renderTemplateGrid();
    initStickerPalette();
    setupEventListeners();
  }

  function loadLastSelectedTemplate() {
    try {
      const lastId = localStorage.getItem(STORAGE_LAST_TEMPLATE_KEY);
      if (lastId) {
        const found = state.allTemplates.find(t => t.id === lastId);
        if (found) {
          state.currentTemplate = found;
          state.resultBgColor = found.bg;
        }
      }
    } catch (e) {}
  }

  // =========================================================================
  // 5. VIEW SWITCHING
  // =========================================================================
  function switchView(viewName) {
    if (viewName !== 'camera') {
      state.isCapturing = false;
      stopCameraStream();
    }

    dom.viewHome.classList.remove('active');
    dom.viewCamera.classList.remove('active');
    dom.viewResult.classList.remove('active');

    dom.navHomeBtn.classList.remove('active');
    dom.navCameraBtn.classList.remove('active');

    if (viewName === 'home') {
      dom.viewHome.classList.add('active');
      dom.navHomeBtn.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'camera') {
      dom.viewCamera.classList.add('active');
      dom.navCameraBtn.classList.add('active');
      startCameraSession();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'result') {
      dom.viewResult.classList.add('active');
      syncResultControlStates();
      renderResultCanvas();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function syncResultControlStates() {
    document.querySelectorAll('.swatch-btn').forEach(btn => {
      if (btn.dataset.color.toLowerCase() === (state.resultBgColor || '').toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.btn-filter').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === state.resultFilter);
    });

    dom.btnToggleStamp.classList.toggle('active', state.showTimestamp);
  }

  // =========================================================================
  // 6. TEMPLATE PICKER RENDERING & FILTERING
  // =========================================================================
  function renderTemplateGrid() {
    dom.templateGrid.innerHTML = '';
    dom.countAll.textContent = state.allTemplates.length;

    const filtered = state.allTemplates.filter(t => {
      if (state.activeFilter === 'all') return true;
      if (state.activeFilter === '1') return t.photos === 1;
      if (state.activeFilter === '2-3') return t.photos === 2 || t.photos === 3;
      if (state.activeFilter === '4') return t.photos === 4;
      if (state.activeFilter === '6+') return t.photos >= 6;
      return true;
    });

    filtered.forEach(tmpl => {
      const card = document.createElement('div');
      card.className = `template-card ${state.currentTemplate.id === tmpl.id ? 'active-selected' : ''}`;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Select ${tmpl.name} template with ${tmpl.photos} photos`);

      const miniPreviewHtml = generateMiniFrameSvg(tmpl);

      card.innerHTML = `
        <div class="template-card-preview">
          ${miniPreviewHtml}
        </div>
        <div class="template-card-info">
          <div class="template-meta-name">${escapeHtml(tmpl.name)}</div>
          <span class="template-meta-badge">
            ${tmpl.photos} ${tmpl.photos === 1 ? 'PHOTO' : 'PHOTOS'}
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectTemplate(tmpl);
        switchView('camera');
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectTemplate(tmpl);
          switchView('camera');
        }
      });

      dom.templateGrid.appendChild(card);
    });
  }

  function selectTemplate(tmpl) {
    state.currentTemplate = tmpl;
    state.resultBgColor = tmpl.bg || '#111111';
    state.resultFilter = tmpl.defaultFilter || 'none';
    try {
      localStorage.setItem(STORAGE_LAST_TEMPLATE_KEY, tmpl.id);
    } catch (e) {}

    document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active-selected'));
  }

  function generateMiniFrameSvg(tmpl) {
    const scale = 140 / Math.max(tmpl.width, tmpl.height);
    const w = Math.round(tmpl.width * scale);
    const h = Math.round(tmpl.height * scale);

    const slotsSvg = tmpl.slots.map((s, idx) => {
      const sx = Math.round(s.x * scale);
      const sy = Math.round(s.y * scale);
      const sw = Math.round(s.w * scale);
      const sh = Math.round(s.h * scale);
      return `<rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="#D9D2C7" stroke="#111111" stroke-width="1.5"/>
              <text x="${sx + sw / 2}" y="${sy + sh / 2 + 3}" font-family="sans-serif" font-size="9" font-weight="900" fill="#666666" text-anchor="middle">${idx + 1}</text>`;
    }).join('');

    return `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="border: 2px solid #111; box-shadow: 3px 3px 0 rgba(0,0,0,0.8); background:${tmpl.bg}; display:block;">
        ${tmpl.header ? `<rect x="0" y="0" width="${w}" height="${Math.max(12, Math.round(30 * scale))}" fill="${tmpl.bg}" />` : ''}
        ${slotsSvg}
      </svg>
    `;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  // =========================================================================
  // 7. CAMERA SYSTEM
  // =========================================================================
  async function startCameraSession() {
    state.isCapturing = false;
    state.currentPhotoIndex = 0;
    state.capturedPhotos = [];

    dom.totalPhotosNum.textContent = state.currentTemplate.photos;
    dom.currentPhotoNum.textContent = '1';
    dom.btnCaptureTrigger.disabled = false;
    dom.btnCaptureTrigger.style.display = 'inline-flex';
    dom.captureBtnText.textContent = 'START SESSION';
    dom.btnRestartSession.style.visibility = 'hidden';
    dom.countdownOverlay.classList.remove('show');
    dom.cameraErrorCard.classList.remove('show');

    renderShotsProgressSlots();
    await initCameraStream();
  }

  async function initCameraStream() {
    stopCameraStream();
    dom.cameraErrorCard.classList.remove('show');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showCameraError('Your browser does not support camera access. Please use modern Chrome, Safari, Firefox, or Edge.');
      return;
    }

    try {
      const constraints = {
        video: {
          facingMode: state.facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      state.mediaStream = stream;
      dom.cameraVideo.srcObject = stream;
      dom.cameraVideo.play().catch(e => console.warn('Video play error:', e));
    } catch (err) {
      console.error('Camera access error:', err);
      let message = 'Allow camera access in your browser settings to use snapIT!.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        message = 'Camera permission was denied. Please allow camera permissions in your browser address bar or settings, then click Retry.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        message = 'No camera device found on your system. Please connect a webcam.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        message = 'Camera is currently in use by another application. Please close other camera apps and retry.';
      }
      showCameraError(message);
    }
  }

  function stopCameraStream() {
    if (state.mediaStream) {
      state.mediaStream.getTracks().forEach(track => {
        try {
          track.stop();
        } catch (e) {}
      });
      state.mediaStream = null;
    }
    if (dom.cameraVideo) {
      dom.cameraVideo.srcObject = null;
    }
  }

  function showCameraError(msg) {
    dom.cameraErrorMsg.textContent = msg;
    dom.cameraErrorCard.classList.add('show');
  }

  function flipCamera() {
    state.facingMode = state.facingMode === 'user' ? 'environment' : 'user';
    initCameraStream();
  }

  function renderShotsProgressSlots() {
    dom.shotsSlotsContainer.innerHTML = '';
    const total = state.currentTemplate.photos;

    for (let i = 0; i < total; i++) {
      const slotBox = document.createElement('div');
      slotBox.className = `shot-slot-box ${i === state.currentPhotoIndex ? 'current-slot' : ''}`;
      slotBox.id = `shot-slot-${i}`;

      if (state.capturedPhotos[i]) {
        slotBox.classList.add('taken');
        const img = document.createElement('img');
        img.src = state.capturedPhotos[i];
        slotBox.appendChild(img);
      } else {
        slotBox.textContent = `${i + 1}`;
      }

      dom.shotsSlotsContainer.appendChild(slotBox);
    }
  }

  // =========================================================================
  // 8. COUNTDOWN & CAPTURE SEQUENCE
  // =========================================================================
  async function triggerCaptureSequence() {
    if (state.isCapturing) return;
    if (!state.mediaStream || !dom.cameraVideo.videoWidth) {
      await initCameraStream();
      if (!state.mediaStream) return;
    }

    state.isCapturing = true;
    dom.btnCaptureTrigger.disabled = true;
    dom.btnRestartSession.style.visibility = 'visible';

    for (let index = state.currentPhotoIndex; index < state.currentTemplate.photos; index++) {
      if (!state.isCapturing) break;

      state.currentPhotoIndex = index;
      dom.currentPhotoNum.textContent = index + 1;
      updateActiveSlotIndicator(index);

      await runCountdown(state.timerSeconds);

      if (!state.isCapturing) break;

      snapPhoto(index);

      if (index < state.currentTemplate.photos - 1) {
        await delay(1200);
      }
    }

    state.isCapturing = false;

    if (state.capturedPhotos.length === state.currentTemplate.photos) {
      stopCameraStream();
      switchView('result');
    }
  }

  function runCountdown(seconds) {
    return new Promise(resolve => {
      dom.countdownOverlay.classList.add('show');
      let remaining = seconds;
      dom.countdownText.textContent = remaining;

      const interval = setInterval(() => {
        if (!state.isCapturing) {
          clearInterval(interval);
          dom.countdownOverlay.classList.remove('show');
          resolve();
          return;
        }

        remaining -= 1;
        if (remaining > 0) {
          dom.countdownText.textContent = remaining;
        } else if (remaining === 0) {
          dom.countdownText.textContent = 'SNAP!';
        } else {
          clearInterval(interval);
          dom.countdownOverlay.classList.remove('show');
          resolve();
        }
      }, 1000);
    });
  }

  function snapPhoto(index) {
    dom.cameraFlash.classList.add('flash-active');
    setTimeout(() => {
      dom.cameraFlash.classList.remove('flash-active');
    }, 150);

    const video = dom.cameraVideo;
    const canvas = dom.rawCaptureCanvas;
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const ctx = canvas.getContext('2d');

    if (state.facingMode === 'user') {
      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    } else {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
    state.capturedPhotos[index] = dataUrl;

    const slotEl = document.getElementById(`shot-slot-${index}`);
    if (slotEl) {
      slotEl.classList.add('taken');
      slotEl.innerHTML = `<img src="${dataUrl}" alt="Photo ${index + 1}">`;
    }
  }

  function updateActiveSlotIndicator(index) {
    document.querySelectorAll('.shot-slot-box').forEach((el, i) => {
      if (i === index) {
        el.classList.add('current-slot');
      } else {
        el.classList.remove('current-slot');
      }
    });
  }

  function resetSession() {
    state.isCapturing = false;
    state.currentPhotoIndex = 0;
    state.capturedPhotos = [];
    dom.countdownOverlay.classList.remove('show');
    dom.currentPhotoNum.textContent = '1';
    dom.btnCaptureTrigger.disabled = false;
    dom.captureBtnText.textContent = 'START SESSION';
    dom.btnRestartSession.style.visibility = 'hidden';
    renderShotsProgressSlots();
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // =========================================================================
  // 9. RESULT RENDERING & CANVAS ENGINE
  // =========================================================================
  async function renderResultCanvas() {
    const tmpl = state.currentTemplate;
    const canvas = dom.resultCanvas;
    canvas.width = tmpl.width;
    canvas.height = tmpl.height;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw Background
    ctx.fillStyle = state.resultBgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const isDarkBg = isColorDark(state.resultBgColor);
    const textColor = isDarkBg ? '#FFFFFF' : '#111111';

    // 2. Header: Stylized Neo-Brutalist snapIT! Badge
    if (state.showTimestamp && tmpl.header) {
      const headerY = Math.max(38, Math.round(tmpl.slots[0].y / 2));
      const badgeFontSize = Math.min(34, Math.max(22, Math.round(canvas.width * 0.042)));
      drawNeoBrutalistBadge(ctx, tmpl.header, canvas.width / 2, headerY, badgeFontSize);
    }

    // 3. Draw Photos into Slots
    for (let i = 0; i < tmpl.slots.length; i++) {
      const slot = tmpl.slots[i];
      const photoSrc = state.capturedPhotos[i];

      if (photoSrc) {
        try {
          const img = await loadImage(photoSrc);

          ctx.save();
          applyContextFilter(ctx, state.resultFilter);
          drawImageCover(ctx, img, slot.x, slot.y, slot.w, slot.h);
          ctx.restore();

          ctx.strokeStyle = '#111111';
          ctx.lineWidth = 4;
          ctx.strokeRect(slot.x, slot.y, slot.w, slot.h);
        } catch (err) {
          console.error('Error drawing photo slot:', err);
        }
      } else {
        ctx.fillStyle = '#EAE4DA';
        ctx.fillRect(slot.x, slot.y, slot.w, slot.h);
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 3;
        ctx.strokeRect(slot.x, slot.y, slot.w, slot.h);
      }
    }

    // 3.5 Decorative Elements for Template
    drawTemplateDecorations(ctx, tmpl, canvas, textColor);

    // 4. Optional Footer / Timestamp
    if (state.showTimestamp && tmpl.footer) {
      ctx.save();
      ctx.fillStyle = textColor;
      ctx.font = '800 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const now = new Date();
      const dateString = now.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }).toUpperCase();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });

      const footerText = `snapIT! • ${dateString} ${timeString}`;
      const lastSlot = tmpl.slots[tmpl.slots.length - 1];
      const footerY = lastSlot.y + lastSlot.h + (canvas.height - (lastSlot.y + lastSlot.h)) / 2;

      ctx.fillText(footerText, canvas.width / 2, Math.min(canvas.height - 25, footerY));
      ctx.restore();
    }

    // Synchronize sticker overlay with canvas display
    renderStickersOverlay();
  }

  // Draw tasteful Neo-Brutalist decorative accents (crosshairs, film holes, barcode)
  function drawTemplateDecorations(ctx, tmpl, canvas, textColor) {
    ctx.save();

    // 1. Filmstrip sprocket holes for vertical strips and 35mm film
    if (tmpl.id.includes('strip') || tmpl.id === 'trio-panorama') {
      const isHorizontal = tmpl.width > tmpl.height;
      ctx.fillStyle = isColorDark(state.resultBgColor) ? '#FFFFFF' : '#111111';

      if (!isHorizontal) {
        // Vertical strip side holes
        const holeW = 12;
        const holeH = 16;
        const step = 45;
        for (let y = 30; y < canvas.height - 30; y += step) {
          ctx.fillRect(14, y, holeW, holeH);
          ctx.fillRect(canvas.width - 26, y, holeW, holeH);
        }
      } else {
        // Horizontal film holes top & bottom
        const holeW = 16;
        const holeH = 12;
        const step = 45;
        for (let x = 30; x < canvas.width - 30; x += step) {
          ctx.fillRect(x, 14, holeW, holeH);
          ctx.fillRect(x, canvas.height - 26, holeW, holeH);
        }
      }
    }

    // 2. Corner Crosshairs (+) for each photo slot
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 2;
    tmpl.slots.forEach(s => {
      const arm = 8;
      const offset = 6;
      // Top-Left
      drawCross(ctx, s.x - offset, s.y - offset, arm);
      // Top-Right
      drawCross(ctx, s.x + s.w + offset, s.y - offset, arm);
      // Bottom-Left
      drawCross(ctx, s.x - offset, s.y + s.h + offset, arm);
      // Bottom-Right
      drawCross(ctx, s.x + s.w + offset, s.y + s.h + offset, arm);
    });

    // 3. Retro Barcode & Film Stamp near footer
    if (tmpl.footer && tmpl.slots.length > 0) {
      const lastSlot = tmpl.slots[tmpl.slots.length - 1];
      const stampY = lastSlot.y + lastSlot.h + 20;
      if (stampY < canvas.height - 40) {
        ctx.fillStyle = textColor;
        ctx.font = '900 11px monospace';
        ctx.textAlign = 'left';
        ctx.fillText('||| | |||| || | ||| ||', 45, stampY);
        ctx.font = '700 10px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('ISO 400 • SP-2026', canvas.width - 45, stampY);
      }
    }

    // 4. Polaroid memo underlines
    if (tmpl.id === 'solo-polaroid') {
      ctx.strokeStyle = '#D5CFC5';
      ctx.lineWidth = 1.5;
      const slot = tmpl.slots[0];
      const lineY1 = slot.y + slot.h + 80;
      const lineY2 = slot.y + slot.h + 130;
      ctx.beginPath();
      ctx.moveTo(80, lineY1);
      ctx.lineTo(canvas.width - 80, lineY1);
      ctx.moveTo(80, lineY2);
      ctx.lineTo(canvas.width - 80, lineY2);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawCross(ctx, x, y, arm) {
    ctx.beginPath();
    ctx.moveTo(x - arm, y);
    ctx.lineTo(x + arm, y);
    ctx.moveTo(x, y - arm);
    ctx.lineTo(x, y + arm);
    ctx.stroke();
  }

  // Draw authentic Neo-Brutalist badge (yellow box, thick border, hard offset shadow)
  function drawNeoBrutalistBadge(ctx, text, centerX, centerY, fontSize) {
    ctx.save();
    ctx.font = `900 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Impact", Arial, sans-serif`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const padX = fontSize * 0.65;
    const padY = fontSize * 0.35;
    const boxW = Math.round(textWidth + padX * 2);
    const boxH = Math.round(fontSize + padY * 2);
    const boxX = Math.round(centerX - boxW / 2);
    const boxY = Math.round(centerY - boxH / 2);
    const shadowOffset = Math.max(4, Math.round(fontSize * 0.18));

    // Hard offset black drop shadow
    ctx.fillStyle = '#111111';
    ctx.fillRect(boxX + shadowOffset, boxY + shadowOffset, boxW, boxH);

    // Yellow badge background (matching snapIT! brand)
    ctx.fillStyle = '#FFDE59';
    ctx.fillRect(boxX, boxY, boxW, boxH);

    // Thick black border
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = Math.max(3, Math.round(fontSize * 0.12));
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    // Ultra-bold black text
    ctx.fillStyle = '#111111';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, centerX, centerY + 1);
    ctx.restore();
  }

  function drawImageCover(ctx, img, dx, dy, dWidth, dHeight) {
    const imgRatio = img.width / img.height;
    const destRatio = dWidth / dHeight;

    let sx, sy, sWidth, sHeight;

    if (imgRatio > destRatio) {
      sHeight = img.height;
      sWidth = img.height * destRatio;
      sx = (img.width - sWidth) / 2;
      sy = 0;
    } else {
      sWidth = img.width;
      sHeight = img.width / destRatio;
      sx = 0;
      sy = (img.height - sHeight) / 2;
    }

    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  function applyContextFilter(ctx, filterName) {
    switch (filterName) {
      case 'bw':
        ctx.filter = 'grayscale(100%) contrast(115%) brightness(102%)';
        break;
      case 'vintage':
        ctx.filter = 'sepia(50%) contrast(108%) brightness(105%) saturate(120%)';
        break;
      case 'cold':
        ctx.filter = 'hue-rotate(180deg) saturate(90%) contrast(110%)';
        break;
      default:
        ctx.filter = 'none';
        break;
    }
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  function loadSvgImage(svgString) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = (e) => {
        URL.revokeObjectURL(url);
        reject(e);
      };
      img.src = url;
    });
  }

  function isColorDark(hex) {
    if (!hex || hex.startsWith('#') === false) return false;
    const c = hex.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma < 120;
  }

  // =========================================================================
  // 10. STICKERS & DOODLES SYSTEM (Drag, Resize, Delete, Bake)
  // =========================================================================
  function initStickerPalette() {
    dom.stickerPalette.innerHTML = '';
    STICKERS_LIBRARY.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'sticker-item-btn';
      btn.type = 'button';
      btn.title = item.name;
      btn.setAttribute('aria-label', `Add ${item.name} sticker`);
      btn.innerHTML = item.svg;

      btn.addEventListener('click', () => {
        addSticker(item);
      });

      dom.stickerPalette.appendChild(btn);
    });
  }

  function addSticker(item) {
    const newSticker = {
      id: 'stk_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      svg: item.svg,
      xPct: 50,
      yPct: 45,
      sizePx: 64
    };
    state.placedStickers.push(newSticker);
    state.selectedStickerId = newSticker.id;
    renderStickersOverlay();
    updateClearButtonState();
  }

  function renderStickersOverlay() {
    dom.stickerLayer.innerHTML = '';
    state.placedStickers.forEach(sticker => {
      const el = document.createElement('div');
      el.className = `placed-sticker ${state.selectedStickerId === sticker.id ? 'selected' : ''}`;
      el.style.left = `${sticker.xPct}%`;
      el.style.top = `${sticker.yPct}%`;
      el.style.width = `${sticker.sizePx}px`;
      el.style.height = `${sticker.sizePx}px`;
      el.dataset.id = sticker.id;

      el.innerHTML = `
        ${sticker.svg}
        <button class="sticker-ctrl-delete" title="Delete sticker" type="button">✕</button>
        <div class="sticker-ctrl-scale-row">
          <button class="sticker-ctrl-btn btn-scale-down" title="Smaller" type="button">−</button>
          <button class="sticker-ctrl-btn btn-scale-up" title="Bigger" type="button">+</button>
        </div>
      `;

      // Control button handlers
      const btnDel = el.querySelector('.sticker-ctrl-delete');
      btnDel.addEventListener('pointerdown', (e) => e.stopPropagation());
      btnDel.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteSticker(sticker.id);
      });

      const btnUp = el.querySelector('.btn-scale-up');
      btnUp.addEventListener('pointerdown', (e) => e.stopPropagation());
      btnUp.addEventListener('click', (e) => {
        e.stopPropagation();
        sticker.sizePx = Math.min(160, sticker.sizePx + 16);
        el.style.width = `${sticker.sizePx}px`;
        el.style.height = `${sticker.sizePx}px`;
      });

      const btnDown = el.querySelector('.btn-scale-down');
      btnDown.addEventListener('pointerdown', (e) => e.stopPropagation());
      btnDown.addEventListener('click', (e) => {
        e.stopPropagation();
        sticker.sizePx = Math.max(32, sticker.sizePx - 16);
        el.style.width = `${sticker.sizePx}px`;
        el.style.height = `${sticker.sizePx}px`;
      });

      // Attach rock-solid drag handler
      setupStickerDrag(el, sticker);

      dom.stickerLayer.appendChild(el);
    });
  }

  function setupStickerDrag(el, sticker) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let origPctX = 0, origPctY = 0;

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const rect = dom.canvasContainer.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      const deltaPctX = (deltaX / rect.width) * 100;
      const deltaPctY = (deltaY / rect.height) * 100;

      sticker.xPct = Math.max(3, Math.min(97, origPctX + deltaPctX));
      sticker.yPct = Math.max(3, Math.min(97, origPctY + deltaPctY));

      el.style.left = `${sticker.xPct}%`;
      el.style.top = `${sticker.yPct}%`;
    };

    const onPointerUp = () => {
      if (isDragging) {
        isDragging = false;
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
      }
    };

    el.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      e.preventDefault();
      e.stopPropagation();

      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      origPctX = sticker.xPct;
      origPctY = sticker.yPct;

      selectSticker(sticker.id);

      window.addEventListener('pointermove', onPointerMove, { passive: false });
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
    });
  }

  function selectSticker(id) {
    state.selectedStickerId = id;
    document.querySelectorAll('.placed-sticker').forEach(item => {
      item.classList.toggle('selected', item.dataset.id === id);
    });
  }

  function deleteSticker(id) {
    state.placedStickers = state.placedStickers.filter(s => s.id !== id);
    if (state.selectedStickerId === id) {
      state.selectedStickerId = null;
    }
    renderStickersOverlay();
    updateClearButtonState();
  }

  function clearAllStickers() {
    state.placedStickers = [];
    state.selectedStickerId = null;
    renderStickersOverlay();
    updateClearButtonState();
  }

  function updateClearButtonState() {
    if (dom.btnClearStickers) {
      dom.btnClearStickers.style.display = state.placedStickers.length > 0 ? 'inline-flex' : 'none';
    }
  }

  // Bake placed stickers onto the canvas before PNG export
  async function drawPlacedStickersOnCanvas(ctx, canvas) {
    const containerRect = dom.canvasContainer.getBoundingClientRect();
    const scale = canvas.width / (containerRect.width || canvas.width);

    for (const sticker of state.placedStickers) {
      try {
        const img = await loadSvgImage(sticker.svg);
        const cx = (sticker.xPct / 100) * canvas.width;
        const cy = (sticker.yPct / 100) * canvas.height;
        const sSize = sticker.sizePx * scale;
        ctx.save();
        ctx.drawImage(img, cx - sSize / 2, cy - sSize / 2, sSize, sSize);
        ctx.restore();
      } catch (err) {
        console.warn('Could not bake sticker to canvas:', err);
      }
    }
  }

  // =========================================================================
  // 11. DOWNLOAD & RETAKE HANDLERS
  // =========================================================================
  async function downloadResultPng() {
    const canvas = dom.resultCanvas;
    const ctx = canvas.getContext('2d');

    // 1. Re-render base canvas with current styles & decorations
    await renderResultCanvas();

    // 2. Bake all placed stickers onto canvas at print-quality resolution
    await drawPlacedStickersOnCanvas(ctx, canvas);

    try {
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      link.download = `snapit-${state.currentTemplate.id}-${timestamp}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Download error:', e);
      alert('Could not download image. Please try right-clicking the image and select "Save Image As".');
    }
  }

  function retakeSession() {
    clearAllStickers();
    switchView('camera');
  }

  function changeTemplateFromResults() {
    switchView('home');
  }

  // =========================================================================
  // 12. EVENT LISTENERS SETUP
  // =========================================================================
  function setupEventListeners() {
    // Navigation
    dom.navBrand.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
    });

    dom.navHomeBtn.addEventListener('click', () => switchView('home'));
    dom.navCameraBtn.addEventListener('click', () => switchView('camera'));

    // Hero
    dom.btnHeroStart.addEventListener('click', () => {
      document.getElementById('templates-anchor').scrollIntoView({ behavior: 'smooth' });
    });

    // Filter Chips
    dom.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        dom.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeFilter = chip.dataset.filter;
        renderTemplateGrid();
      });
    });

    // Camera Controls
    dom.btnCameraBack.addEventListener('click', () => switchView('home'));
    dom.btnFlipCamera.addEventListener('click', flipCamera);
    dom.btnRetryCamera.addEventListener('click', initCameraStream);
    dom.btnCaptureTrigger.addEventListener('click', triggerCaptureSequence);
    dom.btnRestartSession.addEventListener('click', resetSession);

    // Timer selector buttons (3s / 5s)
    dom.timerButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.timerButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.timerSeconds = parseInt(btn.dataset.timer, 10) || 3;
      });
    });

    // Result Customizations
    dom.colorSwatches.addEventListener('click', (e) => {
      const target = e.target.closest('.swatch-btn');
      if (!target) return;
      document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      target.classList.add('active');
      state.resultBgColor = target.dataset.color;
      renderResultCanvas();
    });

    dom.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.resultFilter = btn.dataset.filter;
        renderResultCanvas();
      });
    });

    dom.btnToggleStamp.addEventListener('click', () => {
      state.showTimestamp = !state.showTimestamp;
      dom.btnToggleStamp.classList.toggle('active', state.showTimestamp);
      renderResultCanvas();
    });

    // Deselect sticker when clicking on canvas stage outside a sticker
    document.addEventListener('pointerdown', (e) => {
      if (!e.target.closest('.placed-sticker') && !e.target.closest('.sticker-item-btn')) {
        if (state.selectedStickerId !== null) {
          state.selectedStickerId = null;
          renderStickersOverlay();
        }
      }
    });

    if (dom.btnClearStickers) {
      dom.btnClearStickers.addEventListener('click', clearAllStickers);
    }

    dom.btnDownloadPng.addEventListener('click', downloadResultPng);
    dom.btnRetake.addEventListener('click', retakeSession);
    dom.btnChangeTemplate.addEventListener('click', changeTemplateFromResults);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

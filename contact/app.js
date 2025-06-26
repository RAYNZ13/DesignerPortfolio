  const menuOpenEl = document.getElementById('menuLabel');
  const menuCloseEl = document.getElementById('close-button');
  const menuPanelEl = document.getElementById('menuPanel');

  if (menuOpenEl && menuPanelEl) {
    menuOpenEl.addEventListener('click', () => {
      menuPanelEl.classList.add('open');
    });
  }

  if (menuCloseEl && menuPanelEl) {
    menuCloseEl.addEventListener('click', () => {
      menuPanelEl.classList.remove('open');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuPanelEl.classList.contains('open')) {
      menuPanelEl.classList.remove('open');
    }
  });
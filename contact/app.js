const menuOpenEl = document.getElementById('menuLabel');
const menuCloseEl = document.getElementById('close-button');
const menuPanelEl = document.getElementById('menuPanel');

menuOpenEl.addEventListener('click', () => {
  menuPanelEl.style.height = "100%"; // Set the target height
});

menuCloseEl.addEventListener('click', () => {
  menuPanelEl.style.height = "0"; // Reset the height
});

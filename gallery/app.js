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


const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
});

AOS.init();

  // Replace with your API details
  const API_KEY = 'AIzaSyBzMzbTS_Wmpcugc-Fosy5k_7IGiwrasLc';
  const CHANNEL_ID = 'UCaD5Yz7SP17dvOlSgihCsqw';
  const PLAYLIST_ID = 'PLLoLMyaQW8xieIyVD23VVdPjxPCkDaXS1';

  async function fetchChannelStats() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`);
    const data = await res.json();
    const stats = data.items[0].statistics;

    document.getElementById('subscribers').textContent = Number(stats.subscriberCount).toLocaleString();
    document.getElementById('views').textContent = Number(stats.viewCount).toLocaleString();
  }

  async function fetchPlaylistVideos() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=6&key=${API_KEY}`);
    const data = await res.json();
    const container = document.getElementById('playlist-container');

    data.items.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
      container.appendChild(slide);
    });

    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  fetchChannelStats();
  fetchPlaylistVideos();


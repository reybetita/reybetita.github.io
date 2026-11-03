'use strict';

const galleries = {
  agentmode: { title: 'AgentMode', images: ['src/agentmode-workspace.png'], caption: 'Sample workspace and synthetic Git history.' },
  runner: { title: 'PMNP-IS Script Runner', images: ['src/script runner.png'] },
  sab: { title: 'SAB App', images: [3, 1, 2, 5, 6].map(n => `src/SABapp (${n}).png`) },
  help: { title: 'PMNP-ICT Help Center', images: [1, 2, 3].map(n => `src/helpcenter (${n}).png`) },
  claw: { title: 'Claw Machine Saga', images: [1, 2, 3, 4].map(n => `src/clawmachine (${n}).png`) }
};

const dialog = document.querySelector('.gallery');
const image = document.getElementById('gallery-image');
const title = document.getElementById('gallery-title');
const caption = document.getElementById('gallery-caption');
const count = document.getElementById('gallery-count');
const previous = document.querySelector('.gallery-prev');
const next = document.querySelector('.gallery-next');
let currentGallery;
let currentIndex = 0;
let trigger;

function renderImage() {
  image.src = currentGallery.images[currentIndex];
  image.alt = `${currentGallery.title} — screenshot ${currentIndex + 1} of ${currentGallery.images.length}`;
  title.textContent = currentGallery.title;
  caption.textContent = currentGallery.caption || `${currentGallery.title} / Application screenshots`;
  count.textContent = `${currentIndex + 1} / ${currentGallery.images.length}`;
  previous.disabled = next.disabled = currentGallery.images.length === 1;
}

function moveImage(offset) {
  currentIndex = (currentIndex + offset + currentGallery.images.length) % currentGallery.images.length;
  renderImage();
}

document.querySelectorAll('[data-gallery]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    trigger = link;
    currentGallery = galleries[link.dataset.gallery];
    currentIndex = 0;
    renderImage();
    dialog.showModal();
    document.body.classList.add('gallery-open');
  });
});

document.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
previous.addEventListener('click', () => moveImage(-1));
next.addEventListener('click', () => moveImage(1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveImage(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('gallery-open');
  trigger?.focus({ preventScroll: true });
});

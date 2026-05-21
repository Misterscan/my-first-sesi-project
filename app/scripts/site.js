const cards = Array.from(document.querySelectorAll('.story-card'));
const reveal = () => {
  cards.forEach((card, index) => {
    window.setTimeout(() => {
      card.classList.add('is-visible');
    }, 90 * index);
  });
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', reveal, { once: true });
} else {
  reveal();
}

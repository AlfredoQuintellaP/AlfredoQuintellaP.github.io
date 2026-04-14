// Award filter
const filterBtns = document.querySelectorAll('.filter-btn');
const awardCards = document.querySelectorAll('.award-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    awardCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const tags = card.dataset.tags || '';
        card.classList.toggle('hidden', !tags.includes(filter));
      }
    });
  });
});

const user = 'alfredo.quintella';
const domain = 'gmail.com';
document.querySelector('.email-link').href = `mailto:${user}@${domain}`;
document.querySelector('.email-link').textContent = `${user}@${domain}`;

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Shared interactions for Safari & City Tours
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

// Manual hero image carousel: the original local images are preserved.
const hero = document.querySelector('#hero');
const heroCount = document.querySelector('#heroCount');
if (hero && heroCount) {
  const slides = [
    { image: 'images/uganda-landscape.jpg', number: '01' },
    { image: 'images/murchison-waterfall.jpg', number: '02' },
    { image: 'images/lake-victoria.jpg', number: '03' }
  ];
  let activeSlide = 0;
  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    hero.style.backgroundImage = `url('${slides[activeSlide].image}')`;
    heroCount.textContent = `${slides[activeSlide].number} / 03`;
  };
  document.querySelector('#heroPrev')?.addEventListener('click', () => showSlide(activeSlide - 1));
  document.querySelector('#heroNext')?.addEventListener('click', () => showSlide(activeSlide + 1));
}

const contactForm = document.querySelector('#contactForm');
const successModal = document.querySelector('#successModal');
const closeModal = document.querySelector('#closeModal');
if (contactForm && successModal) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    successModal.classList.add('show');
    contactForm.reset();
  });
}
if (closeModal && successModal) {
  closeModal.addEventListener('click', () => successModal.classList.remove('show'));
}
if (successModal) {
  successModal.addEventListener('click', (event) => {
    if (event.target === successModal) successModal.classList.remove('show');
  });
}

const images = [
  './assets/simple-icons_express.svg',
  './assets/mdi_nodejs.svg',
  './assets/carbon_logo-react.svg',
  './assets/simple-icons_express.svg',
];
let currentImageIndex = 0;

const imgElement = document.createElement('img');
document.body.querySelector('.my-stack').appendChild(imgElement);

imgElement.src = images[currentImageIndex];

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imgElement.src = images[currentImageIndex];
}, 1000); // Change image every 1 second (1000 milliseconds)

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    console.log('hovering');
    if (e.target === card) {
      const a = e.target.querySelector('.card-main');
      a.classList.add('active');
      e.target.style.transform = 'translateY(-5%)';
    }
  });
  card.addEventListener('mouseleave', (e) => {
    console.log('leaving');
    if (e.target === card) {
      const a = e.target.querySelector('.card-main');
      a.classList.remove('active');
      e.target.style.transform = 'translateY(0%)';
    }
  });
});

const buttons = document.querySelectorAll('.buttons');
const frontStack = document.querySelectorAll('.front-stack');
const fullStack = document.querySelectorAll('.full-stack');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('fullBtn')) {
      frontStack.forEach((stack) => {
        stack.classList.add('hidden');
        fullStack.forEach((a) => a.classList.remove('hidden'));
      });
    }
    if (e.target.classList.contains('frontBtn')) {
      fullStack.forEach((stack) => {
        stack.classList.add('hidden');
        frontStack.forEach((a) => a.classList.remove('hidden'));
      });
    }
    if (e.target.classList.contains('all')) {
      fullStack.forEach((stack) => {
        stack.classList.remove('hidden');
        frontStack.forEach((a) => a.classList.remove('hidden'));
      });
    }
  });
});

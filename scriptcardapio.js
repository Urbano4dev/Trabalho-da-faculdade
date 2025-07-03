let fontSize = 16;

  function increaseFontSize() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
  }
  
  function decreaseFontSize() {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + 'px';
  }
    
  function showTooltip(card) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = 'Escolha oque deseja';
    card.appendChild(tooltip);
  }
  
  function hideTooltip(card) {
    const tooltip = card.querySelector('.tooltip');
    card.removeChild(tooltip);
  }
  document.getElementById('increaseFontBtn').addEventListener('click', function () {
    changeFontSize(2);
  });
  
  document.getElementById('decreaseFontBtn').addEventListener('click', function () {
    changeFontSize(-2);
  });
  
  function changeFontSize(changeAmount) {
    const body = document.body;
    const computedFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let fontSize = parseFloat(computedFontSize);
  
    fontSize += changeAmount;
    body.style.fontSize = fontSize + 'px';
  }
  
  document.getElementById('darkModeBtn').addEventListener('click', function () {
    toggleDarkMode();
  });
  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  
const cards = document.querySelectorAll('.card');


function animateCards() {
  cards.forEach((card, index) => {
    
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 100); 
  });
}


window.addEventListener('load', animateCards);

 
const heading = document.querySelector('h1');


function animateHeading() {
  heading.classList.add('zoom-heading');
}


window.addEventListener('load', animateHeading);
const searcher = document.querySelector('.main-scene-searcher');

searcher.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.target.searcher.value;

  alert(inputValue);
});


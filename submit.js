const formSubmit = document.querySelector('.submit-form');

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const type = e.target.type.value;
  const description = e.target.description.value;
  const steps = e.target.steps.value;
  const impact = e.target.impact.value;

  alert(inputValue);
});
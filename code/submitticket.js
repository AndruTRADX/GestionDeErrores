const formSubmit = document.querySelector('.submit-form');

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const type = e.target.type.value.trim();
  const description = e.target.description.value.trim();
  const steps = e.target.steps.value.trim();
  const impact = e.target.impact.value.trim();

  if (type === "" || description === "" || steps === "" || impact === "") {
    alert("All fields must be filled out");
    return;
  }

  e.target.type.value = "";
  e.target.description.value = "";
  e.target.steps.value = "";
  e.target.impact.value = "";

  alert("Ticket has been submitted successfully!");
});

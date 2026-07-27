document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = "Please fill in all fields with a valid email and phone number.";
    status.className = "form-status error";
    return;
  }

  // No backend is wired up yet — swap this block for a real submission
  // (e.g. POST to Formspree/Netlify Forms/your own API) when one is ready.
  status.textContent = "Thanks! Your request has been received. We'll be in touch soon.";
  status.className = "form-status success";
  form.reset();
});

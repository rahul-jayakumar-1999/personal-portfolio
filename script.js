// Import skill and project Details from data page.

import { skills } from './data/skill.js';
import { projects  } from './data/project.js';

// Project and Skill Card Code.

let projectHTML = '';
let skillHTML = '';

projects.forEach((project) => {
    projectHTML += `
        <div class="col">
            <a href="${project.link}">
                <div class="card h-100 shadow">
                    <img src="Images/${project.image}" class="card-img-top border-bottom" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${project.name}</h5>
                    </div>
                </div>
            </a>
        </div>
    `;
});

skills.forEach((skill) => {
    skillHTML += `
        <div class="card col-md-3 skill-card" style="width: 18rem;"> 
            <div class="card-body text-center">
                <img src="Images/${skill.image}" class="img-fluid" alt="...">
                <h5 class="card-title">${skill.title}</h5>
                <p class="card-text">${skill.text}</p>
            </div>
        </div>
    `;
});

document.querySelector('.js-project-grid')
    .innerHTML = projectHTML;

document.querySelector('.js-skill-grid')
    .innerHTML = skillHTML;

// Form Submission and Validation Code.

const form = document.getElementById('submit-form');

// Set up the validator
const validator = new JustValidate('#submit-form');

validator
  .addField('#floatingInpu', [
  {
      rule: 'required',
      errorMessage: 'Name is required',
  }
  ])
  .addField('#floatingInput', [
  {
      rule: 'required',
      errorMessage: 'Email is required',
  },
  {
      rule: 'email',
      errorMessage: 'Email is invalid',
  }
  ])
  .addField('#floatingTextarea', [
  {
      rule: 'required',
      errorMessage: 'Comment is required',
  }
])

.onSuccess((event) => {
// Prevent default form submission
  event.preventDefault();

  // Send data to Google Sheets via fetch or XMLHttpRequest
  fetch("https://script.google.com/macros/s/AKfycbyouZ-_2Q0FxT_5f8BshqiSNEA5ADk_GvU8V3I_dmi8TnQohlfdVbEHOU4eglNdtxCl/exec", {
      method: "POST",
      body: new FormData(form),
  })
  .then(response => {
      if (response.ok) {
      alert("Form submitted successfully");
      window.location.reload();
      } else {
      alert("Submission failed. Please try again.");
      }
  })
  .catch(error => {
      console.error('Error!', error.message);
  });
});









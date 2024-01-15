const menu = document.querySelector('#menu');
const menuClose = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.side-menu');

menu.addEventListener('click', () => {
  const showMenu = document.querySelector('.menu-background');
  showMenu.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
  const showMenu = document.querySelector('.menu-background');
  showMenu.classList.remove('active');
});

menuLinks.forEach((element) => {
  element.addEventListener('click', () => {
    const showMenu = document.querySelector('.menu-background');
    showMenu.classList.remove('active');
  });
});

const projectContainer = document.getElementById('project_container');
const projectPopUp = document.querySelector('.trans-back');

const projectDetails = [
  {
    image: 'img/kano_tech_summit.png',
    name: 'Kano Tech Summit',
    description:
      'This project was about designing a TECH Global Conference website. The website was built with a responsive design approach. Hence, it has a different view for mobile and desktop users',
    languages: ['html', 'css', 'JavaScript'],
    see_live: 'https://devalibello.github.io/capstone-1/',
    source_code: 'https://github.com/devalibello/capstone-1',
  },
  {
    image: 'img/kano_weather_app.png',
    name: 'Kano Weather App',
    description:
      'This is a webapp that can be used to display various weather conditions of Kano State - Nigeria. The app was built using React/Redux Toolkit with the aid OpenWeatehr API',
    languages: ['html', 'css', 'JavaScript', 'React', 'Redux'],
    see_live: 'https://kano-weather-application.onrender.com/',
    source_code: 'https://github.com/devalibello/kano-weather-app',
  },
];

const displayProject = (id) => {
  projectContainer.innerHTML += `
  <section class="tonic_border">
    <section class="tonic_project">
      <a href="https://"><img class="tonic_pic tech" src="${
  projectDetails[id].image
}" alt=""></a>
    </section>
    <section class="desk-side">
      <h2 class="tonic">${projectDetails[id].name}</h2>
      <p class="description">${projectDetails[id].description}</p>
      <ul class="project_languages">
        ${projectDetails[id].languages
    .map(
      (language) => `<li class="project_language_style">${language}</li>`,
    )
    .join('')}
      </ul>
      <button class="btn project" id="${id}">See Project</button>
    </section>
  </section>
`;
};

for (let i = 0; i < projectDetails.length; i += 1) {
  displayProject(i);
}

const displayPopup = (id) => {
  document.getElementById('project_content').innerHTML = `
	<h2 class="project-name">${projectDetails[id].name}</h2>
  <div class="div-project-image">
		<img class="project-image" src="${projectDetails[id].image}" alt="">
	</div>
  <div class="div-project-description">
		<h3 class="project-description description">${
  projectDetails[id].description
}</h3>
	</div>
  <ul class="project_languages">
    ${projectDetails[id].languages
    .map((language) => `<li class="project_language_style">${language}</li>`)
    .join('')}
  </ul>
  <div class="div-footer-btn">
									<div class="footer-btns">
										<a class="footer-btn" href="${projectDetails[id].see_live}">
											<button class="footer-btn">
												<h3 class="footer-btn-content">Live</h3>
												<img src="./img/footer-logo-1.svg" alt="see live logo" class="footer-btn-logo-1">
											</button>
										</a>
										<a class="footer-btn" href="${projectDetails[id].source_code}">
											<button class="footer-btn">
												<h3 class="footer-btn-content">Code</h3>
												<img src="./img/footer-logo-2.svg" alt="see source logo" class="footer-btn-logo-2">
											</button>
										</a>
									</div>
  `;
};

const handleClick = (event) => {
  projectPopUp.style.display = 'flex';
  document.body.classList.toggle('popup-open');
  displayPopup(event.target.id);
};

const projectButton = document.querySelectorAll('button.btn.project');
projectButton.forEach((button) => {
  button.addEventListener('click', handleClick);
});

const closePopUp = document.getElementById('close');
closePopUp.addEventListener('click', () => {
  projectPopUp.style.display = 'none';
  document.body.classList.remove('popup-open');
});

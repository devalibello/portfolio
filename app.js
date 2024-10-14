
const menu = document.querySelector("#menu");
const menuClose = document.querySelector(".fa-xmark");
const menuLinks = document.querySelectorAll(".side-menu");

menu.addEventListener("click", () => {
  const showMenu = document.getElementById("menu-background");
  showMenu.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("popup-open");

});

menuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.classList.toggle("popup-open");
    const showMenu = document.querySelector(".menu-background");
    showMenu.classList.remove("active");
  });
});

const projectContainer = document.getElementById("project_container");
const projectPopUp = document.querySelector(".trans-back");
const skills = [
  "Git",
  "Gitflow",
  "PostgreSQL",
  "Object-Oriented Programming",
  "Pair-Programming",
  "Data Structures",
  "Algorithms",
  "Problem Management",
  "DevTools",
  "Test-Driven Development",
  "Leadership",
];
const projectDetails = [
  {
    image: "img/restaurant.png",
    name: "Restaurant",
    description:
      "This website was built for a restaurant. The site shows the various services offered by the restaurant and includes customer reviews.",
    languages: ["HTML", "CSS", "JavaScript", "React", "GSAP"],
    see_live: "https://tasty-food-lwkj.onrender.com/",
    source_code: "https://github.com/devalibello/tasty-food",
  },
  {
    image: "img/kano_tech_summit.png",
    name: "Kano Tech Summit",
    description:
      "This project was about designing a TECH Global Conference website. The website was built with a responsive design approach. Hence, it has a different view for mobile and desktop users",
    languages: ["HTML", "CSS", "JavaScript"],
    see_live: "https://devalibello.github.io/capstone-1/",
    source_code: "https://github.com/devalibello/capstone-1",
  },
  {
    image: "img/kano_weather_app.png",
    name: "Kano Weather App",
    description:
      "This is a webapp that can be used to display various weather conditions of Kano State - Nigeria. The app was built using OpenWeatehr API.",
    languages: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    see_live: "https://kano-weather-application.onrender.com/",
    source_code: "https://github.com/devalibello/kano-weather-app",
  },
  {
    image: "img/calculator.png",
    name: "Math Magician",
    description:
      "Discover the power of simplicity with our Math Magician web app. The app was built using React SPA, API Ninja and Jest test cases.",
    languages: ["HTML", "CSS", "JavaScript", "React"],
    see_live: "https://math-magician-g3js.onrender.com/",
    source_code: "https://github.com/devalibello/math-magician",
  }
];

const displayProject = (id) => {
  projectContainer.innerHTML += `
  <section class="tonic_border">
    <section class="tonic_project">
      <img class="tonic_pic tech" src="${
        projectDetails[id].image
      }" alt="">
    </section>
    <section class="desk-side">
      <h2 class="tonic">${projectDetails[id].name}</h2>
      <p class="description">${projectDetails[id].description}</p>
      <ul class="project_languages">
        ${projectDetails[id].languages
          .map(
            (language) => `<li class="project_language_style">${language}</li>`
          )
          .join("")}
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
  ['menu', 'mobile-view', 'logo', 'view-b'].forEach(id => 
    document.getElementById(id).classList.toggle('hide-navbar')
  );
  document.getElementById("project_content").innerHTML = `
	<h2 class="project-name">${projectDetails[id].name}</h2>
  <div class="popup-project-section">
    <div class="div-project-image project-image-pop">
      <img class="project-image" src="${projectDetails[id].image}" alt="">
    </div>

    <div class="pop-description-section">
      <div class="div-project-description">
        <h3 class="project-description description">${
          projectDetails[id].description
        }</h3>
      </div>

      <ul class="project_languages">
        ${projectDetails[id].languages
          .map(
            (language) => `<li class="project_language_style">${language}</li>`
          )
          .join("")}
      </ul>

      <div class="div-footer-btn">
      <div class="footer-btns">
        <a class="footer-btn" href="${projectDetails[id].see_live}" target='_blank'>
          <button class="footer-btn">
            <h3 class="footer-btn-content">Live</h3>
            <img src="./img/footer-logo-1.svg" alt="see live logo" class="footer-btn-logo-1">
          </button>
        </a>
        <a class="footer-btn" href="${projectDetails[id].source_code}" target="_blank" rel="noopener">
          <div class="footer-btn">
            <h3 class="footer-btn-content">Code</h3>
            <img src="./img/footer-logo-2.svg" alt="see source logo" class="footer-btn-logo-2">
          </div>
        </a>
      </div>
    </div>
  </div>
  `;
};

const handleClick = (event) => {
  projectPopUp.style.display = "flex";
  document.body.classList.toggle("popup-open");
  displayPopup(event.target.id);
};

const projectButton = document.querySelectorAll("button.btn.project");
projectButton.forEach((button) => {
  button.addEventListener("click", handleClick);
});

const closePopUp = document.getElementById("close");
closePopUp.addEventListener("click", () => {
  ['menu', 'mobile-view', 'logo', 'view-b'].forEach(id => 
    document.getElementById(id).classList.toggle('hide-navbar')
  );
  projectPopUp.style.display = "none";
  document.body.classList.remove("popup-open");
});

const toggleArrow = (type) => {
  document.querySelector(`.lang-grid-${type}`).classList.toggle("open");
  document
    .querySelector(`.fa-angle-right-${type}`)
    .classList.toggle("turn-arrow");
};

const postSkills = document.getElementById("skills-container");
const displaySkills = () => {
  postSkills.innerHTML = `
<ul class="project_languages">
  ${skills.map((skill) => `<li class="skills-style">${skill}</li>`).join("")}
</ul>
`;
};
displaySkills();

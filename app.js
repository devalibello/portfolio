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


const projectContainer = document.getElementById('project_container')
const projectDetails = [
  {
    image: "img/kano_tech_summit.png",
    name: "Kano Tech Summit",
    description: "This project was about designing a TECH Global Conference website. The website was built with a responsive design approach. Hence, it has a different view for mobile and desktop users",
    languages: ["html", "css", "JavaScript"]
  },
  {
    image: "img/kano_weather_app.png",
    name: "Kano Weather App",
    description: "This is a webapp that can be used to display various weather conditions of Kano State - Nigeria. The app was built using React/Redux Toolkit with the aid OpenWeatehr API",
    languages: ["html", "css", "JavaScript", "React", "Redux"]
  }
]

const displayProject = (id) => {
  projectContainer.innerHTML += `
  <section class="tonic_border">
    <section class="tonic_project">
      <a href="https://"><img class="tonic_pic tech" src="${projectDetails[id].image}" alt=""></a>
    </section>
    <section class="desk-side">
      <h2 class="tonic">${projectDetails[id].name}</h2>
      <p class="description">${projectDetails[id].description}</p>
      <ul class="project_languages">
        ${projectDetails[id].languages.map(language => `<li class="project_language_style">${language}</li>`).join('')}
      </ul>
      <button class="btn project">See Project</button>
    </section>
  </section>
`
}

for (let i = 0; i < projectDetails.length; i +=1) {
  displayProject(i)
}




			// <section class="tonic_project">
      // <a href="https://"><img class="tonic_pic tech" src="img/kano_tech_summit.png" alt=""></a>
      // </section>
      // <section class="desk-side">
      //   <h2 class="tonic">Kano Tech Summit</h2>
      //   <p class="description">This project was about designing a TECH Global Conference website.
      //      The website was built with a responsive design approach. Hence, it has a different view 
      //      for mobile and desktop users.</p>
      //   <ul class="project_languages">
      //     <li class="project_language_style">HTML</li>
      //     <li class="project_language_style">CSS</li>
      //     <li class="project_language_style">JavaScript</li>
      //   </ul>
      //   <button class="btn project">See Project</button>
      // </section>

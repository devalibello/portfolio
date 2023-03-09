const projectArray = [
  {
    id: 0,
    title: 'Tonic',
    desktopTitle: 'Tonic',
    details: ['CANOPY', 'Back End Dev', 2015],
    desktopDetails: ['CANOPY', 'Back End Dev', 2015],
    image: 'img/tonic_pic.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    desktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javaScript'],
    desktopTechnologies: ['html', 'css', 'javaScript'],
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    desktopTitle: 'Multi-Post Stories',
    details: ['CANOPY', 'Back End Dev', 2015],
    desktopDetails: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: 'img/port3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    desktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javaScript'],
    desktopTechnologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    id: 2,
    title: 'Tonic',
    desktopTitle: 'Facebook 360',
    details: ['CANOPY', 'Back End Dev', 2015],
    desktopDetails: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: 'img/port1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    desktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javaScript'],
    desktopTechnologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    desktopTitle: 'Uber Navigation',
    details: ['CANOPY', 'Back End Dev', 2015],
    desktopDetails: ['Uber', 'Lead Developer', 2018],
    image: 'img/port2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    desktopDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javaScript'],
    desktopTechnologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
];

const projectButton = document.querySelectorAll('button.btn.project');
const closeProject = document.querySelector('.close-pop');
const projectPopUp = document.querySelector('.trans-back');

for (let i = 0; i < projectButton.length; i += 1) {
  projectButton[i].addEventListener('click', () => {
    const title = projectPopUp.querySelector('.project-name');
    const img = projectPopUp.querySelector('.project-image');
    title.textContent = projectArray[i].title;
    img.src = projectArray[i].image;
    projectPopUp.classList.remove('pop-remove');
  });
}

closeProject.addEventListener('click', () => {
  const projectPopUp = document.querySelector('.trans-back');
  projectPopUp.classList.toggle('pop-remove');
});

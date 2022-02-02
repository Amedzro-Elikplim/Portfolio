const barIcon = document.querySelector('.bar-icon');
const mobileMenuDropdown = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.menu-nav-links > li');
const body = document.querySelector('.main-body');
const closeIcon = document.querySelector('.dropdown-menu-icon');
const button1 = document.querySelector('.project1-button');
const project1Container = document.querySelector('.project-info-container1');


barIcon.addEventListener('click', () => {
  mobileMenuDropdown.style.display = 'block';
  body.style.overflow = 'hidden';
});

lists.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenuDropdown.style.display = 'none';
    body.style.overflow = 'visible';
  });
});

closeIcon.addEventListener('click', () => {
  mobileMenuDropdown.style.display = 'none';
  body.style.overflow = 'visible';
});

const details = [
  {
    project1: {
      name: 'Scientific Calculator',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel a ea sequi quidem culpa accusamus possimus, aliquid delectus, id molestias consequatur',
      featuredImage: './assets/images/background.jpg',
      technologies: ['Html/Css', 'Javascript', 'Ruby on rails'],
      liveVersion: 'https://amedzro-elikplim.github.io/Portfolio/',
      source: 'https://github.com/Amedzro-Elikplim/Portfolio',
    },
  },

  {
    project2: {
      name: 'Calculater',
    },
  },
];


function createProjects() {
  
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');
  closeIcon.src = '/assets/images/Icon.png';
  container.className = 'project-container';
  container.appendChild(closeIcon);
  closeIcon.className = 'close-button';
  button1.classList.toggle('hidden');
  container.style.overflow = 'scroll';
closeIcon.addEventListener('click', ()=>{
    container.classList.toggle('hidden');
    button1.classList.toggle('active');
})
  
  project1Container.appendChild(container);
}



button1.addEventListener('click', createProjects);



const barIcon = document.querySelector('.bar-icon');
const mobileMenuDropdown = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.menu-nav-links > li');
const body = document.querySelector('.main-body');
const closeIcon = document.querySelector('.dropdown-menu-icon');

const projectContainer = document.querySelector('.project-info');

const button = document.querySelectorAll('.project-button');


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


class Project {
  costructor(
    name,
    description,
    featureImage,
    technologies,
    liveVersion,
    source
  ) {
    this.name = name;
    this.description = description;
    this.featureImage = featureImage;
    this.technologies = technologies;
    this.liveVersion = liveVersion;
    this.source = source;
  }
}

const details = [
  {
    project1: {
      name: "Scientific Calculator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel a ea sequi quidem culpa accusamus possimus, aliquid delectus, id molestias consequatur",
      featuredImage: "./assets/images/background.jpg",
      technologies: ["Html/Css", "Javascript", "Ruby on rails"],
      liveVersion: "https://amedzro-elikplim.github.io/Portfolio/",
      source: "https://github.com/Amedzro-Elikplim/Portfolio",
    },

    project2: {
      name: 'Scientific',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel a ea sequi quidem culpa accusamus possimus, aliquid delectus, id molestias consequatur',
      featuredImage: './assets/images/background.jpg',
      technologies: ['Html/Css', 'Javascript', 'Ruby on rails'],
      liveVersion: 'https://amedzro-elikplim.github.io/Portfolio/',
      source: 'https://github.com/Amedzro-Elikplim/Portfolio',
    },
  
  },

  
];




function createProjects() {
  
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');

 
  closeIcon.src = '/assets/images/Icon.png';
  container.className = 'project-container';


  closeIcon.className = 'close-button';
  // button.classList.toggle('hidden');
  container.style.overflow = 'scroll';
  // container.classList.toggle('active');
  
closeIcon.addEventListener('click', ()=>{
    container.classList.toggle('hidden');
    // button.classList.toggle('active');
})
  
  container.appendChild(closeIcon);
  projectContainer.appendChild(container);

  console.log('please work')
}



button.forEach((element) => {
   element.addEventListener("click", createProjects);
})




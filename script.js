const barIcon = document.querySelector('.bar-icon');
const mobileMenuDropdown = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.menu-nav-links > li');
const body = document.querySelector('.main-body');
const closeIcon = document.querySelector('.dropdown-menu-icon');
const button1 = document.querySelector('.project-button1');
const button2 = document.querySelector('.project-button2');
const button3 = document.querySelector('.project-button3')
const button4 = document.querySelector('.project-button4')
const desktopProjectContainer = document.querySelector('.project');


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
      name: "Multi - Post Stories",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel a ea sequi quidem culpa accusamus possimus, aliquid d nting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theelectus, id molestias consequatur",
      featuredImage: "./assets/images/Snapshoot.svg",
      technologies: ["Html/Css", "Javascript", "Ruby on rails"],
      liveVersion: "https://amedzro-elikplim.github.io/Portfolio/",
      source: "https://github.com/Amedzro-Elikplim/Portfolio",
      btn1Name: "See live",
      btn2Name: "See source",
    },
  },
];



function createProject1() {
  const projectContainer = document.querySelector('.project-info-container1');
  const backgroundDiv = document.createElement('div');
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');
  const heading = document.createElement('h1');
  const projectImage = document.createElement('img');
  const description = document.createElement('p');
  const technologies = document.createElement('ul');
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  
  
  heading.innerHTML = details[0].project1.name;
  projectImage.src = details[0].project1.featuredImage;
  description.innerHTML = details[0].project1.description;
  closeIcon.src = '/assets/images/Icon.png';
  list1.innerHTML = details[0].project1.technologies[0];
  list2.innerHTML = details[0].project1.technologies[1];
  list3.innerHTML = details[0].project1.technologies[2];
  link1.innerHTML = details[0].project1.btn1Name;
  link1.href = details[0].project1.liveVersion;
  link2.innerHTML = details[0].project1.btn2Name;
  link2.href = details[0].project1.source;
  
  
  container.className = 'project-container';
  closeIcon.className = 'close-button';
  heading.className = 'heading';
  description.className = 'description';
  technologies.className = 'list';
  link1.className = "links";
  link2.className = "links";
  backgroundDiv.className = "background-div";
  
  body.classList.add('noScroll');
  
closeIcon.addEventListener('click', () => {
  container.classList.toggle('hidden');
  body.classList.remove('noScroll');
  backgroundDiv.classList.toggle('hidden');
})
  
  technologies.appendChild(list1);
  technologies.appendChild(list2);
  technologies.appendChild(list3);
  
  container.appendChild(closeIcon);
  container.appendChild(heading);
  container.appendChild(projectImage);
  container.appendChild(description);
  container.appendChild(technologies);
  container.appendChild(link1);
  container.appendChild(link2);

  backgroundDiv.appendChild(container)

  if (window.innerWidth < 567) {
     projectContainer.appendChild(backgroundDiv);
  } else {
    desktopProjectContainer.appendChild(backgroundDiv);
  }
  

}


function createProject2() {
  const projectContainer = document.querySelector('.project-info-container2');
  const backgroundDiv = document.createElement('div');
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');
  const heading = document.createElement('h1');
  const projectImage = document.createElement('img');
  const description = document.createElement('p');
  const technologies = document.createElement('ul');
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  
  
  heading.innerHTML = details[0].project1.name;
  projectImage.src = details[0].project1.featuredImage;
  description.innerHTML = details[0].project1.description;
  closeIcon.src = '/assets/images/Icon.png';
  list1.innerHTML = details[0].project1.technologies[0];
  list2.innerHTML = details[0].project1.technologies[1];
  list3.innerHTML = details[0].project1.technologies[2];
  link1.innerHTML = details[0].project1.btn1Name;
  link1.href = details[0].project1.liveVersion;
  link2.innerHTML = details[0].project1.btn2Name;
  link2.href = details[0].project1.source;
  
  
  container.className = 'project-container';
  closeIcon.className = 'close-button';
  heading.className = 'heading';
  description.className = 'description';
  technologies.className = 'list';
  link1.className = "links";
  link2.className = "links";
  backgroundDiv.className = "background-div";
  
  body.classList.add('noScroll');
  
closeIcon.addEventListener('click', () => {
  container.classList.toggle('hidden');
  body.classList.remove('noScroll');
  backgroundDiv.classList.toggle('hidden');
})
  
  technologies.appendChild(list1);
  technologies.appendChild(list2);
  technologies.appendChild(list3);
  
  container.appendChild(closeIcon);
  container.appendChild(heading);
  container.appendChild(projectImage);
  container.appendChild(description);
  container.appendChild(technologies);
  container.appendChild(link1);
  container.appendChild(link2);

  backgroundDiv.appendChild(container)
  projectContainer.appendChild(backgroundDiv);

}

function createProject3() {
  const projectContainer = document.querySelector('.project-info-container3');
  const backgroundDiv = document.createElement('div');
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');
  const heading = document.createElement('h1');
  const projectImage = document.createElement('img');
  const description = document.createElement('p');
  const technologies = document.createElement('ul');
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  
  
  heading.innerHTML = details[0].project1.name;
  projectImage.src = details[0].project1.featuredImage;
  description.innerHTML = details[0].project1.description;
  closeIcon.src = '/assets/images/Icon.png';
  list1.innerHTML = details[0].project1.technologies[0];
  list2.innerHTML = details[0].project1.technologies[1];
  list3.innerHTML = details[0].project1.technologies[2];
  link1.innerHTML = details[0].project1.btn1Name;
  link1.href = details[0].project1.liveVersion;
  link2.innerHTML = details[0].project1.btn2Name;
  link2.href = details[0].project1.source;
  
  
  container.className = 'project-container';
  closeIcon.className = 'close-button';
  heading.className = 'heading';
  description.className = 'description';
  technologies.className = 'list';
  link1.className = "links";
  link2.className = "links";
  backgroundDiv.className = "background-div";
  
  body.classList.add('noScroll');
  
closeIcon.addEventListener('click', () => {
  container.classList.toggle('hidden');
  body.classList.remove('noScroll');
  backgroundDiv.classList.toggle('hidden');
})
  
  technologies.appendChild(list1);
  technologies.appendChild(list2);
  technologies.appendChild(list3);
  
  container.appendChild(closeIcon);
  container.appendChild(heading);
  container.appendChild(projectImage);
  container.appendChild(description);
  container.appendChild(technologies);
  container.appendChild(link1);
  container.appendChild(link2);

  backgroundDiv.appendChild(container)
  projectContainer.appendChild(backgroundDiv);

}

function createProject4() {
  const projectContainer = document.querySelector('.project-info-container4');
  const backgroundDiv = document.createElement('div');
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');
  const heading = document.createElement('h1');
  const projectImage = document.createElement('img');
  const description = document.createElement('p');
  const technologies = document.createElement('ul');
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  
  
  heading.innerHTML = details[0].project1.name;
  projectImage.src = details[0].project1.featuredImage;
  description.innerHTML = details[0].project1.description;
  closeIcon.src = '/assets/images/Icon.png';
  list1.innerHTML = details[0].project1.technologies[0];
  list2.innerHTML = details[0].project1.technologies[1];
  list3.innerHTML = details[0].project1.technologies[2];
  link1.innerHTML = details[0].project1.btn1Name;
  link1.href = details[0].project1.liveVersion;
  link2.innerHTML = details[0].project1.btn2Name;
  link2.href = details[0].project1.source;
  
  
  container.className = 'project-container';
  closeIcon.className = 'close-button';
  heading.className = 'heading';
  description.className = 'description';
  technologies.className = 'list';
  link1.className = "links";
  link2.className = "links";
  backgroundDiv.className = "background-div";
  
  body.classList.add('noScroll');
  
closeIcon.addEventListener('click', () => {
  container.classList.toggle('hidden');
  body.classList.remove('noScroll');
  backgroundDiv.classList.toggle('hidden');
})
  
  technologies.appendChild(list1);
  technologies.appendChild(list2);
  technologies.appendChild(list3);
  
  container.appendChild(closeIcon);
  container.appendChild(heading);
  container.appendChild(projectImage);
  container.appendChild(description);
  container.appendChild(technologies);
  container.appendChild(link1);
  container.appendChild(link2);

  backgroundDiv.appendChild(container)
  projectContainer.appendChild(backgroundDiv);

}

button1.addEventListener("click", createProject1);
button2.addEventListener('click', createProject2);
button3.addEventListener('click', createProject3);
button4.addEventListener('click', createProject4);







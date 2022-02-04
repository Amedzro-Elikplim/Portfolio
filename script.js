const barIcon = document.querySelector('.bar-icon');
const mobileMenuDropdown = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.menu-nav-links > li');
const body = document.querySelector('.main-body');
const closeIcon = document.querySelector('.dropdown-menu-icon');
const button1 = document.querySelector('.project-button1');
const button2 = document.querySelector('.project-button2');
const button3 = document.querySelector('.project-button3');
const button4 = document.querySelector('.project-button4');
const desktopProjectContainer = document.querySelector('.project');
const form = document.getElementById('form');

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

function submitForm(e) {
  const email = document.getElementById('email');
  const error = document.getElementById('error');
  error.className = 'error-message';
  const userEmail = email.value;

  if (userEmail !== userEmail.toLowerCase()) {
    error.innerHTML = 'Please let your email be in lower case only';
    e.preventDefault();
  } else {
    error.innerHTML = '';
  }
}

form.onsubmit = submitForm;

const details = [
  {
    name: 'Multi - Post Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel a ea sequi quidem culpa accusamus possimus, aliquid d nting and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since theelectus, id molestias consequatur',
    featuredImage: './assets/images/Snapshoot.svg',
    featuredImage2: './assets/images/desktop-image.svg',
    technology: ['Html/Css', 'Javascript', 'Ruby on rails'],
    liveVersion: 'https://amedzro-elikplim.github.io/Portfolio/',
    source: 'https://github.com/Amedzro-Elikplim/Portfolio',
    btn1Name: 'See live',
    btn2Name: 'See source',
  },
];

function heading() {
  const heading = document.createElement('h1');
  heading.innerHTML = details[0].name;
  heading.className = 'heading';

  return heading;
}

function description() {
  const description = document.createElement('p');
  description.innerHTML = details[0].description;
  description.className = 'description';

  return description;
}

function projectImage() {
  const projectImage = document.createElement('img');

  const source = (window.innerWidth < 700) ? details[0].featuredImage : details[0].featuredImage2;
  projectImage.src = source;
  projectImage.className = 'projectImage';

  return projectImage;
}

function liveLink() {
  const link1 = document.createElement('a');
  link1.innerHTML = details[0].btn1Name;
  link1.href = details[0].liveVersion;
  link1.className = 'links';

  return link1;
}

function sourceLink() {
  const link2 = document.createElement('a');
  link2.innerHTML = details[0].btn2Name;
  link2.href = details[0].source;
  link2.className = 'links';

  return link2;
}

function popup(name) {
  const projectContainer = document.querySelector(name);
  const backgroundDiv = document.createElement('div');
  const container = document.createElement('div');
  const closeIcon = document.createElement('img');
  const technology = document.createElement('ul');
  const buttonWrapper = document.createElement('div');

  buttonWrapper.className = 'button-wrapper';
  technology.className = 'list';

  container.className = 'project-container';
  backgroundDiv.className = 'background-div';
  closeIcon.src = '/assets/images/Icon.png';
  closeIcon.className = 'close-button';
  container.classList.add('visible');
  backgroundDiv.classList.add('scroll');

  heading();
  description();
  projectImage();

  const arr = details[0].technology;
  for (let i = 0; i < arr.length; i += 1) {
    const link = document.createElement('li');
    link.innerHTML = arr[i];
    technology.appendChild(link);
  }

  closeIcon.addEventListener('click', () => {
    container.classList.toggle('hidden');
    body.classList.remove('noScroll');
    backgroundDiv.classList.toggle('hidden');
  });

  buttonWrapper.append(liveLink(), sourceLink());
  container.append(closeIcon, heading(), projectImage(), description(), technology, buttonWrapper);
  backgroundDiv.appendChild(container);

  const attach = window.innerWidth < 567 ? projectContainer : desktopProjectContainer;
  attach.appendChild(backgroundDiv);
}

button1.addEventListener('click', () => popup('.project-info-container1'));
button2.addEventListener('click', () => popup('.project-info-container2'));
button3.addEventListener('click', () => popup('.project-info-container3'));
button4.addEventListener('click', () => popup('.project-info-container4'));

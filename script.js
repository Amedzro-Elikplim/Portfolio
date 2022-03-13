const barIcon = document.querySelector('.bar-icon');
const mobileMenuDropdown = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.menu-nav-links > li');
const body = document.querySelector('.main-body');
const closeIcon = document.querySelector('.dropdown-menu-icon');
const form = document.getElementById('form');
const email = document.getElementById('email');
const userName = document.getElementById('name');
const message = document.getElementById('textarea');

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

userName.onchange = function updateName() {
  const data = JSON.parse(window.localStorage.getItem('userData'));
  data.name = userName.value;
  window.localStorage.setItem('userData', JSON.stringify(data));
};
email.onchange = function updateEmail() {
  const data = JSON.parse(window.localStorage.getItem('userData'));
  data.email = email.value;
  window.localStorage.setItem('userData', JSON.stringify(data));
};
message.onchange = function updateMessage() {
  const data = JSON.parse(window.localStorage.getItem('userData'));
  data.message = message.value;
  window.localStorage.setItem('userData', JSON.stringify(data));
};

function saveData() {
  const data = {
    name: userName.value,
    email: email.value,
    message: message.value,
  };

  window.localStorage.setItem('userData', JSON.stringify(data));
}

function submitForm(e) {
  e.preventDefault();
  const error = document.getElementById('error');
  error.className = 'error-message';
  const userEmail = email.value;

  if (userEmail !== userEmail.toLowerCase()) {
    error.innerHTML = 'Please let your email be in lower case';
    e.preventDefault();
  } else {
    error.innerHTML = '';
  }

  saveData();
}

form.onsubmit = submitForm;

function getData() {
  const savedData = JSON.parse(window.localStorage.getItem('userData'));
  if (savedData !== null) {
    email.value = savedData.email;
    userName.value = savedData.name;
    message.value = savedData.message;
  }
}

getData();

const details = [
  {
    name: 'Minimalist',
    description: 'A simple Todo app to add list of books a user has read. It is implemented using HTML, CSS, Webpack, JavaScript and modular architecture. A todo is saved and displayed in Realtime. A todo can be removed from the list of to-dos. Data persistence is implemented using local Storage API.',
    featuredImage: './assets/images/minimalist-desktop.JPG',
    featuredImage2: './assets/images/minimalist-mobile.JPG',
    technology: ['Html', 'Css', 'Javascript', 'Webpack'],
    liveVersion: 'https://amedzro-elikplim.github.io/Minimalist/dist/',
    source: 'https://github.com/Amedzro-Elikplim/Minimalist',
    btn1Name: 'See live',
    btn2Name: 'See source',
  },
  {
    name: 'Terappy',
    description: 'Terappy is a platform where individuals with mental health issues can easily find therapist and other mental health professional. The user can find and book appointments with therapists, and also choose the medium of communication (audio / video). Weekly progress of user is monitored',
    featuredImage: './assets/images/terappy-desktop.JPG',
    featuredImage2: './assets/images/terappy-mobile.JPG',
    technology: ['React', 'Netlify', 'MongoDB', 'Node'],
    liveVersion: 'https://terappy.netlify.app/',
    source: 'https://github.com/Amedzro-Elikplim/Terappy-frontend/',
    btn1Name: 'See live',
    btn2Name: 'See source',
  },
  {
    name: 'Stock tracker',
    description: 'Stocker tracker is built as part of Meta and Andela initiative to train developers across africa.It is software used to keep track of stocks in the health sector(clinic, hospital) etc.The frontend is built using react and CORE UI template and hosted on netlify.The backend is built with node, graphql and hosted on heroku',
    featuredImage: './assets/images/tracker-desktop.JPG',
    featuredImage2: './assets/images/tracker-mobile.JPG',
    technology: ['React', 'Nodejs', 'Graphql', 'MongoDB'],
    liveVersion: 'https://stock-tracker01.netlify.app/#/',
    source: 'https://github.com/BuildForSDGCohort2/Team-235-Frontend',
    btn1Name: 'See live',
    btn2Name: 'See source',
  },
  {
    name: 'Hacfiery Developers Summit',
    description: 'This is a platform dedicated to Hackfiery Developers Global Summit 2022. It showcase the speakers, previous conferences and their respective locations',
    featuredImage: './assets/images/hackfiery-desktop.JPG',
    featuredImage2: './assets/images/hackfiery-mobile.JPG',
    technology: ['Html', 'CSS', 'Javascript', 'Boostrap'],
    liveVersion: 'https://amedzro-elikplim.github.io/Portfolio/',
    source: 'https://github.com/Amedzro-Elikplim/Portfolio',
    btn1Name: 'See live',
    btn2Name: 'See source',
  },
];

const workSection = document.querySelector('.work-section');
const arrClassName = ['project', 'project-reverse project', 'project', 'project-reverse1 project'];
const arrInfo = [
  'project-info-container1',
  'project-info-container2',
  'project-info-container3',
  'project-info-container4',
];

const popInfo = [
  'project-info-container1',
  'project-info-container2',
  'project-info-container3',
  'project-info-container4',
];

function heading(name) {
  const heading = document.createElement('h1');
  heading.innerHTML = name;
  heading.className = 'heading';

  return heading;
}

function description(descrip) {
  const description = document.createElement('p');
  description.innerHTML = descrip;
  description.className = 'description';

  return description;
}

function projectImage(image, image2) {
  const projectImage = document.createElement('img');
  const source = (window.innerWidth < 700) ? image2 : image;
  projectImage.src = source;
  projectImage.className = 'projectImage';

  return projectImage;
}

function liveLink(liveVersion) {
  const link1 = document.createElement('a');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  link1.append(div1, div2);
  div1.innerHTML = details[0].btn1Name;
  div2.innerHTML = '<i class="fas fa-external-link-alt"></i>';
  link1.href = liveVersion;
  link1.className = 'links';

  return link1;
}

function sourceLink(source) {
  const link2 = document.createElement('a');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div1.innerHTML = details[0].btn2Name;
  div2.innerHTML = '<i class="fab fa-github"></i>';
  link2.href = source;
  link2.append(div1, div2);
  link2.className = 'links';

  return link2;
}

function popup(name, descrip, image, image2, projectName, liveVersion, source) {
  const desktopProjectContainer = document.querySelector('.project');
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

  heading(projectName);
  description(descrip);
  projectImage(image, image2);

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

  buttonWrapper.append(liveLink(liveVersion), sourceLink(source));
  container
    .append(closeIcon,
      heading(projectName),
      projectImage(image, image2), description(descrip), technology, buttonWrapper);
  backgroundDiv.appendChild(container);

  const attach = window.innerWidth < 567 ? projectContainer : desktopProjectContainer;
  attach.appendChild(backgroundDiv);
}

function projectTemplate(className, infoContainer, popInfo,
  description, name, image, image2, liveVersion, source, tech1, tech2, tech3, tech4) {
  const project = `
    <div class=${className}>
        <div class="project-image-container">
          <img
            src= ${image}
            alt="project image"
            class="project-image"
          />
        </div>

        <div>
          <div class=${infoContainer}>
            <h2 class="project-name">${name}</h2>
            <p class="project-description">
              ${description}
            </p>
          </div>
            <button onclick="popup('.${popInfo}', '${description}', '${image}', '${image2}', '${name}', '${liveVersion}', '${source}')" class="project-button project-button1">See project</button>
          <div class="technologies">
            <ul>
              <li>${tech1}</li>
              <li>${tech2}</li>
              <li>${tech3}</li>
              <li>${tech4}</li>
            </ul>
          </div>
        </div>
      </div>
  `;

  return project;
}

for (let i = 0; i < details.length; i += 1) {
  workSection.innerHTML += projectTemplate(
    arrClassName[i],
    arrInfo[i],
    popInfo[i],
    details[i].description,
    details[i].name,
    details[i].featuredImage,
    details[i].featuredImage2,
    details[i].liveVersion,
    details[i].source,
    details[i].technology[0],
    details[i].technology[1],
    details[i].technology[2],
    details[i].technology[3],
  );
}

const mobile = 'small';
if (mobile === 'large') {
  popup();
}

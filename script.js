const barIcon = document.querySelector('.bar-icon');
const mobileMenuDropdown = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.menu-nav-links > li');
const body = document.querySelector('.main-body');
const closeIcon = document.querySelector('.dropdown-menu-icon');

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

function projectTemplate(className, infoContainer) {
  const project = `
    <div class=${className}>
        <div class="project-image-container">
          <img
            src="./assets/images/art.png"
            alt="project image"
            class="project-image"
          />
        </div>

        <div>
          <div class=${infoContainer}>
            <h2 class="project-name">Multi-Post Stories</h2>
            <p class="project-description">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.
            </p>
          </div>
            <button onclick="popup('.project-info-container1')" class="project-button project-button1"> </button>
          <div class="technologies">
            <ul>
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
              <li>ruby</li>
            </ul>
          </div>

          
        </div>
      </div>

  `;

  return project;
}

// function dosomething() {
//   console.log("hello");
// }

const workSection = document.querySelector('.work-section');
const arrClassName = ['project', 'project-reverse project', 'project', 'project-reverse1 project'];
const arrInfo = [
  'project-info-container1',
  'project-info-container2',
  'project-info-container3',
  'project-info-container4',
];

const arrButton = [
  'project-button project-button1',
  'project-button project-button2',
  'project-button project-button3',
  'project-button project-button4',
];

const buttonID = ['button1', 'button2', 'button3', 'button4'];

for (let i = 0; i < 4; i += 1) {
  workSection.innerHTML += projectTemplate(arrClassName[i], arrInfo[i]);
}

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
// button2.addEventListener('click', () => popup('.project-info-container2'));
// button3.addEventListener('click', () => popup('.project-info-container3'));
// button4.addEventListener('click', () => popup('.project-info-container4'));

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navOne = document.querySelector('nav a');
const navTwo = navOne.nextElementSibling;
const navThree = navTwo.nextElementSibling;
const navFour = navThree.nextElementSibling;
const navFive = navFour.nextElementSibling;
const navSix = navFive.nextElementSibling;

const cta = document.querySelector('.cta-text h1');
const ctaButton = cta.nextElementSibling;

const headers = document.querySelectorAll('.text-content');
const headersArray = Array.from(headers);
const headerOne = headersArray[0].querySelector('h4');
const headerTwo = headersArray[1].querySelector('h4');
const headerThree = headersArray[2].querySelector('h4');
const headerFour = headersArray[3].querySelector('h4');
const headerFive = headersArray[4].querySelector('h4');

const textOne = headerOne.nextElementSibling;
const textTwo = headerTwo.nextElementSibling;
const textThree = headerThree.nextElementSibling;
const textFour = headerFour.nextElementSibling;
const textFive = headerFive.nextElementSibling;

const contactHeader = document.querySelector('.contact h4');
const contactLineOne = contactHeader.nextElementSibling;
const contactLineTwo = contactLineOne.nextElementSibling;
const contactLineThree = contactLineTwo.nextElementSibling;

const footer = document.querySelector('footer a');

const images = document.querySelectorAll('img');
const imagesArray = Array.from(images);

const imageOne = imagesArray[0];
const imageTwo = imagesArray[1];
const imageThree = imagesArray[2];

navOne.textContent = siteContent['nav']['nav-item-1'];
navTwo.textContent = siteContent['nav']['nav-item-2'];
navThree.textContent = siteContent['nav']['nav-item-3'];
navFour.textContent = siteContent['nav']['nav-item-4'];
navFive.textContent = siteContent['nav']['nav-item-5'];
navSix.textContent = siteContent['nav']['nav-item-6'];

headerOne.textContent = siteContent["main-content"]['features-h4'];
headerTwo.textContent = siteContent["main-content"]['about-h4'];
headerThree.textContent = siteContent["main-content"]['services-h4'];
headerFour.textContent = siteContent["main-content"]['product-h4'];
headerFive.textContent = siteContent["main-content"]['vision-h4'];

textOne.textContent = siteContent['main-content']['features-content'];
textTwo.textContent = siteContent['main-content']['about-content'];
textThree.textContent = siteContent['main-content']['services-content'];
textFour.textContent = siteContent['main-content']['product-content'];
textFive.textContent = siteContent['main-content']['vision-content'];

cta.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];

contactHeader.textContent = siteContent['contact']['contact-h4'];
contactLineOne.textContent = siteContent['contact']['address'];
contactLineTwo.textContent = siteContent['contact']['phone'];
contactLineThree.textContent = siteContent['contact']['email'];

footer.textContent = siteContent['footer']['copyright'];

imageOne.src = siteContent['images']['logo-img'];
imageTwo.src = siteContent['images']['cta-img'];
imageThree.src = siteContent['images']['logo-img'];
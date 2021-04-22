const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//----------------Вариант 1--------------------------------------------//
// const imagesContainer = document.querySelector('#gallery');
// console.log(imagesContainer);

// const makeImagesMarkup = options => {
//   return options.map(option => {
//     const liEl = document.createElement('li');
//     liEl.classList.add('item');

//     const imageEl = document.createElement('img');
//     imageEl.src = option.url;
//     imageEl.alt = option.alt;
//     imageEl.setAttribute('display', 'block');

//     liEl.append(imageEl);
//     return liEl;
//   });
// };
// const elements = makeImagesMarkup(images);
// imagesContainer.append(...elements);
//--------------------Вариант 2 -------------------------------------//
const imagesContainer = document.querySelector('#gallery');

console.log(imagesContainer);

const makeImagesMarkup = ({ url, alt }) =>
  `<li class="item"><img src="${url}" alt="${alt}" class="photo"></li>`;

const imagesMarkup = images.map(img => makeImagesMarkup(img)).join('');
console.log(imagesMarkup);

imagesContainer.insertAdjacentHTML('afterbegin', imagesMarkup);

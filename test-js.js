/// Слайдер

const sliderRow = document.querySelector(".slider__list");
const sliderItem = document.querySelectorAll(".slider__item");
const computedStyles = window.getComputedStyle(sliderRow);
const sliderNext = document.querySelector("#right");
const sliderPrev = document.querySelector("#left");

let offset = 0;
const itemWidth = getComputedStyle(sliderItem[0]).width;
const step = parseInt(itemWidth);
const preShownIems = 300 / step;
const minRight = 0;
const maxRight = (sliderItem.length - 3) * step;

sliderNext.addEventListener("click", function () {
  offset += 100;
  if (offset > maxRight) {
    offset = maxRight;
  }
  sliderRow.style.right = offset + "px";
});

sliderPrev.addEventListener("click", function () {
  offset -= 100;
  if (offset < minRight) {
    offset = minRight;
  }
  sliderRow.style.right = offset + "px";
});


const openModal = document.querySelector(".text")
openModal.addEventListener('click', function () {
    html

})






// /// Слайдер с зацикливанием

// const sliderRow = document.querySelector(".slider__list");
// const sliderNext = document.querySelector("#right");
// const sliderPrev = document.querySelector("#left");


// const loop = (direction, e) => {
//   e.preventDefault();

//   if (direction === "right") {
//     sliderRow.appendChild(sliderRow.firstElementChild);
//   } else {
//     sliderRow.insertBefore(sliderRow.lastElementChild, items.firstElementChild);
//   }
// };

// right.addEventListener("click", (e) => {
  //   loop("right", e);
  // });
  
  // left.addEventListener("click", (e) => {
    //   loop("left", e);
    // });
    
    
    
    
    
    /// Модальное окно

// const openButton = document.querySelector('#openOverlay');
// const body = document.body;
// const successModal = createModal('Message')                  // сообщение, которое будет в модалке
// openButton.addEventListener('click', e => {
//   body.appendChild(successModal);
// })
    
// function createModal(content) {
//   const overlayElement = document.createElement('div');
//   overlayElement.classList.add('overlay');

//   overlayElement.addEventListener('click', e => {
//     // if (!e.target.classList.contains('content')) {         /// закрыть по проверке класса
//     //   closeElement.click();
//     // }

//     if (e.target === overlayElement) {                        /// закрыть по объекту
//       closeElement.click();
//     }
//   })


//   const containerElement = document.createElement('div');
//   containerElement.classList.add('modal-container');
  
//   const contentElement = document.createElement('div');
//   contentElement.classList.add('content');
  
//   contentElement.innerHTML = content
  
  
//   const closeElement = document.createElement('a');
//   closeElement.classList.add('close');
//   closeElement.textContent = 'x';
//   closeElement.href = '#';

//   closeElement.addEventListener('click', e => {
//     e.preventDefault();
//     body.removeChild(overlayElement);
//   })

  
//   overlayElement.appendChild(containerElement);
//   containerElement.appendChild(contentElement);
//   containerElement.appendChild(closeElement);
//   body.appendChild(overlayElement);

//   return overlayElement;
// }




//// Модальное окно через шаблон
const openButton = document.querySelector('#openOverlay');
const successModal = createModal('Message')  
const body = document.body;

openButton.addEventListener('click', e => {
  body.appendChild(successModal);
})
    
function createModal(content) {
 const overlayElement = document.createElement('div');
 overlayElement.classList.add('overlay');

 const template = document.querySelector('#overlayTemplate');

 overlayElement.innerHTML = template.innerHTML;
 overlayElement.addEventListener('click', e => {
   if (e.target === overlayElement) {
     closeElement.click();
   }
 })

 const closeElement = overlayElement.querySelector('.close');
 closeElement.addEventListener('click', e => {
   e.preventDefault();
   body.removeChild(overlayElement);
 })

 const contentElement = overlayElement.querySelector('.content');
 contentElement.innerHTML = content;

 return overlayElement;
}




/// Блоки

const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = (quantity) => {
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }

  return markup;
};

quantitySelector.addEventListener("change", (e) => {
  const quantity = e.target.value;
  const markup = createMarkup(quantity);

  blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

let changed = false;


colorSelector.addEventListener('change', (e) => {
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll('.item');

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;
    let colorToApply = "";

    if (changed) {
      colorToApply = blockNumber % 2 !== 0 
      ? color 
      : "#fff";
    } else {
      colorToApply = blockNumber % 2 === 0  
      ? color 
      : "#fff";
      }
      colorTheBlock(currentBlock, colorToApply);
    } 
})




////      Фильтрация строки
console.log('Фильтрация строки');

const string = "Привет! Как дела?";
const vowels = ["а", "о", "е", "ё", "и", "ю", "я", "у", "ы", "э"];

const getVowels = stringToFilter => {

  let extractedVowels = '';

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  
  return extractedVowels;
}

console.log(getVowels(string));






///       Выборка объекта
console.log('Выборка объекта');

const workers = [
  {name: 'John', salary:500},
  {name: 'Jane', salary:1800},
  {name: 'Jack', salary:1300},
];

const getWorthyWorkers = workersArr => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
   };
  });
  return worthyWorkers;
};

console.log(getWorthyWorkers(workers));





/// Анализ строки
console.log('Анализ строки');

const path = "/users/index.html"

const isHtml = path => {
  const requiredExt= ".html";
  const pathExt = path.slice(-5);

  return pathExt === requiredExt  
}

console.log(isHtml(path));





/// Фильтрация массива
console.log('Фильтрация массива');

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return num % 2 === 0
}

const filterArray = (arrayToFilter, filterFn) => {
  const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })


  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));





/// 
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// const cross = [
//     [1, 5, 9],
//     [7, 5, 3],
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]

// for(let k = 0; k < cross.length; k++){
//     cross[k].every ((item) => {
//         return console.log('X yutdi')
//     })
// }


const btnBox = document.querySelector('#btnBox');
const elReult = document.querySelector('.result');

const buttonTemplate = document.querySelector('#button-template').content;

const game = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

let isValue = 'x';

function addListener() {
  const allBtns = document.querySelectorAll('.buttons');
  allBtns.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const elButton = evt.currentTarget;
      let data = elButton.dataset.id.split('/');

      game[data[0]][data[1]] = isValue;
      if (isValue === 'x') {
        isValue = 'o';
      } else {
        isValue = 'x';
      }
      renderBtn();
    });
  });
}

function renderBtn() {
  btnBox.innerHTML = null;
  game.forEach((item, i) => {
    item.forEach((row, j) => {
      let button = buttonTemplate.cloneNode(true);
      let box = document.createElement('div');
      box.className = 'innerBox';

      button.querySelector('.buttons').dataset.id = i + '/' + j;
      if (row !== 1) {
        button.querySelector('.buttons').classList.add('btnActive');
        button.querySelector('.icons').innerHTML = row;
        button.querySelector('.buttons').disabled = true;
      } else {
        button.querySelector('.icons').innerHTML = isValue;
      }

      box.appendChild(button);
      btnBox.appendChild(box);
    });
  });
  addListener();
}

addListener();
renderBtn();


const game = [{
        id: 1,
        tanlov: true
    },
    {
        id: 2,
        tanlov: true
    },
    {
        id: 3,
        tanlov: true
    },
    {
        id: 4,
        tanlov: true
    },
    {
        id: 5,
        tanlov: true
    },
    {
        id: 6,
        tanlov: true
    },
    {
        id: 7,
        tanlov: true
    },
    {
        id: 8,
        tanlov: true
    },
    {
        id: 9,
        tanlov: true
    }
]




const btnBox = document.querySelector('#btnBox');
const elReult = document.querySelector('.result');

game.forEach(item => {
    let box = document.createElement('div');
    box.className = "innerBox";
    box.innerHTML = `
    <button class="buttons" onclick = "addStart(${item.id})">
    <p class = "icons">X</p>
    </button>
    `
    btnBox.appendChild(box);
});

    let resultBox = document.createElement('div');
    resultBox.className = "result-box";
    resultBox.innerHTML = `
        <button class="Xbutton">X yutdi</button>
        <button class="Obutton">O yutdi</button>
        <button class="playButton">Qayta o'ynash</button>
    `
    elReult.appendChild(resultBox);

// oxirgi natijani chiqaruvchi buttonlar

let Xbutton = document.querySelector('.Xbutton');
let Obutton = document.querySelector('.Obutton');
let playButton = document.querySelector('.playButton');

Xbutton.style.display = 'none';
Obutton.style.display = 'none';
playButton.style.display = 'none';

// umumiy buttonlar 

let elBtns = document.querySelectorAll('.buttons');
let bxIcons = document.querySelectorAll('.icons');

// tekshirish uchun matritsa

let cross = [
    [1, 5, 9],
    [7, 5, 3],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

// BU ASOSIY FUNKSIYA ?? YUQORIDAGI BUTTONLARDAN ID OLIB KELADIGAN

let count = 0;
let xId = [];
let oId = [];
function addStart(id) {
    count++;
    for(let i = 0; i <= elBtns.length; i++) {
        if(i == id) {
            if(count == 1) {
                elBtns[i-1].className = 'btnActive';
                bxIcons[i - 1].textContent = 'X'
                bxIcons[i - 1].className = 'icons2'
                if(bxIcons[i-1].textContent == 'X'){
                    xId.push(id);
                    // console.log(xId);
                    for(let k = 0; k < cross.length; k++){
                        if(cross[k] == xId) {
                            console.log('X yutdi');
                        }
                    }
                }

            } else if(count == 2) {
                elBtns[i-1].className = 'btnNull';
                bxIcons[i - 1].textContent = 'O'
                bxIcons[i - 1].className = 'icons2'
                count -= 2;
                if(bxIcons[i-1].textContent == 'O'){
                    oId.push(id);
                    // console.log(oId);
                    for(let k = 0; k < cross.length; k++){
                        if(cross[k] == oId) {
                            console.log('O yutdi');
                        }
                    }
                }
            }
        }
    }
}





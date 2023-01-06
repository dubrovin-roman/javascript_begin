'use strict';
/*
17.11 Упражнение - сохранение JSON
*/

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}

    const textObj = {
        id: 1,
        text: input
    };
    const textJSON = JSON.stringify(textObj);
    localStorage.setItem('text', textJSON);
    console.log(localStorage.getItem('q'));
	
    document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	document.querySelector('.notification').classList.add('notification_active');
	/*
    document.querySelector('.notification').classList.remove('notification_hidden');
	console.log(document.querySelector('.notification').getAttribute('class'));
	document.querySelector('.notification').setAttribute('class', 'notification')
	document.querySelector('.notification').setAttribute('key', 1);
	document.querySelector('.notification').setAttribute('user-id', 1);
	console.log(Number(document.querySelector('.notification').getAttribute('user-id')));
    */
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm()
	}
}

const buttonClass = 'button';
const buttonText = 'Кнопка';

const newElement = document.createElement('div');

newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
newElement.innerHTML = `<button class="${buttonClass}">${buttonText}</button>`;

document.querySelector('.test').appendChild(newElement);
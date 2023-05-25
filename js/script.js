'use strict';

/*==================================== CHECKLIST ====================================*/

; (function () {

	let input = document.querySelector('.checklist__input');
	let list = document.querySelector('.checklist__list');

	input.addEventListener('keypress', function (e) {
		if (e.key == 'Enter' && input.value != '') {
			let li = document.createElement('li');
			li.classList.add('checklist__list-item');

			let p = document.createElement('p');
			p.classList.add('checklist__list-task');
			p.textContent = input.value;

			let removeBtn = document.createElement('button');
			removeBtn.classList.add('checklist__list-remove', 'checklist__button');
			removeBtn.textContent = 'remove';

			removeBtn.addEventListener('click', function () {
				li.remove();
			})

			let doneBtn = document.createElement('button');
			doneBtn.classList.add('checklist__list-done', 'checklist__button');
			doneBtn.textContent = 'done';

			doneBtn.addEventListener('click', function () {
				p.classList.add('checklist__list-task--done');
			})

			li.append(p, removeBtn, doneBtn);

			list.append(li);
			input.value = '';
		}
	})


})();

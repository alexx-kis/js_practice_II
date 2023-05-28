'use strict';
/*==================================== sticky header ====================================*/
/*==================================== sticky header ====================================*/

window.onscroll = function () { makeSticky() };

let header = document.querySelector('.header');
let main = document.querySelector('.main');
// let sticky = header.offsetTop;
function makeSticky() {
	if (window.pageYOffset > 110) {
		header.classList.add("header--sticky");
		main.classList.add('main--sticky');
	} else {
		header.classList.remove("header--sticky");
		main.classList.remove('main--sticky');
	}
}
/*==================================== CHECKLIST ====================================*/

; (function () {

	let input = document.querySelector('.checklist__input');
	let list = document.querySelector('.checklist__list');

	input.addEventListener('keypress', inputConfirm)

	function inputConfirm(e) {
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
				p.classList.toggle('checklist__list-task--done');
			})

			p.addEventListener('dblclick', function () {
				let edit = document.createElement('input');
				edit.classList.add('checklist__list-edit');
				edit.value = p.textContent;
				p.textContent = '';

				edit.addEventListener('keypress', function (e) {
					if (e.key == 'Enter') {
						p.textContent = edit.value;
						edit.remove();
					}
				})

				p.append(edit);
			})

			li.append(p, removeBtn, doneBtn);

			list.append(li);
			input.value = '';
		}
	}

})();


/*================================= PRODUCTS CALCULATOR =================================*/

; (function () {

	let addBtn = document.querySelector('.calc__form-button');
	let table = document.querySelector('.calc__table');

	let name = document.querySelector('.name');
	let price = document.querySelector('.price');
	let amount = document.querySelector('.amount');

	addBtn.addEventListener('click', function () {

		let tr = document.createElement('tr');
		tr.classList.add('calc__table-row');

		function createCell(tr, value, name) {
			if (value != '') {
				let td = document.createElement('td');
				td.classList.add('calc__table-cell', 'table__cell', name);
				td.textContent = value;
				tr.append(td);
				return td;
			}
		}
		allowEdit(createCell(tr, name.value, 'table__cell-name'));
		allowEdit(createCell(tr, price.value, 'table__cell-price'));
		allowEdit(createCell(tr, amount.value, 'table__cell-amount'));
		allowEdit(createCell(tr, price.value * amount.value, 'table__cell-sum'));
		let remove = createCell(tr, 'remove item', 'table__cell-remove');

		remove.addEventListener('click', function () {
			tr.remove();
			recountTotal();
		})

		table.append(tr);
		recountTotal();

		name.value = '';
		price.value = '';
		amount.value = '';
	})

	function recountTotal() {
		let sums = document.querySelectorAll('.table__cell-sum');
		let totalCost = document.querySelector('.calc__table-cost-output');

		let cost = 0;
		for (let sum of sums) {
			cost += +sum.textContent;
		}
		totalCost.textContent = cost;
	}

	function recountSum() {
		let sums = document.querySelectorAll('.table__cell-sum');
		let prices = document.querySelectorAll('.table__cell-price');
		let amounts = document.querySelectorAll('.table__cell-amount')
		for (let i = 0; i < sums.length; i++) {
			sums[i].textContent = +prices[i].textContent * +amounts[i].textContent;
		}

	}

	function allowEdit(td) {
		td.addEventListener('dblclick', function () {
			let input = document.createElement('input');
			input.classList.add('input');
			input.value = td.textContent;
			td.textContent = '';
			input.addEventListener('keypress', function (e) {
				if (e.key == 'Enter') {
					td.textContent = input.value;
					recountSum();
					recountTotal();
				}
			})
			input.addEventListener('blur', function (e) {
				td.textContent = input.value;
				recountSum();
				recountTotal();
			})
			td.append(input);
		})
	}
})();


/*==================================== SLIDERS ====================================*/

; (function () {
	let texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6'];
	let text = document.querySelector('.slider1__text');
	let timerId;


	let i = 0;
	text.textContent = texts[i];
	timerId = setInterval(function () {
		text.textContent = texts[i];
		i++;
		if (i > 5) {
			i = 0;
		}
	}, 1000)

})();

; (function () {
	let texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6'];
	let text = document.querySelector('.slider2__text');

	let prev = document.querySelector('.slider2__arrows-arrow--prev');
	let next = document.querySelector('.slider2__arrows-arrow--next');
	let i = 0;
	text.textContent = texts[0];
	prev.addEventListener('click', function () {
		--i;
		if (i < 0) {
			i = 5;
		}
		text.textContent = texts[i];
	})
	next.addEventListener('click', function () {
		++i;
		if (i > 5) {
			i = 0;
		}
		text.textContent = texts[i];
	})
})();

; (function () {
	let srcs = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpeg', './img/img4.jpeg'];
	let slideImg = document.querySelector('.slider3__slides img');
	let prev = document.querySelector('.slider3__arrows-arrow--prev');
	let next = document.querySelector('.slider3__arrows-arrow--next');
	let i = 0;

	slideImg.src = srcs[0];
	prev.addEventListener('click', function () {
		--i;
		if (i < 0) {
			i = 3;
		}
		slideImg.src = srcs[i];
		console.log(srcs[i]);
	})
	next.addEventListener('click', function () {
		++i;
		if (i > 3) {
			i = 0;
		}
		slideImg.src = srcs[i];
		console.log(srcs[i]);
	})
})();

; (function () {
	let prev = document.querySelector('.slider4__arrows-arrow--prev');
	let next = document.querySelector('.slider4__arrows-arrow--next');

	let slides = document.querySelectorAll('.slider4__slide');

	let i = 0;

	next.addEventListener('click', function () {
		i++;
		if (i <= 3) {
			slides[i-1].classList.remove('slider4__slide--active');
			slides[i].classList.add('slider4__slide--active');
		} else {
			i = 0;
			slides[i].classList.add('slider4__slide--active');
			slides[3].classList.remove('slider4__slide--active');
		}
	});
	prev.addEventListener('click', function () {
		i--;
		if (i >= 0) {
			slides[i+1].classList.remove('slider4__slide--active');
			slides[i].classList.add('slider4__slide--active');
		} else {
			i = 3;
			slides[i].classList.add('slider4__slide--active');
			slides[0].classList.remove('slider4__slide--active');
		}
	});

})();
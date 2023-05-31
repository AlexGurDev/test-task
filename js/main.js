const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__inner-wrapper');
const select = document.querySelector('.select-box__selected');
const selectList = document.querySelector('.select-box__list');
const slider = document.querySelector(".range-slider__input");
const output = document.querySelector(".range-slider__output-number");
navBtn.addEventListener('click', () => {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__inner-wrapper--mobile');
});
select.addEventListener('click', () => {
	selectList.classList.toggle('open');
	select.classList.toggle('select-box__selected--open');
});
output.innerHTML = slider.value;
slider.addEventListener('input', () => output.innerHTML = slider.value);
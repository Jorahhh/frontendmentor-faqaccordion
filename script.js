const accordionQuestions = document.querySelectorAll('.accordion-header');

accordionQuestions.forEach((q) => {
	q.addEventListener('click', () => {
		q.closest('.accordion')
			.querySelector('.accordion-body')
			.classList.toggle('show');

		q.querySelector('.accordion-icon').classList.toggle('rotate');
	});
});

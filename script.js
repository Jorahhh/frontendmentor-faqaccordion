const accordionQuestions = document.querySelectorAll('.accordion-header');
const accordionBodies = document.querySelectorAll('.accordion-body');
const accordionIcons = document.querySelectorAll('.accordion-icon');

accordionQuestions.forEach((q) => {
	q.addEventListener('click', () => {
		// Remove class from all accordions
		accordionBodies.forEach((b) => b.classList.remove('show'));
		accordionIcons.forEach((i) => i.classList.remove('rotate'));

		// Traverse DOM for adding classes to targeted accordion
		q.closest('.accordion')
			.querySelector('.accordion-body')
			.classList.add('show');
		q.querySelector('.accordion-icon').classList.add('rotate');
	});
});

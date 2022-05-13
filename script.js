const accordionQuestions = document.querySelectorAll('.accordion-header');

accordionQuestions.forEach((q) => {
	q.addEventListener('click', () => {
		// Active class will be set on the accordion itself
		const accordion = q.closest('.accordion');

		// Alternate opening accordions to prevent the card expanding too much
		if (accordion.classList.contains('active')) {
			accordion.classList.remove('active');
		} else {
			document.querySelector('.accordion.active')?.classList.remove('active');
			accordion.classList.add('active');
		}
	});
});

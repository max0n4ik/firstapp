const box = document.querySelector('.main_section')
const catalog = document.querySelector('.catalog')
const catalogElements = document.querySelectorAll('.catalog_element');
const cart = document.querySelectorAll('.market_card')
const pop = document.querySelector('.info_pop-up')

let timer;
let timer2;

box.addEventListener('mousemove', (e) => {
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	catalog.style.top = mouseY + "px";
	catalog.style.left = mouseX + "px";
	catalog.style.visibility = 'visible '
})

catalog.addEventListener('mouseleave', () => {
	catalog.style.visibility = 'hidden '
});

cart.forEach(x => {
	x.addEventListener('mouseover', (e) => {
		// Запускаем таймер на 5 секунд
		timer = setTimeout(() => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			pop.style.top = mouseY + "px";
			pop.style.left = mouseX + "px";
			pop.style.visibility = 'visible ' // Показываем window2
		}, 500);
	});
	x.addEventListener('mouseout', () => {
		// Очищаем таймер, если курсор покидает window1
		clearTimeout(timer);
		pop.style.visibility = 'hidden ' // Скрываем window2
	});
})



catalogElements.forEach(catalogElement => {
	const windowBlock = catalogElement.querySelector('.catalog.window');
	const hasAnotherDiv = catalogElement.querySelector('div') !== null;

	if (hasAnotherDiv) {
		const image = document.createElement('img');
		image.src = 'vec.svg';
		catalogElement.appendChild(image);
		catalogElement.style.cursor = 'pointer'
		catalogElement.addEventListener('mouseenter', () => {
			timer2 = setTimeout(() => {
				const mouseX2 = image.offsetLeft + image.clientWidth;
				const mouseY2 = image.offsetTop;
				windowBlock.style.top = mouseY2 + "px";
				windowBlock.style.left = mouseX2 + "px";
				windowBlock.style.visibility = 'visible';
			}, 300)
		});
		windowBlock.addEventListener('mouseleave', () => {
			windowBlock.style.visibility = 'hidden '
			clearTimeout(timer2);
		});
		catalog.addEventListener('mouseleave', () => {
			windowBlock.style.visibility = 'hidden '
			clearTimeout(timer2);
		});
		catalog.addEventListener('mouseout', () => {
			clearTimeout(timer2);
		});
		catalogElement.addEventListener('mouseleave', () => {
			windowBlock.style.visibility = 'hidden '
		});
	}
});
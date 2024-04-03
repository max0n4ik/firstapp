const box = document.querySelector('.main_section')
const catalog = document.querySelector('.catalog')
const imgList = document.querySelectorAll('.catalog_element > img')
const window1 = document.querySelector('.catalog.window')
const cart = document.querySelector('.market_card')
const pop = document.querySelector('.info_pop-up')
let timer;

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

imgList.forEach(img => {
	img.addEventListener('mouseenter', (e) => {
		const mouseX2 = img.offsetLeft + img.clientWidth;
		const mouseY2 = img.offsetTop;
		window1.style.top = mouseY2 + "px";
		window1.style.left = mouseX2 + "px";
		window1.style.visibility = 'visible';
	});
});

window1.addEventListener('mouseleave', () => {
	window1.style.visibility = 'hidden '

});

cart.addEventListener('mouseover', (e) => {
	// Запускаем таймер на 5 секунд
	timer = setTimeout(() => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		pop.style.top = mouseY + "px";
		pop.style.left = mouseX + "px";
		pop.style.visibility = 'visible ' // Показываем window2
	}, 1000);
});

cart.addEventListener('mouseout', () => {
	// Очищаем таймер, если курсор покидает window1
	clearTimeout(timer);
	pop.style.visibility = 'hidden ' // Скрываем window2
});
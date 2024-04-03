$(document).on('click', '.main_section', function (e) {
	$(cat)
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('click', function (e) {
			$(this).remove();
		});
}).on('click', function (e) {
	if ($(e.target).closest('.main_section').length === 0) {
		$('.catalog').remove();
	}
});


let cat = `<div class="catalog">
<div class="catalog_box">
	<div class="catalog_element">
		<p>Трубы</p>
	</div>
	<div class="catalog_element">
		<p>Желоба</p>
	</div>
	<div class="catalog_element">
		<p>Аэраторы</p>
	</div>
	<div class="catalog_element">
		<p>Снегозадержатели</p>
	</div>
	<div class="catalog_element">
		<p>Колпаки</p>
	</div>
	<div class="catalog_element">
		<p>Фартуки</p>
	</div>
	<div class="catalog_element">
		<p>Софиты</p>
	</div>
	<div class="catalog_element">
		<p>Металл</p>
	</div>
	<div class="catalog_element">
		<p>Крепеж и комплектующие</p>
	</div>
	<div class="catalog_element">
		<p>Реклама</p>
	</div>
	<div class="catalog_element">
		<p>Soffito</p>
	</div>
	<div class="catalog_element">
		<p>Шпили</p>
	</div>
	<div class="catalog_element">
		<p>Решетка вентиляционная</p>
	</div>
	<div class="catalog_element">
		<p>StopMoss</p>
	</div>
	<div class="catalog_element">
		<p>Сайдинг</p>
	</div>
	<div class="catalog_element">
		<p>Черепица</p>
	</div>
	<div class="catalog_element">
		<p>Модульные ограждения</p>
	</div>
	<div class="catalog_element">
		<p>Услуги</p>
	</div>
	<div class="catalog_element">
		<p>Черепица</p>
	</div>
</div>
</div>`
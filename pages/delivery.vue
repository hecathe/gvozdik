<template>
	<main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

		<the-section class="delivery">
			<container-narrow>
				<h1 class="h1">Доставка</h1>

				<ui-accordion-list :acc-list="acc_list"></ui-accordion-list>
			</container-narrow>
		</the-section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			breadcrumbs: [
				{
                    link: '/',
                    title: 'Главная',
                    active: false,
                },
                {
                    // link: '#',
                    title: 'Доставка',
                    active: true,
                },
			],
			acc_list: [
				{
					title: 'Стоимость доставки',
					text: '<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>'
				},
				{
					title: 'Время доставки',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. </p> <ul><li>Время на подъем не входит в интервал доставки</li><li>Время на подъем не входит в интервал доставки</li><li>Время на подъем не входит в интервал доставки</li></ul>'
				},
				{
					title: 'Правила доставки',
					text: '<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>'
				},
			]
		}
	},
}
</script>
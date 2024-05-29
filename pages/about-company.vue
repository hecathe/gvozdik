<template>
	<main class="main">
		<app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

		<the-section class="about-company">
			<container-narrow>
				<h1 class="h1">О компании</h1>

				<div class="about-company__social">
					<social-list :social-list="social" vertical blue></social-list>
				</div>

				<div class="about-company__content">
					<p>Имеется спорная точка зрения, гласящая примерно следующее: представители современных социальных резервов
					формируют глобальную экономическую сеть и при этом — представлены в исключительно положительном свете.
					Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей активности прекрасно
					подходит для реализации приоретизации разума над эмоциями. Разнообразный и богатый опыт говорит нам, что
					разбавленное изрядной долей эмпатии, рациональное мышление способствует повышению качества прогресса
					профессионального сообщества.</p>

					<p>И нет сомнений, что элементы политического процесса, которые представляют собой яркий пример
					континентально-европейского типа политической культуры, будут заблокированы в рамках своих собственных
					рациональных ограничений. Лишь представители современных социальных резервов смешаны с не уникальными
					данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Равным
					образом, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда
					внеочередных мероприятий с учётом комплекса форм воздействия. Прежде всего, граница обучения кадров
					однозначно определяет каждого участника как способного принимать собственные решения касаемо
					соответствующих условий активизации. В частности, существующая теория создаёт необходимость включения в
					производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над
					эмоциями.</p>
				</div>
			</container-narrow>
		</the-section>

		<advantages title="Наши преимущества" :advantages-list="advantages_list"></advantages>

		<advantages title="Наши партнеры" :advantages-list="partners"></advantages>

		<the-section class="news">
			<app-title link link-text="все новости" url="/news/">Новости</app-title>
			<div class="news__list">
				<ClientOnly >
					<swiper-container 
						:breakpoints="{
							0: {
								slidesPerView: 1.2,
							},
							767: {
								slidesPerView: 2,
							},
							1279: {
								slidesPerView: 3,
							},
						}"
						:space-between="40"
					>
						<swiper-slide v-for="(item, index) in news" :key="index">
							<news-list-card :news-card="item"></news-list-card>
						</swiper-slide>
					</swiper-container>
				</ClientOnly>
			</div>
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
					title: 'О компании',
					active: true,
				},
			],
			social: [
				{
					whatsapp: "#",
				},
				{
					telegram: "#",
				},
				{
					youtube: "#",
				},
				{
					vk: "#",
				},
			],
			advantages_list: [
				{
					title: '100+',
					text: '<p>создаёт необходимость включения в производственный план</p>'
				},
				{
					title: '100+',
					text: '<p>создаёт необходимость включения в производственный план</p>'
				},
				{
					title: '100+',
					text: '<p>создаёт необходимость включения в производственный план</p>'
				},
				{
					title: '100+',
					text: '<p>создаёт необходимость включения в производственный план</p>'
				},
				{
					title: '100+',
					text: '<p>создаёт необходимость включения в производственный план</p>'
				},
				{
					title: '100+',
					text: '<p>создаёт необходимость включения в производственный план</p>'
				},
			],
			partners: [
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
				{
					img: '/gvozdik/images/toolsss.jpg'
				},
			],
			news: [
                {
                    title: 'Заголовок новости 1',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-1/',
                    span: true,
                },
                {
                    title: 'Заголовок новости 2',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-2/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 3',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-3/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 4',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-4/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 5',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-5/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 6',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-6/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 7',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-7/',
                    span: true,
                },
            ]
		}
	},
}
</script>

<style lang="scss" scoped>
.about-company {
	&__social {
		position: absolute;
		top: 0;
        right: 0;
	}

	&__content {
		display: grid;
		row-gap: 28px;
	}
}

.news {
	&__title {
		margin-bottom: 40px;
	}
}
swiper-container::part(container) {
	overflow: visible;
}

.news-card {
	&:hover {
		transform: none
	}
}

@media screen and (max-width: 767px) {
	.about-company {
		&__social {
			position: static;
			margin-bottom: 24px;
		}
	}

	swiper-container::part(container) {
		overflow: hidden;
	}
}
</style>
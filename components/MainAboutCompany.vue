<template>
	<the-section class="about-company">
		<app-title url="/about-company/">О компании</app-title>

		<div class="about-company__content">
			<div class="about-company__text">
				<span class="grey">Цитата</span>

				<p>Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям. Сложно сказать, почему акционеры крупнейших компаний могут быть призваны к ответу. Прежде всего, повышение уровня гражданского сознания создаёт предпосылки для стандартных подходов.</p>

				<span>Alex Lee / <span class="grey">Основатель компании</span></span>
			</div>

			<div class="about-company__img">
				<img src="/images/tools-store.jpg" alt="">
			</div>
		</div>
	</the-section>
</template>

<style lang="scss" scoped>
.about-company {
	&__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		column-gap: 60px;
	}

	&__text {
		display: grid;
		row-gap: 28px;

		p {
			margin: 0;

			&:not(:last-of-type) {
				margin-bottom: 20px;
			}
		}
	}

	&__img {
		max-width: 590px;
		max-height: 500px;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}

@media screen and (max-width: 767px) {
	.about-company {
		&__content {
			grid-template-columns: 1fr;
			row-gap: 40px;
		}
	}
}
</style>
<template>
	<main class="main">
		<app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

		<the-section class="contacts">
			<h1 class="h1">Контакты</h1>

			<div class="contacts__map-wrap">
				<div class="contacts__map">
					<client-only>
						<YandexMap :coordinates="coordinates" :detailed-controls="detailedControls" :controls="controls"
							map-type="map" />
					</client-only>
				</div>

				<div class="contacts__sidebar">
					<div class="contacts__block">
						<h3 class="h3">Наш адрес</h3>
						<address class="contacts__link">г. Санкт-Петербург, Ул. Пушкина, д. 1</address>
					</div>
					<div class="contacts__block">
						<h3 class="h3">Call-центр</h3>
						<a class="contacts__link" href="tel:8 800 555 55 55">8 800 555 55 55</a>
					</div>
					<div class="contacts__block">
						<h3 class="h3">Электронная почта</h3>
						<a class="contacts__link" href="mailto:example@mail.com">example@mail.com</a>
					</div>
				</div>
			</div>
		</the-section>

		<the-section class="contacts-form">
			<h2 class="h2">Форма обратной связи</h2>

			<div class="contacts-form__wrap">
				<app-form>
					<ul class="form__list">
						<li class="form__item form__item_full">
							<ui-input type="text" label="ФИО" id="name" placeholder="Insert your name"></ui-input>
						</li>
						<li class="form__item">
							<ui-input type="tel" label="Номер телефона" id="tel" placeholder="+7 900 000 00 00"></ui-input>
						</li>
						<li class="form__item">
							<ui-input type="email" label="E-mail" id="email" placeholder="ivanov@ivan.com"></ui-input>
						</li>
						<li class="form__item form__item_full">
							<ui-textarea label="Комментарий" placeholder="Comment..."></ui-textarea>
						</li>
					</ul>
				</app-form>

				<div class="contacts-form__img">
					<img src="/images/tools-store.jpg" alt="">
				</div>
			</div>

			<p class="contacts-form__notice">Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям.</p>
		</the-section>
	</main>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps';
export default {
	data() {
		return {
			coordinates: [59.953424, 30.306071],
			controls: ['fullscreenControl'],
			detailedControls: {
				zoomControl: {
					position: { right: 10, top: 50 }
				}
			},
			breadcrumbs: [
				{
					link: '/',
					title: 'Главная',
					active: false,
				},
				{
					// link: '#',
					title: 'Контакты',
					active: true,
				},
			],
			form_fields: [
				{
					label: 'ФИО',
					id: 'fio',
					type: 'text',
					placeholder: 'Insert your name',
					full: true,
				},
				{
					label: 'Номер телефона',
					id: 'tel',
					type: 'tel',
					placeholder: '+7 900 000 00 00',
				},
				{
					label: 'E-mail',
					id: 'email',
					type: 'email',
					placeholder: 'ivanov@ivan.com',
				},
				{
					label: 'Комментарий',
					id: 'comment',
					name: 'comment',
					placeholder: 'Comment...',
					textarea: true,
					full: true,
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.contacts {
	&__map-wrap {
		position: relative;
		padding: 48px;
	}

	&__map {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 10px;
		overflow: hidden;

		.yandex-container {
			height: 100%;
		}
	}

	&__sidebar {
		position: relative;
		width: max-content;
		display: grid;
		row-gap: 40px;
		background-color: $white;
		box-shadow: 0 4px 20px rgba(40, 40, 40, 25%);
		border-radius: 10px;
		padding: 30px 20px;
		z-index: 1;
	}

	&__block {
		display: grid;
		row-gap: 20px;
	}

	&__link {
		font-style: normal;
		font-size: 20px;
		line-height: 120%;
		color: inherit;
		text-decoration: none;
		transition: color 150ms linear;

		&:hover:not(address) {
			color: $mainBlue;
		}
	}
}

.contacts-form {
	.h2 {
		margin-bottom: 40px;
	}

	&__wrap {
		display: flex;
		column-gap: 60px;
	}

	&__img {
		// max-height: 100%;
		position: relative;
		width: 100%;
		overflow: hidden;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__notice {
		margin-top: 60px;
	}
}

@media screen and (max-width: 767px) {
	.contacts {
		&__map-wrap {
			display: flex;
			flex-direction: column-reverse;
			row-gap: 28px;
			padding: 0;
		}

		&__map {
			position: static;
			height: 300px;
		}

		&__sidebar {
			width: 100%;
			row-gap: 24px;
		}

		&__link {
			font-size: 18px;
		}
	}

	.contacts-form {
		&__wrap {
			flex-direction: column;
			row-gap: 28px;
		}

		&__img {
			height: 350px;
		}
	}
}
</style>
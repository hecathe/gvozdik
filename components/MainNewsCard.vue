<template>
	<li class="main-news-card">
		<div class="main-news-card__img">
			<img :src="newsCard.image" alt="">
		</div>

		<div class="main-news-card__content">
			<h3 class="main-news-card__title">{{ newsCard.title }}</h3>
			<div v-html="newsCard.text" class="main-news-card__text"></div>
			<nuxt-link class="main-news-card__link" to="#">Подробнее</nuxt-link>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		newsCard: {
			type: Object,
			default: () => {},
		},
	}
}
</script>

<style lang="scss">
.main-news-card {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	column-gap: 60px;

	&:nth-child(2n) {
		direction: rtl;
	}

	&__img {
		height: 400px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__content {
		display: grid;
		row-gap: 40px;
	}

	&__title {
		font-size: 28px;
		line-height: 120%;
	}

	&__text {
		p {
			margin: 0;

			&:not(:last-of-type) {
				margin-bottom: 16px;
			}
		}
	}

	&__link {
		color: $mainBlue;

		&:hover {
			text-decoration: none;
		}
	}
}

@media screen and (max-width: 767px) {
	.main-news-card {
		grid-template-columns: 1fr;
		row-gap: 24px;

		&__content {
			row-gap: 20px;
		}

		&__img {
			height: 300px;
		}
	}
}
</style>
<template>
	<div v-if="newsCard.img_left" class="main-news-card">
		<div class="main-news-card__img">
			<img src="/images/work-tools.jpg" alt="">
		</div>

		<div class="main-news-card__content">
			<h3 class="main-news-card__title">{{ newsCard.title }}</h3>
			<div v-html="newsCard.text" class="main-news-card__text"></div>
			<nuxt-link class="main-news-card__link" to="#">Подробнее</nuxt-link>
		</div>
	</div>

	<div v-else class="main-news-card">
		<div class="main-news-card__content">
			<h3 class="main-news-card__title">{{ newsCard.title }}</h3>
			<div v-html="newsCard.text"  class="main-news-card__text"></div>
			<nuxt-link class="main-news-card__link" to="#">Подробнее</nuxt-link>
		</div>

		<div class="main-news-card__img">
			<img src="/images/work-tools.jpg" alt="">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		newsCard: {
			type: Object,
			default: () => {},
		},
		isImgLeft: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss">
.main-news-card {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	column-gap: 60px;

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
		justify-items: start;
		row-gap: 40px;
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
</style>
<template>
	<div class="reviews-card">
		<div class="reviews-card__top">
			<div>
				<div class="reviews-card__name">{{ reviewsCard.name }}</div>
				<div class="reviews-card__date">{{ reviewsCard.date }}</div>
			</div>

			<ul class="reviews-card__stars">
				<li class="reviews-card__star" v-for="(star, index) in 5" :key="index">
					<svg-icon name="star" width="20" height="20"></svg-icon>
				</li>
			</ul>
		</div>

		<div class="reviews-card__block">
			<h3>{{ reviewsCard.advantages.title }}</h3>
			<div v-html="reviewsCard.advantages.text"></div>
		</div>

		<div class="reviews-card__block">
			<h3>{{ reviewsCard.disadvantages.title }}</h3>
			<div v-html="reviewsCard.disadvantages.text"></div>
		</div>

		<div class="reviews-card__block">
			<h3>{{ reviewsCard.comment.title }}</h3>
			<div v-html="reviewsCard.comment.text"></div>
		</div>

		<div class="reviews-card__slider">
			<swiper-container class="reviews-card__container" slides-per-view="6">
				<swiper-slide class="reviews-card__slide-item" v-for="(image, index) in reviewsCard.images" :key="index">
					<div class="reviews-card__img">
						<img :src="image" alt="">
					</div>
				</swiper-slide>
			</swiper-container>
		</div>
		
	</div>
</template>

<script>
export default {
	props: {
		reviewsCard: {
			type: Object,
			default: () => {},
		}
	},
}
</script>

<style lang="scss" scoped>
.reviews-card {
	min-width: 0;
	min-height: 0;
	display: grid;
	row-gap: 20px;
	background-color: $white;
	box-shadow: 0 4px 20px rgba(40, 40, 40, 25%);
	border-radius: 10px;
	padding: 20px;

	&__top {
		display: flex;
		justify-content: space-between;
	}

	&__stars {
		display: flex;
		column-gap: 5px;
		@include reset-list;
	}

	&__slider {
		max-width: 100%;
	}

	&__img {
		max-width: 100px;
	}
}
</style>
<template>
	<div class="reviews-card">
		<div class="reviews-card__top">
			<div>
				<div class="reviews-card__name">{{ reviewsCard.name }}</div>
				<div class="reviews-card__date">{{ reviewsCard.date }}</div>
			</div>

			<ClientOnly >
				<star-rating
					:read-only="true"
					:increment="0.5" 
					:rating="4"
					:star-size="30"
					:show-rating="false"
					active-color="#FFB422"
				></star-rating>
			</ClientOnly>
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
			<ClientOnly>
				<swiper-container 
					class="reviews-card__container" 
					:space-between="20"
					:breakpoints="{
						0: {
							slidesPerView: 3,
						},
						500: {
							slidesPerView: 4,
						},
						1280: {
							slidesPerView: 6,
						},
					}"
					:navigation-prev-el="`.custom-prev-button-${reviewsCard.id}`"
					:navigation-next-el="`.custom-next-button-${reviewsCard.id}`"
				>
					<swiper-slide class="reviews-card__slide-item" v-for="(image, index) in reviewsCard.images"
						:key="index">
						<div class="reviews-card__img">
							<img :src="image" alt="">
						</div>
					</swiper-slide>
				</swiper-container>
			</ClientOnly>

			<div :class="`custom-button custom-prev-button custom-prev-button-${reviewsCard.id}`">
				<svg-icon name="arrow-left" width="24" height="24"></svg-icon>
			</div>
			<div :class="`custom-button custom-next-button custom-next-button-${reviewsCard.id}`">
				<svg-icon name="arrow-right" width="24" height="24"></svg-icon>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props: {
		reviewsCard: {
			type: Object,
			default: () => { },
		}
	},
	data() {
		return {
			id: this.reviewsCard.id,
		}
	},
}
</script>

<style lang="scss" scoped>
.reviews-card {
	display: grid;
	grid-template-columns: 100%;
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
		position: relative;
		max-height: 100px;
	}

	&__img {
		display: flex;

		img {
			width: 100%;
		}
	}
}

.custom-button {
	position: absolute;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	z-index: 1;
	cursor: pointer;

	&.swiper-button-disabled {
		opacity: 0;
	}

	svg {
		--currentColor: #{$white};
		z-index: 2;
	}

	&::before {
		position: absolute;
		content: '';
		top: 0;
		width: 150%;
		height: 100%;
		z-index: -1;
	}
}

.custom-prev-button {
	left: 24px;

	&::before {
		left: -24px;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent);
	}
}

.custom-next-button {
	right: 24px;

	&::before {
		right: -24px;
		background: linear-gradient(270deg, rgba(0, 0, 0, 0.5), transparent);
	}
}
</style>
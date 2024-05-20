<template>
	<li class="catalog-nav-item" :class="{'span-2': isSpan}">
		<nuxt-link :to="link" class="catalog-nav-item__link">
			<div class="catalog-nav-item__content">
				<h3>{{ title }}</h3>
				<svg-icon class="catalog-nav-item__icon" width="28" height="28" name="arrow-down-right"></svg-icon>
			</div>

			<div class="catalog-nav-item__background">
				<img class="catalog-nav-item__img" :src="imgUrl" alt="">
			</div>
		</nuxt-link>
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		imgUrl: {
			type: String,
			default: ''
		},
		isSpan : {
			type: Boolean,
			default: '',
		},
		link: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped>
.catalog-nav-item {
	&.span-2 {
		grid-column: span 2;
	}
	
	&__link {
		position: relative;
		display: grid;
		height: 300px;
		color: $mainBlack;
		text-decoration: none;
		padding: 28px;
		transition: all 150ms linear;
		overflow: hidden;

		&:hover {
			box-shadow: 0 4px 20px rgba(40, 40, 40, 25%);
			transform: scale(1.05);
			border-radius: 10px;
		}
	}

	&__content {
		display: grid;
		align-content: space-between;
	}

	&__icon {
		justify-self: flex-end;
	}

	&__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

@media screen and (max-width: 1279px) {
	.catalog-nav-item {
		&.span-2 {
			grid-column: 1 / -1;
		}
	}
}

@media screen and (max-width: 767px) {
	.catalog-nav-item {
		&.span-2 {
			grid-column: span 1;
		}
	}
}
</style>
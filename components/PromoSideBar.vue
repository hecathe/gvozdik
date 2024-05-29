<template>
	<div class="promo-side-bar">
		<div class="promo-side-bar__img">
			<img :src="img" alt="">
		</div>
		<div class="promo-side-bar__content">
			<h2 class="promo-side-bar__title">{{ title }}</h2>
			<div class="promo-side-bar__text" v-html="text"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: '#',
		},
		title: {
			type: String,
			default: 'Промо',
			required: true,
		},
		text: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped>
.promo-side-bar {
	position: relative;
	font-weight: 700;
	color: $white;
	padding: 40px 20px;

	&__img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: brightness(0.5);
		overflow: hidden;
		z-index: -1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__content {
		display: grid;
		row-gap: 20px;
	}

	&__title {
		font-size: 42px;
		text-transform: uppercase;
	}
}
</style>
<template>
	<li class="advantages-list-item">
		<h3 v-if="title" class="advantages-list-item__title">{{ title }}</h3>
		<div v-if="text" class="advantages-list-item__text" v-html="text"></div>
		<img v-if="img" :src="img" alt="">
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		img: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss" scoped>
.advantages-list-item {
	display: grid;
	row-gap: 8px;
	align-content: flex-end;

	&__title {
		font-size: 36px;
		line-height: 120%;
	}

	&__text {
		font-size: 14px;
		line-height: 120%;
	}
}
</style>
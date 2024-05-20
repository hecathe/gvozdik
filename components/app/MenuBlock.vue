<template>
	<div class="menu-block">
		<nuxt-link class="menu-block__title" :to="menuBlock.link">{{ menuBlock.title }}</nuxt-link>

		<ul class="menu-block__list">
			<li class="menu-block__list-item" v-for="(listItem, index) in menuBlock.list" :key="index">
				<nuxt-link class="menu-block__list-link" :to="listItem.link">{{ listItem.label }}</nuxt-link>
			</li>
		</ul>

		<ui-link :link="menuBlock.link"></ui-link>
	</div>
</template>

<script>
export default {
	props: {
		menuBlock: {
			type: Object,
			default: () => {},
		}
	}
}
</script>

<style lang="scss" scoped>
.menu-block {
	display: grid;
	row-gap: 16px;

	&__title {
		font-weight: 700;
		font-size: 20px;
		color: inherit;
		text-decoration: none;
		transition: color 150ms linear;

		&:hover {
			color: $mainBlue;
		}
	}

	&__list {
		display: grid;
		row-gap: 12px;
		@include reset-list;

		&-link {
			font-weight: 500;
			color: inherit;
			text-decoration: none;
			transition: color 150ms linear;

			&:hover {
				color: $mainBlue;
			}
		}
	}
}
</style>
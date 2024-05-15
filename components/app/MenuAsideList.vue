<template>
	<ul class="menu-aside-list">
		<li 
			class="menu-aside-list__item"
			v-for="(item, index) in asideList" 
			:key="index"
		>
			<nuxt-link 
				class="menu-aside-list__link"
				:to="item.link"
				@click="clickHandler"
			>
				<svg-icon 
					class="menu-aside-list__icon"
					:name="item.svg_name" 
					width="24" 
					height="24"
				></svg-icon>

				{{ item.title }}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
// изменить переменную isMenuOpen в прародителе Хэдэр
export default {
	props: {
		asideList: {
			type: Array,
			default: () => [],
		}
	},
	methods: {
		clickHandler() {
			this.$emit('toggle-menu');
		}
	},
}
</script>

<style lang="scss" scoped>
.menu-aside-list {
	display: grid;
	@include reset-list;

	&__link {
		display: flex;
		// align-items: center;
		column-gap: 8px;
		color: inherit;
		text-decoration: none;
		border-radius: 10px;
		padding: 12px 8px;
		transition: background 150ms linear;

		&:hover {
			// color: $mainBlue;
			background-color: $grey_m;
		}
	}
}
</style>
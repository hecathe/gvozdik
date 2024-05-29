<template>
	<ul class="sort">
		<li class="sort__item" v-for="(sortItem, index) in sort" :key="index">
			<button 
				class="sort__btn" 
				:class="{'sort__btn_active': checked === index}"
				@click="checked = index"
			>
				<span>{{ sortItem }}</span>
				<svg-icon :name="checked === index ? 'arrow-up' : 'arrow-down'" width="24" height="24"></svg-icon>
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {

	},
	data() {
		return {
			checked: 0,
			sort: [
				'По возрастанию цены',
				'По популярности',
				'По названию',
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.sort {
	position: absolute;
	top: -40px;
    right: 0;
	display: flex;
	align-items: center;
	column-gap: 18px;
	@include reset-list;
	overflow-x: auto;

	&__btn {
		display: flex;
		align-items: center;
		column-gap: 4px;
		text-transform: lowercase;
		// text-wrap: nowrap;
		white-space: nowrap;

		&_active {
			font-weight: 500;
			color: $mainBlue;

			svg {
				--currentColor: #{$mainBlue};
			}
		}
	}
}

@media screen and (max-width: 767px) {
	.sort {
		position: static;
		padding-bottom: 14px;
	}
}
</style>
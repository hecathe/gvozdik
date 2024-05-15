<template>
	<li class="accordion-list-item">
		<button @click="isOpen = !isOpen" class="accordion-list-item__btn">
			<span>{{ acc.title }}</span>
			<svg-icon :name="isOpen ? 'remove-minus' : 'add-plus'" width="24" height="24"></svg-icon>
		</button>

		<transition>
			<div v-if="isOpen" class="accordion-list-item__content">
				<div class="accordion-list-item__markup" v-html="acc.text"></div>
			</div>
		</transition>
	</li>
</template>

<script>
export default {
	props: {
		acc: {
			type: Object,
			default: () => {},
		}
	},

	data() {
		return {
			isOpen: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.accordion-list-item {
	&__btn {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		background-color: $grey_m;
		padding: 20px;

		svg {
			--currentColor: #{$mainOrange};
		}
	}

	&__content {
		padding: 20px;
	}

	&__markup {
		display: grid;
		row-gap: 12px;
	}
}
</style>
<template>
	<div class="number">
		<button @click="decrement" class="number__btn" aria-label="Уменьшить">
			<svg-icon width="24" height="24" name="remove-minus"></svg-icon>
		</button>

		<input v-model="value" class="number__input" type="number" step="1" min="1">

		<button @click="increment" class="number__btn" aria-label="Увеличить">
			<svg-icon width="24" height="24" name="add-plus"></svg-icon>
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 1,
		}
	},

	methods: {
		increment() {
			return this.value++;
		},
		decrement() {
			if (this.value < 1) {
				return this.value;
			}

			return this.value--;
		}
	},
}
</script>

<style lang="scss" scoped>
.number {
	// width: max-content;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	background-color: $grey_m;

	&__input {
		width: 52px;
		background-color: $grey_m;
		border: none;
	}

	&__btn {
		width: 52px;
		height: 52px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
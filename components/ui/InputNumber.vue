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
	width: 100%;
	height: 50px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	background-color: $grey_m;

	&__input {
		display: grid;
		max-width: 100%;
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: $grey_m;
		border: none;
		padding: 0;
		// transition: background 150ms linear;

		&:hover, &:focus {
			outline: none;
			background-color: $grey;
		}
	}

	&__btn {
		flex: 1;
		// width: 52px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;

		&:hover {
			background-color: $grey;
		}
	}
}
</style>
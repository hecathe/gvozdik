<template>
	<div class="input">
		<label :for="id" class="input__label">{{ label }}</label>
		<input 
			:type="type" 
			:id="id" 
			v-model="value" 
			:placeholder="placeholder" 
			class="input__field" 
		>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
	},

	 data() {
		return {
			value: ''
		}
	 },
}
</script>

<style lang="scss" scoped>
.input {
	$this: &;

	display: grid;
	row-gap: 8px;

	&__label {
		font-weight: 700;
		font-size: 14px;
		line-height: 120%;
	}

	&__field {
		background-color: $grey_m;
		border: none;
		border-radius: 10px;
		padding: 14px 16px;
		transition: background 150ms linear;

		&:focus , &:hover {
			outline: none;
			background-color: $grey;
		}
	}
}
</style>
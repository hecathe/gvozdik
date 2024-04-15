<template>
	<div class="radio">
		<input 
			class="radio__input visually-hidden" 
			type="radio" 
			:id="`radio-${id}`" 
			:name="name" 
			:value="value"
			:checked="checked" 
			v-model="modelChecked"
		>
		<label class="radio__label" :for="`radio-${id}`">{{ label }}</label>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: 'radio',
		},
		value: {
			type: [String, Number, Array],
			default: null,
		},
		checked: {
			type: Boolean,
			default: false,
		}
	},

	data() {
		return {
			modelChecked: this.checked,
		}
	},
}
</script>

<style lang="scss" scoped>
.radio {
	$this: &;

	&__label {
		position: relative;
		padding-left: 34px;
		cursor: pointer;

		&::before {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			width: 24px;
			height: 24px;
			background-color: $white;
			border: 1px solid $mainBlue;
			border-radius: 100%;
			box-sizing: border-box;
		}
	}

	&__input:checked + &__label::after {
		position: absolute;
		content: '';
		top: 4px;
		left: 4px;
		width: 16px;
		height: 16px;
		background-color: $mainBlue;
		border-radius: 100%;
	}
}
</style>
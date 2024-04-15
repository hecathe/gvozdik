<template>
	<div class="toggle">
		<input 
			class="toggle__input visually-hidden" 
			type="checkbox"
			:id="`toggle-${id}`"
			:name="name"
			:value="value"
			:checked="checked"
			v-model="modelChecked"
		>
		<label 
			class="toggle__label" 
			:for="`toggle-${id}`"
		>{{ label }}</label>
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
			default: '',
		},
		value: {
			type: [String, Boolean, Number],
			default: null,
		},
		checked: {
			type: Boolean,
			default: false,
		},
		checkbox: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.toggle {
	$this: &;

	&__label {
		position: relative;
		display: flex;
		// padding-left: 60px;
		cursor: pointer;

		&::before {
			position: relative;
			content: '';
			top: 0;
			left: 0;
			width: 48px;
			height: 28px;
			background-color: $white;
			border-radius: 100px;
		}

		&::after {
			position: absolute;
			content: '';
			top: 4px;
			left: 4px;
			width: 20px;
			height: 20px;
			background-color: $grey;
			border-radius: 100%;
			transition: left 150ms linear;
		}
	}

	&__input:checked + &__label::after {
		left: 24px;
		background-color: $mainBlue;
	}
}
</style>
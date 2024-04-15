<template>
	<div v-if="checkbox" class="checkbox">
		<input 
			class="checkbox__input visually-hidden" 
			type="checkbox"
			:id="`checkbox-${id}`"
			:name="name"
			:value="value"
			:checked="checked"
			v-model="modelChecked"
		>
		<label 
			class="checkbox__label" 
			:for="`checkbox-${id}`"
		>{{ label }}</label>
	</div>

	<div v-else class="checkbox-btn">
		<input
			class="checkbox-btn__input visually-hidden" 
			type="checkbox"
			:id="`checkbox-btn-${id}`"
			:name="name"
			:value="value"
			:checked="checked"
			v-model="modelChecked"
		>
		<label 
			class="checkbox-btn__label" 
			:for="`checkbox-btn-${id}`"
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

	data() {
		return {
			modelChecked: this.checked,
		}
	},
}
</script>

<style lang="scss" scoped>
.checkbox {
	$this: &;

	&__label {
		position: relative;
		display: flex;
		padding-left: 36px;
		cursor: pointer;

		&::before {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			width: 24px;
			height: 24px;
			background-color: $white;
		}
	}

	&__input:checked + &__label::after {
		position: absolute;
		content: "";
		top: 0px;
		left: 0px;
		width: 24px;
		height: 24px;
		background-image: url('assets/sprite/svg/check.svg');
	}
}

.checkbox-btn {
	$this: &;

	&__label {
		display: flex;
		border-radius: 10px;
		padding: 12px 14px;
		cursor: pointer;

		&:hover {
			background-color: $grey;
		}
	}

	&__input:checked + &__label {
		color: $white;
		background-color: $mainBlue;
	}
}
</style>
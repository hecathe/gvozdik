<template>
	<div class="textarea">
		<label class="textarea__label" :for="id">{{ label }}</label>
		<textarea 
			class="textarea__field" 
			:name="name" 
			:id="id" 
			:placeholder="placeholder"
			cols="10" 
			rows="5"
		></textarea>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: 'Комментарий...',
		},
	}
}
</script>

<style lang="scss" scoped>
.textarea {
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
		resize: vertical;

		&:focus , &:hover {
			outline: none;
			background-color: $grey;
		}
	}
}
</style>
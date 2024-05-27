<template>
	<div class="textarea">
		<label class="textarea__label">
			{{ label }}
			<textarea 
				class="textarea__field" 
				:name="name" 
				:id="id" 
				:placeholder="placeholder"
				cols="10" 
				rows="5"
			></textarea>
		</label>
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

	&__label {
		display: grid;
		row-gap: 8px;
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
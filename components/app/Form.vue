<template>
	<form class="form">
		<slot></slot>
		<!-- <ul class="form__list">
			<li 
				class="form__item" 
				:class="{'form__item_full': field.full}"
				v-for="(field, index) in formFields" 
				:key="index"
			>
				<ui-textarea
					v-if="field.textarea"
					:id="field.id"
					:label="field.label"
					:name="field.name"
					:placeholder="field.placeholder"
				></ui-textarea>
				<ui-input
					v-else
					:id="field.id" 
					:label="field.label" 
					:type="field.type" 
					:placeholder="field.placeholder"
				></ui-input>
			</li>
		</ul> -->

		<ui-button>{{ btnText }}</ui-button>
	</form>
</template>

<script>
export default {
	props: {
		formFields: {
			type: Array,
			default: () => [],
		},
		btnText: {
			type: String,
			default: 'Отправить',
		}
	}
}
</script>

<style lang="scss">
.form {
	display: flex;
	flex-direction: column;
	row-gap: 40px;

	&__list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		@include reset-list;
	}

	&__item {
		&_full {
			grid-column: 1 / -1;
		}
	}
}

@media screen and (max-width: 767px) {
	.form {
		row-gap: 24px;
		
		&__list {
			grid-template-columns: 1fr;
		}
	}
}
</style>
<template>
	<div class="modal" v-if="opened">
		<div class="modal__container">
			<h2 class="h2" v-if="title">{{ title }}</h2>

			<button 
				@click="closeModal"
				class="modal__close" 
				aria-label="Закрыть"
			>
				<svg-icon name="close" width="36" height="36"></svg-icon>
			</button>

			<slot></slot>
		</div>
		<div class="modal__back" @click="closeModal"></div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			opened: false,
		}
	},
	methods: {
		closeModal() {
			this.opened = false;
			document.body.style.overflow = '';
		}
	},
}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	overflow-y: auto;
	padding: 20px 0;

	&__container {
		position: relative;
		max-width: 662px;
		width: 100%;
		height: max-content;
		display: flex;
		flex-direction: column;
		row-gap: 28px;
		background-color: $white;
		border-radius: 10px;
		padding: 36px;
		margin: auto;
		// z-index: 1;
	}

	&__close {
		position: absolute;
		top: 16px;
		right: 16px;
	}

	&__back {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,20%);
		z-index: -1;
	}
}

@media screen and (max-width: 767px) {
	.modal {
		padding: 0;

		&__container {
			max-width: 100%;
			min-height: 100%;
			height: max-content;
			margin: 0;
			padding: 20px;
		}
	}
}
</style>
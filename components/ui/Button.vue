<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 10px;
	background-color: $mainBlue;
	padding: 16px 28px;

	svg {
		--currentColor: #{$white};
	}
}
</style>
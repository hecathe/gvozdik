<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<style lang="scss">
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 10px;
	font-weight: 500;
	color: $white;
	background-color: $mainBlue;
	padding: 16px 28px;
	transition: background 150ms linear;

	svg {
		--currentColor: #{$white};
	}

	&:hover {
		background-color: $darkBlue;
	}
}
</style>
<template>
	<button 
		class="btn"
		:class="{'btn_ghost': isGhost}"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		isGhost: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

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
	white-space: nowrap;

	svg {
		--currentColor: #{$white};
	}

	&:hover {
		background-color: $darkBlue;
	}

	&_ghost {
		color: $mainBlue;
		background: none;
		border: 1px solid $mainBlue;

		&:hover {
			background: none;
			color: $darkBlue;
			border-color: $darkBlue;
		}
	}
}
</style>
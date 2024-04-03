<template>
	<div class="search">
		<svg-icon class="search__icon" width="24" height="24" name="search"></svg-icon>
		<input class="search__input" placeholder="Поиск..." type="search" name="" id="">
	</div>
</template>

<style lang="scss" scoped>
.search {
	position: relative;

	&__input {
		font-size: 20px;
		line-height: 120%;
		background-color: $grey_m;
		border: none;
		border-radius: 10px;
		padding: 12px;
		padding-left: 48px;

		// &:focus {
		// 	&+svg {
		// 		display: none;
		// 	}
		// }
	}

	&__icon {
		position: absolute;
		top: 50%;
		left: 12px;
		transform: translateY(-50%);
	}
}
</style>
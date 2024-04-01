<template>
	<div class="search">
		<input class="search__input" placeholder="Поиск..." type="search" name="" id="">
		<svg-icon class="search__icon" width="24" height="24" name="search"></svg-icon>
	</div>
</template>

<style lang="scss" scoped>
.search {
	position: relative;

	&__input {
		font-size: 20px;
		line-height: 150%;
		background-color: $grey_m;
		border: none;
		border-radius: 10px;
		padding: 8px 12px;
	}

	&__icon {
		position: absolute;
		top: 50%;
		right: 12px;
		transform: translateY(-50%);
	}
}
</style>
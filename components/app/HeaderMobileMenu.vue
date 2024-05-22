<template>
	<div class="header-mobile-menu">
		<UiInputSearch></UiInputSearch>
		<AppHeaderUserActions :user-actions="userActions"></AppHeaderUserActions>

		<AppHeaderNav :nav-list="navList"></AppHeaderNav>
	</div>
</template>

<script>
export default {
	props: {
		userActions: {
			type: Array,
			default: () => [],
		},
		navList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.header-mobile-menu {
	position: absolute;
	width: 100%;
	left: 0;
	height: calc(100vh - 72px);
	background-color: $white;
	padding: 16px;
	z-index: 10;
}

.user-actions {
	padding: 8px 0;
}
</style>
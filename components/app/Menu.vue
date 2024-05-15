<template>
    <div class="menu">
        <div class="container">
			<div class="menu__wrap">
				<app-menu-aside-list :aside-list="asideMenu"></app-menu-aside-list>

				<div>
					<h2>Инструмент</h2>
					<ul>
						
					</ul>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        asideMenu: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: absolute;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: $white;
	z-index: 10;

	&__wrap {
		display: flex;
		column-gap: 60px;
		padding: 60px 0;
	}
}
</style>
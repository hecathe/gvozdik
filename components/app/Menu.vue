<template>
    <div class="menu">
        <div class="container">
			<div class="menu__wrap">
				<app-menu-aside-list :aside-list="catalogMenu" @checked-category="setActiveTab"></app-menu-aside-list>

				<div class="menu__main">
					<template
						v-for="(catalogMenuItem, index) in catalogMenu" 
						:key="index"
					>
						<div class="menu__content" v-if="catalogMenuItem.id === activeContent">
							<nuxt-link class="menu__title h2" :to="catalogMenuItem.link">{{ catalogMenuItem.title }}</nuxt-link>
							
							<div class="menu__blocks">
								<app-menu-block 
									v-for="(list, index) in catalogMenuItem.lists" 
									:key="index" 
									:menu-block="list"
								></app-menu-block>
							</div>
						</div>
						
					</template>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        catalogMenu: {
            type: Array,
            default: () => [],
        }
    },
	
	data() {
		return {
			activeContent: 1,
		}
	},
	methods: {
		setActiveTab(item) {
			this.activeContent = item;
		}
	},
}
</script>

<style lang="scss" scoped>
.menu {
    position: absolute;
	left: 0;
	width: 100%;
	height: calc(100vh - 180px);
	background-color: $white;
	overflow-y: scroll;
	z-index: 10;

	&__wrap {
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: start;
		column-gap: 60px;
		padding: 60px 0;
	}

	&__content {
		display: grid;
		row-gap: 28px;
	}

	&__title {
		font-weight: 700;
		color: inherit;
		text-decoration: none;
		transition: color 150ms linear;

		&:hover {
			color: $mainBlue;
		}
	}

	&__blocks {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 24px;
		row-gap: 40px;
	}

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background-color: #FAFAFA;
	}

	&::-webkit-scrollbar-thumb {
		background-color: $mainOrange;
		border-radius: 10px;
		border: 2px solid #FAFAFA;
	}
}
</style>
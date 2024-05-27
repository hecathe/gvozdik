<template>
	<div class="tabs">
		<ul class="tabs__list">
			<li class="tabs__item" v-for="tab in tabs" :key="tab.id">
				<button
					class="tabs__btn"
					:class="{active: activeTab === tab.id}"
					@click="activeTab = tab.id"
				>{{ tab.title }}</button>
			</li>
		</ul>

		<div class="tabs__body">
			<div 
				class="tabs__content" 
				v-for="tab in tabs" 
				:key="tab.id"
				v-show="activeTab === tab.id"
			>
				<div 
					v-if="tab.id == 1" 
					v-html="tab.content"
				></div>

				<div v-else-if="tab.id == 2" >
					<product-info-list :info-list="tab.content"></product-info-list>
				</div>

				<div 
					v-else-if="tab.id == 3"
				>
					<reviews-block :reviews-list="tab.content"></reviews-block>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductInfoList from '../ProductInfoList.vue'
export default {
  components: { ProductInfoList },
	props: {
		tabs: {
			type: Array,
			default: () => [],
		}
	},

	data() {
		return {
			activeTab: 1,
		}
	},
}
</script>

<style lang="scss" scoped>
.product-info-list {
	display: grid;
	grid-template-rows: repeat(6, max-content);
	grid-auto-flow: column;
	column-gap: 60px;
	padding: 0;
}

.tabs {
	display: grid;
	grid-template-columns: 100%;
	row-gap: 40px;

	&__list {
		display: flex;
		@include reset-list;
		border-bottom: 1px solid $darkBlue;
	}

	&__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 28px;

		&.active {
			border-bottom: 4px solid $mainBlue;
		}
	}
}

@media screen and (max-width: 767px) {
	.tabs {
		&__list {
			overflow-x: auto;
		}

		&__btn {
			padding: 20px;
		}
	}

	.product-info-list {
		grid-auto-flow: row;
	}
}
</style>
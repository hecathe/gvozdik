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
					<product-info-list 
						:info-list="tab.content"
					></product-info-list>
				</div>

				<div 
					class="tabs__reviews"
					v-else-if="tab.id == 3"
				>
					<reviews-list :reviews-list="tab.content"></reviews-list>
					<div class="tabs__reviews-btns">
						<ui-button>Оставить отзыв</ui-button>
						<ui-button is-ghost>Задать вопрос</ui-button>
					</div>
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
}

.tabs {
	display: grid;
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

	&__reviews {
		min-width: 0;
		min-height: 0;
		display: grid;
		grid-template-columns: minmax(auto, 700px) 1fr;
		column-gap: 100px;
	}

	&__reviews-btns {
		flex: 1;
		display: grid;
		align-content: flex-start;
		row-gap: 20px;
	}
}
</style>
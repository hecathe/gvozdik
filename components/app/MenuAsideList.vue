<template>
	<ul class="menu-aside-list">
		<li 
			class="menu-aside-list__item"
			v-for="(item, index) in asideList" 
			:key="index"
		>
			<button 
				class="menu-aside-list__link"
				:class="{active: activeTab === item.id}"
				@click="selectCategory(item)"
			>
				<svg-icon 
					class="menu-aside-list__icon"
					:name="item.svg_name" 
					width="24" 
					height="24"
				></svg-icon>

				{{ item.title }}
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		asideList: {
			type: Array,
			default: () => [],
		}
	},
	emits: ['checked-category'],
	data() {
		return {
			activeTab: 1,
		}
	},
	// watch: {
	// 	'activeTab': function(newActiveTab) {
	// 		this.activeTab = newActiveTab;
	// 	}
	// },
	beforeMount() {
		this.selectCategory;
	},
	methods: {
		selectCategory(item) {
			this.activeTab = item.id;
			this.$emit('checked-category', item.id);
		}
	},
}
</script>

<style lang="scss" scoped>
.menu-aside-list {
	position: sticky;
	top: 20px;
	display: grid;
	row-gap: 4px;
	@include reset-list;

	&__link {
		width: 100%;
		display: flex;
		// align-items: center;
		column-gap: 8px;
		color: inherit;
		text-decoration: none;
		border-radius: 10px;
		padding: 12px 8px;
		transition: background 150ms linear;

		&:hover {
			// color: $mainBlue;
			background-color: $grey_m;
		}

		&.active {
			color: $white;
			background-color: $mainBlue;

			svg {
				--currentColor: #{$white};
			}
		}
	}
}
</style>
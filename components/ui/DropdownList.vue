<template>
	<div v-if="isToggle" class="drop-down drop-down_toggle">
		<button
		class="drop-down__btn"
		@click="isOpen = !isOpen"
		>
			<span>{{ title }}</span>
			
			<ui-toggle id="1" :name="title" :value="title"></ui-toggle>
		</button>
	</div>

	<div v-else class="drop-down">
		<button
		class="drop-down__btn"
		@click="isOpen = !isOpen"
		>
			<span>{{ title }}</span>
			<svg-icon
				:name="isOpen ? 'arrow-up' : 'arrow-down'"
				width="24"
				height="24"
			></svg-icon>
		</button>

		<div
			class="drop-down__content"
			v-if="isOpen"
		>

			<ul 
				class="drop-down-list"
				:class="{'drop-down-list_flex': isFlex}"
			>
				<li
				class="drop-down-list__item"
				v-for="(item, index) in list"
				:key="index"
				>

					<nuxt-link
						v-if="isLink"
						class="drop-down-list__link"
						:to="item.url"
					>
						<svg-icon
						:name="item.icon"
						width="24"
						height="24"
						></svg-icon>
						<span>{{ item.name }}</span>
					</nuxt-link>

					<ui-checkbox 
						v-else-if="isInputCheckbox" 
						:label="item.name"
						:id="index" 
						:name="title" 
						:value="item.name"
						:checkbox="true"
						v-model="checked"
					></ui-checkbox>

					<ui-checkbox 
						v-else-if="isInputCheckBtn" 
						:label="item.name"
						:id="index" 
						:name="title" 
						:value="item.name"
						:checkbox="false"
						v-model="checked"
					></ui-checkbox>

					<ui-radio 
						v-else-if="isInputRadio" 
						:label="item.name"
						:id="index"
						:value="index"
						v-model="checked"
					></ui-radio>

					<ui-input-range
						v-else-if="isRangeInput"
					></ui-input-range>
				</li>
			</ul>

			<button v-if="showMore" class="drop-down__btn-more">показать ещё</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
		showMore: {
			type: Boolean,
			default: false,
		},
		list: {
			type: Array,
			default: () => [],
		},
		isToggle: {
			type: Boolean,
			default: false,
		},
		isLink: {
			type: Boolean,
			default: false,
		},
		isFlex: {
			type: Boolean,
			default: false,	
		},
		isInputCheckbox: {
			type: Boolean,
			default: false,
		},
		isInputRadio: {
			type: Boolean,
			default: false,
		},
		isInputCheckBtn: {
			type: Boolean,
			default: false,
		},
		isRangeInput: {
			type: Boolean,
			default: false,
		}
	},

	data() {
		return {
			isOpen: true,
			checked: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.drop-down {
	display: grid;
	row-gap: 20px;
	background-color: $grey_m;
	border-radius: 10px;
	padding: 20px;

	&__btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__btn-more {
		display: flex;
		width: auto;
		font-weight: 500;
		color: $mainBlue;

		&:hover {
			color: $darkBlue;
		}
	}

	&__content {
		display: grid;
		row-gap: 24px;
	}

	&-list {
		display: grid;
		row-gap: 16px;
		@include reset-list;

		&_flex {
			display: flex;
			flex-wrap: wrap;
			column-gap: 16px;
			row-gap: 16px;
		}

		&__link {
			display: grid;
			grid-template-columns: 24px 1fr;
			column-gap: 8px;
			font-size: 16px;
			color: inherit;
			text-decoration: none;

			&:hover {
				color: $mainBlue;
			}
		}
	}
}
</style>

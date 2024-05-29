<template>
	<div class="pagination">
		<ui-button class="pagination__btn">Показать ещё</ui-button>

		<ClientOnly>
			<vue-awesome-paginate 
				:total-items="totalCards" 
				:items-per-page="cardsPerPage" 
				:max-pages-shown="4"
				:show-breakpoint-buttons="false" 
				:hide-prev-next-when-ends="true" 
				v-model="currentPage"
			>
				<template #prev-button>
					<svg-icon name="Chevron_Left_MD" width="48" height="48"></svg-icon>
				</template>
				<template #next-button>
					<svg-icon name="Chevron_Right_MD" width="48" height="48"></svg-icon>
				</template>
			</vue-awesome-paginate>
		</ClientOnly>
	</div>
</template>

<script>
export default {
	props: {
		totalCards: {
			type: Number,
			default: 20,
			required: true,
		},
		cardsPerPage: {
			type: Number,
			default: 5,
		},
	},
	data() {
		return {
			currentPage: 1,
		}
	},
}
</script>

<style lang="scss">
.pagination {
	width: 55%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: auto;
	margin-top: 60px;
}

.pagination-container {
	column-gap: 10px;
}

.paginate-buttons {
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 24px;
	line-height: 120%;
	background-color: $grey_m;

	&:hover {
		background-color: $grey;
	}
}

.active-page {
	background-color: $mainBlue;
	color: white;

	&:hover {
		background-color: $darkBlue;
	}
}

.back-button,
.next-button {
	// background-color: $mainBlue;

	// svg {
	// 	--currentColor: #{$white};
	// }

	// &:hover {
	// 	background-color: $darkBlue;
	// }
}

@media screen and (max-width: 767px) {
	.pagination {
		width: 100%;
		flex-direction: column-reverse;
		row-gap: 24px;
		margin-top: 20px;
	}
}
</style>
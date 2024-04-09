<template>
	<div class="payment">
		<h3 class="payment__title">Мы принимаем к оплате</h3>

		<ul class="payment__list">
			<li
				class="payment__item"
				v-for="(item, index) in paymentList"
				:key="index"
			>
				<img
				:src="item"
				alt=""
				/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		paymentList: {
		type: Array,
		default: () => [],
		},
	},
};
</script>

<style lang="scss" scoped>
.payment {
	display: grid;
	row-gap: 24px;

	&__list {
		display: flex;
		align-items: center;
		column-gap: 24px;
		@include reset-list;
	}
}
</style>

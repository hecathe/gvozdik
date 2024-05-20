<template>
	<div class="notice">
		<div class="container">
			<div class="notice__wrap">
				<p class="notice__text">Скидка 20% на первый заказ</p>
				<button class="notice__btn" aria-label="Закрыть">
					<svg-icon name="close" width="24" height="24"></svg-icon>
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.notice {
	background-color: $mainBlue;

	&__wrap {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: $white;
		padding: 12px 0;
	}

	&__text {
		line-height: 120%;
		margin: 0;
	}

	&__btn {
		position: absolute;
		top: 50%;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-50%);

		svg {
			--currentColor: #{$white};
		}
	}
}
</style>
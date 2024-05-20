<template>
	<the-section class="subscribe">
		<div class="subscribe__content">
			<div class="subscribe__text">
				<h2 class="h2">Подпишитесь</h2>
				<p>И будьте в курсе новостей и акций</p>
			</div>
			<form class="subscribe__form">
				<ui-input label="E-mail" id="email" type="email" placeholder="example@mail.com"></ui-input>
				<ui-button type="submit">Подписаться</ui-button>
			</form>
		</div>
	</the-section>
</template>

<style lang="scss" scoped>
.subscribe {
	border-top: 1px solid $grey;
	padding-top: 40px;
	padding-bottom: 40px;
	margin-bottom: 0;

	&__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 60px;
	}

	&__text {
		display: flex;
		flex-direction: column;
		row-gap: 24px;

		p {
			margin: 0;
		}
	}

	&__form {
		display: grid;
		row-gap: 16px;
	}
}

@media screen and (max-width: 767px) {
	.subscribe {
		&__content {
			grid-template-columns: 1fr;
			row-gap: 24px;
		}

		&__text {
			row-gap: 12px;
		}
	}
}
</style>
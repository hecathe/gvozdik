<template>
	<div class="reviews-block">
		<reviews-list :reviews-list="reviewsList"></reviews-list>
		<div class="reviews-block__btns">
			<ui-button @click="showModalReview">Оставить отзыв</ui-button>
			<ui-button @click="showModalQuestion" is-ghost>Задать вопрос</ui-button>
		</div>

		<app-modal ref="modalReview" title="Оставить отзыв" :opened="modalLeaveReviewOpened">
			<div class="modal__rating">
				<ClientOnly >
					<star-rating 
						v-model:rating="rating" 
						:increment="0.5" 
						:star-size="30"
						:show-rating="false"
						active-color="#FFB422"
					></star-rating>
				</ClientOnly>
			</div>
			
			<app-form>
				<ul class="form__list">
					<li class="form__item form__item_full">
						<ui-input type="text" label="ФИО"></ui-input>
					</li>
					<li class="form__item">
						<ui-input type="tel" label="Номер телефона"></ui-input>
					</li>
					<li class="form__item">
						<ui-input type="email" label="E-mail"></ui-input>
					</li>
					<li class="form__item form__item_full">
						<ui-textarea label="Достоинства"></ui-textarea>
					</li>
					<li class="form__item form__item_full">
						<ui-textarea label="Недостатки"></ui-textarea>
					</li>
					<li class="form__item form__item_full">
						<ui-textarea label="Комментарий"></ui-textarea>
					</li>
				</ul>
			</app-form>
		</app-modal>

		<app-modal ref="modalQuestion" title="Задать вопрос">
			<form class="form">
				<ul class="form__list">
					<li class="form__item form__item_full">
						<ui-input type="text" label="ФИО"></ui-input>
					</li>
					<li class="form__item">
						<ui-input type="tel" label="Номер телефона"></ui-input>
					</li>
					<li class="form__item">
						<ui-input type="email" label="E-mail"></ui-input>
					</li>
					<li class="form__item form__item_full">
						<ui-textarea label="Вопрос"></ui-textarea>
					</li>
				</ul>

				<ui-button type="submit">Отправить</ui-button>
			</form>
		</app-modal>
	</div>
</template>

<script>
export default {
	props: {
		reviewsList: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			modalLeaveReviewOpened: false,
			modalQuestionOpened: false,
			rating: 0,
		}
	},
	methods: {
		showModalReview() {
			this.$refs.modalReview.opened = true;
			document.body.style.overflow = 'hidden';
		},
		showModalQuestion() {
			this.$refs.modalQuestion.opened = true;
			document.body.style.overflow = 'hidden';
		}
	},
}
</script>

<style lang="scss" scoped>
.reviews-block {
	min-width: 0;
	min-height: 0;
	display: grid;
	grid-template-columns: minmax(auto, 700px) 1fr;
	column-gap: 100px;

	&__btns {
		flex: 1;
		display: grid;
		align-content: flex-start;
		row-gap: 20px;
	}
}

@media screen and (max-width: 767px) {
	.reviews-block {
		min-width: 0;
		min-height: 0;
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		row-gap: 40px;
	}
}
</style>
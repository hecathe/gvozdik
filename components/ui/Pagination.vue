<template>
    <div class="pagination">
        <ui-button class="pagination__btn">Показать ещё</ui-button>

        <ul class="pagination__list pagination-list">
            <li class="pagination__item pagination-list__item" v-for="(item, index) in totalPages" :key="index">
                <button class="pagination-list__btn">{{ item }}</button>
				<!-- <button v-if="item > 5"></button> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        // totalPages: {
        //     type: Number,
        // }
    },

    data() {
        return {
            totalPages: 5,
        }
    },
}
</script>

<style lang="scss" scoped>
.pagination {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-top: 60px;

    &-list {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
        gap: 24px;
        @include reset-list;

        &__btn {
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
    }
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
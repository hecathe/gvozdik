<template>
    <ul class="news-list">
        <li class="news-list__item" :class="{'span-2': newsItem.span}" v-for="(newsItem, index) in newsList" :key="index">
            <news-list-card :news-card="newsItem"></news-list-card>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        newsList: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style lang="scss" scoped>
.news-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    row-gap: 40px;
    @include reset-list;

    &__item {
        &.span-2 {
            grid-column: span 2;
        }
    }
}

@media screen and (max-width: 767px) {
    .news-list {
        grid-template-columns: 1fr;

        &__item {
            &.span-2 {
                grid-column: span 1;
            }
        }
    }
}
</style>
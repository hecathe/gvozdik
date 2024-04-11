<template>
    <nuxt-link :to="newsCard.url" class="news-list__card news-card">
        <div class="news-card__img">
            <img :src="newsCard.image" alt="">
        </div>
        <div class="news-card__content">
            <h3 class="news-card__title">{{ newsCard.title }}</h3>
            <div class="news-card__text" v-html="newsCard.content"></div>
            <span class="news-card__date">{{ newsCard.date }}</span>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        newsCard: {
            type: Object,
            default: () => {},
        }
    }
}
</script>

<style lang="scss" scoped>
.news-card {
    $this: &;

    position: relative;
    display: grid;
    align-items: flex-end;
    height: 400px;
    color: $white;
    background: linear-gradient(180deg, rgba(40, 40, 40, 0.14) 0%, rgba(0, 0, 0, 0.7) 100%);
    text-decoration: none;
    padding: 28px;

    &__img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__content {
        display: grid;
        row-gap: 12px;
    }

    &__date {
        font-size: 14px;
        color: $grey_m;
    }

    // &__text {
    //     height: 0;
    //     transition: all 150ms linear;
    //     transform: translateY(50%);
    //     overflow: hidden;
    // }

    // &:hover {
    //     #{$this}__text {
    //         height: auto;
    //         transform: translateY(0);
    //     }
    // }
}
</style>
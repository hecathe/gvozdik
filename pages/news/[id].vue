<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section class="news-detail">
            <div class="news-detail__wrap">
                <div class="news-detail__content">
                    <h1 class="news-detail__title h1">{{ content.title }}</h1>
                    <span class="news-detail__date grey">{{ content.date }}</span>
                    <div class="news-detail__text" v-html="content.text"></div>
                </div>

                <div class="news-detail__aside">
                    <social-list :social-list="social" vertical blue></social-list>
                </div>
            </div>

            <swiper-container class="news-detail__slider news-detail-slider" navigation>
                <swiper-slide class="news-detail-slider__item" v-for="(image, index) in content.images" :key="index">
                    <img class="news-detail-slider__img" :src="image" alt="">
                </swiper-slide>
            </swiper-container>
        </the-section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbs: [
                {
                    link: '/',
                    title: 'Главная',
                    active: false,
                },
                {
                    link: '/news/',
                    title: 'Новости',
                    active: false,
                },
                {
                    link: '#',
                    title: 'Заголовок новости',
                    active: true,
                },
            ],
            content: {
                title: 'Заголовок новости',
                text: '<p>Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям. Сложно сказать, почему акционеры крупнейших компаний могут быть призваны к ответу. Прежде всего, повышение уровня гражданского сознания создаёт предпосылки для стандартных подходов.</p><p>Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям. Сложно сказать, почему акционеры крупнейших компаний могут быть призваны к ответу. Прежде всего, повышение уровня гражданского сознания создаёт предпосылки для стандартных подходов.</p><span>Alex Lee / <span class="grey">Основатель компании</span></span>',
                images: [
                    '../../images/tools-store.jpg',
                    '../../images/tools-store.jpg',
                    '../../images/tools-store.jpg',
                ],
                date: '11/04/2024',
            },
            social: [
                {
                whatsapp: "#",
                },
                {
                telegram: "#",
                },
                {
                youtube: "#",
                },
                {
                vk: "#",
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.news-detail {
    &__wrap {
        position: relative;
        display: grid;
        grid-template-columns: minmax(auto, 700px);
        justify-content: center;
        margin-bottom: 60px;
    }

    &__text {
        display: grid;
        row-gap: 40px;
    }

    &__aside {
        position: absolute;
        top: 0;
        right: 0;
    }
}

.news-detail-slider {
    &__img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
    }
}
</style>
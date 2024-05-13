<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section class="news">
            <h1 class="h1">Новости</h1>

            <news-list :news-list="news"></news-list>

            <ui-pagination></ui-pagination>
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
                    link: '#',
                    title: 'Новости',
                    active: true,
                },
            ],
            news: [
                {
                    title: 'Заголовок новости 1',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-1/',
                    span: true,
                },
                {
                    title: 'Заголовок новости 2',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-2/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 3',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-3/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 4',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-4/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 5',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-5/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 6',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-6/',
                    span: false,
                },
                {
                    title: 'Заголовок новости 7',
                    content: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
                    image: '/gvozdik/images/work-tools.jpg',
                    date: '11/04/2024',
                    url: '/news/zagolovok-novosti-7/',
                    span: true,
                },
            ]
        }
    },
}
</script>
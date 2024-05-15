<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section class="catalog-category">
            <div class="catalog-category__wrap">
                <div class="catalog-category__aside">
					<form class="catalog-category__filter">
						<ui-dropdown-list title="Категория" :list="category" is-link="true"></ui-dropdown-list>

						<ui-dropdown-list title="Тип продукта" :list="type" is-input-checkbox="true"></ui-dropdown-list>

						<ui-dropdown-list title="Бренд" :list="brands" is-input-check-btn="true" is-flex show-more></ui-dropdown-list>

						<ui-dropdown-list title="Цена" :list="price" is-range-input="true"></ui-dropdown-list>

						<ui-dropdown-list title="Доставка" :list="delivery" is-input-radio="true"></ui-dropdown-list>

						<ui-dropdown-list title="Новинки" is-toggle></ui-dropdown-list>

						<ui-button is-ghost type="reset">
							<span>Очистить фильтр</span>
							<svg-icon name="trash" width="24" height="24"></svg-icon>
						</ui-button>
					</form>
                </div>

				<div class="catalog-category__grid">
					<product-grid :product-list="products"></product-grid>
				</div>

				<div class="catalog-category__pagination">
					<ui-pagination></ui-pagination>
				</div>
            </div>
        </the-section>

        <the-section>
			<app-title link link-text="все акции">Товары по акции / Популярное</app-title>
			<product-slider :cards="saleCards"></product-slider>
		</the-section>

		<the-section>
			<app-title link link-text="все новинки">Новинки</app-title>
			<product-slider :cards="newCards"></product-slider>
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
                    link: '/catalog/',
                    title: 'Каталог',
                    active: false,
                },
                {
                    link: '/catalog/tools/',
                    title: 'Инструмент',
                    active: false,
                },
                {
                    link: '#',
                    title: 'Ручной инструмент',
                    active: true,
                },
            ],
            category: [
                // {
                //     name: 'Ручной инструмент',
                //     url: '/catalog/tools/handtools/',
                //     icon: 'brick-wall',
                // },
                {
                    name: 'Инструмент',
                    url: '/catalog/tools/',
                    icon: 'construction-rounded',
                },
                // {
                //     name: 'Электрика',
                //     url: '/catalog/electric/',
                //     icon: 'power-supply',
                // },
            ],
            type: [
                {
                    name: 'Зажимные инструменты и устройства',
					checked: false,
                },
                {
                    name: 'Инструмент садовый',
					checked: false,
                },
                {
                    name: 'Монтажный и крепёжный',
					checked: false,
                },
                {
                    name: 'Наборы инструментов',
					checked: false,
                },
            ],
			delivery: [
				{name: 'Завтра'},
				{name: '1-3 дня'},
				{name: '4-7 дней'}
			],
			brands: [
				{name: 'Knipexxxx'},
				{name: 'Hesler'},
				{name: 'Knipex'},
				{name: 'Hesler'},
				{name: 'Knipex'},
			],
			price: [
				1
			],
			products: [
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: true,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: true,
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
					span: false,
				},
            ],
            saleCards: [
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
			],
			newCards: [
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
			],
        }
    },
}
</script>

<style lang="scss" scoped>
.catalog-category {
    &__wrap {
        display: grid;
        grid-template-columns: minmax(auto, 250px) 1fr;
		column-gap: 28px;
    }

    &__filter {
        display: grid;
        row-gap: 28px;
    }

	&__pagination {
		grid-column: 1 / -1;
	}
}
</style>
<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section class="catalog-category">
            <div class="catalog-category__wrap">
                <aside class="catalog-category__aside">
					<div class="catalog-category__filter">
						<ui-dropdown-list title="Категория" :list="category" is-link="true" show-more></ui-dropdown-list>

						<!-- <ui-dropdown-list title="Тип продукта" :list="type" is-input-checkbox="true"></ui-dropdown-list>

						<ui-dropdown-list title="Бренд" :list="brands" is-input-check-btn="true" is-flex show-more></ui-dropdown-list>

						<ui-dropdown-list title="Цена" :list="price" is-range-input="true"></ui-dropdown-list>

						<ui-dropdown-list title="Доставка" :list="delivery" is-input-radio="true"></ui-dropdown-list>

						<ui-dropdown-list title="Новинки" is-toggle></ui-dropdown-list>

						<ui-button is-ghost type="reset">
							<span>Очистить фильтр</span>
							<svg-icon name="trash" width="24" height="24"></svg-icon>
						</ui-button> -->
					</div>
                </aside>

				<div class="catalog-category__grid">
					<product-grid :product-list="products"></product-grid>
				</div>

				<div class="catalog-category__pagination">
					<ui-pagination></ui-pagination>
				</div>
            </div>
        </the-section>

		<product-slider-section :slider-list="saleCards">Популярное</product-slider-section>

		<product-slider-section :slider-list="newCards">Новинки</product-slider-section>
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
                    link: '#',
                    title: 'Инструмент',
                    active: true,
                },
            ],
            category: [
                {
                    name: 'Ручной инструмент',
                    url: '/catalog/tools/handtools/',
                    icon: 'brick-wall',
                },
                {
                    name: 'Электроинструмент',
                    url: '/catalog/tools/electrotools/',
                    icon: 'construction-rounded',
                },
                {
                    name: 'Измерительные инструменты',
                    url: '/catalog/tools/checktools/',
                    icon: 'power-supply',
                },
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
        grid-template-columns: minmax(auto, 260px) 1fr;
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

@media screen and (max-width: 767px) {
	.catalog-category {
		&__wrap {
			grid-template-columns: 100%;
			row-gap: 28px;
		}
	}
}
</style>
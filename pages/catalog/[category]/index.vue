<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section class="catalog-category">
            <div class="catalog-category__wrap">
                <div class="catalog-category__aside">
					<div class="catalog-category__filter">
						<ui-dropdown-list title="Категория" :list="category" is-link="true" show-more></ui-dropdown-list>

						<ui-dropdown-list title="Тип продукта" :list="type" is-input-checkbox="true"></ui-dropdown-list>

						<ui-dropdown-list title="Бренд" :list="brands" is-input-check-btn="true" is-flex show-more></ui-dropdown-list>

						<ui-dropdown-list title="Цена" :list="price" is-range-input="true"></ui-dropdown-list>

						<ui-dropdown-list title="Доставка" :list="delivery" is-input-radio="true"></ui-dropdown-list>

						<ui-dropdown-list title="Новинки" is-toggle></ui-dropdown-list>

						<ui-button is-ghost type="reset">
							<span>Очистить фильтр</span>
							<svg-icon name="trash" width="24" height="24"></svg-icon>
						</ui-button>
					</div>
                </div>

				<div class="catalog-category__grid">
					<product-grid :product-list="products"></product-grid>
				</div>
            </div>
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
                    link: '#',
                    title: 'Инструмент',
                    active: true,
                },
            ],
            category: [
                {
                    name: 'Стройматериалы',
                    url: '/catalog/stroy/',
                    icon: 'lucide_brick-wall',
                },
                {
                    name: 'Инструмент',
                    url: '/catalog/tools/',
                    icon: 'material-symbols_construction-rounded',
                },
                {
                    name: 'Электрика',
                    url: '/catalog/electric/',
                    icon: 'icon-park-outline_power-supply-one',
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
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: true,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
				{
					images: ['../images/goods-item-1.jpg', '../images/goods-item-1.jpg', '../images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					span: false,
				},
			]
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
}
</style>
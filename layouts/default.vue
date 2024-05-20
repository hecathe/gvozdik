<template>
	<Notice></Notice>
	<AppHeader
		:nav-list="menu"
		:user-actions="user_menu"
		:catalog-menu="catalog_menu"
	></AppHeader>
	<!-- <AppMenu></AppMenu> -->
	<slot />
	<subscribe-form></subscribe-form>
	<AppFooter
		:nav-list="catalog_nav"
		:footer-menu="menu"
		:social-list="social"
		:payment-list="cards"
	></AppFooter>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					name: "Новости",
					link: "/news/"
				},
				{
					name: "О компании",
					link: "#"
				},
				{
					name: "Доставка",
					link: "/delivery/",
				},
				{
					name: "Контакты",
					link: "/contacts/",
				},
			],
			user_menu: [
				{
				name: "heart",
				},
				{
				name: "user",
				},
				{
				name: "cart",
				link: "/cart",
				},
			],
			catalog_nav: [
				{
					title: "Электрика",
					link: '/catalog/electric',
				},
				{
					title: "Инструмент",
					link: '/catalog/tools',
				},
				{
					title: "Сантехника",
					link: '/catalog/tools',
				},
				{
					title: "Стройматериалы",
					link: '/catalog/tools',
				},
				{
					title: "Электрика",
					link: '/catalog/tools',
				},
				{
					title: "Инструмент",
					link: '/catalog/tools',
				},
				{
					title: "Сантехника",
					link: '/catalog/tools',
				},
				{
					title: "Стройматериалы",
					link: '/catalog/tools',
				},
				{
					title: "Электрика",
					link: '/catalog/tools',
				},
				{
					title: "Инструмент",
					link: '/catalog/tools',
				},
				{
					title: "Сантехника",
					link: '/catalog/tools',
				},
				{
					title: "Стройматериалы",
					link: '/catalog/tools',
				}
			],
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
			cards: [
				"/gvozdik/images/mastercard.png",
				"/gvozdik/images/visa.png",
				"/gvozdik/images/sbp.png",
				"/gvozdik/images/mir.png",
			],
			catalog_menu: [
				{
					id: 1,
					title: 'Стройматериалы',
					link: '/catalog/building/',
					svg_name: 'brick-wall',
					lists: [
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
					],
				},
				{
					id: 2,
					title: 'Инструмент',
					link: '/catalog/tools/',
					svg_name: 'construction-rounded',
					lists: [
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
					],
				},
				{
					id: 3,
					title: 'Электрика',
					link: '/catalog/electric',
					svg_name: 'brick-wall',
					lists: [
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
					],
				},
				{
					id: 4,
					title: 'Крепёж',
					link: '/catalog/nails',
					svg_name: 'screw',
					lists: [
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
					],
				},
				{
					id: 5,
					title: 'Инженерные системы',
					link: '/catalog/pipelines',
					svg_name: 'pipeline',
					lists: [
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
					],
				},
				{
					id: 6,
					title: 'Сантехника',
					link: '/catalog/baths',
					svg_name: 'bath',
					lists: [
						{
							title: 'Унитазы',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Раковины',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
					],
				},
				{
					id: 7,
					title: 'Товары для дома',
					link: '/catalog/brick-wall',
					svg_name: 'brick-wall',
					lists: [
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							],
						},
						{
							title: 'Ручной инструмент',
							link: '/catalog/handtools/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
								{
									label: 'Монтажный и крепежный инструмент',
									link: '/catalog/montazniy-krepezhniy-instrument/'
								},
								{
									label: 'Столярно-слесарный инструмент',
									link: '/catalog/stolyarno-slesarniy-instrument/'
								},
							]
						},
						{
							title: 'Измерительные инструменты',
							link: '/catalog/izmeritelnie-instrumenty/',
							list: [
								{
									label: 'Наборы инструментов',
									link: '/catalog/nabory-instrimentov/'
								},
								{
									label: 'Ударно-рычажный инструмент',
									link: '/catalog/udarno-rychagnoy-instrument/'
								},
								{
									label: 'Режущий инструмент',
									link: '/catalog/rezuchii-instrument/'
								},
								{
									label: 'Инструмент садовый',
									link: '/catalog/instrument-sadoviy/'
								},
								{
									label: 'Зажимные инструменты и устройства',
									link: '/catalog/zazhimnie-instrumenty/'
								},
							],
						},
					],
				},
			],
		};
	},
};
</script>

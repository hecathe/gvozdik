<template>
	<nuxt-link class="link" :to="link">
		<span class="link__text">{{ text }}</span>
		<svg-icon
			class="link__icon"
			v-if="arrow"
			name="arrow-right"
			width="24"
			height="24"
		></svg-icon>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '#',
		},
		text: {
			type: String,
			default: 'показать все',
		},
		arrow: {
			type: Boolean,
			default: true,
		},
	}
}
</script>

<style lang="scss" scoped>
.link {
	$this: &;
	display: flex;
	align-items: center;
	column-gap: 16px;
	font-weight: 700;
	color: $mainBlue;
	text-decoration: none;

	&__icon {
		--currentColor: #{$mainBlue};
		transition: transform 150ms linear;
	}

	&:hover {
		svg {
			transform: translateX(10px);
		}
	}
}
</style>
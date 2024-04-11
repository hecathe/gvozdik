<template>
	<div class="title">
		<h2 class="title__h2">
			<slot></slot>
		</h2>

		<nuxt-link v-if="link" :to="url" class="title__link">
			<span>{{ linkText }}</span>
			<svg-icon class="title__icon" width="24" height="24" name="arrow-right"></svg-icon>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: Boolean,
			default: false,
		},
		linkText: {
			type: String,
			default: '',
		},
		url: {
			type: String,
			default: '#',
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;

	&__h2 {
		font-size: 36px;
		line-height: 120%;
	}

	&__link {
		display: flex;
		align-items: center;
		column-gap: 16px;
		font-weight: 500;
		color: $mainBlack;
		text-decoration: none;
		// transition: color 150ms linear;

		svg {
			transition: transform 150ms linear;
		}

		&:hover {
			// color: $mainBlue;

			svg {
				transform: translateX(10px);
				--currentColor: #{$mainBlue};
			}
		}
	}
}
</style>
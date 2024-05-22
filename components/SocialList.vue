<template>
	<ul
		class="social-list"
		:class="{ vertical: vertical }"
	>
		<li
		class="social-list__item"
		v-for="(item, index) in socialList"
		:key="index"
		>
		<a
			class="social-list__link"
			:class="{ blue: blue }"
			:href="obj[1]"
			v-for="(obj, index) in Object.entries(item)"
			:key="index"
		>
			<svg-icon
			:name="obj[0]"
			width="24"
			height="24"
			></svg-icon>
		</a>
		</li>
	</ul>
</template>

<script>
export default {
  props: {
	socialList: {
	  type: Array,
	  default: () => [],
	},
	vertical: {
	  type: Boolean,
	  default: false,
	},
	blue: {
	  type: Boolean,
	  default: false,
	},
  },
};
</script>

<style lang="scss" scoped>
.social-list {
	$this: &;

	display: flex;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 12px;
	@include reset-list;

	&.vertical {
		flex-direction: column;
	}

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: $mainOrange;
		border-radius: 100%;
		transition: background 150ms linear;

		&.blue {
			background-color: $mainBlue;
		}

		&:hover {
		background-color: $darkBlue;
		}
	}

	svg {
		--currentColor: #{$white};
	}
}

@media screen and (max-width: 767px) {
	.social-list {
		&.vertical {
			flex-direction: row;
		}
	}
}
</style>

<template>
	<div class="range">
		<!-- <vue-slider v-model="modelvalue"></vue-slider> -->

		<div class="range__inputs">
			<label class="range__label">
				<span>от</span>
				<input class="range__input" type="number" v-model="barMinValue">
				<span>₽</span>
			</label>
			<label class="range__label">
				<span>до</span>
				<input class="range__input" type="number" v-model="barMaxValue">
				<span>₽</span>
			</label>
		</div>

		<MultiRangeSlider
			:min="100"
			:max="20000"
			:step="50"
			:ruler="false"
			:label="false"
			minCaption=""
			maxCaption=""
			:minValue="barMinValue"
			:maxValue="barMaxValue"
			@input="UpdateValues"
		/>
	</div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
export default {
	components: {
		MultiRangeSlider
	},

	data() {
		return {
			barMinValue: 100,
      		barMaxValue: 20000
		}
	},

	methods: {
		UpdateValues(e) {
			this.barMinValue = e.minValue;
			this.barMaxValue = e.maxValue;
		},
	}
}
</script>

<style lang="scss">
.range {
	&__inputs {
		display: flex;
		column-gap: 8px;
	}

	&__label {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: $white;
		border-radius: 4px;
		padding: 4px;

		span {
			font-size: 12px;
			color: #9E9E9E;
		}
	}

	&__input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		background: none;
		text-align: center;
		padding: 0;
		z-index: 1;

		&:focus {
			outline-color: $darkBlue;
			
		}
	}
}

.multi-range-slider {
	box-shadow: none;
	border: none;
}

.multi-range-slider .bar-left,
.multi-range-slider .bar-right {
	background-color: $white;
	box-shadow: none;
	border: none;
}

.multi-range-slider .bar-inner {
	background-color: #8CCAF6;
	box-shadow: none;
	border: none;
}

.multi-range-slider .thumb .caption {
	opacity: 0;
}

.multi-range-slider .thumb::before {
	width: 24px;
	height: 24px;
	background-color: $mainBlue;
	border: none;
	box-shadow: none;
}

.multi-range-slider .thumb:hover::before,
.multi-range-slider .thumb:focus::before {
	box-shadow: 0 0 0px 12px rgba(33, 177, 255, 0.3);
}
</style>
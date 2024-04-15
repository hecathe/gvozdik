<template>
	<div class="range">
		<!-- <vue-slider v-model="modelvalue"></vue-slider> -->

		<MultiRangeSlider
			:min="100"
			:max="50000"
			:step="50"
			:ruler="false"
			:label="false"
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
      		barMaxValue: 45000
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
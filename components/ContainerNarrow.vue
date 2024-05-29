<template>
	<div class="container-narrow">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.container-narrow {
	position: relative;
	display: grid;
	grid-template-columns: minmax(auto, 700px);
	justify-content: center;
	margin-bottom: 60px;
}
</style>
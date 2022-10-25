<template>
	<view class="basic-container">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "BasicContainer",
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
	.basic-container {
		height: 100vh;
		width: 95vw;
		margin: auto;
		margin-bottom: 18vh;
		overflow: auto;
	}
</style>

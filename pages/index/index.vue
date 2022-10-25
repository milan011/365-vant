<template>
	<basic-container>
		<view class="content">
			<image class="logo" src="/static/logo.png"></image>
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>
			<van-button @click='toScan' type="default">去scan</van-button>
			<van-button @click='toScanInfo' type="primary">主要按钮</van-button>
		</view>
		<tab-bar></tab-bar>
	</basic-container>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toScan(){
				uni.navigateTo({
					url: '/pages/scan/index'
				})
			},		
			toScanInfo(){
				uni.navigateTo({
					url: '/pages/scan/info'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

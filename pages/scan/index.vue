<template>
	<basic-container>
		<van-sticky>
		<van-nav-bar
		  title="标题"
		  left-text="返回"
		  right-text="按钮"
		  left-arrow
		  @click-left=""
		  @click-right=""
		/>
	</van-sticky>
	<view class="content">
		<van-cell-group style="width:100%">
		  <van-cell title="单元格" value="内容" />
		  <van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>
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

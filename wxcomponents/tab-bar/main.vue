<template>
	<view>
		<van-tabbar :active="active" @change="onChange">
		  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
		  <van-tabbar-item icon="search">标签</van-tabbar-item>
		  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
		  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
		  <van-tabbar-item icon="star-o">标签</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script>
	export default {
		name: "TabBar",
		data() {
			return {
				active: 0,
			}
		},
		methods: {
			onChange(event) {
			    // event.detail 的值为当前选中项的索引
			    this.setData({ 
						active: event.detail,
					});
					// this.active = event.detail
			  },
		}
	}
</script>

<style scoped>
	::v-deep .van-hairline--top-bottom{
		position: fixed;
	}
</style>

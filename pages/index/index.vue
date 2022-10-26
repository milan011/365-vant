<template>
	<basic-container>
		<view class="content">
			<image class="logo" src="/static/logo.png"></image>
			<view class="text-area">
				<text class="title">{{title}}</text>
				<van-icon name="cart" />
			</view>
			<view>
				<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
			</view>
			<!-- <view>
				<van-row>
				  <van-col span="8">span: 8</van-col>
				  <van-col span="8">span: 8</van-col>
				  <van-col span="8">span: 8</van-col>
				</van-row>
			</view> -->
			
			<!-- <view>
				<van-button @click='showToast' type="primary">Show Toast</van-button>
			</view> -->
			<!-- <view>
				<van-transition name="slide-right">
					<van-toast id="van-toast" />
				</van-transition>
			</view> -->
				<!-- <van-calendar :show="true" /> -->
				<!-- <van-checkbox-group :value="['a', 'c']">
				  <van-checkbox name="a">复选框 a</van-checkbox>
				  <van-checkbox name="b">复选框 b</van-checkbox>
				  <van-checkbox name="c">复选框 c</van-checkbox>
				</van-checkbox-group> -->
			<!-- <view> -->
				<!-- <van-datetime-picker
				  type="datetime"
				  :value="currentDate"
				  :min-date="minDate"
				  :max-date="maxDate"
				  bind:input="onInput"
				/> -->
			<!-- </view> -->
			<!-- <view>
				<van-cell-group>
					<van-field
					    :value="username"
					    required
					    clearable
					    label="用户名"
					    icon="question-o"
					    placeholder="请输入用户名"
					    @click-icon="onClickIcon"
					  />
				</van-cell-group>
			</view> -->
			<van-button @click='toScan' type="default">去scan</van-button>
			<van-button @click='toScanInfo' type="primary">主要按钮</van-button>
			<view>
				<!-- <van-picker :columns="columns"/> -->
				<!-- <van-radio-group value="1">
				  <van-radio name="1">单选框 1</van-radio>
				  <van-radio name="2">单选框 2</van-radio>
				</van-radio-group> -->
				<!-- <van-rate value="5" /> -->
				<!-- <van-search value="22" placeholder="请输入搜索关键词" /> -->
				<!-- <van-stepper value="1" /> -->
				<!-- <van-switch :checked="true" /> -->
				<van-dialog id="van-dialog" />
				<van-toast id="van-toast" />
				<!-- <van-dropdown-menu>
				  <van-dropdown-item :value="value1" :options="option1" />
				</van-dropdown-menu> -->
				<!-- <van-loading type="spinner" /> -->
				<!-- <van-notify id="van-notify" /> -->
				<!-- <van-overlay :show="true" /> -->
				<!-- <van-share-sheet
				  :show="true"
				  title="立即分享给好友"
				  :options="options"
				/> -->
				<!-- <van-swipe-cell
				  id="swipe-cell"
				  right-width="65"
				  left-width="65"
				  async-close>
				  <view slot="left">选择</view>
				  <van-cell-group>
				    <van-cell title="单元格" value="内容" />
				  </van-cell-group>
				  <view slot="right">删除</view>
				</van-swipe-cell> -->
				
			</view>
			<view style="width:100%">
				<!-- <van-circle value="50" text="text" /> -->
				<!-- <van-collapse value="1">
				  <van-collapse-item title="标题1" name="1">
				    代码是写出来给人看的，附带能在机器上运行
				  </van-collapse-item>
				  <van-collapse-item title="标题2" name="2">
				    代码是写出来给人看的，附带能在机器上运行
				  </van-collapse-item>
				  <van-collapse-item title="标题3" name="3" disabled>
				    代码是写出来给人看的，附带能在机器上运行
				  </van-collapse-item>
				</van-collapse> -->
				<!-- <van-count-down :time="30 * 60 * 60 * 1000" /> -->
				<!-- <van-divider customStyle="color: #1989fa; border-color: #1989fa; font-size: 18px;" contentPosition="center">文本</van-divider> -->
				<!-- <van-empty description="描述文字" /> -->
				<!-- <van-notice-bar
				  left-icon="volume-o"
				  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
				/>
				<van-progress percentage="50" />
				<van-skeleton title row="3" /> -->
				<!-- <van-steps :steps="steps" active="3" /> -->
				<!-- <van-tag type="primary">标签</van-tag>
				<van-tag type="success">标签</van-tag>
				<van-tag type="danger">标签</van-tag>
				<van-tag type="warning">标签</van-tag> -->
				<!-- <van-grid>
				  <van-grid-item icon="photo-o" text="文字" />
				  <van-grid-item icon="photo-o" text="文字" />
				  <van-grid-item icon="photo-o" text="文字" />
				  <van-grid-item icon="photo-o" text="文字" />
				</van-grid> -->
				<!-- <van-tabs active="2">
				  <van-tab title="标签 1">内容 1</van-tab>
				  <van-tab title="标签 2">内容 2</van-tab>
				  <van-tab title="标签 3">内容 3</van-tab>
				  <van-tab title="标签 4">内容 4</van-tab>
				</van-tabs> -->
				<van-picker show-toolbar :columns="columns" />
			</view>
		</view>
		<tab-bar></tab-bar>
	</basic-container>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				commingShow: false,
				currentDate: new Date().getTime(),
				minDate: new Date(2019, 10, 1).getTime(),
				maxDate: new Date().getTime(),
				username: 'wcg',
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				value1: 0,
				option1: [
				  { text: '全部商品', value: 0 },
			    { text: '新款商品', value: 1 },
			    { text: '活动商品', value: 2 },
			  ],
				steps: [
				      {
				        text: '步骤一',
				        desc: '描述信息',
				      },
				      {
				        text: '步骤二',
				        desc: '描述信息',
				      },
				      {
				        text: '步骤三',
				        desc: '描述信息',
				      },
				      {
				        text: '步骤四',
				        desc: '描述信息',
				      },
				    ],
				options: [
				      { name: '微信', icon: 'wechat', openType: 'share' },
				      { name: '微博', icon: 'weibo' },
				      { name: '复制链接', icon: 'link' },
				      { name: '分享海报', icon: 'poster' },
				      { name: '二维码', icon: 'qrcode' },
				    ],
				
			}
		},
		onLoad() {
			console.log('onLoad')
		},
		methods: {
			toScan(){
				this.$notify({ type: 'primary', message: '通知内容' })
				/* this.$dialog.alert({
				  title: '标题',
				  message: '弹窗内容',
				}).then(() => {
				  // on close
				}); */
				// this.$toast('我是提示文案，建议不超过十五字~')
				/* uni.navigateTo({
					url: '/pages/scan/index'
				}) */
			},		
			toScanInfo(){
				uni.navigateTo({
					url: '/pages/scan/info'
				})
			},
			showToast(){
				Toast('你点了我~');
				this.setData({
					commingShow: true
				})
				setTimeout(()=>{
					this.setData({
						commingShow: false
					})
				}, 2000)
			},
			onInput(event) {
			    this.setData({
			      currentDate: event.detail,
			    });
			  },
			onClickIcon(){
				
			},
			onChange(event){
				const { picker, value, index } = event.detail;
				this.$toast(`当前值：${value}, 当前索引：${index}`);
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

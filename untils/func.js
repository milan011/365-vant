const windowWidth = uni.getSystemInfoSync().windowWidth

class func {
	/**
	 * rpx转换为px
	 * @param rpx
	 * @returns {number}
	 */
	static rpxTopx(rpx) {
		return (windowWidth / 750) * rpx;
	}
}

/**
 * 通用工具类
 */
export default {
	install(Vue, options) {
		// 4. 添加实例方法
		Vue.prototype.$util = func
	}
}

import {
	BASE_URL,
	AIRPORTS
} from "./Constants";
import website from "../config/website.js"
import {
	Base64
} from 'js-base64'
import store from '@/store/';
import {getStore,setStore} from '@/untils/store.js'
import {
	baseUrl
} from '@/config/env.js'

let showModal = true
/**
 *
 * @export
 * @param {string} url
 * @param {*} [data={}]
 * @param {*} [config={}]
 * @returns {Promise<any>}
 */
export function DoGet(url, data = {}, config = {}) {
	return DoAjax({
			url: url,
			data,
			method: "GET",
			dataType: "json"
		},
		config
	);
}

/**
 *
 * @export
 * @param {string} url
 * @param {*} [data={}]
 * @param {*} [config={}]
 * @returns {Promise<any>}
 */
export function DoPost(url, data = {}, config = {}) {

	return DoAjax({
			url: url,
			data,
			method: "POST",
			dataType: "json"
		},
		config
	);
}

export function request(options) {
	const params = options.params
	if (params) {
		let query = ''
		for (const key in params) {
			if (params[key] !== undefined && params[key] !== null) {
				query += `&${key}=${params[key]}`
			}
		}
		query = '?' + query.substring(1)
		options.url += query
	}
	return DoAjax(options)
}

async function DoAjax(options, config = {}) {
	const func = Promisify(uni.request);

	const header = options.headers || {};
	
	
	header["Authorization"] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`;
	
	let loginType = store.state.user.userInfo.login_type
	if(loginType){
		let loginTypesec =  getStore({
			name:'userInfo',
		})
		// // 个人
		if(loginTypesec.login_type == 'Type-U'){
			header["Authorization"] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`;
		}
		// 企业
		else if(loginTypesec.login_type == 'Type-T'){
			header["Authorization"] = `Basic ${Base64.encode(`${website.clientcompanyId}:${website.clientcompanySecret}`)}`;
		}
	}
	
	// let loginToken =  getStore({
	// 	name:'userInfo',
	// })

	const token = store.state.user.token;
	if (token) {
		header[website.tokenName] = "bearer " + token
	}
	// if (loginToken.access_token) {
	// 	header[website.tokenName] = "bearer " + loginToken.access_token
	// }
	if (baseUrl) {
		options.url = baseUrl + options.url
	}
	options = Object.assign({}, options, {
		header
	});
	let res = null
	try {
		res = (await func(options));
	} catch (err) {
		console.log('AxiosUitls',{
			err
		})
		res = err;
		res.data = {}
	} finally {}

	// 获取状态码
	const status = res.data.code || res.statusCode;
	const statusWhiteList = website.statusWhiteList || [];
	let message = res.data.msg || res.data.error_description || '未知错误';

	//如果在白名单里则自行catch逻辑处理
	if (statusWhiteList.includes(status)) throw res;
	//如果是401则跳转到登录页面
	if (status === 401) {
		store.dispatch('FedLogOut').then(() => {
			GoLogin()
		});
		throw new Error(message);
	}
	// 如果请求为非200否者默认统一处理
	if (status !== 200) {
		if (message === 'Bad credentials') {
			message = '账号或密码错误'
		}
		if(status === 500){
			// message = '请求失败'
			message = '网络有延迟，请刷新重试'
		}
		if(status === 503){
			// message = '请求失败'
			message = '网络有延迟，请刷新重试'
		}
		setTimeout(()=>{
			uni.showToast({
				title: message,
				icon: 'none',
				duration:3000
			});
		})
		
		throw new Error(message);
	}
	return res;
}

/**
 * 时间格式化
 * @param {*} str
 * @param {string} fmt
 */
export function DateFormat(str, fmt = "YYYY-MM-DD HH:mm:ss") {
	return str ? moment(str).format(fmt) : "--";
}

/**
 * 富文本添加域名
 * @export
 * @param {string} html
 * @returns
 */
export function HtmlImgAddHost(html) {
	return html.replace(
		/ src="\//g,
		` style="width:100% !important" src="${BASE_URL}/`
	);
}

export function Promisify(func) {
	return function(data) {
		return new Promise((resolve, reject) => {
			func({
				...data,
				success: resolve,
				fail: reject
			});
		});
	};
}

export function GoLogin() {
	if (showModal) {
		showModal = false
		// uni.showModal({
		// 	title: "提示",
		// 	content: "您还未登录，点击确认去登录",
		// 	success({
		// 		confirm
		// 	}) {
		// 		if (confirm) {
		// 			uni.redirectTo({
		// 				url: "/loginPackage/login/login"
		// 			});
		// 		}
		// 		showModal = true
		// 	},
		// 	fail() {
		// 		showModal = true
		// 	}
		// })
	}
}

/**
 * 获取服务机场
 * @export
 * @param {string[]} list
 */
export function GetServiceIata(...list) {
	const dic = new Set(AIRPORTS);

	for (let i = 0; i < list.length; i++) {
		if (dic.has(list[i])) return list[i];
	}

	return AIRPORTS[0];
}

export async function confirm(options) {
	const func = Promisify(wx.showModal);
	const res = await func(options);
	if (res.confirm !== true) throw new Error(res.cancel);
}

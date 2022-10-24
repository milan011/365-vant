import {
	isURL,
	validatenull
} from '@/untils/validate.js'
import website from '@/config/website'
import {
	getUserInfo,
	logout,
	refreshToken
} from '@/api/user'
import { loginByUsername } from '@/api/user.js'
import md5 from 'js-md5'
import {
	getStore,
	setStore
} from '@/untils/store.js'
import {
	calcDate
} from '@/untils/date.js'
import {phoneLogin,wxLogin} from'@/api/user.js'
import { accountIdentity, resetAccountIdentity } from '@/api/auth.js'
let refreshTimer = null;

function startRefreshToken(dispatch) {
	refreshTimer = setInterval(() => {
		const token =
			getStore({
				name: "token",
				debug: true
			}) || {};
		const date = calcDate(token.datetime, new Date().getTime());
		if (validatenull(date)) return;
		if (date.seconds >= website.tokenTime) {
			dispatch("refreshToken")
				.then(() => {})
				.catch(() => {});
		}
	}, 10000);
}

function stopRefreshToken() {
	clearInterval(refreshTimer)
}

const user = {
	state: {
		tenantId: getStore({
			name: 'tenantId'
		}) || '',
		userInfo: getStore({
			name: 'userInfo'
		}) || [],
		userIdentity: getStore({
			name: 'userIdentity'
		}) || '',
		token: getStore({
			name: 'token'
		}) || '',
		refreshToken: getStore({
			name: 'refreshToken'
		}) || '',
		userChecked:getStore({
			name: 'setUserCheckValue'
		}) || false,
		sendTimes:getStore({//用户发送短信次数
			name:'setUserSendTimes'
		}) || 0,
	},
	actions: {
		//用户点击radio按钮
		UserCheckedBtn({commit},val){
			commit('SET_USER_CHECKED',val);
		},
		//根据用户名登录
		LoginByUsername({
			commit,
			dispatch
		}, userInfo) {
			return new Promise((resolve, reject) => {
				loginByUsername(userInfo.tenantId, userInfo.username, md5(userInfo.password), userInfo.type, userInfo.key,
					userInfo.code).then(res => {
						console.log(res,'手机号密码登录')
					const data = res.data;
					if (data.error_description) {
						uni.showToast({
							icon: "none",
							title: data.error_description,
							duration:3000
						})
					} else {
						commit('SET_TOKEN', data.access_token);
						commit('SET_REFRESH_TOKEN', data.refresh_token);
						commit('SET_TENANT_ID', data.tenant_id);
						commit('SET_USER_INFO', data);
						dispatch('refreshAuthState')
						dispatch('SetIdentity').then(res=>{
							const indentityParams = {
								id: res.data.data.id,
								nowRole: 4,
							}
							dispatch('ReSetIdentity', indentityParams)
						})
						dispatch('startRefreshNewsTimer')
						startRefreshToken();
					}
					resolve(res);
				}).catch(error => {
					reject(error);
				})
			})
		},
		//根据手机号登录
		LoginByPhone({
			commit,
			dispatch
		}, userInfo) {
			return new Promise((resolve) => {
				loginByUsername(userInfo.phone, userInfo.code).then(res => {
					const data = res.data.data;
					commit('SET_TOKEN', data);
					dispatch('SetIdentity')
					resolve();
				})
			})
		},
		//短信验证码登录
		LoginByPhoneCode({
			commit,
			dispatch
		}, userInfo) {
			return new Promise((resolve,reject)=>{
				phoneLogin(userInfo.phone,userInfo.code,userInfo.type).then(res=>{
					const data=res.data;
					if (data.error_description) {
						uni.showToast({
							icon: "none",
							title: data.error_description,
							duration:3000
						})
						return;
					}
					commit('SET_TOKEN', data.access_token);
					commit('SET_REFRESH_TOKEN', data.refresh_token);
					commit('SET_USER_INFO', data);
					dispatch('refreshAuthState')
					dispatch('SetIdentity')
					dispatch('startRefreshNewsTimer')
					startRefreshToken();
					resolve(res);
				}).catch((err)=>{
					reject(err)
				})
			})
		},
		//微信授权登录
		LoginByWX({
			commit,
			dispatch
		}, userInfo) {
			return new Promise((resolve,reject)=>{
				wxLogin(userInfo.channelAccountId,userInfo.openId,userInfo.iv,userInfo.encryptedData).then(res=>{
					const data=res.data;
					commit('SET_TOKEN', data.access_token);
					commit('SET_REFRESH_TOKEN', data.refresh_token);
					commit('SET_USER_INFO', data);
					dispatch('refreshAuthState')
					dispatch('SetIdentity')
					
					startRefreshToken();
					resolve(res);
				}).catch((err)=>{
					reject(err)
				})
			})
		},
		SetIdentity({commit, dispatch}){
			return new Promise((resolve, reject)=>{
				accountIdentity().then((res)=>{
					console.log('当前用户登录身份', res.data.data)
					// const indentityParams = {
					// 	id: res.data.data.id,
					// 	nowRole: 4,
					// }
					// this.$store.dispatch('ReSetIdentity', indentityParams)
					const { data } = res.data
					commit('SET_USER_IDENTITY', data)
					resolve(res)
				})
			}).catch((err)=>{
				reject(err)
			})
		},
		ReSetIdentity({commit, dispatch}, identityParams){
			console.log('重置身份dispath', identityParams)
			return new Promise((resolve, reject)=>{
				resetAccountIdentity(identityParams).then((res)=>{
					console.log('重置当前用户登录身份', res)
					dispatch('SetIdentity')
					resolve()
				})
			}).catch((err)=>{
				reject(err)
			})
		},
		GetUserInfo({
			commit
		}) {
			return new Promise((resolve, reject) => {
				getUserInfo().then((res) => {
					const data = res.data.data;
					resolve(data);
				}).catch(err => {
					reject(err);
				})
			})
		},
		//刷新token
		refreshToken({
			state,
			commit,
			dispatch
		}) {
			return new Promise((resolve, reject) => {
				refreshToken(state.refreshToken, state.tenantId).then(res => {
					const data = res.data;
					dispatch('refreshAuthState')
					commit('SET_TOKEN', data.access_token);
					commit('SET_REFRESH_TOKEN', data.refresh_token);
					resolve();
				}).catch(error => {
					reject(error)
				})
			})
		},
		// 登出
		LogOut({//清空银行卡信息
			dispatch,
			commit
		}) {
			return new Promise((resolve, reject) => {
				logout();
				stopRefreshToken();
				commit('SET_TOKEN', '');
				commit('SET_VIPCODE', '0');
				commit('SET_USER_INFO', '');
				commit('SET_USER_IDENTITY', {})
				//dispatch('clearAuthenication')
				resolve();
			})
		},
		//注销session
		FedLogOut({
			commit
		}) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '');
				resolve();
			})
		},
		startRefreshTokenTimer({
			state,
			commit,
			dispatch
		}) {
			if (state.token) {
				dispatch('refreshToken').then(() => {
					startRefreshToken(dispatch);
				})
			}
		},
		//更新用户接收短信次数
		UpdateUserSendTimes({
			commit
		}, data) {
			commit('SET_USER_SENDTIMES',data);
		},
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
			setStore({
				name: 'token',
				content: state.token,
				type: 'session'
			})
		},
		SET_REFRESH_TOKEN: (state, refreshToken) => {
			state.refreshToken = refreshToken;
			setStore({
				name: 'refreshToken',
				content: state.refreshToken,
				type: 'session'
			})
		},
		SET_TENANT_ID: (state, tenantId) => {
			state.tenantId = tenantId;
			setStore({
				name: 'tenantId',
				content: state.tenantId,
				type: 'session'
			})
		},
		SET_USER_INFO: (state, userInfo) => {
			state.userInfo = userInfo;
			setStore({
				name: 'userInfo',
				content: state.userInfo
			})
		},
		SET_USER_IDENTITY: (state, indentity) => {
			state.userIdentity = indentity;
			setStore({
				name: 'userIdentity',
				content: state.userIdentity
			})
		},
		SET_USER_CHECKED:(state,val)=>{
			state.userChecked=val;
			setStore({
				name: 'setUserCheckValue',
				content: state.userChecked
			})
		},
		SET_USER_SENDTIMES:(state,val)=>{
			state.sendTimes=val;
			setStore({
				name: 'setUserSendTimes',
				content: state.sendTimes
			})
		},
		
	}
}
export default user

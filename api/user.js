import {
	request
} from '@/untils/AxiosUtils.js';
import {
	getStore
} from '@/untils/store.js'
import website from "@/config/website";

export const loginByUsername = (tenantId, username, password, type, key, code) => request({
	url: '/api/jobslink-auth/oauth/token',
	method: 'post',
	headers: {
		'Login-Type': 'Type-T',
		'Captcha-Key': key,
		'Captcha-Code': code,
		'Platform-Id': getStore({
			name: 'platformId'
		}) || ''
	},
	params: {
		tenantId,
		username,
		password,
		grant_type: (website.captchaMode ? "captcha" : "password"),
		scope: "all",
		type,
		source:website.source,
		client:website.client,
	}
});

export const refreshToken = (refresh_token, tenantId) => request({
	url: '/api/jobslink-auth/oauth/token',
	method: 'post',
	headers: {
		'Tenant-Id': tenantId,
		'Login-Type': 'Type-U',
	},
	params: {
		tenantId,
		refresh_token,
		grant_type: "refresh_token",
		scope: "all",
source:website.source,
		client:website.client,
	}
});

export const getCaptcha = () => request({
	url: '/api/jobslink-auth/oauth/captcha',
	method: 'get'
});

export const logout = () => request({
	url: '/api/jobslink-auth/oauth/logout',
	method: 'get'
});

export const getUserInfo = () => request({
	url: '/api/jobslink-auth/oauth/user-info',
	method: 'get'
});

export const sendLogs = (list) => request({
	url: '/api/jobslink-auth/oauth/logout',
	method: 'post',
	data: list
});

export const clearCache = () => request({
	url: '/api/jobslink-auth/oauth/clear-cache',
	method: 'get'
});
export const wxLoginCode = (code, channelAccountId) => request({
	url: '/api/jobslink-user/front/account/wx-auth',
	method: 'get',
	params: {
		code,
		channelAccountId
	}
});
export const wxLogin = (channelAccountId, openId, iv, encryptedData) =>
	request({
		url: '/api/jobslink-auth/oauth/token',
		headers: {
			'Login-Type': 'Type-U',
		},
		method: 'post',
		params: {
			channelAccountId,
			openId,
			iv,
			encryptedData,
			grant_type: 'wechat_phone',
			source:website.source,
			client:website.client,
		}
	});
export const phoneLogin_GetCode = (mobile, type) => request({
	url: '/api/jobslink-user/front/account/smsValidateCode',
	method: 'get',
	params: {
		mobile,
		type
	}
});
export const phoneLogin = (mobile, smsCode, type) => request({
	url: '/api/jobslink-auth/oauth/token',
	method: 'post',
	headers: {
		'Login-Type': 'Type-U',

		'Platform-Id': getStore({
			name: 'platformId'
		}) || ''
	},
	params: {
		mobile,
		smsCode,
		grant_type: 'sms_code',
		scope: "all",
		type,
		source:website.source,
		client:website.client
	}
});
export const whetherSetPwd = (mobile) => request({
	url: '/api/jobslink-user/account/isValidPassword',
	method: 'get',
	params: {
		mobile
	}
});

export const identity = (mobile) => request({
	url: '/api/jobslink-auth/oauth/token',
	method: 'post',
	headers: {
		'Login-Type': 'Type-T',
		'Platform-Id': getStore({
			name: 'platformId'
		}) || ''
	},
	params: {
		grant_type: 'switch_role',
		scope: 'all',
		type: 'account'
	}
});
export const identitySec = (mobile) => request({
	url: '/api/jobslink-auth/oauth/token',
	method: 'post',
	headers: {
		'Login-Type': 'Type-U',
		'Platform-Id': getStore({
			name: 'platformId'
		}) || ''
	},
	params: {
		grant_type: 'switch_role',
		scope: 'all',
		type: 'account'
	}
});

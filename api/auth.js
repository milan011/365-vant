import {
	request
} from '@/untils/AxiosUtils.js';
import website from "@/config/website";

const authUrl = '/api/jobslink-user/user/auth/auth'

export const findAuth = () => request({
	url: '/api/jobslink-user/user/find',
	method: 'get'
});

export const cheakValue = () => request({
	url: authUrl,
	method: 'post',
	data: {
		cheakvalue: 1,
		bakvalue: 0
	}
});

export const realName = (realName, idNumber) => request({
	url: authUrl,
	method: 'post',
	data: {
		cheakvalue: 2,
		realName,
		idNumber
	}
});

export const bank = (bankName, realName, cardNumber, def, id) => request({
	url: authUrl,
	method: 'post',
	data: {
		cheakvalue: 3,
		bankName,
		cardNumber,
		realName,
		def,
		id
	}
});

export const insure = (bakvalue) => request({
	url: authUrl,
	method: 'post',
	data: {
		cheakvalue: 4,
		bakvalue
	}
});

// 获得灵工的电子签名
// 返回为空时该用户未采集签名
export const isGather = () => request({
	url: "/api/jobslink-doc/docUserSeal/isGather",
	method: 'get',
});

// 个人端签名采集
export const signGather = (signSrcUrl, password, confirmPassword) => request({
	url: "/api/jobslink-doc/docUserSeal/signGather",
	method: 'post',
	data: {
		signSrcUrl,
		password,
		confirmPassword
	}
});

// 获取短信接口
export const sendValidate = (mobile) => request({
	url: "/api/jobslink-doc/docUserCert/resetPass/sendValidate",
	method: 'get',
	data: {
		mobile
	}
});
// 密码重置接口
export const resetPass = (mobile, code, password) => request({
	url: "/api/jobslink-doc/docUserCert/resetPass",
	method: 'post',
	headers: {
		'SCaptcha-Key': mobile,
		'SCaptcha-Code': code,
		'password': password
	}
});
// 我的合同
export const contractList = (params) => request({
	url: "/api/jobslink-doc/contract/personal/contractList",
	method: 'get',
	data: params
});
// 签名密码  /jobslink-doc/docUserCert/checkPass
export const checkPass = (params) => request({
	url: "/api/jobslink-doc/docUserCert/checkPass",
	method: 'get',
	data: params
});
// 返回的是base64格式的pdf
export const viewContract = (params) => request({
	url: "/api/jobslink-doc/contract/viewContract",
	method: 'get',
	data: params
});

//新实名认证api
export const newCertification = (bakvalue, realName, idNumber, cardNumber, bankCode,def,bankName) => request({
	url: '/api/jobslink-user/user/auth/authNew',
	method: 'post',
	data: {
		bakvalue,
		realName,
		idNumber,
		cardNumber,
		bankCode,
		def,
		bankName
	}
});
// 实名认证校验
export const roleValid = (account) => request({
	url: "/api/jobslink-user/account/roleValid",
	method: 'get',
	data: {account}
});
//登录用户身份
export const accountIdentity = () => request({
	url: "/api/jobslink-user/user/t-user/relation/getUserTUserRelation",
	method: 'get',
});

//重置登录用户身份
export const resetAccountIdentity = (data) => request({
	url: "/api/jobslink-user/user/t-user/relation/updateUserTUserRelation",
	method: 'post',
	data
});
// 个人灵工注册/登录位置信息
export const newestLocation = (lat,lon) => request({
	url: "/api/jobslink-user/userPosition/newestLocation",
	method: 'post',
	data:{
		lat,
		lon
	}
});

// 我的服务合同
export const docservicecontract = (params) => request({
	url: "/api/jobslink-doc/docservicecontract/companylist",
	method: 'get',
	data:params
});
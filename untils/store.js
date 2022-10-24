import website from '@/config/website'

const keyName = website.key + '-';

export const getStore = (params = {}) => {
	let {
		name,
		debug
	} = params;
	name = keyName + name
	const obj = uni.getStorageSync(name)

	if (debug) {
		return obj;
	}
	return obj.content
}

export const setStore = (params = {}) => {
	let {
		name,
		content,
		type,
	} = params;
	name = keyName + name
	let obj = {
		dataType: typeof(content),
		content: content,
		type: type,
		datetime: new Date().getTime()
	}
	return uni.setStorageSync(name, obj)
}

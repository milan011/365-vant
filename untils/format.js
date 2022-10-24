import Decimal from 'decimal.js'

/**
 * 日期格式化
 */
export function dateFormat(date, format = 'yyyy-MM-dd') {
	if(typeof(date) === 'string'){
		date = date.replace(/\-/g, "/")
	}
	format = format || 'yyyy-MM-dd hh:mm:ss';
	date = new Date(date);
	if (date !== 'Invalid Date') {
		let o = {
			"M+": date.getMonth() + 1, //month
			"d+": date.getDate(), //day
			"h+": date.getHours(), //hour
			"m+": date.getMinutes(), //minute
			"s+": date.getSeconds(), //second
			"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
			"S": date.getMilliseconds() //millisecond
		}
		if (/(y+)/.test(format)) 
			format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (let k in o)
			if (new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		return format;
	}
	return '';
}

export function phoneFilter(val) {
	return val ? val.substring(0, 3) + '****' + val.substring(7) : ''
}

export function idNumberFilter(val) {
	return val.substring(0, 3) + '************' + val.substring(14)
}

export function bankCardFilter(val) {
	return val.substring(0, 4) + ' **** **** ' + val.substring(val.length - 4)
}

export function nameFilter(val) {
	console.log(val, val.length)
	if(val.length == 2) {
		return '*' + val.substring(val.length - 1)
	} else if(val.length == 3) {
		return '**' + val.substring(val.length - 1)
	} else if(val.length == 4) {
		return '***' + val.substring(val.length - 1)
	} else {
		return val
	}
	// return val.substring(0, 4) + ' **** **** ' + val.substring(val.length - 4)
}

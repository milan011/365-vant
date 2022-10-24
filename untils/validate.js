/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
	const valid_map = ['admin', 'editor']
	return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
	const urlregex =
		/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
	return urlregex.test(textval)
}

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
	return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
	return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
	return /^http[s]?:\/\/.*/.test(s)
}

/* 小写字母*/
export function validateLowerCase(str) {
	const reg = /^[a-z]+$/
	return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
	const reg = /^[A-Z]+$/
	return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
	const reg = /^[A-Za-z]+$/
	return reg.test(str)
}

/*验证pad还是pc*/
export const vaildatePc = function() {
	const userAgentInfo = navigator.userAgent;
	const Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	let flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
	const re =
		/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

/**
 * 判断身份证号码
 */
export function cardid(code) {
	let list = [];
	let result = true;
	let msg = '';
	var city = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江 ",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北 ",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏 ",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外 "
	};
	if (!validatenull(code)) {
		if (code.length == 18) {
			if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
				msg = "证件号码格式错误";
			} else if (!city[code.substr(0, 2)]) {
				msg = "地址编码错误";
			} else {
				//18位身份证需要验证最后一位校验位
				code = code.split('');
				//∑(ai×Wi)(mod 11)
				//加权因子
				var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
				//校验位
				var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x'];
				var sum = 0;
				var ai = 0;
				var wi = 0;
				for (var i = 0; i < 17; i++) {
					ai = code[i];
					wi = factor[i];
					sum += ai * wi;
				}
				if (parity[sum % 11] != code[17]) {
					msg = "证件号码校验位错误";
				} else {
					result = false;
				}

			}
		} else {
			msg = "证件号码长度不为18位";
		}

	} else {
		msg = "证件号码不能为空";
	}
	list.push(result);
	list.push(msg);
	return list;
}

/**
 * 判断手机号码是否正确
 */
export function isvalidatemobile(phone) {
	let list = [];
	let result = true;
	let msg = '';
	var isPhone = new RegExp('^0\d{2,3}-?\d{7,8}$');
	//增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]  
	if (!validatenull(phone)) {
		if (phone.length == 11) {
			if (isPhone.test(phone)) {
				msg = '手机号码格式不正确';
			} else {
				result = false;
			}
		} else {
			msg = '手机号码长度不为11位';
		}
	} else {
		msg = '手机号码不能为空';
	}
	list.push(result);
	list.push(msg);
	return list;
}

/**
 * 判断姓名是否正确
 */
export function validatename(name) {
	var regName = /^[\u4e00-\u9fa5]{2,4}$/;
	if (!regName.test(name)) return false;
	return true;
}

/**
 * 判断是否为整数
 */
export function validatenumber(num) {
	return typeof(num) === 'number';
}

/**
 * 判断是否为整数
 */
export function validatenum(num, type) {
	let regName = /[^\d.]/g;
	if (type == 1) {
		if (!regName.test(num)) return false;
	} else if (type == 2) {
		regName = /[^\d]/g;
		if (!regName.test(num)) return false;
	}
	return true;
}

/**
 * 判断是否为正整数
 */
export function validatePositiveInteger(num, min=0, max=Infinity ){
	var re = /^[0-9]+$/ ;
	return re.test(num) && (num >= min) && (num <= max)
}

/**
 * 判断是否为小数
 */
export function validatePositiveDecimal(num, min=0, max=Infinity ){
	var re = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/ ;
	return re.test(num) && (num >= min) && (num <= max)
}

/**
 * 判断是否为小数
 */
export function validatenumord(num, type) {
	let regName = /[^\d.]/g;
	if (type == 1) {
		if (!regName.test(num)) return false;
	} else if (type == 2) {
		regName = /[^\d.]/g;
		if (!regName.test(num)) return false;
	}
	return true;
}

/**
 * 判断是否为空
 */
export function validatenull(val) {
	if (typeof val == 'boolean') {
		return false;
	}
	if (typeof val == 'number') {
		return false;
	}
	if (val instanceof Array) {
		if (val.length == 0) return true;
	} else if (val instanceof Object) {
		if (JSON.stringify(val) === '{}') return true;
	} else {
		if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') 
			return true;
		return false;
	}
	return false;
}

/*判断身份证*/
// 每位加权因子
var powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2']

// 第18位校检码
var parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

var provinceAndCitys = {
	11: '北京',
	12: '天津',
	13: '河北',
	14: '山西',
	15: '内蒙古',
	21: '辽宁',
	22: '吉林',
	23: '黑龙江',
	31: '上海',
	32: '江苏',
	33: '浙江',
	34: '安徽',
	35: '福建',
	36: '江西',
	37: '山东',
	41: '河南',
	42: '湖北',
	43: '湖南',
	44: '广东',
	45: '广西',
	46: '海南',
	50: '重庆',
	51: '四川',
	52: '贵州',
	53: '云南',
	54: '西藏',
	61: '陕西',
	62: '甘肃',
	63: '青海',
	64: '宁夏',
	65: '新疆',
	71: '台湾',
	81: '香港',
	82: '澳门',
	91: '国外'
}

// 校验18位的身份证号码
export function check18IdCardNo(idCardNo) {
	// 18位身份证号码的基本格式校验
	var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo)
	if (!check) return false
	// 校验地址码
	var addressCode = idCardNo.substring(0, 6)
	check = checkAddressCode(addressCode)
	if (!check) return false
	// 校验日期码
	var birDayCode = idCardNo.substring(6, 14)
	check = checkBirthDayCode(birDayCode)
	if (!check) return false
	// 验证校检码
	return checkParityBit(idCardNo)
}

// 根据身份证获取年龄
export function getAgeFromIdCard(idCard){
    let age = 0;
    let birthYear, birthMonth, birthDay;
    if(idCard) {
        const reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
        if(reg.test(idCard)){
            if(idCard.length == 15) {
                const birthStr = idCard.substring(6, 12);
                birthYear = "19" + birthStr.substring(0, 2);
                birthMonth = birthStr.substring(2, 4);
                birthDay = birthStr.substring(4, 6);
            } else if (idCard.length == 18) {
                birthYear = idCard.substring(6, 10);
                birthMonth = idCard.substring(10, 12);
                birthDay = idCard.substring(12, 14);
            }
            const nowDate = new Date();
            const nowYear = nowDate.getFullYear();
            const nowMonth = nowDate.getMonth() + 1;
            const nowDay = nowDate.getDate();
            age = nowYear - birthYear;
            if(nowMonth < birthMonth || (nowMonth == birthMonth && nowDay < birthDay)){
                age--;
            }
        }
    }
    return age;
}

// 校验地址码
function checkAddressCode(addressCode) {
	var check = /^[1-9]\d{5}$/.test(addressCode)
	if (!check) return false
	if (provinceAndCitys[parseInt(addressCode.substring(0, 2))]) {
		return true
	} else {
		return false
	}
}

// 校验日期码
function checkBirthDayCode(birDayCode) {
	var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode)
	if (!check) return false
	var yyyy = parseInt(birDayCode.substring(0, 4), 10)
	var mm = parseInt(birDayCode.substring(4, 6), 10)
	var dd = parseInt(birDayCode.substring(6), 10)
	var xdata = new Date(yyyy, mm - 1, dd)
	if (xdata > new Date()) {
		return false
	} else if ((xdata.getFullYear() === yyyy) && (xdata.getMonth() === mm - 1) && (xdata.getDate() === dd)) {
		return true
	} else {
		return false
	}
}

// 验证校检码
function checkParityBit(idCardNo) {
	var parityBit = idCardNo.charAt(17).toUpperCase()
	if (getParityBit(idCardNo) === parityBit) {
		return true
	} else {
		return false
	}
}

// 计算校检码
function getParityBit(idCardNo) {
	var id17 = idCardNo.substring(0, 17)
	// 加权
	var power = 0
	for (let i = 0; i < 17; i++) {
		power += parseInt(id17.charAt(i), 10) * parseInt(powers[i])
	}
	// 取模
	var mod = power % 11
	return parityBit[mod]
}

// 验证excel文件格式
export function isExcel(file) {
	const isXlsx =
		file.type ===
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
		file.type === "application/vnd.ms-excel" ||
		file.type === "application/x-excel" ||
		file.name.indexOf("xls") > -1 ||
		file.name.indexOf("xlsx") > -1;

	return isXlsx;
}

// 验证密码
export function password(psw) {
	var reg = new RegExp('^.{6,20}$');
	return !reg.test(psw);
}
/**
 * 判断密码 包含8-20位字母、数字、特殊符号（/@$!%*#_~?&）全部包含的组合
 */
export function checkPassword(psw) {
  var reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[/@$!%*#_~?&,.])[a-zA-Z\d/@$!%*#_~?&,.]{8,20}$/;
  return !reg.test(psw);
}

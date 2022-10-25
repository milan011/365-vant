/**
 * 截取字符串,末尾加...
 */
export function longStringDell(stringVal = '', dellLenght = 0) {
	const stringLength = Array.from(stringVal).length
	let returnString = ''

	if (stringLength <= dellLenght) return stringVal
	returnString = stringVal.slice(0, dellLenght)

	return `${returnString}...`
}

/**
 * 手机号码脱敏
 */
export function getPasPhone(phoneNumber) {
	return phoneNumber.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2")
}
/**
 * 获取用户定位信息
 */
export function getUserLocation() {
	return new Promise((resolve, reject) => {
		uni.getLocation({
			type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			success: function(res) {
				console.log('UNI定位success', res)
				var params = {
					lat: res.latitude,
					lon: res.longitude
				}
				resolve(params)
			},
			fail: function(err) {
				console.log('UNI定位fail', err)
				resolve({})
			}
		})
	})
}

// 个人灵工查看个人招工
export function formatTaskStatuspeo(task) {
    if (task.status == 'INVALID') {
        return "已失效";
    } else {
        return '已报名';
    }
}

// 企业视角
export function formatTaskStatusCompany(task) {
    if (task.taskStatus == 1) {
        return "招工中";
    } else if (task.taskStatus == 2) {
        return "任务中";
    } else if (task.taskStatus == 3) {
        return "已失效";
    } 
	else if (task.taskStatus == 4) {
		return "已完成";
	} 
	else {
        return '未知';
    }
}

// 任务的状态
export function formatTaskStatus(task) {
	if (task.isCancel == 1) {
		if (task.taskStatus == 3) {
			return '已失效';
		} else {
			return '停止招工';
		}
	} else {
		if (task.taskStatus == 1) {
			return "招工中";
		} else if (task.taskStatus == 2) {
			return "任务中";
		} else if (task.taskStatus == 3) {
			return "已失效";
		} else if (task.taskStatus == 4) {
			return "已完成";
		}
	}
	return "未知";
}

// 个人活儿状态
export function formatTaskStatuspeos(statusObj) {
	console.log('status', statusObj);
	if (statusObj.status) {
		if (statusObj.status == 'INVALID') {
		    return "已失效";
		} else {
		    return '已报名';
		}
	} else {
		const statusList = ["招工中", "任务中", "已失效", "已完成"];
		if (statusObj.taskStatus >= 1 && statusObj.taskStatus <= 4) {
			return statusList[statusObj.taskStatus - 1];
		} else {
			return "未知";
		}
	}
}
 
/*
格式化灵工的任务状态：
- 已报名: ENROLLED; NO_EMPLOY; EMPLOYED
- 任务中: BEGIN
- 已完成: FINISH
- 已失效: INVALID
*/ 
export function formatTaskStatusWorker(statusObj) {
	if(statusObj.taskStatus == 3) {
		return "已失效";
	} else {
		if(["ENROLLED", "NO_EMPLOY", "EMPLOYED"].includes(statusObj.status)){
			return "已报名";
		} else if ("BEGIN" == statusObj.status) {
			return "任务中";
		} else if ("FINISH" == statusObj.status) {
			return "已完成";
		} else if ("INVALID" == statusObj.status) {
			return "已失效";
		} else {
			const statusList = ["招工中", "任务中", "已失效", "已完成"];
			if (statusObj.taskStatus >= 1 && statusObj.taskStatus <= 4) {
				return statusList[statusObj.taskStatus - 1];
			} else {
				return "未知";
			}
		}
	}
} 

// 格式化工资单位
// 参考工资单位类型(1.天, 2.小时)
export function formatWageUnit(task) {
	if (task.wageUnitCategory == 1) {
		return "人/天";
	} else if (task.wageUnitCategory == 2) {
		return "人/时";
	} else if (task.wageUnitCategory == 3) {
		return "次";
	}
	return "";
}

// 格式化失效原因
// RECRUIT_CANCEL-招工方取消;REVIEW_BACK-审核驳回;NOT_EMPLOYED-任务开始未被录用
export function formatFailMsg(task) {
	if (task.invalidReasonType == "RECRUIT_CANCEL") {
		return "招工方取消";
	} else if (task.invalidReasonType == "REVIEW_BACK") {
		return "审核驳回";
	} else if (task.invalidReasonType == "NOT_EMPLOYED") {
		return "任务开始未被录用";
	}
	return "未知";
}

// -防抖
export function debounce(fn, wait) {
	let delay = wait || 500
	let timer
	return function() {
		let args = arguments;
		if (timer) {
			clearTimeout(timer)
			// console.log('拦截')
		}
		let callNow = !timer
		timer = setTimeout(() => {
			// console.log('发送')
			timer = null
		}, delay)
		if (callNow) fn.apply(this, args)
	}
}

// -节流
export function throttle(fn, wait) {
	let delay = wait || 500
	let timer = null
	return function() {
		if (timer) {
			// console.log('拦截');
			return
		}
		timer = setTimeout(() => {
			// console.log('发送');
			fn.apply(this, arguments)
			timer = null
		}, delay)
	}
}

// 根据生日获取年龄
export const getAgeByBirthday = (birthdayStr) => {
	console.log("生日", birthdayStr);
	const birthDate = new Date(birthdayStr);
	const birthYear = birthDate.getFullYear();
	const birthMonth = birthDate.getMonth() + 1;
	const birthDay = birthDate.getDate();
	console.log("生日YMD", birthYear, birthMonth, birthDay);
	const nowDate = new Date();
	const nowYear = nowDate.getFullYear();
	const nowMonth = nowDate.getMonth() + 1;
	const nowDay = nowDate.getDate();
	let age = nowYear - birthYear;
	if (nowMonth < birthMonth || (nowMonth == birthMonth && nowDay < birthDay)) {
		age--;
	}
	return age;
}

// 以 obj1 为模板，提取 obj2 中的属性
export const copyObjProps = (obj1, obj2) => {
	for(const key of Object.keys(obj1)) {
		if(obj2.hasOwnProperty(key)) {
			obj1[key] = obj2[key];
		}
	}
	return obj1;
}
//自定义setData
export function setData(obj){
	
		let that = this;    
		let keys = [];    
		let val,data;    
		Object.keys(obj).forEach(function(key){    
			keys = key.split('.');    
			val = obj[key];    
			data = that.$data;    
			keys.forEach(function(key2,index){    
	     if(index+1 == keys.length){    
	         that.$set(data,key2,val);    
	     }else{    
	         if(!data[key2]){    
	            that.$set(data,key2,{});    
	         }    
	     }    
	     data = data[key2];    
			})    
		}) 
}
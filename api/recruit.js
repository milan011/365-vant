// 招工接口
import {
    request
} from '@/untils/AxiosUtils.js';
import website from "@/config/website";


// 企业审核状态
export const companyStatus = (phone) => request({
    url: '/api/jobslink-tenant/front/companyStatus',
    method: 'get',
    data: {
        phone
    }
});

// 招工方任务统计
export const getTaskStatus = (taskNo) => request({
    url: "/api/jobslink-task/taskApplyFront/user/recruit/task/statistics",
    method: "get",
    params: {
        taskNo
    }
});

// 个人灵工任务统计
export const getPersonStatistics = (taskType) => request({
    url: "/api/jobslink-task/taskApplyFront/worker/task/statistics",
    method: "post",
	data:{
		taskType
	}
});

// 个人招工任务列表最新两条统计
export const getNewTwoTasks = (newTaskNum) => request({
    url: "/api/jobslink-task/task/recruitment/task/newestTwolist",
    method: "post",
    data: {
        newTaskNum
    }
});


// 个人灵工任务统计
export const companyStatistics = (taskNo) => request({
    url: "/api/jobslink-task/taskApplyFront/company/recruit/task/statistics",
    method: "get",
	params: {
	    taskNo
	}
});

// 个人招工任务列表最新两条统计
export const getnewList = (newTaskNum,userType) => request({
    url: "/api/jobslink-task/task/recruit/company/newList",
    method: "post",
    data: {
        newTaskNum,
		userType
    }
});

// 个人活儿列表
// userType 用户类型 1.企业，2.个人招工
// status 任务状态: 1-招工中 2-任务中 3-已失效 4-已完成
export const getPersonTaskList = (userType, userTUserId, current, size, status) => request({
    url: "/api/jobslink-task/task/recruitment/taskStatus/list",
    method: "post",
    data: {
        userType,
		userTUserId,
        current,
        size,
        status
    }
})

// 优选灵工
export const psychicList = (params) => request({
    url: "/api/jobslink-user/workCertificate/pageWorkerForC",
    method: "get",
    params: {...params}
})

// 个人招工查询单个状态
export const singleSituation = ( status , taskNo , current , size , taskWagesStatus , recruitEvaluationStatus) => request({
    url: "/api/jobslink-task/taskApplyFront/user/recruit/task/singleSituation",
    method: "post",
    data: {
		status,
        taskNo,
		current,
		size,
		taskWagesStatus,
		recruitEvaluationStatus
		
    }
})
// 个人招工任务录用/验收/暂不录用(批量)

export const updateStatus = ( taskNo,status,userTUserIds ) => request({
    url: "/api/jobslink-task/taskApplyFront/user/recruit/task/updateStatus",
    method: "post",
    data:{taskNo,status,userTUserIds}
})

// 评价列表
export const evaList = ( taskNo , flag , current , size ) => request({
    url: "/api/jobslink-task/taskApply/evaList",
    method: "get",
    params: {
		taskNo,
		flag,
		current,
		size
	}
})
// 招工对灵工评价
export const add = ( shortTermUserId , userName , taskNo , evaluation , stars ) => request({
    url: "/api/jobslink-task/userEvaluation/add",
    method: "post",
    data: {
		shortTermUserId,
		userName,
		taskNo,
		evaluation,
		stars,
	}
})

// 查看招工方对具体任务具体人评价
export const detail = ( userId , missionNo ) => request({
    url: "/api/jobslink-task/userEvaluation/detail",
    method: "get",
    params: {
		userId,
		missionNo,
	}
})
// 提交异议接口
export const commit = ( taskNo , taskName , content , initiatorPhone , initiatorName ,  ) => request({
    url: "/api/jobslink-task/complaint/commit",
    method: "post",
    data: {
		taskNo,
		taskName,
		content,
		initiatorPhone,
		initiatorName
	}
})
// 根据聚合id查询工作证详情
export const InfoByUserTUserId = ( userTUserId ) => request({
    url: "/api/jobslink-user/workCertificate/InfoByUserTUserId",
    method: "get",
    params: {
		userTUserId
	}
})
// 企业招工任务列表
export const companyList = (status, taskSignStatus , taskPayStatus , current, size) => request({
    url: "/api/jobslink-task/task/recruit/company/taskStatus/list",
    method: "post",
    data: {
		status,
        taskSignStatus, 
		taskPayStatus,
        current,
        size
    }
})

// 判断企业是否设置签章密码
export const hasPass = () => request({
    url: "/api/jobslink-doc/company/cert/hasPass",
    method: "get",
})

// 判断灵工是否设置签名密码
export const hasUserPass = () => request({
    url: "/api/jobslink-doc/docUserCert/hasPass",
    method: "get"
})

// 电子签章
export const docCompanySeal = () => request({
    url: "/api/jobslink-doc/docCompanySeal/company/details",
    method: "get",
})
// 设置签章密码
export const signGather = (params) => request({
    url: "/api/jobslink-doc/docUserSeal/signGather",
    method: "post",
	data:{
		...params
	}
})
// 合同列表
export const userContractListVO = (current, size) => request({
    url: "/api/jobslink-doc/contract/userContractListVO",
    method: "GET",
	params:{
		current,
		size
	}
})
// 服务合同列表
export const serviceContractlist = (current, size) => request({
    url: "/api/jobslink-doc/docservicecontract/companylist",
    method: "GET",
	params:{
		current,
		size
	}
})
// 设置密码（重置密码）
export const resetPass = (params) => request({
    url: "/api/jobslink-doc/company/cert/resetPass",
    method: "POST",
	params:{
		...params
	}
})
// 录用确认列表
// 
export const confirmList = (ids) => request({
    url: "/api/jobslink-task/task/recruit/company/confirmList",
    method: "POST",
	data:{
		ids
	}
})

// 企业签章密码校验
export const checkPass = (pass) => request({
    url: "/api/jobslink-doc/company/cert/checkPass",
    method: "get",
	params:{
		pass
	}
})

// 企业签署

export const batchEmployment = (userIds,taskNo,password) => request({
    url: "/api/jobslink-doc/contract/batchEmployment",
    method: "post",
	data:{
		userIds,
		taskNo,
		password
	}
})
// 企业招工录用
// export const confirmList = (userIds,taskNo,password) => request({
//     url: "/api/jobslink-task/task/recruit/company/confirmList",
//     method: "post",
// 	data:{
// 		userIds,
// 		taskNo,
// 		password
// 	}
// })

// 确认录用
export const check = (taskNo,applyUserId) => request({
    url: "/api/jobslink-task/order/check",
    method: "get",
	data:{
		taskNo,
		applyUserId
	}
})
// 个人招工是否可以升级企业招工校验
export const valid = () => request({
    url: "/api/jobslink-task/taskApply/recruit/upgrade/valid",
    method: "post",
})
// 修改劳动报酬

export const salary = (id,taskNo,taskSchedule,scheduleUnitCategory,wage,wageUnitCategory,) => request({
    url: "/api/jobslink-task/task/company/edit/salary",
    method: "post",
	data:{
		id,
		taskNo,
		taskSchedule,
		scheduleUnitCategory,
		wage,
		wageUnitCategory,
	}
})
// 企业是否设置发票
export const judgeInvoice = () => request({
    url: "/api/jobslink-tenant/fp/title/judgeInvoice",
    method: "get",
})
// 企业招工方 查看协议
export const browseContract = (applyUserId,taskNo,signStatus) => request({
    url: "/api/jobslink-doc/contract/browseContract",
    method: "post",
	data:{
		applyUserId,
		taskNo,
		signStatus
	}
})
// 查询服务费、劳动报酬是否正常
export const payValid = (type) => request({
    url: "/api/jobslink-task/task/serviceFee/pay/valid/"+type,
    method: "get"
})
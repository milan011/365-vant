function statusJson(data) {
    // 未申请状态
    if(data.applyStatus == 0){
    	this.employcardStatus = 1
    }
    // 审核中
    else if(data.applyStatus == 1 && data.reviewStatus == 1){
    	console.log('-----')
    	this.employcardStatus = 2
    }
	// 已停用
	else if(data.status == 2 && data.reviewStatus == 2){
		this.employcardStatus = 5
	}
    // 审核通过
    else if(data.applyStatus == 1 && data.reviewStatus == 2){
    	this.employcardStatus = 4
    }
    // 已驳回
    else if(data.applyStatus == 1 && data.reviewStatus == 3){
    	this.employcardStatus = 3
    }

    switch ( this.employcardStatus ){
    	case 1:
    		this.employcardText = '未领取'
    		break;
    	case 2:
    		this.employcardText = '审核中'
    		break;
    	case 3:
    		this.employcardText = '审核驳回'
    		break;
    	case 4:
    		this.employcardText = '已通过'
    		break;
    	case 5:
    		this.employcardText = '已停用'
    		break;
    }
	return this.employcardStatus
}

//将方法暴露出来
export {
  statusJson
}

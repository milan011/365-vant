const getters = {
    language: state => state.common.language,
    website: state => state.common.website,
    userInfo: state => state.user.userInfo,
    userIdentity: state => state.user.userIdentity,
    userChecked: state => state.user.userChecked,
    sendTimes: state => state.user.sendTimes, //接收短信的次数
}

export default getters

/**
 * 全局配置文件
 */
export default {
	title: 'jobslink',
	logo: 'S',
	key: 'jobslink', //配置主键,目前用于存储
	indexTitle: 'Jobslink Admin',
	clientId: 'jobslink_clientA', // 客户端id
	clientSecret: 'jobslink_clientA_secret', // 客户端密钥
	clientcompanyId: 'jobslink_manager', // 客户端id
	clientcompanySecret: 'jobslink_manager_secret', // 客户端密钥
	tenantMode: true, // 是否开启租户模式
	tenantId: '000000', // 管理组租户编号
	captchaMode: true, // 是否开启验证码模式
	tokenName: 'Jobslink-Auth',
	tokenTime: 3000,
	newsRefreshTime: 600000, // 消息刷新时间
	//http的status默认放行不才用统一处理的,
	statusWhiteList: [],
	source:'jobslink-flexible-employment',
	client:'applet' //H5 , applet
}

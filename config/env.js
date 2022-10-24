/* ---------------------------------------------- */ 
// 微信小程序API正式环境：
// staticImgUrl正式环境:
/* ---------------------------------------------- */

// 小程序 channelAccountId
let channelAccountId = 1;
// 图片资源1
let imgUrl = "https://wxapi.jlhrms.cn";
// 微信小程序API域名
let baseUrl = '';
// H5域名，预览PDF页
let pdfBaseUrl = '';
// 图片资源2
// https://jlfiles-test.oss-cn-zhangjiakou.aliyuncs.com/jyy-wx
// https://wxapi.jlhrms.cn/api/jyy-wx
let staticImgUrl = "";

const env = process.env;

if (env.NODE_ENV == 'development') { // HBuilderX运行版
	if (env.VUE_APP_PLATFORM === 'mp-weixin') {
		baseUrl = "http://192.168.22.204";
    pdfBaseUrl = "http://192.168.22.204:1897";
		staticImgUrl = "https://jlfiles-test.oss-cn-zhangjiakou.aliyuncs.com/jyy-wx";
		
		/* baseUrl = "https://jyywxapi.jobslink.cn";
		pdfBaseUrl = "https://pdf.jobslink.cn";
		staticImgUrl = 'https://jyyfiles.oss-cn-zhangjiakou.aliyuncs.com/jyy-wx'; */
	}
} else if (env.NODE_ENV == 'production') { // HBuilderX发行版
	if (env.VUE_APP_PLATFORM === 'mp-weixin') {
		baseUrl = "https://jyywxapi.jobslink.cn";
        pdfBaseUrl = "https://pdf.jobslink.cn";
		staticImgUrl = 'https://jyyfiles.oss-cn-zhangjiakou.aliyuncs.com/jyy-wx';
		
		// baseUrl = "http://192.168.22.204";
		// pdfBaseUrl = "http://192.168.22.204:1897";
		// staticImgUrl = "https://jlfiles-test.oss-cn-zhangjiakou.aliyuncs.com/jyy-wx";
	}
}

console.log('=== baseUrl ===', baseUrl);

export {
	baseUrl,
	imgUrl,
	staticImgUrl,
  pdfBaseUrl,
	channelAccountId
}

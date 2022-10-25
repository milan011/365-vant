const UniModuleRouter = require("@ctrlc/uni-module-pages");
const uniRouter = new UniModuleRouter({
  // 项目定义的路由目录
  dir: "./router",
  // uni_modules插件路由文件,
  /* uniModules: [
    {
      // id:插件名称,
      id: "uni-demo",
      // path:相对插件根路径的定义的路由文件路径
      path: "router.json",
    },
  ], */
});

module.exports = (pagesJson, loader) => {
  return uniRouter.loader(pagesJson, loader);
};
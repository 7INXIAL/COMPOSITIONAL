export default {
  description: "创建一个模块",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "模块名称",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/modules/{{name}}/locale/zh_CN.ts",
      templateFile: "plop-templates/module/locale/zh_CN.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{name}}/locale/en_US.ts",
      templateFile: "plop-templates/module/locale/en_US.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{name}}/views/index.vue",
      templateFile: "plop-templates/module/views/index.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{name}}/route.ts",
      templateFile: "plop-templates/module/route.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{name}}/service.ts",
      templateFile: "plop-templates/module/service.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{name}}/store.ts",
      templateFile: "plop-templates/module/store.hbs",
    },
  ],
};

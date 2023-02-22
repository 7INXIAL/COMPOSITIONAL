export default {
  description: "创建一个公共组件",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "组件名称",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/{{name}}/index.vue",
      templateFile: "plop-templates/component/index.hbs",
    },
  ],
};

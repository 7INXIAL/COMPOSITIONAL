import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];

interface Files {
  [key: string]: RouteRecordRaw[];
}

// 动态引入
const files: Files = import.meta.glob("./modules/*/route.ts", {
  eager: true,
  import: "default",
});

// 读取文件
for (const url in files) {
  files[url].forEach((_) => {
    routes.push(_);
  });
}

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;

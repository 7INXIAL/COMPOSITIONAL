import { createI18n } from "vue-i18n";
import { Ref, ref } from "vue";

interface MESSAGES {
  [key: string]: {
    [key: string]: object;
  };
}
const messages: MESSAGES = {};
// 读取文件
const files: { [key: string]: object } = import.meta.glob(
  "../src/modules/*/locale/*.ts",
  {
    eager: true,
    import: "default",
  }
);

// 遍历文件
for (const url in files) {
  // 获取 模块/语言
  const [name, locale] = url
    .replace(/^\.\.\/src|\/modules\/|\/locale|\.ts/g, "")
    .split("/");

  if (name && locale) {
    messages[locale] = messages[locale] || {};
    messages[locale][name] = files[url];
  }
}

// 语言
const locale = ref("");

const initLanguage = () => {
  // 读取存储 或者 初始化
  locale.value = sessionStorage.getItem("locale") || navigator.language;
  // 初始化后, 如没有相应配置, 默认使用中文
  if (locale.value !== "zh_CN" && locale.value !== "en_US") {
    locale.value = "zh_CN";
  }
  // 设置持久化
  sessionStorage.setItem("locale", locale.value);
};

// 初始化
initLanguage();
// 实例化
const i18n = createI18n({
  locale: locale.value,
  messages,
});
// 默认导出
export default i18n;

// 工具集

interface USELANGUAGE {
  (): [Ref<string>, (_: "zh_CN" | "en_US") => void];
}

export const useLanguage: USELANGUAGE = () => {
  return [
    locale,
    (_) => {
      locale.value = _; // 保持 hooks 响应式
      i18n.global.locale = _; // 修改 i18n 配置
      sessionStorage.setItem("locale", _); // 持久化存储
    },
  ];
};

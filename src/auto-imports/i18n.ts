import { createI18n } from "vue-i18n";
import { Ref, ref } from "vue";

type TYPELOCALE = "zh_CN" | "en_US";
const messages: {
  [key: string]: {
    [key: string]: object;
  };
} = {};

// 读取文件
const files: { [key: string]: object } = import.meta.glob(
  "../modules/*/locale/*.ts",
  {
    eager: true,
    import: "default",
  }
);

// 遍历文件
for (const url in files) {
  // 获取 模块/语言
  const [name, locale] = url
    .replace(/modules|\.ts|\.?\/?/g, "")
    .split("locale");

  if (name && locale) {
    messages[locale] = messages[locale] || {};
    messages[locale][name] = files[url];
  }
}

// 语言-通过 ref 保持动态更新
const locale: Ref<TYPELOCALE> = ref("zh_CN");

// 实例化
const i18n = createI18n({
  locale: locale.value,
  messages,
});
// 默认导出
export { i18n };

// 工具集
export const useLocale: {
  (): [Ref<TYPELOCALE>, (_: TYPELOCALE) => void];
} = () => {
  return [locale, setLocale];
};

const setLocale = (_locale: TYPELOCALE) => {
  locale.value = _locale; // 保持 hooks 响应式
  i18n.global.locale = _locale; // 修改 i18n 配置
  sessionStorage.setItem("locale", _locale); // 持久化存储
};

// 读取
let _locale = sessionStorage.getItem("locale") || navigator.language;
// 重置
if (_locale !== "zh_CN" && _locale !== "en_US") _locale = "zh_CN";
// 初始化
if (_locale === "zh_CN" || _locale == "en_US") setLocale(_locale);

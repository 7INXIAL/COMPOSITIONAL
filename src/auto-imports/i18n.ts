import { createI18n } from "vue-i18n";
import { Ref, ref, watch } from "vue";

const messages: {
  [key: string]: {
    [key: string]: object;
  };
} = {};

const files: { [key: string]: object } = import.meta.glob(
  "../modules/*/locale/*.ts",
  {
    eager: true,
    import: "default",
  }
);

for (const url in files) {
  const [module, locale] = url
    .replace(/modules|\.ts|\.?\/?/g, "")
    .split("locale");

  if (module && locale) {
    messages[locale] = messages[locale] || {};
    messages[locale][module] = files[url];
  }
}

export const target: Ref<"zh_CN" | "en_US"> = ref("zh_CN");
const n = new Set(["zh_CN", "en_US"]);

const i18n = createI18n({
  locale: target.value,
  messages,
});

watch(target, (k) => {
  if (n.has(k)) {
    i18n.global.locale = k;
  } else {
    throw new Error(`国际化 -${k}- 尚未定义`);
  }
});

export const useLocale = (): typeof target => target;

export { i18n };

import "./global-style.css";
import { useCssVar } from "@vueuse/core";
import { Ref, ref } from "vue";
// 主题替换
const json: Array<[string, [string, string, string]]> = [
  ["--background-color", ["#218a91", "#262a3c", "#9f0404"]],
  ["--color", ["#fff", "#fff", "#fff"]],
  ["--logo-color", ["#9f0404", "#218a91", "#262a3c"]],
  ["--border-color", ["#262a3c", "#9f0404", "#218a91"]],
];

const themes = new Map([
  ["sunny", 0],
  ["night", 1],
  ["star", 2],
]);

// 主题函数-通过 ref 保持动态更新
const style: Ref<"sunny" | "night" | "star"> = ref("sunny");
const el = document.documentElement;
// 初始化
sessionStorage.setItem("style", style.value);

export const useTheme: {
  (): [
    Ref<"sunny" | "night" | "star">,
    (_: "sunny" | "night" | "star") => void
  ];
} = () => {
  return [
    style,
    (_: "sunny" | "night" | "star") => {
      if (!themes.has(_)) throw new Error("请设置正确的主题");

      style.value = _;
      const index: number = themes.get(_) || 0;
      sessionStorage.setItem("style", _);
      // 赋值
      json.forEach(([_k, _v]) => {
        const val = _v.at(index);
        if (val) {
          useCssVar(_k, el).value = val;
        }
      });
    },
  ];
};

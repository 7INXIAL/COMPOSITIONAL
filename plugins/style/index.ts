import { useCssVar } from "@vueuse/core";
import { Ref, ref } from "vue";
import mulberries from "./themes/mulberries.json";
import orange from "./themes/mulberries.json";
import watermelon from "./themes/mulberries.json";

const theme = ref("");
const themes = new Set(["litchi", "mulberries", "orange", "watermelon"]);

theme.value = sessionStorage.getItem("theme") || "litchi";
if (!themes.has(theme.value)) {
  theme.value = "litchi";
}
sessionStorage.setItem("theme", theme.value);

export const useTheme: {
  (): [
    Ref<string>,
    (_: "litchi" | "mulberries" | "orange" | "watermelon") => void
  ];
} = () => {
  return [
    theme,
    (_) => {
      theme.value = _;
      sessionStorage.setItem("theme", _);
      let colors: string[][] = [];
      switch (theme.value) {
        case "mulberries":
          colors = mulberries;
          break;
        case "orange":
          colors = orange;
          break;
        case "watermelon":
          colors = watermelon;
          break;
      }

      const el = document.documentElement;
      colors.forEach(([_k, _v]) => {
        useCssVar(_k, el).value = _v;
      });
    },
  ];
};

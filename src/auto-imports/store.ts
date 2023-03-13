// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = {} as INTERNAL_STORE;

const files = import.meta.glob("../modules/*/store.ts", {
  eager: true,
  import: "default",
}) as {
  [key: string]: () => any;
};

for (const url in files) {
  const key = url.replace(/modules|store\.ts|\.?\/?/g, "");
  store[<keyof INTERNAL_STORE>key] = files[url];
}

export const useStore = (key: keyof INTERNAL_STORE) => {
  if (key in store) {
    return store[key]();
  }
  throw new Error(`状态管理 -${key}- 尚未定义`);
};

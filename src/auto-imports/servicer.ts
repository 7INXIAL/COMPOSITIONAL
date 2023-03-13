// eslint-disable-next-line @typescript-eslint/no-explicit-any
const servicer = {} as INTERNAL_SERVICER;

const files = import.meta.glob("../modules/*/service.ts", {
  eager: true,
  import: "default",
}) as {
  [key: string]: any;
};

for (const url in files) {
  const key = url.replace(/modules|service\.ts|\.?\/?/g, "");
  servicer[<keyof INTERNAL_SERVICER>key] = files[url];
}

export const useServicer = (key: keyof INTERNAL_SERVICER) => {
  if (key in servicer) {
    return servicer[key];
  }
  throw new Error(`服务 -${key}- 尚未定义`);
};

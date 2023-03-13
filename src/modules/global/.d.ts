export {};
// 定义 Store 数据
declare global {
  interface INTERNAL_STORE {
    global: {
      (): {
        text: string;
      };
    };
  }
  interface INTERNAL_SERVICER {
    global: {
      submit: () => Promise<any>;
    };
  }
}

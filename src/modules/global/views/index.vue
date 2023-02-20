<template>
  <!-- 作布局拦截 -->
  <div class="global layout">
    <!-- 单布局 -->
    <el-container v-if="single">
      <router-view v-slot="{ Component, route }">
        <suspense>
          <template #default>
            <component :is="Component" :key="route.path" />
          </template>
          <template #fallback> Loading... </template>
        </suspense>
      </router-view>
    </el-container>

    <!-- 内容布局 -->
    <el-container v-else>
      <el-header height="60px" class="title" style="position: relative">
        <el-icon style="font-size: 36px; margin-right: 36px">
          <Position />
        </el-icon>
        {{ $t("global.logo") }}

        <svg
          v-if="lang === 'zh_CN'"
          class="icon"
          aria-hidden="true"
          style="
            font-size: 32px;
            color: #409eff;
            position: absolute;
            right: 36px;
            cursor: pointer;
          "
          @click="changlanguage('en_US')"
        >
          <use xlink:href="#icon-zhongyingwenqiehuan-zhongwen"></use>
        </svg>

        <svg
          v-else
          class="icon"
          aria-hidden="true"
          style="
            font-size: 32px;
            color: #409eff;
            position: absolute;
            right: 36px;
            cursor: pointer;
          "
          @click="changlanguage('zh_CN')"
        >
          <use xlink:href="#icon-zhongyingwenqiehuan-yingwen"></use>
        </svg>
      </el-header>
      <el-container class="layout-body">
        <el-main>
          <router-view v-slot="{ Component, route }">
            <suspense>
              <template #default>
                <component :is="Component" :key="route.path" />
              </template>
              <template #fallback> Loading... </template>
            </suspense>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const single = computed(() =>
  ["login", "register", "wrong"].some((path) => route.path.includes(path))
);
const [lang, setLanguage] = useLanguage();

const changlanguage = (local: "zh_CN" | "en_US") => {
  setLanguage(local);
};
</script>

<style lang="scss" scoped>
.global {
  width: 100%;
  height: 100%;
  &.layout {
    .title {
      font-size: 24px;
      font-weight: 800;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #030303;
      background-color: #ffd04b;
      color: #030303;
      padding-left: 48px;
    }
    .el-container {
      height: 100%;
    }
    .layout-body {
      height: calc(100% - 60px);
    }
  }
}
</style>

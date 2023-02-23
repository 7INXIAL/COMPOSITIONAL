<template>
  <div class="component-topbar">
    <div class="user">7INXIAL</div>
    <svg class="icon" aria-hidden="true">
      <use
        v-if="theme === 'sunny'"
        @click="setTheme('night')"
        xlink:href="#icon-taiyang"
      ></use>
      <use
        v-if="theme === 'night'"
        @click="setTheme('star')"
        xlink:href="#icon-ClearNight-qing-yewan"
      ></use>
      <use
        v-if="theme === 'star'"
        @click="setTheme('sunny')"
        xlink:href="#icon-xingxing"
      ></use>
    </svg>
    <el-popover placement="bottom" :width="100" trigger="hover">
      <template #reference>
        <span class="iconfont icon-yuyanqiehuan"></span>
      </template>
      <div class="language">
        <div v-if="locale == 'en_US'" @click="setLanguage('zh_CN')">中文</div>
        <div v-if="locale == 'zh_CN'" @click="setLanguage('en_US')">
          English
        </div>
      </div>
    </el-popover>
    <a href="https://github.com/7INXIAL/COMPOSITIONAL" target="_blank">
      <span class="iconfont icon-github"></span
    ></a>
  </div>
</template>
<script lang="ts" setup>
const [locale, setLanguage] = useLocale();
const [theme, setTheme] = useTheme();
</script>

<style lang="scss" scoped>
.component-topbar {
  width: 100%;
  padding: 0 24px;
  border-bottom: 6px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  .user {
    font-weight: bolder;
    font-size: 52px;
    margin-right: auto;
    color: var(--logo-color);
  }
  .language {
    cursor: pointer;
  }
  .icon {
    font-size: 56px;
    line-height: 96px;
    cursor: pointer;
  }
  .iconfont {
    font-size: 42px;
    margin: 0 12px;
    cursor: pointer;
  }
}
</style>

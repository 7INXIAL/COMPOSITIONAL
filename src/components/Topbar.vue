<template>
  <div class="component-topbar">
    <div class="title">7INXIAL</div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-taiyang"></use>
        <!-- <use xlink:href="#icon-ClearNight-qing-yewan"></use> -->
        <!-- <use xlink:href="#icon-xingxing"></use> -->
      </svg>
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <span class="iconfont icon-yuyanqiehuan"></span>
        </template>
        <div class="langu">
          <div>中文</div>
          <div>English</div>
        </div>
      </el-popover>
      <span class="iconfont icon-github"></span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import sunny from "assets/video/sunny.mp4";
</script>

<style lang="scss" scoped>
.component-topbar {
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 2px solid #1e9cbe;

  .title {
    font-size: 36px;
    font-weight: bolder;
    font-size: 52px;
  }
  .icon {
    font-size: 48px;
    line-height: 96px;
  }
  .iconfont {
    font-size: 42px;
    line-height: 96px;
    margin: 0 12px;
  }
}
</style>

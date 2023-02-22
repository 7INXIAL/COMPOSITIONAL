<template>
  <div class="helloworld-wrap">
    <el-row>
      <el-col :span="24">
        <div class="introduce">
          <video autoplay muted loop class="video-el">
            <source :src="car1" type="video/mp4" />
          </video>
          <div class="label">COMPOSITIONAL</div>
          <div class="describe">VITE 基于 VUE 3 的 TypeScript 计划</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="item">
          <div class="label">WHY?</div>
          <div class="content">
            <div>
              COMPOSITIONAL has integrated functions such as request, routing,
              storage, internationalization, and skinning
            </div>
            <div>Engineering and Modular Development</div>
            <div>Imperatively create modules or components</div>
            <div>Automatically import hooks or components</div>
            <div>check the details</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import car1 from "assets/video/car1.mp4";
</script>
<style lang="scss" scoped>
.helloworld-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .introduce {
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: column;
    align-items: center;
    font-size: 72px;
    justify-content: center;
    .describe {
      margin-left: 48px;
      font-size: 24px;
    }
    .video-el {
      height: 250px;
    }
  }

  .item {
    width: 100%;
    height: 100%;
    padding: 24px;

    .label {
      border-bottom: 2px solid seagreen;
      font-size: 36px;
    }
  }
}
</style>

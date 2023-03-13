<template>
  <div class="helloworld-wrap">
    <el-row>
      <el-col :span="24">
        <div class="introduce">
          <video :key="topic" autoplay muted loop class="video-el">
            <source :src="videoUrl" type="video/mp4" />
          </video>
          <div class="label">COMPOSITIONAL</div>
          <div class="describe">{{ $t("helloworld.describe") }}</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="item">
          <div class="label">You should know</div>
          <div class="content">
            <div class="text">{{ $t("helloworld.integrated") }}</div>
            <div class="text">{{ $t("helloworld.modular") }}</div>
            <div class="text">{{ $t("helloworld.imperative") }}</div>
            <div class="text">{{ $t("helloworld.autoimport") }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import car1 from "assets/video/car1.mp4";
import car2 from "assets/video/car2.mp4";
import car3 from "assets/video/car3.mp4";
const topic = useTopic();
const _videoUrl = {
  sunny: car1,
  night: car2,
  star: car3,
};

const videoUrl = computed(() => _videoUrl[topic.value]);
</script>
<style lang="scss" scoped>
.helloworld-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--background-color);
  .introduce {
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: column;
    align-items: center;
    font-size: 72px;
    justify-content: center;
    background-color: #fff;
    color: var(--logo-color);
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
      border-bottom: 2px solid var(--border-color);
      font-size: 36px;
    }
    .content {
      font-size: 16px;
      .text {
        margin: 12px 0;
      }
    }
  }
}
</style>

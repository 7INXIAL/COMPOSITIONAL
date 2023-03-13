<template>
  <!-- 作布局拦截 -->
  <div :class="['global-wrap', single && 'single']">
    <!-- 单布局 -->
    <el-container v-if="single">
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

    <!-- 内容布局 -->
    <el-container v-else>
      <el-header height="60px" style="position: relative">
        <Topbar />
      </el-header>
      <el-container>
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
  ["single"].some((path) => route.path.includes(path))
);
const dfddd = useTopic();
setTimeout(() => {
  dfddd.value = "sunny";
}, 1000);
</script>

<style lang="scss" scoped>
.global-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .el-main {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>

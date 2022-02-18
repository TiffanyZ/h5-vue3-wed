<template>
  <div class="home">
    <!-- :rules="base.rules" -->
    <div>
      <div class="top-img">
        <img v-lazy="base.topImg" alt style="width: 768px;" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, getCurrentInstance } from "vue";
import { homeParam } from "../common/param";

export default {
  name: "Home",
  components: {},
  setup() {
    //显示当前路径(用ctx的话，打包后你就会发现用不了，挂载的属性都没了,建议不要使用)
    const { ctx } = getCurrentInstance();
    // ctx.$message.success("this is message");
    // console.log(ctx.$router.currentRoute.value.path);
    console.log(ctx);

    const base = reactive(homeParam);
    let data = reactive({
      homeList: []
    });

    onMounted(() => {});

    return {
      base,
      data
    };
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@import "../assets/less/home.less";
</style>

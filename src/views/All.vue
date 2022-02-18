<template>
  <div class="all"></div>
</template>

<script>
import { reactive, onMounted, getCurrentInstance } from "vue";
import { homeParam } from "../common/param";

export default {
  name: "All",
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
@import "../assets/less/all.less";
</style>
